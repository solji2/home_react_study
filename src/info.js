import React from "react";
import UseInputs from "./useInputs";

const info = () => {
  const [state, onChange] = UseInputs({
    name: "", // initialForm
    nickName: "", // initialForm
  });
  const { name, nickName } = state; //useInputs에 보낼 state

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickName" value={nickName} onChange={onChange} />
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
      </div>
      <div>
        <div>
          <b>닉네임:</b>
          {nickName}
        </div>
      </div>
    </div>
  );
};

export default info;
