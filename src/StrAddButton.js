import React from "react";

const StrAddButton = () => {
  const addString = () => {
    console.log("=====addString=====");
  };

  return (
    <div>
      <input value="+100" type="button" onClick={addString} />
    </div>
  );
};

export default StrAddButton;
