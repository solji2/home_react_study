import React from "react";
import { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  console.log("sum:", sum);
  return sum / numbers.length;
};

//편균값 구하기
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const insert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
  };

  return (
    <div>
      <input value={number} onChange={onChange}></input>
      <button onClick={insert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
