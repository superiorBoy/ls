<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">委托详情</view>
			<view class=" head_right hong_30"></view>
		</view>

		<view class="zi_body ">
			<view class="tiwen_wenti">
				<view class="xq_top_tx hui_24">
					<image :src="img_url + item.photourl" mode=""></image>
					<view class="">
						<view class="name">{{ item.name }}</view>
						<view class="qian_22">{{ item.addtime | timeStamp }}</view>
					</view>
				</view>
				<view class="xq_body_top hei_30">
					<view class="xq_list" v-if="item.typeid && fenlei">
						案件类型：
						<text class="hui_30">{{ fenlei[item.typeid].typename }}</text>
					</view>
					<view class="xq_list">
						所在城市：
						<text class="hui_30">{{ item.province }}-{{ item.city }}-{{ item.area }}</text>
					</view>
					<view class="xq_list">
						联 系 人：
						<text class="hui_30">{{ item.name }}{{ item.sex == 1 ? '先生' : '女士' }}</text>
					</view>
					<view class="xq_list">
						联系电话：
						<text class="hui_30">{{ item.phone }}</text>
					</view>
					<view class="xq_list">案件描述：</view>

					<view class="xq_body_txt hui_26">{{ item.information }}</view>
				</view>
				<view class="tiwen_zhuangtai hong_26">{{ item.state == 1 ? '进行中' : '已结束' }}</view>
			</view>
			<view class="" style="height: 160rpx;"></view>
			<view class="huifu_bottom"><button type="" class="hong_24" @click="lianxi">联系TA</button></view>
		</view>
	</view>
</template>

<script>
import uParse from '@/components/feng-parse/parse.vue';
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			item: '',
			fenlei: ''
		};
	},
	created() {},
	components: {
		uParse
	},
	onLoad(option) {
		console.log(option);

		this.item = JSON.parse(option.item);
		console.log(this.item);
		// 获取分类
		this.id = option.id;
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
			});
		// this.$http
		// 	.post({
		// 		url: '/mlawyerapi/consult/zaixian_lianxi'
		// 	})
		// 	.then(res => {
		// 		this.is_lianxi=res.data.lawyer.zaixian_lianxi
		// 	});
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

		lianxi() {
			uni.navigateTo({
				url: 'chat?userid=' + this.item.userid
			});
		},
		close() {
			this.is_tan = false;
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
	padding: 20rpx 30rpx 50rpx;
}
.xq_list {
	margin-bottom: 20rpx;
}
.xq_body_txt {
	line-height: 40rpx;
}
page {
	background-color: #f2f2f2;
}
.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.xq_top_tx {
	display: flex;
	align-items: center;
	padding: 40rpx 30rpx 0;
}

.xq_top_tx image {
	width: 64rpx;
	height: 65rpx;
	border-radius: 100%;
	margin-right: 10rpx;
}
.name {
	margin-bottom: 6rpx;
}

.xq_body {
	/* margin-bottom: 256rpx; */
}
.tiwen_wenti {
	position: relative;
	background-color: #ffffff;
}
.tiwen_zhuangtai {
	position: absolute;
	right: 30rpx;
	top: 40rpx;
}
.tiwen_zhuangtai image {
	width: 129rpx;
	height: 114rpx;
}
.tiwen_item_center {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20rpx;
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
	width: 56rpx;
	height: 56rpx;
	border-radius: 100%;
	margin-right: 10rpx;
}

.jiang_num {
	position: absolute;
	right: 0rpx;
}
.xq_bottom {
	border-top: 2rpx solid #e8e8e8;
	padding: 0rpx 30rpx 240rpx;
}

.xq_ls {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30rpx 0 0;
}

.xq_ls_left {
	display: flex;
	position: relative;
	width: 100%;
}

.xq_zhauntai {
	width: 129rpx;
	height: 114rpx;
	background: url(../../static/lsimg/xq_zhuangtai.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
}

.xq_ls_time {
	margin-top: 4rpx;
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
	padding-left: 62rpx;
}

.xq_ls_tx {
	position: relative;
}

.xq_renzheng {
	width: 15rpx;
	height: 15rpx;
	position: absolute;
	bottom: 15rpx;
	right: 10rpx;
	background-color: #ffffff;
	border-radius: 100%;
	border: 4rpx solid #ffffff;
}

.huifu_anxiu {
	display: flex;
	align-items: center;
	padding: 40rpx 30rpx 40rpx;
	box-sizing: border-box;

	/* height: 150rpx; */
	width: 100%;
	justify-content: space-between;
	background-color: #ffffff;
}

.huifu_anxiu textarea {
	width: 505rpx;
	height: 150rpx;
	background-color: #f5f5f5;
	border-radius: 10rpx;
	border: solid 1rpx #d5d5d5;
	padding-left: 10rpx;
	padding: 8rpx;
	box-sizing: border-box;
}

.huifu_anxiu button {
	width: 99rpx;
	height: 60rpx;
	background-color: #f43a51;
	border-radius: 10rpx;
	line-height: 60rpx;
	padding: 0;
	box-sizing: border-box;
}

.zhuiwen {
	/* 		display: flex;
		align-items: flex-start;
		 */
	border-bottom: 2rpx solid #d9d9d9;
	padding: 16rpx;
	box-sizing: border-box;
}

.hui_zhuiwen {
	padding-top: 20rpx;
	border-bottom: 2rpx solid #d9d9d9;
	padding: 16rpx;
	box-sizing: border-box;
}

.zhuiwen .zhuiwen_txt {
	padding: 2rpx 4rpx;
	height: 26rpx;
	background-color: #0eb77e;
	border-radius: 3rpx;
	margin-right: 7rpx;
	line-height: 26rpx;
	margin-top: 6rpx;
	display: inline-block;
}

.zhuiwen_body {
	max-width: 450rpx;
	line-height: 38rpx;
	word-break: break-all;
}

.hui_zhuiwen_body {
	line-height: 36rpx;
	padding-left: 56rpx;
	margin-top: 10rpx;
	/* display: flex;
	align-items: flex-start;
	word-break: break-all; */
	word-break: break-all;
}
.hui_zhuiwen_body text {
	padding: 2rpx 4rpx;
	height: 26rpx;
	background-color: #f43a51;
	border-radius: 3rpx;
	margin-right: 7rpx;
	line-height: 26rpx;
	margin-top: 6rpx;
	display: inline-block;
}
.word_br {
	word-break: break-all;
	width: 470rpx;
}
.zhuiwen_body_yh {
	/* 	display: flex;
	align-items: flex-start; */
	padding-left: 66rpx;
	word-break: break-all;
}
.hui_fir_ls {
	border-bottom: 2rpx solid #d9d9d9;
	padding: 0 0 30rpx;
	margin-top: 4rpx;
}
.huifu_anxiu image {
	width: 56rpx;
	height: 56rpx;
	margin-right: 10rpx;
}
.huifu_bottom {
	position: fixed;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
	height: 100rpx;
	background-color: #ffffff;
	display: flex;
	padding: 0 30rpx;
	justify-content: flex-end;
	align-items: center;
}

.huifu_bottom button {
	width: 160rpx;
	height: 56rpx;
	background-color: #ffffff;
	border-radius: 28rpx;
	border: solid 1rpx #f43a51;
	line-height: 56rpx;
	padding: 0;
	margin: 0;
}
.tan_tishi {
	width: 472rpx;
	height: 290rpx;
	background-color: #ffffff;
	border-radius: 5rpx;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 0 20rpx;
	box-sizing: border-box;
}
.tan_tishi_top_left {
	display: flex;
	align-items: center;
}
.tan_tishi_top_left image {
	width: 31rpx;
	height: 27rpx;
	margin-right: 10rpx;
}
.bg {
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
}
.tan_tishi_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 86rpx;
	border-bottom: 1rpx solid #cccccc;
}
.guanbi {
	width: 17rpx;
	height: 17rpx;
}
.tan_tishi button {
	width: 167rpx;
	height: 50rpx;
	background-color: #0eb77e;
	border-radius: 5rpx;
	line-height: 50rpx;
}
.tan_tishi_txt {
	margin: 40rpx 0;
}
</style>
