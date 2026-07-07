var exp = ""; 
function getInput(val)
{
   
    document.getElementById("result").value = exp;
    exp=exp+val;
    document.getElementById("result").value = exp;
}
function clearInput(){
    exp="";
    document.getElementById("result").value = exp;
}
function getResult(){
    let finalResult = eval(exp);
    document.getElementById("result").value = finalResult.toFixed(4);
    exp=""
}