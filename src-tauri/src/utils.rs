use colored::Colorize;
use std::{
    fs::{self, DirEntry},
    path::Path,
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
                    log(format!("[walk_dir_and] recursing in {path:?}").as_str());
                    walk_dir_and(&path, callback)?;
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
