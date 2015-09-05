#globalAlpha 属性

###定义和用法
globalAlpha 属性设置或返回绘图的当前透明值（alpha 或 transparency）。
globalAlpha 属性值必须是介于 0.0（完全透明） 与 1.0（不透明） 之间的数字。


|属性|值
|-----|----|
|number  |透明值。必须介于 0.0（完全透明） 与 1.0（不透明） 之间。



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="red";
ctx.fillRect(20,20,75,50);
// 调节透明度
ctx.globalAlpha=0.2;
ctx.fillStyle="blue";
ctx.fillRect(50,50,75,50);
ctx.fillStyle="green";
ctx.fillRect(80,80,75,50);

```