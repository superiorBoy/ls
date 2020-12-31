<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">视频详情</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class="zi_body ">
			<view class="zhishi_xq">
				<view class="xq_title hei_30">并处没收个人全部财产的规定是什么？</view>
				<view class="xq_top qian_22">
					<text>2020.06.12</text>
					<text>#合同纠纷</text>
					<text>895457次观看</text>
				</view>
			</view>
			<view class="bofang">
				<video
					id="myVideo"
					src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
					@error="videoErrorCallback"
					enable-danmu
					danmu-btn
					controls
					autoplay
					:poster="poster"
					:autoplay="zidong"
					show-mute-btn="true"
					object-fit="fill"
					enable-play-gesture="true"
				></video>
			</view>

			<view class="lvshi">
				<view class="lvshi_left">
					<image src="@/static/img/tx.png" mode=""></image>
					<view class="lvshi_left_top">
						<view class="lvshi_left_top_name">
							<text class="hei_26">罗薇</text>
							<text class="qian_26">专职律师</text>
						</view>
						<view class="hui_26">北京博儒律师事务所</view>
					</view>
				</view>
				<button type="" class="bai_24" @click="zixun">咨询TA</button>
			</view>

			<view class="shipin_bottom">
				<view class="hei_30_bold shipin_bottom_title">视频内容：</view>
				<view class="hei_26">
					交首付一般是在开发商取得了五证以后开始正式销售时进行的。开盘的意思就是房子开始卖了，开发商也拿到了项目预售许可证，在具备销售手续的情况下进行的房产买卖，一般在房子开盘的时候就可以签订商品房买卖合同，然后购房者交首付。但是也不排除购房者在开盘当天没有带齐足够的首付的情况，那么购房者就会和售楼部签下定房协议，然后缴纳定金，至于定金缴纳多少，各个城市或者楼盘有所不同。一般在选房后交了定金后的15天内签好购房合同，如果不再签订购房合同，定金是不退的。
				</view>
				<view class="hei_26">
					按揭贷款是由开发企业提供担保，用购买的期房抵押所申请的贷款，而且我们的贷款直接转给开发商。购房者新购房的产权办出后，直接凭产权证及契税完税凭证申请贷款。法律依据：
				</view>
				<view class="hei_26">《中华人民共和国城市房地产管理法》第三十二条 房地产转让、抵押时，房屋的所有权和该房屋占用范围内的土地使用权同时转让、抵押。</view>
				<view class="hei_26">《中华人民共和国城市房地产管理法》第三十三条 基准地价、标定地价和各类房屋的重置价格应当定期确定并公布。具体办法由国务院规定。</view>
				<view class="hei_26">《中华人民共和国城市房地产管理法》第三十四条 国家实行房地产价格评估制度。</view>
			</view>

			<view class="banquan qian_22">版权声明：小虎律师网对视频享有独家版权，未经许可不得以任何形式 复制、转载。</view>

			<view class="dianzan">
				<view class="dianzan_top">
					<image :src="yizan ? '../../static/img/shipin_yizan.png' : '../../static/img/shipin_dianzan.png'" mode="" @click="go_dianzan"></image>
				</view>
				<view class="qian_26">点个赞吧</view>
			</view>

			<view class="shipin_dibu">
				<view class="shipin_dibu_left">
					<view class="shipin_dibu_item " @click="go_index">
						<image src="@/static/img/shipin_shouye.png" mode="" style="width: 28rpx;height: 26rpx;"></image>
						<view class="hui_26">首页</view>
					</view>
					<view class="shipin_dibu_item " @click="go_my">
						<image src="@/static/img/shipin_my.png" mode="" style="width: 26rpx;height: 26rpx;"></image>
						<view class="hui_26">我的</view>
					</view>
					<view class="shipin_dibu_item ">
						<image src="@/static/img/share.png" mode="" style="width: 25rpx;height: 24rpx;"></image>
						<view class="hui_26">分享</view>
					</view>
				</view>
				<button type="" class="bai_32">
					<image src="@/static/img/zaixian_bai.png" mode=""></image>
					立即咨询
				</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			poster: 'http://q.qlogo.cn/qqapp/101359334/E688B2A3C64B25B76EA94561A8B99FBC/100',
			zidong: true,
			yizan: false
		};
	},
	created() {},
	onLoad(option) {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		videoErrorCallback: function(e) {
			uni.showModal({
				content: e.target.errMsg || '视频播放失败',
				showCancel: false
			});
		},
		go_dianzan() {
			this.yizan = true;
		},
		go_index() {
			uni.switchTab({
				url: 'index'
			});
		},
		go_my() {
			uni.switchTab({
				url: 'my'
			});
		},
		zixun(){
			
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #f7f7f7;
}
.zhishi_xq {
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.xq_title {
	margin: 15rpx 0;
}
.xq_top {
	display: flex;
	align-items: center;
}
.xq_top text {
	position: relative;
	margin-right: 36rpx;
}
.xq_top text::before {
	content: '';
	display: inline-block;
	width: 2rpx;
	height: 14rpx;
	background-color: #eeeeee;
	position: absolute;
	right: -18rpx;
	top: 10rpx;
}
.xq_top text:last-child::before {
	content: none;
}
.bofang {
	height: 390rpx;

	border-radius: 10rpx;
	padding: 0 30rpx;
	margin: 20rpx 0 0;
}
.bofang video {
	width: 100%;
	height: 100%;
}
.lvshi_left image {
	width: 90rpx;
	height: 90rpx;
	margin-right: 19rpx;
}
.lvshi_left_top_name {
	margin-bottom: 8rpx;
}
.lvshi_left_top_name text {
	margin-right: 15rpx;
}
.lvshi_left {
	display: flex;
}
.lvshi {
	padding: 20rpx 30rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2rpx solid #f7f7f7;
}
button {
	margin: 0;
	padding: 0;
}
.lvshi button {
	width: 129rpx;
	height: 44rpx;
	background-color: #0eb77e;
	border-radius: 22rpx;
	line-height: 44rpx;
}
.shipin_bottom {
	padding: 0 30rpx;
	line-height: 44rpx;
	margin-bottom: 20rpx;
}
.shipin_bottom_title {
	line-height: 80rpx;
}
.banquan {
	padding: 20rpx 30rpx;
	border-top: 2rpx solid #f7f7f7;
	line-height: 40rpx;
}
.dianzan {
	text-align: center;
	margin: 60rpx 0 160rpx;
}
.dianzan_top image {
	width: 70rpx;
	height: 70rpx;
}

.shipin_dibu {
	position: fixed;
	height: 100rpx;
	bottom: 00;
	width: 100%;
	padding: 0 30rpx;
	display: flex;
	box-sizing: border-box;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(0, 0, 0, 0.13);
}
.shipin_dibu_left {
	display: flex;
	width: 50%;
	align-items: center;
}
.shipin_dibu button {
	width: 50%;
	height: 100%;
	background-color: #0eb77e;
	border-radius: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
.shipin_dibu button image {
	width: 30rpx;
	height: 30rpx;
	margin-right: 20rpx;
}
.shipin_dibu_item {
	width: 33.33%;
	text-align: center;
}
.shipin_dibu_item image {
	margin-bottom: 6rpx;
}
</style>
