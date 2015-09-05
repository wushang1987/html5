#strokeText() 方法

###定义和用法
strokeText() 方法在画布上绘制文本（没有填色）。文本的默认颜色是黑色。
提示：请使用 font 属性来定义字体和字号，并使用 strokeStyle 属性以另一种颜色/渐变来渲染文本。



|属性|值
|-----|----|
|text        |规定在画布上输出的文本。
|x           |开始绘制文本的 x 坐标位置（相对于画布）。
|y           |开始绘制文本的 y 坐标位置（相对于画布）。
|maxWidth    |可选。允许的最大文本宽度，以像素计。



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.font="20px Georgia";
ctx.strokeText("Hello World!",10,50);

ctx.font="30px Verdana";
// 创建渐变
var gradient=ctx.createLinearGradient(0,0,c.width,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");
// 用渐变填色
ctx.strokeStyle=gradient;
ctx.strokeText("w3school.com.cn",10,90);


```