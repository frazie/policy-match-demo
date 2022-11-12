const shared = require('../apis/sharedInsurancePlans');
const individual = require('../apis/individualInsurancePlans');


module.exports = {
    setQuotes: async (req,res)=>{
        
       res.render("quotes.ejs")
    },
    getQuotes: async (req,res)=>{
        const sharedPlan = await shared;
        const individualPlan = await individual;

        let limit = req.body.inpatientLimit;
        let insurance = req.body.insuranceType;
        let firstName = req.body.firstName;
        let age = req.body.ageBracket;
        let spouse = req.body.spouseInclude;
        let child = req.body.childInclude;
        let dental = req.body.dentalInclude;
        let maternity = req.body.maternityInclude;
        let optical = req.body.opticalInclude;
                
        console.log(req.body)
        
        if (insurance == 'shared'){
            res.render("covers.ejs", {
                Cover: sharedPlan, 
                limit: limit, 
                insurance: insurance, 
                firstName: firstName,
                age: age,
                spouse: spouse,
                child: child,
                dental: dental,
                maternity: maternity,
                optical: optical,
            });
        } else{
            res.render("covers.ejs", {Cover: individualPlan, 
                limit: limit,
                insurance: insurance, 
                firstName: firstName,
                age: age,
                spouse: spouse,
                child: child,
                dental: dental,
                maternity: maternity,
                optical: optical,
            });
        };
       
    },

}