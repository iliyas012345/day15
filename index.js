var div=document.createElement("div");
div.setAttribute("class","container");

var calculator=document.createElement("div");
calculator.setAttribute("class","calculator");
div.append(calculator);

var form=document.createElement("form");
calculator.append(form);
var display=document.createElement("div");
display.setAttribute("class","display");
var input= document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("name","display");
display.append(input);

var div1=document.createElement("div");
div1.innerHTML=`
<input type="button" value="AC" onclick="display.value = ' '" class="operator"> 
    <input type="button" value="DE" onclick="display.value = display.value.toString().slice(0,-1)" class="operator">
    <input type="button" value="." onclick="display.value += '.'" class="operator">
    <input type="button" value="/" onclick="display.value += '/'" class="operator">
`
var div2=document.createElement("div");
div2.innerHTML=`
<input type="button" value="7" onclick="display.value += 7">
    <input type="button" value="8" onclick="display.value += 8">
    <input type="button" value="9" onclick="display.value += 9">
    <input type="button" value="*" onclick="display.value += '*' " class="operator">
`
var div3=document.createElement("div");
div3.innerHTML=`
<input type="button" value="4" onclick="display.value += 4">
<input type="button" value="5" onclick="display.value += 5">
<input type="button" value="6" onclick="display.value += 6">
<input type="button" value="-" onclick="display.value += '-'" class="operator">
`

var div4=document.createElement("div");
div4.innerHTML=`
<input type="button" value="1" onclick="display.value += 1">
<input type="button" value="2" onclick="display.value += 2">
<input type="button" value="3" onclick="display.value += 3"> 
<input type="button" value="+" onclick="display.value += '+'" class="operator">
`
var div5=document.createElement("div");
div5.innerHTML=`
<input type="button" value="00" onclick="display.value += 00">
<input type="button" value="0" onclick="display.value += 0">
<input type="button" value="=" class="equal operator" onclick="display.value = eval(display.value)" >`

form.append(display,div1,div2,div3,div4,div5);
div.append(calculator)
document.body.append(div);