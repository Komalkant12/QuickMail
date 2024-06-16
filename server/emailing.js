var nodemailer = require("nodemailer");
var transpoter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTls: true,
  auth: {
    user: 'komalkantdeshmukh2002@gmail.com',
    pass: "qljg alwj hzms cybb",
  } 
});

var mailOptions = {
  from: "komalkantdeshmukh2002@gmail.com",
  to: "komalkantdeshmukh@gmail.com",
  subject: "final year minor project presentation",
  text: "hello me to me",
  
};

transpoter.sendMail(mailOptions, function(error, info){
    if(error){
       console.log(error);

    }
    else{
        console.log("email has been sent", info.response);
    }
})