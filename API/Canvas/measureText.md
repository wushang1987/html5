#measureText() 方法

###定义和用法
measureText() 方法返回包含一个对象，该对象包含以像素计的指定字体宽度。
提示：如果您需要在文本向画布输出之前，就了解文本的宽度，那么请使用该方法。


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
ctx.font="30px Arial";
var txt="Hello World"
ctx.fillText("width:" + ctx.measureText(txt).width,10,50)
ctx.fillText(txt,10,100);


```