#fillRect() 方法

###定义和用法
fillRect() 方法绘制“已填色”的矩形。默认的填充颜色是黑色。
提示：请使用 fillStyle 属性来设置用于填充绘图的颜色、渐变或模式。


参数值

参数  描述
|-----|----|
|x       |矩形左上角的 x 坐标
|y       |矩形左上角的 y 坐标
|width   |矩形的宽度，以像素计
|height  |矩形的高度，以像素计



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillRect(20,20,150,100);

```