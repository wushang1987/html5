# addColorStop() 方法

###定义和用法
addColorStop() 方法规定 gradient 对象中的颜色和位置。
addColorStop() 方法与 createLinearGradient() 或 createRadialGradient() 一起使用。
注释：您可以多次调用 addColorStop() 方法来改变渐变。如果您不对 gradient 对象使用该方法，那么渐变将不可见。为了获得可见的渐变，您需要创建至少一个色标。




参数值

|参数	|描述
|------|-----|
|stop	|介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置。
|color	|在结束位置显示的 CSS 颜色值



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

var grd=ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0,"black");
grd.addColorStop("0.3","magenta");
grd.addColorStop("0.5","blue");
grd.addColorStop("0.6","green");
grd.addColorStop("0.8","yellow");
grd.addColorStop(1,"red");

ctx.fillStyle=grd;
ctx.fillRect(20,20,150,100);


```