#closePath() 方法

###定义和用法
closePath() 方法创建从当前点到开始点的路径。
提示：请使用 stroke() 方法在画布上绘制确切的路径。
提示：请使用 fill() 方法来填充图像（默认是黑色）。请使用 fillStyle 属性来填充另一个颜色/渐变。





```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(20,100);
ctx.lineTo(70,100);
ctx.closePath();
ctx.stroke();


```