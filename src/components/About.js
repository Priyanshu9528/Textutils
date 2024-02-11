import React, { useState } from 'react'

export default function About() {

    const[myStyle,setMyStyle]= useState ({
        color:'black',
        backgroundColor:'white'
    })

    const[btntext,setBtnText]= useState("Enable Dark Mode")

 const toggleStyle=()=>{
        if(myStyle.color==='black'){
        setMyStyle({
            color:'white',
            backgroundColor:'black',
            border: ' 1px solid white '
        })
        setBtnText("Enable Light Mode")
    }
    else{
        setMyStyle({
            color:'black',
            background:'white'
        })
        setBtnText("Enable Dark Mode")
    }
}

  return (
    <div className="container" style={myStyle}>
    <h2 className='my-3'>About Us</h2>
    <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Convert Text
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Textutils simplifies text manipulation by offering a range of conversion options. Easily transform your text into uppercase or lowercase with just a click, ensuring consistency and clarity in your documents. Whether you need to shout a message in uppercase or create a more subdued tone in lowercase, Textutils makes it effortless.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Space Management
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
         Say goodbye to cluttered text with Textutils' space management feature. Remove extra spaces from your text with ease, ensuring clean and organized content. Whether you're tidying up a document for presentation or optimizing text for readability, Textutils ensures your message is conveyed effectively without unnecessary distractions.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Text Management and Preview
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Textutils provides convenient text management options alongside a preview feature for a comprehensive editing experience. Easily copy text to clipboard for quick sharing or further editing. Additionally, Textutils offers a preview of your text, allowing you to visualize the final appearance before making any changes. Whether you're fine-tuning a document or preparing content for publication, Textutils empowers you to edit with precision and confidence.
        </div>
      </div>
    </div>
  </div>
  <div className="container my-3">
  <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
  </div>
 </div>
  )
}
