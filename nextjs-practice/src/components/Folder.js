import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className={explorer.isFolder ? "mt-[5px]" : "file"}>
      {explorer.isFolder ? (
        <>
          <div className="cursor-pointer" onClick={() => setExpand(!expand)}>
            <span>📂 {explorer.name}</span>
          </div>
          <div
            style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
          >
            {explorer.items &&
              explorer.items.map((exp, index) => (
                <Folder key={index} explorer={exp} />
              ))}
          </div>
        </>
      ) : (
        <span>📄 {explorer.name}</span>
      )}
    </div>
  );
};

export default Folder;
