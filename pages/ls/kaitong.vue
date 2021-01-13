<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">开通站点</view>
			<view class=" head_right hei_30_bold" >
				
			</view>
		</view>

		<view class="zi_body shiming_body">

			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					域名
				</view>
				<input type="text" value="" placeholder="请输入域名" class="hei_26" v-model="yuming" :disabled="is_dis"/>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					备案号
				</view>
				<input type="text" value="" placeholder="请输入备案号" class="hei_26" v-model="beianhao" :disabled="is_dis"/>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					姓名
				</view>
				<input type="text" value="" placeholder="请输入姓名" class="hei_26" v-model="xingming" :disabled="is_dis"/>
			</view>
		<view class="shiming_list hei_28">
			<view class="shiming_list_left">
				联系电话
			</view>
			<input type="text" value="" placeholder="请输入联系电话" class="hei_26" v-model="dianhua" :disabled="is_dis" />
		</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					身份证号
				</view>
				<input type="text" value="" placeholder="请输入身份证号码" class="hei_26" v-model="shenfenzheng" :disabled="is_dis"/>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					联系QQ
				</view>
				<input type="text" value="" placeholder="请输入QQ" class="hei_26" v-model="qq" :disabled="is_dis" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					联系微信
				</view>
				<input type="text" value="" placeholder="请输入微信" class="hei_26" v-model="weixin" :disabled="is_dis"/>
			</view>
			<view class="jianjie hei_28">
				申请优势
				<textarea value="" placeholder="清输入要申请的理由" class="jianjie_txt" v-model="youshi_txt" :disabled="is_dis" maxlength="5000"/>
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
				xingming: '',
				dianhua: '',
				shenfenzheng: '',
				qq: '',
				weixin: '',
				youshi_txt:'',
				is_dis:false,
				bt_txt:'提交申请'
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
        
		   // this.is_dis=true,
		   // this.bt_txt='此网站已开通'
		   

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
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
				}else if (this.xingming == '') {
					uni.showToast({
						title: '请填写姓名',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.dianhua == '') {
					uni.showToast({
						title: '请填写联系电话',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.shenfenzheng == '') {
					uni.showToast({
						title: '请填写身份证号',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.qq == '') {
					uni.showToast({
						title: '请填写联系QQ',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.weixin == '') {
					uni.showToast({
						title: '请填写联系微信',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.youshi_txt == '') {
					uni.showToast({
						title: '请填写申请优势',
						duration: 2000,
						icon: "none"
					});
					return false
				}


				console.log(this.yuming, this.beianhao, this.xingming, this.shenfenzheng, this.qq,this.weixin,this.youshi_txt)
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
</style>
