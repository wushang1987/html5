#setTransform() 方法

###定义和用法
画布上的每个对象都拥有一个当前的变换矩阵。
setTransform() 方法把当前的变换矩阵重置为单位矩阵，然后以相同的参数运行 transform()。
换句话说，setTransform() 允许您缩放、旋转、移动并倾斜当前的环境。
注释：该变换只会影响 setTransform() 方法调用之后的绘图。


|属性|值
|-----|----|
|a   |水平旋转绘图
|b   |水平倾斜绘图
|c   |垂直倾斜绘图
|d   |垂直缩放绘图
|e   |水平移动绘图
|f   |垂直移动绘图



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.fillStyle="yellow";
ctx.fillRect(0,0,250,100)

ctx.setTransform(1,0.5,-0.5,1,30,10);
ctx.fillStyle="red";
ctx.fillRect(0,0,250,100);

ctx.setTransform(1,0.5,-0.5,1,30,10);
ctx.fillStyle="blue";
ctx.fillRect(0,0,250,100);


```