const individualInsurancePlans = {
    insuranceCompanies: [
        {   insuranceCompany: 'Madison Insurance Company',
            insuranceCoverPlans : [
                {  coverName: 'Madison Betterlife Premier Plan',
                    InsurancePlanOptions: [
                        {   inpatientRates : { coverLimit: 3_000_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years' ,
                                    principal: 42_600 ,
                                    spouse: 38_400 ,
                                    child: 27_700 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 42_600 ,
                                    spouse: 38_400 ,
                                    child: 27_700 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 42_600 ,
                                    spouse: 38_400 ,
                                    child: 27_700 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 61_800 ,
                                    spouse: 55_600 ,
                                    child: 27_700 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years' ,
                                    principal: 54_900 ,
                                    spouse: 49_400 ,
                                    child: 35_700 ,
                                },
                                {
                                    ageBracket: '30-39 years' ,
                                    principal: 54_900 ,
                                    spouse: 49_400 ,
                                    child: 35_700 ,
                                },
                                {
                                    ageBracket: '40-49 years' ,
                                    principal: 54_900 ,
                                    spouse: 49_400 ,
                                    child: 35_700 ,
                                },
                                {
                                    ageBracket: '50-59 years' ,
                                    principal: 79_600 ,
                                    spouse: 71_600 ,
                                    child: 35_700 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 150_000,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums',
                                    coverPremium: 44_500,
                                },      
                                dentalCover: {
                                    amountOffered: 30_000,
                                    coverStatus: 'The cover plan is offered within the outpatient cover',
                                    coverPremium: 0,
                                }, 
                                opticalCover: {
                                    amountOffered: 30_000,
                                    coverStatus: 'The cover plan is offered within the outpatient cover',
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
                             ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 46_600,
                                    spouse: 42_000,
                                    child: 30_300,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 46_600,
                                    spouse: 42_000,
                                    child: 30_300,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 46_600,
                                    spouse: 42_000,
                                    child: 30_300,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 67_600,
                                    spouse: 60_900,
                                    child: 30_300,
                                },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 57_400 ,
                                    spouse: 51_600 ,
                                    child: 37_300 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 57_400 ,
                                    spouse: 51_600 ,
                                    child: 37_300 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 57_400 ,
                                    spouse: 51_600 ,
                                    child: 37_300 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 83_200 ,
                                    spouse: 74_900 ,
                                    child: 37_300 ,
                                },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 200_000,
                                     coverStatus: 'The cover plan only supported upto the age of 49 years',
                                     coverPremium: 47_000,
                                 },      
                                 dentalCover: {
                                     amountOffered: 40_000,
                                     coverStatus: 'The cover plan is offered within the outpatient cover',
                                     coverPremium: 0,
                                 }, 
                                 opticalCover: {
                                     amountOffered: 40_000,
                                     coverStatus: 'The cover plan is offered within the outpatient cover',
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
                             ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 49_500,
                                    spouse: 44_500,
                                    child: 32_200,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 49_500,
                                    spouse: 44_500,
                                    child: 32_200,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 49_500,
                                    spouse: 44_500,
                                    child: 32_200,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 71_700,
                                    spouse: 64_500,
                                    child: 32_200,
                                },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 200_000,
                             ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 59_900,
                                    spouse: 53_900,
                                    child: 38_900,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 59_900,
                                    spouse: 53_900,
                                    child: 38_900,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 59_900,
                                    spouse: 53_900,
                                    child: 38_900,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 86_800,
                                    spouse: 78_200,
                                    child: 38_900,
                                },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 200_000,
                                     coverStatus: 'The cover plan only supported upto the age of 49 years',
                                     coverPremium: 0,
                                 },      
                                 dentalCover: {
                                     amountOffered: 50_000,
                                     coverStatus: 'The cover plan is offered within the outpatient cover',
                                     coverPremium: 0,
                                 }, 
                                 opticalCover: {
                                     amountOffered: 50_000,
                                     coverStatus: 'The cover plan is offered within the outpatient cover',
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
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 26_600,
                                    spouse: 23_900,
                                    child: 17_300,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 26_600,
                                    spouse: 23_900,
                                    child: 17_300,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 26_600,
                                    spouse: 23_900,
                                    child: 17_300,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 61_800 ,
                                    spouse: 55_600 ,
                                    child: 17_300,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 52_400,
                                    spouse: 47_100,
                                    child: 34_000,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 52_400,
                                    spouse: 47_100,
                                    child: 34_000,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 52_400,
                                    spouse: 47_100,
                                    child: 34_000,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 75_900,
                                    spouse: 68_300,
                                    child: 34_000,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 100_000,
                                    coverPremium: 41_700,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                },      
                                dentalCover: {
                                    amountOffered: 15_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan is offered within the outpatient cover',
                                }, 
                                opticalCover: {
                                    amountOffered: 15_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan is offered within the outpatient cover',
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
                                    ageBracket: '18-29 years',
                                     principal: 30_100,
                                     spouse: 27_100,
                                     child: 19_600,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 30_100,
                                     spouse: 27_100,
                                     child: 19_600,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 30_100,
                                     spouse: 27_100,
                                     child: 19_600,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 43_600,
                                     spouse: 39_200,
                                     child: 19_600,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 54_900,
                                     spouse: 49_400,
                                     child: 35_700,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 54_900,
                                     spouse: 49_400,
                                     child: 35_700,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 54_900,
                                     spouse: 49_400,
                                     child: 35_700,
                                 },
                                 {
                                    ageBracket: '50-50 years',
                                     principal: 79_600,
                                     spouse: 71_600,
                                     child: 35_700,
                                 },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 150_000,
                                     coverPremium: 44_500,
                                     coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                 },      
                                 dentalCover: {
                                     amountOffered: 15_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is offered within the outpatient cover',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 15_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is offered within the outpatient cover',
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
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 33_600,
                                     spouse: 30_200,
                                     child: 21_800,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 33_600,
                                     spouse: 30_200,
                                     child: 21_800,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 33_600,
                                     spouse: 30_200,
                                     child: 21_800,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 48_700,
                                     spouse: 43_800,
                                     child: 21_800,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 0,
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 150_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is supported for individuals upto the age of 49 years.',
                                 },      
                                 dentalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is offered within the outpatient cover',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is offered within the outpatient cover',
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
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 18_400,
                                    spouse: 0,
                                    child: 0,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 21_100,
                                    spouse: 0,
                                    child: 0,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 0,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                },      
                                dentalCover: {
                                    amountOffered: 10_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan does not offer this',
                                }, 
                                opticalCover: {
                                    amountOffered: 10_000,
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
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 21_200,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 75_000,
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 23_900,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 0,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                 },      
                                 dentalCover: {
                                     amountOffered: 12_500,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan does not offer this',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 12_500,
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
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 15_400,
                                    spouse: 13_900,
                                    child: 10_000,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 15_400,
                                    spouse: 13_900,
                                    child: 10_000,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 15_400,
                                    spouse: 13_900,
                                    child: 10_000,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 17_500,
                                    spouse: 15_700,
                                    child: 11_400,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 17_500,
                                    spouse: 15_700,
                                    child: 11_400,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 17_500,
                                    spouse: 15_700,
                                    child: 11_400,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 30_000,
                                    coverPremium: 18_400,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49 years',
                                },      
                                dentalCover: {
                                    amountOffered: 5_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan is offered within the outpatient limit',
                                }, 
                                opticalCover: {
                                    amountOffered: 5_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan is offered within the outpatient limit',
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
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 19_400,
                                     spouse: 17_500,
                                     child: 12_600,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 19_400,
                                     spouse: 17_500,
                                     child: 12_600,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 19_400,
                                     spouse: 17_500,
                                     child: 12_600,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 75_000,
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 23_500,
                                     spouse: 21_200,
                                     child: 15_300,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 23_500,
                                     spouse: 21_200,
                                     child: 15_300,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 23_500,
                                     spouse: 21_200,
                                     child: 15_300,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 0,
                                     spouse: 0,
                                     child: 0,
                                 },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 50_000,
                                     coverPremium: 25_000,
                                     coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                 },      
                                 dentalCover: {
                                     amountOffered: 10_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is offered within the outpatient limit.',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 10_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover plan is offered within the outpatient limit.',
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
                                   ageBracket: '18-29 years',
                                    principal: 21_400,
                                    spouse: 19_300,
                                    child: 13_900,
                                },
                                {
                                    ageBracket: '30-39 years',
                                     principal: 21_400,
                                     spouse: 19_300,
                                     child: 13_900,
                                 },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 21_400,
                                    spouse: 19_300,
                                    child: 13_900,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 26_500,
                                    spouse: 23_900,
                                    child: 17_200,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 26_500,
                                    spouse: 23_900,
                                    child: 17_200,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 26_500,
                                    spouse: 23_900,
                                    child: 17_200,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 0,
                                    spouse: 0,
                                    child: 0,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 75_000,
                                    coverPremium: 30_300,
                                    coverStatus: 'The cover plan is purchased seperately at the stupilated premiums and supports clients upto the age of 49Yrs',
                                },      
                                dentalCover: {
                                    amountOffered: 15_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan is offered within the outpatient limit.',
                                }, 
                                opticalCover: {
                                    amountOffered: 15_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover plan is offered within the outpatient limit.',
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
        {   insuranceCompany: 'UAP Old Mutual Insurance Company',
            insuranceCoverPlans : [
                {   coverName: 'UAP Old Mutual Afyaimara Junior',
                    InsurancePlanOptions: [
                        {   inpatientRates : { coverLimit: 500_000,
                            ageLimits : [
                                {
                                    ageBracket: '0-19 years',
                                    principal: 32_954 ,
                                    M_1: 51_785 ,
                                    M_2: 68_262 ,
                                    M_3: 82_385 ,
                                    M_4: 98_438 ,
                                    M_5: 116_162 ,
                                    'Extra Child': 17_724 ,
                                },
                                
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                    ageBracket: '0-19 years',
                                    principal: 24_990 ,
                                    M_1: 46_232 ,
                                    M_2: 46_463 ,
                                    M_3: 46_618 ,
                                    M_4: 46_734 ,
                                    M_5: 46_828 ,
                                    'Extra Child': 454 ,
                                },
                            ],
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
                             ageLimits : [
                                 {
                                    ageBracket: '0-19 years',
                                     principal: 34_602 ,
                                     M_1: 54_374 ,
                                     M_2: 71_675 ,
                                     M_3: 86_504 ,
                                     M_4: 103_360 ,
                                     M_5: 121_970 ,
                                     'Extra Child': 18_611 ,
                                 },
                                 
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 75_000,
                             ageLimits : [
                                 {
                                    ageBracket: '0-19 years',
                                     principal: 26_240 ,
                                     M_1: 48_543 ,
                                     M_2: 51_109 ,
                                     M_3: 55_941 ,
                                     M_4: 60_754 ,
                                     M_5: 63_217 ,
                                     'Extra Child': 649 ,
                                 },
                             ],
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
                             ageLimits : [
                                 {
                                    ageBracket: '0-19 years',
                                     principal: 37_716 ,
                                     M_1: 59_267 ,
                                     M_2: 80_469 ,
                                     M_3: 99_004 ,
                                     M_4: 116_042 ,
                                     M_5: 132_948 ,
                                     'Extra Child': 20_286 ,
                                 },
                                 
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 100_000,
                             ageLimits : [
                                 {
                                    ageBracket: '0-19 years',
                                     principal: 28_076 ,
                                     M_1: 51_941 ,
                                     M_2: 54_687 ,
                                     M_3: 67_129 ,
                                     M_4: 78_981 ,
                                     M_5: 85_343 ,
                                     'Extra Child': 974 ,
                                 },
                             ],
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
                             ageLimits : [
                                 {
                                    ageBracket: '0-19 years',
                                     principal: 40_356 ,
                                     M_1: 67_260 ,
                                     M_2: 90_800 ,
                                     M_3: 110_978 ,
                                     M_4: 131_156 ,
                                     M_5: 151_334 ,
                                     'Extra Child': 21_706 ,
                                 },     
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : [
                                 {
                                    ageBracket: '0-19 years',
                                     principal: 30_042 ,
                                     M_1: 55_577 ,
                                     M_2: 58_515 ,
                                     M_3: 80_555 ,
                                     M_4: 102_675 ,
                                     M_5: 115_213 ,
                                     'Extra Child': 1_363 ,
                                 },
                             ],
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
                             ageLimits : [
                                 {
                                    ageBracket: '0-19 years',
                                     principal: 29_538 ,
                                     M_1: 49_231 ,
                                     M_2: 66_462 ,
                                     M_3: 81_231 ,
                                     M_4: 96_000 ,
                                     M_5: 110_769 ,
                                     'Extra Child': 14_769 ,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 50_000,
                             ageLimits : [
                                 {
                                    ageBracket: '0-19 years',
                                     principal: 19_250 ,
                                     M_1: 35_613 ,
                                     M_2: 35_791 ,
                                     M_3: 35_910 ,
                                     M_4: 36_000 ,
                                     M_5: 36_072 ,
                                     'Extra Child': 350 ,
                                 },
                             ],
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
                              ageLimits : [
                                  {
                                    ageBracket: '0-19 years',
                                      principal: 31_015 ,
                                      M_1: 51_692 ,
                                      M_2: 69_785 ,
                                      M_3: 85_292 ,
                                      M_4: 100_800 ,
                                      M_5: 116_308 ,
                                      'Extra Child': 15_508 ,
                                  },
                                  
                              ]
                             },
                             outpatientRates: {
                              coverLimit: 75_000,
                              ageLimits : [
                                  {
                                    ageBracket: '0-19 years',
                                      principal: 20_213 ,
                                      M_1: 37_393 ,
                                      M_2: 39_370 ,
                                      M_3: 43_092 ,
                                      M_4: 46_800 ,
                                      M_5: 48_697 ,
                                      'Extra Child': 500 ,
                                  },
                              ],
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
                              ageLimits : [
                                  {
                                    ageBracket: '0-19 years',
                                      principal: 34_117 ,
                                      M_1: 56_862 ,
                                      M_2: 76_763 ,
                                      M_3: 93_822 ,
                                      M_4: 110_880 ,
                                      M_5: 127_938 ,
                                      'Extra Child': 17_058 ,
                                  },
                              ]
                             },
                             outpatientRates: {
                              coverLimit: 100_000,
                              ageLimits : [
                                  {
                                    ageBracket: '0-19 years',
                                      principal: 23_244 ,
                                      M_1: 43_002 ,
                                      M_2: 45_275 ,
                                      M_3: 51_710 ,
                                      M_4: 60_839 ,
                                      M_5: 65_741 ,
                                      'Extra Child': 750 ,
                                  },
                              ],
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
                              ageLimits : [
                                  {
                                    ageBracket: '0-19 years',
                                      principal: 37_529 ,
                                      M_1: 62_548 ,
                                      M_2: 84_439 ,
                                      M_3: 103_204 ,
                                      M_4: 121_968 ,
                                      M_5: 140_732 ,
                                      'Extra Child': 18_764 ,
                                  },
                                ]
                             },
                             outpatientRates: {
                              coverLimit: 150_000,
                              ageLimits : [
                                  {
                                    ageBracket: '0-19 years',
                                      principal: 26_731 ,
                                      M_1: 49_452 ,
                                      M_2: 52_066 ,
                                      M_3: 62_052 ,
                                      M_4: 79_091 ,
                                      M_5: 88_750 ,
                                      'Extra Child': 1_050 ,
                                  },
                              ],
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
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 32_257 ,
                                    spouse: 23_900 ,
                                    child: 13_929 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 33_863 ,
                                    spouse: 25_023 ,
                                    child: 13_929 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 38_059 ,
                                    spouse: 26_128 ,
                                    child: 13_929 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 55_550 ,
                                    spouse: 31_575 ,
                                    child: 13_929 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 55_550 ,
                                    spouse: 31_575 ,
                                    child: 13_929 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 82_829 ,
                                    spouse: 64_526 ,
                                    child: 13_929 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 32_934 ,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 50_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is provided within the inpatient limit',
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
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 34_284 ,
                                     spouse: 25_582 ,
                                     child: 17_102 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 35_223 ,
                                     spouse: 26_785 ,
                                     child: 17_102 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 39_385 ,
                                     spouse: 27_925 ,
                                     child: 17_102 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 56_704 ,
                                     spouse: 34_484 ,
                                     child: 17_102 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 56_704 ,
                                     spouse: 34_484 ,
                                     child: 17_102 ,
                                 },
                                 {
                                    ageBracket: '66+ years',
                                     principal: 95_227 ,
                                     spouse: 78_683 ,
                                     child: 17_102 ,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 60_000,
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 33_266 ,
                                     M_1: 49_269 ,
                                     M_2: 48_748 ,
                                     M_3: 54_844 ,
                                     M_4: 57_804 ,
                                     M_5: 58_095 ,
                                     M_6: 58_387 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 33_266 ,
                                     M_1: 49_269 ,
                                     M_2: 48_748 ,
                                     M_3: 54_844 ,
                                     M_4: 57_804 ,
                                     M_5: 58_095 ,
                                     M_6: 58_387 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 33_266 ,
                                     M_1: 49_269 ,
                                     M_2: 48_748 ,
                                     M_3: 54_844 ,
                                     M_4: 57_804 ,
                                     M_5: 58_095 ,
                                     M_6: 58_387 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 33_266 ,
                                     M_1: 49_269 ,
                                     M_2: 48_748 ,
                                     M_3: 54_844 ,
                                     M_4: 57_804 ,
                                     M_5: 58_095 ,
                                     M_6: 58_387 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 33_266 ,
                                     M_1: 49_269 ,
                                     M_2: 48_748 ,
                                     M_3: 54_844 ,
                                     M_4: 57_804 ,
                                     M_5: 58_095 ,
                                     M_6: 58_387 ,
                                 },
                                 {
                                    ageBracket: '66+ years',
                                     principal: 33_266 ,
                                     M_1: 49_269 ,
                                     M_2: 48_748 ,
                                     M_3: 54_844 ,
                                     M_4: 57_804 ,
                                     M_5: 58_095 ,
                                     M_6: 58_387 ,
                                 },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 75_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the inpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 34_284 ,
                                    spouse: 25_582 ,
                                    child: 17_102 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 35_223 ,
                                    spouse: 26_785 ,
                                    child: 17_102 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 39_385 ,
                                    spouse: 27_925 ,
                                    child: 17_102 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 56_704 ,
                                    spouse: 34_484 ,
                                    child: 17_102 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 56_704 ,
                                    spouse: 34_484 ,
                                    child: 17_102 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 95_227 ,
                                    spouse: 78_683 ,
                                    child: 17_102 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 32_934 ,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 50_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is provided within the inpatient limit',
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
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 49_172 ,
                                     spouse: 38_516 ,
                                     child: 26_795 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 52_342 ,
                                     spouse: 40_457 ,
                                     child: 26_795 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 62_185 ,
                                     spouse: 46_043 ,
                                     child: 26_795 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 76_889 ,
                                     spouse: 50_161 ,
                                     child: 26_795 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 76_889 ,
                                     spouse: 50_161 ,
                                     child: 26_795 ,
                                 },
                                 {
                                    ageBracket: '66+ years',
                                     principal: 142_417 ,
                                     spouse: 115_311 ,
                                     child: 26_795 ,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 100_000,
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal:35_226 ,
                                     M_1: 66_533 ,
                                     M_2: 82_895 ,
                                     M_3: 98_147 ,
                                     M_4: 98_245 ,
                                     M_5: 99_028 ,
                                     M_6: 99_282 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal:35_226 ,
                                     M_1: 66_533 ,
                                     M_2: 82_895 ,
                                     M_3: 98_147 ,
                                     M_4: 98_245 ,
                                     M_5: 99_028 ,
                                     M_6: 99_282 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal:35_226 ,
                                     M_1: 66_533 ,
                                     M_2: 82_895 ,
                                     M_3: 98_147 ,
                                     M_4: 98_245 ,
                                     M_5: 99_028 ,
                                     M_6: 99_282 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal:35_226 ,
                                     M_1: 66_533 ,
                                     M_2: 82_895 ,
                                     M_3: 98_147 ,
                                     M_4: 98_245 ,
                                     M_5: 99_028 ,
                                     M_6: 99_282 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal:35_226 ,
                                     M_1: 66_533 ,
                                     M_2: 82_895 ,
                                     M_3: 98_147 ,
                                     M_4: 98_245 ,
                                     M_5: 99_028 ,
                                     M_6: 99_282 ,
                                 },
                                 {
                                    ageBracket: '66+ years',
                                     principal: 35_226 ,
                                     M_1: 66_533 ,
                                     M_2: 82_895 ,
                                     M_3: 98_147 ,
                                     M_4: 98_245 ,
                                     M_5: 99_028 ,
                                     M_6: 99_282 ,
                                 },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 100_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the inpateint limit',
                                 },      
                                 dentalCover: {
                                     amountOffered: 10_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the outpatient limit',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 10_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the outpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 49_172 ,
                                    spouse: 38_516 ,
                                    child: 26_795 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 52_342 ,
                                    spouse: 40_457 ,
                                    child: 26_795 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 62_185 ,
                                    spouse: 46_043 ,
                                    child: 26_795 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 76_889 ,
                                    spouse: 50_161 ,
                                    child: 26_795 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 76_889 ,
                                    spouse: 50_161 ,
                                    child: 26_795 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 142_417 ,
                                    spouse: 115_311 ,
                                    child: 26_795 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 60_000,
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 75_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the inpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 49_172 ,
                                    spouse: 38_516 ,
                                    child: 26_795 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 52_342 ,
                                    spouse: 40_457 ,
                                    child: 26_795 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 62_185 ,
                                    spouse: 46_043 ,
                                    child: 26_795 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 76_889 ,
                                    spouse: 50_161 ,
                                    child: 26_795 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 76_889 ,
                                    spouse: 50_161 ,
                                    child: 26_795 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 142_417 ,
                                    spouse: 115_311 ,
                                    child: 26_795 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 32_934 ,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 50_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is provided within the inpatient limit',
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
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 53_025 ,
                                     spouse: 41_671 ,
                                     child: 28_496 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 56_437 ,
                                     spouse: 43_799 ,
                                     child: 28_496 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 62_634 ,
                                     spouse: 46_446 ,
                                     child: 28_496 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 82_030 ,
                                     spouse: 54_280 ,
                                     child: 28_496 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 82_030 ,
                                     spouse: 54_280 ,
                                     child: 28_496 ,
                                 },
                                 {
                                    ageBracket: '66+ years',
                                     principal: 162_180 ,
                                     spouse: 131_186 ,
                                     child: 28_496 ,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 37_892 ,
                                     M_1: 70_452 ,
                                     M_2: 88_794 ,
                                     M_3: 106_762 ,
                                     M_4: 121_829 ,
                                     M_5: 136_895 ,
                                     M_6: 148_202 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 37_892 ,
                                     M_1: 70_452 ,
                                     M_2: 88_794 ,
                                     M_3: 106_762 ,
                                     M_4: 121_829 ,
                                     M_5: 136_895 ,
                                     M_6: 148_202 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 37_892 ,
                                     M_1: 70_452 ,
                                     M_2: 88_794 ,
                                     M_3: 106_762 ,
                                     M_4: 121_829 ,
                                     M_5: 136_895 ,
                                     M_6: 148_202 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 37_892 ,
                                     M_1: 70_452 ,
                                     M_2: 88_794 ,
                                     M_3: 106_762 ,
                                     M_4: 121_829 ,
                                     M_5: 136_895 ,
                                     M_6: 148_202 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 37_892 ,
                                     M_1: 70_452 ,
                                     M_2: 88_794 ,
                                     M_3: 106_762 ,
                                     M_4: 121_829 ,
                                     M_5: 136_895 ,
                                     M_6: 148_202 ,
                                 },
                                 {
                                    ageBracket: '66+ years',
                                     principal: 37_892 ,
                                     M_1: 70_452 ,
                                     M_2: 88_794 ,
                                     M_3: 106_762 ,
                                     M_4: 121_829 ,
                                     M_5: 136_895 ,
                                     M_6: 148_202 ,
                                 },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 150_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the inpatient limit',
                                 },      
                                 dentalCover: {
                                     amountOffered: 15_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the outpatient limit',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 15_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the outpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 53_025 ,
                                    spouse: 41_671 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 56_437 ,
                                    spouse: 43_799 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 62_634 ,
                                    spouse: 46_446 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 82_030 ,
                                    spouse: 54_280 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 82_030 ,
                                    spouse: 54_280 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 162_180 ,
                                    spouse: 131_186 ,
                                    child: 28_496 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal:35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal:35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal:35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal:35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal:35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 100_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the inpateint limit',
                                },      
                                dentalCover: {
                                    amountOffered: 10_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the outpatient limit',
                                }, 
                                opticalCover: {
                                    amountOffered: 10_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the outpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 53_025 ,
                                    spouse: 41_671 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 56_437 ,
                                    spouse: 43_799 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 62_634 ,
                                    spouse: 46_446 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 82_030 ,
                                    spouse: 54_280 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 82_030 ,
                                    spouse: 54_280 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 162_180 ,
                                    spouse: 131_186 ,
                                    child: 28_496 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 60_000,
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 75_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the inpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 53_025 ,
                                    spouse: 41_671 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 56_437 ,
                                    spouse: 43_799 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 62_634 ,
                                    spouse: 46_446 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 82_030 ,
                                    spouse: 54_280 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 82_030 ,
                                    spouse: 54_280 ,
                                    child: 28_496 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 162_180 ,
                                    spouse: 131_186 ,
                                    child: 28_496 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 32_934 ,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 50_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is provided within the inpatient limit',
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
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 60_535 ,
                                     spouse: 46_337 ,
                                     child: 31_578 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 64_692 ,
                                     spouse: 48_736 ,
                                     child: 31_578 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 68_870 ,
                                     spouse: 49_650 ,
                                     child: 31_578 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 91_449 ,
                                     spouse: 60_121 ,
                                     child: 31_578 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 91_449 ,
                                     spouse: 60_121 ,
                                     child: 31_578 ,
                                 },
                                {
                                    ageBracket: '66+ years',
                                     principal: 185_511 ,
                                     spouse: 145_655 ,
                                     child: 31_578 ,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 200_000,
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 41_512 ,
                                     M_1: 77_987 ,
                                     M_2: 92_489 ,
                                     M_3: 111_223 ,
                                     M_4: 126_966 ,
                                     M_5: 142_709 ,
                                     M_6: 157_539 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 41_512 ,
                                     M_1: 77_987 ,
                                     M_2: 92_489 ,
                                     M_3: 111_223 ,
                                     M_4: 126_966 ,
                                     M_5: 142_709 ,
                                     M_6: 157_539 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 41_512 ,
                                     M_1: 77_987 ,
                                     M_2: 92_489 ,
                                     M_3: 111_223 ,
                                     M_4: 126_966 ,
                                     M_5: 142_709 ,
                                     M_6: 157_539 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 41_512 ,
                                     M_1: 77_987 ,
                                     M_2: 92_489 ,
                                     M_3: 111_223 ,
                                     M_4: 126_966 ,
                                     M_5: 142_709 ,
                                     M_6: 157_539 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 41_512 ,
                                     M_1: 77_987 ,
                                     M_2: 92_489 ,
                                     M_3: 111_223 ,
                                     M_4: 126_966 ,
                                     M_5: 142_709 ,
                                     M_6: 157_539 ,
                                 },
                                {
                                    ageBracket: '66+ years',
                                     principal: 41_512 ,
                                     M_1: 77_987 ,
                                     M_2: 92_489 ,
                                     M_3: 111_223 ,
                                     M_4: 126_966 ,
                                     M_5: 142_709 ,
                                     M_6: 157_539 ,
                                 },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 200_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the inpatient limit',
                                 },      
                                 dentalCover: {
                                     amountOffered: 15_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the outpatient limit',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 15_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the outpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 60_535 ,
                                    spouse: 46_337 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 64_692 ,
                                    spouse: 48_736 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 68_870 ,
                                    spouse: 49_650 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 91_449 ,
                                    spouse: 60_121 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 91_449 ,
                                    spouse: 60_121 ,
                                    child: 31_578 ,
                                },
                               {
                                   ageBracket: '66+ years',
                                    principal: 185_511 ,
                                    spouse: 145_655 ,
                                    child: 31_578 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 150_000,
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 37_892 ,
                                    M_1: 70_452 ,
                                    M_2: 88_794 ,
                                    M_3: 106_762 ,
                                    M_4: 121_829 ,
                                    M_5: 136_895 ,
                                    M_6: 148_202 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 37_892 ,
                                    M_1: 70_452 ,
                                    M_2: 88_794 ,
                                    M_3: 106_762 ,
                                    M_4: 121_829 ,
                                    M_5: 136_895 ,
                                    M_6: 148_202 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 37_892 ,
                                    M_1: 70_452 ,
                                    M_2: 88_794 ,
                                    M_3: 106_762 ,
                                    M_4: 121_829 ,
                                    M_5: 136_895 ,
                                    M_6: 148_202 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 37_892 ,
                                    M_1: 70_452 ,
                                    M_2: 88_794 ,
                                    M_3: 106_762 ,
                                    M_4: 121_829 ,
                                    M_5: 136_895 ,
                                    M_6: 148_202 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 37_892 ,
                                    M_1: 70_452 ,
                                    M_2: 88_794 ,
                                    M_3: 106_762 ,
                                    M_4: 121_829 ,
                                    M_5: 136_895 ,
                                    M_6: 148_202 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 37_892 ,
                                    M_1: 70_452 ,
                                    M_2: 88_794 ,
                                    M_3: 106_762 ,
                                    M_4: 121_829 ,
                                    M_5: 136_895 ,
                                    M_6: 148_202 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 150_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the inpatient limit',
                                },      
                                dentalCover: {
                                    amountOffered: 15_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the outpatient limit',
                                }, 
                                opticalCover: {
                                    amountOffered: 15_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the outpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 60_535 ,
                                    spouse: 46_337 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 64_692 ,
                                    spouse: 48_736 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 68_870 ,
                                    spouse: 49_650 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 91_449 ,
                                    spouse: 60_121 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 91_449 ,
                                    spouse: 60_121 ,
                                    child: 31_578 ,
                                },
                               {
                                   ageBracket: '66+ years',
                                    principal: 185_511 ,
                                    spouse: 145_655 ,
                                    child: 31_578 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal:35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal:35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal:35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal:35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal:35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 35_226 ,
                                    M_1: 66_533 ,
                                    M_2: 82_895 ,
                                    M_3: 98_147 ,
                                    M_4: 98_245 ,
                                    M_5: 99_028 ,
                                    M_6: 99_282 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 100_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the inpateint limit',
                                },      
                                dentalCover: {
                                    amountOffered: 10_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the outpatient limit',
                                }, 
                                opticalCover: {
                                    amountOffered: 10_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the outpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 60_535 ,
                                    spouse: 46_337 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 64_692 ,
                                    spouse: 48_736 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 68_870 ,
                                    spouse: 49_650 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 91_449 ,
                                    spouse: 60_121 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 91_449 ,
                                    spouse: 60_121 ,
                                    child: 31_578 ,
                                },
                               {
                                   ageBracket: '66+ years',
                                    principal: 185_511 ,
                                    spouse: 145_655 ,
                                    child: 31_578 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 60_000,
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                                {
                                   ageBracket: '66+ years',
                                    principal: 33_266 ,
                                    M_1: 49_269 ,
                                    M_2: 48_748 ,
                                    M_3: 54_844 ,
                                    M_4: 57_804 ,
                                    M_5: 58_095 ,
                                    M_6: 58_387 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 75_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the inpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 60_535 ,
                                    spouse: 46_337 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 64_692 ,
                                    spouse: 48_736 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 68_870 ,
                                    spouse: 49_650 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 91_449 ,
                                    spouse: 60_121 ,
                                    child: 31_578 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 91_449 ,
                                    spouse: 60_121 ,
                                    child: 31_578 ,
                                },
                               {
                                   ageBracket: '66+ years',
                                    principal: 185_511 ,
                                    spouse: 145_655 ,
                                    child: 31_578 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 32_934,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 32_934 ,
                                    M_1: 44_986 ,
                                    M_2: 48_748 ,
                                    M_3: 48_797 ,
                                    M_4: 48_846 ,
                                    M_5: 49_339 ,
                                    M_6: 49_837 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 50_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is provided within the inpatient limit',
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
                            ageLimits : [
                                {
                                    ageBracket: '66+ years',
                                    principal: 116_352 ,
                                    spouse: 0,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [
                                {
                                    ageBracket: '66+ years',
                                    principal: 94_968 ,
                                    spouse: 0,
                                },
                            ],
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
                                    coverStatus: 'The cover is offered within the outpatient limit',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover is offered within the outpatient limit',
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
                             ageLimits : [
                                 {
                                    ageBracket: '66+ years',
                                     principal: 132_299 ,
                                     spouse: 0,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 150_000,
                             ageLimits : [
                                 {
                                    ageBracket: '66+ years',
                                     principal: 101_270 ,
                                     spouse: 0,
                                 },
                             ],
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
                                     coverStatus: 'The cover is offered within the outpatient limit',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 16_176,
                                     coverStatus: 'The cover is offered within the outpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '66+ years',
                                    principal: 132_299 ,
                                    spouse: 0,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [
                                {
                                    ageBracket: '66+ years',
                                    principal: 94_968 ,
                                    spouse: 0,
                                },
                            ],
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
                                    coverStatus: 'The cover is offered within the outpatient limit',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover is offered within the outpatient limit',
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
                             ageLimits : [
                                 {
                                    ageBracket: '66+ years',
                                     principal: 178_535 ,
                                     spouse: 0,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 200_000,
                             ageLimits : [
                                 {
                                    ageBracket: '66+ years',
                                     'M': 107_534 ,
                                     spouse: 0,
                                 },
                             ],
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
                                     coverStatus: 'The cover is offered at the stated premium rates',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 16_176,
                                     coverStatus: 'The cover is offered at the stated premium rates',
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
                            ageLimits : [
                                {
                                   ageBracket: '66+ years',
                                    principal: 178_535 ,
                                    spouse: 0,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 150_000,
                            ageLimits : [
                                {
                                   ageBracket: '66+ years',
                                    principal: 101_270 ,
                                    spouse: 0,
                                },
                            ],
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
                                    coverStatus: 'The cover is offered within the outpatient limit',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover is offered within the outpatient limit',
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
                        ageLimits : [
                            {
                               ageBracket: '66+ years',
                                principal: 178_535 ,
                                spouse: 0,
                            },
                        ]
                       },
                       outpatientRates: {
                        coverLimit: 100_000,
                        ageLimits : [
                            {
                                ageBracket: '66+ years',
                                principal: 94_968 ,
                                spouse: 0,
                            },
                        ],
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
                                coverStatus: 'The cover is offered within the outpatient limit',
                            }, 
                            opticalCover: {
                                amountOffered: 20_000,
                                coverPremium: 16_176,
                                coverStatus: 'The cover is offered within the outpatient limit',
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
                             ageLimits : [
                                 {
                                    ageBracket: '66+ years',
                                     principal: 206_231 ,
                                     spouse: 0,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 200_000,
                             ageLimits : [
                                 {
                                    ageBracket: '66+ years',
                                     'M': 107_534 ,
                                     spouse: 0,
                                 },
                             ],
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
                                     coverStatus: 'The cover is offered within the stated premium rates',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 20_000,
                                     coverPremium: 16_176,
                                     coverStatus: 'The cover is offered within the stated premium rates',
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
                            ageLimits : [
                                {
                                   ageBracket: '66+ years',
                                    principal: 206_231 ,
                                    spouse: 0,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 200_000,
                            ageLimits : [
                                {
                                   ageBracket: '66+ years',
                                    'M': 107_534 ,
                                    spouse: 0,
                                },
                            ],
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
                                    coverStatus: 'The cover is offered at the stated premium rates',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover is offered at the stated premium rates',
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
                        ageLimits : [
                            {
                               ageBracket: '66+ years',
                                principal: 206_231 ,
                                spouse: 0,
                            },
                        ]
                       },
                       outpatientRates: {
                        coverLimit: 150_000,
                        ageLimits : [
                            {
                               ageBracket: '66+ years',
                                principal: 101_270 ,
                                spouse: 0,
                            },
                        ],
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
                                coverStatus: 'The cover is offered within the outpatient limit',
                            }, 
                            opticalCover: {
                                amountOffered: 20_000,
                                coverPremium: 16_176,
                                coverStatus: 'The cover is offered within the outpatient limit',
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
                        ageLimits : [
                        {
                           ageBracket: '66+ years',
                            principal: 206_231 ,
                            spouse: 0,
                        },
                    ]
                   },
                   outpatientRates: {
                    coverLimit: 100_000,
                    ageLimits : [
                        {
                            ageBracket: '66+ years',
                            principal: 94_968 ,
                            spouse: 0,
                        },
                    ],
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
                            coverStatus: 'The cover is offered within the outpatient limit',
                        }, 
                        opticalCover: {
                            amountOffered: 20_000,
                            coverPremium: 16_176,
                            coverStatus: 'The cover is offered within the outpatient limit',
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
                            ageLimits : [
                                {
                                    ageBracket: '66+ years',
                                    principal: 229_049 ,
                                    spouse: 0,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 200_000,
                            ageLimits : [
                                {
                                    ageBracket: '66+ years',
                                    'M': 107_534 ,
                                    spouse: 0,
                                },
                            ],
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
                                    coverStatus: 'The cover is offered at the states premium rates',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover is offered at the states premium rates',
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
                            ageLimits : [
                                {
                                    ageBracket: '66+ years',
                                    principal: 229_049 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 200_000,
                            ageLimits : [
                                {
                                   ageBracket: '66+ years',
                                    'M': 107_534 ,
                                },
                            ],
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
                                    coverStatus: 'The cover is offered at the stated premium rates',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover is offered at the stated premium rates',
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
                            ageLimits : [
                                {
                                    ageBracket: '66+ years',
                                    principal: 229_049 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 150_000,
                            ageLimits : [
                                {
                                   ageBracket: '66+ years',
                                    principal: 101_270 ,
                                },
                            ],
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
                                    coverStatus: 'The cover is offered within the outpatient limit',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover is offered within the outpatient limit',
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
                            ageLimits : [
                                {
                                    ageBracket: '66+ years',
                                    principal: 229_049 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [
                                {
                                    ageBracket: '66+ years',
                                    principal: 94_968 ,
                                },
                            ],
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
                                    coverStatus: 'The cover is offered within the outpatient limit',
                                }, 
                                opticalCover: {
                                    amountOffered: 20_000,
                                    coverPremium: 16_176,
                                    coverStatus: 'The cover is offered within the outpatient limit',
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
                        {   inpatientRates : { coverLimit: 100_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 11_184 ,
                                    spouse: 9_438 ,
                                    child: 5_438 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 11_752 ,
                                    spouse: 9_846 ,
                                    child: 5_438 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 14_100 ,
                                    spouse: 11_722 ,
                                    child: 5_438 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 17_662 ,
                                    spouse: 14_600 ,
                                    child: 5_438 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 17_662 ,
                                    spouse: 14_600 ,
                                    child: 5_438 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 25_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                            ],
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
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 14_833 ,
                                     spouse: 11_223 ,
                                     child: 6_725 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 15_471 ,
                                     spouse: 11_681 ,
                                     child: 6_725 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 18_111 ,
                                     spouse: 13_791 ,
                                     child: 6_725 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 22_117 ,
                                     spouse: 17_027 ,
                                     child: 6_725 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 22_117 ,
                                     spouse: 17_027 ,
                                     child: 6_725 ,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 40_000,
                             ageLimits : [
                                    {
                                        ageBracket: '18-29 years',
                                         principal: 10_821 ,
                                         M_1: 18_050 ,
                                         M_2: 22_120 ,
                                         M_3: 26_647 ,
                                         M_4: 30_788 ,
                                         M_5: 34_661 ,
                                     },
                                     {
                                        ageBracket: '30-39 years',
                                         principal: 10_821 ,
                                         M_1: 18_050 ,
                                         M_2: 22_120 ,
                                         M_3: 26_647 ,
                                         M_4: 30_788 ,
                                         M_5: 34_661 ,
                                     },
                                     {
                                        ageBracket: '40-49 years',
                                         principal: 10_821 ,
                                         M_1: 18_050 ,
                                         M_2: 22_120 ,
                                         M_3: 26_647 ,
                                         M_4: 30_788 ,
                                         M_5: 34_661 ,
                                     },
                                     {
                                        ageBracket: '50-59 years',
                                         principal: 10_821 ,
                                         M_1: 18_050 ,
                                         M_2: 22_120 ,
                                         M_3: 26_647 ,
                                         M_4: 30_788 ,
                                         M_5: 34_661 ,
                                     },
                                     {
                                        ageBracket: '60-65 years',
                                         principal: 10_821 ,
                                         M_1: 18_050 ,
                                         M_2: 22_120 ,
                                         M_3: 26_647 ,
                                         M_4: 30_788 ,
                                         M_5: 34_661 ,
                                     },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 30_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the inpatiet limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 14_833 ,
                                    spouse: 11_223 ,
                                    child: 6_725 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 15_471 ,
                                    spouse: 11_681 ,
                                    child: 6_725 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 18_111 ,
                                    spouse: 13_791 ,
                                    child: 6_725 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 22_117 ,
                                    spouse: 17_027 ,
                                    child: 6_725 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 22_117 ,
                                    spouse: 17_027 ,
                                    child: 6_725 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 25_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                            ],
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
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 23_189 ,
                                     spouse: 17_818 ,
                                     child: 10_552 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 24_203 ,
                                     spouse: 18_638 ,
                                     child: 10_552 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 28_495 ,
                                     spouse: 22_072 ,
                                     child: 10_552 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 34_445 ,
                                     spouse: 26_662 ,
                                     child: 10_552 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 34_445 ,
                                     spouse: 26_662 ,
                                     child: 10_552 ,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 50_000,
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 11_775 ,
                                     M_1: 22_856 ,
                                     M_2: 26_252 ,
                                     M_3: 30_411 ,
                                     M_4: 35_408 ,
                                     M_5: 41_366 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 11_775 ,
                                     M_1: 22_856 ,
                                     M_2: 26_252 ,
                                     M_3: 30_411 ,
                                     M_4: 35_408 ,
                                     M_5: 41_366 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 11_775 ,
                                     M_1: 22_856 ,
                                     M_2: 26_252 ,
                                     M_3: 30_411 ,
                                     M_4: 35_408 ,
                                     M_5: 41_366 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 11_775 ,
                                     M_1: 22_856 ,
                                     M_2: 26_252 ,
                                     M_3: 30_411 ,
                                     M_4: 35_408 ,
                                     M_5: 41_366 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 11_775 ,
                                     M_1: 22_856 ,
                                     M_2: 26_252 ,
                                     M_3: 30_411 ,
                                     M_4: 35_408 ,
                                     M_5: 41_366 ,
                                 },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 40_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the inpatient limit',
                                 },      
                                 dentalCover: {
                                     amountOffered: 10_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the outpatient limit',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 10_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the outpatient limit',
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
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 23_189 ,
                                    spouse: 17_818 ,
                                    child: 10_552 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 24_203 ,
                                    spouse: 18_638 ,
                                    child: 10_552 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 28_495 ,
                                    spouse: 22_072 ,
                                    child: 10_552 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 34_445 ,
                                    spouse: 26_662 ,
                                    child: 10_552 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 34_445 ,
                                    spouse: 26_662 ,
                                    child: 10_552 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 25_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 9_390 ,
                                    M_1: 10_841 ,
                                    M_2: 15_921 ,
                                    M_3: 21_002 ,
                                    M_4: 23_856 ,
                                    M_5: 24_603 ,
                                },
                            ],
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
                        ageLimits : [
                            {
                               ageBracket: '18-29 years',
                                principal: 23_189 ,
                                spouse: 17_818 ,
                                child: 10_552 ,
                            },
                            {
                               ageBracket: '30-39 years',
                                principal: 24_203 ,
                                spouse: 18_638 ,
                                child: 10_552 ,
                            },
                            {
                               ageBracket: '40-49 years',
                                principal: 28_495 ,
                                spouse: 22_072 ,
                                child: 10_552 ,
                            },
                            {
                               ageBracket: '50-59 years',
                                principal: 34_445 ,
                                spouse: 26_662 ,
                                child: 10_552 ,
                            },
                            {
                               ageBracket: '60-65 years',
                                principal: 34_445 ,
                                spouse: 26_662 ,
                                child: 10_552 ,
                            },
                        ]
                       },
                       outpatientRates: {
                        coverLimit: 40_000,
                        ageLimits : [
                               {
                                   ageBracket: '18-29 years',
                                    principal: 10_821 ,
                                    M_1: 18_050 ,
                                    M_2: 22_120 ,
                                    M_3: 26_647 ,
                                    M_4: 30_788 ,
                                    M_5: 34_661 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 10_821 ,
                                    M_1: 18_050 ,
                                    M_2: 22_120 ,
                                    M_3: 26_647 ,
                                    M_4: 30_788 ,
                                    M_5: 34_661 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 10_821 ,
                                    M_1: 18_050 ,
                                    M_2: 22_120 ,
                                    M_3: 26_647 ,
                                    M_4: 30_788 ,
                                    M_5: 34_661 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 10_821 ,
                                    M_1: 18_050 ,
                                    M_2: 22_120 ,
                                    M_3: 26_647 ,
                                    M_4: 30_788 ,
                                    M_5: 34_661 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 10_821 ,
                                    M_1: 18_050 ,
                                    M_2: 22_120 ,
                                    M_3: 26_647 ,
                                    M_4: 30_788 ,
                                    M_5: 34_661 ,
                                },
                        ],
                       },
                       secondaryCoverFeatures : {
                            maternityCover: {
                                amountOffered: 30_000,
                                coverPremium: 0,
                                coverStatus: 'The cover is offered within the inpatiet limit',
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
                             ageLimits : [
                                 {
                                    ageBracket: '18-29 years',
                                     principal: 26_908,
                                     spouse: 20_488 ,
                                     child: 13_856 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 28_068 ,
                                     spouse: 21_428 ,
                                     child: 13_856 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 32_864 ,
                                     spouse: 25_262 ,
                                     child: 13_856 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 40_144 ,
                                     spouse: 31_142 ,
                                     child: 13_856 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 40_144 ,
                                     spouse: 31_142 ,
                                     child: 13_856 ,
                                 },
                             ]
                            },
                            outpatientRates: {
                             coverLimit: 50_000,
                             ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                     principal: 11_775,
                                     M_1: 22_856 ,
                                    M_2: 26_252 ,
                                    M_3: 30_411 ,
                                    M_4: 35_408 ,
                                    M_5: 41_366 ,
                                 },
                                 {
                                    ageBracket: '30-39 years',
                                     principal: 11_775 ,
                                     M_1: 22_856 ,
                                    M_2: 26_252 ,
                                    M_3: 30_411 ,
                                    M_4: 35_408 ,
                                    M_5: 41_366 ,
                                 },
                                 {
                                    ageBracket: '40-49 years',
                                     principal: 11_775 ,
                                     M_1: 22_856 ,
                                    M_2: 26_252 ,
                                    M_3: 30_411 ,
                                    M_4: 35_408 ,
                                    M_5: 41_366 ,
                                 },
                                 {
                                    ageBracket: '50-59 years',
                                     principal: 11_775 ,
                                     M_1: 22_856 ,
                                    M_2: 26_252 ,
                                    M_3: 30_411 ,
                                    M_4: 35_408 ,
                                    M_5: 41_366 ,
                                 },
                                 {
                                    ageBracket: '60-65 years',
                                     principal: 11_775 ,
                                     M_1: 22_856 ,
                                    M_2: 26_252 ,
                                    M_3: 30_411 ,
                                    M_4: 35_408 ,
                                    M_5: 41_366 ,
                                 },
                             ],
                            },
                            secondaryCoverFeatures : {
                                 maternityCover: {
                                     amountOffered: 50_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the inpatient limit',
                                 },      
                                 dentalCover: {
                                     amountOffered: 10_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the outpatient limit',
                                 }, 
                                 opticalCover: {
                                     amountOffered: 10_000,
                                     coverPremium: 0,
                                     coverStatus: 'The cover is offered within the outpatient limit',
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
                        {   inpatientRates : { coverLimit: 1_000_000,
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 26_908,
                                    spouse: 20_488 ,
                                    child: 13_856 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 28_068 ,
                                    spouse: 21_428 ,
                                    child: 13_856 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 32_864 ,
                                    spouse: 25_262 ,
                                    child: 13_856 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 40_144 ,
                                    spouse: 31_142 ,
                                    child: 13_856 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 40_144 ,
                                    spouse: 31_142 ,
                                    child: 13_856 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                   ageBracket: '18-29 years',
                                    principal: 11_775 ,
                                    M_1: 22_856 ,
                                    M_2: 26_252 ,
                                    M_3: 30_411 ,
                                    M_4: 35_408 ,
                                    M_5: 41_366 ,
                                },
                                {
                                   ageBracket: '30-39 years',
                                    principal: 11_775 ,
                                    M_1: 22_856 ,
                                    M_2: 26_252 ,
                                    M_3: 30_411 ,
                                    M_4: 35_408 ,
                                    M_5: 41_366 ,
                                },
                                {
                                   ageBracket: '40-49 years',
                                    principal: 11_775 ,
                                    M_1: 22_856 ,
                                    M_2: 26_252 ,
                                    M_3: 30_411 ,
                                    M_4: 35_408 ,
                                    M_5: 41_366 ,
                                },
                                {
                                   ageBracket: '50-59 years',
                                    principal: 11_775 ,
                                    M_1: 22_856 ,
                                    M_2: 26_252 ,
                                    M_3: 30_411 ,
                                    M_4: 35_408 ,
                                    M_5: 41_366 ,
                                },
                                {
                                   ageBracket: '60-65 years',
                                    principal: 11_775 ,
                                    M_1: 22_856 ,
                                    M_2: 26_252 ,
                                    M_3: 30_411 ,
                                    M_4: 35_408 ,
                                    M_5: 41_366 ,
                                },
                            ],
                           },
                           secondaryCoverFeatures : {
                                maternityCover: {
                                    amountOffered: 40_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the inpatient limit',
                                },      
                                dentalCover: {
                                    amountOffered: 10_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the outpatient limit',
                                }, 
                                opticalCover: {
                                    amountOffered: 10_000,
                                    coverPremium: 0,
                                    coverStatus: 'The cover is offered within the outpatient limit',
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
                        ageLimits : [
                            {
                               ageBracket: '18-29 years',
                                principal: 26_908,
                                spouse: 20_488 ,
                                child: 13_856 ,
                            },
                            {
                               ageBracket: '30-39 years',
                                principal: 28_068 ,
                                spouse: 21_428 ,
                                child: 13_856 ,
                            },
                            {
                               ageBracket: '40-49 years',
                                principal: 32_864 ,
                                spouse: 25_262 ,
                                child: 13_856 ,
                            },
                            {
                               ageBracket: '50-59 years',
                                principal: 40_144 ,
                                spouse: 31_142 ,
                                child: 13_856 ,
                            },
                            {
                               ageBracket: '60-65 years',
                                principal: 40_144 ,
                                spouse: 31_142 ,
                                child: 13_856 ,
                            },
                        ]
                       },
                       outpatientRates: {
                        coverLimit: 25_000,
                        ageLimits : [
                            {
                                ageBracket: '18-29 years',
                                principal: 9_390 ,
                                M_1: 10_841 ,
                                M_2: 15_921 ,
                                M_3: 21_002 ,
                                M_4: 23_856 ,
                                M_5: 24_603 ,
                            },
                            {
                                ageBracket: '30-39 years',
                                principal: 9_390 ,
                                M_1: 10_841 ,
                                M_2: 15_921 ,
                                M_3: 21_002 ,
                                M_4: 23_856 ,
                                M_5: 24_603 ,
                            },
                            {
                                ageBracket: '40-49 years',
                                principal: 9_390 ,
                                M_1: 10_841 ,
                                M_2: 15_921 ,
                                M_3: 21_002 ,
                                M_4: 23_856 ,
                                M_5: 24_603 ,
                            },
                            {
                                ageBracket: '50-59 years',
                                principal: 9_390 ,
                                M_1: 10_841 ,
                                M_2: 15_921 ,
                                M_3: 21_002 ,
                                M_4: 23_856 ,
                                M_5: 24_603 ,
                            },
                            {
                                ageBracket: '60-65 years',
                                principal: 9_390 ,
                                M_1: 10_841 ,
                                M_2: 15_921 ,
                                M_3: 21_002 ,
                                M_4: 23_856 ,
                                M_5: 24_603 ,
                            },
                        ],
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
                    ageLimits : [
                        {
                           ageBracket: '18-29 years',
                            principal: 26_908,
                            spouse: 20_488 ,
                            child: 13_856 ,
                        },
                        {
                           ageBracket: '30-39 years',
                            principal: 28_068 ,
                            spouse: 21_428 ,
                            child: 13_856 ,
                        },
                        {
                           ageBracket: '40-49 years',
                            principal: 32_864 ,
                            spouse: 25_262 ,
                            child: 13_856 ,
                        },
                        {
                           ageBracket: '50-59 years',
                            principal: 40_144 ,
                            spouse: 31_142 ,
                            child: 13_856 ,
                        },
                        {
                           ageBracket: '60-65 years',
                            principal: 40_144 ,
                            spouse: 31_142 ,
                            child: 13_856 ,
                        },
                    ]
                   },
                   outpatientRates: {
                    coverLimit: 40_000,
                    ageLimits : [
                           {
                               ageBracket: '18-29 years',
                                principal: 10_821 ,
                                M_1: 18_050 ,
                                M_2: 22_120 ,
                                M_3: 26_647 ,
                                M_4: 30_788 ,
                                M_5: 34_661 ,
                            },
                            {
                               ageBracket: '30-39 years',
                                principal: 10_821 ,
                                M_1: 18_050 ,
                                M_2: 22_120 ,
                                M_3: 26_647 ,
                                M_4: 30_788 ,
                                M_5: 34_661 ,
                            },
                            {
                               ageBracket: '40-49 years',
                                principal: 10_821 ,
                                M_1: 18_050 ,
                                M_2: 22_120 ,
                                M_3: 26_647 ,
                                M_4: 30_788 ,
                                M_5: 34_661 ,
                            },
                            {
                               ageBracket: '50-59 years',
                                principal: 10_821 ,
                                M_1: 18_050 ,
                                M_2: 22_120 ,
                                M_3: 26_647 ,
                                M_4: 30_788 ,
                                M_5: 34_661 ,
                            },
                            {
                               ageBracket: '60-65 years',
                                principal: 10_821 ,
                                M_1: 18_050 ,
                                M_2: 22_120 ,
                                M_3: 26_647 ,
                                M_4: 30_788 ,
                                M_5: 34_661 ,
                            },
                    ],
                   },
                   secondaryCoverFeatures : {
                        maternityCover: {
                            amountOffered: 30_000,
                            coverPremium: 0,
                            coverStatus: 'The cover is offered within the inpatiet limit',
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
                percentageTax: 0.45,
            },
        },
        {   insuranceCompany: 'Jubilee Health Insurance Company',
            insuranceCoverPlans : [
            {   coverName: 'J Care Junior',
                InsurancePlanOptions: [
                    {   inpatientRates : { coverLimit: 500_000,
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 18_743 ,
                            },
                        ]
                       },
                       outpatientRates: {
                        coverLimit: 50_000,
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 24_917 ,
                            },
                        ],
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
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 23_373 ,
                            },
                        ]
                       },
                       outpatientRates: {
                        coverLimit: 50_000,
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 24_917 ,
                            },
                        ],
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
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 27_563 ,
                            },
                        ]
                       },
                       outpatientRates: {
                        coverLimit: 80_000,
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 26_460 ,
                            },
                        ],
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
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 33_075 ,
                            },
                        ]
                       },
                       outpatientRates: {
                        coverLimit: 100_000,
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 30_319 ,
                            },
                        ],
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
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 38_588 ,
                            },
                        ]
                       },
                       outpatientRates: {
                        coverLimit: 150_000,
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 34_729 ,
                            },
                        ],
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
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 46_305 ,
                            },
                        ]
                       },
                       outpatientRates: {
                        coverLimit: 200_000,
                        ageLimits : [
                            {
                                ageBracket: '0-17 years',
                                principal: 38_929 ,
                            },
                        ],
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
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 18_743 ,
                                    spouse: 13_781 ,
                                    child: 9_041 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 19_845 ,
                                    spouse: 16_538 ,
                                    child: 9_041 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 20_413 ,
                                    spouse: 17_105 ,
                                    child: 9_041 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 27_248 ,
                                    spouse: 22_888 ,
                                    child: 9_041 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 34_061 ,
                                    spouse: 28_610 ,
                                    child: 9_041 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 34_061 ,
                                    spouse: 28_610 ,
                                    child: 9_041 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 24_917 ,
                                    spouse:  24_917 ,
                                    child: 24_917 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 24_917 ,
                                    spouse: 24_917 ,
                                    child: 24_917 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 28_445 ,
                                    spouse: 28_445 ,
                                    child: 28_445 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 33_345 ,
                                    spouse: 33_345 ,
                                    child: 33_345 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 38_036 ,
                                    spouse: 38_036 ,
                                    child: 38_036 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 38_036 ,
                                    spouse: 38_036 ,
                                    child: 38_036 ,
                                },
                            ],
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
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 23_373 ,
                                    spouse: 19_625 ,
                                    child: 12_679 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 24_365 ,
                                    spouse: 20_507 ,
                                    child: 12_679 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 29_216 ,
                                    spouse: 23_704 ,
                                    child: 12_679 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 35_820 ,
                                    spouse: 30_065 ,
                                    child: 12_679 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 44_776 ,
                                    spouse: 37_582 ,
                                    child: 12_679 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 44_776 ,
                                    spouse: 37_582 ,
                                    child: 12_679 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 50_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 24_917 ,
                                    spouse: 24_917 ,
                                    child: 24_917 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 24_917 ,
                                    spouse: 24_917 ,
                                    child: 24_917 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 28_445 ,
                                    spouse: 28_445 ,
                                    child: 28_445 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 33_345 ,
                                    spouse: 33_345 ,
                                    child: 33_345 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 38_036 ,
                                    spouse: 38_036 ,
                                    child: 38_036 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 38_036 ,
                                    spouse: 38_036 ,
                                    child: 38_036 ,
                                },
                            ],
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
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 27_563 ,
                                    spouse: 23_153 ,
                                    child: 15_435 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 29_216 ,
                                    spouse: 24_806 ,
                                    child: 15_435 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 36_383 ,
                                    spouse: 29_768 ,
                                    child: 15_435 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 43_957 ,
                                    spouse: 36_912 ,
                                    child: 15_435 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 54_946 ,
                                    spouse: 46_140 ,
                                    child: 15_435 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 54_946 ,
                                    spouse: 46_140 ,
                                    child: 15_435 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 80_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 26_460 ,
                                    spouse: 26_460 ,
                                    child: 26_460 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 26_460 ,
                                    spouse: 26_460 ,
                                    child: 26_460 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 32_855 ,
                                    spouse: 32_855,
                                    child: 32_855 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 38_588 ,
                                    spouse: 38_588 ,
                                    child: 38_588 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 45_754 ,
                                    spouse: 45_754 ,
                                    child: 45_754 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 45_754 ,
                                    spouse: 45_754 ,
                                    child: 45_754 ,
                                },
                            ],
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
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 33_075 ,
                                    spouse: 28_665 ,
                                    child: 19_073 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 36_162 ,
                                    spouse: 31_421 ,
                                    child: 19_073 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 41_895 ,
                                    spouse: 37_485 ,
                                    child: 19_073 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 54_871 ,
                                    spouse: 46_040 ,
                                    child: 19_073 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 60_359 ,
                                    spouse: 50_644 ,
                                    child: 19_073 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 60_359 ,
                                    spouse: 50_644 ,
                                    child: 19_073 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 100_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 30_319 ,
                                    spouse: 30_319 ,
                                    child: 30_319 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 30_319 ,
                                    spouse: 30_319 ,
                                    child: 30_319 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 36_934 ,
                                    spouse: 36_934 ,
                                    child: 36_934 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 40_793 ,
                                    spouse: 40_793 ,
                                    child: 40_793 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 47_959 ,
                                    spouse: 47_959 ,
                                    child: 47_959 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 47_959 ,
                                    spouse: 47_959 ,
                                    child: 47_959 ,
                                },
                            ],
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
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 38_588 ,
                                    spouse: 34_178 ,
                                    child: 22_050 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 40_793 ,
                                    spouse: 35_280 ,
                                    child: 22_050 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 50_065 ,
                                    spouse: 42_000 ,
                                    child: 22_050 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 63_306 ,
                                    spouse: 53_185 ,
                                    child: 22_050 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 69_636 ,
                                    spouse: 58_503 ,
                                    child: 22_050 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 69_636 ,
                                    spouse: 58_503 ,
                                    child: 22_050 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 150_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 34_729 ,
                                    spouse: 34_729 ,
                                    child: 34_729 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 34_729 ,
                                    spouse: 34_729 ,
                                    child: 34_729 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 38_588 ,
                                    spouse: 38_588 ,
                                    child: 38_588 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 42_226 ,
                                    spouse: 42_226 ,
                                    child: 42_226 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 53_802 ,
                                    spouse: 53_802 ,
                                    child: 53_802 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 53_802 ,
                                    spouse: 53_802 ,
                                    child: 53_802 ,
                                },
                            ],
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
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 46_305 ,
                                    spouse: 41_013 ,
                                    child: 26_460 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 48_951 ,
                                    spouse: 42_336 ,
                                    child: 26_460 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 60_077 ,
                                    spouse: 50_400 ,
                                    child: 26_460 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 75_967 ,
                                    spouse: 63_822 ,
                                    child: 26_460 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 83_563 ,
                                    spouse: 70_204 ,
                                    child: 26_460 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 83_563 ,
                                    spouse: 70_204 ,
                                    child: 26_460 ,
                                },
                            ]
                           },
                           outpatientRates: {
                            coverLimit: 200_000,
                            ageLimits : [
                                {
                                    ageBracket: '18-29 years',
                                    principal: 38_929 ,
                                    spouse: 38_929 ,
                                    child: 38_929 ,
                                },
                                {
                                    ageBracket: '30-39 years',
                                    principal: 38_929 ,
                                    spouse: 38_929 ,
                                    child: 38_929 ,
                                },
                                {
                                    ageBracket: '40-49 years',
                                    principal: 42_788 ,
                                    spouse: 42_788 ,
                                    child: 42_788 ,
                                },
                                {
                                    ageBracket: '50-59 years',
                                    principal: 46_426 ,
                                    spouse: 46_426 ,
                                    child: 46_426 ,
                                },
                                {
                                    ageBracket: '60-65 years',
                                    principal: 58_002 ,
                                    spouse: 58_002 ,
                                    child: 58_002 ,
                                },
                                {
                                    ageBracket: '66+ years',
                                    principal: 58_002 ,
                                    spouse: 58_002 ,
                                    child: 58_002 ,
                                },
                            ],
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