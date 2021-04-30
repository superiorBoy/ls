<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">联系客服</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
            <view class="kefu_banner">
            	<image src="../../static/img/kefu_banner.png" mode=""></image>
            </view>
			<view class="kefu_top">
				<view class="kefu_title hei_30_bold">
					<image src="@/static/img/hy_kefu_icon.png" mode="" style="width: 28rpx;height: 30rpx;"></image>在线客服
				</view>
				<view class="kefu_lianxi hei_26">
					<view class="kefu_lianxi_left">
						用户客服：<image src="@/static/img/kefu_zaixian.png" mode="" @click="go_chat"></image>
					</view>
					<view class="kefu_lianxi_right">
						商家客服：<image src="../../static/img/ls_kefu.png" mode=""@click="go_chat"></image>
					</view>
				</view>
				
				
				<view class="dianhua">
					
					<view class="dianhua_item">
						<image src="../../static/img/zuoji.png" mode="" style="width: 50rpx;height: 58rpx;"></image>
						<view class="dianhua_item_right">
							<view class="qian_24 dianhua_item_title">
								用户咨询热线
							</view>
							<view class="qian_24">
								{{xinxi.usercontact}}
							</view>
						</view>
						
					</view>
					<view class="dianhua_item">
						<image src="../../static/img/shouji.png" mode="" style="width: 40rpx;height: 58rpx;"></image>
						<view class="dianhua_item_right">
							<view class="qian_24 dianhua_item_title">
								商家咨询热线
							</view>
							<view class="qian_24">
								{{xinxi.shopcontact}}
							</view>
						</view>
					</view>
				</view>
				
				
				<view class="hei_26 shijian_title">
					电话客服工作时间：
				</view>
				<view class="qian_26">
					周一到周末  8:30-21:00（法定节假日除外）
				</view>
				
				<!-- <view class="weixin" v-if="xinxi.isweixinshow==1">
					<view class="weixin_hao hei_26">
						微信号：<text class="qian_26">{{xinxi.webweixin}}</text> 
					</view>
					<view class="weixin_erweima">
						<image :src="img_url+xinxi.webweixinurl" mode=""></image>
					<view class="hei_26">
						扫一扫，添加客服
						
					</view>
					</view>
				</view> -->
				
				
				
			</view>
			
			
			
			<view class="kefu_top" v-if="xinxi.isweixinshow==1">
				<view class="kefu_title hei_30_bold">
					<image src="../../static/lsimg/kefu_weixin.png" mode="widthFix" style="width: 28rpx;height: 30rpx;"></image>微信客服
				</view>
				
				<view class="weixin" >
					<view class="weixin_hao hei_26">
						微信号：<text class="qian_26">{{xinxi.webweixin}}</text> 
					</view>
					<view class="weixin_erweima">
						<image :src="img_url+xinxi.webweixinurl" mode=""></image>
					<view class="hei_26">
						扫一扫，添加客服
						
					</view>
					</view>
				</view>
				
				
				
			</view>
			<view class="kefu_bottom">
				<view class="kefu_title hei_30_bold">
					<image src="../../static/img/dingwei_icon.png" mode=""style="width: 24rpx;height: 29rpx;"></image>公司地址
				</view>
				<view class="dizhi">
					<image src="../../static/img/ditu.png" mode=""></image>
				</view>
			</view>
		
			
			
		</view>
	</view>
</template>

<script>

export default {
	onShow() {
	
	},

	data() {
		return {
			xinxi:'',
			img_url: uni.getStorageSync('img_url'),
		};
	},
	onLoad() {
		this.$http
			.post({
				url: '/mapi/index/kefu'
			})
			.then(res => {
				this.xinxi=res.data
			});
	},
	created() {},

	methods: {
	
		navigateBack() {
			uni.navigateBack();
		},
	   go_chat(){
		   uni.navigateTo({
		   	url: 'chat?lawyerid=7'
		   });
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
.kefu_banner image{
	height: 320rpx;
	width: 100%;
}
.kefu_top{
	padding: 0 30rpx;
}
.kefu_title{
	height: 120rpx;
	display: flex;
	align-items: center;
}
.kefu_title image{
	margin-right: 10rpx;
}
.kefu_lianxi{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.kefu_lianxi image{
		width: 167rpx;
		height: 56rpx;
		background-color: #eff7fc;
		border-radius: 5rpx;
		margin-left: 6rpx;
		vertical-align: middle;
}
.dianhua_item{
	display: flex;
	align-items: center;
	
}
.dianhua_item:first-child{
	margin-right: 188rpx;
}
.dianhua_item_right{
	margin-left: 16rpx;
}
.dianhua{
	display: flex;
	align-items: center;
	margin: 30rpx 0 ;
	
}
.shijian_title{
	margin-bottom: 20rpx;
}
.kefu_top{
	border-bottom: 20rpx solid #f9f9f9;
	padding-bottom: 40rpx;
}
.kefu_bottom{
	padding: 0 30rpx 50rpx;
}
.dizhi image{
		height: 427rpx;
		background-color: #1986fb;
		border-radius: 10rpx;
		width: 100%;
}
.dianhua_item_title{
	margin-bottom: 4rpx;
}
.weixin{
	
}
.weixin_erweima{
	text-align: center;
}
.weixin_erweima image{
	width: 320rpx;
		height: 320rpx;
		vertical-align: bottom;
		margin-bottom: 10px;
}
.weixin_hao{
	margin-bottom: 20px;
}
</style>
