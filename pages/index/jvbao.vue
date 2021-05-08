<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">举报</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">

			<view class="jvbao_top">
			<view class="hei_30_bold jvbao_top_title">
				举报原因
			</view>
			<textarea value="" placeholder="越详细的说明，可帮助工作人员快速的处理。" class="hei_30" v-model="shuru_txt"/>
			</view>

<view class="zhengming">
	<view class="hei_30_bold zhengming_title">
		图片证明
	</view>
	<view class="hui_26">
		最多6张，直观的截图是非常有利的举报证据。
	</view>
	<view class="tu">
	<view class="tu_arry">
		<view class="img_tu"  v-for="(item,index) in arry_img" >
		<image :src="item" mode=""></image>
			<text class="del hong_26" @click="del(index)">X</text>
		</view>
	    <image src="@/static/img/up_jia.png" mode="" class="up_tu" @click="up_zheng"></image>
	</view>
	</view>
</view>


		<view class="baocun_btn">
		<button type="" class="bai_38 baocun_b" @click="save">提交</button>
		</view>	
		
		</view>

	</view>

</template>

<script>
	export default {

		data() {
			return {
				img_url: uni.getStorageSync('img_url'),
				arry_img:[],
				shuru_txt:'',
				arry:[],
				lawyerid:'',
				
			}
		},
		created() {

		},
		onLoad(option) {
            this.lawyerid=option.lawyerid
			
		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
			
	

		up_zheng() {
			let that = this
			uni.chooseImage({
				success(res) {
					console.log(res)

					if(that.arry_img.length+res.tempFilePaths.length>6){
						uni.showToast({
							title: '最多上传6张图片',
							duration: 2000,
							icon: 'none'
						});
						return false
						
					}
					for(var i=0;i<res.tempFilePaths.length;i++){
                      //#ifdef H5
						uni.request({
							url: res.tempFilePaths[i],
							method: 'GET',
							responseType: 'arraybuffer',
							success: ress => {
								let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
								base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在页面无法显示的哦
								// console.log(base64)
								that.arry_img.push(base64) ;
								
							}
						})
						
							//#endif
            //#ifdef APP-PLUS
					
					let path = that.getLocalFilePath(res.tempFilePaths[i]);
					plus.io.resolveLocalFileSystemURL(
						path,
						function(entry) {
							entry.file(
								function(file) {
									var fileReader = new plus.io.FileReader();
									fileReader.onload = function(data) {
										that.arry_img.push(data.target.result);	
									};
									fileReader.onerror = function(error) {
										console.log(error);
									};
									fileReader.readAsDataURL(file);
								},
								function(error) {
									console.log(error);
								}
							);
						},
						function(error) {
							console.log(error);
						}
					);
					
					//#endif
					}
					

				}
			})
		},
		getLocalFilePath(path) {
			if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
				return path;
			}
			if (path.indexOf('file://') === 0) {
				return path;
			}
			if (path.indexOf('/storage/emulated/0/') === 0) {
				return path;
			}
			if (path.indexOf('/') === 0) {
				var localFilePath = plus.io.convertAbsoluteFileSystem(path);
				if (localFilePath !== path) {
					return localFilePath;
				} else {
					path = path.substr(1);
				}
			}
			return '_www/' + path;
		},
		del(index){
			this.arry_img.splice(index,1)
		},
		save(){
			var that=this
			if(this.shuru_txt==''){
				uni.showToast({
					title: '请输入举报原因',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
		
			
		uni.request({
		  url: this.$http.baseUrl + '/mapi/lawyer/report?lawyerid='+this.lawyerid,
		  method:'POST',
		  data: {
		  	reason:this.shuru_txt,
		  	img:this.arry_img
		  },
		  header: {
		    'content-type': 'application/json'
		  },
		  success: function(resp) {
		    uni.hideLoading();
			if (resp.data.code == 0) {
				uni.showToast({
					title: '举报成功',
					duration: 2000,
					icon: 'none'
				});
				setTimeout(function(){
				uni.switchTab({
					url:'xiaoxi'
				})
				},2000)
			}
			else if (resp.data.message == '请先登录' || resp.data.msg == '请先登录') {
				uni.navigateTo({
					url:'login?type=back'
				});
			}
			else {
				uni.showToast({
					title: resp.data.message,
					duration: 2000,
					icon: 'none'
				});
				
			}
		  },
		  fail: function(resp) {
		   uni.showToast({
		   	title: resp.data.message,
		   	duration: 2000,
		   	icon: 'none'
		   });
		  }
		})
			

			console.log(this.shuru_txt,this.arry_img)
		}
		}
	}
</script>

<style>

	.head {
		border-bottom: 2rpx solid #F7F7F7;
	}
	.zi_body{
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
.jvbao_top_title{
	line-height: 100rpx;
}
.jvbao_top textarea{
		height: 343rpx;
		background-color: #f8f8f8;
		border-radius: 10rpx;
		width: 100%;
		padding: 25rpx;
		box-sizing: border-box;
}
.zhengming_title{
	margin:60rpx 0 10rpx ;
}
	.up_tu{
			width: 208rpx;
				height: 208rpx;
			background-color: #f5f5f5;
			border-radius: 10rpx;
	}
	.tu_arry{
		display: flex;
		flex-wrap: wrap;
	}
	.img_tu{
		position: relative;
	}
	.del{
		position: absolute;
		top: 0;
		right: 14rpx;
	}
	.tu_arry image{
		width: 208rpx;
			height: 208rpx;
		margin-right: 10rpx;
		margin-bottom: 10rpx;
	}
	.tu{
		margin: 20rpx 0 90rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.baocun_b{
			height: 88rpx;
			background-color: #0eb77e;
			border-radius: 44rpx;
			line-height: 88rpx;
	}
	.baocun_btn{
		padding-bottom: 30rpx;
		}
</style>
