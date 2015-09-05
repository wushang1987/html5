#textAlign 属性

###定义和用法
textAlign 属性根据锚点，设置或返回文本内容的当前对齐方式。
通常，文本会从指定位置开始，不过，如果您设置为 textAlign="right" 并将文本放置到位置 150，那么会在位置 150 结束。
提示：使用 fillText() 或 strokeText() 方法在实际地在画布上绘制并定位文本。



|属性|值
|-----|----|
|start   |默认。文本在指定的位置开始。
|end     |文本在指定的位置结束。
|center  |文本的中心被放置在指定的位置。
|left    |文本左对齐。
|right   |文本右对齐。



```
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

// 在位置 150 创建蓝线
ctx.strokeStyle="blue";
ctx.moveTo(150,20);
ctx.lineTo(150,170);
ctx.stroke();

ctx.font="15px Arial";

// 显示不同的 textAlign 值
ctx.textAlign="start";
ctx.fillText("textAlign=start",150,60);
ctx.textAlign="end";
ctx.fillText("textAlign=end",150,80);
ctx.textAlign="left";
ctx.fillText("textAlign=left",150,100);
ctx.textAlign="center";
ctx.fillText("textAlign=center",150,120);
ctx.textAlign="right";
ctx.fillText("textAlign=right",150,140);


```