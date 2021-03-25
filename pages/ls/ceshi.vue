<template>

	<view class="body">
	
	<view><image :src="showImg" @error="imageError"></image> </view>
	</view>



</template>

<script>
	
	export default {


 onReady: function (e) {
        

     
    },
		data() {
			return {
				    showImg : "", //显示图片地址
				              coverImg : 'https://leleossa.oss-cn-hangzhou.aliyuncs.com/lawyerauth/20210107/161001258674539.png' //网络图片地址
			}
		},
		created() {

		},
		onLoad(option) {
          
          	   this.urlTobase64(this.coverImg);
		   

		},
		methods: {
	imageError: function(e) {
	            console.error('image发生error事件，携带值为' + e.detail.errMsg)
	        },
	        urlTobase64(url) {
	            let toBase64Url;
	            uni.request({
	                url: url,
	                method: 'GET',
	                responseType: "arraybuffer",
	                success: async res => {
	                    let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
	                    toBase64Url = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
	                    console.log(toBase64Url);
	                    this.showImg= toBase64Url;
	                 }
	             });
	        },


		}
	}
</script>

<style>
	
</style>
