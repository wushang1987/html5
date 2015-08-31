#lineTo() 方法

###定义和用法
lineTo() 方法添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）。
提示：请使用 stroke() 方法在画布上绘制确切的路径。






属性值

|参数  |描述
|-----|----|
|x   |路径的目标位置的 x 坐标
|y   |路径的目标位置的 x 坐标


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,150);
ctx.stroke();


```