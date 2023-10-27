import React, { useMemo } from "react";
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

  const avg = useMemo(() => getAverage(list), [list]); //렌더링 과정에서 list의 값이 바뀌었을때만 연산을 실행
  //list배열의 내용이 바뀔 때만 getAverage 함수호출
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
        {avg}
      </div>
    </div>
  );
};

export default Average;
