#putImageData() 方法

###定义和用法
putImageData() 方法将图像数据（从指定的 ImageData 对象）放回画布上。
提示：请参阅 getImageData() 方法，它可复制画布上指定的矩形的像素数据。
提示：请参阅 createImageData() 方法，它可创建新的空白 ImageData 对象。



|属性|值
|imgData       |规定要放回画布的 ImageData 对象。
|x             |ImageData 对象左上角的 x 坐标，以像素计。
|y             |ImageData 对象左上角的 y 坐标，以像素计。
|dirtyX        |可选。水平值（x），以像素计，在画布上放置图像的位置。
|dirtyY        |可选。水平值（y），以像素计，在画布上放置图像的位置。
|dirtyWidth    |可选。在画布上绘制图像所使用的宽度。
|dirtyHeight   |可选。在画布上绘制图像所使用的高度。



```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="green";
ctx.fillRect(10,10,50,50);

function copy()
{
var imgData=ctx.getImageData(10,10,50,50);
ctx.putImageData(imgData,10,70);
}


```