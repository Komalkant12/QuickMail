// EmailForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import './Emailform.css'

const EmailForm = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const onFormSubmit = (data) => {
    // Handle form submission, including data and attached files
    console.log(data);
    console.log(acceptedFiles);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the backend
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, subject, message }),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
    // Define dropzoneStyles here
    const dropzoneStyles = {
      border: '2px dashed #cccccc',
      borderRadius: '4px',
      padding: '20px',
      textAlign: 'center',
      cursor: 'pointer',
    };

  return (
    <div><>
    // navbar
    <nav className="navbar sticky-top">
    <div className="container">
      
        <a href="#" className="logo">QuickMail</a>
        <div style={{color: "black"}} className="menu-toggle" id="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <ul  className="menu" id="menu">
            <li><a href="#carouselExampleControls">HOME</a></li>
            <li><a href="#card-section">ABOUT</a></li>
            <li><a href="#case">BLOG</a></li>
            <li><a href="#Use">REFERENCE</a></li>
            <li><a href="#footer">CONTACT</a></li>
        </ul>
       <a href="login.html"> <button className= "login"> Login </button></a> 
    </div>
</nav>


{/* form */}
<h3 className="text" style={{textAlign: "center"}}></h3>
<div className="contaner">

    <form id="emailGeneratorForm" onSubmit={handleSubmit}>
  
      <div>
      <h3 className="text" style={{textAlign: "center"}}>COMPOSE  EMAIL </h3>
        <label htmlFor="to">To:</label>
        <input
          type="email"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
</div>

      <div  {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p style={{color: "black"}} >Drag 'n' drop some files here, or click to select files</p>
      </div>
      {acceptedFiles.length > 0 && (
        <div>
          <p>Attached Files:</p>
          <ul>
            {acceptedFiles.map((file) => (
              <li key={file.path}>{file.path}</li>
            ))}
          </ul>
        </div> 
          )}
      <button id='send' type="submit">Send 📩</button>
    </form>
    </div>

    {/* <!-- Footer --> */}
<div id="footer">
<footer className="footer">
  
 
  <div className="footer-content">
    <div className="slide-1">
        <h5>Links</h5>
        <p></p>
        <div>
            <a href="#"><img src="png-transparent-computer-icons-facebook-blog-facebook-logo-desktop-wallpaper-facebook-icon-removebg-preview.png" alt="" className="img"/></a>
            <a href="#"><img src="75-755741_png-instagram-logo-black-outline-transparent-png-removebg-preview.png" alt="" className="img"/></a>
            <a href="#"><img src="pngimg.com_-_twitter_PNG2-removebg-preview.png" alt="" className="img"/></a>
        </div>
    </div>
    <div className="slide-2">
        <h5>About us</h5>
        <ul>
            <li><span>prekshadeshmukh@gmail.com</span></li>
            <li><span>Aditya</span></li>
            <li><span>komal</span></li>
            <li><span>yogesh</span></li>
        </ul>
    </div>
    <div className="slide-3">
        <h5>Navigational</h5>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
    </div>
    <div>
        <h5>Office</h5>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
<h3>&copy;www.QuickMail.com</h3> 
</footer>
</div>
    </>
    </div>
  );
};

export default EmailForm;
