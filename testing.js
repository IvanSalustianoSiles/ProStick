                    
                    let JBRInput1 = input;
                    let JBRArray1 = JBRInput1.split(", ");
                    let JBRArray2 = JBRArray1.map( (JBRInput) => {
                        return jobRoles.find(jobRole => jobRole.toLocaleLowerCase() == JBRInput.toLowerCase());
                    })
                    let inputJBRArray1 = JBRInput1 == "" ? [] : JBRArray2;
                    list.jobRole = inputJBRArray1 || [];                    

                    // PEER LOGIC

                   results = { 
                        jobRole: {},
                        rest: {
                            jobRole: {},
                            extra: {}
                        }
                    }


                    builderSQLArray = extractActiveSqlLines(builderInputValue);

                    builderJobRoleRawArray = [];

                    startPushingJobRole = 0;

                    IPVBooleanJobRole = 0;

                    const MKUnsegmentedInput2 = document.getElementById(`input-indClass4-SQL-MaSH-peer`).value;

                    for (let i = 0; i < builderSQLArray.length; i++) {

                        let row = builderSQLArray[i];

                        let nextRow = builderSQLArray[i+1] ? builderSQLArray[i+1] : "";


                        if (row.replace(/\[/g, "").replace(/\]/g, "").replace(/ /g, "").toLowerCase().includes("ipv.jobrole")) startPushingJobRole = 1;

                        if (row.replace(/ /g, "").includes("()") || row.replace(/ /g, "").includes(`""`) || row.replace(/ /g, "").includes(`''`)) results.rest.extra["parenthesis"] = "- Parenthesis shouldn't be empty.\n";

                        if (row[row.length - 1] == ")" && nextRow.includes("OR") || row.replace(/ /g, "").includes("OR(") || row.replace(/ /g, "").toLowerCase().includes("oripv")) results.rest.extra["ORERROR"] = `- Please change the OR between filters for an AND.\n`;

                        if (startPushingJobRole == 1) {

                            if (row.replace(/\[/g, "").replace(/\]/g, "").replace(/ /g, "").toLowerCase().includes("ipv.jobrole")) {

                                IPVBooleanJobRole++;
                            }
                            
                            IPVBooleanJobRole == 1 &&  builderJobRoleRawArray.push(row);

                            if (builderSQLArray[i+1].includes(")") || /in\s*\(.*\)/i.test(row)) startPushingJobRole = 0;
                            
                        }

                    };

                    // Charging builder's arrays

                    builderJobRoleArray = platform == "SQL" ? chargingBuildersArray(builderJobRoleRawArray) : chargingBuildersArray(builderInputValue, "marketo");

                    // Validation for missing things

                    list.jobRole = inputJBRArray1 || [];

                    // Job Role
                    
                    results.jobRole = {};

                    for (let i = 0; i < list.jobRole.length; i++) {

                        let jobRole = list.jobRole[i];

                        results.jobRole[jobRole] = 0;

                        if (builderJobRoleArray.includes(jobRole)) results.jobRole[jobRole] = 1;

                    }


                    // Validation for extra things

                    // Job Role

                    for (let i = 0; i < builderJobRoleArray.length; i++) {

                        let jobRole = builderJobRoleArray[i];

                        if (!list.jobRole.includes(jobRole)) results.rest.jobRole[jobRole] = 1;

                    };

                    list.results = results;