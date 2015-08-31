#getImageData() 方法

###定义和用法
getImageData() 方法返回 ImageData 对象，该对象拷贝了画布指定矩形的像素数据。
对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：
R - 红色 (0-255)
G - 绿色 (0-255)
B - 蓝色 (0-255)
A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)
color/alpha 以数组形式存在，并存储于 ImageData 对象的 data 属性中。
提示：在操作完成数组中的 color/alpha 信息之后，您可以使用 putImageData() 方法将图像数据拷贝回画布上。



|属性|值
|-----|----|
|x       |开始复制的左上角位置的 x 坐标。
|y       |开始复制的左上角位置的 y 坐标。
|width   |将要复制的矩形区域的宽度。
|height  |将要复制的矩形区域的高度。


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="red";
ctx.fillRect(10,10,50,50);

function copy()
{
var imgData=ctx.getImageData(10,10,50,50);
ctx.putImageData(imgData,10,70);
}


```