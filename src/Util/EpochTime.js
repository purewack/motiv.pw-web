const epochStartMonth = 8;
const epochStartYear = 2023;

export function getEpochYear(period){
    return epochStartYear + Math.floor( (epochStartMonth - (-period) - 1) / 12) ;
}

export function getEpochMonth(period){
    const epochToMonth = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }
    const e = epochStartMonth;
    return epochToMonth[
        (12-((-period - e+1)%12))%12
    ];
}

export function getEpochDate(period, short=true){
    if(short){
        const m = getEpochMonth(period) + '';
        const y = getEpochYear(period) + '';
        return m.substring(0,3) + " '" + y.substring(2,4) 
    }
    return getEpochMonth(period) + " '" + getEpochYear(period)
}
