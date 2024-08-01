import React, { useState } from 'react'

const Cal = () => {

    let [input,setInput]=useState('')

    let handleClear=()=>{
        setInput('')
    }

    let handleClick=(value)=>{
        setInput(input+value)
    }

    let handleCalculator=()=>{
        try{
            setInput(eval(input))
        }catch(error){
            setInput("ERROR")
        }
    }
  return (
    <div className='c'>
        <input type='text' value={input} readOnly/> 
        <table className='cal'>
            <tr>
                <td><button onClick={handleClear}>CE</button></td>
                <td><button onClick={()=>{handleClick('(')}}>(</button></td>
                <td><button onClick={()=>{handleClick(')')}}>)</button></td>
                <td><button onClick={()=>{handleClick('/')}}>/</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>{handleClick('7')}}>7</button></td>
                <td><button onClick={()=>{handleClick('8')}}>8</button></td>
                <td><button onClick={()=>{handleClick('9')}}>9</button></td>
                <td><button  onClick={()=>{handleClick('*')}}>*</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>{handleClick('4')}}>4</button></td>
                <td><button onClick={()=>{handleClick('5')}}>5</button></td>
                <td><button onClick={()=>{handleClick('6')}}>6</button></td>
                <td><button  onClick={()=>{handleClick('-')}}>-</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>{handleClick('3')}}>3</button></td>
                <td><button onClick={()=>{handleClick('2')}}>2</button></td>
                <td><button onClick={()=>{handleClick('1')}}>1</button></td>
                <td><button  onClick={()=>{handleClick('+')}}>+</button></td>
            </tr>
            <tr>
                <td><button>+/-</button></td>
                <td><button onClick={()=>{handleClick('0')}}>0</button></td>
                <td><button onClick={()=>{handleClick('.')}}>.</button></td>
                <td><button onClick={handleCalculator}>=</button></td>
            </tr>
        </table>
    </div>
  )
}

export default Cal
