import { useState } from "react";

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  const onChangeNum1 = (e) => {
    setNum1(e.target.value);
  };
  const onChangeNum2 = (e) => {
    console.log(num2);
    setNum2(e.target.value);
  };

  const checkNum = (n1, n2) => {
    if (n1 === "" || n2 === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (isNaN(n1) || isNaN(n2)) {
      alert("숫자를 입력해주세요.");
      return;
    }
  };
  const onClickAdd = () => {
    checkNum(num1, num2);
    setResult(parseInt(num1) + parseInt(num2));
  };
  const onClickSubstract = () => {
    checkNum(num1, num2);
    setResult(parseInt(num1) - parseInt(num2));
  };
  const onClickMultiply = () => {
    checkNum(num1, num2);
    setResult(parseInt(num1) * parseInt(num2));
  };
  const onClickDivide = () => {
    checkNum(num1, num2);
    setResult(parseInt(num1) / parseInt(num2));
  };
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">
        Awesome한 계산기(로 바뀔 예정)
      </h1>
      <div className="text-3xl font-black mb-4">{result}</div>
      <div className="mb-4">
        <input
          type="text"
          className="border-2 focus:outline-none focus: border-purple-400 rounded-lg px-4 py-2 text-xl"
          value={num1}
          onChange={onChangeNum1}
        />
        <input
          type="text"
          className="border-2 focus:outline-none focus: border-purple-400 rounded-lg px-4 py-2 text-xl ml-4"
          value={num2}
          onChange={onChangeNum2}
        />
      </div>
      <div>
        <button
          className="border-2 px-2 py-1 rounded-lg border-red-500 text-red-500"
          onClick={onClickAdd}
        >
          Add
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-blue-500 text-blue-500 ml-4"
          onClick={onClickSubstract}
        >
          Substract
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-purple-500 text-purple-500 ml-4"
          onClick={onClickMultiply}
        >
          Multiply
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-green-500 text-green-500 ml-4"
          onClick={onClickDivide}
        >
          Divide
        </button>
      </div>
    </div>
  );
}

export default App;
