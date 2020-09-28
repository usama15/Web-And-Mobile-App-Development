var answer = 50;

function getvalue(val){
    const result = document.getElementById('result');
    result.value +=val 
    console.log(val)
    
}
function clearme(){
    const result = document.getElementById('result');
    result.value = "";
}
function evalue (){
    const result = document.getElementById('result');
    result.value = eval(result.value);
}