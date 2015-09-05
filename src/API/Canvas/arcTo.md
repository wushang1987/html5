#arcTo() 方法

定义和用法
arcTo() 方法在画布上创建介于两个切线之间的弧/曲线。
提示：请使用 stroke() 方法在画布上绘制确切的弧。



|属性|值
|-----|----|
|x1  |弧的起点的 x 坐标
|y1  |弧的起点的 y 坐标
|x2  |弧的终点的 x 坐标
|y2  |弧的终点的 y 坐标
|r   |弧的半径


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.beginPath();
ctx.moveTo(20,20);           // 创建开始点
ctx.lineTo(100,20);          // 创建水平线
ctx.arcTo(150,20,150,70,50); // 创建弧
ctx.lineTo(150,120);         // 创建垂直线
ctx.stroke();                // 进行绘制


```