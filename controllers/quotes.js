const shared = require('../apis/sharedInsurancePlans');
const individual = require('../apis/individualInsurancePlans');


module.exports = {
    setQuotes: async (req,res)=>{
        let sharedInsurance = 'yes';
        const sharedPlan = await shared;
        const individualPlan = await individual;

        // console.log(sharedPlan.insuranceCompanies)
        if (sharedInsurance == 'yes'){
            res.render("quotes.ejs", {Cover: sharedPlan});
        } else{
            res.render("quotes.ejs", {Cover: individualPlan});
        };
       
    },
    getQuotes: async (req,res)=>{
        let limit = req.body.inpatientLimit;
        let sharedInsurance = 'yes';
        const sharedPlan = await shared;
        const individualPlan = await individual;

        
        console.log(req.body)
        // console.log(sharedPlan.insuranceCompanies)
        if (sharedInsurance == 'yes'){
            res.render("covers.ejs", {Cover: sharedPlan, limit: limit});
        } else{
            res.render("covers.ejs", {Cover: individualPlan});
        };
       
    },

}