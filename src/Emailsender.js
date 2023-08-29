import React,{useState} from 'react'
import emailjs from "emailjs-com"
import "./Email.css"
function EmailSender() {

    const [name,setName]=useState("")
     
    const submit =(e)=>{
       e.preventDefault()

        emailjs.sendForm("service_x7knge5","template_fglb3hq",e.target,"fpTXiXLihts4Zk-r_")
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
    }

    const change =()=>{
       setName(<p style={{color:"green",fontSize:"19px"}}>Successfully send</p>)
    }

  return (  
  <center>  
    <h1 style={{color:'white'}}>Email sender</h1>
    <p>{name}</p>
    <div id='emaildiv'>
     

        <form onSubmit={submit} >
          <lable className="lb">Name</lable><br/>
          <input name='name' placeholder='name'  type='text'   className='input' /><br/>
          <lable className="lb"> Email</lable><br/>
          <input name='email' placeholder='email' type='email' className='input' /><br/>
          <lable className="lb">Message</lable><br/>

          <textarea name='message' type="message" rows={15} cols={20} className='message'/><br/>
          <input type='submit' className='inbtn' onClick={change}/>

        </form>
      
    </div>
    </center>
  )
}

export default EmailSender
