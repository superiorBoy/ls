<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">提问详情</view>
			<view class=" head_right hong_30"></view>
		</view>

		<view class="zi_body ">
			<view class="xq_body">
				<view class="xq_body_top" v-if="xq.user">
					<view class="xq_body_top_tx hui_24" >
						<image :src="img_url+xq.user.photourl" mode=""></image>
						<text>{{ xq.user.nickname }}</text>
					</view>
					<view class="xq_wenti hei_26">{{ xq.consult.information }}</view>
					<view class="tiwen_item_center qian_22">
						<view class="tiwen_item_dizhi">
							<image src="@/static/img/dizhi.png" mode=""></image>
							{{ xq.consult.province }}-{{ xq.consult.city }}
						</view>
						<view class="tiwen_item_biaoqian" v-if="fenlei != ''">
							<image src="@/static/img/biaoqian.png" mode=""></image>
							{{ fenlei[xq.consult.typeid].typename }}
						</view>
						<view class="tiwen_item_shijian">
							<image src="@/static/lsimg/shijian_icon.png" mode=""></image>
							{{ xq.consult.addtime | timeStamp }}
						</view>
					</view>
				</view>
				<view class="tiwen_huifu"><textarea value="" placeholder="说点什么吧..." class="hei_24" v-model="shuru_txt" maxlength="5000"/></view>
				<view class="tiwen_huifu_btn"><button type="" class="bai_26" @click="huifu">回复</button></view>

				<view class="xq_bottom">
					<view class="xq_bottom_list" v-for="item in xq.consult_reply">
						<view class="xq_ls">
							<view class="xq_ls_left">
								<view class="xq_ls_tx">
									<image :src="img_url + item.photourl" mode="" class="xq_tx"></image>
									<image src="@/static/img/renzheng2.png" mode="" class="xq_renzheng"></image>
								</view>
								<view class="xq_ls_name">
									<view class="hei_26_bold xq_ls_name_img">
										{{ item.nickname }}律师
										<image src="@/static/img/ls_shiming_yi.png" mode="widthFix"></image>
									</view>
									<view class="qian_22 xq_ls_jieda">
										已解答
										<text>{{ item.replynum }}</text>
										次
									</view>
								</view>
							</view>
						</view>
						<view class="xq_huifu_txt hui_26">{{ item.information }}</view>
						<view class="qian_22 xq_ls_time">{{ item.addtime | timeStamp }}</view>
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
			id: '',
			fenlei: '',
			shuru_txt: '',
			xq: ''
		};
	},
	created() {},
	onLoad(option) {
		// 获取分类
		this.id = option.id;
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
				this.huoqu_xq();
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_xq() {
			this.$http
				.post({
					url: '/mapi/consult/zixun_xq',
					data: {
						consultid: this.id
					}
				})
				.then(res => {
					this.xq = res.data;
				});
		},
		huifu() {
			console.log(this.shuru_txt);
			if (this.shuru_txt == '') {
				uni.showToast({
					title: '请输入回复内容',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			this.$http
				.post({
					url: '/lawyer/index/consult_reply',
					data: {
						consultid: this.id,
						text: this.shuru_txt
					}
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '已回复',
							duration: 1500,
							icon: 'none'
						});
						this.shuru_txt = '';
						setTimeout(function() {
							uni.navigateBack();
						}, 1500);
					}
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
.xq_body_top {
	padding: 20rpx 30rpx;

	border-bottom: 2rpx solid #e8e8e8;
}

.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.xq_body {
	padding: 0 0rpx;
}

.tiwen_item_center {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 20rpx 0 15rpx;
}

.tiwen_item_dizhi image {
	width: 18rpx;
	height: 20rpx;
	margin-right: 8rpx;
}

.tiwen_item_biaoqian image {
	width: 21rpx;
	height: 20rpx;
	margin-right: 8rpx;
}

.tiwen_item_shijian image {
	width: 21rpx;
	height: 21rpx;
	margin-right: 8rpx;
}
.xq_ls_left .xq_tx {
	width: 80rpx;
	height: 81rpx;
	border-radius: 100%;
	margin-right: 16rpx;
}
.xq_ls {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10rpx 0;
}
.xq_ls_left {
	display: flex;
}
.xq_zhauntai {
	width: 129rpx;
	height: 114rpx;
	background: url(../../static/lsimg/xq_zhuangtai.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
}
.xq_ls_time {
	margin-top: 10rpx;
}
.huifu_txt {
	-moz-transform: rotate(-35deg);
	-webkit-transform: rotate(-35deg);
	display: block;
	position: absolute;
	filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
	top: 40rpx;
	left: 20rpx;
}
.xq_huifu_txt {
	margin-top: 13rpx;
	line-height: 36rpx;
}
.xq_ls_tx {
	position: relative;
}
.xq_renzheng {
	width: 22rpx;
	height: 21rpx;
	position: absolute;
	bottom: 15rpx;
	right: 10rpx;
	background-color: #ffffff;
	border-radius: 100%;
	border: 4rpx solid #ffffff;
}
.xq_body_top_tx {
	display: flex;
	align-items: center;
	margin: 23rpx 0;
}
.xq_body_top_tx image {
	width: 50rpx;
	height: 51rpx;
	border-radius: 100%;
	margin-right: 15rpx;
}
.tiwen_huifu {
	padding: 10px 30rpx;
	border-bottom: 1px solid #eeeeee;
}
.tiwen_huifu textarea {
	height: 206rpx;
}
.tiwen_huifu_btn {
	padding: 0px 30rpx;
	margin: 20rpx 0 10rpx;
}
.tiwen_huifu_btn button {
	height: 61rpx;
	background-color: #f43a51;
	border-radius: 30rpx;
	line-height: 61rpx;
}
.xq_bottom {
	padding: 0 30rpx;
}
.xq_ls_jieda {
	margin-top: 10rpx;
}
.xq_ls_jieda text {
	color: #ffad2b;
}
.xq_bottom_list {
	border-bottom: 1px solid #eeeeee;
	padding: 20rpx 0;
}
.xq_ls_name_img image {
	max-width: 17rpx;
	margin-left: 6rpx;
}
.xq_wenti {
	word-break: break-all;
}
</style>
