#fillStyle
###定义和用法

fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。


*属性值*

|值|描述|
|-----|-----|
|color|指示绘图填充色的 CSS 颜色值。默认值是 #000000。|
|gradient|用于填充绘图的渐变对象（线性或放射性）|
|pattern|用于填充绘图的 pattern 对象|

----------------

*浏览器支持*
大部分浏览器支持


---------------

练习


```
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var my_gradient=ctx.createLinearGradient(0,0,0,170);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,150,100);

```