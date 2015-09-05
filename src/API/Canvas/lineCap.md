#lineCap 属性

###lineCap 属性设置或返回线条末端线帽的样式。
注释："round" 和 "square" 会使线条略微变长。



属性值

值   描述
|-----|-----|
|butt    |默认。向线条的每个末端添加平直的边缘。
|round   |向线条的每个末端添加圆形线帽。
|square  |向线条的每个末端添加正方形线帽。


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.lineCap="round";
ctx.moveTo(20,20);
ctx.lineTo(20,200);
ctx.stroke();


```