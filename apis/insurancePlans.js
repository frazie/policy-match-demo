const individualInsurancePlans = {
    insuranceCompanies: [
        {   insuranceCompany: 'Madison Insurance Company',
            insuranceCoverPlans : [
                {  coverName: 'Madison Betterlife Premier Plan',
                    InsurancePlanOptions: [
                        {   inpatientRates : { coverLimit: 3_000_000,
                            ageLimits : [{
                                '18-29 years': {
                                    principal: 42_600 ,
                                    spouse: 38_400 ,
                                    child: 27_700 ,
                                },
                                '30-39 years': {
                                    principal: 42_600 ,
                                    spouse: 38_400 ,
                                    child: 27_700 ,
                                },
                                '40-49 years': {
                                    principal: 42_600 ,
                                    spouse: 38_400 ,
                                    child: 27_700 ,
                                },
                                '50-60 years': {
                                    principal: 61_800 ,
                                    spouse: 55_600 ,
                                    child: 27_700 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [{
                                '18-49 years': {
                                    principal: 54_900 ,
                                    spouse: 49_400 ,
                                    child: 35_700 ,
                                },
                                '50-60 years': {
                                    principal: 79_600 ,
                                    spouse: 71_600 ,
                                    child: 35_700 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 150_000,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums',
                                    coverPremium: 44_500,
                                },      
                                dentalCover: {
                                    amountOffered: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                    coverPremium: 0,
                                }, 
                                opticalCover: {
                                    amountOffered: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                    coverPremium: 0,
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
                        {   inpatientRates : { coverLimit: 4_000_000,
                             ageLimits : [{
                                '18-29 years': {
                                    principal: 46_600,
                                    spouse: 42_000,
                                    child: 30_300,
                                },
                                '30-39 years': {
                                    principal: 46_600,
                                    spouse: 42_000,
                                    child: 30_300,
                                },
                                '40-49 years': {
                                    principal: 46_600,
                                    spouse: 42_000,
                                    child: 30_300,
                                },
                                '50-60 years': {
                                    principal: 67_600,
                                    spouse: 60_900,
                                    child: 30_300,
                                },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : [{
                                '18-29 years': {
                                    principal: 57_400 ,
                                    spouse: 51_600 ,
                                    child: 37_300 ,
                                },
                                '30-39 years': {
                                    principal: 57_400 ,
                                    spouse: 51_600 ,
                                    child: 37_300 ,
                                },
                                '40-49 years': {
                                    principal: 57_400 ,
                                    spouse: 51_600 ,
                                    child: 37_300 ,
                                },
                                '50-60 years': {
                                    principal: 83_200 ,
                                    spouse: 74_900 ,
                                    child: 37_300 ,
                                },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 200_000,
                                     coverStatus: 'The cover plan only supported upto the age of 49 years',
                                     coverPremium: 47_000,
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                     coverPremium: 0,
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                     coverPremium: 0,
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
                        {   inpatientRates : { coverLimit: 5_000_000,
                             ageLimits : [{
                                '18-29 years': {
                                    principal: 49_500,
                                    spouse: 44_500,
                                    child: 32_200,
                                },
                                '30-39 years': {
                                    principal: 49_500,
                                    spouse: 44_500,
                                    child: 32_200,
                                },
                                '40-49 years': {
                                    principal: 49_500,
                                    spouse: 44_500,
                                    child: 32_200,
                                },
                                '50-60 years': {
                                    principal: 71_700,
                                    spouse: 64_500,
                                    child: 32_200,
                                },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 200_000,
                             ageLimits : [{
                                '18-29 years': {
                                    principal: 59_900,
                                    spouse: 53_900,
                                    child: 38_900,
                                },
                                '30-39 years': {
                                    principal: 59_900,
                                    spouse: 53_900,
                                    child: 38_900,
                                },
                                '40-49 years': {
                                    principal: 59_900,
                                    spouse: 53_900,
                                    child: 38_900,
                                },
                                '50-60 years': {
                                    principal: 86_800,
                                    spouse: 78_200,
                                    child: 38_900,
                                },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverStatus: 'The cover plan only supported upto the age of 49 years',
                                     coverPremium: 0,
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                     coverPremium: 0,
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                     coverPremium: 0,
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
                {  coverName: 'Madison Betterlife Executive Plan',
                    InsurancePlanOptions: [
                        {  inpatientRates : {  coverLimit: 1_000_000,
                            ageLimits : [{
                                '18-29 years': {
                                    principal: 26_600,
                                    spouse: 23_900,
                                    child: 17_300,
                                },
                                '30-39 years': {
                                    principal: 26_600,
                                    spouse: 23_900,
                                    child: 17_300,
                                },
                                '40-49 years': {
                                    principal: 26_600,
                                    spouse: 23_900,
                                    child: 17_300,
                                },
                                '50-60 years': {
                                    principal: 61_800 ,
                                    spouse: 55_600 ,
                                    child: 17_300,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [{
                                '18-29 years': {
                                    principal: 52_400,
                                    spouse: 47_100,
                                    child: 34_000,
                                },
                                '30-39 years': {
                                    principal: 52_400,
                                    spouse: 47_100,
                                    child: 34_000,
                                },
                                '40-49 years': {
                                    principal: 52_400,
                                    spouse: 47_100,
                                    child: 34_000,
                                },
                                '50-60 years': {
                                    principal: 75_900,
                                    spouse: 68_300,
                                    child: 34_000,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 100_000,
                                    coverPremium: 41_700,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                },      
                                dentalCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
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
                        {  inpatientRates : {  coverLimit: 1_500_000,
                             ageLimits : [{
                                '18-29 years': {
                                     principal: 30_100,
                                     spouse: 27_100,
                                     child: 19_600,
                                 },
                                 '30-39 years': {
                                     principal: 30_100,
                                     spouse: 27_100,
                                     child: 19_600,
                                 },
                                 '40-49 years': {
                                     principal: 30_100,
                                     spouse: 27_100,
                                     child: 19_600,
                                 },
                                 '50-60 years': {
                                     principal: 43_600,
                                     spouse: 39_200,
                                     child: 19_600,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : [{
                                 '18-29 years': {
                                     principal: 54_900,
                                     spouse: 49_400,
                                     child: 35_700,
                                 },
                                 '30-39 years': {
                                     principal: 54_900,
                                     spouse: 49_400,
                                     child: 35_700,
                                 },
                                 '40-49 years': {
                                     principal: 54_900,
                                     spouse: 49_400,
                                     child: 35_700,
                                 },
                                 '50-60 years': {
                                     principal: 79_600,
                                     spouse: 71_600,
                                     child: 35_700,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 150_000,
                                     coverPremium: 44_500,
                                     coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
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
                        {  inpatientRates : {  coverLimit: 2_000_000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 33_600,
                                     spouse: 30_200,
                                     child: 21_800,
                                 },
                                 '30-39 years': {
                                     principal: 33_600,
                                     spouse: 30_200,
                                     child: 21_800,
                                 },
                                 '40-49 years': {
                                     principal: 33_600,
                                     spouse: 30_200,
                                     child: 21_800,
                                 },
                                 '50-60 years': {
                                     principal: 48_700,
                                     spouse: 43_800,
                                     child: 21_800,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 0,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '30-39 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '40-49 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '50-60 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
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
                {  coverName: 'Madison Betterlife Ignite Plan',
                    InsurancePlanOptions: [
                        {  inpatientRates : {  coverLimit: 500_000,
                            ageLimits : [{
                                '18-29 years': {
                                    principal: 18_400,
                                    spouse: 0,
                                    child: 0,
                                },
                                '30-39 years': {
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                                '40-49 years': {
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                                '50-60 years': {
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [{
                                '18-29 years': {
                                    principal: 21_100,
                                    spouse: 0,
                                    child: 0,
                                },
                                '30-39 years': {
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                                '40-49 years': {
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                                '50-60 years': {
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                },      
                                dentalCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
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
                        {  inpatientRates : {  coverLimit: 1_000_000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 21_200,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '30-39 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '40-49 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '50-60 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 75_000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 23_900,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '30-39 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '40-49 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '50-60 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
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
                {  coverName: 'Madison Betterlife Budget Plan',
                    InsurancePlanOptions: [
                        {  inpatientRates : {  coverLimit: 500_000,
                            ageLimits : [{
                                '18-29 years': {
                                    principal: 15_400,
                                    spouse: 13_900,
                                    child: 10_000,
                                },
                                '30-39 years': {
                                    principal: 15_400,
                                    spouse: 13_900,
                                    child: 10_000,
                                },
                                '40-49 years': {
                                    principal: 15_400,
                                    spouse: 13_900,
                                    child: 10_000,
                                },
                                '50-60 years': {
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [{
                                '18-29 years': {
                                    principal: 17_500,
                                    spouse: 15_700,
                                    child: 11_400,
                                },
                                '30-39 years': {
                                    principal: 17_500,
                                    spouse: 15_700,
                                    child: 11_400,
                                },
                                '40-49 years': {
                                    principal: 17_500,
                                    spouse: 15_700,
                                    child: 11_400,
                                },
                                '50-60 years': {
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 30_000,
                                    coverPremium: 18_400,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49 years',
                                },      
                                dentalCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
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
                        {  inpatientRates : {  coverLimit: 1_000_000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 21_200,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '30-39 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '40-49 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '50-60 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 75_000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 23_900,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '30-39 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '40-49 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 '50-60 years': {
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
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
                percentageTax: 0.01,
            },
        },
        {   insuranceCompany: 'UAP Old Mutual Insurance Company',
            insuranceCoverPlans : [
                {   coverName: 'UAP Old Mutual Afyaimara Junior',
                    InsurancePlanOptions: [
                        {   inpatientRates : { coverLimit: 500_000,
                            ageLimits : [{
                                '0-19 years': {
                                    'M': 32_954 ,
                                    'M+1': 51_785 ,
                                    'M+2': 68_262 ,
                                    'M+3': 82_385 ,
                                    'M+4': 98_438 ,
                                    'M+5': 116_162 ,
                                    'Extra Child': 17_724 ,
                                },
                                
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [{
                                '0-19 years': {
                                    'M': 24_990 ,
                                    'M+1': 46_232 ,
                                    'M+2': 46_463 ,
                                    'M+3': 46_618 ,
                                    'M+4': 46_734 ,
                                    'M+5': 46_828 ,
                                    'Extra Child': 454 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                },      
                                dentalCover: {
                                    amountOffered: 7_000,
                                    coverPremium: 0,
                                    coverStatus: 'Dental cover is provided within out patient insurance',
                                }, 
                                opticalCover: {
                                    amountOffered: 7_000,
                                    coverPremium: 0,
                                    coverStatus: 'Dental cover is provided within out patient insurance',
                                },
                                hospitalCovered: {
                                    supportedFacilities: 'supports Tier 1, Tier 2 but not Tier 3 facilities'
                                },
                                co_payments: {
                                    support: 'Supported in several institution with a minimum fee 500'
                                },
                                preExisting_Conditions: {
                                    coverStatus: 'all pre-existing conditions will be activated after 1 year'
                                },
                            }
                        },
                        {   inpatientRates : { coverLimit: 1_000_000,
                             ageLimits : [{
                                 '0-19 years': {
                                     'M': 34_602 ,
                                     'M+1': 54_374 ,
                                     'M+2': 71_675 ,
                                     'M+3': 86_504 ,
                                     'M+4': 103_360 ,
                                     'M+5': 121_970 ,
                                     'Extra Child': 18_611 ,
                                 },
                                 
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 75_000,
                             ageLimits : [{
                                 '0-19 years': {
                                     'M': 26_240 ,
                                     'M+1': 48_543 ,
                                     'M+2': 51_109 ,
                                     'M+3': 55_941 ,
                                     'M+4': 60_754 ,
                                     'M+5': 63_217 ,
                                     'Extra Child': 649 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 10_000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 10_000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 },
                                 hospitalCovered: {
                                     supportedFacilities: 'supports Tier 1, Tier 2 but not Tier 3 facilities'
                                 },
                                 co_payments: {
                                     support: 'Supported in several institution with a minimum fee 500'
                                 },
                                 preExisting_Conditions: {
                                     coverStatus: 'all pre-existing conditions will be activated after 1 year'
                                 },
                             }
                        },
                        {   inpatientRates : { coverLimit: 3_000_000,
                             ageLimits : [{
                                 '0-19 years': {
                                     'M': 37_716 ,
                                     'M+1': 59_267 ,
                                     'M+2': 80_469 ,
                                     'M+3': 99_004 ,
                                     'M+4': 116_042 ,
                                     'M+5': 132_948 ,
                                     'Extra Child': 20_286 ,
                                 },
                                 
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 100_000,
                             ageLimits : [{
                                 '0-19 years': {
                                     'M': 28_076 ,
                                     'M+1': 51_941 ,
                                     'M+2': 54_687 ,
                                     'M+3': 67_129 ,
                                     'M+4': 78_981 ,
                                     'M+5': 85_343 ,
                                     'Extra Child': 974 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 15_000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 15_000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 },
                                 hospitalCovered: {
                                     supportedFacilities: 'supports Tier 1, Tier 2 but not Tier 3 facilities'
                                 },
                                 co_payments: {
                                     support: 'Supported in several institution with a minimum fee 500'
                                 },
                                 preExisting_Conditions: {
                                     coverStatus: 'all pre-existing conditions will be activated after 1 year'
                                 },
                             }
                        },
                        {   inpatientRates : { coverLimit: 5_000_000,
                             ageLimits : [{
                                 '0-19 years': {
                                     'M': 40_356 ,
                                     'M+1': 67_260 ,
                                     'M+2': 90_800 ,
                                     'M+3': 110_978 ,
                                     'M+4': 131_156 ,
                                     'M+5': 151_334 ,
                                     'Extra Child': 21_706 ,
                                 },
                                 
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : [{
                                 '0-19 years': {
                                     'M': 30_042 ,
                                     'M+1': 55_577 ,
                                     'M+2': 58_515 ,
                                     'M+3': 80_555 ,
                                     'M+4': 102_675 ,
                                     'M+5': 115_213 ,
                                     'Extra Child': 1_363 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 15_000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 15_000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 },
                                 hospitalCovered: {
                                     supportedFacilities: 'supports Tier 1, Tier 2 but not Tier 3 facilities'
                                 },
                                 co_payments: {
                                     support: 'Supported in several institution with a minimum fee 500'
                                 },
                                 preExisting_Conditions: {
                                     coverStatus: 'all pre-existing conditions will be activated after 1 year'
                                 },
                             }
                        },
                        {   inpatientRates : { coverLimit: 500_000,
                             ageLimits : [{
                                 '0-19 years': {
                                     'M': 29_538 ,
                                     'M+1': 49_231 ,
                                     'M+2': 66_462 ,
                                     'M+3': 81_231 ,
                                     'M+4': 96_000 ,
                                     'M+5': 110_769 ,
                                     'Extra Child': 14_769 ,
                                 },
                                 
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 50_000,
                             ageLimits : [{
                                 '0-19 years': {
                                     'M': 19_250 ,
                                     'M+1': 35_613 ,
                                     'M+2': 35_791 ,
                                     'M+3': 35_910 ,
                                     'M+4': 36_000 ,
                                     'M+5': 36_072 ,
                                     'Extra Child': 350 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 7_000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 7_000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 },
                                 hospitalCovered: {
                                     supportedFacilities: 'The cover applies to Gertrudes Childrens Hospital only'
                                 },
                                 co_payments: {
                                     support: 'Supported in several institution with a minimum fee 500'
                                 },
                                 preExisting_Conditions: {
                                     coverStatus: 'all pre-existing conditions will be activated after 1 year'
                                 },
                             }
                        },
                        {   inpatientRates : { coverLimit: 1_000_000,
                              ageLimits : [{
                                  '0-19 years': {
                                      'M': 31_015 ,
                                      'M+1': 51_692 ,
                                      'M+2': 69_785 ,
                                      'M+3': 85_292 ,
                                      'M+4': 100_800 ,
                                      'M+5': 116_308 ,
                                      'Extra Child': 15_508 ,
                                  },
                                  
                              }]
                             },
                             outpatientRates: {
                              coverLimit: 75_000,
                              ageLimits : [{
                                  '0-19 years': {
                                      'M': 20_213 ,
                                      'M+1': 37_393 ,
                                      'M+2': 39_370 ,
                                      'M+3': 43_092 ,
                                      'M+4': 46_800 ,
                                      'M+5': 48_697 ,
                                      'Extra Child': 500 ,
                                  },
                              }],
                             },
                             secondaryCoverFeatures : {
                                  maternityCover: {
                                      amountOffered: 0,
                                      coverPremium: 0,
                                      coverStatus: 'The cover plan does not offer this',
                                  },      
                                  dentalCover: {
                                      amountOffered: 10_000,
                                      coverPremium: 0,
                                      coverStatus: 'Dental cover is provided within out patient insurance',
                                  }, 
                                  opticalCover: {
                                      amountOffered: 10_000,
                                      coverPremium: 0,
                                      coverStatus: 'Dental cover is provided within out patient insurance',
                                  },
                                  hospitalCovered: {
                                      supportedFacilities: 'supports Tier 1, Tier 2 but not Tier 3 facilities'
                                  },
                                  co_payments: {
                                      support: 'Supported in several institution with a minimum fee 500'
                                  },
                                  preExisting_Conditions: {
                                      coverStatus: 'all pre-existing conditions will be activated after 1 year'
                                  },
                              }
                        },
                        {   inpatientRates : { coverLimit: 3_000_000,
                              ageLimits : [{
                                  '0-19 years': {
                                      'M': 34_117 ,
                                      'M+1': 56_862 ,
                                      'M+2': 76_763 ,
                                      'M+3': 93_822 ,
                                      'M+4': 110_880 ,
                                      'M+5': 127_938 ,
                                      'Extra Child': 17_058 ,
                                  },
                                  
                              }]
                             },
                             outpatientRates: {
                              coverLimit: 100_000,
                              ageLimits : [{
                                  '0-19 years': {
                                      'M': 23_244 ,
                                      'M+1': 43_002 ,
                                      'M+2': 45_275 ,
                                      'M+3': 51_710 ,
                                      'M+4': 60_839 ,
                                      'M+5': 65_741 ,
                                      'Extra Child': 750 ,
                                  },
                              }],
                             },
                             secondaryCoverFeatures : {
                                  maternityCover: {
                                      amountOffered: 0,
                                      coverPremium: 0,
                                      coverStatus: 'The cover plan does not offer this',
                                  },      
                                  dentalCover: {
                                      amountOffered: 15_000,
                                      coverPremium: 0,
                                      coverStatus: 'Dental cover is provided within out patient insurance',
                                  }, 
                                  opticalCover: {
                                      amountOffered: 15_000,
                                      coverPremium: 0,
                                      coverStatus: 'Dental cover is provided within out patient insurance',
                                  },
                                  hospitalCovered: {
                                      supportedFacilities: 'supports Tier 1, Tier 2 but not Tier 3 facilities'
                                  },
                                  co_payments: {
                                      support: 'Supported in several institution with a minimum fee 500'
                                  },
                                  preExisting_Conditions: {
                                      coverStatus: 'all pre-existing conditions will be activated after 1 year'
                                  },
                              }
                        },
                        {   inpatientRates : { coverLimit: 5_000_000,
                              ageLimits : [{
                                  '0-19 years': {
                                      'M': 37_529 ,
                                      'M+1': 62_548 ,
                                      'M+2': 84_439 ,
                                      'M+3': 103_204 ,
                                      'M+4': 121_968 ,
                                      'M+5': 140_732 ,
                                      'Extra Child': 18_764 ,
                                  },
                                }]
                             },
                             outpatientRates: {
                              coverLimit: 150_000,
                              ageLimits : [{
                                  '0-19 years': {
                                      'M': 26_731 ,
                                      'M+1': 49_452 ,
                                      'M+2': 52_066 ,
                                      'M+3': 62_052 ,
                                      'M+4': 79_091 ,
                                      'M+5': 88_750 ,
                                      'Extra Child': 1_050 ,
                                  },
                              }],
                             },
                             secondaryCoverFeatures : {
                                  maternityCover: {
                                      amountOffered: 0,
                                      coverPremium: 0,
                                      coverStatus: 'The cover plan does not offer this',
                                  },      
                                  dentalCover: {
                                      amountOffered: 15_000,
                                      coverPremium: 0,
                                      coverStatus: 'Dental cover is provided within outpatient insurance',
                                  }, 
                                  opticalCover: {
                                      amountOffered: 15_000,
                                      coverPremium: 0,
                                      coverStatus: 'Dental cover is provided within outpatient insurance',
                                  },
                                  hospitalCovered: {
                                      supportedFacilities: 'supports Tier 1, Tier 2 but not Tier 3 facilities'
                                  },
                                  co_payments: {
                                      support: 'Supported in several institution with a minimum fee 500'
                                  },
                                  preExisting_Conditions: {
                                      coverStatus: 'all pre-existing conditions will be activated after 1 year'
                                  },
                              }
                        },
                        
                    ]
                },
                {   coverName: 'UAP Old Mutual Afyaimara Family',
                    InsurancePlanOptions: [
                        {   inpatientRates : { coverLimit: 500_000,
                            ageLimits : [{
                                '18-29 years': {
                                    principal: 32_257 ,
                                    spouse: 23_900 ,
                                    child: 13_929 ,
                                },
                                '30-39 years': {
                                    principal: 33_863 ,
                                    spouse: 25_023 ,
                                    child: 13_929 ,
                                },
                                '40-49 years': {
                                    principal: 38_059 ,
                                    spouse: 26_128 ,
                                    child: 13_929 ,
                                },
                                '50-59 years': {
                                    principal: 55_550 ,
                                    spouse: 31_575 ,
                                    child: 13_929 ,
                                },
                                '60-65 years': {
                                    principal: 55_550 ,
                                    spouse: 31_575 ,
                                    child: 13_929 ,
                                },
                                '66+ years': {
                                    principal: 82_829 ,
                                    spouse: 64_526 ,
                                    child: 13_929 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : {
                                'All ages': [{
                                    'M': 32_934 ,
                                    'M+1': 44_986 ,
                                    'M+2': 48_748 ,
                                    'M+3': 48_797 ,
                                    'M+4': 48_846 ,
                                    'M+5': 49_339 ,
                                    'M+6': 49_837 ,
                                }],
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                },      
                                dentalCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
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
                        {   inpatientRates : { coverLimit: 1_000_000,
                             ageLimits : [{
                                 '19-29 years': {
                                     principal: 34_284 ,
                                     spouse: 25_582 ,
                                     child: 17_102 ,
                                 },
                                 '30-40 years': {
                                     principal: 35_223 ,
                                     spouse: 26_785 ,
                                     child: 17_102 ,
                                 },
                                 '41-50 years': {
                                     principal: 39_385 ,
                                     spouse: 27_925 ,
                                     child: 17_102 ,
                                 },
                                 '51-65 years': {
                                     principal: 56_704 ,
                                     spouse: 34_484 ,
                                     child: 17_102 ,
                                 },
                                 '66+ years': {
                                     principal: 95_227 ,
                                     spouse: 78_683 ,
                                     child: 17_102 ,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 60_000,
                             ageLimits : [{
                                 'All ages': {
                                     'M': 33_266 ,
                                     'M+1': 49_269 ,
                                     'M+2': 48_748 ,
                                     'M+3': 54_844 ,
                                     'M+4': 57_804 ,
                                     'M+5': 58_095 ,
                                     'M+6': 58_387 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
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
                        {   inpatientRates : { coverLimit: 3_000_000,
                             ageLimits : [{
                                 '19-29 years': {
                                     principal: 49_172 ,
                                     spouse: 38_516 ,
                                     child: 26_795 ,
                                 },
                                 '30-40 years': {
                                     principal: 52_342 ,
                                     spouse: 40_457 ,
                                     child: 26_795 ,
                                 },
                                 '41-50 years': {
                                     principal: 62_185 ,
                                     spouse: 46_043 ,
                                     child: 26_795 ,
                                 },
                                 '51-65 years': {
                                     principal: 76_889 ,
                                     spouse: 50_161 ,
                                     child: 26_795 ,
                                 },
                                 '66+ years': {
                                     principal: 142_417 ,
                                     spouse: 115_311 ,
                                     child: 26_795 ,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 100_000,
                             ageLimits : [{
                                 'All ages': {
                                     'M': 35_226 ,
                                     'M+1': 66_533 ,
                                     'M+2': 82_895 ,
                                     'M+3': 98_147 ,
                                     'M+4': 98_245 ,
                                     'M+5': 99_028 ,
                                     'M+6': 99_282 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
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
                        {   inpatientRates : { coverLimit: 5_000_000,
                             ageLimits : [{
                                 '19-29 years': {
                                     principal: 53_025 ,
                                     spouse: 41_671 ,
                                     child: 28_496 ,
                                 },
                                 '30-40 years': {
                                     principal: 56_437 ,
                                     spouse: 43_799 ,
                                     child: 28_496 ,
                                 },
                                 '41-50 years': {
                                     principal: 62_634 ,
                                     spouse: 46_446 ,
                                     child: 28_496 ,
                                 },
                                 '51-65 years': {
                                     principal: 82_030 ,
                                     spouse: 54_280 ,
                                     child: 28_496 ,
                                 },
                                 '66+ years': {
                                     principal: 162_180 ,
                                     spouse: 131_186 ,
                                     child: 28_496 ,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : [{
                                 'All ages': {
                                     'M': 37_892 ,
                                     'M+1': 70_452 ,
                                     'M+2': 88_794 ,
                                     'M+3': 106_762 ,
                                     'M+4': 121_829 ,
                                     'M+5': 136_895 ,
                                     'M+6': 148_202 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
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
                        {   inpatientRates : { coverLimit: 10_000_000,
                             ageLimits : [{
                                 '19-29 years': {
                                     principal: 60_535 ,
                                     spouse: 46_337 ,
                                     child: 31_578 ,
                                 },
                                 '30-40 years': {
                                     principal: 64_692 ,
                                     spouse: 48_736 ,
                                     child: 31_578 ,
                                 },
                                 '41-50 years': {
                                     principal: 68_870 ,
                                     spouse: 49_650 ,
                                     child: 31_578 ,
                                 },
                                 '51-65 years': {
                                     principal: 91_449 ,
                                     spouse: 60_121 ,
                                     child: 31_578 ,
                                 },
                                 '66+ years': {
                                     principal: 185_511 ,
                                     spouse: 145_655 ,
                                     child: 31_578 ,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 200_000,
                             ageLimits : [{
                                 'All ages': {
                                     'M': 41_512 ,
                                     'M+1': 77_987 ,
                                     'M+2': 92_489 ,
                                     'M+3': 111_223 ,
                                     'M+4': 126_966 ,
                                     'M+5': 142_709 ,
                                     'M+6': 157_539 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
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
                {   coverName: 'UAP Old Mutual Afyaimara Seniors',
                    InsurancePlanOptions: [
                        {  inpatientRates : { coverLimit: 500_000,
                            ageLimits : [{
                                '66+ years': {
                                    principal: 116_352 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [{
                                '66+ years': {
                                    'M': 94_968 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                },      
                                dentalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover plan does not offer this',
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
                        {  inpatientRates : { coverLimit: 1_000_000,
                             ageLimits : [{
                                 '66+ years': {
                                     principal: 132_299 ,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : [{
                                 '66+ years': {
                                     'M': 101_270 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 16_176,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 16_176,
                                     coverStatus: 'The cover plan does not offer this',
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
                        {  inpatientRates : { coverLimit: 3_000_000,
                             ageLimits : [{
                                 '66+ years': {
                                     principal: 178_535 ,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 200_000,
                             ageLimits : [{
                                 '66+ years': {
                                     'M': 107_534 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 16_176,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 16_176,
                                     coverStatus: 'The cover plan does not offer this',
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
                        {  inpatientRates : { coverLimit: 5_000_000,
                             ageLimits : [{
                                 '66+ years': {
                                     principal: 206_231 ,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 200_000,
                             ageLimits : [{
                                 '66+ years': {
                                     'M': 107_534 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 16_176,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 16_176,
                                     coverStatus: 'The cover plan does not offer this',
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
                        {  inpatientRates : { coverLimit: 10_000_000,
                            ageLimits : [{
                                '66+ years': {
                                    principal: 229_049 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 200_000,
                            ageLimits : [{
                                '66+ years': {
                                    'M': 107_534 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                },      
                                dentalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover plan does not offer this',
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
                {   coverName: 'UAP Old Mutual Afyaimara County',
                    InsurancePlanOptions: [
                        {   inpatientRates : { coverLimit: 1_000_00,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 10_740 ,
                                    spouse: 8_994 ,
                                    child: 4_994 ,
                                },
                                '30-40 years': {
                                    principal: 11_308 ,
                                    spouse: 9_402 ,
                                    child: 4_994 ,
                                },
                                '41-50 years': {
                                    principal: 13_656 ,
                                    spouse: 11_278 ,
                                    child: 4_994 ,
                                },
                                '51-65 years': {
                                    principal: 17_218 ,
                                    spouse: 14_156 ,
                                    child: 4_994 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 25_000,
                            ageLimits : [{
                                'All ages': {
                                    'M': 9_390 ,
                                    'M+1': 10_841 ,
                                    'M+2': 15_921 ,
                                    'M+3': 21_002 ,
                                    'M+4': 23_856 ,
                                    'M+5': 24_603 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                },      
                                dentalCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
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
                        {   inpatientRates : { coverLimit: 250_000,
                             ageLimits : [{
                                 '19-29 years': {
                                     principal: 13_724 ,
                                     spouse: 10_114 ,
                                     child: 5_616 ,
                                 },
                                 '30-40 years': {
                                     principal: 14_362 ,
                                     spouse: 10_572 ,
                                     child: 5_616 ,
                                 },
                                 '41-50 years': {
                                     principal: 17_002 ,
                                     spouse: 12_682 ,
                                     child: 5_616 ,
                                 },
                                 '51-65 years': {
                                     principal: 21_008 ,
                                     spouse: 15_918 ,
                                     child: 5_616 ,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 40_000,
                             ageLimits : [{
                                 'All ages': {
                                     'M': 10_821 ,
                                     'M+1': 18_050 ,
                                     'M+2': 22_120 ,
                                     'M+3': 26_647 ,
                                     'M+4': 30_788 ,
                                     'M+5': 34_661 ,
                                    },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
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
                        {   inpatientRates : { coverLimit: 500_000,
                             ageLimits : [{
                                 '19-29 years': {
                                     principal: 21_711 ,
                                     spouse: 16_340 ,
                                     child: 9_074 ,
                                 },
                                 '30-40 years': {
                                     principal: 22_725 ,
                                     spouse: 17_160 ,
                                     child: 9_074 ,
                                 },
                                 '41-50 years': {
                                     principal: 27_017 ,
                                     spouse: 20_594 ,
                                     child: 9_074 ,
                                 },
                                 '51-65 years': {
                                     principal: 32_967 ,
                                     spouse: 25_144 ,
                                     child: 9_074 ,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 50_000,
                             ageLimits : [{
                                 'All ages': {
                                     'M': 11_775 ,
                                     'M+1': 22_856 ,
                                     'M+2': 26_252 ,
                                     'M+3': 30_411 ,
                                     'M+4': 35_408 ,
                                     'M+5': 41_366 ,
                                 },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
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
                        {   inpatientRates : { coverLimit: 1_000_000,
                             ageLimits : [{
                                 '19-29 years': {
                                     principal: 24_690,
                                     spouse: 18_270 ,
                                     child: 11_638 ,
                                 },
                                 '30-40 years': {
                                     principal: 25_850 ,
                                     spouse: 19_210 ,
                                     child: 11_638 ,
                                 },
                                 '41-50 years': {
                                     principal: 30_646 ,
                                     spouse: 23_044 ,
                                     child: 11_638 ,
                                 },
                                 '51-65 years': {
                                     principal: 37_926 ,
                                     spouse: 28_924 ,
                                     child: 11_638 ,
                                 },
                             }]
                            },
                            outpatientRates: {
                             coverLimit: 50_000,
                             ageLimits : [{
                                'All ages': {
                                    'M': 11_775 ,
                                    'M+1': 22_856 ,
                                    'M+2': 26_252 ,
                                    'M+3': 30_411 ,
                                    'M+4': 35_408 ,
                                    'M+5': 41_366 ,
                                },
                             }],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },
                                 hospitalCovered: {
                                     supportedFacilities: 'supports Tier 1, Tier 2 but not Tier 3 facilities'
                                 },
                                 co_payments: {
                                     support: 'supported at Ksh 200'
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
        {   insuranceCompany: 'Jubilee Health Insurance Company',
            insuranceCoverPlans : [
            {   coverName: 'J Care Junior',
                InsurancePlanOptions: [
                    {   inpatientRates : { coverLimit: 500_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 18_743 ,
                            },
                        }]
                       },
                       outpatientRates: {
                        coverLimit: 50_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 24_917 ,
                            },
                        }],
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 5_000,
                                coverPremium: 2_415,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 5_000,
                                coverPremium: 2_415,
                                coverStatus: 'The optical is limited to per person per year',
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
                    {   inpatientRates : { coverLimit: 1_000_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 23_373 ,
                            },
                        }]
                       },
                       outpatientRates: {
                        coverLimit: 50_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 24_917 ,
                            },
                        }],
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 10_000,
                                coverPremium: 3_150,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 10_000,
                                coverPremium: 3_150,
                                coverStatus: 'The optical is limited to per person per year',
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
                    {   inpatientRates : { coverLimit: 2_000_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 27_563 ,
                            },
                        }]
                       },
                       outpatientRates: {
                        coverLimit: 80_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 26_460 ,
                            },
                        }],
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 20_000,
                                coverPremium: 6_405,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 20_000,
                                coverPremium: 6_405,
                                coverStatus: 'The optical is limited to per person per year',
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
                    {   inpatientRates : { coverLimit: 3_000_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 33_075 ,
                            },
                        }]
                       },
                       outpatientRates: {
                        coverLimit: 100_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 30_319 ,
                            },
                        }],
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 30_000,
                                coverPremium: 9_555,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 30_000,
                                coverPremium: 9_555,
                                coverStatus: 'The optical is limited to per person per year',
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
                    {   inpatientRates : { coverLimit: 5_000_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 38_588 ,
                            },
                        }]
                       },
                       outpatientRates: {
                        coverLimit: 150_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 34_729 ,
                            },
                        }],
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 40_000,
                                coverPremium: 15_960,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 40_000,
                                coverPremium: 15_960,
                                coverStatus: 'The optical is limited to per person per year',
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
                    {   inpatientRates : { coverLimit: 10_000_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 46_305 ,
                            },
                        }]
                       },
                       outpatientRates: {
                        coverLimit: 200_000,
                        ageLimits : [{
                            '0-17 years': {
                                principal: 38_929 ,
                            },
                        }],
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 50_000,
                                coverPremium: 19_241,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 50_000,
                                coverPremium: 19_241,
                                coverStatus: 'The optical is limited to per person per year',
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
            {   coverName: 'J Care Premium',
                    InsurancePlanOptions: [
                        {   inpatientRates : { coverLimit: 500_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 18_743 ,
                                    spouse: 13_781 ,
                                    child: 9_041 ,
                                },
                                '30-40 years': {
                                    principal: 19_845 ,
                                    spouse: 16_538 ,
                                    child: 9_041 ,
                                },
                                '41-50 years': {
                                    principal: 20_413 ,
                                    spouse: 17_105 ,
                                    child: 9_041 ,
                                },
                                '51-60 years': {
                                    principal: 27_248 ,
                                    spouse: 22_888 ,
                                    child: 9_041 ,
                                },
                                '60+ years': {
                                    principal: 34_061 ,
                                    spouse: 28_610 ,
                                    child: 9_041 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 24_917 ,
                                },
                                '30-40 years': {
                                    principal: 24_917 ,
                                },
                                '41-50 years': {
                                    principal: 28_445 ,
                                },
                                '51-60 years': {
                                    principal: 33_345 ,
                                },
                                '60+ years': {
                                    principal: 38_036 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 80_000,
                                    coverPremium: 26_985,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
                                },      
                                dentalCover: {
                                    amountOffered: 5_000,
                                    coverPremium: 2_415,
                                    coverStatus: 'The dental is limited to per person per year',
                                }, 
                                opticalCover: {
                                    amountOffered: 5_000,
                                    coverPremium: 2_415,
                                    coverStatus: 'The optical is limited to per person per year',
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
                        {   inpatientRates : { coverLimit: 1_000_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 23_373 ,
                                    spouse: 19_625 ,
                                    child: 12_679 ,
                                },
                                '30-40 years': {
                                    principal: 24_365 ,
                                    spouse: 20_507 ,
                                    child: 12_679 ,
                                },
                                '41-50 years': {
                                    principal: 29_216 ,
                                    spouse: 23_704 ,
                                    child: 12_679 ,
                                },
                                '51-60 years': {
                                    principal: 35_820 ,
                                    spouse: 30_065 ,
                                    child: 12_679 ,
                                },
                                '60+ years': {
                                    principal: 44_776 ,
                                    spouse: 37_582 ,
                                    child: 12_679 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 24_917 ,
                                },
                                '30-40 years': {
                                    principal: 24_917 ,
                                },
                                '41-50 years': {
                                    principal: 28_445 ,
                                },
                                '51-60 years': {
                                    principal: 33_345 ,
                                },
                                '60+ years': {
                                    principal: 38_036 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 100_000,
                                    coverPremium: 28_980,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
                                },      
                                dentalCover: {
                                    amountOffered: 10_000,
                                    coverPremium: 3_150,
                                    coverStatus: 'The dental is limited to per person per year',
                                }, 
                                opticalCover: {
                                    amountOffered: 10_000,
                                    coverPremium: 3_150,
                                    coverStatus: 'The optical is limited to per person per year',
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
                        {   inpatientRates : { coverLimit: 2_000_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 27_563 ,
                                    spouse: 23_153 ,
                                    child: 15_435 ,
                                },
                                '30-40 years': {
                                    principal: 29_216 ,
                                    spouse: 24_806 ,
                                    child: 15_435 ,
                                },
                                '41-50 years': {
                                    principal: 36_383 ,
                                    spouse: 29_768 ,
                                    child: 15_435 ,
                                },
                                '51-60 years': {
                                    principal: 43_957 ,
                                    spouse: 36_912 ,
                                    child: 15_435 ,
                                },
                                '60+ years': {
                                    principal: 54_946 ,
                                    spouse: 46_140 ,
                                    child: 15_435 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 80_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 26_460 ,
                                },
                                '30-40 years': {
                                    principal: 26_460 ,
                                },
                                '41-50 years': {
                                    principal: 32_855 ,
                                },
                                '51-60 years': {
                                    principal: 38_588 ,
                                },
                                '60+ years': {
                                    principal: 45_754 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 120_000,
                                    coverPremium: 31_185,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
                                },      
                                dentalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 6_405,
                                    coverStatus: 'The dental is limited to per person per year',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 6_405,
                                    coverStatus: 'The optical is limited to per person per year',
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
                        {   inpatientRates : { coverLimit: 3_000_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 33_075 ,
                                    spouse: 28_665 ,
                                    child: 19_073 ,
                                },
                                '30-40 years': {
                                    principal: 36_162 ,
                                    spouse: 31_421 ,
                                    child: 19_073 ,
                                },
                                '41-50 years': {
                                    principal: 41_895 ,
                                    spouse: 37_485 ,
                                    child: 19_073 ,
                                },
                                '51-60 years': {
                                    principal: 54_871 ,
                                    spouse: 46_040 ,
                                    child: 19_073 ,
                                },
                                '60+ years': {
                                    principal: 60_359 ,
                                    spouse: 50_644 ,
                                    child: 19_073 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 30_319 ,
                                },
                                '30-40 years': {
                                    principal: 30_319 ,
                                },
                                '41-50 years': {
                                    principal: 36_934 ,
                                },
                                '51-60 years': {
                                    principal: 40_793 ,
                                },
                                '60+ years': {
                                    principal: 47_959 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 120_000,
                                    coverPremium: 31_185,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
                                },      
                                dentalCover: {
                                    amountOffered: 30_000,
                                    coverPremium: 9_555,
                                    coverStatus: 'The dental is limited to per person per year',
                                }, 
                                opticalCover: {
                                    amountOffered: 30_000,
                                    coverPremium: 9_555,
                                    coverStatus: 'The optical is limited to per person per year',
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
                        {   inpatientRates : { coverLimit: 5_000_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 38_588 ,
                                    spouse: 34_178 ,
                                    child: 22_050 ,
                                },
                                '30-40 years': {
                                    principal: 40_793 ,
                                    spouse: 35_280 ,
                                    child: 22_050 ,
                                },
                                '41-50 years': {
                                    principal: 50_065 ,
                                    spouse: 42_000 ,
                                    child: 22_050 ,
                                },
                                '51-60 years': {
                                    principal: 63_306 ,
                                    spouse: 53_185 ,
                                    child: 22_050 ,
                                },
                                '60+ years': {
                                    principal: 69_636 ,
                                    spouse: 58_503 ,
                                    child: 22_050 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 150_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 34_729 ,
                                },
                                '30-40 years': {
                                    principal: 34_729 ,
                                },
                                '41-50 years': {
                                    principal: 38_588 ,
                                },
                                '51-60 years': {
                                    principal: 42_226 ,
                                },
                                '60+ years': {
                                    principal: 53_802 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 150_000,
                                    coverPremium: 37_275,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
                                },      
                                dentalCover: {
                                    amountOffered: 40_000,
                                    coverPremium: 15_960,
                                    coverStatus: 'The dental is limited to per person per year',
                                }, 
                                opticalCover: {
                                    amountOffered: 40_000,
                                    coverPremium: 15_960,
                                    coverStatus: 'The optical is limited to per person per year',
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
                        {   inpatientRates : { coverLimit: 10_000_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 46_305 ,
                                    spouse: 41_013 ,
                                    child: 26_460 ,
                                },
                                '30-40 years': {
                                    principal: 48_951 ,
                                    spouse: 42_336 ,
                                    child: 26_460 ,
                                },
                                '41-50 years': {
                                    principal: 60_077 ,
                                    spouse: 50_400 ,
                                    child: 26_460 ,
                                },
                                '51-60 years': {
                                    principal: 75_967 ,
                                    spouse: 63_822 ,
                                    child: 26_460 ,
                                },
                                '60+ years': {
                                    principal: 83_563 ,
                                    spouse: 70_204 ,
                                    child: 26_460 ,
                                },
                            }]
                           },
                           outpatientRates: {
                            coverLimit: 200_000,
                            ageLimits : [{
                                '19-29 years': {
                                    principal: 38_929 ,
                                },
                                '30-40 years': {
                                    principal: 38_929 ,
                                },
                                '41-50 years': {
                                    principal: 42_788 ,
                                },
                                '51-60 years': {
                                    principal: 46_426 ,
                                },
                                '60+ years': {
                                    principal: 58_002 ,
                                },
                            }],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 200_000,
                                    coverPremium: 45_350,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
                                },      
                                dentalCover: {
                                    amountOffered: 50_000,
                                    coverPremium: 19_241,
                                    coverStatus: 'The dental is limited to per person per year',
                                }, 
                                opticalCover: {
                                    amountOffered: 50_000,
                                    coverPremium: 19_241,
                                    coverStatus: 'The optical is limited to per person per year',
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
        
    ]
}

module.exports = individualInsurancePlans