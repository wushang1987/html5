#createLinearGradient() 方法

###定义和用法
createLinearGradient() 方法创建线性的渐变对象。
渐变可用于填充矩形、圆形、线条、文本等等。
提示：请使用该对象作为 strokeStyle 或 fillStyle 属性的值。
提示：请使用 addColorStop() 方法规定不同的颜色，以及在 gradient 对象中的何处定位颜色




参数值

|参数|描述
|-------|------|
|x0	   |渐变开始点的 x 坐标
|y0	   |渐变开始点的 y 坐标
|x1	   |渐变结束点的 x 坐标
|y1	   |渐变结束点的 y 坐标


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var my_gradient=ctx.createLinearGradient(0,0,0,170);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,150,100);


```