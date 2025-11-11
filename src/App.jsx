import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onbuttonValue = (buttonValue) => {
    if (buttonValue === "C") {
      setCalVal("");
    } else if (buttonValue === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else setCalVal(calVal + buttonValue);
  };

  return (
    <center>
      <div className={style.calculator}>
        <Display displayVal={calVal} />
        <ButtonContainer onbuttonValue={onbuttonValue} />
      </div>
    </center>
  );
}

export default App;
