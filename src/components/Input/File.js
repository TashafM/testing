import React from "react";
import Files from "react-files";
import "./Input.scss";
import icon from "../../assets/images/default-image.png";
import cross from "../../assets/images/cross-icon.png";
const FileDropzone = ({
  file,
  onChange,
  handleError,
  label,
  setFile,
  required = false,
}) => {
  return (
    <div className="files">
      {label ? (
        <p className={`input-lable ${required ? " required-field" : ""}`}>
          {label}
        </p>
      ) : null}
      <Files
        className={`${
          file.length
            ? "files-dropzone without-border-dropzone"
            : "files-dropzone"
        }`}
        onChange={(e) => {
          onChange(e);
        }}
        onError={handleError}
        accepts={["image/png", "image/jpeg", "image/jpg", "image/svg"]}
        multiple
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        <div className="d-flex flex-column align-items-center">
          {file.length && file[0].name ? (
            <div className="img-parent-preview">
              <img
                src={file[0]?.preview ? file[0]?.preview?.url : file[0].name}
                className="preview-icon"
                alt="file-drop-img"
              />
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  setFile([]);
                }}
                src={cross}
                alt="cross-icon"
                className="cross-icon-container"
              />
            </div>
          ) : (
            <img src={icon} alt="file-drop-img" className="default-file-icon" />
          )}
          {!file.length && (
            <p className="file-name">Choose picture from your gallery</p>
          )}
        </div>
      </Files>
    </div>
  );
};

export default FileDropzone;
