#translate() 方法

###定义和用法
translate() 方法重新映射画布上的 (0,0) 位置。
注释：当您在 translate() 之后调用诸如 fillRect() 之类的方法时，值会添加到 x 和 y 坐标值上。


|属性|值
|-----|----|
|x   |添加到水平坐标（x）上的值
|y   |添加到垂直坐标（y）上的值



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillRect(10,10,100,50);
ctx.translate(70,70);
ctx.fillRect(10,10,100,50);


```