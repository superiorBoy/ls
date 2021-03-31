<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/lsimg/bai_fanhui.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center bai_38_bold">我的金豆</view>
			<view class=" head_right bai_30_bold"><navigator url="jindou">记录</navigator></view>
		</view>

		<view class="zi_body ">
			<view class="jindou_top">
				<view class="jindou_ka">
					<image :src="img_url+user.photourl" mode=""></image>
					<view class="hei_30_bold">{{user.nickname}}律师</view>
				</view>

				<view class="jindou_top_list">
					<view class="jindou_top_item">
						<view class="jindou_top_num">500</view>
						<view class="jindou_top_title">
							<image src="../../static/lsimg/douzi.png" mode="" style="width: 24rpx;height: 22rpx;"></image>
							我的金豆
						</view>
					</view>
					<view class="jindou_top_item">
						<view class="jindou_top_num">100</view>
						<view class="jindou_top_title">
							<image src="../../static/lsimg/renqi.png" mode="" style="width: 22rpx;height: 24rpx;"></image>
							人气值
						</view>
					</view>
				</view>
			</view>
			
			<view class="jindou_body">
				
			<view class="jindou_title hei_44_bold">
				<text></text>获得金豆途径
			</view>
			<view class="tujing_list">
				<view class="tujing_item">
					<image src="../../static/lsimg/tujing1.png" mode=""></image>
					<view class="hei_30">
						注册会员
					</view>
				</view>
				<view class="tujing_item">
					<image src="../../static/lsimg/tujing2.png" mode=""></image>
					<view class="hei_30">
						提问采纳
					</view>
				</view>
				<view class="tujing_item">
					<image src="../../static/lsimg/tujing3.png" mode=""></image>
					<view class="hei_30">
						回复前三
					</view>
				</view>
				<view class="tujing_item">
					<image src="../../static/lsimg/tujing4.png" mode=""></image>
					<view class="hei_30">
						用户下单
					</view>
				</view>
				<view class="tujing_item">
					<image src="../../static/lsimg/tujing5.png" mode=""></image>
					<view class="hei_30">
						邀请律师
					</view>
				</view>
				<view class="tujing_item">
					<image src="../../static/lsimg/tujing6.png" mode=""></image>
					<view class="hei_30">
						充值VIP
					</view>
				</view>
			</view>
			<view class="jindou_title hei_44_bold">
				<text></text>消耗金豆
			</view>
			<view class="xiaohao hei_30">
				<image src="../../static/lsimg/xiaohao.png" mode=""></image>每匹配一次消耗10金豆
			</view>
			<view class="jindou_title hei_44_bold">
				<text></text>任务中心
			</view>
			<view class="renwu">
				<view class="renwu_item">
				<view class="renwu_item_left">
					<image src="../../static/lsimg/renwu1.png" mode="" style="width: 45rpx;height: 50rpx;"></image>
					<view class="renwu_item_left_right">
						<view class="hei_30">
							注册会员赠送50金豆
						</view>
						<view class="qian_24">
							每次分享注册后获得50金豆，上不封顶。
						</view>
					</view>	
				</view>	
				<navigator url="" class="renwu_item_right bai_26">去分享</navigator>
					
				
				</view>
				<view class="renwu_item">
				<view class="renwu_item_left">
					<image src="../../static/lsimg/renwu2.png" mode="" style="width: 45rpx;height: 46rpx;"></image>
					<view class="renwu_item_left_right">
						<view class="hei_30">
							提问获得采纳获得3金豆
						</view>
						<view class="qian_24">
							每次解答，用户采纳后获得3金豆
						</view>
					</view>	
				</view>	
				<navigator url="tiwen_guanli" class="renwu_item_right bai_26">去解答</navigator>
					
				
				</view>
				<view class="renwu_item">
				<view class="renwu_item_left">
					<image src="../../static/lsimg/renwu3.png" mode="" style="width: 46rpx;height: 34rpx;"></image>
					<view class="renwu_item_left_right">
						<view class="hei_30">
							提问回复前三获得1金豆

						</view>
						<view class="qian_24">
							解答提问，内容排列前三获得1金豆
						</view>
					</view>	
				</view>	
				<navigator url="tiwen_guanli" class="renwu_item_right bai_26">去查看</navigator>
					
				
				</view>
				<view class="renwu_item">
				<view class="renwu_item_left">
					<image src="../../static/lsimg/renwu4.png" mode="" style="width: 45rpx;height: 50rpx;"></image>
					<view class="renwu_item_left_right">
						<view class="hei_30">
							提问联系TA，TA下单得10金豆
						</view>
						<view class="qian_24">
							通过提问联系用户，用户下单后可获得
						</view>
					</view>	
				</view>	
				<navigator url="tiwen_guanli" class="renwu_item_right bai_26">去联系</navigator>
					
				
				</view>
				<view class="renwu_item">
				<view class="renwu_item_left">
					<image src="../../static/lsimg/renwu5.png" mode="" style="width: 45rpx;height: 41rpx;"></image>
					<view class="renwu_item_left_right">
						<view class="hei_30">
							邀请律师奖励50金豆
						</view>
						<view class="qian_24">
							邀请新人好友认证律师获得金豆
						</view>
					</view>	
				</view>	
				<navigator url="yaoqing" class="renwu_item_right bai_26">去邀请</navigator>
					
				
				</view>
				<view class="renwu_item">
				<view class="renwu_item_left">
					<image src="../../static/lsimg/renwu6.png" mode="" style="width: 47rpx;height: 43rpx;"></image>
					<view class="renwu_item_left_right">
						<view class="hei_30">
							充值VIP最多获得10800金豆
						</view>
						<view class="qian_24">
							充值VIP消费赠送大额金豆
						</view>
					</view>	
				</view>	
				<navigator url="vip" class="renwu_item_right bai_26">去充值</navigator>
					
				
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
			user: ''
		};
	},
	created() {},
	onLoad(option) {
		// 获取用户信息
		this.$http
			.post({
				url: '/mlawyerapi/user/getlawyer'
			})
			.then(res => {
				this.user = res.data.user;
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		}
	},
	filters: {
		timeStamp: function(value) {
			if (value == null) {
				return 'null';
			}
			var i = (value + '').length;
			while (i++ < 13) value = value + '0';
			value = Number(value);
			var date = new Date(value);
			//date.setTime(value);
			var month = date.getMonth() + 1;
			var hours = date.getHours();
			if (hours < 10) hours = '0' + hours;
			var minutes = date.getMinutes();
			if (minutes < 10) minutes = '0' + minutes;
			var time = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + hours + ':' + minutes;
			return time;
		}
	}
};
</script>

<style>
.head {
	background: url(../../static/lsimg/jindou_top_bg.png) no-repeat;
	background-size: 100% 100%;
	/* border-bottom: 2rpx solid #232332; */
}
page{
	background-color:#f6f4ec ;
}
.zi_body {
	position: relative;
	top: -2rpx;
}

.jindou_top {
	background: url(../../static/lsimg/jin_top_bg.png) no-repeat;
	background-size: 100% 100%;
	height: 370rpx;
}
.jindou_ka {
	margin: 0 auto;
	padding: 16rpx 0 0;
	width: 500rpx;
	text-align: center;
}
.jindou_ka image {
	width: 111rpx;
	height: 111rpx;
	border-radius: 100%;
	background-color: #dcbb70;
	border: solid 3rpx #dcbb70;
	vertical-align: bottom;
	margin-bottom: 10rpx;
}
.jindou_top_list {
	width: 500rpx;
	display: flex;
	align-items: center;
	margin: 0 auto;
}
.jindou_top_item {
	text-align: center;
	width: 50%;
}
.jindou_top_title {
	font-size: 26rpx;
	color: #a18861;
}
.jindou_top_title image{
	margin-right: 6rpx;
}
.jindou_top_num {
	font-size: 40rpx;
	color: #7b6c4d;
	font-weight: bold;
	margin-bottom: 10rpx;
	margin-top: 30rpx;
}
.jindou_title{
	margin: 40rpx 0 30rpx;
	display: flex;
	align-items: center;
}
.jindou_title text{
		width: 10rpx;
		height: 46rpx;
		background-color: #f5d693;
		box-shadow: 5rpx 0rpx 0rpx 0rpx 
			#fff6d3;
			display: inline-block;
			margin-right: 30rpx;
}
.jindou_body{
	padding: 0 30rpx 30rpx;
}
.tujing_list{
	display: flex;
	align-items: center;
	flex-wrap: wrap;
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 40rpx 0 0;
}
.tujing_item{
	text-align: center;
	width: 33.33%;
	margin-bottom: 40rpx;
}
.tujing_item image{
	width: 101rpx;
		height: 101rpx;
		vertical-align: bottom;
		margin-bottom: 10rpx;
		
}
.xiaohao{
		height: 154rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		padding-left: 47rpx;
}
.xiaohao image{
		width: 101rpx;
		height: 101rpx;
		margin-right: 25rpx;
}
.renwu{
	background-color: #FFFFFF;
	border-radius: 20rpx;
}
.renwu_item{
	height: 162rpx;
	border-bottom: 2rpx solid #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20rpx 0 18rpx;
}
.renwu_item_right{
		width: 141rpx;
		height: 61rpx;
		background-image: linear-gradient(252deg, 
			#e4c489 0%, 
			#e7c18f 100%), 
		linear-gradient(-89deg, 
			#ff8400 0%, 
			#ffba00 100%);
		background-blend-mode: normal, 
			normal;
		border-radius: 30rpx;
		text-align: center;
		line-height: 60rpx;
}
.renwu_item_left{
	display: flex;
	align-items: flex-start;
}
.renwu_item_left_right{
	margin-left: 20rpx;
}
</style>
