#createPattern() 方法

###定义和用法
createPattern() 方法在指定的方向内重复指定的元素。
元素可以是图片、视频，或者其他 元素。
被重复的元素可用于绘制/填充矩形、圆形或线条等等。



参数值

|参数        |描述
|-----|-----|
|image       |规定要使用的图片、画布或视频元素。
|repeat      |默认。该模式在水平和垂直方向重复。
|repeat-x    |该模式只在水平方向重复。
|repeat-y    |该模式只在垂直方向重复。
|no-repeat   |该模式只显示一次（不重复）。



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("lamp");
var pat=ctx.createPattern(img,"repeat");
ctx.rect(0,0,150,100);
ctx.fillStyle=pat;
ctx.fill();


```