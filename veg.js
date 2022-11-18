var total=0;
var apple=0;
var mango=0;
var banana=0;
var grapes=0;
var potato=0;
var tomato=0;
var brinjal=0;
var carrot=0
function sayapp()
{
    apple++;
    return apple;
}
function saymango()
{
    mango++;
    return mango;
}
function sayban()
{
    banana++;
    return banana;
}
function saygrap()
{
    grapes++;
    return grapes;
}
function saytom()
{
    tomato++;
    return tomato;
}
function saybrin()
{
    brinjal++;
    return brinjal;
}
function saycar()
{
    carrot++;
    return carrot;
}
function saypot()
{
    potato++;
    return potato;
}
function sayoneg(){
    if(apple)
    {
        total+=1.5;
        apple=0;
    }
    else if(mango)
    {
        total+=1;
        mango=0;
    }
    else if(banana)
    {
        total+=0.5;
        banana=0;
    }
    else if(grapes)
    {
        total+=0.8;
        grapes=0;
    }
    else if(potato)
    {
        total+=0.5;
        potato=0;
    }
    else if(tomato)
    {
        total+=1.2;
        tomato=0;
    }
    else if(brinjal)
    {
        total+=0.8;
        brinjal=0;
    }
    else if(carrot)
    {
        total+=1;
        carrot=0;
    }
    document.getElementById("money").innerHTML=`$`+total;
}
function saytwog(){
    if(apple)
    {
        total+=3;
        apple=0;
    }
    else if(mango)
    {
        total+=2;
        mango=0;
    }
    else if(banana)
    {
        total+=1;
        banana=0;
    }
    else if(grapes)
    {
        total+=1.6;
        grapes=0;
    }
    else if(potato)
    {
        total+=1;
        potato=0;
    }
    else if(tomato)
    {
        total+=2.4;
        tomato=0;
    }
    else if(brinjal)
    {
        total+=1.6;
        brinjal=0;
    }
    else if(carrot)
    {
        total+=2;
        carrot=0;
    }
    document.getElementById("money").innerHTML=`$`+total;
}
function saytwofg(){
    if(apple)
    {
        total+=3.75;
        apple=0;
    }
    else if(mango)
    {
        total+=2.5;
        mango=0;
    }
    else if(banana)
    {
        total+=1.25;
        banana=0;
    }
    else if(grapes)
    {
        total+=2;
        grapes=0;
    }
    else if(potato)
    {
        total+=1.25;
        potato=0;
    }
    else if(tomato)
    {
        total+=3;
        tomato=0;
    }
    else if(brinjal)
    {
        total+=2;
        brinjal=0;
    }
    else if(carrot)
    {
        total+=2.5;
        carrot=0;
    }
    document.getElementById("money").innerHTML=`$`+total;
}
function saythrg(){
    if(apple)
    {
        total+=5.25;
        apple=0;
    }
    else if(mango)
    {
        total+=3.5;
        mango=0;
    }
    else if(banana)
    {
        total+=1.75;
        banana=0;
    }
    else if(grapes)
    {
        total+=2.8;
        grapes=0;
    }
    else if(potato)
    {
        total+=1.75;
        potato=0;
    }
    else if(tomato)
    {
        total+=4.2;
        tomato=0;
    }
    else if(brinjal)
    {
        total+=2.8;
        brinjal=0;
    }
    else if(carrot)
    {
        total+=3.5;
        carrot=0;
    }
    document.getElementById("money").innerHTML=`$`+total;
}
function sayfiveg(){
    if(apple)
    {
        total+=7.5;
        apple=0;
    }
    else if(mango)
    {
        total+=5;
        mango=0;
    }
    else if(banana)
    {
        total+=2.5;
        banana=0;
    }
    else if(grapes)
    {
        total+=4;
        grapes=0;
    }
    else if(potato)
    {
        total+=2.5;
        potato=0;
    }
    else if(tomato)
    {
        total+=6;
        tomato=0;
    }
    else if(brinjal)
    {
        total+=4;
        brinjal=0;
    }
    else if(carrot)
    {
        total+=5;
        carrot=0;
    }
    document.getElementById("money").innerHTML=`$`+total;
}
function sayonekg(){
    if(apple)
    {
        total+=15;
        apple=0;
    }
    else if(mango)
    {
        total+=10;
        mango=0;
    }
    else if(banana)
    {
        total+=5;
        banana=0;
    }
    else if(grapes)
    {
        total+=8;
        grapes=0;
    }
    else if(potato)
    {
        total+=5;
        potato=0;
    }
    else if(tomato)
    {
        total+=12;
        tomato=0;
    }
    else if(brinjal)
    {
        total+=8;
        brinjal=0;
    }
    else if(carrot)
    {
        total+=10;
        carrot=0;
    }
    document.getElementById("money").innerHTML=`$`+total;
}
function saytwokg(){
    if(apple)
    {
        total+=30;
        apple=0;
    }
    else if(mango)
    {
        total+=20;
        mango=0;
    }
    else if(banana)
    {
        total+=10;
        banana=0;
    }
    else if(grapes)
    {
        total+=16;
        grapes=0;
    }
    else if(potato)
    {
        total+=10;
        potato=0;
    }
    else if(tomato)
    {
        total+=24;
        tomato=0;
    }
    else if(brinjal)
    {
        total+=16;
        brinjal=0;
    }
    else if(carrot)
    {
        total+=20;
        carrot=0;
    }
    document.getElementById("money").innerHTML=`$`+total;
}
function saythrkg(){
    if(apple)
    {
        total+=45;
        apple=0;
    }
    else if(mango)
    {
        total+=30;
        mango=0;
    }
    else if(banana)
    {
        total+=15;
        banana=0;
    }
    else if(grapes)
    {
        total+=24;
        grapes=0;
    }
    else if(potato)
    {
        total+=15;
        potato=0;
    }
    else if(tomato)
    {
        total+=36;
        tomato=0;
    }
    else if(brinjal)
    {
        total+=24;
        brinjal=0;
    }
    else if(carrot)
    {
        total+=30;
        carrot=0;
    }
    document.getElementById("money").innerHTML=`$`+total;
}
function sayfivekg(){
    if(apple)
    {
        total+=75;
        apple=0;
    }
    else if(mango)
    {
        total+=50;
        mango=0;
    }
    else if(banana)
    {
        total+=25;
        banana=0;
    }
    else if(grapes)
    {
        total+=40;
        grapes=0;
    }
    else if(potato)
    {
        total+=25;
        potato=0;
    }
    else if(tomato)
    {
        total+=60;
        tomato=0;
    }
    else if(brinjal)
    {
        total+=40;
        brinjal=0;
    }
    else if(carrot)
    {
        total+=50;
        carrot=0;
    }
    document.getElementById("money").innerHTML=`$`+total;
}
function saytenkg(){
    if(apple)
    {
        total+=150;
        apple=0;
    }
    else if(mango)
    {
        total+=100;
        mango=0;
    }
    else if(banana)
    {
        total+=50;
        banana=0;
    }
    else if(grapes)
    {
        total+=80;
        grapes=0;
    }
    else if(potato)
    {
        total+=50;
        potato=0;
    }
    else if(tomato)
    {
        total+=120;
        tomato=0;
    }
    else if(brinjal)
    {
        total+=80;
        brinjal=0;
    }
    else if(carrot)
    {
        total+=100;
        carrot=0;
    }
    document.getElementById("money").innerHTML=`$`+total;
}