#Canvas API

##颜色、样式和阴影
| 属性        | 描述                   |
| --------- | -------------------- |
| [fillStyle](#API/Canvas/fillstyle) | 设置或返回用于填充绘画的颜色、渐变或模式 |
| [strokeStyle](#API/Canvas/strokeStyle) | 设置或返回用于笔触的颜色、渐变或模式 |
| [shadowColor](#API/Canvas/shadowColor) | 设置或返回用于阴影的颜色 |
| [shadowBlur](#API/Canvas/shadowBlur) | 设置或返回用于阴影的模糊级别 |
| [shadowOffsetX](#API/Canvas/shadowOffsetX) | 设置或返回阴影距形状的水平距离 |
| [shadowOffsetY](#API/Canvas/shadowOffsetY) | 设置或返回阴影距形状的垂直距离 |



| 方法        | 描述  |
| --------- | -------------------- |
| [createLinearGradient()](#API/Canvas/createLinearGradient) | 创建线性渐变（用在画布内容上） |
| [createPattern()](#API/Canvas/createPattern)| 在指定的方向上重复指定的元素|
| [createRadialGradient()](#API/Canvas/createRadialGradient) | 创建放射状/环形的渐变（用在画布内容上）|
| [addColorStop() ](#API/Canvas/addColorStop)| 规定渐变对象中的颜色和停止位置|


-----------------------

##线条样式

| 属性        | 描述                   |
| --------- | -------------------- |
| [lineCap](#API/Canvas/lineCap) | 设置或返回线条的结束端点样式 |
| [lineJoin](#API/Canvas/lineJoin) | 设置或返回两条线相交时，所创建的拐角类型|
| [lineWidth](#API/Canvas/lineWidth) | 设置或返回当前的线条宽度|
| [miterLimit](#API/Canvas/miterLimit) | 设置或返回最大斜接长度 |


--------------------------------


##矩形

| 属性        | 描述                   |
| --------- | -------------------- |
| [rect()](#API/Canvas/rect) | 创建矩形 |
| [fillRect()](#API/Canvas/fillRect) | 绘制“被填充”的矩形|
| [strokeRect()](#API/Canvas/strokeRect) | 绘制矩形（无填充）|
| [clearRect() ](#API/Canvas/clearRect)| 在给定的矩形内清除指定的像素 |


--------------------------------


##路径

| 属性        | 描述                   |
| --------- | -------------------- |
| [fill()](#API/Canvas/fill) | 填充当前绘图（路径） |
| [stroke()](#API/Canvas/stroke) | 绘制已定义的路径|
| [beginPath()](#API/Canvas/beginPath)| 起始一条路径，或重置当前路径|
| [moveTo()](#API/Canvas/moveTo)| 把路径移动到画布中的指定点，不创建线条 |
| [closePath()](#API/Canvas/closePath)| 创建从当前点回到起始点的路径 |
|[lineTo()](#API/Canvas/lineTo)| 添加一个新点，然后在画布中创建从该点到最后指定点的线条 |
| [clip()](#API/Canvas/clip)| 从原始画布剪切任意形状和尺寸的区域 |
| [quadraticCurveTo()](#API/Canvas/quadraticCurveTo)| 创建二次贝塞尔曲线 |
|[bezierCurveTo()](#API/Canvas/bezierCurveTo)| 创建三次方贝塞尔曲线 |
| [arc()](#API/Canvas/arc)| 创建弧/曲线（用于创建圆形或部分圆） |
|[arcTo()](#API/Canvas/arcTo)| 创建两切线之间的弧/曲线 |
|[isPointInPath()](#API/Canvas/isPointInPath)| 如果指定的点位于当前路径中，则返回 true，否则返回 false |


--------------------------------



##转换

| 属性        | 描述                   |
| --------- | -------------------- |
| [scale()](#API/Canvas/scale)| 缩放当前绘图至更大或更小 |
| [rotate()](#API/Canvas/rotate) | 旋转当前绘图|
| [translate()](#API/Canvas/translate)| 重新映射画布上的 (0,0) 位置|
| [transform()](#API/Canvas/transform) |替换绘图的当前转换矩阵 |
| [setTransform()](#API/Canvas/setTransform)| 将当前转换重置为单位矩阵。然后运行 transform() |


--------------------------------


##文本

| 属性        | 描述                   |
| --------- | -------------------- |
| [font](#API/Canvas/font)| 设置或返回文本内容的当前字体属性 |
| [textAlign](#API/Canvas/textAlign) | 设置或返回文本内容的当前对齐方式|
| [textBaseline](#API/Canvas/textBaseline)|设置或返回在绘制文本时使用的当前文本基线|


| 方法        | 描述                   |
| --------- | -------------------- |
| [fillText()](#API/Canvas/fillText)| 在画布上绘制“被填充的”文本 |
| [strokeText() ](#API/Canvas/strokeText)| 在画布上绘制文本无填充 |
| [measureText()](#API/Canvas/measureText)|返回包含指定文本宽度的对象|



--------------------------------


##图像绘制

| 属性        | 描述                   |
| --------- | -------------------- |
| [drawImage()](#API/Canvas/drawImage)| 向画布上绘制图像、画布或视频 |

------------------------

##像素操作

| 属性        | 描述                   |
| --------- | -------------------- |
| [width](#API/Canvas/width) | 返回 ImageData 对象的宽度 |
| [height](#API/Canvas/height) | 返回 ImageData 对象的高度 |
| [data](#API/Canvas/data) | 返回一个对象，其包含指定的 ImageData 对象的图像数据 |


| 方法        | 描述                   |
| --------- | -------------------- |
| [createImageData()](#API/Canvas/createImageData) | 创建新的、空白的 ImageData 对象|
| [getImageData() ](#API/Canvas/getImageData)|返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据 |
| [putImageData()](#API/Canvas/putImageData) |   把图像数据（从指定的 ImageData 对象）放回画布上 |



##合成

| 属性        | 描述                   |
| --------- | -------------------- |
| [globalAlpha](#API/Canvas/globalAlpha) | 设置或返回绘图的当前 alpha 或透明值 |
| [globalCompositeOperation](#API/Canvas/globalCompositeOperation) | 设置或返回新图像如何绘制到已有的图像上 |


------------------------


##其他

| 属性        | 描述                   |
| --------- | -------------------- |
| save() | 保存当前环境的状态 |
| restore() | 返回之前保存过的路径状态和属性 |
| createEvent() |  |
| getContext()|  |
| oDataURL() |  |





























