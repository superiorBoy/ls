<template>
	<view class="">
		<!-- <index></index> -->
		
			<!-- <web-view  :style="{ height: viewheight+'rpx',width:viewwidth+'rpx' }" src="https://uniapp.dcloud.io/static/web-view.html"></web-view> -->
		
		 
	</view>
	
</template>

<script>

	export default {
	onShow() {
		
	},

	data() {
		return {
			viewheight:200,
			viewwidth:100
		};
	},
	created() {},
    onLoad(option) {
    	
    },
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
	
		
		
	}
	}
</script>

<style>
	.aaaaa{
		width: 300rpx;
		height: 300rpx;
	}
	.webView_class{
		width: 300rpx;
		height: 300rpx;
	}
	.webView_class::-webkit-scrollbar {
	
	    width: 0;
	
	    height: 0;
	
	    background-color: transparent;
	
	}

</style>
