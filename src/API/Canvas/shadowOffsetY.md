#shadowOffsetY

定义和用法
shadowOffsetY 属性设置或返回形状与阴影的垂直距离。
shadowOffsetY=0 指示阴影位于形状的正下方。
shadowOffsetY=20 指示阴影位于形状 top 位置下方的 20 像素处。
shadowOffsetY=-20 指示阴影位于形状 top 位置上方的 20 像素处。
提示：如需调整距离形状的水平位置，请使用 shadowOffsetX 属性。



|属性|值
|-----|----|
|默认值：	|0
|JavaScript 语法：|	context.shadowOffsetY=number;



属性值

|值	|描述
|-----|----|
|number	|正值或负值，定义阴影与形状的垂直距离



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.shadowBlur=10;
ctx.shadowOffsetY=20;
ctx.shadowColor="black";
ctx.fillStyle="blue";
ctx.fillRect(20,20,100,80);


```