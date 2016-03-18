@extends('app')

@section('content')
		<div id="slider">
			<img src="image/slider1.jpg" id="imgSlider" />
			<div id="leftHolder"><img onClick="slider(-1)" class="leftArrow" src="image/left-arrow.png"></div>
			<div id="rightHolder"><img onClick="slider(1)" class="rightArrow" src="image/right-arrow.png"></div>
		</div>
@endsection