
const industryObject = {
    'At scale SW, data & platforms': {
        ASSDP: 'At scale SW, data & platforms'
    },
    'Automotive': {
        VS: 'Vehicle Supplier',
        VOEM: 'Vehicle OEM',
        UNK: 'Unknown',
        MS: 'Mobility Services' 
    },
    'Banking': {
        UB: 'Universal Banks',
        BNK: 'Banking',
        UNK: 'Unknown'
    },
    'Capital Markets': {
        CMS: 'Capital Markets/Securities'
    },
    'Consumer Goods': {
        FB: 'Food & Beverage',
        WD: 'Wholesale Distribution',
        CG: 'Consumer Goods'
    },
    'Defense': {
        NS: 'National Security',
        DEF: 'Defense',
        UNK: 'Unknown'

    },
    'Defense Industrial Base': {
        DIB: 'Defense Industrial Base'
    },
    'Dig Native Startups & Unicorns': {
        DNSU: 'Dig Native Startups & Unicorns'
    },
    'Discrete Manufacturing': {
        SMC: 'Semiconductor',
        IM: 'Industrial Machinery',
        HTE: 'High Tech Electronics',
        UNK: 'Unknown',
        ARS: 'Aerospace'
    },
    'Gaming': {
        GM: 'Gaming'
    },
    'Gov Ops & Infrastructure': {
        ERI: 'Energy & Resrc Infrastructure',
        CG: 'Central Government',
        GO: 'Government Operations',
        TI: 'Transportation Infrastructure',
        GOII: 'Gov Ops & Infrastructure ISVs',
        LRG: 'Local & Regional Government'
    },
    'Health Payor': {
        HP: 'Health Payor'
    },
    'Health Pharma': {
        BT: 'Biotech',
        PH: 'Pharma'
    },
    'Health Provider': {
        HP: 'Health Provider',
        UNK: 'Unknown'
    },
    'Higher Education': {
        HE: 'Higher Education',
        UNK: 'Unknown'
    },
    'Hospitality': {
        AC: 'Accommodation',
        UNK: 'Unknown'
    },
    'Hosting': {
        HOS: 'Hosting',
        UNK: 'Unknown'
    },
    'Insurance': {
        ID: 'Insurance Direct',
        IO: 'Insurance Other'
    },
    'Intelligence': {
        IA: 'Intelligence Agencies'
    },
    'IT Services & Business Advisory': {
        ITS: 'IT Services',
        MOS: 'Managed Outsourced Services',
        ATS: 'Accounting & Tax Services',
        MC: 'Management Consulting'
    },
    'Libraries & Museums': {
        LM: 'Libraries & Museums'
    },
    'Media & Entertainment': {
        BDC: 'Broadcasters',
        ADV: 'Advertising',
        MEEP: 'Media&Entertmnt Equip Providrs',
        PUB: 'Publishing',
        FSA: 'Film, Studio, Animation',
        SLE: 'Sports & Live Experiences',
        CS: 'Cable & Satellite',
        UNK: 'Unknown'
    },
    'MedTech': {
        MT: 'MedTech'
    },
    'Mining': {
        MN: 'Mining'
    },
    'Nonprofit & IGO': {
        RSCH: 'Research',
        NPHHS: 'NonProfit Health & Human Srvc',
        FBO: 'Faith Based Organizations',
        EAW: 'Environmental & Animal Welfare',
        UNK: 'Unknown',
        GDA: 'Global Development & Aid',
        IO: 'International Organizations',
        CP: 'Charities & Philanthropic',
        NPAC: 'NonProfit Aged Care',
        MO: 'Membership Organizations'
    },
    'Oil & Gas': {
        OG: 'Oil & Gas',
        UNK: 'Unknown'
    },
    'Other - Unsegmented': {
        OU: 'Other - Unsegmented',
        UNK: 'Unknown'
    },
    'Other': {
        UNK: 'Unknown'
    },
    'Other Professional Services': {
        AE: 'Architecture & Engineering',
        UNK: 'Unknown',
        SS: 'Staffing Services',
        LS: 'Legal Services',
        OS: 'Other Services'
    },
    'Other Services': {
        UNK: 'Unknown'
    },
    'Power & Utilities': {
        PU: 'Power & Utilities'
    },
    'Primary & Secondary Edu/K-12': {
        PSEK: 'Primary & Secondary Edu/ K-12'
    },
    'Process Manufacturing': {
        CHMCLS: 'Chemicals',
        UNK: 'Unknown',
        AB: 'AgriBusiness'
    },
    'Public Finance': {
        TR: 'Tax & Revenue',
        FBT: 'Finance, Budget & Treasury'
    },
    'Public Safety & Justice': {
        PUSFT: 'Public Safety',
        JUS: 'Justice',
        SEC: 'Security'
    },
    'Real Estate': {
        RE: 'Real Estate',
        CONS: 'Construction',
        UNK: 'Unknown'
    },
    'Retailers': {
        GM: 'General Merchandise',
        FS: 'Food Service',
        HPC: 'Health & Personal Care',
        SR: 'Specialty Retail',
        GRC: 'Grocery',
        MVPD: 'Motor Vehicle & Parts Dealers',
        RCG: 'Retail Convenience/Gas'
    },
    'Social Svcs & Public Health': {
        GSP: 'Government Social Programs',
        PCH: 'Public & Community Health',
        UNK: 'Unknown'
    },
    'Telecommunications': {
        CNSP: 'Comms&Ntwrk Service Providers',
        CNEP: 'Comms&Ntwrk Equip Providers',
        HISP: 'Hosters & ISPs',
        UNK: 'Unknown'
    },
    'Transport & Travel': {
        TH: 'Travel & Hospitality',
        TL: 'Transport & Logistics'
    },
    'Water & Sewage': {
        WS: 'Water & Sewage'
    }
};

const onlyIndustry = [
    'At scale SW, data & platforms',
    'Automotive',
    'Banking',
    'Capital Markets',
    'Consumer Goods',
    'Defense',
    'Defense Industrial Base',
    'Dig Native Startups & Unicorns',
    'Discrete Manufacturing',
    'Gaming',
    'Gov Ops & Infrastructure',
    'Health Payor',
    'Health Pharma',
    'Health Provider',
    'Higher Education',
    'Hospitality',
    'Hosting',
    'Insurance',
    'Intelligence',
    'IT Services & Business Advisory',
    'Libraries & Museums',
    'Media & Entertainment',
    'MedTech',
    'Mining',
    'Nonprofit & IGO',
    'Oil & Gas',
    'Other - Unsegmented',
    'Other',
    'Other Professional Services',
    'Other Services',
    'Power & Utilities',
    'Primary & Secondary Edu/K-12',
    'Process Manufacturing',
    'Public Finance',
    'Public Safety & Justice',
    'Real Estate',
    'Retailers',
    'Social Svcs & Public Health',
    'Telecommunications',
    'Transport & Travel',
    'Water & Sewage'
];

const onlyVertical = [
    'Mobility Services',
    'Vehicle OEM',
    'Vehicle Supplier',
    'Insurance Direct',
    'Insurance Other',
    'Justice',
    'Public Safety',
    'Security',
    'AgriBusiness',
    'Transport & Logistics',
    'Travel & Hospitality',
    'Banking',
    'Universal Banks',
    'Consumer Goods',
    'Food & Beverage',
    'Wholesale Distribution',
    'Defense',
    'National Security',
    'High Tech Electronics',
    'Gaming',
    'Health Payor',
    'Health Provider',
    'Higher Education',
    'Libraries & Museums',
    'Advertising',
    'Broadcasters',
    'Cable & Satellite',
    'Media&Entertmnt Equip Providrs',
    'Publishing',
    'Charities & Philanthropic',
    'International Organizations',
    'Membership Organizations',
    'Other - Unsegmented',
    'Primary & Secondary Edu/ K-12',
    'Food Service',
    'General Merchandise',
    'Grocery',
    'Health & Personal Care',
    'Motor Vehicle & Parts Dealers',
    'Retail Convenience/Gas',
    'Specialty Retail',
    'Comms&Ntwrk Equip Providers',
    'Comms&Ntwrk Service Providers',
    'Hosters & ISPs',
    'Capital Markets/Securities',
    'Intelligence Agencies',
    'Faith Based Organizations',
    'Unknown',
    'Environmental & Animal Welfare',
    'Construction',
    'Real Estate',
    'Global Development & Aid',
    'Semiconductor',
    'Accommodation',
    'Sports & Live Experiences',
    'Mining',
    'NonProfit Aged Care',
    'NonProfit Health & Human Srvc',
    'Research',
    'Oil & Gas',
    'Legal Services',
    'Other Services',
    'Power & Utilities',
    'Chemicals',
    'Finance, Budget & Treasury',
    'Tax & Revenue',
    'Government Social Programs',
    'Public & Community Health',
    'Water & Sewage',
    'At scale SW, data & platforms',
    'Defense Industrial Base',
    'Dig Native Startups & Unicorns',
    'Aerospace',
    'Industrial Machinery',
    'Biotech',
    'Pharma',
    'Accounting & Tax Services',
    'IT Services',
    'Managed Outsourced Services',
    'Management Consulting',
    'Film, Studio, Animation',
    'MedTech',
    'Architecture & Engineering',
    'Staffing Services',
    'Central Government',
    'Energy & Resrc Infrastructure',
    'Gov Ops & Infrastructure ISVs',
    'Government Operations',
    'Local & Regional Government',
    'Transportation Infrastructure'
];


let input = "Automotive (All Verticals), Automotive (Mobility Services), Automotive (Vehicle OEM), Automotive (Vehicle Supplier), Consumer Goods (All Verticals), Insurance (All Verticals), Insurance (Insurance Direct), Insurance (Insurance Other), Public Safety & Justice (All Verticals), Public Safety & Justice (Justice), Public Safety & Justice (Public Safety), Public Safety & Justice (Security), Process Manufacturing (AgriBusiness), Transport & Travel (All Verticals), Transport & Travel (Transport & Logistics), Transport & Travel (Travel & Hospitality), Banking (All Verticals), Banking (Banking), Banking (Universal Banks), Consumer Goods (Consumer Goods), Consumer Goods (Food & Beverage), Consumer Goods (Wholesale Distribution), Defense (All Verticals), Defense (Defense), Defense (National Security), Discrete Manufacturing (All Verticals), Discrete Manufacturing (High Tech Electronics), Gaming (Gaming), Health Payor (Health Payor), Health Provider (Health Provider), Higher Education (Higher Education), Libraries & Museums (Libraries & Museums), Media & Entertainment (All Verticals), Media & Entertainment (Advertising), Media & Entertainment (Broadcasters), Media & Entertainment (Cable & Satellite), Media & Entertainment (Media&Entertmnt Equip Providrs), Media & Entertainment (Publishing), Nonprofit & IGO (All Verticals), Nonprofit & IGO (Charities & Philanthropic), Nonprofit & IGO (International Organizations), Nonprofit & IGO (Membership Organizations), Other - Unsegmented (Other - Unsegmented), Primary & Secondary Edu/K-12 (Primary & Secondary Edu/ K-12), Retailers (All Verticals), Retailers (Food Service), Retailers (General Merchandise), Retailers (Grocery), Retailers (Health & Personal Care), Retailers (Motor Vehicle & Parts Dealers), Retailers (Retail Convenience/Gas), Retailers (Specialty Retail), Telecommunications (All Verticals), Telecommunications (Comms&Ntwrk Equip Providers), Telecommunications (Comms&Ntwrk Service Providers), Telecommunications (Hosters & ISPs), Capital Markets (Capital Markets/Securities), Intelligence (Intelligence Agencies), Nonprofit & IGO (Faith Based Organizations), Automotive (Unknown), Nonprofit & IGO (Environmental & Animal Welfare), Real Estate (All Verticals), Real Estate (Construction), Real Estate (Real Estate), Banking (Unknown), Defense (Unknown), Discrete Manufacturing (Unknown), Health Provider (Unknown), Higher Education (Unknown), Insurance (Unknown), Media & Entertainment (Unknown), Nonprofit & IGO (Global Development & Aid), Nonprofit & IGO (Unknown), Other - Unsegmented (Unknown), Real Estate (Unknown), Telecommunications (Unknown), Discrete Manufacturing (Semiconductor), Health Provider (All Verticals), Hospitality (All Verticals), Hospitality (Accommodation), Hospitality (Unknown), Higher Education (All Verticals), Media & Entertainment (Sports & Live Experiences), Mining (Mining), Nonprofit & IGO (NonProfit Aged Care), Nonprofit & IGO (NonProfit Health & Human Srvc), Nonprofit & IGO (Research), Oil & Gas (Oil & Gas), Other Professional Services (Legal Services), Other Professional Services (Unknown), Other Professional Services (Other Services), Process Manufacturing (All Verticals), Power & Utilities (Power & Utilities), Process Manufacturing (Chemicals), Process Manufacturing (Unknown), Public Finance (All Verticals), Public Finance (Finance, Budget & Treasury), Public Finance (Tax & Revenue), Social Svcs & Public Health (All Verticals), Social Svcs & Public Health (Government Social Programs), Social Svcs & Public Health (Public & Community Health), Water & Sewage (Water & Sewage), At scale SW, data & platforms (At scale SW, data & platforms), Defense Industrial Base (Defense Industrial Base), Dig Native Startups & Unicorns (Dig Native Startups & Unicorns), Discrete Manufacturing (Aerospace), Discrete Manufacturing (Industrial Machinery), Health Pharma (All Verticals), Health Pharma (Biotech), Health Pharma (Pharma), IT Services & Business Advisory (All Verticals), IT Services & Business Advisory (Accounting & Tax Services), IT Services & Business Advisory (IT Services), IT Services & Business Advisory (Managed Outsourced Services), IT Services & Business Advisory (Management Consulting), Media & Entertainment (Film, Studio, Animation), MedTech (MedTech), Other Professional Services (Architecture & Engineering), Other Professional Services (Staffing Services), Other Services (Unknown), Social Svcs & Public Health (Unknown), Gov Ops & Infrastructure (All Verticals), Gov Ops & Infrastructure (Central Government), Other Professional Services (All Verticals), Other (Unknown), Gov Ops & Infrastructure (Energy & Resrc Infrastructure), Gov Ops & Infrastructure (Gov Ops & Infrastructure ISVs), Gov Ops & Infrastructure (Government Operations), Gov Ops & Infrastructure (Local & Regional Government), Gov Ops & Infrastructure (Transportation Infrastructure), Hosting (Unknown)"

let inputArray = input
.split("), ")
.map((industry, i, array) => i < array.length - 1 ? industry = industry.concat(")") : industry)

let newIndustryArray = [];
let newVerticalArray = [];

for (let i = 0; i < inputArray.length; i++) {

    let completeIndustry = inputArray[i];

    if (completeIndustry.includes("(Deprecated)")) continue;

    let newIndustry = onlyIndustry.find(industry => completeIndustry.includes(industry));

    if (completeIndustry.includes("(All Verticals)")) {

        let countIndustry = 0;

        for (let j = 0; j < inputArray.length; j++) {
                            
            let completeIndustry2 = inputArray[j];

            let newIndustry2 = onlyIndustry.find(industry => completeIndustry2.includes(industry));

            if (newIndustry2 == newIndustry) countIndustry++;

        }

        if (countIndustry == 1) {
            
            !newIndustryArray.includes(newIndustry) && newIndustryArray.push(newIndustry);
            
            Object.values(industryObject[newIndustry]).forEach(vertical => !newVerticalArray.includes(vertical) && newVerticalArray.push(vertical));
        
        }
    
    } else {

        let newVertical = onlyVertical.find(vertical => completeIndustry.includes(vertical))
        !newIndustryArray.includes(newIndustry) && newIndustryArray.push(newIndustry);
        !newVerticalArray.includes(newVertical) && newVertical != undefined && newVerticalArray.push(newVertical);
    }
}


newIndustryArray = newIndustryArray.map(industry => `'${industry}'`);

newVerticalArray = newVerticalArray.map(vertical => `'${vertical}'`);


// console.log(`AND OPV.IndustryName in (\n\t${newIndustryArray.join(`,\n\t`)}\n)`);


// console.log(`AND OPV.VerticalName in (\n\t${newVerticalArray.join(`,\n\t`)}\n)`);



const MKInput = "Architect CXO, Business Development CXO, Accounting and Finance DM, Business Development DM, Community and Social Services DM, Compliance DM, Customer Service and Support DM, Healthcare Services DM, Human Resources DM, Legal DM, Marketing DM, Media and Communication DM, Operations DM, Program and Project Management DM, Purchasing DM, Research DM, Sales DM, Supply and Logistics DM, Developer DM, Developer User, Accounting and Finance CXO, Community and Social Services CXO, Compliance CXO, Customer Service and Support CXO, Data Professional CXO, Developer CXO, Education CXO, Engineering CXO, Healthcare Services CXO, Human Resources CXO, Information Technology CXO, Legal CXO, Marketing CXO, Media and Communication CXO, Operations CXO, Other CXO, Product Management CXO, Program and Project Management CXO, Purchasing CXO, Research CXO, Sales CXO, Security CXO, Architect DM, Architect User, Data Professional DM, Data Professional User, Engineering DM, Engineering User, Information Technology DM, Information Technology User, Product Management DM, Product Management User, Security DM, Security User, Compliance User, Accounting and Finance User, Business Development User, Community and Social Services User, Customer Service and Support User, Healthcare Services User, Human Resources User, Legal User, Marketing User, Media and Communication User, Operations User, Other DM, Other User, Program and Project Management User, Purchasing User, Research User, Sales User, Supply and Logistics User, Education DM, Education User, Unclassified, Supply and Logistics CXO"

const inputMAArray = MKInput.split(", ");

// console.log(inputMAArray)

const CGInput = "EXECUTIVES, BDM, OTHER PROFESSIONALS, DEVELOPER, UNKNOWN, IT PROFESSIONALS, STUDENT/EDUCATOR"

const inputCGArray = CGInput.split(", ")

// console.log(inputCGArray);

const JBRInput = "BUSINESS DEVELOPMENT MANAGER, DATA GOVERNANCE MANAGER, DIRECTOR DATA MANAGEMENT, DIRECTOR DATA SCIENCE, DIRECTOR OF BUSINESS OPERATIONS, DIRECTOR OF OPERATIONS, MANAGER DATA MANAGEMENT";

const inputJBRArray = JBRInput.split(", ")

console.log(inputJBRArray);






// /**IND CLASSIFCATION**/
// AND (
// 	/*BOB audience*/  IsNull(IPV.CustomerGroup,'UNKNOWN') in/*UCMP_V1.2_UPDATE REPLACED(IPV.MPAAAudience)*/ ('BDM','EXECUTIVES','IT PROFESSIONALS','OTHER PROFESSIONALS','STUDENT/EDUCATOR','DEVELOPER','UNKNOWN')
					
// 					or IPV.CustomerGroup in ('')
// 					and IPV.MarketingAudience in ('')
// 					or IPV.JobRole in ('')
// 					/*UCMP_V1.2_UPDATE REMOVED(IPV.StandardJobTitle like '%%')*/
// 					or IPV.JobTitle like '%%'
// 	)


// Nulls = Unsegmented in Marketing Audience
// /**IND CLASSIFCATION**/
// AND (
//  /*BOB audience*/  IsNull(IPV.CustomerGroup,'UNKNOWN') in/*UCMP_V1.2_UPDATE REPLACED(IPV.MPAAAudience)*/ ('BDM','EXECUTIVES','IT PROFESSIONALS','OTHER PROFESSIONALS','STUDENT/EDUCATOR','DEVELOPER','UNKNOWN')
					
// 				and IPV.CustomerGroup in ('')
// 				AND IsNull(IPV.MarketingAudience,'UnSegmented') in/*UCMP_V1.2_UPDATE */ ('')
// 				and IPV.JobRole in ('')
// 				and IPV.JobRole Like/*UCMP_V1.2_UPDATE REPLACED(IPV.StandardJobTitle)*/ '%%'
// 				and IPV.JobTitle like '%%'
// 	)