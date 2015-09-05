#lineWidth 属性

###定义和用法
lineWidth 属性设置或返回当前线条的宽度，以像素计。



|属性|值
|值  |描述
|-----|----|
|number  |当前线条的宽度，以像素计


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.lineWidth=10;
ctx.strokeRect(20,20,80,100);

```