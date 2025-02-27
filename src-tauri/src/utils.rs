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
                    if !should_skip(&path) {
                        log(format!("[walk_dir_and] recursing in {path:?}").as_str());
                        walk_dir_and(&path, callback)?;
                    }
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

fn should_skip(path: &Path) -> bool {
    match path.file_name() {
        // skip dirs that begin with '.'
        Some(dir_name) if dir_name.to_string_lossy().starts_with('.') => return true,
        _ => {}
    };

    let skip_dirs = [
        // System directories (cross-platform)
        "AppData",
        "Program Files",
        "Program Files (x86)",
        "Windows",
        "System32",
        "Temp",
        "System",
        // Development tools
        "node_modules",
        "target",
        "build",
        "dist",
        "out",
        "obj",
        "env",
        "venv",
        "bower_components",
        "vendor",
        "gradle",
        "mvn",
        "npm",
        "yarn",
        "jspm",
        "pip",
        "docker",
        "docker-compose",
    ];

    path.components()
        .any(|component| skip_dirs.contains(&component.as_os_str().to_str().unwrap_or_default()))
}
