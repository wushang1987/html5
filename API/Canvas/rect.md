#rect() 方法

###定义和用法
rect() 方法创建矩形。
提示：请使用 stroke() 或 fill() 方法在画布上实际地绘制矩形。



参数值
|参数 |描述
|-----|----|
|x       |矩形左上角的 x 坐标
|y       |矩形左上角的 y 坐标
|width   |矩形的宽度，以像素计
|height  |矩形的高度，以像素计



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.rect(20,20,150,100);
ctx.stroke();


```