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

const inpSegMash = document.getElementById("inpsegmash");

const inpSegSQL = document.getElementById("inpsegsql");

const formSegment = document.getElementById("formSegment");

const segmentButton = document.getElementById("okSeg");

formSegment.onclick = (event) => {
    event.preventDefault();
};

segmentButton.addEventListener("click", () => {

    const mashSegments = inpSegMash.value;

    const inputArray = mashSegments
    .split("), ")
    .map((segment, i, array) => i < array.length - 1 ? segment = segment.concat(")") : segment)

    let newSegments = [];
    let newSubSegments = [];

    for (let i = 0; i < inputArray.length; i++) {

        let completeSegment = inputArray[i];
        
        if (completeSegment.includes("(Deprecated)")) continue;

        let newSegment = onlySegments.find(segment => completeSegment.includes(segment)) || "UnSegmented";

        if (completeSegment.includes("UnSegmented") && newSegment != "UnSegmented") continue;


        if (completeSegment.includes("(All SubSegments)")) {

            let countSegment = 0;

            for (let j = 0; j < inputArray.length; j++) {
                
                let completeSegment2 = inputArray[j];

                let newSegment2 = onlySegments.find(segment => completeSegment2.includes(segment))

                if (newSegment2 == newSegment) countSegment++;

            }

            if (countSegment == 1) {
                !newSegments.includes(newSegment) && newSegments.push(newSegment);
                Object.values(segments[newSegment]).forEach(subSegment => !newSubSegments.includes(subSegment) && newSubSegments.push(subSegment));
            }
        } else {

            let newSubSegment = onlySubSegments.find(subSegment => completeSegment.includes(subSegment))
            !newSegments.includes(newSegment) && newSegments.push(newSegment);
            !newSubSegments.includes(newSubSegment) && newSubSegment != undefined && newSubSegments.push(newSubSegment);
        }
    }

    for (let l = 0; l < onlySubSegments.length; l++) {
            
        let DBSubSegment = onlySubSegments[l];

        if (!newSubSegments.includes(DBSubSegment)) newSubSegments.splice(newSubSegments.length - 1, 0, `--'${DBSubSegment}'`);
    }
    for (let m = 0; m < onlySegments.length; m++) {
            
        let DBSegment = onlySegments[m];

        if (!newSegments.includes(DBSegment)) newSegments.splice(newSegments.length - 1, 0, `--'${DBSegment}'`);
    }

    newSubSegments = newSubSegments.map(newSubSegment => !newSubSegment.includes("--") ? `'${newSubSegment}'` : newSubSegment);
    newSegments = newSegments.map(newSegment => !newSegment.includes("--") ? `'${newSegment}'` : newSegment);

    let segmentCode = `
    /**Filters on specific list pulls - these filters vary based on request, so are in WHERE clause for easier editing**/\n
    \t\t\t\t/**ORG CLASSIFCATION**/\n
    \t\tAND  (\n
    \t\t\t\tIsNull(IPV.[SegmentName],'UnSegmented')/*UCMP_V1.2_UPDATE REPLACED(IPV.InferredSegment)*/ in (\n\t\t\t\t\t${newSegments.join(",\n\t\t\t\t\t")}\n
    \t\t\t\t)\n
    \t\t\t\tAND  IsNull(IPV.[SubSegmentName],'UnSegmented') in /*UCMP_V1.2_UPDATE REPLACED(IPV.InferredSubSegment)*/ (\n\t\t\t\t\t\t\t${newSubSegments.join(", \n\t\t\t\t\t\t\t")}\n
    \t\t\t\t )\n
    \t\t)`;

    inpSegSQL.value = segmentCode;
    inpSegSQL.classList.add("resizeBox");
});

inpSegMash.addEventListener('input', () => {

    inpSegMash.classList.add('resizeBox2');

    setTimeout(() => {

    inpSegMash.classList.remove('resizeBox2');

    }, 10000);

    setTimeout(() => {
        
        inpSegMash.addEventListener("mouseover", () => {
    
            if (inpSegMash.value != "") {
                
                inpSegMash.classList.add('resizeBox2');
    
                inpSegMash.addEventListener("mouseleave", () => {
                    
                    setTimeout(() => {

                        inpSegMash.classList.remove('resizeBox2');

                    }, 10000);
                    
                });
            };
    
        });

    }, 4000);

});
