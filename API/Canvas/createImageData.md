#createImageData() 方法

###定义和用法
createImageData() 方法创建新的空白 ImageData 对象。新对象的默认像素值 transparent black。
对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：
R - 红色 (0-255)
G - 绿色 (0-255)
B - 蓝色 (0-255)
A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)
因此 ，transparent black 表示 (0,0,0,0)。
color/alpha 以数组形式存在，并且既然数组包含了每个像素的四条信息，数组的大小是 ImageData 对象的四倍。（获得数组大小有更简单的办法，就是使用 ImageDataObject.data.length）
包含 color/alpha 信息的数组存储于 ImageData 对象的 data 属性中。
提示：在操作完成数组中的 color/alpha 信息之后，您可以使用 putImageData() 方法将图像数据拷贝回画布上。



|属性|值
|-----|----|
|width       |ImageData 对象的宽度，以像素计。
|height      |ImageData 对象的高度，以像素计。
|imageData   |另一个 ImageData 对象。


```
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var imgData=ctx.createImageData(100,100);
for (var i=0;i<imgData.data.length;i+=4)
  {
  imgData.data[i+0]=255;
  imgData.data[i+1]=0;
  imgData.data[i+2]=0;
  imgData.data[i+3]=255;
  }
ctx.putImageData(imgData,10,10);


```