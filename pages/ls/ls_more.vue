<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">更多信息</view>
			<view class=" head_right hei_30_bold" >
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body shiming_body">

		
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					政治派别
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="paibie" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					政治职务
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="zhiwu" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					交通工具
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="gongjv" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					兴趣爱好
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="aihao" />
			</view>

		
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {
				paibie: '',
				zhiwu:'',
				gongjv:'',
				aihao:''
				
				
			}
		},
		created() {

		},
		onLoad(option) {
   this.$http
			 .post({
			 	url: '/mlawyerapi/lawyer/lawyerinfo',
			 	data:{
			 		state:4
			 	}
			 })
			 .then(res => {	
				this.paibie=res.data.lawyer.mianmao
                this.zhiwu=res.data.lawyer.zzzhiwu
				this.gongjv=res.data.lawyer.vehicle
				this.aihao=res.data.lawyer.hobby
			 });


		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},

			save() {

				if (this.paibie == '') {
					uni.showToast({
						title: '请填写政治派别',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.zhiwu == '') {
					uni.showToast({
						title: '请填写政治职务',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.gongjv == '') {
					uni.showToast({
						title: '请填写交通工具',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.aihao == '') {
					uni.showToast({
						title: '请填写兴趣爱好',
						duration: 2000,
						icon: "none"
					});
					return false
				} 

            this.$http
			 .post({
			 	url: '/lawyer/user/zx_geren',
			 	data:{
			 		state:4,
					zhengzhi:this.paibie,
					jiaotong:this.gongjv,
					zhiwu:this.zhiwu,
					aihao:this.aihao
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
				console.log(this.paibie, this.zhiwu, this.gongjv, this.aihao)
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
