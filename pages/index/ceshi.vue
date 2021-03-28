<template>

	
	
<view>
	
	<view class="head">
		<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
		<view class="head_center hei_38_bold ">测试</view>
		<view class="hei_30_bold head_right"></view>
	</view>
	
	<view class="zi_body">
		
	
       
    </view>
 </view>
	
</template>

<script>
// const recorderManager = uni.getRecorderManager();
// const innerAudioContext = uni.createInnerAudioContext();

// innerAudioContext.autoplay = true;
	export default {
	onShow() {
		
		
		let that = this;
		var url = that.$http.WebSocket_url;
var aaa=   'wss://' + url + ':3348'

console.log(aaa,'aaa')
	   uni.connectSocket({url:'wss://api.xhlvshi.com:3348'});  
		uni.onSocketOpen(function (res) {  
		console.log('WebSocket连接已打开！',JSON.stringify(res).client_id);  
		});  
		uni.onSocketMessage(function (res) {  
		console.log('收到服务器内容：' , res.data);  
		var data = JSON.parse(res.data);
		console.log(data.client_id)
		
		});  
		uni.onSocketError(function (res) {  
		console.log('WebSocket连接打开失败，请检查！',JSON.stringify(res));  
		});  
		uni.onSocketClose(function (res) {  
		console.log('WebSocket 已关闭！',JSON.stringify(res));  
		});
	},

	data() {
		return {

		};
	},
	created() {},
	onReady() {
			
		},
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
	

</style>
