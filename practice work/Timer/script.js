var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var msec = document.getElementById('msec');
var button = document.getElementById('start');
var Stopbutton = document.getElementById('stop');

var h= m= s = ms=0 ;
var table;
var addAttribute = document.createAttribute('class');
addAttribute.value = "changeColor"
var resetAttr = document.createAttribute('class');
resetAttr.value = "timer-detail"

function setInner(vari, v){
    vari.setAttribute('class','changeColor')
    vari.innerHTML = v < 10 ? '0'+v : v;
   }
function reset(){
    clearInterval(table)
    h = m = s = ms =0;
    hour.innerHTML = "00"
    min.innerHTML = "00"
    msec.innerHTML = "00"
    sec.innerHTML = "00"
    button.innerHTML = 'Start';
    button.onclick = startCounter;
}
function startCounter(){
    Stopbutton.innerHTML = 'Stop';
    Stopbutton.onclick = stop;
    
    table = setInterval(()=>{
        button.innerHTML = 'Reset';
        button.onclick = reset;
        ms++;
        setInner(msec,ms)
        if(ms > 98){
            s++; ms = -1;
            setInner(sec,s)
        }
        else if(s > 59){
            m++; s = -1;
            setInner(min,m)
            }
        else if(m > 59){
            h++; m = -1;
            setInner(hour,h)
            }
    },10)
    
}
function stop(){
    clearInterval(table)
    Stopbutton.innerHTML = 'Start';
    Stopbutton.onclick = startCounter;
}