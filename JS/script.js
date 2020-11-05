class screen{
    screen(idt){
        this.idt=idt;
    }
    printresult(calculatedresult){
        // console.log("hello from screen",calculatedresult);
        document.getElementById("screenn").innerHTML=calculatedresult;
    }
}
let fnum;
let snum;
let tempscreen="";
let opp;
let oppflag=false;
let clearflag=false;
calculatorscreen=new screen("0");
function clear(params) {
    flag==true;
}
function calcbuttonlistener(clickedid,clickedclass) {
    // console.log(clickedid);
    // console.log(clickedclass);
    if(clickedclass=="numbers" & clearflag==false)
    {
        fnum=parseInt(clickedid);
        // console.log("fnum",fnum); 
        tempscreen+=clickedid;
        calculatorscreen.printresult(tempscreen);
        clearflag=true;
    }
    else if(clickedclass=="numbers" & clearflag==true)
    {
        snum=parseInt(clickedid);
        // console.log("snum",snum); 
        tempscreen+=clickedid;
        calculatorscreen.printresult(tempscreen);
    }
    else if(clickedclass=="operator")
    {
        if(clickedid=="equal")
    {
        // console.log("hello from equal",opp,fnum,snum)
        operatt(opp);
    }
    else if(clickedid=="clear")
    {
        tempscreen="";
        calculatorscreen.printresult(tempscreen);
        clearflag=false;
        console.log("hello from clear")
    }
    else
    {
        opp=clickedid;
        console.log("hello from operator",clickedid,opp);
        tempscreen+=clickedid;
        calculatorscreen.printresult(tempscreen);
    }

    }
    }
function operatt(opname) {
    console.log("hello from opname",opname);
    if(opname=="+")
    {
        console.log('hello from +')
        console.log(parseInt(fnum)+parseInt(snum));
        calculatorscreen.printresult(parseInt(fnum)+parseInt(snum));
    }
    if(opname=="-")
    calculatorscreen.printresult(fnum-snum);
    if(opname=="*")
    calculatorscreen.printresult(fnum*snum);
    if(opname=="/")
    calculatorscreen.printresult(fnum/snum);
    if(opname=="%")
    calculatorscreen.printresult(fnum%snum);
    if(opname=="^")
    calculatorscreen.printresult(fnum^snum);
    if(opname=="squareroot")
    calculatorscreen.printresult(Math.sqrt(fname));
    
}
