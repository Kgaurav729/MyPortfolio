import React, { useState } from "react";
import './Chatbot.css';

const Chatbot = ({onClose})=>{
    const [step,setStep]=useState(0);
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    });

const handleInputChange=(e)=>{
    const{name,value}=e.target;
    setFormData((prevData)=>({
        ...prevData,
        [name]:value
    }));
};

const handleNext=()=>{
    setStep(step+1);
};

const questions=[
    {name:'name',question: 'What is your Name?'},
    {name:'email',question:'What is your email'},
    {name:'message',question:'Tell me a little about the job inquiry.'}
];

return(
    <div className="chatbot-container">
        <div className="chatbot-header">
            <h4>Job Inquiry</h4>
            <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="chatbot-body">
            {step <questions.length ?(
                <>
                    <p>{questions[step].question}</p>
                    <input 
                        type="text"
                        name={questions[step].name}
                        value={formData[questions[step].name]}
                        onChange={handleInputChange}
                        placeholder="'Type your answer..."
                    />
                    <button className="next-btn" onClick={handleNext} disabled={!formData[questions[step].name]}>
                        Next
                    </button>
                </>
            ) : (
                <div>
                    <h5>THanks for your responses!</h5>
                    <p>We'll get back to you shortly</p>
                    <button onClick={onClose} className='close-btn'>Close</button>
                </div>
            )}
        </div>
    </div>
);

};

export default Chatbot;