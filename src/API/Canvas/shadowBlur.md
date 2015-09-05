#shadowBlur 

shadowBlur 属性设置或返回阴影的模糊级数。


|属性|值
|-----|----|
|默认值：	|#000000
|JavaScript 语法：|	context.shadowBlur=number;



属性值

|值	|描述
|-----|----|
|number	|阴影的模糊级数


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.shadowBlur=20;
ctx.shadowColor="black";
ctx.fillStyle="blue";
ctx.fillRect(20,20,100,80);	

```