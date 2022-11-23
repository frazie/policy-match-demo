const insurance = require('../apis/insurancePlans');


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
                
        console.log(req.body)
        
        res.render("covers.ejs", {
            Cover: insurancePlan, 
            limit: limit, 
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

}