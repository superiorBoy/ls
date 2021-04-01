<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_36_bold">完善个人资料</view>
			<view class="head_right "><navigator url="jiedan" class="hui_36_bold">跳过</navigator></view>
		</view>

		<view class="zi_body">
			<view class="wanshang_body">
				<view class="wanshang_top">
					<view class="shangchuan" @click="up_zhiye">
						<image :src="zhiye_zhao" mode="" class="tx"></image>
						<text class="bai_24 genghuan">点击更换</text>
					</view>
					<view class="hei_32">设置头像</view>
				</view>

				<view class="nicheng"><input type="text" value="" placeholder="请输入昵称" class="hei_30" /></view>
				<navigator url="my" ><button type="" class="bai_30" @click="go_shouye" >进入首页</button></navigator>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			zhiye_zhao: '../../static/img/moren_tx.png'
		};
	},
	created() {},
	onLoad(option) {
		
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		up_zhiye() {
			let that = this;
			uni.chooseImage({
				success(res) {
					console.log(res);
					that.zhiye_zhao = res.tempFilePaths[0];

					// that.urlTobase64(res.tempFilePaths[0])
					//#ifdef H5

					uni.request({
						url: res.tempFilePaths[0],
						method: 'GET',
						responseType: 'arraybuffer',
						success: ress => {
							let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64
							base64 = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示的哦
							// console.log(base64)
							that.zhiye_zhao = base64;
						}
					});
					//#endif

					//#ifdef APP-PLUS
					let path = that.getLocalFilePath(res.tempFilePaths[0]);
					plus.io.resolveLocalFileSystemURL(
						path,
						function(entry) {
							entry.file(
								function(file) {
									var fileReader = new plus.io.FileReader();
									fileReader.onload = function(data) {
										that.zhiye_zhao = data.target.result;
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
			});
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
		go_shouye(){
			
			this.$http
				.post({
					url: '/mlawyerapi/lawyer/upnickname',
					data: {
						nickname:this.nicheng,
						img:this.zhiye_zhao
					}
				})
				.then(res => {
					console.log(res.code);
					if (res.code == 0) {
						uni.showToast({
							title: '修改成功',
							duration: 2000,
							icon: 'none'
						});
						setTimeout(function(){
							uni.reLaunch({
								url:'jiedan'
							})
						},1000)
					}
				});
		
			
		}
	}
};
</script>

<style>
.head {
	/* border-bottom: 2rpx solid #f7f7f7; */
}
.wanshang_body {
	padding: 0 30rpx;
}
.shangchuan {
	width: 186rpx;
	height: 186rpx;
	background-color: #bfbfbf;
	border-radius: 100%;
	margin: 130rpx auto 20rpx;
	position: relative;
	overflow: hidden;
}
.shangchuan image {
	width: 100%;
	height: 100%;
	border-radius: 100%;
}
.genghuan {
	display: inline-block;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 98%;
	height: 44rpx;
	line-height: 36rpx;
	background-color: rgba(0, 0, 0, 0.4);
}
.wanshang_top {
	text-align: center;
}
.nicheng {
	border-bottom: 2rpx solid #e7e7e7;
	margin-top: 100rpx;
	padding-bottom: 10rpx;
}
.nicheng input {
	width: 100%;
}
.wanshang_body button {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin-top: 316rpx;
}
</style>
