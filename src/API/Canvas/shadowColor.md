#shadowColor

shadowColor 属性设置或返回用于阴影的颜色。

注释：请将 shadowColor 属性与 shadowBlur 属性一起使用，来创建阴影。

提示：请通过使用 shadowOffsetX 和 shadowOffsetY 属性来调节阴影效果。


|属性|值
|-----|----|
|默认值：	|#000000
|JavaScript 语法：|	context.shadowColor=color;


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.shadowBlur=20;
ctx.shadowColor="black";
ctx.fillStyle="blue";
ctx.fillRect(20,20,100,80);

```