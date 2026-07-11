const express =require('express')
const app = express()
const nodemailer = require("nodemailer");
const dotenv =require('dotenv')
const multer = require("multer");

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')



const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
app.get('/',(req,res)=>{
    res.render('mail',{message:null})
})

app.post('/send-mail',upload.single("attachment"),async (req,res)=>{
    const {to,subject,text}=req.body
    try {
  const info = await transporter.sendMail({
    from: `"iqbal khan"  <${process.env.SMTP_USER}>`, // sender address
    to: to, // list of recipients
    subject: subject, // subject line
    text: text, // plain text body
    // html: "<b>Hello world?</b>", // HTML body
     attachments: [
                {
                    filename: req.file.originalname,
                    path: req.file.path
                }
            ]
  });

  res.json({
    message: "Message sent successfully",
    info: info
});
//   res.render("mail", {    message: "Email sent successfully!"});
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
} catch (err) {
   console.error("Error while sending mail:", err);
    res.status(500).send("Failed to send email");
}
})

app.listen(4000, ()=>console.log('server is running'))