#createRadialGradient() 方法

###定义和用法
createLinearGradient() 方法创建放射状/圆形渐变对象。
渐变可用于填充矩形、圆形、线条、文本等等。
提示：请使用该对象作为 strokeStyle 或 fillStyle 属性的值。
提示：请使用 addColorStop() 方法规定不同的颜色，以及在 gradient 对象中的何处定位颜色。



参数值

|参数  |描述
|----|----|
|x0  |渐变的开始圆的 x 坐标
|y0  |渐变的开始圆的 y 坐标
|r0  |开始圆的半径
|x1  |渐变的结束圆的 x 坐标
|y1  |渐变的结束圆的 y 坐标
|r1  |结束圆的半径



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

var grd=ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,100);

```