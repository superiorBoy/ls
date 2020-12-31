<template>
	<view>

		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">修改密码</view>
			<view class=" head_right hei_30_bold">

			</view>
		</view>

		<view class="zi_body">
			<view class="yonghu_zhuce ">
				<view class="zhuce_list dis_sp">
					<text> 手机号码</text>
					<text>{{user.mobile}}</text>
				</view>
				<view class="zhuce_list ">
						<input type="text" placeholder="原始密码" v-model="yuan">
				</view>
				<view class="zhuce_list">

					<input :type="type1" value="" placeholder="新密码" @input="mimashu" />
					<image :src="yan1_zhuangtai" mode="" @click="chakan(1)" :class="['yanjing',type1=='text'?'kai':'guan']"></image>
				</view>
				<view class="zhuce_list">

					<input :type="type2" value="" placeholder="确认密码" @input="agamimashu" />
					<image :src="yan2_zhuangtai" mode="" @click="chakan(2)" :class="['yanjing',type2=='text'?'kai':'guan']"></image>
				</view>



				<button type="" class="zhuce bai_30" @click="xiugai">确认修改</button>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				yuan: '',
				mima: '',
				agamima: '',
				type1: 'password',
				type2: 'password',
				yan1_zhuangtai:'../../static/lsimg/yanguan.png',
				yan2_zhuangtai:'../../static/lsimg/yanguan.png'
			}
		},

onLoad() {
	// 获取用户信息
	this.$http
		.post({
			url: '/lawyer/login/islogin'
		})
		.then(res => {
			this.user = res.data.user;
			
		});
},

		methods: {
		
			navigateBack() {
				uni.navigateBack()
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
	
			xiugai() {
				
				
					if (this.yuan == '' || this.mima == '' || this.agamima == '' ) {
						uni.showToast({
							title: '请填写完整',
							duration: 2000,
							icon: "none"
						});
						return false
					} else if (this.mima != this.agamima) {
						uni.showToast({
							title: '两次密码不一致',
							duration: 2000,
							icon: "none"
						});
						return false
					}
					
					this.$http
						.post({
							url: '/lawyer/user/zx_mima',
							data:{
								oldpassword:this.yuan,
								password1:this.mima,
								password2:this.agamima
							}
						})
						.then(res => {
							if(res.code==0){
								uni.showToast({
									title: '修改成功',
									duration: 2000
								});
								
								uni.reLaunch({
									url:'login'
								})
							}
							
						});
					
					
					console.log(this.yuan, this.mima, this.agamima)

				


				
			},
			mimashu(e) {
				this.mima = e.target.value
			},
			agamimashu(e) {
				this.agamima = e.target.value
			},
			change(data) {
				console.log(data)
				this.dizhi = data.data.join('')
				console.log(data.data.join(''))
			}

		}
	}
</script>

<style>
	.zhuce_tab_center {
		display: flex;
	}

	.zhuce_tab_item {
		line-height: 63rpx;
		text-align: center;
		width: 170rpx;
		height: 63rpx;
	}

	.zhuce_tab_item_active {
		background-color: #f43a51;
		border-radius: 31rpx;
		color: #FFFFFF;
	}

	.zhuce_tab {
		display: flex;
	}

	.uni-input {
		font-size: 28rpx !important;
	}

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
		margin-right: 0 !important;
	}
.kai{
	width: 29rpx !important;
		height: 19rpx !important;
}
.guan{
		width: 28rpx !important;
		height: 14rpx !important;
}
	.zhuce_list input {
		width: 85% !important;
	}

	.diqu_icon {
		width: 27rpx !important;
		height: 28rpx !important;
	}

	.yanzheng_icon {
		width: 29rpx !important;
		height: 26rpx !important;
	}

	.yaoqing_icon {
		width: 31rpx !important;
		height: 29rpx !important;
	}

	.zhuce_list_yanzheng {
		justify-content: space-between;
		display: flex;
		align-items: center;
	}

	button {
		margin: 0;
		padding: 0;
	}

	.aaaaaa {
		min-width: 500rpx;
		display: inline-block;
	}

	.xieyi {
		margin: 76rpx 0 50rpx 0;
		text-align: center;
	}

	.zhuce {
		height: 88rpx;
		background-color: #f43a51;
		border-radius: 44rpx;
		line-height: 88rpx;
		margin-top: 500rpx;
	}

	.zhuce_tishi {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40rpx;
	}

	.xuandizu_icon {
		width: 16rpx !important;
		height: 9rpx !important;
	}

	.border {
		border: 1px solid #999999 !important;
	}

	.dis_sp {
		justify-content: space-between;
	}
</style>
