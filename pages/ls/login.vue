<template>
	<view>
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold ">登录</view>
			<view class="hei_30_bold head_right"><navigator url="../index/zhuce?state=2">注册</navigator></view>
		</view>

		<view class="zi_body">
			<view class="yonghu_zhuce ">
				<view class="zhuce_list">
					<image src="../../static/img/shouji_icon.png"></image>
					<input type="text" value="" placeholder="手机号码" v-model="shouji" />
				</view>

				<view class="zhuce_list">
					<image src="../../static/img/mima_icon.png" mode=""></image>
					<input :type="type1" value="" placeholder="请设置一个最少6位的密码" @input="mimashu" />
					<image :src="yan1_zhuangtai" mode="" @click="chakan()" :class="['yanjing', type1 == 'text' ? 'kai' : 'guan']"></image>
				</view>

				<view class="wangji_mima hong_28">忘记密码？</view>

				<view class="xieyi qian_24">
					<checkbox :checked="isCheck" @click="checkBox($event)" />
					我已阅读并同意
					
					<navigator url="../index/xieyi"  class="hong_24">《用户协议》</navigator>
					   和
					<navigator url="../index/yinsi"  class="hong_24">《隐私政策》</navigator>
				</view>
				<button type="" class="zhuce bai_30" @click="login">立即登录</button>
				<view class="zhuce_tishi qian_24">
					暂无账号？
					<navigator url="zhuce" class="hong_24">请注册</navigator>
				</view>
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
			type1: 'password',
			isCheck: false,
			yan1_zhuangtai: '../../static/lsimg/yanguan.png',
			back: false,
			dianji:true
		};
	},
	onLoad(option) {
		if (option != '') {
			if (option.type == 'back') {
				this.back = true;
			}
		}
		this.$http
			.post({
				url: '/mapi/index/getopenshenhe'
			})
			.then(res => {
				console.log(res)
				if(res.data.zhan.openshenhe==2){
					this.isCheck=true 
				}
			});
	},
	methods: {
		navigateBack() {
			// uni.navigateBack();
			uni.reLaunch({
				url:'my'
			})
		},
		checkBox(e) {
			this.isCheck = !this.isCheck;
		},
		chakan() {
			if (this.type1 == 'password') {
				(this.type1 = 'text'), (this.yan1_zhuangtai = '../../static/lsimg/yankai.png');
			} else {
				this.type1 = 'password';
				this.yan1_zhuangtai = '../../static/lsimg/yanguan.png';
			}
		},
		login() {
			var that=this
			if(this.dianji){
				this.dianji=false
				this.$http
					.post({
						url: '/lawyer/login/login',
						data: {
							mobile: this.shouji,
							password: this.mima
						}
					})
					.then(res => {
						if(res.code==0){
							uni.reLaunch({
								url:'my'
							})
						
						}
						that.dianji=true
						console.log(res);
					})
					
			}else{
			
				  
			  }
			

			console.log(this.shouji, this.mima, this.isCheck);
		},
		mimashu(e) {
			this.mima = e.target.value;
		}
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
	align-items: center;
}

.zhuce {
	height: 88rpx;
	background-color: #f43a51;
	border-radius: 44rpx;
	line-height: 88rpx;
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
</style>
