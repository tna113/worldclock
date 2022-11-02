const imgBasePath = './assets/globe';
var imgIndex = 0;

function getTime() {
    const today = new Date();
    // console.log('today:' + today);

    let h = today.getHours(); //0-23
    let m = today.getMinutes(); //0-59
    let s = today.getSeconds(); //0-59
    // console.log('h:'+h+' m:'+m+' s:'+s);

    var time = document.getElementById('time');
    // time.textContent = h + ':' + m + ':' + s;
    time.textContent = getTimeString([h,m,s]);
    changeImg();
    setTimeout(getTime,1000);
}

function format(type,i) {

    switch(type) {
        case 'h': //0-23
            if(i>12) {
                // console.log(i+"-12="+(i-12));
                //if i>12, minus 12 from i ie. 13 -12 = 1 
                i = i-12;

                if (i<10) {
                    i = addZero(i);
                }
            }
            break;
        case 'm' || 's': //0-59
            if(i<10) {
                //if i<10, add 0 in front ie. 2 -> 02
                i = addZero(i);
            }
            break;
        default: 
            // weird bug here shows on console
            // console.log('Could not format time on type: '+type+" and i: "+i);
            break;
    }


    function addZero(num) {
        return "0"+num;
    }

    // console.log('format('+type+','+i+') result i: '+i);
    return i;
}

function getTimeString(arr) {
    let types = ['h','m','s'];
    let str = "";

    // console.log('getTimeString() types:' + types);
    // console.log('getTimeString() types[0]: ' + types[0] + ", arr[0]: " + arr[0]);

    // console.log('arr.length: '+arr.length); //3
    for(let len = arr.length, i = 0; i < len; i++) {
        str += format(types[i],arr[i]) + ":";
    }

    //redact last character ":"
    str = str.substring(0,str.length-1);


    // console.log('getTimeString('+arr+') result: '+str);

    return str;
} 

function changeImg() {
    console.log("changeImg() start imgIndex:"+imgIndex);

    if (imgIndex==4) {
        imgIndex = 0;
    }

    document.getElementById('globe').setAttribute("src",imgBasePath+(imgIndex+1)+".png");
    imgIndex++;

    console.log("changeImg() end imgIndex:"+imgIndex);
}