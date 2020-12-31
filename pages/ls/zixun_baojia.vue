<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">咨询报价</view>
			<view class=" head_right hei_30_bold" >
				
			</view>
		</view>

		<view class="zi_body ">

		<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
			<view class="baojia_list_top hei_28">
				在线咨询
			</view>
			<view class="baojia_list_bottom hei_28">
				<input type="number" value="" placeholder="请填写" class="hei_28" v-model="zaixian"/> <text>元/小时</text>
			</view>
		</view>
		<view class="baojia_list" style="border-bottom: 2rpx solid #E8E8E8;">
			<view class="baojia_list_top hei_28">
				电话咨询
			</view>
			<view class="baojia_list_bottom hei_28">
				<input type="number" value="" placeholder="请填写" class="hei_28" v-model="dianhua"/> <text>元/分钟</text>
			</view>
		</view>
<view class="baocun_btn">
<button type="" class="bai_30" @click="save">立即添加</button>
	
</view>			
		
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {
				zaixian: '',
				dianhua:'',
			}
		},
		created() {

		},
		onLoad(option) {
              this.$http.post({
						url: '/mlawyerapi/lawyer/baojia',
					})
					.then(res => {
						this.zaixian=res.data.lawyer.chatprice
						this.dianhua=res.data.lawyer.phoneprice
					});

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},

			save() {

				if (this.zaixian == '') {
					uni.showToast({
						title: '请填写在线咨询费用',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.dianhua == '') {
					uni.showToast({
						title: '请填写电话咨询费用',
						duration: 2000,
						icon: "none"
					});
					return false
				} 

           this.$http.post({
						url: '/lawyer/lawyer/zx_baojia',
						data:{
							zaixian:this.zaixian,
							dianhua:this.dianhua
						}
					})
					.then(res => {
						uni.showToast({
							title:'修改成功',
							duration: 2000,
							icon: "none"
						});
					});

				console.log(this.zaixian, this.dianhua)
			}

		}
	}
</script>

<style>
	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}
.baojia_list{
	padding: 26rpx 30rpx;
}
.baojia_list_bottom{
	display: flex;
	justify-content: space-between;
}
.baojia_list_bottom input{
	width: 500rpx;
}

	.shiming_list input {
		width: 500rpx;
		text-align: right;

	}

	.shiming_list_left {
		width: 170rpx;
	}
.baojia_list_top{
	margin-bottom: 50rpx;
}
.baocun_btn{
	padding: 0 30rpx;
	margin-top: 278rpx;
}
.baocun_btn button{
		height: 88rpx;
		background-color: #f43a51;
		border-radius: 44rpx;
		line-height: 88rpx;
		
}



</style>
