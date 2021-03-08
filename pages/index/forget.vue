<template>
	<view>
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold ">忘记密码</view>
			<view class="hei_30_bold head_right"></view>
		</view>

		<view class="zi_body">
			<view class="yonghu_zhuce ">
				<view class="zhuce_list">
					<image src="../../static/img/shouji_icon.png"></image>
					<input type="text" value="" placeholder="手机号码" v-model="shouji" />
				</view>
				<view class="zhuce_list zhuce_list_yanzheng">
					<view class="zhuce_list_left">
						<image src="../../static/img/duanxin_icon.png" mode="" class="yanzheng_icon"></image>
						<input type="text" placeholder="验证码" v-model="code" />
					</view>
					<button @click="VerificationCode($event)" :class="['background_zhuti', isdisabled == true ? 'border' : '']" ref="yanzheng_btn" :disabled="isdisabled">
						{{yan_txt}}
					</button>
				</view>
				<view class="zhuce_list">
					<image src="../../static/img/mima_icon.png" mode=""></image>
					<input :type="type1" value="" placeholder="请设置一个最少6位的密码" @input="mimashu" />
					<image :src="yan1_zhuangtai" mode="" @click="chakan(1)" :class="['yanjing', type1 == 'text' ? 'kai' : 'guan']"></image>
				</view>
				<view class="zhuce_list">
					<image src="../../static/img/mima_icon.png" mode=""></image>
					<input :type="type2" value="" placeholder="确认密码" @input="agamimashu" />
					<image :src="yan1_zhuangtai" mode="" @click="chakan(2)" :class="['yanjing', type1 == 'text' ? 'kai' : 'guan']"></image>
				</view>

				<button type="" class="zhuce bai_30" @click="xiugai()">确认修改</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			mima: '',
			shouji: '',
			code: '',
			type1: 'password',
			type2: 'password',
			isdisabled:false,
			yan1_zhuangtai: '../../static/lsimg/yanguan.png',
			yan_txt:'发送验证码',
			agamima: '',
		};
	},
	onLoad(option) {},
	methods: {
		navigateBack() {
			// uni.navigateBack();
			uni.reLaunch({
				url: 'my'
			});
		},

		chakan(e) {
			if (e == 1) {
				if (this.type1 == 'password') {
					this.type1 = 'text',
					this.yan1_zhuangtai='../../static/lsimg/yankai.png'
				} else {
					this.type1 = 'password',
					this.yan1_zhuangtai='../../static/lsimg/yanguan.png'
				}
			} else {
				if (this.type2 == 'password') {
					this.type2 = 'text',
					this.yan2_zhuangtai='../../static/lsimg/yankai.png'
				} else {
					this.type2 = 'password',
					this.yan2_zhuangtai='../../static/lsimg/yanguan.png'
				}
			}
			
			
			
			
		},
		btnCheck: function(e) {
			var that = this;
			var time = 60;
			var timer = setInterval(function() {
				if (time == 0) {
					clearInterval(timer);
					that.isdisabled = false;
					that.yan_txt = '获取验证码';
				} else {
					that.isdisabled = true;
					that.yan_txt = time + '秒重获取';
					time--;
				}
			}, 1000);
		},
		VerificationCode: function(e) {
			var reg = /^1[3456789]\d{9}$/;
			if (this.shouji == '') {
				uni.showToast({
					title: '请输入手机号码',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if (!reg.test(this.shouji)) {
				uni.showToast({
					title: '手机号输入错误',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
                 
			this.$http
				.post({
					url: '/index/login/forgetsendsms',
					data: {
						mobile: this.shouji
					}
				})
				.then(res => {
					console.log(res);
					if (res.code == 0) {
						this.btnCheck(e);
					}
				});
		},
		xiugai(){
			if(this.mima==''){
				uni.showToast({
					title: '请输入密码',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if(this.agamima==''){
				uni.showToast({
					title: '请确认密码',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}

			this.jiance_code()
			
		},
		jiance_code(){
			this.$http
				.post({
					url: '/index/login/forgetsmscode',
					data: {
						mobile: this.shouji,
						sms_code:this.code
					}
				})
				.then(res => {
					console.log(res);
					if (res.code == 0) {
						this.queren_gai()
					}else{
						uni.showToast({
							title: res.message,
							duration: 2000,
							icon: 'none'
						});
						return false;
					}
				});
		},
		queren_gai(){
			this.$http
				.post({
					url: '/index/login/forget',
					data: {
						mobile: this.shouji,
						sms_code:this.code,
						password: this.mima,
						password1:this.agamima
					}
				})
				.then(res => {
					console.log(res);
					if (res.code == 0) {
						
						uni.showToast({
							title: '修改成功',
							duration: 2000,
							icon: 'none'
						});
						setTimeout(function(){
							uni.redirectTo({
								url:'login'
							})
						},500)
						
					}
				});
		},
		mimashu(e) {
			this.mima = e.target.value
		},
		agamimashu(e) {
			this.agamima = e.target.value
		},
	}
};
</script>

<style>
.zhuce_list {
	border-bottom: 2rpx #e8e8e8 solid;
	height: 110rpx;
	display: flex;
	align-items: center;
}
.yonghu_zhuce {
	padding: 0 30rpx;
	font-size: 28rpx;
	color: #777777;
}

.zhuce_list image {
	width: 26rpx;
	height: 30rpx;
	margin-right: 30rpx;
}
.background_zhuti {
	width: 160rpx;
	height: 44rpx;
	border-radius: 22rpx;
	border: solid 2rpx #fc761f;
	background: none;
	line-height: 44rpx;
	color: #fc761f;
	font-size: 24rpx;
}
.zhuce_list_left {
	display: flex;
	align-items: center;
}
.yanjing {
	position: absolute;
	right: 30rpx;
	width: 27rpx !important;
	height: 19rpx !important;
	margin-right: 0 !important;
}
.zhuce_list input {
	width: 85% !important;
}
.yanzheng_icon {
	width: 29rpx !important;
	height: 26rpx !important;
}
button {
	margin: 0;
	padding: 0;
}

.xieyi {
	margin: 76rpx 0 50rpx 0;
	text-align: center;
	display: flex;
	justify-content: center;
}

.zhuce {
	height: 88rpx;
	background-color: #f43a51;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin-top: 200rpx;
}

.zhuce_tishi {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 40rpx;
}

.wangji_mima {
	text-align: right;
	margin-top: 30rpx;
}
.kai {
	width: 29rpx !important;
	height: 19rpx !important;
}
.guan {
	width: 28rpx !important;
	height: 14rpx !important;
}

.zhuce_list_yanzheng {
	justify-content: space-between;
	display: flex;
	align-items: center;
}
</style>
