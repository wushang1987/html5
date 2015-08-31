#quadraticCurveTo() 方法

###定义和用法
quadraticCurveTo() 方法通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点。
提示：二次贝塞尔曲线需要两个点。第一个点是用于二次贝塞尔计算中的控制点，第二个点是曲线的结束点。曲线的开始点是当前路径中最后一个点。如果路径不存在，那么请使用 beginPath() 和 moveTo() 方法来定义开始点。
二次贝塞尔曲线
开始点：moveTo(20,20)
控制点：quadraticCurveTo(20,100,200,20)
结束点：quadraticCurveTo(20,100,200,20)
提示：请查看 bezierCurveTo() 方法。它有两个控制点，而不是一个。



|参数  |描述
|-----|----|
|cpx |贝塞尔控制点的 x 坐标
|cpy |贝塞尔控制点的 y 坐标
|x   |结束点的 x 坐标
|y   |结束点的 y 坐标


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20,20);
ctx.quadraticCurveTo(20,100,200,20);
ctx.stroke();


```