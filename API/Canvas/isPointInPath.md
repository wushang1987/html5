#isPointInPath() 方法

###定义和用法
isPointInPath() 方法返回 true，如果指定的点位于当前路径中；否则返回 false。



属性值

|值	|描述
|-----|----|
|x   |测试的 x 坐标
|y   |测试的 y 坐标


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.rect(20,20,150,100);
if (ctx.isPointInPath(20,50))
   {
   ctx.stroke();
   };

```