#bezierCurveTo() 方法

###定义和用法
bezierCurveTo() 方法通过使用表示三次贝塞尔曲线的指定控制点，向当前路径添加一个点。
提示：三次贝塞尔曲线需要三个点。前两个点是用于三次贝塞尔计算中的控制点，第三个点是曲线的结束点。曲线的开始点是当前路径中最后一个点。如果路径不存在，那么请使用 beginPath() 和 moveTo() 方法来定义开始点。
三次贝塞尔曲线
开始点：moveTo(20,20)
控制点 1：bezierCurveTo(20,100,200,100,200,20)
控制点 2：bezierCurveTo(20,100,200,100,200,20)
结束点：bezierCurveTo(20,100,200,100,200,20)
提示：请查看 quadraticCurveTo() 方法。它有一个控制点，而不是两个。


|属性|值
|-----|----|
|默认值：	|0
|JavaScript 语法：|	context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);



属性值

|值	|描述
|-----|----|
|cp1x    |第一个贝塞尔控制点的 x 坐标
|cp1y    |第一个贝塞尔控制点的 y 坐标
|cp2x    |第二个贝塞尔控制点的 x 坐标
|cp2y    |第二个贝塞尔控制点的 y 坐标
|x       |结束点的 x 坐标
|y       |结束点的 y 坐标



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20,20);
ctx.bezierCurveTo(20,100,200,100,200,20);
ctx.stroke();

```