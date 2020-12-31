<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">网站配置</view>
			<view class=" head_right hei_30_bold" >
				
			</view>
		</view>

		<view class="zi_body shiming_body">

			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					域名
				</view>
				<input type="text" value="" placeholder="请输入专属域名" class="hei_26" v-model="yuming" :disabled="is_dis"/>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					备案号
				</view>
				<input type="text" value="" placeholder="请输入备案号" class="hei_26" v-model="beianhao" :disabled="is_dis"/>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					网站名
				</view>
				<input type="text" value="" placeholder="请输入网站名称" class="hei_26" v-model="name" :disabled="is_dis"/>
			</view>
		<view class="shiming_list hei_28">
			<view class="shiming_list_left">
				上传logo
			</view>
			<view class="shiming_list_right" @click="up_zhiye">
				<view class="tx_up" v-if="logo==''">请上传</view>
				<image :src="logo" mode="" class="tx"v-else ></image>
				<image src="@/static/lsimg/go_r.png" mode="" class="genghuan"></image>
			</view>
		</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					网站标题
				</view>
				<input type="text" value="" placeholder="请输入网站标题" class="hei_26" v-model="biaoti" :disabled="is_dis"/>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					关键词
				</view>
				<input type="text" value="" placeholder="请输入关键词" class="hei_26" v-model="guanjianzi" :disabled="is_dis" />
			</view>

			<view class="jianjie hei_28">
				网站描述
				<textarea value="" placeholder="请简短的来描述一下网站" class="jianjie_txt" v-model="miaoshu" :disabled="is_dis"/>
				</view>
				
			<view class="baocun_btn">
			<button type="" :class="['bai_30 baocun_b',is_dis?'hui':'']" @click="save">{{bt_txt}}</button>
				
			</view>			
				
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {

				yuming: '',
				beianhao: '',
				name: '',
				logo: '',
				biaoti: '',
				guanjianzi: '',
				miaoshu: '',
				is_dis:false,
				bt_txt:'提交申请'
			}
		},
		created() {

		},
		onLoad(option) {
           
		   // this.is_dis=true,
		   // this.bt_txt='此网站已开通'
		   

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

				if (this.yuming == '') {
					uni.showToast({
						title: '请填写域名',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.beianhao == '') {
					uni.showToast({
						title: '请填写备案号',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.name == '') {
					uni.showToast({
						title: '请填写网站名',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.logo == '') {
					uni.showToast({
						title: '请上传logo',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.biaoti == '') {
					uni.showToast({
						title: '请填写网站标题号',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.guanjianzi == '') {
					uni.showToast({
						title: '请填写关键词',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.miaoshu == '') {
					uni.showToast({
						title: '请填写网站描述',
						duration: 2000,
						icon: "none"
					});
					return false
				}


				console.log(this.yuming, this.beianhao, this.name, this.logo, this.biaoti,this.guanjianzi,this.miaoshu)
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

	.shiming_list input {
		width: 500rpx;
		text-align: right;

	}

	.shiming_list_left {
		width: 170rpx;
	}

	.jianjie {
		padding: 0 30rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid #E8E8E8;
		
	}

	.jianjie_txt {
		font-size: 28rpx;
		width: 100%;
		height: 150rpx;
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
		width: 100rpx;
		color: #777777;
		line-height: 80rpx;
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
