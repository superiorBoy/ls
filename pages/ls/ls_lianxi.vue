<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">联系方式</view>
			<view class=" head_right hei_30_bold" >
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body shiming_body">

		
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					联系电话
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="dianhua" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					电子邮箱
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="youxiang" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					微信
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="weixin" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					联系地址
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="dizhi" />
			</view>

		
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {
				dianhua: '',
				youxiang:'',
				weixin:'',
				dizhi:''
				
				
			}
		},
		created() {

		},
		onLoad(option) {
         this.$http
			 .post({
			 	url: '/mlawyerapi/lawyer/lawyerinfo',
			 	data:{
			 		state:3
			 	}
			 })
			 .then(res => {	
				this.dianhua=res.data.lawyer.mobile
                this.youxiang=res.data.lawyer.email
				this.weixin=res.data.lawyer.weixin
				this.dizhi=res.data.lawyer.address
			 });

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},

			save() {

				if (this.dianhua == '') {
					uni.showToast({
						title: '请填写联系电话',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.youxiang == '') {
					uni.showToast({
						title: '请填写电子邮箱',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.weixin == '') {
					uni.showToast({
						title: '请填写微信',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.dizhi == '') {
					uni.showToast({
						title: '请填写联系地址',
						duration: 2000,
						icon: "none"
					});
					return false
				} 
            this.$http
			 .post({
			 	url: '/lawyer/user/zx_geren',
			 	data:{
			 		state:3,
					dianhua:this.dianhua,
					weixin:this.weixin,
					youxiang:this.youxiang,
					dizhi:this.dizhi
			 	}
			 })
			 .then(res => {	
			        if(res.code==0){
						uni.showToast({
							title: '修改成功',
							duration: 2000
						});
					}
			 });
				console.log(this.dianhua, this.youxiang, this.weixin, this.dizhi)
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






</style>
