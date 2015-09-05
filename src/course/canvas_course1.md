#canvas 标签发展史
Canvas标签被很多的工程师认为是HTML5最伟大的改进之一，因为它可以让我们在不使用图片的情况下实现网页的图形设计。
Canvas元素是为了客户端点阵图形而设计的。它自己没有行为，但却把一个绘图API展现给客户端JavaScript以使脚本能够把想绘制的东西都绘制到一块画布上。
Canvas标记由Apple在Safari 1.3 Web浏览器中引入。对HTML的这一根本扩展的原因在于，HTML在Safari中的绘图能力也为Mac OS X桌面的Dashboard组件所使用，并且Apple希望有一种方式在Dashboard中支持脚本化的图形。
Firefox 1.5和Opera 9都跟随了Safari的引领，这两个浏览器都支持Canvas标记。
我们甚至可以在IE中使用Canvas标记，并在IE的VML支持的基础上用开源的JavaScript代码（由Google发起）来构建兼容性的画布。
Canvas的标准化的努力由一个Web浏览器厂商的非正式协会在推进，目前Canvas已经成为HTML5草案中一个正式的标签。
简单的理解一下：Canvas标签的使用就是相当于在页面上放置了一张“画布”，如果您做过Flash，Canvas就可以理解为Flash中的“舞台”，我们可以在这个“舞台”中进行描绘。
必须要理解的是，我们在Canvas区域中绘制图形，并不是拿鼠标在Canvas中画画。事实上Canvas元素只是一块无色透明的区域，就像一个只有宽度高度没有背景的DIV一样，需要使用JavaScript脚本在其中绘画。
而有一些可以支持用户通过鼠标事件来绘制图形的HTML5网站，比如Theshodo，其具体的做法也是使用JavaScript脚本来支持的。因为JavaScript脚本可以捕获鼠标的路径进行作画，并不是真正用鼠标来作画，只是从视觉上感觉是鼠标在作画而已，就连PhotoShop我们从编程的角度来讲，也不能说是用鼠标在作画，而是捕获的鼠标路径和动作，程序在绘画而已。
Canvas标签的设置非常简单，一句代码而已：
```
<canvas id=”canvas” width=”400〃 height=”300〃/>
```

而且，Canvas只有2个属性值，width——宽度，height——高度。
虽然，Canvas是一个很轻便的标签，但是，它能完成的炫丽效果绝对让你震惊。只要有JavaScript脚本的支持，Canvas能完成你几乎能想到的所有效果。
