import React from "react";
import Files from "react-files";
import "./Input.scss";
import icon from "../../assets/images/default-image.png";
const FileDropzone = ({ file, onChange, label }) => {
  const handleError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  console.log({ file });

  return (
    <div className="files">
      {label ? <p className="input-lable">{label}</p> : null}
      <Files
        className="files-dropzone"
        onChange={(e) => {
          onChange(e);
        }}
        onError={handleError}
        accepts={["image/png", ".pdf", "audio/*"]}
        multiple
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        <div className="d-flex flex-column align-items-center">
          {file.length && file[0].name ? (
            <img
              src={file[0].name}
              className="preview-icon"
              alt="file-drop-img"
            />
          ) : (
            <img src={icon} alt="file-drop-img" />
          )}
          <p className="file-name">
            {file.length ? file[0].name : "Choose picture from your gallery"}
          </p>
        </div>
      </Files>
    </div>
  );
};

export default FileDropzone;
