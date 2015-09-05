#rotate() 方法

###定义和用法
rotate() 方法旋转当前的绘图。





属性值

|值	|描述
|-----|----|
|angle  |旋转角度，以弧度计。
如需将角度转换为弧度，请使用 degrees*Math.PI/180 公式进行计算。
举例：如需旋转 5 度，可规定下面的公式：5*Math.PI/180。


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.rotate(20*Math.PI/180);
ctx.fillRect(50,20,100,50);

```