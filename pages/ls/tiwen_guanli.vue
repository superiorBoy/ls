<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">提问管理</view>
			<view class=" head_right"><image src="@/static/lsimg/sousuo.png" mode="" @click="tan"></image></view>
		</view>
		<view class="tab_top hui_26">
			<text v-for="(item, index) in tab_arry" :class="['', index == active ? 'hong_26_bold' : '']" @click="qiehuan(index)">{{ item }}</text>
		</view>
		<view class="zi_body tab_zi_body">
			<view class="tiwen_list">
				<view class="tiwen_item" v-for="(item, index) in jilu_list">
					<view class="tiwen_item_top hui_26">
						<text class="zhuangtai" v-if="active == 0">新</text>
						{{ item.information }}
					</view>
					<view class="tiwen_item_center qian_22">
						<view class="tiwen_item_dizhi">
							<image src="@/static/img/dizhi.png" mode=""></image>
							{{ item.province }}-{{ item.city }}
						</view>
						<view class="tiwen_item_biaoqian">
							<image src="@/static/img/biaoqian.png" mode=""></image>
							{{ fenlei[item.typeid].typename }}
						</view>
						<view class="tiwen_item_shijian">
							<image src="@/static/lsimg/shijian_icon.png" mode=""></image>
							{{ item.addtime | timeStamp }}
						</view>
					</view>
					<view class="huifu_btn">
						<view class="tiwen_ren hui_24"><!-- <image src="@/static/lsimg/yh_tx.png" mode=""></image>兔子的眼泪 --></view>
						<button type="" class="huifu bai_24" @click="huifu(item.information, item.province, item.city, fenlei[item.typeid].typename, item.addtime, item.consultid)">
							回复
						</button>
					</view>
					<!-- 	<view class="zhuiwen hui_26" v-if="active==2">
						<view class="zhuiwen_txt bai_20">追问</view>
						<view class="zhuiwen_body">二审有新的证据可以在二审审判程序中向二审法院递交
						的新证据嘛？</view>
					</view> -->
				</view>
			</view>
		</view>

		<uni-popup type="bottom" ref="popup">
			<view class="tan">
				<view class="tan_title hei_30">查询条件</view>
				<view class="tan_list hei_26">
					<view class="tan_list_top">
						<pickerAddress @change="change" class="aaaaaa" @click="dianji">
							<text class="dizhi">{{ dizhi == '' ? '按地区' : dizhi }}</text>
						</pickerAddress>
						<!-- <text>按地区</text> -->
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
					</view>
				</view>
				<view class="tan_list hei_26">
					<view class="tan_list_top" @click="zhuan_togg">
						<text>{{ zhuanchang_txt == '' ? '按专长' : zhuanchang_txt }}</text>
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
					</view>
					<view class="tan_list_bottom zhuanchang_arry hei_26" v-if="zhuan_show">
						<text v-for="(item, index) in fenlei" :class="['', index == xuanzc ? 'xuanzhong' : '']" @click="xuanzhuangchang(index, item.typename, item.typeid)">
							{{ item.typename }}
						</text>
					</view>
					<button type="" class="zhuanchang_quer_ding bai_30" @click="zhuanchang_go" v-if="zhuan_show">确定</button>
				</view>

				<view class="tan_buttom " v-if="!zhuan_show">
					<button type="" class="quxiao hong_30" @click="quxiao_btn">取消搜索</button>
					<button type="" class="queren bai_30" @click="queding_btn">确认搜索</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import unpopup from '@/components/uni-popup/uni-popup-share.vue';
import pickerAddress from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
export default {
	components: {
		unpopup,
		pickerAddress
	},
	onLoad() {
		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
			});
	},
	onShow() {
		this.zhuanchang_txt = '';
		this.dizhi = '';
		this.type_id = '';
		this.sheng = '';
		this.shi = '';
		this.xuanzc = '9999';
		this.page = 0;
		this.jilu_list = [];
		this.is_all = false;
		this.huoqu_list();
		
	},

	data() {
		return {
			tab_arry: ['最新咨询', '我回复的', '追问我的'],
			active: '0',
			dizhi: '',
			zhuanchang: [],
			xuanzc: '9999',
			zhuanchang_txt: '',
			zhuanchang_txt2: '',
			zhuan_show: false,
			jilu_list: [],
			page: 0,
			is_all: false,
			img_url: uni.getStorageSync('img_url'),
			fenlei: '',
			type_id: '',
			sheng: '',
			shi: ''
		};
	},
	created() {},
	//下拉刷新
	onPullDownRefresh: function() {
		this.page = 0;
		this.jilu_list = [];
		this.is_all = false;
		this.zhuanchang_txt = '';
		this.dizhi = '';
		this.sheng = '';
		this.shi = '';
		this.type_id = '';
		this.xuanzc = '9999';
		this.huoqu_list();
	},
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
				this.huoqu_list();
			}
		},
		navigateBack() {
			uni.navigateBack();
		},
		// 切换tab
		qiehuan(index) {
			this.active = index;
			this.zhuanchang_txt = '';
			this.dizhi = '';
			this.type_id = '';
			this.sheng = '';
			this.shi = '';
			this.xuanzc = '9999';
			this.page = 0;
			this.jilu_list = [];
			this.is_all = false;
			this.huoqu_list();
		},
		// 获取提问记录列表
		huoqu_list() {
			this.$http
				.post({
					url: '/mlawyerapi/consult/tiwen_guanli',
					data: {
						page: this.page,
						state: Number(this.active) + 1,
						typeid: this.type_id,
						province: this.sheng,
						city: this.shi
					}
				})
				.then(res => {
					if (res.data.list < 10) {
						this.is_all = true;
					}
					this.jilu_list = this.jilu_list.concat(res.data.list);
				});
		},
		huifu(title, sheng, shi, leixing, time, id) {
			uni.navigateTo({
				url:
					'/pages/ls/tiwen_guanli_xq?zhuangtai=' +
					this.active +
					'&title=' +
					title +
					'&sheng=' +
					sheng +
					'&shi=' +
					shi +
					'&leixing=' +
					leixing +
					'&time=' +
					time +
					'&id=' +
					id
			});
		},
		// 底部弹窗
		tan() {
			this.$refs.popup.open();
		},
		// 地址确定
		change(data) {
			console.log(data);
			this.sheng = data.data[0];
			this.shi = data.data[1];
			this.dizhi = this.sheng + '-' + this.shi;
			this.zhuan_show = false;
		},
		// 专长选择
		xuanzhuangchang(index, item, id) {
			this.xuanzc = index;
			this.zhuanchang_txt2 = item;
			this.type_id = id;
		},
		// 专长确定
		zhuanchang_go() {
			this.zhuanchang_txt = this.zhuanchang_txt2;
			this.zhuan_show = !this.zhuan_show;
		},
		zhuan_togg() {
			this.zhuan_show = !this.zhuan_show;
		},
		// 取消搜索
		quxiao_btn() {
			this.zhuanchang_txt = '';
			this.dizhi = '';
			this.type_id = '';
			this.sheng = '';
			this.shi = '';
			this.xuanzc = '9999';
			this.$refs.popup.close();
		},
		// 确定搜索
		queding_btn() {
			console.log(this.dizhi, this.zhuanchang_txt);
			this.$refs.popup.close();
			this.page = 0;
			this.jilu_list = [];
			this.is_all = false;
			this.huoqu_list();
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
}

.tab_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10rpx 38rpx;
	background-color: #ffffff;
	position: fixed;
	top: 100rpx;
	width: 100%;
	box-sizing: border-box;
	z-index: 9;
}

.head_right image {
	width: 40rpx;
	height: 41rpx;
}

.huifu {
	width: 160rpx;
	height: 56rpx;
	background-color: #f43a51;
	border-radius: 28rpx;
	line-height: 56rpx;
	margin: 0;
	display: inline-block;
	text-align: center;
}

.tiwen_item {
	padding: 20rpx 30rpx;
	margin-bottom: 20rpx;
	background-color: #ffffff;
}

.tiwen_item:first-child {
	margin-top: 20rpx;
}

.tiwen_item_center {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 20rpx 0;
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

.huifu_btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.huifu_btn image {
	width: 50rpx;
	height: 51rpx;
	margin-right: 15rpx;
	border-radius: 100%;
}
.zhuangtai {
	background-color: #f43a51;
	border-radius: 3rpx;
	color: #ffffff;
	padding: 0 5rpx;
	display: inline-block;
	border-radius: 4rpx;
	font-size: 20rpx;
	vertical-align: middle;
	margin-right: 9rpx;
}
.tiwen_ren {
	display: flex;
	align-items: center;
}

.tan {
	width: 100%;
	height: 758rpx;
	background-color: #ffffff;
	padding: 0 23rpx;
	box-sizing: border-box;
	position: relative;
}

.tan_title {
	text-align: center;
	line-height: 120rpx;
}

.tan_list {
}

.tan_list_top {
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #e8e8e8;
	height: 98rpx;
	justify-content: space-between;
}

.tan_list image {
	width: 22rpx;
	height: 12rpx;
}

.tan_buttom {
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 120rpx;
}

.tiwen_item_top {
	line-height: 36rpx;
}

.aaaaaa {
	min-width: 650rpx;
	display: inline-block;
}

button {
	margin: 0;
	border: none;
}

button::after {
	content: none;
}

.quxiao {
	width: 342rpx;
	height: 88rpx;
	background-color: #ffd7dc;
	border-radius: 44rpx 0rpx 0rpx 44rpx;
	line-height: 88rpx;
}

.queren {
	width: 342rpx;
	height: 88rpx;
	line-height: 88rpx;
	background-color: #f43a51;
	border-radius: 0rpx 44rpx 44rpx 0rpx;
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

.zhuanchang_quer_ding {
	height: 88rpx;
	background-color: #f43a51;
	border-radius: 44rpx;
	line-height: 88rpx;
	position: absolute;
	bottom: 50rpx;
	width: 691rpx;
	box-sizing: border-box;
}

.xuanzhong {
	color: #f43a51;
	border: 2rpx solid #f43a51 !important;
}

.zhuiwen {
	display: flex;
	align-items: flex-start;
	margin-top: 20rpx;
}
.zhuiwen .zhuiwen_txt {
	padding: 2rpx 4rpx;
	height: 26rpx;
	background-color: #f43a51;
	border-radius: 3rpx;
	margin-right: 7rpx;
	line-height: 26rpx;
	margin-top: 6rpx;
}
.zhuiwen_body {
	max-width: 90%;
	line-height: 38rpx;
}
</style>
