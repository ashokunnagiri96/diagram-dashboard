import React from "react";

function ComponentList({ components, selected, setSelected }) {

  return (
    <div style={{padding:"20px",borderLeft:"1px solid gray"}}>
      <h3>Components</h3>

      {components.map((c)=>(
        <div
          key={c.id}
          onClick={()=>setSelected(c.id)}
          style={{
            padding:"10px",
            margin:"5px",
            background:selected===c.id ? "green":"lightgray",
            color:selected===c.id ? "white":"black",
            cursor:"pointer"
          }}
        >
          {c.name}
        </div>
      ))}

    </div>
  );
}

export default ComponentList;