import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Upper Case Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); 
  }

  const handleSmlClick = ()=>{
    console.log("Lower Case Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText); 
  }

  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value); 
  }
  let [text, setText] = useState('Enter Text Here...');
  //text = "New text"; // Wrong to change State
  //setText = "New Text"; // Correct way to change State
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3" >
        <textarea className="form-control" style={{background: props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="textarea" rows="7"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Upper Case</button>&nbsp;&nbsp;
        <button  className='btn btn-primary' onClick={handleSmlClick}>Lower Case</button>
      </div>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Summary of Enterd  Text</h1>
        <p>No. of Word ={text.split(" ").length} </p>
        <p>No. of Characters = {text.length} </p>
      </div>    
    </>
  )
}
