const individualInsurancePlans = {
    insuranceCompanies: ([
        {   insuranceCompany: 'Jubilee Health Insurance Company',
            //insuranceCompany: string
        insuranceCoverPlans : [
        {   coverName: 'J Care Junior',
                //coverName: string
            InsurancePlanOptions: [
                {   inpatientRates : { coverLimit: 500_000,
                        //coverLimit: number 
                    ageLimits : [
                        {
                            ageBracket: '0-17 years',
                            //ageBracket: string 
                            principal: 18_743 ,
                            //principal: number 
                        },
                    ]
                   },
                   outpatientRates: {
                    //coverLimit: 50_000,
                    coverLimit: number ,
                    ageLimits : [
                        {
                            ageBracket: '0-17 years',
                            //ageBracket: string
                           principal: 24_917 ,
                            //principal: number ,
                        },
                    ],
                   },
                   secondaryCoverFeatures : {
                        maternityCover: {
                            amountOffered: 0,
                            //amountOffered: number
                            coverPremium: 0,
                            //coverPremium: number
                            coverStatus: 'maternity cover is not offered in this option',
                            //coverStatus: string
                        },      
                        dentalCover: {
                            amountOffered: 5_000,
                            //amountOffered: number
                            coverPremium: 2_415,
                            //coverPremium: number
                            coverStatus: 'The dental is limited to per person per year',
                            //coverStatus: string
                        }, 
                        opticalCover: {
                            amountOffered: 5_000,
                            //amountOffered: number
                            coverPremium: 2_415,
                            //coverPremium: number
                            coverStatus: 'The optical is limited to per person per year',
                            //coverStatus: string
                        },
                        hospitalCovered: {
                            supportedFacilities: 'supports Tier 1, Tier 2 but not Tier 3 facilities'
                        },
                        co_payments: {
                            support: 'should state if this is supported or not'
                        },
                        preExisting_Conditions: {
                            coverStatus: 'all pre-existing conditions will be activated after 1 year'
                        },
                    }
                },
                
                ]
        },
       
        ],
        insuranceTaxAndPremiumExclusiveRate: {
        stampDuty: 40,
        percentageTax: 0.45,
        },
    },
])
}