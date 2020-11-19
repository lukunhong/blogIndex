// 小图标导航点击事件
$(".left-bottom-icon-children1").bind('click', function() {
	var _this = $(this); //将当前的img元素作为_this传入函数
	imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
})
$(".left-bottom-icon-children2").bind('click', function() {
	var _this = $(this); //将当前的img元素作为_this传入函数
	imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
})
$(".left-bottom-icon-children3").bind('click', function() {
	var _this = $(this); //将当前的img元素作为_this传入函数
	imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
})
// 小图标导航点击事件
$(".contact-left-bottom-icon-children1").bind('click', function() {
	var _this = $(this); //将当前的img元素作为_this传入函数
	imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
})
$(".contact-left-bottom-icon-children2").bind('click', function() {
	var _this = $(this); //将当前的img元素作为_this传入函数
	imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
})
$(".contact-left-bottom-icon-children3").bind('click', function() {
	var _this = $(this); //将当前的img元素作为_this传入函数
	imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
})

// 名片二维码图片弹出
function imgShow(outerdiv, innerdiv, bigimg, _this) {
	var src = _this.attr("img-data"); //获取当前点击的pimg元素中的src属性
	$(bigimg).attr("src", src); //设置#bigimg元素的src属性
	/*获取当前点击图片的真实大小，并显示弹出层及大图*/
	//$("<img/>").attr("src", src).load(function() {
	$("<img/>").attr("src", src).on("load", function() {
		var windowW = $(window).width(); //获取当前窗口宽度
		var windowH = $(window).height(); //获取当前窗口高度
		var realWidth = this.width; //获取图片真实宽度
		var realHeight = this.height; //获取图片真实高度
		var imgWidth, imgHeight;
		var scale = 1; //缩放尺寸，图片真实宽度和高度大于窗口宽度和高度时进行缩放
		if (realHeight > windowH * scale) { //判断图片高度
			imgHeight = windowH * scale; //如大于窗口高度，图片高度进行缩放
			imgWidth = imgHeight / realHeight * realWidth; //等比例缩放宽度
			if (imgWidth > windowW * scale) { //如宽度扔大于窗口宽度
				imgWidth = windowW * scale; //再对宽度进行缩放
			}
		} else if (realWidth > windowW * scale) {
			//如图片高度合适，判断图片宽度
			imgWidth = windowW * scale; //如大于窗口宽度，图片宽度进行缩放
			imgHeight = imgWidth / realWidth * realHeight; //等比例缩放高度
		} else {
			//如果图片真实高度和宽度都符合要求，高宽不变
			imgWidth = realWidth;
			imgHeight = realHeight;
		}
		$(bigimg).css("width", imgWidth); //以最终的宽度对图片缩放
		var w = (windowW - imgWidth) / 2; //计算图片与窗口左边距
		var h = (windowH - imgHeight) / 3; //计算图片与窗口上边距
		// var w = 390px;
		// var h = 390px;
		$(innerdiv).css({
			"position": "relative",
			"top": h,
			"left": w
		}); //设置#innerdiv的top和left属性
		$(outerdiv).fadeIn("fast"); //淡入显示#outerdiv及.pimg
	});
	$(outerdiv).click(function() { //再次点击淡出消失弹出层
		$(this).fadeOut("fast");
	});
}

// 点击简介
$(".children1").bind('click', function() {
	// $(".parent").slideUp();
	$(".about").slideDown("");
	$(".parent").fadeOut();
	// $(".parent").fadeIn();
});
// 关闭简介
$(".close-about").bind('click', function() {
	$(".about").slideUp("fast");
	// $(".parent").slideDown();
	// $(".parent").fadeOut();
	$(".parent").fadeIn();
});
// 点击履历
$(".children2").bind('click', function() {
	// $(".parent").slideUp();
	// $(".resume").slideDown("");
	$(".parent").fadeOut();
	$(".resume").fadeIn();
});
// 关闭履历
$(".close-resume").bind('click', function() {
	// $(".resume").slideUp("fast");
	// $(".parent").slideDown();
	$(".resume").fadeOut();
	$(".parent").fadeIn();
});
// 点击联系
$(".children6").bind('click', function() {
	// $(".parent").slideUp();
	$(".contact").slideDown("","swing",function(){
		$(".contact").css("background-color","rgba(61, 148, 152, 0.5)");
	});
	$(".parent").fadeOut();
	// $(".parent").fadeIn();
});

function sendMe(){
	alert("暂未开通");
}
// 关闭联系
$(".close-contact").bind('click', function() {
	$(".contact").slideUp("fast");
	// $(".parent").slideDown();
	// $(".parent").fadeOut();
	$(".parent").fadeIn();
});
// 点击服务

// 点击地址
$(".children5").bind('click', function() {
	// $(".parent").slideUp();
	$(".address").slideDown("","swing",function(){
		$(".address").css("background-color","rgba(107, 105, 213, 0.5)");
	});
	$(".parent").fadeOut();
	// $(".parent").fadeIn();
});
// 关闭地址
$(".close-address").bind('click', function() {
	$(".address").slideUp("fast");
	// $(".parent").slideDown();
	// $(".parent").fadeOut();
	$(".parent").fadeIn();
});
// 点击博客
// $(".children3").bind('click', function() {
// 	// $(".parent").slideUp();
// 	// $(".blog").slideDown("","swing",function(){
// 	// 	$(".blog").css("background-color","rgba(202, 45, 111, 0.5)");
// 	// });
// 	$(".blog").slideDown();
// 	$(".parent").fadeOut();
// 	// $(".parent").fadeIn();
// });
function blogClick() {
	$(".blog").slideDown();
	$(".parent").fadeOut();
	// $(".parent").fadeIn();
}
// 关闭博客
$(".close-blog").bind('click', function() {
	$(".blog").slideUp("fast");
	// $(".parent").slideDown();
	// $(".parent").fadeOut();
	$(".parent").fadeIn();
});

