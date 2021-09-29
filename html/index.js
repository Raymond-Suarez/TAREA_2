function clearOutput()
{   
    Zero_Off()
    document.getElementById("output").innerHTML="0";
}

function Zero_Off()
{
    var value =  document.getElementById("output").innerHTML;
    if (value=="0")
    {
        value = ""
    }
    document.getElementById("output").innerHTML=value;
}

function fordisplay(myvalue)
{
    Zero_Off()
    document.getElementById("output").innerHTML += myvalue
}

function solve()
{
    Zero_Off()
    var equation =  document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById("output").innerHTML=solved;
}

