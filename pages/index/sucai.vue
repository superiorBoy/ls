<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">素材圈</view>
			<view class=" head_right"></view>
		</view>
		<view class="tab_top hui_26">
			<text v-for="(item, index) in tab_arry" :class="['', index == active ? 'sucai_active' : '']" @click="qiehuan(index)">{{ item }}</text>
		</view>
		<view class="zi_body tab_zi_body">
			<view class="jingxuan_body" v-if="active == 0">
				<view class="jingxuan_item" v-for="item in zixun_list">
					<view class="jingxuan_item_top">
						<view class="jingxuan_item_top_left">
							<image src="@/static/img/xh_tx.png" mode="" class="xh_tx"></image>
							<view class="jingxuan_item_top_r">
								<view class="hei_32 jingxuan_item_name">虎哥推荐</view>
								<view class="qian_24">{{ item.addtime | timeStamp }}</view>
							</view>
						</view>
						<view class="jing_fenxiang lv_22" @click="jingxuan_share()">
							<image src="@/static/img/yijian_fenxiang.png" mode=""></image>
							一键分享
						</view>
					</view>

					<view class="jingxuan_wenti hei_26">{{ item.information }}</view>
					<view class="jingxuan_jieda hui_24">
						<text class="bai_20">精选解答</text>
						{{ item.consult_reply.information }}
					</view>
					<view class="jingxuan_ls">
						<view class="jingxuan_ls_left">
							<view class="jingxuan_ls_left_tx">
								<image :src="img_url + item.consult_reply.photourl" mode="" class="jingxuan_ls_tx"></image>
								<image src="@/static/img/renzheng2.png" mode="" class="jingxuan_ls_ren"></image>
							</view>
							<text class="hei_26 jingxuan_ls_name">{{ item.consult_reply.nickname }}律师</text>
							<text class="hui_22">{{ item.consult_reply.mobile }}</text>
						</view>
						<text class="qian_24">{{ item.consult_reply.addtime | timeStamp }}</text>
					</view>
				</view>
			</view>

			<!-- 营销素材 -->
			<view class="jingxuan_body" v-if="active == 1">
				<view class="shangxue_list">
					<view class="shangxue_item" v-for="item in sucai_list">
						<view class="shangxue_item_left"><image :src="img_url + zhuanhuan(item.picurl)" mode=""></image></view>
						<view class="shangxue_item_right">
							<view class="shangxue_item_title hei_28_bold">{{ item.title }}</view>
							<view class="shangxue_item_time qian_24">
								<image src="@/static/img/shipin_time.png" mode=""></image>
								{{ item.addtime | timeStamp }}
							</view>
						</view>
					</view>
				</view>

				<!-- <view class="jingxuan_item" v-for="item in 5">
					<view class="jingxuan_item_top">
						<view class="jingxuan_item_top_left">
							<image src="@/static/img/xh_tx.png" mode="" class="xh_tx"></image>
							<view class="jingxuan_item_top_r">
								<view class="hei_32 jingxuan_item_name">虎哥推荐</view>
								<view class="qian_24">2020-01-05 15:20:14</view>
							</view>
						</view>
						<view class="jing_fenxiang lv_22" >
							<image src="@/static/img/yijian_fenxiang.png" mode=""></image>
							一键分享
						</view>
					</view>
					<view class="yingxiao_item_bottom">
						<view class="yingxiao_item_wen hei_28">
							<text class="bai_20_bold kuang_txt">问</text>
							死亡理赔一定非要提供火化证明吗？
						</view>
						<view class="yingxiao_item_da">
							<text class="bai_20_bold kuang_txt">答</text>
							<view class="yingxiao_item_da_item">
								<view class="yingxiao_item_da_item_top">
									<view class="yingxiao_item_da_item_t">
										<view class="yingxiao_item_da_item_tx">
											<image src="@/static/lsimg/moren_tx.png" mode="" class="yingxiao_tx"></image>
											<image src="@/static/img/renzheng2.png" mode="" class="yingxiao_ren"></image>
										</view>
										<text class="hei_26 yingxiao_item_name">樊柯律师</text>
										<text class="hui_22">18938874792</text>
									</view>
									<view class="qian_24">
										您好，关于您的这个问题，我们遇到的比较多，无法 一下子详细说清楚，当面或语音交流更方便，建议您 若有意向找律师的话可直接咨询我们。
									</view>
								</view>
							</view>
						</view>
						<view class="yingxiao_item_da">
							<text class="bai_20_bold kuang_txt">答</text>
							<view class="yingxiao_item_da_item">
								<view class="yingxiao_item_da_item_top">
									<view class="yingxiao_item_da_item_t">
										<view class="yingxiao_item_da_item_tx">
											<image src="@/static/lsimg/moren_tx.png" mode="" class="yingxiao_tx"></image>
											<image src="@/static/img/renzheng2.png" mode="" class="yingxiao_ren"></image>
										</view>
										<text class="hei_26 yingxiao_item_name">樊柯律师</text>
										<text class="hui_22">18938874792</text>
									</view>
									<view class="qian_24">
										您好，关于您的这个问题，我们遇到的比较多，无法 一下子详细说清楚，当面或语音交流更方便，建议您 若有意向找律师的话可直接咨询我们。
									</view>
								</view>
							</view>
						</view>
					</view>
				</view> -->
			</view>

			<!-- 分享海报 -->
			<view class="jingxuan_body sucai_body" v-if="active == 2">
				<view class="lunbo">
					<swiper
						:indicator-dots="false"
						:autoplay="false"
						circular="true"
						easing-function="default"
						:interval="5000"
						indicator-color="#c7c7c7"
						indicator-active-color="#ffffff"
						:duration="500"
						class="swiper"
						@change="swiperchang"
					>
						<swiper-item v-for="item in banner">
							<view class="swiper-item">
								<image :src="item.img"></image>
								<view class="yaoqing_kuling">邀请口令:{{ yaoqing.randcode1 }}</view>
								<view class="yaoqing_erweima"><image src="@/static/img/erweima.png" mode=""></image></view>
							</view>
						</swiper-item>
					</swiper>

					<view class="dots">
						<block v-for="(item, index) in banner"><view :class="['dot', index == current ? 'active' : '']"></view></block>
					</view>
				</view>
				<view class="haibao_bottom">
					<view class="haibao_bottom_left hei_22" @click="copy">
						<image src="@/static/img/haibao_lian.png" mode=""></image>
						复制分享链接
					</view>
					<view class="haibao_bottom_right bai_22">
						<image src="@/static/img/haibao_fen.png" mode=""></image>
						分享专属海报
					</view>
				</view>
			</view>

			<!-- 商学院 -->
			<view class="jingxuan_body " v-if="active == 3">
				<view class="shangxue_list">
					<view class="shangxue_item" v-for="item in shangxue_list">
						<view class="shangxue_item_left"><image :src="img_url + item.picurl" mode=""></image></view>
						<view class="shangxue_item_right">
							<view class="shangxue_item_title hei_28_bold">
								<text>置顶</text>
								{{ item.title }}
							</view>
							<view class="shangxue_item_time qian_24">
								<image src="@/static/img/shipin_time.png" mode=""></image>
								{{ item.addtime | timeStamp }}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import clipboard from '@/common/copy.js';
export default {
	onShow() {},

	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			tab_arry: ['精选回答', '营销素材', '分享海报', '商学院'],
			active: 0,
			page: 0,
			is_all: false,
			zixun_list: [],
			banner: [
				{
					img: '../../static/img/haibao1.png'
				},
				{
					img: '../../static/img/haibao2.png'
				}
			],
			current: 0,
			shangxue_list: [],
			yaoqing: '',
			sucai_list: []
		};
	},
	created() {},
	onLoad(option) {
		if (option.state) {
			this.active = option.state;
			if (option.state == 1) {
				this.huoqu_sucai();
			}
		}

		this.huoqu_jingxuan();
		this.huoqu_yaoqing();
	},
	//下拉刷新
	onPullDownRefresh: function() {},
	// stopPullDownRefresh:function(){

	// },
	methods: {
		//上拉加载
		onReachBottom() {
			if (this.is_all) {
				uni.showToast({
					title: '没有更多内容了',
					duration: 2000,
					icon: 'none'
				});
				uni.stopPullDownRefresh();
				return false;
			} else {
				this.page++;
				if (this.active == 0) {
					this.huoqu_jingxuan();
				} else if (this.active == 3) {
					this.huoqu_shangxue();
				}
				this.huoqu_jingxuan();
			}
		},
		navigateBack() {
			uni.navigateBack();
		},
		// 切换tab
		qiehuan(index) {
			this.active = index;

			this.page = 0;
			this.zixun_list = [];
			this.shangxue_list = [];
			this.sucai_list = [];
			this.is_all = false;
			if (index == 0) {
				this.huoqu_jingxuan();
			} else if (index == 1) {
				this.huoqu_sucai();
			} else if (index == 3) {
				this.huoqu_shangxue();
			}
		},
		huifu() {
			// this.$refs.huifu.open()
		},

		huoqu_jingxuan() {
			this.$http
				.post({
					url: '/mapi/extension/huifu',
					data: {
						page: this.page
					}
				})
				.then(res => {
					this.zixun_list = this.zixun_list.concat(res.data.consultlist);
					if (res.data.consultlist < 10) {
						this.is_all = true;
					}
				});
		},
		huoqu_shangxue() {
			this.$http
				.post({
					url: '/mapi/extension/shangxueyuanlist',
					data: {
						page: this.page
					}
				})
				.then(res => {
					this.shangxue_list = this.shangxue_list.concat(res.data.shangxueyuanlist);
					if (res.data.shangxueyuanlist < 10) {
						this.is_all = true;
					}
				});
		},
		huoqu_yaoqing() {
			this.$http
				.post({
					url: '/mapi/user/yaoqing'
				})
				.then(res => {
					if (res.code == 0) {
						this.yaoqing = res.data;
					}
				});
		},
		huoqu_sucai() {
			this.$http
				.post({
					url: '/mapi/extension/yingxiaosucailist',
					data: {
						page: this.page
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.sucai_list = this.sucai_list.concat(res.data.yingxiaosucailist);
						if (res.data.yingxiaosucailist < 10) {
							this.is_all = true;
						}
					}
				});
		},
		swiperchang(e) {
			this.current = e.detail.current;
		},
		jingxuan_share() {
			
			uni.share({
				provider: 'weixin',
				scene: 'WXSenceTimeline',
				type: 1,
				summary: '我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！',
				success: function(res) {
					console.log('success:' + JSON.stringify(res));
				},
				fail: function(err) {
					console.log('fail:' + JSON.stringify(err));
				}
			});
		},
		copy() {
			// #ifdef H5
			this.$copyText(this.yaoqing.inviteurl).then(res => {
				uni.showToast({
					title: '复制成功'
				});
			});
			// #endif
			// #ifdef APP-PLUS
			uni.setClipboardData({
				data: this.yaoqing.inviteurl,
				success: () => {
					uni.showToast({
						title: '复制成功'
					});
				}
			});
			// #endif
		},
		zhuanhuan(img) {
			return JSON.parse(img)[0];
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
page {
	background-color: #f7f7f7;
	min-height: 100%;
}

.tab_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10rpx 38rpx;
	background-color: #ffffff;
	position: fixed;
	top: 95rpx;
	width: 100%;
	box-sizing: border-box;
	z-index: 9;
}

.head_right image {
	width: 40rpx;
	height: 41rpx;
}

button {
	margin: 0;
	border: none;
}

button::after {
	content: none;
}

.zhuanchang_arry {
	display: flex;
	margin-top: 20rpx;
	flex-wrap: wrap;
}

.zhuanchang_arry text {
	border: 2rpx solid #e8e8e8;
	border-radius: 20rpx;
	padding: 4rpx 20rpx;
	display: inline-block;
	margin-right: 28rpx;
	margin-bottom: 20rpx;
}
.tab_top text {
	padding: 4rpx 20rpx;
}
.sucai_active {
	font-size: 28rpx;
	color: #0eb77e;
	background-color: #cff1ef;
	border-radius: 20rpx;
}
.jingxuan_body {
}
.xh_tx {
	width: 82rpx;
	height: 82rpx;
	border-radius: 100%;
}
.jingxuan_item:first-child {
	margin-top: 28rpx;
}
.jingxuan_item {
	padding: 30rpx;
	background-color: #ffffff;
	margin-bottom: 20rpx;
}
.jingxuan_item_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.jingxuan_item_top_left {
	display: flex;
	align-items: center;
}
.jingxuan_item_top_r {
	margin-left: 18rpx;
}
.jingxuan_item_name {
	margin-bottom: 10rpx;
}
.jingxuan_ls_tx {
	width: 51rpx;
	height: 51rpx;
	border-radius: 100%;
}
.jingxuan_ls_ren {
	width: 15rpx;
	height: 16rpx;
	background-color: #ffffff;
	border: solid 2rpx #ffffff;
	position: relative;
	right: 10rpx;
	border-radius: 100%;
}
.jingxuan_ls {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.jingxuan_ls_left {
	display: flex;
	align-items: center;
}
.jingxuan_ls_name {
	margin: 0rpx 20rpx 0 10rpx;
}
.jingxuan_ls_left_tx {
	position: relative;
}
.jing_fenxiang {
	width: 161rpx;
	height: 40rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
	border: solid 1rpx #0eb77e;
	display: flex;
	align-items: center;
	justify-content: center;
}
.jing_fenxiang image {
	width: 21rpx;
	height: 20rpx;
	margin-right: 11rpx;
}
.jingxuan_wenti {
	margin: 20rpx 0 20rpx;
}
.jingxuan_jieda {
	line-height: 40rpx;
	margin-bottom: 20rpx;
}
.jingxuan_jieda text {
	height: 30rpx;
	background-color: #f43a51;
	border-radius: 5rpx;
	display: inline-block;
	padding: 0 4rpx;
	line-height: 30rpx;
	margin-right: 4rpx;
}

/* 营销素材 */
.yingxiao_item_wen {
	padding: 17rpx 0rpx 17rpx 80rpx;
}
.kuang_txt {
	width: 30rpx;
	height: 30rpx;
	background-color: #0eb77e;
	border-radius: 5rpx;
	display: inline-block;
	line-height: 30rpx;
	text-align: center;
	margin-right: 13rpx;
}
.yingxiao_item_da {
	border-top: 1px solid #dcdcdc;
	display: flex;
	padding: 17rpx 0rpx 17rpx 80rpx;
}
.yingxiao_item_da .kuang_txt {
	width: 30rpx;
	height: 30rpx;
	background-color: #0eb77e;
	border-radius: 5rpx;
	display: inline-block;
	line-height: 30rpx;
	text-align: center;
	margin-right: 13rpx;
	position: relative;
	top: 4rpx;
}
.yingxiao_item_da_item {
	width: 90%;
}
.yingxiao_tx {
	width: 51rpx;
	height: 51rpx;
	border-radius: 100%;
}

.yingxiao_ren {
	width: 16rpx;
	height: 16rpx;
	background-color: #ffffff;
	border-radius: 100%;
	border: 2rpx solid #ffffff;
	position: absolute;
	right: 0rpx;
	bottom: 0;
}
.yingxiao_item_da_item_tx {
	position: relative;
	width: 51rpx;
	height: 51rpx;
}
.yingxiao_item_da_item_t {
	display: flex;
	align-items: center;
	margin-bottom: 20rpx;
}
.yingxiao_item_name {
	margin: 0 15rpx 0 17rpx;
}

/* 分享海报 */
.swiper {
	height: 1020rpx;
	position: relative;
	padding: 0 20rpx;
}

.swiper-item {
	height: 100%;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(0, 30, 20, 0.35);
	border-radius: 10rpx;
	position: relative;
}

.swiper-item image {
	width: 100%;
	height: 100%;
	border-radius: 10rpx;
}

.dot {
	width: 34rpx;
	height: 34rpx;
	border: solid 2rpx #a0a0a0;
	border-radius: 100%;
	margin-right: 6rpx;
}

.dots {
	margin: auto;
	position: absolute;
	left: 0;
	bottom: -25rpx;
	right: 0;
	display: flex;
	height: 10rpx;
	justify-content: center;
}
.active {
	width: 34rpx;
	height: 34rpx;
	background: url(../../static/img/sucai_bg.png) no-repeat;
	background-size: 100% 100%;
	border: solid 2rpx #0eb77e;
}
.sucai_body {
	padding: 45rpx 0rpx 250rpx;
}
.lunbo {
	position: relative;
	padding: 0rpx 46rpx 0rpx;
}
.yaoqing_erweima {
	width: 154rpx;
	height: 154rpx;
	background-color: #ffffff;
	position: absolute;
	bottom: 168rpx;
	left: 50%;
	transform: translate(-50%, 0);

	padding: 9rpx;
	box-sizing: border-box;
}
.yaoqing_kuling {
	width: 266rpx;
	height: 58rpx;
	background-color: #ffffff;
	border-radius: 29rpx;
	position: absolute;

	top: 523rpx;
	font-size: 22rpx;
	color: #83b364;
	text-align: center;
	line-height: 58rpx;
	left: 50%;
	transform: translate(-50%, 0);
}
.yaoqing_erweima image {
	width: 100%;
	height: 100%;
}
.haibao_bottom {
	height: 98rpx;
	width: 100%;
	position: fixed;
	bottom: 0rpx;
	max-width: 750px;
}
.haibao_bottom_left {
	width: 50%;
	background-color: #86dbbe;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.haibao_bottom_left image {
	width: 23rpx;
	height: 23rpx;
	margin-right: 7rpx;
}
.haibao_bottom_right {
	width: 50%;
	background-color: #0eb77e;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.haibao_bottom_right image {
	width: 22rpx;
	height: 21rpx;
	margin-right: 7rpx;
}
.haibao_bottom {
	display: flex;
}
.shangxue_item_title text {
	font-weight: 500;
	width: 60rpx;
	height: 28rpx;
	background-color: #ffffff;
	border-radius: 3rpx;
	border: solid 1rpx #ff4d6d;
	display: inline-block;
	line-height: 28rpx;
	text-align: center;
	color: #ff4d6d;
	font-size: 20rpx;
	margin-right: 7rpx;
}
.shangxue_item_title {
	word-break: break-all;
}
.shangxue_list {
	margin-top: 20rpx;
}
.shangxue_item {
	background-color: #ffffff;
	padding: 19rpx 19rpx 19rpx 41rpx;
}
.shangxue_item_time image {
	width: 22rpx;
	height: 22rpx;
	margin-right: 10rpx;
}
.shangxue_item_left image {
	width: 240rpx;
	height: 172rpx;
	background-color: #ededef;
	border-radius: 10rpx;
	margin-right: 19rpx;
}
.shangxue_item {
	display: flex;
	margin-bottom: 20rpx;
}
.shangxue_item_right {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
