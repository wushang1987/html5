#font 属性

###定义和用法
font 属性设置或返回画布上文本内容的当前字体属性。
font 属性使用的语法与 CSS font 属性相同。



|属性|值
|-----|----|
|font-style	    |规定字体样式。可能的值：normalitalicoblique
|font-variant  |规定字体变体。可能的值：normal  small-caps
|font-weight	|规定字体的粗细。可能的值： normal bold bolder lighter 100 200 300 400 500 600 700 800 900
|font-size / line-height	|规定字号和行高，以像素计。
|font-family	    |规定字体系列。
|caption	        |使用标题控件的字体（比如按钮、下拉列表等）。
|icon	        |使用用于标记图标的字体。
|menu	        |使用用于菜单中的字体（下拉列表和菜单列表）。
|message-box  	|使用用于对话框中的字体。
|small-caption	|使用用于标记小型控件的字体。
|status-bar	    |使用用于窗口状态栏中的字体。


```

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.shadowBlur=10;
ctx.shadowOffsetY=20;
ctx.shadowColor="black";
ctx.fillStyle="blue";
ctx.fillRect(20,20,100,80);


```