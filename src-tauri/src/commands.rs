use std::{ffi::OsStr, path::Path};

use crate::{
    constants::STORE_NAME,
    structs::Video,
    utils::{log, walk_dir_and},
};
use serde_json::json;
use tauri::{AppHandle, Emitter, Runtime};
use tauri_plugin_store::StoreExt;

#[tauri::command]
pub fn load_and_save_new_media<R: Runtime>(app: AppHandle<R>) -> crate::Result<Vec<Video>> {
    app.emit("media-search-started", ()).map_err(|e| e.to_string())?;
    log(format!("[load_and_save_new_media] media-search-started").as_str());
    let store = app.store(STORE_NAME).map_err(|e| e.to_string())?;
    let mut video_paths = vec![];
    let mut emitted_media_count = 0;

    log(format!("[load_and_save_new_media] starting dir walk").as_str());
    walk_dir_and(Path::new("/"), &mut |entry| {
        let path = entry.path();
        if let Some(valid_utf8_ext) = path.extension().unwrap_or(OsStr::new("")).to_str() {
            if valid_utf8_ext.to_lowercase() == "mp4" || valid_utf8_ext.to_lowercase() == "mpeg4" {
                log(format!("[load_and_save_new_media] found mp4 file: {path:?}").as_str());
                video_paths.push(path.into_os_string());
            }
        };

        // emit media count event every 10 new entries
        let length = video_paths.len();
        if length % 10 == 0 && emitted_media_count < length {
            app.emit("media-load-count", length).map_err(|e| e.to_string())?;
            log(format!("[load_and_save_new_media] {length} mp4 files found").as_str());
            emitted_media_count = length;
        }

        Ok(())
    })?;

    app.emit("media-save-started", ()).map_err(|e| e.to_string())?;
    log(format!("[load_and_save_new_media] media-save-started").as_str());

    let length = video_paths.len();

    let video_paths = video_paths
        .into_iter()
        .map(|m| m.to_string_lossy().to_string())
        .collect::<Vec<String>>();

    let mut videos = vec![];
    for str_path in video_paths.iter() {
        videos.push(Video::build(Path::new(str_path))?);
    }

    store.set("videos", video_paths);
    app.emit("media-search-save-ended", length).map_err(|e| e.to_string())?; // TODO: Also send number of non-utf8 paths
    log(format!("[load_and_save_new_media] media-search-save-ended, items saved: {length}").as_str());

    Ok(videos)
}

#[tauri::command]
pub fn get_videos<R: Runtime>(app: tauri::AppHandle<R>) -> crate::Result<Vec<Video>> {
    log(format!("[get_videos] getting videos...").as_str());
    let store = app.store(STORE_NAME).map_err(|e| e.to_string())?;
    let video_str_paths = store.get("videos").unwrap_or(json!(Vec::<Vec<String>>::new()));
    let video_str_paths: Vec<String> = serde_json::from_value(video_str_paths).map_err(|e| e.to_string())?;
    log(format!("[get_videos] got {} video paths from store", video_str_paths.len(),).as_str());

    let mut videos = vec![];
    for str_path in video_str_paths.iter() {
        videos.push(Video::build(Path::new(str_path))?);
    }
    log(format!("[get_videos] built {} Video instances", videos.len(),).as_str());

    Ok(videos)
}
