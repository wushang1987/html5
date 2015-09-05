#beginPath() 方法

###定义和用法
beginPath() 方法开始一条路径，或重置当前的路径。
提示：请使用这些方法来创建路径：moveTo()、lineTo()、quadricCurveTo()、bezierCurveTo()、arcTo() 以及 arc()。
提示：请使用 stroke() 方法在画布上绘制确切的路径。






```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.lineWidth="5";
ctx.strokeStyle="red"; // 红色路径
ctx.moveTo(0,75);
ctx.lineTo(250,75);
ctx.stroke(); // 进行绘制

ctx.beginPath();
ctx.strokeStyle="blue"; // 蓝色路径
ctx.moveTo(50,0);
ctx.lineTo(150,130);
ctx.stroke(); // 进行绘制


```