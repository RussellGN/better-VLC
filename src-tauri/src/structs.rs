use std::path::{Path, PathBuf};

use serde::Serialize;

use crate::utils::log;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Video {
    id: String,
    title: String,
    src: PathBuf,
    thumbnail: Option<String>,
}

impl Video {
    pub fn build(path: &Path) -> crate::Result<Self> {
        log(format!("[video::build] building video from {path:?}",).as_str());

        let name = path
            .file_name()
            .ok_or("[video::build] video-build: could not access file name")?
            .to_string_lossy()
            .to_string();

        Ok(Self {
            id: name.clone(),
            title: name.clone(),
            src: path.to_path_buf(),
            thumbnail: None,
        })
    }
}
