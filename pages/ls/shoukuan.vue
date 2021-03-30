<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/img/close.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">发起收款</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
		<view class="shoukuan_body">
			<view class="shoukuan_list">
				<text class="hei_34">咨询项目</text>
				<input type="text" value=""  placeholder="哪种服务项目" class="hei_34" v-model="xiangmu"/>
			</view>
			<view class="xaingmu_title qian_22">
				<image src="../../static/lsimg/tishi.png" mode=""></image>咨询项目标题不超过6个字
			</view>
		<!-- 	<view class="shoukuan_list shijian">
				<text>咨询时间</text>
				<view class="shoukuan_right hei_34">
				<input type="text" value=""  placeholder="多长时间" class="hei_34" v-model="shijian"/>
				<text>分钟</text>		</view>
			</view> -->
			<view class="shoukuan_list">
				<text class="hei_34">发起金额</text>
				<view class="shoukuan_right">
					<input type="number" value=""placeholder="0.00" v-model="jine" class="hei_34" /> <text>元</text>
				</view>
			</view>
			
			
			<button type="" class="bai_38" @click="fasong">发起收款</button>
			
			
			<view class="shoufei_bottoom qian_28">
				<view class="">
					律师发起咨询收款
				</view>
				<view class="">
				等待用户成功支付后为用户解答
								</view>
			</view>
		</view>
		
		
		
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			jine:'',
			shijian:'',
			xiangmu:'',
			userid:''
		};
	},
	created() {},
	onLoad(option) {
		this.userid=option.userid
	},
	onShow() {
		
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

	  fasong(){
		  
		  this.$http
		  	.post({
		  		url: '/mlawyerapi/consult/collection',
				data:{
					money:this.jine,
					information:this.xiangmu,
					userid:this.userid
				}
		  	})
		  	.then(res => {
		  		if(res.code==0){
					uni.showToast({
						title: '成功',
						duration: 2000
					});
					
					setTimeout(function(){
						uni.navigateBack();
					},1000)
				}
				
		  	});
		  
	  },
			
	
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
page{
	background-color:#f5f5f5 ;
}
.head_back image{
		width: 41rpx;
		height: 40rpx;
}
.shoukuan_list{
		height: 110rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 34rpx;
	}
	
	.shoukuan_body{
		padding: 26rpx 30rpx 0;
	}
	.shoukuan_list input{
		text-align: right;
	}
	
	.shoukuan_right{
		display: flex;
		align-items: center;
	}
	.shoukuan_right text{
		position: relative;
		top: -2rpx;
	}
	.shoukuan_right input{
		margin-right: 8rpx;
		height: 100%;
		line-height: 100%;
	}
	.xaingmu_title{
		margin: 10rpx 0 30rpx;
	}
	.xaingmu_title image{
			width: 21rpx;
			height: 21rpx;
			margin-right: 8rpx;
	}
	.shijian{
		margin-bottom: 40rpx;
	}
	.shoukuan_body button{
			height: 88rpx;
			background-color: #f43a51;
			border-radius: 44rpx;
			line-height: 88rpx;
			margin-top: 243rpx;
	}
	.shoufei_bottoom{
		text-align: center;
		position: fixed;
		bottom: 0;
		padding: 30rpx 0;
		width: 100%;
		box-sizing: border-box;
	}

</style>
