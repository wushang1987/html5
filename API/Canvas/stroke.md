#stroke() 方法

###定义和用法
stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
提示：请使用 strokeStyle 属性来绘制另一种颜色/渐变。



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(20,100);
ctx.lineTo(70,100);
ctx.strokeStyle="green";
ctx.stroke();


```