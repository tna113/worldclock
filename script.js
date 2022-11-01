function getTime() {
    const today = new Date();
    // console.log('today:' + today);

    let h = today.getHours(); //0-23
    let m = today.getMinutes(); //0-59
    let s = today.getSeconds(); //0-59

    var time = document.getElementById('time');
    // time.textContent = h + ':' + m + ':' + s;
    time.textContent = getTimeString([h,m,s]);
    setTimeout(getTime,500);
}

function format(type,i) {
    switch(type) {
        case 'h': //0-23
            if(i>12) {
                //if i>12, minus 12 from i ie. 13 -12 = 1 
                i = i-12;

                //then format again if number less than 10
                if (i<10) {
                    format(type,i);
                }

                break;
            }
        case 'm' || 's': //0-59
            if(i<10) {
                //if i<10, add 0 in front ie. 2 -> 02
                i = "0" + i;    
            }
            break;
        default:   console.log('Could not format time');
            break;
    }
    return i;
}

function getTimeString(arr) {
    let types = ['h','m','s'];
    let str = "";

    console.log(types);
    console.log(types[0] + "," + arr[0]);

    // console.log('arr.length: '+arr.length); //3
    for(let len = arr.length, i = 0; i < len; i++) {
        str += format(types[i],arr[i]) + ":";
    }

    //redact last character ":"
    str = str.substring(0,str.length-1);
    return str;
} 