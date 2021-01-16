<template>
	<view class="body">
		<view class="head">
			<view class="sousuo">
				<input type="text" value="" confirm-type="search" class="hei_24" @confirm="search" v-model="sou_txt" @click="panduan" @input="shuruchange" />
				<view class="sou_tishi qian_24" v-if="tishi">
					<image src="@/static/img/sousuo.png" mode="" />
					输入您要查找的律师姓名
				</view>
			</view>
		</view>
		<view class="tab_top hui_26">
			<pickerAddress2 @change="change" class="aaaaaa">
				{{ dizhi }}
				<image src="@/static/img/shaixuan.png" mode=""></image>
			</pickerAddress2>

			<picker mode="selector" :range="zhuanchang_arry" @change="zhuanchang_change" :range-key="'shanchangname'">
				{{ zhuanchang }}
				<image src="@/static/img/shaixuan.png" mode=""></image>
			</picker>

			<picker :range="paixu_arry" @change="paixu_change">
				{{ paixu }}
				<image src="@/static/img/shaixuan.png" mode=""></image>
			</picker>
		</view>
		<view class="zi_body tab_zi_body">
			<view class="lvshi_list">
				<view class="lvshi_item" v-for="(item, index) in lslist">
					<view class="zixun bai_22" @click="go_chat(item.userid,item.chatprice)">
						<image src="@/static/img/bai_xiaoxi.png" mode=""></image>
						在线咨询
					</view>
					<view class="zixun_jiage lv_22" >
					<text v-if="item.chatprice==0">未报价</text>	<text v-if="item.chatprice!=0">{{item.chatprice}}/小时</text>
					</view>
					<view class="lvshi_left" @click="go_zhuye(item.userid)"><image :src="img_url + item.photourl" mode=""></image></view>
					<view class="lvshi_right">
						<view class="hei_30_bold lvshi_name" @click="go_zhuye(item.userid)">
							{{ item.nickname }}律师
							<image src="@/static/img/renzheng.png" mode=""></image>
						</view>
						<view class="hui_24 lv_suo">
							<text class="tese bai_20">特色律所</text>
							{{ item.lvsuo }}
						</view>
						<view class="qian_22 lvsuo_dizhi">
							<image src="@/static/img/dizhi.png" mode=""></image>
							{{ item.city }}{{ item.area }}{{ item.address }}
						</view>
						<view class="qian_22 lvshi_item_fuwu">
							<view class="fuwu">
								<image src="@/static/img/fuwu.png" mode=""></image>
								已服务
								<text class="lv_22">{{ item.replynum }}</text>
								人
							</view>
							<view class="">
								<image src="@/static/img/xingxing.png" mode=""></image>
								评价
								<text class="lv_22">{{ item.haopingnum }}</text>
								次
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import unpopup from '@/components/uni-popup/uni-popup-share.vue';
import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
export default {
	components: {
		unpopup,
		pickerAddress2
	},
	onLoad(option) {
		
		
	},
	onShow() {
		// uni.getStorage({
		//     key: 'zhuanchang',
		//     success: function (res) {
		//         that.zhuanchang=res.data
		//     }
		// })
      this.lslist=[]
		this.get_shanchang();
		this.get_lvshilist();
	  },

	data() {
		return {
			dizhi: '不限地区',
			zhuanchang: '不限专长',
			zhuanchang_arry: [],
			paixu: '综合排序',
			paixu_arry: ['综合排序', '最新排序', '热门排序'],
			sou_txt: '',
			tishi: true,
			lslist: [],
			page: 0,
			img_url: uni.getStorageSync('img_url'),
			shanchang_id: '',
			sheng: '',
			shi: '',
			is_all:false,
			type:1
		};
	},
	created() {
		
		
	},
	//下拉刷新
	onPullDownRefresh: function() {
		this.page=0,
		this.is_all=false,
		this.lslist=[],
		this.sheng='',
		this.shi='',
		this.dizhi= '不限地区',
		this.zhuanchang= '不限专长',
		this.shanchang_id='',
		this.get_lvshilist()

	},
	// stopPullDownRefresh:function(){

	// },
	methods: {
		//上拉加载
		onReachBottom() {
			
			if(this.is_all){
				uni.showToast({
					title: '没有更多内容了',
					duration: 2000,
					icon: "none"
				});
				uni.stopPullDownRefresh();
				return false
			}else{
				this.page++
				this.get_lvshilist()
			}
		},
		navigateBack() {
			uni.navigateBack();
		},
		// 按键搜索
		search(e) {
			console.log(e.detail.value);
		},
		panduan() {
			this.tishi = false;
		},
		shuruchange() {
			if (this.sou_txt < 1) {
				this.tishi = true;
			}
		},
		// 地区选择
		change(data) {
			console.log(data);
			// this.dizhi = data.data.join('')
			this.sheng = data.data[0];
			this.shi = data.data[1];
			this.dizhi = this.sheng + '-' + this.shi;
			this.page=0,
			this.is_all=false,
			this.lslist=[],
			
			this.get_lvshilist();
		},
		// 专长选择
		zhuanchang_change(e) {
			this.zhuanchang = this.zhuanchang_arry[e.detail.value].shanchangname;
			this.shanchang_id = this.zhuanchang_arry[e.detail.value].shanchangid;
			this.page=0,
			this.is_all=false,
			this.lslist=[],
			this.get_lvshilist();
			console.log(this.shanchang_id);
		},
		// 排序选择
		paixu_change(e) {
			console.log(e.detail.value)
			this.type=e.detail.value+1
			this.page=0,
			this.is_all=false,
			this.lslist=[],
			this.get_lvshilist();
			this.paixu = this.paixu_arry[e.detail.value];
		},
		tochat(id,mobile) {
			uni.navigateTo({
				url: 'zaixian_wen?user=' + id+'&mobile='+mobile
			});
		},
		go_chat(id,price){
			if(price==0){
				return false
			}
			uni.navigateTo({
				url:'pay?lawyerid='+id+'&type=1'
			})
			
		},
		go_zhuye(id) {
			uni.navigateTo({
				url: 'ls_zhuye?lawyerid='+id
			});
		},

		// 获取律师擅长信息
		get_shanchang() {
			this.$http
				.post({
					url: '/mapi/lawyer/getshanchang'
				})
				.then(res => {
					var array = [];
					for (var key in res.data.shanchang) {
						array.push(res.data.shanchang[key]);
					}
					this.zhuanchang_arry = array;
				});
		},
		get_lvshilist() {
			console.log(this.dizhi);
			this.$http
				.post({
					url: '/mapi/lawyer/lvshilist',
					data: {
						page: this.page,
						shanchangid: this.shanchang_id,
						province: this.sheng,
						city: this.shi,
						type:this.type
					}
				})
				.then(res => {
					this.lslist=this.lslist.concat(res.data.lawyer);
					if (res.data.lawyer.length < 10) {
						this.is_all = true;
					}
				});
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}
.head_center input {
	width: 100%;
	height: 55rpx;
	background-color: #f3f3f3;
	border-radius: 28rpx;
}
.uni-searchbar {
	width: 100%;
	padding: 0;
}
.uni-searchbar__box {
	border-style: none !important;
	height: 55rpx !important;
}
.tab_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16rpx 71rpx;
	background-color: #ffffff;
	position: fixed;
	top: 96rpx;
	width: 100%;
	box-sizing: border-box;
	z-index: 9;
}
.tab_top image {
	width: 16rpx;
	height: 8rpx;
	vertical-align: middle;
	margin-left: 22rpx;
}
.head_right image {
	width: 40rpx;
	height: 41rpx;
}
.lvshi_left image {
	width: 130rpx;
	height: 131rpx;
	border-radius: 100%;
	margin-right: 20rpx;
}
.lvshi_list {
	margin-top: 30rpx;
	background-color: #ffffff;
}
.lvshi_item {
	display: flex;
	position: relative;
	padding: 26rpx 20rpx;
	border-bottom: 2rpx solid #e8e8e8;
}
.lvshi_name image {
	width: 22rpx;
	height: 20rpx;
	margin-left: 11rpx;
}
.zixun {
	position: absolute;
	width: 155rpx;
	height: 36rpx;
		background-color: #0eb77e;
		border-radius: 3rpx;
	text-align: center;
	line-height: 36rpx;
	right: 20rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.zixun_jiage{
	position: absolute;
	width: 155rpx;
	height: 36rpx;
	background-color: #ffffff;
	box-sizing: border-box;
	border: solid 1rpx #0eb77e;
	text-align: center;
	line-height: 34rpx;
	right: 20rpx;
	top: 62rpx;
}
.zixun image {
	width: 23rpx;
	height: 23rpx;
	margin-right: 5rpx;
}
.lvshi_item_fuwu {
	display: flex;
	margin-top: 10rpx;
}
.lvshi_item_fuwu image {
	width: 25rpx;
	height: 23rpx;
	margin-right: 10rpx;
}
.lvshi_item_fuwu text {
	margin: 0 4rpx;
}
.lv_suo {
	margin: 10rpx 0;
	word-break: break-all;
	max-width: 400rpx;
}
.tese {
	background-color: #ffad2b;
	border-radius: 3rpx;
	margin-right: 9rpx;
	padding: 0 6rpx;
	
}
.lvsuo_dizhi{
	word-break: break-all;
}
.lvsuo_dizhi image {
	width: 19rpx;
	height: 20rpx;
	margin-right: 12rpx;
}
.fuwu {
	margin-right: 60rpx;
}
.sousuo {
	width: 100%;
	position: relative;
}
.sou_tishi image {
	width: 25rpx;
	height: 26rpx;
	margin-right: 17rpx;
}
.sou_tishi {
	position: absolute;
	transform: translate(-50%, -50%); /* 50%为自身尺寸的一半 */
	left: 50%;
	top: 50%;
	pointer-events: none;
	display: flex;
	align-items: center;
}
.sousuo input {
	width: 100%;
	height: 55rpx;
	background-color: #f3f3f3;
	border-radius: 28rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
}
</style>
