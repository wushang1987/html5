# scale() 方法

定义和用法
scale() 方法缩放当前绘图，更大或更小。
注释：如果您对绘图进行缩放，所有之后的绘图也会被缩放。定位也会被缩放。如果您 scale(2,2)，那么绘图将定位于距离画布左上角两倍远的位置。


|属性|值
|-----|----|
|scalewidth  |缩放当前绘图的宽度 (1=100%, 0.5=50%, 2=200%, 依次类推)
|scaleheight |缩放当前绘图的高度 (1=100%, 0.5=50%, 2=200%, etc.)





```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.strokeRect(5,5,25,15);
ctx.scale(2,2);
ctx.strokeRect(5,5,25,15);

```