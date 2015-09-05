#clip() 方法

###定义和用法
clip() 方法从原始画布中剪切任意形状和尺寸。
提示：一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。您也可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法）。






```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
// 剪切矩形区域
ctx.rect(50,20,200,120);
ctx.stroke();
ctx.clip();
// 在 clip() 之后绘制绿色矩形
ctx.fillStyle="green";
ctx.fillRect(0,0,150,100);


```