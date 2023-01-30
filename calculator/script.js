function buttonclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=text.eval()
    document.getElementById("screen").value=result
}