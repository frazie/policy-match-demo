const shared = require('../apis/sharedInsurancePlans');
const individual = require('../apis/individualInsurancePlans');


module.exports = {
    getQuotes: async (req,res)=>{
        let sharedInsurance = 'yes';
        const sharedPlan = await shared;
        const individualPlan = await individual;

        // console.log(sharedPlan.insuranceCompanies)
        if (sharedInsurance == 'yes'){
            res.render("quotes.ejs", {Cover: sharedPlan});
        } else{
            res.render("quotes.ejs", {Cover: individualPlan});
        };
       
    }
}