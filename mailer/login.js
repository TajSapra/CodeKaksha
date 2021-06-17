const tokeninput=require('../tokens/tokens');
const nodeMailer=require('../config/nodemailer');

exports.login=(user)=>{
    console.log(user)
    let Htmlstring= nodeMailer.renderTemplate({
        user:user,
        date:Date()
    }, '/loginmail.ejs');
    nodeMailer.transporter.sendMail({
        from:tokeninput.emailid,
        to:user.email,
        subject:"Log in alert",
        html:Htmlstring
    },function(err,info){
        if(err){
            console.log(err)
        }
        console.log(info)
    });
}