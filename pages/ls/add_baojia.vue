<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">{{ title }}</view>
			<view class=" head_right hei_30_bold"><text @click="save">保存</text></view>
		</view>

		<view class="zi_body shiming_body">
			<view class="tishi hui_26">
				<image src="@/static/lsimg/sanjiao.png" mode=""></image>
				每位律师最多可以展示
				<text class="hong_26">3</text>
				项，您还能在添加
				<text class="hong_26">{{ 3 - num }}</text>
				项目
			</view>
			<view class="shiming_list hei_28" v-if="fenlei != ''">
				<view class="shiming_list_left">专长</view>
				<picker :range="fenlei" @change="zhuanchang_change" :range-key="'typename'">
					<view :class="['zhuanchang_xuan', fenlei_txt == '' ? 'qian_26' : 'hei_26']">
						<text>{{ fenlei_txt == '' ? '请选择' : fenlei_txt }}</text>
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">专长排序</view>
				<picker :range="paixu_arry" @change="paixu_change">
					<view :class="['zhuanchang_xuan', paixu == '' ? 'qian_26' : 'hei_26']">
						<text>{{ paixu == '' ? '请选择' : paixu }}</text>
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">收费方式</view>
				<picker :range="shoufei_arry" @change="shoufei_change">
					<view :class="['zhuanchang_xuan', shoufei == '' ? 'qian_26' : 'hei_26']">
						<text>{{ shoufei == '' ? '请选择' : shoufei }}</text>
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
					</view>
				</picker>
			</view>

			<view class="shiming_list hei_28">
				<view class="shiming_list_left">收费区间</view>
				<input type="text" value="" placeholder="100~200" class="hei_26 qujian" v-model="qujian" />
				元
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">服务区域</view>
				<pickerAddress2 @change="change" class="aaaaaa">
					<view :class="['zhuanchang_xuan', dizhi == '' ? 'qian_26' : 'hei_26']">
						<text>{{ dizhi == '' ? '请选择' : dizhi }}</text>
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
					</view>
				</pickerAddress2>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">风险代理</view>
				<picker :range="fengxian_arry" @change="fengxian_change">
					<view :class="['zhuanchang_xuan', fengxian == '' ? 'qian_26' : 'hei_26']">
						<text>{{ fengxian == '' ? '请选择' : fengxian }}</text>
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
					</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
export default {
	data() {
		return {
			paixu: '',
			shoufei: '',
			qujian: '',
			fengxian: '',
			paixu_arry: [1, 2, 3],
			shoufei_arry: ['支付宝'],
			fenlei: [],
			fengxian_arry: ['接受', '不接受'],
			dizhi: '',
			sheng: '',
			shi: '',
			leiid: '',
			fenlei_txt: '',
			num: 0,
			page: 0,
			id: '',
			yuanfenlei: '',
			title: '新增',
			index: ''
		};
	},
	created() {},
	components: {
		pickerAddress2
	},
	onLoad(option) {
		if (option.index != undefined) {
			this.index = option.index;
			this.num = option.num;
			this.title = '修改';
		} else {
			this.num = option.num;
		}
		console.log(option);

		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				var array = [];
				for (var key in res.data.type) {
					array.push(res.data.type[key]);
				}
				this.fenlei = array;
				this.yuanfenlei = res.data.type;
				if (this.index != '') {
					this.huoqu_list();
				}
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_list() {
			// 获取列表
			this.$http
				.post({
					url: '/mlawyerapi/lawyer/quoted_price',
					data: {
						page: this.page
					}
				})
				.then(res => {
					this.num = res.data.quoted_price.length;
					this.qujian = res.data.quoted_price[this.index].minmoney + '-' + res.data.quoted_price[this.index].maxmoney;
					this.fenlei_txt = this.yuanfenlei[res.data.quoted_price[this.index].typeid].typename;
					this.paixu = res.data.quoted_price[this.index].sort;
					if (res.data.quoted_price[this.index].paymode == 1) {
						this.shoufei = '支付宝';
					}
					if (res.data.quoted_price[this.index].agent == 1) {
						this.fengxian = '接受';
					} else if (res.data.quoted_price[this.index].agent == 2) {
						this.fengxian = '不接受';
					}
					this.leiid = res.data.quoted_price[this.index].typeid;
					this.id = res.data.quoted_price[this.index].qpid;
					this.dizhi = res.data.quoted_price[this.index].province + '-' + res.data.quoted_price[this.index].city;
				});
		},
		zhuanchang_change(data) {
			this.fenlei_txt = this.fenlei[data.detail.value].typename;
			this.leiid = this.fenlei[data.detail.value].typeid;
		},
		paixu_change(data) {
			this.paixu = this.paixu_arry[data.detail.value];
		},
		shoufei_change(data) {
			this.shoufei = this.shoufei_arry[data.detail.value];
		},
		fengxian_change(data) {
			this.fengxian = this.fengxian_arry[data.detail.value];
		},
		change(data) {
			console.log(data);
			// this.dizhi = data.data.join('')
			this.sheng = data.data[0];
			this.shi = data.data[1];
			this.dizhi = this.sheng + '-' + this.shi;
			console.log(data.data.join(''));
		},
		save() {
			if (this.zhuanchang == '请选择') {
				uni.showToast({
					title: '请选择专长',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.paixu == '请选择') {
				uni.showToast({
					title: '请选择专长排序',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.shoufei == '请选择') {
				uni.showToast({
					title: '请选择收费方式',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.qujian == '请选择') {
				uni.showToast({
					title: '请选择服务区域',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.dizhi == '') {
				uni.showToast({
					title: '请填写收费区间',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.fengxian == '请选择') {
				uni.showToast({
					title: '请选择风险代理',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			var di = this.dizhi.split('-');
			if (this.shoufei == '支付宝') {
				var shou_id = 1;
			} else {
				var shou_id = 2;
			}
			if (this.fengxian == '接受') {
				var fengxian_id = 1;
			} else {
				var fengxian_id = 2;
			}

			this.$http
				.post({
					url: '/lawyer/lawyer/zx_pingjia',
					data: {
						typeid: this.leiid,
						sort: this.paixu,
						paymode: shou_id,
						province: di[0],
						city: di[1],
						price: this.qujian,
						agent: fengxian_id,
						qpid: this.id
					}
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '操作成功',
							duration: 2000
						});
						setTimeout(function() {
							uni.navigateBack();
						}, 2000);
					}
				});

			console.log(this.zhuanchang, this.paixu, this.shoufei, this.qujian, this.fengxian);
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.shiming_list {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #e8e8e8;
	padding-left: 30rpx;
	padding-right: 30rpx;
	position: relative;
}

.shiming_list input {
	width: 500rpx;
	text-align: right;
}

.shiming_list_left {
	width: 170rpx;
}

.zhuanchang_xuan {
	/* width: 500rpx; */
	padding-right: 30rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: right;
	text-align: right;
}

.zhuanchang_xuan image {
	width: 23rpx;
	height: 13rpx;
	position: absolute;
	right: 30rpx;
}
.tishi {
	height: 91rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	background-color: #feebed;
}
.tishi image {
	width: 27rpx;
	height: 26rpx;
	margin-right: 15rpx;
}
.qujian {
	margin-right: 4rpx;
}
</style>
