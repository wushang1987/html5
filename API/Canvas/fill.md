#fill() 方法

###定义和用法
fill() 方法填充当前的图像（路径）。默认颜色是黑色。
提示：请使用 fillStyle 属性来填充另一种颜色/渐变。
注释：如果路径未关闭，那么 fill() 方法会从路径结束点到开始点之间添加一条线，以关闭该路径，然后填充该路径。






```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.rect(20,20,150,100);
ctx.fillStyle="green";
ctx.fill();


```