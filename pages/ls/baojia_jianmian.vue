<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">当面咨询</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="jianmian_top hei_28" style="border-bottom: 20rpx solid #E8E8E8;">
				
					<text>当面咨询价格</text>
					<view class="jianmian_top_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="price"/>元
					</view>
			</view>
		    <view class="jianmian_bottom hei_28">
				<view class="" style="line-height:130rpx ;">
					预约咨询见面日期(多选)
				</view>
				<view  class="qian_26 jiamian_riqi" >
					<view  :class="[' jiamian_riqi_item',riqi_index==1?'riqi_active':'']" @click="xuan_riqi(1)">
						今天
					</view>
					<view :class="[' jiamian_riqi_item',riqi_index==2?'riqi_active':'']" @click="xuan_riqi(2)">
						明天
					</view>
					<view :class="[' jiamian_riqi_item',riqi_index==3?'riqi_active':'']" @click="xuan_riqi(3)">
						<picker mode='date' @change="time_change">
						<image src="@/static/lsimg/rili.png" mode=""></image>{{time==''?'自定义':time}}
						</picker>
					</view>
				</view>
				<view class="" style="line-height:114rpx ;">
					预约咨询见面时间段(多选)
				</view>
				<view class="jiamian_riqi qian_26 ">
					<view   :class="[' jiamian_riqi_item_time',time_index==1?'riqi_active':'']" @click="xuan_time(1)">
						上午9:00-12:00
					</view>
					<view :class="[' jiamian_riqi_item_time',time_index==2?'riqi_active':'']" @click="xuan_time(2)">
						下午13:00-18:00
					</view>
			
				</view>
				<view class="jianmian_dizhi hei_28" >
					<text>预约咨询见面地址</text>
					<input type="text" value="" placeholder="请填写" class="hei_28" v-model="dizhi"/>
				</view>
		    </view>
			
			<view class="tianjie_btn">
				<button type="" class="bai_30" @click="save">立即添加</button>
			</view>
		
	</view>		
	</view>
</template>

<script>
export default {
	data() {
		return {
              time:'',
			  riqi_index:1,
			  time_index:1,
			  price:'',
			  dizhi:'',
			  baojia:''
		};
	},
	created() {},
	onLoad(option) {
		this.$http
			.post({
				url: '/mlawyerapi/lawyer/baojia'
			})
			.then(res => {
				this.baojia=res.data.lawyer
				this.price=res.data.lawyer.jianmian
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		time_change(data) {
			this.time = data.detail.value
		
		},
        xuan_riqi(index){
			this.riqi_index=index
		},
		xuan_time(index){
			this.time_index=index
		},
		save() {
			if (this.price == '') {
				uni.showToast({
					title: '请填写金额',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} 

			this.$http
				.post({
					url: '/mlawyerapi/lawyer/upbaojia',
					data: {
						state: 1,
						jianmian: this.price
					}
				})
				.then(res => {
					uni.showToast({
						title: '修改成功',
						duration: 2000,
						icon: 'none'
					});
					setTimeout(function(){
					uni.navigateBack()
								},2000)
				});



			console.log(this.price, this.dizhi);
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.jianmian_top {
	padding: 0 30rpx;
	display: flex;
	justify-content: space-between;
	height: 116rpx;
	
	align-items: center;
}
.jianmian_top_right{
	display: flex;
	align-items: center;
}
.jianmian_top_right input{
	text-align: right;
	margin-right: 4rpx;
}
.jianmian_bottom{
	padding: 0 30rpx;
	border-bottom: 20rpx solid #e8e8e8;
}
.jiamian_riqi_item{
		width: 210rpx;
		height: 56rpx;
		background-color: #f7f7f7;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
}
.jiamian_riqi_item image{
	width: 24rpx;
		height: 24rpx;
		margin-right: 7rpx;
}
.jiamian_riqi{
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #EEEEEE;
	padding-bottom: 40rpx;
}
.jiamian_riqi_item_time{
	width: 335rpx;
		height: 56rpx;
		background-color: #f7f7f7;
		border-radius: 10rpx;
		text-align: center;
		line-height: 56rpx;
}
.jianmian_dizhi{
	height: 88rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
}
.jianmian_dizhi input{
	text-align: right;
}
.tianjie_btn{
	padding: 0 30rpx;
	margin: 400rpx 0 50rpx;
	}
	.tianjie_btn button{
			height: 88rpx;
			background-color: #f43a51;
			border-radius: 44rpx;
	}
	.riqi_active{
		background-color: #f43a51;
		color: #FFFFFF;
	}
</style>
