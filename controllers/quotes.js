const insurance = require('../apis/insurancePlans');
const nodemailer = require('nodemailer');
const cheerio = require('cheerio')

module.exports = {
    setQuotes: async (req,res)=>{
       res.render("quotes.ejs")
    },
    getQuotes: async (req,res)=>{
        const insurancePlan = await insurance;
        
        let limit = req.body.inpatientLimit;
        let firstName = req.body.firstName;
        let age = req.body.ageBracket;
        let spouse = req.body.spouseInclude;
        let child = req.body.childInclude;
        let dental = req.body.dentalInclude;
        let maternity = req.body.maternityInclude;
        let optical = req.body.opticalInclude;
        let childNumber = req.body.NumberOfChildren;
        let spouseAge = req.body.spouseAge;
        let email = req.body.email;
                
        console.log(req.body)
        
        res.render("coverEmailTest.ejs", {
            Cover: insurancePlan, 
            limit: limit, 
            email: email,
            insurance: insurance, 
            firstName: firstName,
            age: age,
            spouse: spouse,
            child: child,
            dental: dental,
            maternity: maternity,
            optical: optical,
            children: childNumber,
            spouseAge: spouseAge,
        });
       
    },
    sendEmail: async (req, res) => {
        var html = req.body.html

        const $ = cheerio.load(html)

        const userEmail = $('#userEmail').text()
        
        function sendToEmail(){
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.nodeEmail,
                    pass: process.env.nodePass
                }
            })

            const mailOptions = {
                from: process.env.senderEmail,
                to: userEmail,
                subject: 'YOUR INSURANCE QUOTATION FROM POLICYMATCH',
                html
            }

            transporter.sendMail(mailOptions, function (error, info){
                if(error){
                    console.log(error)
                } else {
                    console.log('Email sent: ' + info.response)
                }
            })
        }

        sendToEmail()

        console.log(userEmail)

    }

}