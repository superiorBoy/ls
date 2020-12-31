<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">接单详情</view>
			<view class=" head_right hei_30_bold" >
				
			</view>
		</view>

		<view class="zi_body shiming_body">

		
			<view class="jiedan_top">
				<image src="@/static/lsimg/moren_tx.png" mode="" class="jiedan_tx"></image>
				<view class="jiedan_top_right">
					<view class="hei_30">
						张晓霞女士
					</view>
					<view class="hui_26 dianhua">
						151****1010  <text class="kejian bai_26">接洽后可见</text>
					</view>
					<view class="jiedan_top_bot qian_22">
						<view class="dizhi">
							<image src="@/static/img/dizhi.png" mode=""></image>陕西-西安
						</view>
						<view class="time">
							<image src="@/static/lsimg/shijian_icon.png" mode=""></image>2020-08-12 09:20:46
						</view>
					</view>
				</view>
			</view>
			
			<view class="anjian_xinxi">
				<view class="anjian_xinxi_title hei_30_bold">
					案件关键信息
				</view>
				<view class="guanjian hui_26">
					案件关键词：<view class=" hei_26 guanjian_r">
						债务债权纠纷
					</view>
				</view>
				<view class="guanjian hui_26">
					<text class="xq">案情详情：</text>
					<view class=" hei_26 guanjian_r">
						共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?
						共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?
						共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?
						共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?
						共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?
						共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?
						共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?
						共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?共计7万多,现在不还款,我已整理了借款的明细,想走法律程序告他,具体需要怎么做?
					</view>
				</view>
			</view>
			
			
	

				<view class="jiedan_zhanwei"></view>
			<view class="baocun_btn">
				<view class="qian_22 jiedan_tishi">
					<image src="@/static/lsimg/xiaolian.png" mode=""></image><view class="suoxiao">您是非认证律师,通过网站认证以后才能接洽本案哦~<navigator url="ls_renzheng">立即去认证</navigator></view>
				</view>
				<view class="baocun_btn_bott">
			<button type="" class="bai_30 baocun_b" @click="save">确认接单</button>
				</view>	
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
           
		   // this.is_dis=true,
		   // this.bt_txt='此网站已开通'
		   

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},


			save() {

			

				
			}

		}
	}
</script>

<style>
	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}

	.jiedan_tx{
			width: 87rpx;
			height: 87rpx;
			border-radius: 100%;
			margin-right: 17rpx;
	}
	.jiedan_top{
		padding:  30rpx; 
		display: flex;
		border-bottom: 2rpx solid #E8E8E8;
	}
	.dizhi image{
		width: 18rpx;
			height: 20rpx;
			margin-right: 10rpx;
	}
	.dizhi{
		margin-right: 46rpx;
	}
	.time image{
			width: 21rpx;
			height: 21rpx;
			margin-right: 10rpx;
	}
	.dianhua{
		margin: 14rpx 0;
	}
	.jiedan_top_bot{
		display: flex;
	}
	.kejian{
		display: inline-block;
		width: 156rpx;
			height: 44rpx;
			background-color: #f43a51;
			border-radius: 22rpx;
			line-height: 44rpx;
			text-align: center;
			margin-left: 17rpx;
	}
	.anjian_xinxi{
		padding: 0 30rpx 30rpx;
		border-bottom: 2rpx solid #E8E8E8;
	}
	.anjian_xinxi_title{
		padding-left: 16rpx;
		margin: 23rpx 0;
		position: relative;
	}
	.anjian_xinxi_title::before{
		content: '';
		position: absolute;
		width: 4rpx;
			height: 29rpx;
			background-color: #0eb77e;
			left: 0rpx;
			top: 8rpx;
		
	}
	.guanjian{
		display: flex;
		margin-bottom: 10rpx;
		line-height: 40rpx;
	}
	.guanjian_r{
		max-width: 520rpx
	}
	.xq{
		margin-left: 26rpx;
	}
	.jiedan_tishi{
		margin-bottom: 14rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.jiedan_tishi .suoxiao{
	display: flex;
     -webkit-text-size-adjust:none;
   -webkit-transform-origin-x: 0;
             -webkit-transform: scale(0.9);
	}
	.jiedan_tishi image{
		width: 24rpx;
			height: 24rpx;
			margin-right: 4rpx;
			vertical-align: middle;
	}
	.jiedan_zhanwei{
		height:200rpx;
	}
	.baocun_btn{
		padding: 10rpx 0rpx 60rpx 30rpx;
		margin-top: 90rpx;
		position: fixed;
		bottom:0rpx;
		width: 100%;
		box-sizing: border-box;
		background-color: #FFFFFF;
		border-top: 2rpx solid #E8E8E8;
	}
	.baocun_b {
			height: 88rpx;
			background-color: #0eb77e;
			border-radius: 44rpx;
			line-height: 88rpx;
			
	}
	.baocun_btn_bott{
		padding-right: 30rpx;
	}
	.hui{
		background-color: #999999;
		color: #FFFFFF;
			border-radius: 44px;
	}
</style>
