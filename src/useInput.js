import React, { useState } from "react";

/*
초기값, 검증 함수 받아서 입력값 실시간 검증
*/
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

/*
사용예제 
const App = () => {
  const maxLen = value => !value.includes("@"); 
  const name = useInput("Ms. ", maxLen); 
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
*/
