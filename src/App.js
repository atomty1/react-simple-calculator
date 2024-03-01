import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [val, setVal] = useState("0");
 
    const displayVal = newVal=>{
      if(val === "0"){
        setVal(newVal);
      } else{
        setVal(val + newVal);
      }
       
    }
    const clearScreen = ()=>{
      setVal("0");
    }
    const evalValues = ()=>{
      let result = eval(val);
      setVal(result);
    }
    const removeLast = ()=>{
      if(val.length === 1){
        setVal("0");
      } else{
        let result = val.slice(0, -1);
        setVal(result);
      }
      
    }
  return (
    <div className="App">
        <table>
          <tbody>
          <tr>
            <td colSpan="4"><input value={val} disabled/></td>
          </tr>
          <tr>
            <td><button onClick={()=>displayVal("1")}>1</button></td>
            <td><button onClick={()=>displayVal("2")}>2</button></td>
            <td><button onClick={()=>displayVal("3")}>3</button></td>
            <td><button onClick={()=>displayVal("+")}>+</button></td>
          </tr>
          <tr>
            <td><button onClick={()=>displayVal("4")}>4</button></td>
            <td><button onClick={()=>displayVal("5")}>5</button></td>
            <td><button onClick={()=>displayVal("6")}>6</button></td>
            <td><button onClick={()=>displayVal("-")}>-</button></td>
          </tr>
          <tr>
            <td><button onClick={()=>displayVal("7")}>7</button></td>
            <td><button onClick={()=>displayVal("8")}>8</button></td>
            <td><button onClick={()=>displayVal("9")}>9</button></td>
            <td><button onClick={()=>displayVal("*")}>*</button></td>
          </tr>
          <tr>
            <td><button onClick={removeLast}>Del</button></td>
            <td><button onClick={clearScreen}>C</button></td>
            <td colSpan="2"><button onClick={evalValues}>=</button></td>
           
          </tr>

          </tbody>
          
        </table>
    </div>
  );
}

export default App;
