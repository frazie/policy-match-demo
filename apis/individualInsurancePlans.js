const individualInsurancePlans = {
    insuranceCompanies: [
        {   insuranceCompany: 'Madison Insurance Company',
            insuranceCoverPlans : [
                {  coverName: 'Madison Betterlife Premier Plan',
                    InsurancePlanOptions: [
                        {   inpatientRates : { coverLimit: 3000000,
                            ageLimits : {
                                '18-29 years': {
                                    principal: 42600 ,
                                    spouse: 38400 ,
                                    child: 27700 ,
                                },
                                '30-39 years': {
                                    principal: 42600 ,
                                    spouse: 38400 ,
                                    child: 27700 ,
                                },
                                '40-49 years': {
                                    principal: 42600 ,
                                    spouse: 38400 ,
                                    child: 27700 ,
                                },
                                '50-60 years': {
                                    principal: 61800 ,
                                    spouse: 55600 ,
                                    child: 27700 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 100000,
                            ageLimits : {
                                '18-49 years': {
                                    principal: 54900 ,
                                    spouse: 49400 ,
                                    child: 35700 ,
                                },
                                '50-60 years': {
                                    principal: 79600 ,
                                    spouse: 71600 ,
                                    child: 35700 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 150000,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums',
                                    coverPremium: 44500,
                                },      
                                dentalCover: {
                                    amountOffered: 'none',
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 'none',
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
                        {   inpatientRates : { coverLimit: 3000000,
                            ageLimits : {
                                '18-29 years': {
                                    principal: 42600 ,
                                    spouse: 38400 ,
                                    child: 27700 ,
                                },
                                '30-39 years': {
                                    principal: 42600 ,
                                    spouse: 38400 ,
                                    child: 27700 ,
                                },
                                '40-49 years': {
                                    principal: 42600 ,
                                    spouse: 38400 ,
                                    child: 27700 ,
                                },
                                '50-60 years': {
                                    principal: 61800 ,
                                    spouse: 55600 ,
                                    child: 27700 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 150000,
                            ageLimits : {
                                '18-49 years': {
                                    principal: 54900 ,
                                    spouse: 49400 ,
                                    child: 35700 ,
                                },
                                '50-60 years': {
                                    principal: 79600 ,
                                    spouse: 71600 ,
                                    child: 35700 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 150000,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums',
                                    coverPremium: 44500,
                                },      
                                dentalCover: {
                                    amountOffered: 'none',
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 'none',
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
                        {   inpatientRates : { coverLimit: 4000000,
                             ageLimits : {
                                '18-29 years': {
                                    principal: 46600,
                                    spouse: 42000,
                                    child: 30300,
                                },
                                '30-39 years': {
                                    principal: 46600,
                                    spouse: 42000,
                                    child: 30300,
                                },
                                '40-49 years': {
                                    principal: 46600,
                                    spouse: 42000,
                                    child: 30300,
                                },
                                '50-60 years': {
                                    principal: 67600,
                                    spouse: 60900,
                                    child: 30300,
                                },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 150000,
                             ageLimits : {
                                '18-29 years': {
                                    principal: 57400 ,
                                    spouse: 51600 ,
                                    child: 37300 ,
                                },
                                '30-39 years': {
                                    principal: 57400 ,
                                    spouse: 51600 ,
                                    child: 37300 ,
                                },
                                '40-49 years': {
                                    principal: 57400 ,
                                    spouse: 51600 ,
                                    child: 37300 ,
                                },
                                '50-60 years': {
                                    principal: 83200 ,
                                    spouse: 74900 ,
                                    child: 37300 ,
                                },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 200000,
                                     coverStatus: 'The cover plan only supported upto the age of 49 years',
                                     coverPremium: 47000,
                                 },      
                                 dentalCover: {
                                     amountOffered: 'none',
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 'none',
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
                        {   inpatientRates : { coverLimit: 5000000,
                             ageLimits : {
                                '18-29 years': {
                                    principal: 49500,
                                    spouse: 44500,
                                    child: 32200,
                                },
                                '30-39 years': {
                                    principal: 49500,
                                    spouse: 44500,
                                    child: 32200,
                                },
                                '40-49 years': {
                                    principal: 49500,
                                    spouse: 44500,
                                    child: 32200,
                                },
                                '50-60 years': {
                                    principal: 71700,
                                    spouse: 64500,
                                    child: 32200,
                                },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 200000,
                             ageLimits : {
                                '18-29 years': {
                                    principal: 59900,
                                    spouse: 53900,
                                    child: 38900,
                                },
                                '30-39 years': {
                                    principal: 59900,
                                    spouse: 53900,
                                    child: 38900,
                                },
                                '40-49 years': {
                                    principal: 59900,
                                    spouse: 53900,
                                    child: 38900,
                                },
                                '50-60 years': {
                                    principal: 86800,
                                    spouse: 78200,
                                    child: 38900,
                                },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 'none',
                                     coverStatus: 'The cover plan only supported upto the age of 49 years',
                                     coverPremium: 0,
                                 },      
                                 dentalCover: {
                                     amountOffered: 'none',
                                     coverStatus: 'The cover plan does not offer this',
                                     coverPremium: 0,
                                 }, 
                                 opticalCover: {
                                     amountOffered: 'none',
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
                        {  inpatientRates : {  coverLimit: 1000000,
                            ageLimits : {
                                '18-29 years': {
                                    principal: 26600,
                                    spouse: 23900,
                                    child: 17300,
                                },
                                '30-39 years': {
                                    principal: 26600,
                                    spouse: 23900,
                                    child: 17300,
                                },
                                '40-49 years': {
                                    principal: 26600,
                                    spouse: 23900,
                                    child: 17300,
                                },
                                '50-60 years': {
                                    principal: 61800 ,
                                    spouse: 55600 ,
                                    child: 17300,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 100000,
                            ageLimits : {
                                '18-29 years': {
                                    principal: 52400,
                                    spouse: 47100,
                                    child: 34000,
                                },
                                '30-39 years': {
                                    principal: 52400,
                                    spouse: 47100,
                                    child: 34000,
                                },
                                '40-49 years': {
                                    principal: 52400,
                                    spouse: 47100,
                                    child: 34000,
                                },
                                '50-60 years': {
                                    principal: 75900,
                                    spouse: 68300,
                                    child: 34000,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 100000,
                                    coverPremium: 41700,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                },      
                                dentalCover: {
                                    amountOffered: 'none',
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 'none',
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
                        {  inpatientRates : {  coverLimit: 1500000,
                             ageLimits : [
                                  {
                                     ageGroup: '18-29 years',
                                     principal: 30100,
                                     spouse: 27100,
                                     child: 19600,
                                 },
                                 {
                                    ageGroup: '30-39 years',
                                     principal: 30100,
                                     spouse: 27100,
                                     child: 19600,
                                 },
                                 {
                                    ageGroup: '40-49 years',
                                     principal: 30100,
                                     spouse: 27100,
                                     child: 19600,
                                 },
                                 {
                                    ageGroup: '50-60 years',
                                     principal: 43600,
                                     spouse: 39200,
                                     child: 19600,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 150000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 54900,
                                     spouse: 49400,
                                     child: 35700,
                                 },
                                 '30-39 years': {
                                     principal: 54900,
                                     spouse: 49400,
                                     child: 35700,
                                 },
                                 '40-49 years': {
                                     principal: 54900,
                                     spouse: 49400,
                                     child: 35700,
                                 },
                                 '50-60 years': {
                                     principal: 79600,
                                     spouse: 71600,
                                     child: 35700,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 150000,
                                     coverPremium: 44500,
                                     coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                 },      
                                 dentalCover: {
                                     amountOffered: 'none',
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 'none',
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
                        {  inpatientRates : {  coverLimit: 2000000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 33600,
                                     spouse: 30200,
                                     child: 21800,
                                 },
                                 '30-39 years': {
                                     principal: 33600,
                                     spouse: 30200,
                                     child: 21800,
                                 },
                                 '40-49 years': {
                                     principal: 33600,
                                     spouse: 30200,
                                     child: 21800,
                                 },
                                 '50-60 years': {
                                     principal: 48700,
                                     spouse: 43800,
                                     child: 21800,
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
                                     amountOffered: 'none',
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 'none',
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
                        {  inpatientRates : {  coverLimit: 500000,
                            ageLimits : {
                                '18-29 years': {
                                    principal: 18400,
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
                            coverLimit: 50000,
                            ageLimits : {
                                '18-29 years': {
                                    principal: 21100,
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
                                    amountOffered: 'none',
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 'none',
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
                        {  inpatientRates : {  coverLimit: 1000000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 21200,
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
                             coverLimit: 75000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 23900,
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
                                     amountOffered: 'none',
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 'none',
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
                        {  inpatientRates : {  coverLimit: 500000,
                            ageLimits : {
                                '18-29 years': {
                                    principal: 15400,
                                    spouse: 13900,
                                    child: 10000,
                                },
                                '30-39 years': {
                                    principal: 15400,
                                    spouse: 13900,
                                    child: 10000,
                                },
                                '40-49 years': {
                                    principal: 15400,
                                    spouse: 13900,
                                    child: 10000,
                                },
                                '50-60 years': {
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 50000,
                            ageLimits : {
                                '18-29 years': {
                                    principal: 17500,
                                    spouse: 15700,
                                    child: 11400,
                                },
                                '30-39 years': {
                                    principal: 17500,
                                    spouse: 15700,
                                    child: 11400,
                                },
                                '40-49 years': {
                                    principal: 17500,
                                    spouse: 15700,
                                    child: 11400,
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
                                    amountOffered: 30000,
                                    coverPremium: 18400,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49 years',
                                },      
                                dentalCover: {
                                    amountOffered: 'none',
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 'none',
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
                        {  inpatientRates : {  coverLimit: 1000000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 21200,
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
                             coverLimit: 75000,
                             ageLimits : {
                                 '18-29 years': {
                                     principal: 23900,
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
                                     amountOffered: 'none',
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 'none',
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
                        {   inpatientRates : { coverLimit: 500000,
                            ageLimits : {
                                '0-19 years': {
                                    'M': 32954 ,
                                    'M+1': 51785 ,
                                    'M+2': 68262 ,
                                    'M+3': 82385 ,
                                    'M+4': 98438 ,
                                    'M+5': 116162 ,
                                    'Extra Child': 17724 ,
                                },
                                
                            }
                           },
                           outpatientRates: {
                            coverLimit: 50000,
                            ageLimits : {
                                '0-19 years': {
                                    'M': 24990 ,
                                    'M+1': 46232 ,
                                    'M+2': 46463 ,
                                    'M+3': 46618 ,
                                    'M+4': 46734 ,
                                    'M+5': 46828 ,
                                    'Extra Child': 454 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 'none',
                                    coverStatus: 'The cover plan does not offer this',
                                },      
                                dentalCover: {
                                    amountOffered: 7000,
                                    coverStatus: 'Dental cover is provided within out patient insurance',
                                }, 
                                opticalCover: {
                                    amountOffered: 7000,
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
                        {   inpatientRates : { coverLimit: 1000000,
                             ageLimits : {
                                 '0-19 years': {
                                     'M': 34602 ,
                                     'M+1': 54374 ,
                                     'M+2': 71675 ,
                                     'M+3': 86504 ,
                                     'M+4': 103360 ,
                                     'M+5': 121970 ,
                                     'Extra Child': 18611 ,
                                 },
                                 
                             }
                            },
                            outpatientRates: {
                             coverLimit: 75000,
                             ageLimits : {
                                 '0-19 years': {
                                     'M': 26240 ,
                                     'M+1': 48543 ,
                                     'M+2': 51109 ,
                                     'M+3': 55941 ,
                                     'M+4': 60754 ,
                                     'M+5': 63217 ,
                                     'Extra Child': 649 ,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 'none',
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 10000,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 10000,
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
                        {   inpatientRates : { coverLimit: 3000000,
                             ageLimits : {
                                 '0-19 years': {
                                     'M': 37716 ,
                                     'M+1': 59267 ,
                                     'M+2': 80469 ,
                                     'M+3': 99004 ,
                                     'M+4': 116042 ,
                                     'M+5': 132948 ,
                                     'Extra Child': 20286 ,
                                 },
                                 
                             }
                            },
                            outpatientRates: {
                             coverLimit: 100000,
                             ageLimits : {
                                 '0-19 years': {
                                     'M': 28076 ,
                                     'M+1': 51941 ,
                                     'M+2': 54687 ,
                                     'M+3': 67129 ,
                                     'M+4': 78981 ,
                                     'M+5': 85343 ,
                                     'Extra Child': 974 ,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 'none',
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 15000,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 15000,
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
                        {   inpatientRates : { coverLimit: 5000000,
                             ageLimits : {
                                 '0-19 years': {
                                     'M': 40356 ,
                                     'M+1': 67260 ,
                                     'M+2': 90800 ,
                                     'M+3': 110978 ,
                                     'M+4': 131156 ,
                                     'M+5': 151334 ,
                                     'Extra Child': 21706 ,
                                 },
                                 
                             }
                            },
                            outpatientRates: {
                             coverLimit: 150000,
                             ageLimits : {
                                 '0-19 years': {
                                     'M': 30042 ,
                                     'M+1': 55577 ,
                                     'M+2': 58515 ,
                                     'M+3': 80555 ,
                                     'M+4': 102675 ,
                                     'M+5': 115213 ,
                                     'Extra Child': 1363 ,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 'none',
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 15000,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 15000,
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
                        {   inpatientRates : { coverLimit: 500000,
                             ageLimits : {
                                 '0-19 years': {
                                     'M': 29538 ,
                                     'M+1': 49231 ,
                                     'M+2': 66462 ,
                                     'M+3': 81231 ,
                                     'M+4': 96000 ,
                                     'M+5': 110769 ,
                                     'Extra Child': 14769 ,
                                 },
                                 
                             }
                            },
                            outpatientRates: {
                             coverLimit: 50000,
                             ageLimits : {
                                 '0-19 years': {
                                     'M': 19250 ,
                                     'M+1': 35613 ,
                                     'M+2': 35791 ,
                                     'M+3': 35910 ,
                                     'M+4': 36000 ,
                                     'M+5': 36072 ,
                                     'Extra Child': 350 ,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 'none',
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 7000,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 7000,
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
                        {   inpatientRates : { coverLimit: 1000000,
                              ageLimits : {
                                  '0-19 years': {
                                      'M': 31015 ,
                                      'M+1': 51692 ,
                                      'M+2': 69785 ,
                                      'M+3': 85292 ,
                                      'M+4': 100800 ,
                                      'M+5': 116308 ,
                                      'Extra Child': 15508 ,
                                  },
                                  
                              }
                             },
                             outpatientRates: {
                              coverLimit: 75000,
                              ageLimits : {
                                  '0-19 years': {
                                      'M': 20213 ,
                                      'M+1': 37393 ,
                                      'M+2': 39370 ,
                                      'M+3': 43092 ,
                                      'M+4': 46800 ,
                                      'M+5': 48697 ,
                                      'Extra Child': 500 ,
                                  },
                              },
                             },
                             secondaryCoverFeatures : {
                                  maternityCover: {
                                      amountOffered: 'none',
                                      coverStatus: 'The cover plan does not offer this',
                                  },      
                                  dentalCover: {
                                      amountOffered: 10000,
                                      coverStatus: 'Dental cover is provided within out patient insurance',
                                  }, 
                                  opticalCover: {
                                      amountOffered: 10000,
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
                        {   inpatientRates : { coverLimit: 3000000,
                              ageLimits : {
                                  '0-19 years': {
                                      'M': 34117 ,
                                      'M+1': 56862 ,
                                      'M+2': 76763 ,
                                      'M+3': 93822 ,
                                      'M+4': 110880 ,
                                      'M+5': 127938 ,
                                      'Extra Child': 17058 ,
                                  },
                                  
                              }
                             },
                             outpatientRates: {
                              coverLimit: 100000,
                              ageLimits : {
                                  '0-19 years': {
                                      'M': 23244 ,
                                      'M+1': 43002 ,
                                      'M+2': 45275 ,
                                      'M+3': 51710 ,
                                      'M+4': 60839 ,
                                      'M+5': 65741 ,
                                      'Extra Child': 750 ,
                                  },
                              },
                             },
                             secondaryCoverFeatures : {
                                  maternityCover: {
                                      amountOffered: 'none',
                                      coverStatus: 'The cover plan does not offer this',
                                  },      
                                  dentalCover: {
                                      amountOffered: 15000,
                                      coverStatus: 'Dental cover is provided within out patient insurance',
                                  }, 
                                  opticalCover: {
                                      amountOffered: 15000,
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
                        {   inpatientRates : { coverLimit: 5000000,
                              ageLimits : {
                                  '0-19 years': {
                                      'M': 37529 ,
                                      'M+1': 62548 ,
                                      'M+2': 84439 ,
                                      'M+3': 103204 ,
                                      'M+4': 121968 ,
                                      'M+5': 140732 ,
                                      'Extra Child': 18764 ,
                                  },
                                  
                              }
                             },
                             outpatientRates: {
                              coverLimit: 150000,
                              ageLimits : {
                                  '0-19 years': {
                                      'M': 26731 ,
                                      'M+1': 49452 ,
                                      'M+2': 52066 ,
                                      'M+3': 62052 ,
                                      'M+4': 79091 ,
                                      'M+5': 88750 ,
                                      'Extra Child': 1050 ,
                                  },
                              },
                             },
                             secondaryCoverFeatures : {
                                  maternityCover: {
                                      amountOffered: 'none',
                                      coverStatus: 'The cover plan does not offer this',
                                  },      
                                  dentalCover: {
                                      amountOffered: 15000,
                                      coverStatus: 'Dental cover is provided within outpatient insurance',
                                  }, 
                                  opticalCover: {
                                      amountOffered: 15000,
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
                    {   inpatientRates : { coverLimit: 500000,
                        ageLimits : {
                            '0-17 years': {
                                principal: 18743 ,
                            },
                        }
                       },
                       outpatientRates: {
                        coverLimit: 50000,
                        ageLimits : {
                            '0-17 years': {
                                principal: 24917 ,
                            },
                        },
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 5000,
                                coverPremium: 2415,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 5000,
                                coverPremium: 2415,
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
                    {   inpatientRates : { coverLimit: 1000000,
                        ageLimits : {
                            '0-17 years': {
                                principal: 23373 ,
                            },
                            
                        }
                       },
                       outpatientRates: {
                        coverLimit: 50000,
                        ageLimits : {
                            '0-17 years': {
                                principal: 24917 ,
                            },
                        },
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 100000,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 10000,
                                coverPremium: 3150,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 10000,
                                coverPremium: 3150,
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
                    {   inpatientRates : { coverLimit: 2000000,
                        ageLimits : {
                            '19-29 years': {
                                principal: 27563 ,
                            },
                        }
                       },
                       outpatientRates: {
                        coverLimit: 80000,
                        ageLimits : {
                            '19-29 years': {
                                principal: 26460 ,
                            },
                        },
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 20000,
                                coverPremium: 6405,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 20000,
                                coverPremium: 6405,
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
                    {   inpatientRates : { coverLimit: 3000000,
                        ageLimits : {
                            '19-29 years': {
                                principal: 33075 ,
                            },
                        }
                       },
                       outpatientRates: {
                        coverLimit: 100000,
                        ageLimits : {
                            '19-29 years': {
                                principal: 30319 ,
                            },
                        },
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 30000,
                                coverPremium: 9555,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 30000,
                                coverPremium: 9555,
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
                    {   inpatientRates : { coverLimit: 5000000,
                        ageLimits : {
                            '19-29 years': {
                                principal: 38588 ,
                            },
                        }
                       },
                       outpatientRates: {
                        coverLimit: 150000,
                        ageLimits : {
                            '19-29 years': {
                                principal: 34729 ,
                            },
                        },
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 40000,
                                coverPremium: 15960,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 40000,
                                coverPremium: 15960,
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
                    {   inpatientRates : { coverLimit: 10000000,
                        ageLimits : {
                            '19-29 years': {
                                principal: 46305 ,
                            },
                        }
                       },
                       outpatientRates: {
                        coverLimit: 200000,
                        ageLimits : {
                            '19-29 years': {
                                principal: 38929 ,
                            },
                        },
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 0,
                                coverPremium: 0,
                                coverStatus: 'maternity cover is not offered in this option',
                            },      
                            dentalCover: {
                                amountOffered: 50000,
                                coverPremium: 19241,
                                coverStatus: 'The dental is limited to per person per year',
                            }, 
                            opticalCover: {
                                amountOffered: 50000,
                                coverPremium: 19241,
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