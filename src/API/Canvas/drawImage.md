#drawImage() 方法

###定义和用法
drawImage() 方法在画布上绘制图像、画布或视频。
drawImage() 方法也能够绘制图像的某些部分，以及/或者增加或减少图像的尺寸。
JavaScript 语法 1



|属性|值
|-----|----|
|img       |规定要使用的图像、画布或视频。
|sx        |可选。开始剪切的 x 坐标位置。
|sy        |可选。开始剪切的 y 坐标位置。
|swidth    |可选。被剪切图像的宽度。
|sheight   |可选。被剪切图像的高度。
|x         |在画布上放置图像的 x 坐标位置。
|y         |在画布上放置图像的 y 坐标位置。
|width     |可选。要使用的图像的宽度。（伸展或缩小图像）
|height    |可选。要使用的图像的高度。（伸展或缩小图像）
 


属性值

|值	|描述
|-----|----|
|number	|正值或负值，定义阴影与形状的垂直距离



```
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("tulip");
ctx.drawImage(img,10,10);


```