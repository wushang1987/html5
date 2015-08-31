#moveTo() 方法

###定义和用法
fillRect() 方法绘制“已填色”的矩形。默认的填充颜色是黑色。
提示：请使用 stroke() 方法在画布上绘制确切的路径。



|参数 |描述
|-----|----|
|x   |路径的目标位置的 x 坐标
|y   |路径的目标位置的 y 坐标






```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,150);
ctx.stroke();


```