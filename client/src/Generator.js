import React, { useState } from 'react';
import './generator.css';

// import { Link } from "react-router-dom";


function Generator() {
    const [subject, setSubject] = useState('');
    const [purpose, setPurpose] = useState('');
    const [emailBody, setEmailBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://quick-mail-nine.vercel.app/generate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, purpose }),
      });

      if (response.ok) {
        const data = await response.json();
        const formattedEmailBody = data.emailBody.replace(/\n/g, '<br />');
        setEmailBody(formattedEmailBody);
      } else {
        console.error('Error:', response.statusText);
        // Handle error cases here
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle network or other errors here
    }
  };

  return (
<div>
  <>
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

{/* <!-- carausel section --> */}

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://aiseo.ai/templates/Updated%20-%20Email%20Generator/images/image4.png" alt="First slide"/>
        <div className="carousel-text">
          <h1 className="text">Use QuickMail </h1>
          <h4 >To generatate & write an attractive email with the help of AI</h4>
          {/* <!-- <button style="height: 50px;">LEARN MORE</button> -->
          <!-- <h5> IT....................................    An advanced software solution designed to identify and flag potentially fake accounts on various social media platforms.</h5> --> */}
         
            
          </div>
          <button style={{height: "50px", width: "80px"}}>READ MORE</button>
    </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://aiseo.ai/templates/Updated%20-%20Email%20Generator/images/image1.png" alt="Third slide"/>
        <div className="carousel-text">
          <h1 className="text">Use QuickMail</h1>
          <h3 >To generatate & write an attractive email with the help of AI</h3>
          {/* <!-- <button href="#" style="height: 50px;">READ MORE</button> --> */}
          
         {/* <!-- <h5 >An advanced software solution designed to identify and flag potentially fake accounts on various social media platforms.</h5> --> */}
        </div>   
        <button style={{height: "50px", width: "80px"}} ><h5>More</h5></button>
    </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
    
  {/* <!-- card section --> */}
   <div id="card-section">
      <div className="cards">
        <h2 className="text">IMPACTS AND BENEFITS</h2>

      <div className="container" style={{marginLeft:"120px", padding:"50px"}}>

        <div className="row">
          <div className="col-sm">
            <div className="card" style={{width: "15rem", height: "29rem"}}>
                <img className="card-img-top" src="https://aiseo.ai/templates/Updated%20-%20Email%20Generator/images/image16.png" height="10px" width="30px"  alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Time Savings:</h5>
                  <p className="card-text">Automatic email generators can save a considerable amount of time by eliminating the need to manually compose and send emails for repetitive tasks. </p>
                  <button href="#">READ MORE</button>
                </div>
              </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{width: "15rem", height: "29rem"}}>
                <img className="card-img-top" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" height="10px" width="30px" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title"> Compliance</h5>
                  <p className="card-text">Email generators can help ensure that your emails comply with legal and regulatory requirements, such as including necessary disclaimers or opt-out options.</p>
                 <button href="#">READ MORE</button>
                </div>
              </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{width: "15rem", height: "29rem"}}>
                <img className="card-img-top" src="https://aiseo.ai/templates/Updated%20-%20Email%20Generator/images/image3.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Reduced Errors:</h5>
                  <p className="card-text"> The Automatic email generators can reduce incorrect recipient addresses  , or other mistakes that can occur when emails are composed manually.</p>
                  <button href="#">READ MORE</button>
                </div>
              </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{width: "15rem", height: "29rem"}}>
                <img className="card-img-top" src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"  alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Data Security & Privacy</h5>
                  <p className="card-text">AI Email Writer prioritizes user security. All generated content is kept confidential, ensuring that ur data remain private and protected.</p>
                  <button href="#" >READ MORE</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  {/* use */}
  <div style={{backgroundColor:"#ffff"}}>
  <h3 className="text" id="Use">HOW TO USE</h3>
    <div className="row" >
          
        <div className="col-sm-4" >
          <div className="card" style={{border: "none"}}>
            
            <div className="card-body" style={{border: "none"}}>
                <h4 className="h4" style={{color: "black"}}>1</h4>
              <h5 className="card-title">Choose purpose of Email</h5>
              <p className="card-text">Mention the purpose of email you want the AI Email to write.
              </p>
              
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{border: "none"}}>
            
            <div className="card-body">
                <h4 className="h4" style={{color: "black"}}>2</h4>
              <h5 className="card-title">Enter Your Prompt</h5>
              <p className="card-text">Use the Additional information text box to write your prompt.This can include any instructions or specific knowledge you want the AI Email Writer to have.</p>
              
            </div>
          </div>
        </div>
        <div className="col-sm-4">
            <div className="card" style={{border: "none"}}>
              <div className="card-body">
                <h4 className="h4" style={{color: "black"}}>3</h4>
                <h5 className="card-title">Genarate Email</h5>
                <p className="card-text">Once you submit the form, the AI Email Writer will genrate an email based on your preferences for you to use.</p>
               
              </div>
            </div>
          </div>
          </div>
      </div>
    

    {/* generator */}
        <h3 className="text" style={{textAlign: "center"}}>GENERATE EMAIL </h3>
        <div className="contaner">
            <h4 className="text" style={{textAlign: "center"}}>COMPOSE EMAIL</h4>
            <form id="emailGeneratorForm" onSubmit={handleSubmit}>
                <label for="Subject">Subject</label>
                <input className="input" type="text"  value={subject} onChange={(e) => setSubject(e.target.value)} id="Subject" name="Subject"  placeholder="Enter your email subject here...," required />

                <label for="purpose">Purpose</label>
                <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} id="purpose" name="Purpose" placeholder="Enter your email purpose here...," required />

                <button id="button" type="submit" style={{textAlign: "center"}}><h5>GENERATE</h5></button>
            </form>
            {emailBody && (
                <div>
                <h2 style={{color: "black"}}>Generated Email:</h2>
                <p style={{color: "black"}} dangerouslySetInnerHTML={{ __html: emailBody }}></p>
                </div>
            )}
        </div>
   {/* send */}
        <div className="send">
  <h3 className="text">Let's try this to Send a Email</h3>
  <a href="../frontend/send.html"> <button id="send" >SEND</button></a> 
</div>

{/* <!-- use-case --> */}
  <div id="case" className="Usecase" style={{backgroundColor:"#ffff"}}>
  <h3 className="text">DIVERSE USE-CASE</h3>
  <div className="card" style={{border: "none"}}>
    <h6 style={{textalign: "center" ,color: "black", textAlign:"center" , fontFamily: "'Roboto', sans-serif, importent!"}}>.The versatility of Toolsaday's AI Email Writer is one of its strongest assets. No matter the context, whether it's a business seeking to strengthen its brand image or an individual looking to improve their personal communication, our AI solution steps up to the plate. The modern world demands swift, accurate, and tailored communication, and with this tool, users can meet these demands effortlessly. Its adaptability ensures that each message sent, regardless of the purpose, is articulate and purpose-driven.</h6>
   
    </div>
    <div className="card-body">
      <h5 className="card-title">➡️For Customer Support</h5>
      <p className="card-text">Reduce response time and ensure consistent quality in your customer service communications.</p>
      
    </div>
    
    <div className="card-body">
      <h5 className="card-title">➡️For Marketing Campaigns</h5>
      <p className="card-text">Craft compelling newsletters and promotional content that resonates with your audience.

      </p>
      
    </div>
    
    <div className="card-body">
      <h5 className="card-title">➡️For Personal Use</h5>
      <p className="card-text">Even for individual users, generate well-structured, professional, or friendly emails for various occasions.</p>
      
    </div>
    
    <div className="card-body">
      <h5 className="card-title">➡️Join the AI Revolution</h5>
      <p className="card-text">Don't be left behind in the digital age. Join countless satisfied users who have enhanced their email communication with the power of AI. Start using Toolsaday's AI Email Writer today and experience the difference.</p>
      
    </div>
   
</div>
 

  {/* <!-- Workflow --> */}
<div className="workflow">
  <h3 className="text">CHOOSE QUICKMAIL FOR WORKFLOW & AUTOMATION </h3>
  <div className="row" style={{textAlign: "center", paddingLeft: "20%"}}>
      <div className="col-sm-3">
        <div className="card" style={{border: "none"}}>
          <div className="card-body" style={{backgroundColor:  "#d9d8d8"}} >
             <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="" className="icon"/>
            <h5 className="card-title">Email Automation</h5>
            <p className="card-text">Automate outbound email campaigns and set up automatic email responders for customer service emails</p>
           
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card" style={{border: "none"}}>
          <div className="card-body" style={{backgroundColor:  "#d9d8d8"}}>
              <img src="https://www.slideteam.net/media/catalog/product/cache/330x186/d/a/data_replication_transfer_data_robot_colored_icon_in_powerpoint_pptx_png_and_editable_eps_format_slide01.jpg" alt="" className="icon"/>
            <h5 className="card-title">Automated Data Extraction</h5>
            <p className="card-text">Nanonets OCR offers ready to made data extraction models that extract relevant fields and tables from all document types.</p>
           
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card" style={{border: "none"}}>
         
          <div className="card-body" style={{backgroundColor:  "#d9d8d8"}}>
              <img src="https://global-uploads.webflow.com/64be86eaa29fa71f24b00685/64be86eaa29fa71f24b00d5b_629609a1a4f89a53f1e97e69_Understanding%2520AP%2520Automation%2520Main%2520Image.png"  alt="" className="icon"/>
            <h5 className="card-title">Accounts Payable Automation</h5>
            <p className="card-text">Nanonets and Flow by Nanonets offer end-to-end AP automation integrated with AI and OCR technology to streamline and automate payment workflows.</p>
           
          </div>
        </div>
      </div>
    </div>
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
  )
}

export default Generator