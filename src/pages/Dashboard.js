import React, { useState, useEffect } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";
import { getComponents } from "../services/api";

function Dashboard() {

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setComponents(getComponents());
  }, []);

  return (
    <div>

      <UploadBox setImage={setImage} setFileName={setFileName} />

      {fileName && (
        <p style={{ paddingLeft: "20px" }}>
          Uploaded: {fileName}
        </p>
      )}

      <div style={{ display: "flex", height: "80vh" }}>

        <div style={{ flex: 3 }}>
          <DiagramViewer image={image} />
        </div>

        <div style={{ flex: 1 }}>
          <ComponentList
            components={components}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;