<template>
	<view class="body">
		<view class="head">
			<view class="sousuo">
				<image src="@/static/img/sousuo.png" mode="" />
				<input type="text" value="" confirm-type="search" class="hei_24" @confirm="search" v-model="sou_txt"  placeholder="输入您要查找的问题"/>
		
			</view>
			<view class=" head_right bai_30_bold tiwen_btn"><navigator url="tiwen"><image src="@/static/img/tiwen_xie.png" mode=""></image>我要提问</navigator></view>
		</view>
        <view class="tab_top hui_26">
        	<pickerAddress2 @change="change" class="aaaaaa">
        		{{ dizhi }}
        		<image src="@/static/img/shaixuan.png" mode=""></image>
        	</pickerAddress2>
        
        	<picker mode="selector" :range="zhuanchang_arry" @change="zhuanchang_change" :range-key="'typename'">
        		{{ zhuanchang }}
        		<image src="@/static/img/shaixuan.png" mode=""></image>
        	</picker>
        
        	<picker :range="paixu_arry" @change="paixu_change">
        		{{ paixu }}
        		<image src="@/static/img/shaixuan.png" mode=""></image>
        	</picker>
        </view>
		  
		<view class="zi_body tab_zi_body">
			<view class="jiedan_tab qian_30_bold">
				<view :class="['jiedan_tab_item', index == active ? 'jiedan_tab_item_active' : '']" v-for="(tab, index) in tabs" @click="jiedan_qiehuan(index)">{{ tab }}</view>
			</view>
				<!-- <view class="jingxuan_list" v-if="active == 0">
					<view class="jingxuan_item" v-for="(item, index) in zixun_list" v-if="item.consult_reply">
						<view class="jingxuan_item_top">
							<view class="jingxuan_item_top_left">
								<view class="jingxuan_item_tx" @click="go_zhuye()" >
									<image :src="img_url + item.consult_reply.photourl" mode="" class="tx"></image>
									<image src="@/static/img/renzheng2.png" mode="" class="renzheng"></image>
								</view>
								<view class="">
									<view class="hei_26_bold lv_name">{{ item.consult_reply.nickname }}</view>
									<view class="qian_20">{{ item.addtime | timeStamp }}</view>
								</view>
							</view>
							<button type="" class="lv_24" @click="zixun(item.consult_reply.userid)">咨询我</button>
						</view>
						<view class="wen_da" @click="zixun_xq(item.consultid)">
							<view class="zixun_wen hei_22">{{ item.consult_reply.information }}</view>
							<view class="zixun_da qian_20" @click="zixun_xq(item.consultid)">来自问题：{{ item.information }}</view>
						</view>
					</view>
				</view> -->
			<view class="tiwen_list" >
				<view class="tiwen_item" v-for="(item, index) in zixun_list" @click="zixun_xq(item.consultid)">
					<view class="tiwen_item_top hei_26">{{ item.information }}</view>
					<view class="tiwen_item_center qian_22">
						<view class="tiwen_item_shijian">
							<image src="@/static/lsimg/shijian_icon.png" mode=""></image>
							
							 {{active==0?item.replytime:item.addtime | timeStamp }}
						</view>
						<view class="tiwen_item_biaoqian" v-if="fenlei != ''">
							<image src="@/static/img/biaoqian.png" mode=""></image>
							{{ fenlei[item.typeid].typename }}
						</view>
						<view class="tiwen_item_dizhi">
							<image src="@/static/img/dizhi.png" mode=""></image>
							{{ item.province }}-{{ item.city }}
						</view>
					</view>
				</view>
			</view>

		
		</view>
	</view>
</template>

<script>
	import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
export default {
	components: {
		
		pickerAddress2
	},
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			tabs: ['最新解答', '最新咨询'],
			active: 0,
			zixun_list: [],
			page: 0,
			fenlei: '',
			is_all: false,
			zixun_state: 2,
			dizhi: '不限地区',
			zhuanchang: '问题分类',
			zhuanchang_arry: [],
			paixu: '综合排序',
			sou_txt: '',
			tishi: true,
			paixu_arry: ['综合排序', '最新排序', '热门排序'],
			shanchang_id:'',
			sheng:'',
			shi:''
		};
	},
	created() {},
	//下拉刷新
	onPullDownRefresh: function() {
		// this.getList();
		this.page = 0;
		this.zixun_list = [];
		this.is_all = false;
		this.huoqu();
	},
	// stopPullDownRefresh:function(){

	// },
	onShow() {
		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
				
				var array = [];
				for (var key in res.data.type) {
					array.push(res.data.type[key]);
				}
				this.zhuanchang_arry = array;
				
				
				this.huoqu();
			});
			
		
		
			
	},
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
				this.huoqu();
			}
		},
	
		// 地区选择
		change(data) {
			console.log(data);
			// this.dizhi = data.data.join('')
			this.sheng = data.data[0];
			this.shi = data.data[1];
			this.dizhi = this.sheng + '-' + this.shi;
			this.page = 0;
			this.zixun_list = [];
			this.is_all = false;
			this.huoqu();
		},
		// 专长选择
		zhuanchang_change(e) {
			this.zhuanchang = this.zhuanchang_arry[e.detail.value].typename;
			this.shanchang_id = this.zhuanchang_arry[e.detail.value].typeid;
			this.page = 0;
			this.zixun_list = [];
			this.is_all = false;
			this.huoqu();
			console.log(this.shanchang_id);
		},
		// 排序选择
		paixu_change(e) {
			this.paixu = this.paixu_arry[e.detail.value];
		},
		// 按键搜索
		search(e) {
			console.log(e.detail.value);
		},
		tochat(id,mobile) {
			uni.navigateTo({
				url: 'zaixian_wen?user=' + id+'&mobile='+mobile
			});
		},
		navigateBack() {
			uni.navigateBack();
		},

		jiedan_qiehuan(index) {
			this.active = index;
			if (index == 0) {
				this.zixun_state = 2;
			}
			if (index == 1) {
				this.zixun_state = 1;
			}
			this.page = 0;
			this.zixun_list = [];
			this.is_all = false;
			this.huoqu();
		},
		//获取最新咨询

		huoqu() {
			this.$http
				.post({
					url: '/mapi/consult/zixunlist',
					data: {
						page: this.page,
						type: this.zixun_state,
						province:this.sheng,
						city:this.shi,
						typeid:this.shanchang_id
					}
				})
				.then(res => {
					console.log(res)
					this.zixun_list = this.zixun_list.concat(res.data.consultlist);
					uni.stopPullDownRefresh();
					if (res.data.consultlist.length < 10) {
						this.is_all = true;
					}
				});
		},
		zixun(id) {
			uni.navigateTo({
				url: 'chat?lawyerid=' + id
			});
		},
		zixun_xq(id) {
			uni.navigateTo({
				url: 'zhuye_zixun_xq?id=' + id
			});
		},
		go_zhuye() {
			uni.navigateTo({
				url: 'ls_zhuye'
			});
		}
	},
	filters: {
		timeStamp: function(value) {
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
	
}

.head_right image {
	width: 40rpx;
	height: 41rpx;
}

.tiwen_item {
	padding: 20rpx 30rpx;
	margin-bottom: 20rpx;
	background-color: #ffffff;
	border-bottom: 2rpx solid #e8e8e8;
	word-break: break-all;
}

.tiwen_item:first-child {
	margin-top: 20rpx;
}

.tiwen_item_center {
	display: flex;
	align-items: center;
	margin: 18rpx 0 10rpx;
}

.tiwen_item_dizhi image {
	width: 18rpx;
	height: 20rpx;
	margin-right: 8rpx;
}
.tiwen_item_biaoqian {
	margin: 0 98rpx 0 50rpx;
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

.tiwen_item_top {
	line-height: 36rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp:3;
	overflow: hidden;
}

.jiedan_tab {
	height: 87rpx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 2rpx solid #e8e8e8;
	border-top: 20rpx solid #F7F7F7;
}

.jiedan_tab_item {
	line-height: 87rpx;
	text-align: center;
	width: 50%;
	height: 87rpx;
	position: relative;
}

.jiedan_tab_item:first-child::before {
	content: '';
	display: inline-block;
	width: 2rpx;
	height: 43rpx;
	background-color: #e5e5e5;
	position: absolute;
	right: 0;
	top: 20rpx;
}

.jiedan_tab_item_active {
	color: #333333;
	font-weight: bold;
}

.jingxuan_item {
	padding: 20rpx 30rpx;
	border-bottom: 2rpx solid #e8e8e8;
}
.jingxuan_item_top {
	display: flex;
	justify-content: space-between;
}
.jingxuan_item_top .tx {
	width: 80rpx;
	height: 81rpx;
	border-radius: 100%;
}
.jingxuan_item_top button {
	width: 136rpx;
	height: 51rpx;
	background-color: #ffffff;
	border-radius: 25rpx;
	border: solid 1rpx #0eb77e;
	line-height: 51rpx;
	margin: 0;
}
.jingxuan_item_top_left {
	display: flex;
}
.jingxuan_item_tx {
	margin-right: 17rpx;
	position: relative;
}
.renzheng {
	width: 20rpx;
	height: 21rpx;
	position: absolute;
	right: 5rpx;
	bottom: 10rpx;
	border: solid 2rpx #ffffff;
	border-radius: 100%;
	background-color: #ffffff;
}
.wen_da {
	padding-left: 96rpx;
}
.zixun_da {
	margin: 10rpx 0 5rpx;
	word-break: break-all;
}
.lv_name {
	margin-bottom: 6rpx;
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
.sousuo {
		width:55%;
	position: relative;
	display: flex;
	align-items: center;
	background-color: #f3f3f3;
	border-radius: 28rpx;
	padding-left: 79rpx;
}
.sousuo image {
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
	padding-left: 20rpx;
	box-sizing: border-box;
}
.tiwen_btn{
		width: 200rpx;
		height: 55rpx;
		background-color: #0eb77e;
		border-radius: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 30rpx;
		position: relative;
}
.tiwen_btn::before{
	content: '';
	display: inline-block;
	position: absolute;
	left: -15rpx;
	width: 1rpx;
		height: 32rpx;
		background-color: #c6c6c6;
}
.tiwen_btn image{
		width: 28rpx;
		height: 29rpx;
		margin-right: 10rpx;
}
</style>
