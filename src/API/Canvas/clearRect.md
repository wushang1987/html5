#clearRect() 方法

###定义和用法
clearRect() 方法清空给定矩形内的指定像素。


参数值

参数  描述
|-----|----|
|x       |要清除的矩形左上角的 x 坐标
|y       |要清除的矩形左上角的 y 坐标
|width   |要清除的矩形的宽度，以像素计
|height  |要清除的矩形的高度，以像素计



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="red";
ctx.fillRect(0,0,300,150);
ctx.clearRect(20,20,100,50);    


```