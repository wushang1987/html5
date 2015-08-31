#transform() 方法

###定义和用法
画布上的每个对象都拥有一个当前的变换矩阵。
transform() 方法替换当前的变换矩阵。它以下面描述的矩阵来操作当前的变换矩阵：
a  c  e
b  d  f
0  0  1
换句话说，transform() 允许您缩放、旋转、移动并倾斜当前的环境。
注释：该变换只会影响 transform() 方法调用之后的绘图。
注释：transform() 方法的行为相对于由 rotate(), scale(), translate(), or transform() 完成的其他变换。例如：如果您已经将绘图设置为放到两倍，则 transform() 方法会把绘图放大两倍，您的绘图最终将放大四倍。
提示：请查看 setTransform() 方法，它不会相对于其他变换来发生行为。


|属性|值
|-----|----|
|a   |水平缩放绘图
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

ctx.transform(1,0.5,-0.5,1,30,10);
ctx.fillStyle="red";
ctx.fillRect(0,0,250,100);

ctx.transform(1,0.5,-0.5,1,30,10);
ctx.fillStyle="blue";
ctx.fillRect(0,0,250,100);


```