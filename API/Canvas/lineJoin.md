#lineJoin 属性

###定义和用法
lineJoin 属性设置或返回所创建边角的类型，当两条线交汇时。



|属性|值
|-----|----|
|值      |描述
|bevel  |创建斜角。
|round  |创建圆角。
|miter  |默认。创建尖角。


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.lineJoin="round";
ctx.moveTo(20,20);
ctx.lineTo(100,50);
ctx.lineTo(20,100);
ctx.stroke();


```