var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var h=0, m=0, s =0;
console.log(h)

function setInner(vari, v){
    vari.innerHTML = v < 10 ? '0'+v : v;
}
function startCounter(){
    setInterval(()=>{
        s++
        setInner(sec,s)
        if(s > 2){
            m++; s = 0;
            setInner(min,m)
        }
        else if(m > 3){
            h++; m = 0;
            setInner(hour,h)
            }
    },1000)
    
}