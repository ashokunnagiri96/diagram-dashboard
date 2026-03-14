import React from "react";

function UploadBox({ setImage, setFileName }) {

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  return (
    <div style={{padding:"20px",borderBottom:"1px solid #ccc"}}>
      <h2>Upload Diagram</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
}

export default UploadBox;