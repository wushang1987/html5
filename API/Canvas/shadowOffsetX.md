#shadowOffsetX



###定义和用法
shadowOffsetX 属性设置或返回形状与阴影的水平距离。
shadowOffsetX=0 指示阴影位于形状的正下方。
shadowOffsetX=20 指示阴影位于形状 left 位置右侧的 20 像素处。
shadowOffsetX=-20 指示阴影位于形状 left 位置左侧的 20 像素处。




|属性|值
|-----|----|
|默认值：	|0
|JavaScript 语法：|	context.shadowOffsetX=number;


属性值

|值  |描述
|-----|----|
|number |正值或负值，定义阴影与形状的水平距离。


```
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.shadowBlur=10;
ctx.shadowOffsetX=20;
ctx.shadowColor="black";
ctx.fillStyle="blue";
ctx.fillRect(20,20,100,80);

```