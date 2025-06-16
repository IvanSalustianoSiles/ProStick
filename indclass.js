let results = { 
    MA: {},
    CG: {},
    JBR: {},
    rest: {
        MA: {},
        CG: {},
        JBR: {},
        extra: {}
    }
}


let builderSQLArray = extractActiveSqlLines(inputTest);

let builderMarketingAudienceRawArray = [];

let builderCustomerGroupRawArray = [];

let builderJobRoleRawArray = [];

let startPushingMarketingAudience = 0;

let startPushingCustomerGroup = 0;

let startPushingJobRole = 0;

let IPVBooleanCustomerGroup = 0;

let IPVBooleanMarketingAudience = 0;

let IPVBooleanJobRole = 0;

for (let i = 0; i < builderSQLArray.length; i++) {

    let row = builderSQLArray[i];

    let nextRow = builderSQLArray[i+1] ? builderSQLArray[i+1] : "";

    if (row.replace(/\[/g, "").replace(/\]/g, "").replace(/ /g, "").toLowerCase().includes("ipv.customergroup")) startPushingCustomerGroup = 1;

    if (row.replace(/\[/g, "").replace(/\]/g, "").replace(/ /g, "").toLowerCase().includes("ipv.marketingaudience")) startPushingMarketingAudience = 1;

    if (row.replace(/\[/g, "").replace(/\]/g, "").replace(/ /g, "").toLowerCase().includes("ipv.jobrole")) startPushingJobRole = 1;

    if (row.replace(/ /g, "").includes("()") || row.replace(/ /g, "").includes(`""`) || row.replace(/ /g, "").includes(`''`)) results.rest.extra["parenthesis"] = "- Parenthesis shouldn't be empty.\n";

    if (row[row.length - 1] == ")" && nextRow.includes("OR") || row.replace(/ /g, "").includes("OR(")) results.rest.extra["ORERROR"] = `- Please change the OR between filters for an AND.\n`;

    if (startPushingMarketingAudience == 1) {

        if (row.replace(/\[/g, "").replace(/\]/g, "").replace(/ /g, "").toLowerCase().includes("ipv.marketingaudience")) {

            IPVBooleanMarketingAudience++;
        }
        
        IPVBooleanMarketingAudience == 1 &&  builderMarketingAudienceRawArray.push(row);

        if (builderSQLArray[i+1].includes(")") || /in\s*\(.*\)/i.test(row)) startPushingMarketingAudience = 0;
        
    }

    if (startPushingCustomerGroup == 1) {

        if (row.replace(/\[/g, "").replace(/\]/g, "").replace(/ /g, "").toLowerCase().includes("ipv.customergroup")) {

            IPVBooleanCustomerGroup++;
        }
        
        IPVBooleanCustomerGroup == 1 &&  builderCustomerGroupRawArray.push(row);

        if (builderSQLArray[i+1].includes(")") || /in\s*\(.*\)/i.test(row)) startPushingCustomerGroup = 0;
        
    }

    if (startPushingJobRole == 1) {
        
        if (row.replace(/\[/g, "").replace(/\]/g, "").replace(/ /g, "").toLowerCase().includes("ipv.jobrole")) {

            IPVBooleanJobRole++;
        }
        
        IPVBooleanJobRole == 1 &&  builderJobRoleRawArray.push(row);

        if (builderSQLArray[i+1].includes(")") || /in\s*\(.*\)/i.test(row)) startPushingJobRole = 0;
        
    }
};

// Charging builder's arrays

let builderMarketingAudienceArray = chargingBuildersArray(builderMarketingAudienceRawArray);

let builderCustomerGroupArray = chargingBuildersArray(builderCustomerGroupRawArray);

let builderJobRoleArray = chargingBuildersArray(builderJobRoleRawArray);


// Validation for missing things

list.marketingAudience = inputMKArray || [];
    
list.customerGroup = inputCGArray || [];
    
list.jobRole = inputJBRArray || [];


// Marketing Audience

for (let i = 0; i < list.marketingAudience.length; i++) {

    let marketingAudience = list.marketingAudience[i];

    results.marketingAudience[marketingAudience] = 0;

    if (builderMarketingAudienceArray.includes(marketingAudience)) results.marketingAudience[marketingAudience] = 1;

}

// Job Role

for (let i = 0; i < list.jobRole.length; i++) {

    let jobRole = list.jobRole[i];

    results.jobRole[jobRole] = 0;

    if (builderJobRoleArray.includes(jobRole)) results.jobRole[jobRole] = 1;

}

// Customer Group

for (let i = 0; i < list.customerGroup.length; i++) {

    let customerGroup = list.customerGroup[i];

    results.customerGroup[customerGroup] = 0;

    if (builderCustomerGroupArray.includes(customerGroup)) results.customerGroup[customerGroup] = 1;

}

// Validation for extra things

// Marketing Audience

for (let i = 0; i < builderMarketingAudienceArray.length; i++) {

    let marketingAudience = builderMarketingAudienceArray[i];

    if (!list.marketingAudience.includes(marketingAudience)) results.rest.marketingAudience[marketingAudience] = 1;

};

// Customer Group

for (let i = 0; i < builderCustomerGroupArray.length; i++) {

    let customerGroup = builderCustomerGroupArray[i];

    if (!list.customerGroup.includes(customerGroup)) results.rest.customerGroup[customerGroup] = 1;

}

// Job Role

for (let i = 0; i < builderJobRoleArray.length; i++) {

    let jobRole = builderJobRoleArray[i];

    if (!list.jobRole.includes(jobRole)) results.rest.jobRole[jobRole] = 1;

}


list.results = results;
