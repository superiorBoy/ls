<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">信息设置</view>
			<view class=" head_right hei_30_bold" >
				
			</view>
		</view>

		<view class="zi_body shiming_body">
<view class="shezhi hei_28">联系设置</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					联系QQ
				</view>
				<input type="text" value="" placeholder="请输入QQ" class="hei_26" v-model="qq" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					联系微信
				</view>
				<input type="text" value="" placeholder="请输入微信" class="hei_26" v-model="weixin" />
			</view>

		<view class="shiming_list hei_28">
			<view class="shiming_list_left">
				微信二维码
			</view>
			<view class="shiming_list_right" @click="up_zhiye">
				<view class="tx_up" v-if="logo==''">立刻上传</view>
				<image :src="logo" mode="" class="tx"v-else ></image>
				<image src="@/static/lsimg/go_r.png" mode="" class="genghuan"></image>
			</view>
		</view>
		<view class="shezhi hei_28">收款设置</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					支付宝APP ID
				</view>
				<input type="text" value="" placeholder="请输入支付宝APP ID" class="hei_26" v-model="app_id" />
			</view>
			<view class="jianjie hei_28">
				<view class="shiming_list_left">
					应用私钥
				</view>
				<input type="text" value="" placeholder="请输入应用私钥" class="hei_26" v-model="sishi"  />
			</view>
             <view class="jianjie hei_28">
				<view class="shiming_list_left">
					支付宝公钥
				</view>
				<input type="text" value="" placeholder="清输入支付宝公钥" class="hei_26" v-model="gongshi"  />
			</view>

				
			<view class="baocun_btn">
			<button type="" class="bai_30 baocun_b" @click="save">提交</button>
				
			</view>			
				
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {

				qq: '',
				weixin: '',
				logo: '',
				app_id: '',
				sishi: '',
				gongshi: ''
				
			}
		},
		created() {

		},
		onLoad(option) {
           this.$http
           	.post({
           		url: '/lawyer/login/islogin'
           	})
           	.then(res => {
           		if (res.data.user == '') {
           			uni.navigateTo({
           				url:'login'
           			})
           			
           		} else {
           			
           		}
           	});


		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
 
			up_zhiye() {
				let that = this
				uni.chooseImage({
					success(res) {
						console.log(res)
						// that.zhiye_zhao = res.tempFilePaths[0];
						console.log(that.logo)
						// that.urlTobase64(res.tempFilePaths[0])
						uni.request({
							url: res.tempFilePaths[0],
							method: 'GET',
							responseType: 'arraybuffer',
							success: ress => {
								let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
								base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在页面无法显示的哦
								// console.log(base64)
								that.logo = base64;
							}
						})
					}
				})
			},
			save() {

				if (this.qq == '') {
					uni.showToast({
						title: '请填写联系QQ',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.weixin == '') {
					uni.showToast({
						title: '请填写联系微信',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.logo == '') {
					uni.showToast({
						title: '请上传微信二维码',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.app_id == '') {
					uni.showToast({
						title: '请输入支付宝APP ID',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.sishi == '') {
					uni.showToast({
						title: '请填写应用私钥',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.gongshi == '') {
					uni.showToast({
						title: '请填写支付宝公钥',
						duration: 2000,
						icon: "none"
					});
					return false
				}


				console.log(this.qq, this.weixin, this.logo, this.app_id, this.sishi,this.gongshi)
			}

		}
	}
</script>

<style>
	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}

	.shiming_list {
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid #E8E8E8;
		padding-left: 30rpx;
		padding-right: 30rpx;
		position: relative;
	}
.shezhi{
	height: 90rpx;
	background-color: #e8e8e8;
	padding-left: 30rpx;
	line-height: 90rpx;
}
	.shiming_list input {
		width: 500rpx;
		text-align: right;

	}

	.shiming_list_left {
		width: 200rpx;
	}

	.jianjie {
		padding: 0 30rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid #E8E8E8;
		
	}

	.jianjie input {
		font-size: 28rpx;
	margin-bottom: 40rpx;
	}

	.zhuanchang_xuan {
		/* width: 500rpx; */
		padding-right: 30rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: right;
		text-align: right;
	}

	.zhuanchang_xuan image {
		width: 13rpx;
		height: 23rpx;
		position: absolute;
		right: 30rpx;

	}
	.baocun_btn{
		padding: 0 30rpx;
		margin-top: 90rpx;
	}
	.baocun_b {
			height: 88rpx;
			background-color: #f43a51;
			border-radius: 44rpx;
			line-height: 88rpx;
			
	}
	.hui{
		background-color: #999999;
		color: #FFFFFF;
			border-radius: 44px;
	}
	.tx {
		width: 80rpx;
		height: 80rpx;
		border-radius: 100%;
		border: 2rpx solid #EEEEEE;
	}
	.tx_up{
		height: 80rpx;
		width: 150rpx;
		color: #777777;
		line-height: 80rpx;
		text-align: right;
	}
	
	.genghuan {
		width: 14rpx;
		height: 24rpx;
		margin-left: 12rpx;
	}
	.shiming_list_right{
		display: flex;
		align-items: center;
	}
</style>
