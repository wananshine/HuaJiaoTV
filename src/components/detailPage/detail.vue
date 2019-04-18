<style lang="less" scope="true">
	@keyframes sport1{
		from {
			// transform: translateZ(-600px);
			transform: translateZ(-600px);
    		opacity: 0.5;
		}
		to {
			// transform: translateZ(-600px);
			transform: translateZ(0px);
    		opacity: 0.5;
		}
	}
	.star-field{
		width: 100%;
		height: 800px;
		position: relative;
		perspective: 800px;
  		-webkit-perspective: 800px;
		.layer{
			box-shadow: 52px 1px red, 52px -74px red, 88px -230px red, -200px -330px red,-500px -130px red, -100px 30px red;
			transform-style: preserve-3d;
			position: absolute;
			top: 50%;
			left: 50%;
			height: 6px;
			width: 6px;
			border-radius: 10px;
			animation: sport1 4s linear 0.2s infinite;
		}
	}
</style>
<template>
	<div>
		<div class="star-field">
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
        </div>
	</div>
</template>