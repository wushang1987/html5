#data 属性

###定义和用法
fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。
data 属性返回一个对象，该对象包含指定的 ImageData 对象的图像数据。
对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：
R - 红色 (0-255)
G - 绿色 (0-255)
B - 蓝色 (0-255)
A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)
color/alpha 以数组形式存在，并存储于 ImageData 对象的 data 属性中。





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