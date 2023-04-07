import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
  // console.log("Uppercase was clicked" + text); 
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoclick=()=>{
        //   console.log("Lowercase was clicked" + text); 
          let newText=text.toLowerCase();
          setText(newText)
          props.showAlert("Converted to lowercase!","success");
      }

    const handlecopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard!","success");
    }
            
    const handleClearclick=()=>{ 
    let newText=" ";
    setText(newText)
  props.showAlert("Text Cleared!","success"); 
}
    const handleExtraSpaces =()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("extra spaces removed!","success"); 
    }

    const handleOnchange=(event)=>{
        // console.log("On change"); 
        setText(event.target.value); 
    }
    const [text, setText]=useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#13446e':'white',
    color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearclick}>Clear text</button>
  </div>

    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2> 
    <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
</>
  )
}
