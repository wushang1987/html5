var pageWrapMap = {
	1: "wrap",
	2: "APIRightWrap"
}


$("#wrap").load("frame-index.html")

$("body").on("click","[page-name]",function(){
	var pageName = $(this).attr("page-name");
	var pageWrap = $(this).attr("page-wrap");
	var dc = $("#"+pageWrapMap[pageWrap]+"")
	
	dc.empty();
	dc.load(pageMap[pageName]);
})


// $("body").on('click','a',function(){
// 	if(!$(this).attr("href")){
// 		return;
// 	}
// 	var href = $(this).attr("href");
// 	if(href.indexOf("#") == 0){
// 		var page  = href.slice(1)+".html";
// 	    $("#wrap").load("canvasAPIFrame.html",function(){
// 	       $("#APIRightWrap").load(page);
// 	    });
// 	}
// })

var pageMap = {
	"index":"frame-index.html",
	"API":"API.html",
	"course":"course.html",
	"book":"book.html",


	"canvas_course":"canvas_course.html",
	"canvas_course1":"course/canvas_course1.html",
	"canvas_course_frame":"course/canvas_course_frame.html",
	
	"canvas":"API/Canvas/canvasAPI.html",
	"audio":"API/audio/audio.html",

	"fillstyle":"API/Canvas/fillStyle.html",
	"strokeStyle":"API/Canvas/strokeStyle.html",
	"shadowColor":"API/Canvas/shadowColor.html",
	"shadowBlur":"API/Canvas/shadowBlur.html",
	"shadowOffsetX":"API/Canvas/shadowOffsetX.html",
	"shadowOffsetY":"API/Canvas/shadowOffsetY.html",
	"createLinearGradient":"API/Canvas/createLinearGradient.html",
	"createPattern":"API/Canvas/createPattern.html",
	"createRadialGradient":"API/Canvas/createRadialGradient.html",
	"addColorStop":"API/Canvas/addColorStop.html",
	"lineCap":"API/Canvas/lineCap.html",
	"lineJoin":"API/Canvas/lineJoin.html",
	"lineWidth":"API/Canvas/lineWidth.html",
	"miterLimit":"API/Canvas/miterLimit.html",
	"rect":"API/Canvas/rect.html",
	"fillRect":"API/Canvas/fillRect.html",
	"strokeRect":"API/Canvas/strokeRect.html",
	"clearRect":"API/Canvas/clearRect.html",
	"fill":"API/Canvas/fill.html",
	"stroke":"API/Canvas/stroke.html",
	"beginPath":"API/Canvas/beginPath.html",
	"moveTo":"API/Canvas/moveTo.html",
	"closePath":"API/Canvas/closePath.html",
	"lineTo":"API/Canvas/lineTo.html",
	"clip":"API/Canvas/clip.html",
	"quadraticCurveTo":"API/Canvas/quadraticCurveTo.html",
	"bezierCurveTo":"API/Canvas/bezierCurveTo.html",
	"arc":"API/Canvas/arc.html",
	"arcTo":"API/Canvas/arcTo.html",
	"isPointInPath":"API/Canvas/isPointInPath.html",
	"scale":"API/Canvas/scale.html",
	"rotate":"API/Canvas/rotate.html",
	"translate":"API/Canvas/translate.html",
	"transform":"API/Canvas/transform.html",
	"font":"API/Canvas/font.html",
	"textAlign":"API/Canvas/textAlign.html",
	"textBaseline":"API/Canvas/textBaseline.html",
	"fillText":"API/Canvas/fillText.html",
	"strokeText":"API/Canvas/strokeText.html",
	"measureText":"API/Canvas/measureText.html",
	"drawImage":"API/Canvas/drawImage.html",
	"width":"API/Canvas/width.html",
	"height":"API/Canvas/height.html",
	"data":"API/Canvas/data.html",
	"createImageData":"API/Canvas/createImageData.html",
	"getImageData":"API/Canvas/getImageData.html",
	"putImageData":"API/Canvas/putImageData.html",
	"globalAlpha":"API/Canvas/globalAlpha.html",
	"globalCompositeOperation":"API/Canvas/globalCompositeOperation.html",
	"save":"API/Canvas/save.html",
	"restore":"API/Canvas/restore.html",
	"createEvent":"API/Canvas/createEvent.html",
	"getContext":"API/Canvas/getContext.html",
	"toDataURL":"API/Canvas/toDataURL.html"
}
