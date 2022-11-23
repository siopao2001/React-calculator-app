import React, {useState} from 'react';
import Button from './Button';


export default function Table() {
  const [display, setDisplay] = useState('')

  function screen(event) {
     setDisplay(prev => prev + event.target.innerText)
  }

  return (
    <table>
       <tr>
         <td className="input" colSpan="4"><input value={display} readOnly /></td>
       </tr>
       <tr>
         <td><Button screen={screen} >(</Button></td>
         <td><Button screen={screen} >CE</Button></td>
         <td><Button screen={screen} >)</Button></td>
         <td><Button screen={screen} >C</Button></td>
       </tr>
         <td><Button screen={screen} >1</Button></td>
         <td><Button screen={screen} >2</Button></td>
         <td><Button screen={screen} >3</Button></td>
         <td><Button screen={screen} >+</Button></td>
       <tr>
         <td><Button screen={screen} >4</Button></td>
         <td><Button screen={screen} >5</Button></td>
         <td><Button screen={screen} >6</Button></td>
         <td><Button screen={screen} >-</Button></td>
       </tr>
         <td><Button screen={screen} >7</Button></td>
         <td><Button screen={screen} >8</Button></td>
         <td><Button screen={screen} >9</Button></td>
         <td><Button screen={screen} >*</Button></td>
       <tr>
         <td><Button screen={screen} >.</Button></td>
         <td><Button screen={screen} >0</Button></td>
         <td><Button screen={screen} >=</Button></td>
         <td><Button screen={screen} >/</Button></td>
       </tr>
     </table>
 
 )
}