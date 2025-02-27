use colored::Colorize;
use std::{
    env,
    fs::{self, DirEntry},
    path::{Path, PathBuf},
};

pub fn walk_dir_and<F>(dir: &Path, callback: &mut F) -> crate::Result
where
    F: FnMut(DirEntry) -> crate::Result,
{
    match fs::read_dir(dir) {
        Ok(entries) => {
            for entry in entries {
                let entry = entry.map_err(|e| e.to_string())?;
                let path = entry.path();
                if path.is_dir() {
                    match path.file_name() {
                        // skip dirs that begin with '.'
                        Some(dir_name) if !dir_name.to_string_lossy().starts_with('.') => {
                            log(format!("[walk_dir_and] recursing in {path:?}").as_str());
                            walk_dir_and(&path, callback)?;
                        }
                        _ => {}
                    };
                } else {
                    log(format!("[walk_dir_and] calling callback on {path:?}").as_str());
                    callback(entry)?;
                }
            }
        }
        Err(e) => log(format!("[walk_dir_and] could not read {dir:?}. {e:?}",).as_str()),
    }

    Ok(())
}

pub fn log(s: &str) {
    println!("{}", s.purple())
}

pub fn get_home_dir() -> PathBuf {
    let home_dir = env::var_os("HOME")
        .or_else(|| env::var_os("USERPROFILE"))
        .map(PathBuf::from)
        .unwrap_or_else(|| PathBuf::from("C:\\"));

    log(format!("[get_store_path] home dir: {home_dir:?}").as_str());
    home_dir
}
