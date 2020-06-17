
var lado1 = document.getElementById("lado1");
var lado2 = document.getElementById("lado2");
var lado3 = document.getElementById("lado3");
var lado4 = document.getElementById("lado4");
var lado5 = document.getElementById("lado5");
var lado6 = document.getElementById("lado6");
var lado7 = document.getElementById("lado7");
var lado8 = document.getElementById("lado8");
var lado9 = document.getElementById("lado9");

/*Color*/
var blue    = '#0000AA';
var green   = '#00AA00';
var red     = '#AA0000';
var yellow  = '#FFFF00';
var orange  = '#FFA500';
var white   = '#FFFFFF';
var prevColor1, prevColor2, prevColor3;
var prevColor4, prevColor5, prevColor6;
var prevColor7, prevColor8, prevColor9;

/*Asignacion */
lado1.style.backgroundColor = blue;

function rgbToHex(col)
{
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
}

lado1.addEventListener('click',function(e){
    prevColor1 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    if(prevColor1 == this.style.backgroundColor)
    {
        this.style.backgroundColor = blue;
    }
});

lado2.addEventListener('click',function(e){
    prevColor2 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    if(prevColor2 == this.style.backgroundColor)
    {
        this.style.backgroundColor = blue;
    }
});

lado3.addEventListener('click',function(e){
    prevColor3 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    if(prevColor3 == this.style.backgroundColor)
    {
        this.style.backgroundColor = blue;
    }
});

lado4.addEventListener('click',function(e){
    prevColor4 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    if(prevColor4 == this.style.backgroundColor)
    {
        this.style.backgroundColor = blue;
    }
});

lado5.addEventListener('click',function(e){
    prevColor5 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    if(prevColor5 == this.style.backgroundColor)
    {
        this.style.backgroundColor = blue;
    }
});

lado6.addEventListener('click',function(e){
    prevColor6 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    if(prevColor6 == this.style.backgroundColor)
    {
        this.style.backgroundColor = blue;
    }
});

lado7.addEventListener('click',function(e){
    prevColor7 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    if(prevColor7 == this.style.backgroundColor)
    {
        this.style.backgroundColor = blue;
    }
});

lado8.addEventListener('click',function(e){
    prevColor8 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    if(prevColor8 == this.style.backgroundColor)
    {
        this.style.backgroundColor = blue;
    }
});

lado9.addEventListener('click',function(e){
    prevColor9 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    if(prevColor9 == this.style.backgroundColor)
    {
        this.style.backgroundColor = blue;
    }
});