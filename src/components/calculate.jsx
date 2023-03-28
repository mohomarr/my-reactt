
import React, {useState} from 'react';

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "=", "c", "/", "**"];


const Calculate = () => {
const [result, setResult] = useState(null);
const [firstNum, setFirstNum] = useState('');
const [secsdNum, setSecsdNum] = useState('');
const [operator, setOperator] = useState(null);

const handlClick = (num) => {
  switch (true) {
    case isNaN(num) && num !== "=" && num !== "c": setOperator(num); break;
    case isNaN(num) && num === "c": setOperator(num); break;
    case isNaN(num) && num === "=":  switch (operator) {
      case "+": setResult(Number(firstNum) + Number(secsdNum));break;
      case "-": setResult(Number(firstNum) - Number(secsdNum));break;
      case "*": setResult(Number(firstNum) * Number(secsdNum));break;
      case "/": setResult(Number(firstNum) / Number(secsdNum));break;
      case "**": setResult(Number(firstNum) ** Number(secsdNum));break;
      default: break;
  }
      break;

  default: operator && num !== "=" && num !== "c"
  ? setSecsdNum((x) => x + num.toString())
  : setFirstNum((x) => x + num.toString());
  break;


  }
}




  return (
    < section  className=" calc-sec m-2">
    <h6 className='h6-calc'> {result || `${firstNum || 0} ${operator || "."} ${secsdNum || 0}`}</h6>

    <div className='calc'>
      {nums.map((num)=>( <div className='calc-div' onClick={()=>{handlClick(num)}} key={num}>{num}</div>))}
    </div>
    </section>



  )
}

export default Calculate;
