

let inputTest = `/**Filters on specific list pulls - these filters vary based on request, so are in WHERE clause for easier editing**/
				/**ORG CLASSIFCATION**/
				AND  (				
    			IsNull(IPV.[SegmentName],'UnSegmented')/*UCMP_V1.2_UPDATE REPLACED(IPV.InferredSegment)*/ in (
										'Major Commercial',
										'Major Public Sector',
										'Small, Medium & Corporate Commercial',
										'Small, Medium & Corporate Public Sector',
										'Strategic Commercial',
										'Strategic Public Sector',
										'High Value Individual',
										'UnSegmented'
										)
				OR  IsNull(IPV.[SubSegmentName],'UnSegmented') in /*UCMP_V1.2_UPDATE REPLACED(IPV.InferredSubSegment)*/ 
				(
				/*Major Commercial*/ 
				--'Major - Commercial Other','Major - Health','Major - Other',
				-- /*Major Public Sector*/ 
				'Major - Education','Major - Federal Government','Major - Government Other','Major - State & Local Governments'
 
				
				-- /*Small, Medium & Corporate Commercial*/ 
				--'SM&C Commercial - Corporate','SM&C Commercial - SMB','SM&C Commercial - SMB Default',
 
 
							
				--/*Small, Medium & Corporate Public Sector*/ 
				--'SM&C Education - Corporate','SM&C Education - SMB','SM&C Government - Corporate','SM&C Government - SMB'

				--/*Strategic Commercial*/ 
				--'Strategic - Commercial Other','Strategic - Health',

				-- /*Strategic Public Sector*/ 
				--'Strategic - Federal Government','Strategic - Public Sector'
 
				
				-- /*High Value Individual*/ 
				--'High Value Individual',
 
				-- /*'UnSegmented'*/ 
				--'UnSegmented'
 
				)
				)`



const listSegments = [
    'Major Commercial',
    'Major Public Sector'
    // 'Small, Medium & Corporate Commercial',
    // 'Small, Medium & Corporate Public Sector',
    // 'Strategic Commercial',
    // 'Strategic Public Sector',
    // 'High Value Individual',
    // 'UnSegmented'
];

const listSubSegments = [
    // "Major - Commercial Other",
    // "Major - Health",
    // "Major - Other",
    "Major - Education"
    // "Major - Federal Government",
    // "Major - Government Other",
    // "Major - State & Local Governments",
    // "SM&C Commercial - Corporate",
    // "SM&C Commercial - SMB Default",
    // "SM&C Commercial - SMB",
    // "SM&C Education - Corporate",
    // "SM&C Education - SMB",
    // "SM&C Government - Corporate",
    // "SM&C Government - SMB",
    // "Strategic - Commercial Other",
    // "Strategic - Health",
    // "Strategic - Federal Government",
    // "Strategic - Public Sector",
    // "High Value Individual",
    // "UnSegmented"
];

const segments = {
    'Major Commercial': {
        MCO: 'Major - Commercial Other',
        MH: 'Major - Health',
        MO: 'Major - Other'
    },
    'Major Public Sector': {
        ME: 'Major - Education',
        MFG: 'Major - Federal Government',
        MGO: 'Major - Government Other',
        MSLG: 'Major - State & Local Governments'
    },
    'Small, Medium & Corporate Commercial': {
        SMCCORP:'SM&C Commercial - Corporate',
        SMCCSMB:'SM&C Commercial - SMB',
        SMCCSMBDF:'SM&C Commercial - SMB Default'
    },
    'Small, Medium & Corporate Public Sector': {
        SMCEDUCORP:'SM&C Education - Corporate',
        SMCEDUSMB:'SM&C Education - SMB',
        SMCGOVCORP:'SM&C Government - Corporate',
        SMCGOVSMB:'SM&C Government - SMB'
    },
    'Strategic Commercial': {
        SCO: 'Strategic - Commercial Other',
        SH: 'Strategic - Health'
    },
    'Strategic Public Sector': {
        SFGOV:'Strategic - Federal Government',
        SPBS:'Strategic - Public Sector'
    },
    'High Value Individual': {
        HVI: 'High Value Individual'
    },
    'UnSegmented': {
        UNSGT:'UnSegmented'
    }
};

const onlySegments = [
    'Major Commercial',
    'Major Public Sector',
    'Small, Medium & Corporate Commercial',
    'Small, Medium & Corporate Public Sector',
    'Strategic Commercial',
    'Strategic Public Sector',
    'High Value Individual',
    'UnSegmented'
];

const onlySubSegments = [
    "Major - Commercial Other",
    "Major - Health",
    "Major - Other",
    "Major - Education",
    "Major - Federal Government",
    "Major - Government Other",
    "Major - State & Local Governments",
    "SM&C Commercial - Corporate",
    "SM&C Commercial - SMB Default",
    "SM&C Commercial - SMB",
    "SM&C Education - Corporate",
    "SM&C Education - SMB",
    "SM&C Government - Corporate",
    "SM&C Government - SMB",
    "Strategic - Commercial Other",
    "Strategic - Health",
    "Strategic - Federal Government",
    "Strategic - Public Sector",
    "High Value Individual",
    "UnSegmented"
];



function extractActiveSqlLines(sqlText) {
    const lines = sqlText.split(/\r?\n/);
    const activeLines = [];
    let inBlockComment = false;

    for (let line of lines) {
        let stripped = line.trim();

        if (!stripped) continue;

        if (inBlockComment) {
            if (stripped.includes("*/")) {
                inBlockComment = false;
                stripped = stripped.split("*/")[1]?.trim() || "";
                if (!stripped) continue;
            } else {
                continue;
            }
        }

        while (stripped.includes("/*")) {
            const start = stripped.indexOf("/*");
            const end = stripped.indexOf("*/", start + 2);

            if (end !== -1) {
                stripped = stripped.slice(0, start) + stripped.slice(end + 2);
            } else {
                inBlockComment = true;
                stripped = stripped.slice(0, start);
                break;
            }
        }

        if (stripped.startsWith("--")) continue;
        if (stripped.includes("--")) {
            stripped = stripped.split("--")[0].trim();
        }

        if (stripped) activeLines.push(stripped);
    }

    return activeLines;
}

let results = { 
    segments: {},
    subSegments: {},
    rest: {
        segments: {},
        subSegments: {},
        extra: {}
    }
}

let builderSQLArray = extractActiveSqlLines(inputTest);

let builderSegmentsRawArray = [];

let builderSubSegmentsRawArray = [];

let startPushingSegments = 0;

let startPushingSubSegments = 0;

for (let i = 0; i < builderSQLArray.length; i++) {

    let row = builderSQLArray[i];

    let nextRow = builderSQLArray[i+1] ? builderSQLArray[i+1] : "";

    if (row.includes("IPV.[SegmentName]")) startPushingSegments = 1;

    if (row.includes("IPV.[SubSegmentName]")) startPushingSubSegments = 1;

    if (row[row.length - 1] == ")" && nextRow.includes("OR")) results.rest.extra["ORERROR"] = "OR should be AND";

    if (startPushingSegments == 1) {
        
        builderSegmentsRawArray.push(row);

        if (builderSQLArray[i+1].includes(")")) startPushingSegments = 0;
        
    }

    if (startPushingSubSegments == 1) {
        
        builderSubSegmentsRawArray.push(row);
        
        if (builderSQLArray[i+1].includes(")")) startPushingSubSegments = 0;

    }
}

let builderSegmentsArray = [];

let builderSubSegmentsArray = [];

// Cargando arrays de builder

for (let i = 0; i < onlySubSegments.length; i++) {

    let subSegment = onlySubSegments[i];

    for (let j = 0; j < builderSubSegmentsRawArray.length; j++) {

        let row = builderSubSegmentsRawArray[j];

        if (row.includes("IPV.[SegmentName],'UnSegmented'") || row.includes("IPV.[SubSegmentName],'UnSegmented'")) continue;

        if (row.includes(subSegment) && !builderSubSegmentsArray.includes(subSegment)) builderSubSegmentsArray.push(subSegment);
    }

}

for (let i = 0; i < onlySegments.length; i++) {

    let segment = onlySegments[i];

    for (let j = 0; j < builderSegmentsRawArray.length; j++) {

        let row = builderSegmentsRawArray[j];

        if (row.includes("IPV.[SegmentName],'UnSegmented'") || row.includes("IPV.[SubSegmentName],'UnSegmented'")) continue;

        if (row.includes(segment) && !builderSegmentsArray.includes(segment)) builderSegmentsArray.push(segment);
    }

}

// Validation for missing things


// Segments

for (let i = 0; i < listSegments.length; i++) {
   
    let segment = listSegments[i];

    results.segments[segment] = 0;

    if (builderSegmentsArray.includes(segment)) results.segments[segment] = 1;

}

// SubSegments

for (let i = 0; i < listSubSegments.length; i++) {
    
    let subSegment = listSubSegments[i];

    let segment;

    for (let k = 0; k < Object.values(segments).length; k++) {

        let forSegment = Object.values(segments)[k];

        for (let j = 0; j < Object.values(forSegment).length; j++) {

            let forSubSegment = Object.values(forSegment)[j];

            if (subSegment == forSubSegment) {

                segment = Object.keys(segments)[k];

            }

        }
    };

    let noSubSegmentsInBuild = true;

    let allSubSegmentsInMaSH = true;

    for (let l = 0; l < Object.values(segments[segment]).length; l++) {
        
        let DBSubSegment = Object.values(segments[segment])[l];

        if (builderSubSegmentsArray.includes(DBSubSegment)) noSubSegmentsInBuild = false;

        if (!listSubSegments.includes(DBSubSegment)) allSubSegmentsInMaSH = false;
    }

    if (
        builderSegmentsArray.includes(segment) && builderSubSegmentsArray.includes(subSegment)
        || !builderSubSegmentsArray.includes(subSegment) && builderSegmentsArray.includes(segment)
        && noSubSegmentsInBuild && allSubSegmentsInMaSH
    ) {

        results.subSegments[subSegment] = 1;
    
    } else {

        results.subSegments[subSegment] = 0;
    }

}

// Validation for extra things

for (let i = 0; i < builderSegmentsArray.length; i++) {

    let segment = builderSegmentsArray[i];

    if (!listSegments.includes(segment)) results.rest.segments[segment] = 1;

}

for (let i = 0; i < builderSubSegmentsArray.length; i++) {

    let subSegment = builderSubSegmentsArray[i];

    if (!listSubSegments.includes(subSegment)) results.rest.subSegments[subSegment] = 1;
}

console.log(results)