import React from 'react';
import Button from './Button';


export default function Table() {
  return (
    <table>
       <tr>
         <td className="input" colspan="4"><input/></td>
       </tr>
       <tr>
         <td><Button>(</Button></td>
         <td><Button >CE</Button></td>
         <td><Button >)</Button></td>
         <td><Button >C</Button></td>
       </tr>
         <td><Button >1</Button></td>
         <td><Button >2</Button></td>
         <td><Button >3</Button></td>
         <td><Button >+</Button></td>
       <tr>
         <td><Button >4</Button></td>
         <td><Button >5</Button></td>
         <td><Button >6</Button></td>
         <td><Button >-</Button></td>
       </tr>
         <td><Button >7</Button></td>
         <td><Button >8</Button></td>
         <td><Button >9</Button></td>
         <td><Button >*</Button></td>
       <tr>
         <td><Button >.</Button></td>
         <td><Button >0</Button></td>
         <td><Button >=</Button></td>
         <td><Button >/</Button></td>
       </tr>
     </table>
 
 )
}