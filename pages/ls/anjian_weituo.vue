<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">案件委托</view>
			<view class=" head_right"></view>
		</view>
		<view class="tab_top hui_26">
			<text v-for="(item, index) in tab_arry" :class="['', index == active ? 'hong_26_bold' : '']" @click="qiehuan(index)">{{ item }}</text>
		</view>
		<view class="zi_body tab_zi_body">
			<view class="tiwen_list">
				<view class="tiwen_item" v-for="(item, index) in jilu_list">
					<view class="tiwen_item_name">
						<view class="tiwen_item_name_l "><image :src="img_url + item.photourl" mode=""></image></view>
						<view class="tiwen_item_name_r">
							<view class="hui_24 tiwen_item_name_phone">{{ item.mobile }} <text style="margin-left: 20rpx;"><image src="../../static/lsimg/weituo_dihzi.png" mode=""></image><text class="qian_20">{{ item.province }}-{{ item.city }}</text> </text></view>
							<view class=" qian_22">
								{{ item.addtime | timeStamp }}
								
							</view>
						</view>
						<view class="xuanshang_zhuangtai" v-if="item.tiwenstate != 4"><text class=" hong_26">{{item.state==1?'进行中':'已结束'}}</text></view>
					</view>
					<view class="tiwen_item_top hui_26">{{ item.information }}</view>
					<view class="tiwen_item_center qian_22" v-if="item.typeid">
						<view class="tiwen_item_biaoqian" >
							<image src="@/static/img/biaoqian.png" mode=""></image>
							<!-- {{ fenlei[item.typeid].typename }} -->
							{{fenlei[item.typeid].typename}}
						</view>
						<view class="tiwen_item_dizhi">
							<image src="@/static/img/dizhi.png" mode=""></image>
							{{item.name}}{{item.sex==1?'先生':'女士'}}
						</view>

						<view class="tiwen_item_shijian">
							<image src="../../static/lsimg/chat_dianhua_icon.png" mode=""></image>
							{{item.phone}}
						</view>
					</view>

					<view class="huifu_btn">
						<view class="anniu">
							<button type="" class="huifu hong_24" @click="go_chat(item.userid)">联系TA</button>
							<button type="" class="huifu hong_24" @click="xq(item)">详情</button>
						</view>
					</view>
				</view>
			</view>

			<view class="none_list" v-if="jilu_list.length == 0">
				<image src="../../static/img/none_tiwen.png" mode="widthFix"></image>
				<view class="none_list_txt qian_26">暂无委托记录</view>
			</view>
		</view>
	</view>
</template>

<script>


export default {
	onLoad(option) {
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
		
		this.huoqu_list();
	},

	data() {
		return {
			tab_arry: ['全部', '进行中', '已结束'],
			active: '0',
			jilu_list: [],
			page: 0,
			is_all: false,
			img_url: uni.getStorageSync('img_url'),
			fenlei: '',
			state: 1,
		};
	},
	created() {},
	//下拉刷新
	onPullDownRefresh: function() {
		this.page = 0;
		this.jilu_list = [];
        this.is_all=false
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
		go_chat(userid) {
				uni.navigateTo({
					url: 'chat?userid=' + userid
				});
		
			
		},

		// 切换tab
		qiehuan(index) {
			this.active = index;
			this.page = 0;
			this.jilu_list = [];
			this.is_all = false;
			
			this.huoqu_list();
		},

		// 获取提问记录列表
		huoqu_list() {
	
	if(this.active!=0){
		var state=this.active
	}else{
		var state=''
	}

			this.$http
				.post({
					url: '/mlawyerapi/consult/entrustlist',
					data: {
						page: this.page,
						state: state,
					}
				})
				.then(res => {
					this.jilu_list = this.jilu_list.concat(res.data.entrustlist);
					
				
					if (res.data.entrustlist.length < 10) {
						this.is_all = true;
					}
					uni.stopPullDownRefresh();
				});
		},

		xq(item) {
			uni.navigateTo({
				url: 'weituo_xq?item='+JSON.stringify(item)
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
page {
	/* background-color: #f7f7f7; */
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
	background-color: #ffffff;
	border-radius: 28rpx;
	border: solid 2rpx #f43a51;
	border-radius: 28rpx;
	line-height: 56rpx;
	margin: 0;
	display: inline-block;
	text-align: center;
}
.huifu:first-child {
	margin-right: 20rpx;
}
.tiwen_item {
	padding: 20rpx 30rpx 0;
	
	background-color: #ffffff;
	border-top: 20rpx solid #f7f7f7;
}
.tiwen_item:last-child {
	border-bottom: 20rpx solid #f7f7f7;
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
	justify-content: flex-end;
	border-top: 2rpx dashed #c6c6c6;
	height: 110rpx;
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
	word-break: break-all;
	margin: 8rpx 0 18rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
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
	align-items: center;
	margin-top: 20rpx;

	border-top: 2rpx dashed #c6c6c6;
	height: 68rpx;
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
	max-width: 86%;
	line-height: 38rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.tiwen_item_name_l {
	margin-right: 13rpx;
}
.tiwen_item_name_l image {
	width: 66rpx;
	height: 66rpx;
	border-radius: 100%;
}
.tiwen_item_name {
	display: flex;
	align-items: center;
	position: relative;
}
.xuanshang_zhuangtai {
	position: absolute;
	right: 0;
	top: 0;
}

.tiwen_item_name_phone {
	margin: 0rpx 0 2rpx;
}
.tiwen_item_name_phone image{
	width: 18rpx;
		height: 22rpx;
		margin: 0 6rpx 0 22rpx;
}
.none_list {
	text-align: center;
	background-color: #ffffff;
	border-top: 20rpx solid #f7f7f7;
}
.none_list image {
	width: 500rpx;
	margin-bottom: 30rpx;
	margin-top: 150rpx;
}


</style>
