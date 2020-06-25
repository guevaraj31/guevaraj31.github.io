
var x,y,n=0,ny=0,rotINT,rotYINT
function rotateDIV(nColor)
{
    switch (nColor) {
        case 1:
            x=document.getElementById("lado1")
            clearInterval(rotINT)
            rotINT=setInterval("startRotate()",10)       
            break;
        case 2:
            x=document.getElementById("lado2")
            clearInterval(rotINT)
            rotINT=setInterval("startRotate()",10)       
            break;
        case 3:
            x=document.getElementById("lado3")
            clearInterval(rotINT)
            rotINT=setInterval("startRotate()",10)       
            break;
        default:
            break;
    }
}
function startRotate()
{
    n=n+1
    x.style.transform="rotate(" + n + "deg)"
    x.style.webkitTransform="rotate(" + n + "deg)"
    x.style.OTransform="rotate(" + n + "deg)"
    x.style.MozTransform="rotate(" + n + "deg)"
    if (n==180 || n==360)
    {
        clearInterval(rotINT)
        if (n==360){n=0}
    }
}