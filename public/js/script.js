var imageCount = 1;
var total = 3;

function slider(x) {
	var image = document.getElementById('imgSlider');
	imageCount = imageCount + x;
	if(imageCount > total){
		imageCount = 1;
	}
	if(imageCount < 1) {
		imageCount = total;
	}
	image.src = "image/slider" + imageCount + ".jpg";
}

window.setInterval(function sliderA() {
	var image = document.getElementById('imgSlider');
	imageCount = imageCount + 1;
	if(imageCount > total){
		imageCount = 1;
	}
	if(imageCount < 1) {
		imageCount = total;
	}
	image.src = "image/slider" + imageCount + ".jpg";
}, 6000);