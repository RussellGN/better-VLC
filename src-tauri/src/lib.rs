mod commands;
mod constants;
mod structs;
mod utils;

use commands::{get_videos, load_and_save_new_media};

pub type Result<T = ()> = std::result::Result<T, String>;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![load_and_save_new_media, get_videos])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
