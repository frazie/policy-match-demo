const individualInsurancePlans = {
    insuranceCompanies: [
        {   insuranceCompany: 'Madison Insurance Company',
            insuranceCoverPlans : [
                {  coverName: 'Madison Betterlife Premier Plan',
                    InsurancePlanOptions: [
                        {   inpatientRates : { coverLimit: 3_000_000,
                            ageLimits : {
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
                            }
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : {
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
                            },
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
                        {   inpatientRates : { coverLimit: 3_000_000,
                            ageLimits : {
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
                            }
                           },
                           outpatientRates: {
                            coverLimit: 150_000,
                            ageLimits : {
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
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 150000,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums',
                                    coverPremium: 44500,
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
                             ageLimits : {
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
                             }
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : {
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
                             },
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
                             ageLimits : {
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
                             }
                            },
                            outpatientRates: {
                             coverLimit: 200_000,
                             ageLimits : {
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
                             },
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
                            ageLimits : {
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
                            }
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : {
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
                            },
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
                             ageLimits : [
                                  {
                                     ageGroup: '18-29 years',
                                     principal: 30_100,
                                     spouse: 27_100,
                                     child: 19_600,
                                 },
                                 {
                                    ageGroup: '30-39 years',
                                     principal: 30_100,
                                     spouse: 27_100,
                                     child: 19_600,
                                 },
                                 {
                                    ageGroup: '40-49 years',
                                     principal: 30_100,
                                     spouse: 27_100,
                                     child: 19_600,
                                 },
                                 {
                                    ageGroup: '50-60 years',
                                     principal: 43_600,
                                     spouse: 39_200,
                                     child: 19_600,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : {
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
                             },
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
                            ageLimits : {
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
                            }
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : {
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
                            ageLimits : {
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
                            }
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : {
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
                            },
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
                            ageLimits : {
                                '0-19 years': {
                                    'M': 32_954 ,
                                    'M+1': 51_785 ,
                                    'M+2': 68_262 ,
                                    'M+3': 82_385 ,
                                    'M+4': 98_438 ,
                                    'M+5': 116_162 ,
                                    'Extra Child': 17_724 ,
                                },
                                
                            }
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : {
                                '0-19 years': {
                                    'M': 24_990 ,
                                    'M+1': 46_232 ,
                                    'M+2': 46_463 ,
                                    'M+3': 46_618 ,
                                    'M+4': 46_734 ,
                                    'M+5': 46_828 ,
                                    'Extra Child': 454 ,
                                },
                            },
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
                             ageLimits : {
                                 '0-19 years': {
                                     'M': 34_602 ,
                                     'M+1': 54_374 ,
                                     'M+2': 71_675 ,
                                     'M+3': 86_504 ,
                                     'M+4': 103_360 ,
                                     'M+5': 121_970 ,
                                     'Extra Child': 18_611 ,
                                 },
                                 
                             }
                            },
                            outpatientRates: {
                             coverLimit: 75000,
                             ageLimits : {
                                 '0-19 years': {
                                     'M': 26_240 ,
                                     'M+1': 48_543 ,
                                     'M+2': 51_109 ,
                                     'M+3': 55_941 ,
                                     'M+4': 60_754 ,
                                     'M+5': 63_217 ,
                                     'Extra Child': 649 ,
                                 },
                             },
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
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 15000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 15000,
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
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 15000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 15000,
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
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 7000,
                                     coverPremium: 0,
                                     coverStatus: 'Dental cover is provided within out patient insurance',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 7000,
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
                                      amountOffered: 0,
                                      coverPremium: 0,
                                      coverStatus: 'The cover plan does not offer this',
                                  },      
                                  dentalCover: {
                                      amountOffered: 10000,
                                      coverPremium: 0,
                                      coverStatus: 'Dental cover is provided within out patient insurance',
                                  }, 
                                  opticalCover: {
                                      amountOffered: 10000,
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
                                      amountOffered: 0,
                                      coverPremium: 0,
                                      coverStatus: 'The cover plan does not offer this',
                                  },      
                                  dentalCover: {
                                      amountOffered: 15000,
                                      coverPremium: 0,
                                      coverStatus: 'Dental cover is provided within out patient insurance',
                                  }, 
                                  opticalCover: {
                                      amountOffered: 15000,
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
                                      amountOffered: 0,
                                      coverPremium: 0,
                                      coverStatus: 'The cover plan does not offer this',
                                  },      
                                  dentalCover: {
                                      amountOffered: 15000,
                                      coverPremium: 0,
                                      coverStatus: 'Dental cover is provided within outpatient insurance',
                                  }, 
                                  opticalCover: {
                                      amountOffered: 15000,
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
                            ageLimits : {
                                '19-29 years': {
                                    principal: 32257 ,
                                    spouse: 23900 ,
                                    child: 13929 ,
                                },
                                '30-40 years': {
                                    principal: 33863 ,
                                    spouse: 25023 ,
                                    child: 13929 ,
                                },
                                '41-50 years': {
                                    principal: 38059 ,
                                    spouse: 26128 ,
                                    child: 13929 ,
                                },
                                '51-65 years': {
                                    principal: 55550 ,
                                    spouse: 31575 ,
                                    child: 13929 ,
                                },
                                '66+ years': {
                                    principal: 82829 ,
                                    spouse: 64526 ,
                                    child: 13929 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 50000,
                            ageLimits : {
                                'All ages': {
                                    'M': 32934 ,
                                    'M+1': 44986 ,
                                    'M+2': 48748 ,
                                    'M+3': 48797 ,
                                    'M+4': 48846 ,
                                    'M+5': 49339 ,
                                    'M+6': 49837 ,
                                },
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
                             ageLimits : {
                                 '19-29 years': {
                                     principal: 34284 ,
                                     spouse: 25582 ,
                                     child: 17102 ,
                                 },
                                 '30-40 years': {
                                     principal: 35223 ,
                                     spouse: 26785 ,
                                     child: 17102 ,
                                 },
                                 '41-50 years': {
                                     principal: 39385 ,
                                     spouse: 27925 ,
                                     child: 17102 ,
                                 },
                                 '51-65 years': {
                                     principal: 56704 ,
                                     spouse: 34484 ,
                                     child: 17102 ,
                                 },
                                 '66+ years': {
                                     principal: 95227 ,
                                     spouse: 78683 ,
                                     child: 17102 ,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 60000,
                             ageLimits : {
                                 'All ages': {
                                     'M': 33266 ,
                                     'M+1': 49269 ,
                                     'M+2': 48748 ,
                                     'M+3': 54844 ,
                                     'M+4': 57804 ,
                                     'M+5': 58095 ,
                                     'M+6': 58387 ,
                                 },
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
                        {   inpatientRates : { coverLimit: 3_000_000,
                             ageLimits : {
                                 '19-29 years': {
                                     principal: 49172 ,
                                     spouse: 38516 ,
                                     child: 26795 ,
                                 },
                                 '30-40 years': {
                                     principal: 52342 ,
                                     spouse: 40457 ,
                                     child: 26795 ,
                                 },
                                 '41-50 years': {
                                     principal: 62185 ,
                                     spouse: 46043 ,
                                     child: 26795 ,
                                 },
                                 '51-65 years': {
                                     principal: 76889 ,
                                     spouse: 50161 ,
                                     child: 26795 ,
                                 },
                                 '66+ years': {
                                     principal: 142417 ,
                                     spouse: 115311 ,
                                     child: 26795 ,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 100000,
                             ageLimits : {
                                 'All ages': {
                                     'M': 35226 ,
                                     'M+1': 66533 ,
                                     'M+2': 82895 ,
                                     'M+3': 98147 ,
                                     'M+4': 98245 ,
                                     'M+5': 99028 ,
                                     'M+6': 99282 ,
                                 },
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
                        {   inpatientRates : { coverLimit: 5_000_000,
                             ageLimits : {
                                 '19-29 years': {
                                     principal: 53025 ,
                                     spouse: 41671 ,
                                     child: 28496 ,
                                 },
                                 '30-40 years': {
                                     principal: 56437 ,
                                     spouse: 43799 ,
                                     child: 28496 ,
                                 },
                                 '41-50 years': {
                                     principal: 62634 ,
                                     spouse: 46446 ,
                                     child: 28496 ,
                                 },
                                 '51-65 years': {
                                     principal: 82030 ,
                                     spouse: 54280 ,
                                     child: 28496 ,
                                 },
                                 '66+ years': {
                                     principal: 162180 ,
                                     spouse: 131186 ,
                                     child: 28496 ,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 150000,
                             ageLimits : {
                                 'All ages': {
                                     'M': 37892 ,
                                     'M+1': 70452 ,
                                     'M+2': 88794 ,
                                     'M+3': 106762 ,
                                     'M+4': 121829 ,
                                     'M+5': 136895 ,
                                     'M+6': 148202 ,
                                 },
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
                        {   inpatientRates : { coverLimit: 10_000_000,
                             ageLimits : {
                                 '19-29 years': {
                                     principal: 60535 ,
                                     spouse: 46337 ,
                                     child: 31578 ,
                                 },
                                 '30-40 years': {
                                     principal: 64692 ,
                                     spouse: 48736 ,
                                     child: 31578 ,
                                 },
                                 '41-50 years': {
                                     principal: 68870 ,
                                     spouse: 49650 ,
                                     child: 31578 ,
                                 },
                                 '51-65 years': {
                                     principal: 91449 ,
                                     spouse: 60121 ,
                                     child: 31578 ,
                                 },
                                 '66+ years': {
                                     principal: 185511 ,
                                     spouse: 145655 ,
                                     child: 31578 ,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 200000,
                             ageLimits : {
                                 'All ages': {
                                     'M': 41512 ,
                                     'M+1': 77987 ,
                                     'M+2': 92489 ,
                                     'M+3': 111223 ,
                                     'M+4': 126966 ,
                                     'M+5': 142709 ,
                                     'M+6': 157539 ,
                                 },
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
                        
                    ]
                },
                {   coverName: 'UAP Old Mutual Afyaimara Seniors',
                    InsurancePlanOptions: [
                        {  inpatientRates : { coverLimit: 500_000,
                            ageLimits : {
                                '66+ years': {
                                    principal: 116352 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 100000,
                            ageLimits : {
                                '66+ years': {
                                    'M': 94968 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                },      
                                dentalCover: {
                                    amountOffered: 20000,
                                    coverPremium: 16176,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 20000,
                                    coverPremium: 16176,
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
                             ageLimits : {
                                 '66+ years': {
                                     principal: 132299 ,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 150000,
                             ageLimits : {
                                 '66+ years': {
                                     'M': 101270 ,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 20000,
                                     coverPremium: 16176,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 20000,
                                     coverPremium: 16176,
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
                             ageLimits : {
                                 '66+ years': {
                                     principal: 178535 ,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 200000,
                             ageLimits : {
                                 '66+ years': {
                                     'M': 107534 ,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 20000,
                                     coverPremium: 16176,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 20000,
                                     coverPremium: 16176,
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
                             ageLimits : {
                                 '66+ years': {
                                     principal: 206231 ,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 200000,
                             ageLimits : {
                                 '66+ years': {
                                     'M': 107534 ,
                                 },
                             },
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 },      
                                 dentalCover: {
                                     amountOffered: 20000,
                                     coverPremium: 16176,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 20000,
                                     coverPremium: 16176,
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
                            ageLimits : {
                                '66+ years': {
                                    principal: 229049 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 200000,
                            ageLimits : {
                                '66+ years': {
                                    'M': 107534 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                },      
                                dentalCover: {
                                    amountOffered: 20000,
                                    coverPremium: 16176,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 20000,
                                    coverPremium: 16176,
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
                            ageLimits : {
                                '19-29 years': {
                                    principal: 10740 ,
                                    spouse: 8994 ,
                                    child: 4994 ,
                                },
                                '30-40 years': {
                                    principal: 11308 ,
                                    spouse: 9402 ,
                                    child: 4994 ,
                                },
                                '41-50 years': {
                                    principal: 13656 ,
                                    spouse: 11278 ,
                                    child: 4994 ,
                                },
                                '51-65 years': {
                                    principal: 17218 ,
                                    spouse: 14156 ,
                                    child: 4994 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 25000,
                            ageLimits : {
                                'All ages': {
                                    'M': 9390 ,
                                    'M+1': 10841 ,
                                    'M+2': 15921 ,
                                    'M+3': 21002 ,
                                    'M+4': 23856 ,
                                    'M+5': 24603 ,
                                },
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
                        {   inpatientRates : { coverLimit: 250_000,
                             ageLimits : {
                                 '19-29 years': {
                                     principal: 13724 ,
                                     spouse: 10114 ,
                                     child: 5616 ,
                                 },
                                 '30-40 years': {
                                     principal: 14362 ,
                                     spouse: 10572 ,
                                     child: 5616 ,
                                 },
                                 '41-50 years': {
                                     principal: 17002 ,
                                     spouse: 12682 ,
                                     child: 5616 ,
                                 },
                                 '51-65 years': {
                                     principal: 21008 ,
                                     spouse: 15918 ,
                                     child: 5616 ,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 40000,
                             ageLimits : {
                                 'All ages': {
                                     'M': 10821 ,
                                     'M+1': 18050 ,
                                     'M+2': 22120 ,
                                     'M+3': 26647 ,
                                     'M+4': 30788 ,
                                     'M+5': 34661 ,
                                    },
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
                        {   inpatientRates : { coverLimit: 500_000,
                             ageLimits : {
                                 '19-29 years': {
                                     principal: 21711 ,
                                     spouse: 16340 ,
                                     child: 9074 ,
                                 },
                                 '30-40 years': {
                                     principal: 22725 ,
                                     spouse: 17160 ,
                                     child: 9074 ,
                                 },
                                 '41-50 years': {
                                     principal: 27017 ,
                                     spouse: 20594 ,
                                     child: 9074 ,
                                 },
                                 '51-65 years': {
                                     principal: 32967 ,
                                     spouse: 25144 ,
                                     child: 9074 ,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 50000,
                             ageLimits : {
                                 'All ages': {
                                     'M': 11775 ,
                                     'M+1': 22856 ,
                                     'M+2': 26252 ,
                                     'M+3': 30411 ,
                                     'M+4': 35408 ,
                                     'M+5': 41366 ,
                                 },
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
                             ageLimits : {
                                 '19-29 years': {
                                     principal: 24690,
                                     spouse: 18270 ,
                                     child: 11638 ,
                                 },
                                 '30-40 years': {
                                     principal: 25850 ,
                                     spouse: 19210 ,
                                     child: 11638 ,
                                 },
                                 '41-50 years': {
                                     principal: 30646 ,
                                     spouse: 23044 ,
                                     child: 11638 ,
                                 },
                                 '51-65 years': {
                                     principal: 37926 ,
                                     spouse: 28924 ,
                                     child: 11638 ,
                                 },
                             }
                            },
                            outpatientRates: {
                             coverLimit: 50000,
                             ageLimits : {
                                'All ages': {
                                    'M': 11775 ,
                                    'M+1': 22856 ,
                                    'M+2': 26252 ,
                                    'M+3': 30411 ,
                                    'M+4': 35408 ,
                                    'M+5': 41366 ,
                                },
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
                    {   inpatientRates : { coverLimit: 1_000_000,
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
                                amountOffered: 0,
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
                    {   inpatientRates : { coverLimit: 2_000_000,
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
                    {   inpatientRates : { coverLimit: 3_000_000,
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
                    {   inpatientRates : { coverLimit: 5_000_000,
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
                    {   inpatientRates : { coverLimit: 10_000_000,
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
            {   coverName: 'J Care Premium',
                    InsurancePlanOptions: [
                        {   inpatientRates : { coverLimit: 500_000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 18743 ,
                                    spouse: 13781 ,
                                    child: 9041 ,
                                },
                                '30-40 years': {
                                    principal: 19845 ,
                                    spouse: 16538 ,
                                    child: 9041 ,
                                },
                                '41-50 years': {
                                    principal: 20413 ,
                                    spouse: 17105 ,
                                    child: 9041 ,
                                },
                                '51-60 years': {
                                    principal: 27248 ,
                                    spouse: 22888 ,
                                    child: 9041 ,
                                },
                                '60+ years': {
                                    principal: 34061 ,
                                    spouse: 28610 ,
                                    child: 9041 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 50000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 24917 ,
                                },
                                '30-40 years': {
                                    principal: 24917 ,
                                },
                                '41-50 years': {
                                    principal: 28445 ,
                                },
                                '51-60 years': {
                                    principal: 33345 ,
                                },
                                '60+ years': {
                                    principal: 38036 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 80000,
                                    coverPremium: 26985,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
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
                        {   inpatientRates : { coverLimit: 1_000_000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 23373 ,
                                    spouse: 19625 ,
                                    child: 12679 ,
                                },
                                '30-40 years': {
                                    principal: 24365 ,
                                    spouse: 20507 ,
                                    child: 12679 ,
                                },
                                '41-50 years': {
                                    principal: 29216 ,
                                    spouse: 23704 ,
                                    child: 12679 ,
                                },
                                '51-60 years': {
                                    principal: 35820 ,
                                    spouse: 30065 ,
                                    child: 12679 ,
                                },
                                '60+ years': {
                                    principal: 44776 ,
                                    spouse: 37582 ,
                                    child: 12679 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 50000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 24917 ,
                                },
                                '30-40 years': {
                                    principal: 24917 ,
                                },
                                '41-50 years': {
                                    principal: 28445 ,
                                },
                                '51-60 years': {
                                    principal: 33345 ,
                                },
                                '60+ years': {
                                    principal: 38036 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 100000,
                                    coverPremium: 28980,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
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
                        {   inpatientRates : { coverLimit: 2_000_000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 27563 ,
                                    spouse: 23153 ,
                                    child: 15435 ,
                                },
                                '30-40 years': {
                                    principal: 29216 ,
                                    spouse: 24806 ,
                                    child: 15435 ,
                                },
                                '41-50 years': {
                                    principal: 36383 ,
                                    spouse: 29768 ,
                                    child: 15435 ,
                                },
                                '51-60 years': {
                                    principal: 43957 ,
                                    spouse: 36912 ,
                                    child: 15435 ,
                                },
                                '60+ years': {
                                    principal: 54946 ,
                                    spouse: 46140 ,
                                    child: 15435 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 80000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 26460 ,
                                },
                                '30-40 years': {
                                    principal: 26460 ,
                                },
                                '41-50 years': {
                                    principal: 32855 ,
                                },
                                '51-60 years': {
                                    principal: 38588 ,
                                },
                                '60+ years': {
                                    principal: 45754 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 120000,
                                    coverPremium: 31185,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
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
                        {   inpatientRates : { coverLimit: 3_000_000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 33075 ,
                                    spouse: 28665 ,
                                    child: 19073 ,
                                },
                                '30-40 years': {
                                    principal: 36162 ,
                                    spouse: 31421 ,
                                    child: 19073 ,
                                },
                                '41-50 years': {
                                    principal: 41895 ,
                                    spouse: 37485 ,
                                    child: 19073 ,
                                },
                                '51-60 years': {
                                    principal: 54871 ,
                                    spouse: 46040 ,
                                    child: 19073 ,
                                },
                                '60+ years': {
                                    principal: 60359 ,
                                    spouse: 50644 ,
                                    child: 19073 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 100000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 30319 ,
                                },
                                '30-40 years': {
                                    principal: 30319 ,
                                },
                                '41-50 years': {
                                    principal: 36934 ,
                                },
                                '51-60 years': {
                                    principal: 40793 ,
                                },
                                '60+ years': {
                                    principal: 47959 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 120000,
                                    coverPremium: 31185,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
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
                        {   inpatientRates : { coverLimit: 5_000_000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 38588 ,
                                    spouse: 34178 ,
                                    child: 22050 ,
                                },
                                '30-40 years': {
                                    principal: 40793 ,
                                    spouse: 35280 ,
                                    child: 22050 ,
                                },
                                '41-50 years': {
                                    principal: 50065 ,
                                    spouse: 42000 ,
                                    child: 22050 ,
                                },
                                '51-60 years': {
                                    principal: 63306 ,
                                    spouse: 53185 ,
                                    child: 22050 ,
                                },
                                '60+ years': {
                                    principal: 69636 ,
                                    spouse: 58503 ,
                                    child: 22050 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 150000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 34729 ,
                                },
                                '30-40 years': {
                                    principal: 34729 ,
                                },
                                '41-50 years': {
                                    principal: 38588 ,
                                },
                                '51-60 years': {
                                    principal: 42226 ,
                                },
                                '60+ years': {
                                    principal: 53802 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 150000,
                                    coverPremium: 37275,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
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
                        {   inpatientRates : { coverLimit: 10_000_000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 46305 ,
                                    spouse: 41013 ,
                                    child: 26460 ,
                                },
                                '30-40 years': {
                                    principal: 48951 ,
                                    spouse: 42336 ,
                                    child: 26460 ,
                                },
                                '41-50 years': {
                                    principal: 60077 ,
                                    spouse: 50400 ,
                                    child: 26460 ,
                                },
                                '51-60 years': {
                                    principal: 75967 ,
                                    spouse: 63822 ,
                                    child: 26460 ,
                                },
                                '60+ years': {
                                    principal: 83563 ,
                                    spouse: 70204 ,
                                    child: 26460 ,
                                },
                            }
                           },
                           outpatientRates: {
                            coverLimit: 200000,
                            ageLimits : {
                                '19-29 years': {
                                    principal: 38929 ,
                                },
                                '30-40 years': {
                                    principal: 38929 ,
                                },
                                '41-50 years': {
                                    principal: 42788 ,
                                },
                                '51-60 years': {
                                    principal: 46426 ,
                                },
                                '60+ years': {
                                    principal: 58002 ,
                                },
                            },
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 200000,
                                    coverPremium: 45350,
                                    coverStatus: 'The maternity cover is limited to per spouse per annum',
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