<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">法律知识</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="lunbo">
				<swiper
					:indicator-dots="false"
					:autoplay="false"
					circular="true"
					easing-function="default"
					:interval="3000"
					indicator-color="#c7c7c7"
					indicator-active-color="#ffffff"
					:duration="500"
					class="swiper"
					@change="swiperchang"
				>
					<swiper-item v-for="item in banner">
						<view class="swiper-item"><image :src="item.img"></image></view>

						<view class="lun_txt">
							<text class="over_fl">{{ item.text }}</text>
							<view class="lun_num">{{ current + 1 }}/{{ banner.length }}</view>
						</view>
					</swiper-item>
				</swiper>
			</view>

			<view class="zhishi_list">
				<view class="zhishi_item hei_30" v-for="item in fenlei" @click="go_erji(item.knowledgetypeid,item.knowledgetypename)">
					<image :src=img_url+item.pic mode="widthFix" v-if="item && item.pic"></image>
					<view v-if="item && item.knowledgetypename">{{ item.knowledgetypename }}</view>
				</view>
				<view class="zhishi_item hei_30" @click="go_index()">
					<image src='@/static/img/zhishi_back.png' mode="widthFix" ></image>
					<view >返回首页</view>
				</view>
			</view>
			<!-- <view class="more_fenlei qian_26">更多分类></view> -->
		<!-- 	<view class="jiedan_tab qian_30_bold">
				<view :class="['jiedan_tab_item', index == active ? 'jiedan_tab_item_active' : '']" v-for="(tab, index) in tabs" @click="jiedan_qiehuan(index)">{{ tab }}</view>
			</view> -->
			<view class="zhishi_title hei_28">
				<image src="@/static/img/zhishi_huo.png" mode=""></image>热点知识
			</view>
			<view class="tuijian_list" >
				<view class="tuijian_item" v-for="item in remenlist" @click="go_xq(item.knowledgeid)">
					<image src="@/static/img/fei2.png" mode="" class="tuijan_img"></image>
					<view class="tuijian_item_right">
						<view class="tuijian_item_top hei_26">{{item.title}}</view>
						<view class="tuijian_item_txt qian_22">
							<u-parse :content="item.information" ></u-parse>
							
							</view>
						<view class="tuijian_item_bottom qian_24">
							<view class="tuijian_item_time ">
								<image src="@/static/img/changshi_time.png" mode=""></image>
								{{ item.addtime | timeStamp }}
							</view>
							<view class="tuijian_item_liulan">
								<image src="@/static/img/changshi_liulan.png" mode=""></image>
								{{item.readnum}}浏览
							</view>
						</view>
					</view>
				</view>
			</view>
		<!-- 	<view class="zuixin_list" v-if="active == 1">
				<view class="zuixin_item" v-for="item in zuixin_list"  @click="go_xq(item.knowledgeid)">
					<view class="zuixin_item_top hei_26">{{item.title}}</view>
					<view class="zuixin_item_bottom qian_22">
						<u-parse :content="item.information" ></u-parse>
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import uParse from "@/components/feng-parse/parse.vue"
export default {
	data() {
		return {
			zhifu: 1,
			img_url: uni.getStorageSync('img_url'),
			page:0,
			is_all:false,
			banner: [
				{
					img: '../../static/img/changshi_banner.png',
					text: '外商投资法解读'
				},
				{
					img: '../../static/img/changshi_banner.png',
					text: '外商投资法解读2'
				},
				{
					img: '../../static/img/changshi_banner.png',
					text: '外商投资法解读3'
				},
				{
					img: '../../static/img/changshi_banner.png',
					text: '外商投资法解读4'
				},
				{
					img: '../../static/img/changshi_banner.png',
					text: '外商投资法解读5'
				}
			],
			fenlei: [],
			btnnum: 0,
			current: 1,
			tabs: ['热点推荐', '最新知识'],
			active: 0,
			remenlist:[],
			zuixin_list:[]
		};
	},
	  components:{
	            uParse
	        },
	created() {},
	onLoad(option) {
		this.huoqu_fenlei()
		this.huoqu_remen()
		// this.huoqu_zuixin()
	},
	//下拉刷新
	onPullDownRefresh: function() {
		// this.getList();
	
			this.page=0
			
			this.is_all=false
			// if(that.active==0){
				this.zixun_list=[]
				that.huoqu_remen()
			// }else{
			// 	this.remenlist=[]
			// 	that.huoqu_zuixin()
			// }
	
	},
	methods: {
		//上拉加载
		onReachBottom() {
		var that=this
			if(that.is_all){
				uni.showToast({
					title: '没有更多内容了',
					duration: 2000,
					icon: "none"
				});
				uni.stopPullDownRefresh();
				return false
			}else{
				that.page++
				// if(that.active==0){
					that.huoqu_remen()
				// }else{
				// 	that.huoqu_zuixin()
				// }
				
			}
		},
		
		navigateBack() {
			uni.navigateBack();
		},
		swiperchang(e) {
			this.current = e.detail.current;
			console.log(this.current);
			console.log(this.banner.length);
		},
		// jiedan_qiehuan(index) {
		// 	this.active = index;
		// 	this.is_all=false
		// },
		go_xq(knowledgeid) {
			uni.navigateTo({
				url: 'changshi_xq?knowledgeid='+knowledgeid
			});
		},
		// 跳转二级
		go_erji(id,name){
			
			uni.navigateTo({
				url: 'changshi_erji?typeid='+id+'&name='+name
			});
		},
		
		// 获取分类
		huoqu_fenlei(){
			
			  this.$http
					.post({
						url: '/mapi/index/knowledgetype',
					})
					.then(res => {
							this.fenlei=res.data.type[1]
					});

		},

		// 获取热门
		huoqu_remen(){
			
			  this.$http
					.post({
						url: '/mapi/index/knowledge',
						data:{
							page:this.page,
							type:2
						}
					})
					.then(res => {
						if(res.data.knowledgelist<10){
							this.is_all=true
						}
						console.log(res.data.knowledgelist)
						this.remenlist=this.remenlist.concat(res.data.knowledgelist);
							
					});
		},
	
		go_index(){
			uni.switchTab({
				url:'index'
			})
		}
	},
	filters: {
		timeStamp: function(value) {
			if(value==null){
				return 'null'
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
uni-swiper {
	height: 330rpx !important;
}
.lunbo {
	position: relative;
}

.lun_txt {
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom: 20rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	width: 100%;
	font-size: 38rpx;
	color: #ffffff;
}

.lun_num {
	width: 124rpx;
	height: 66rpx;

	border-radius: 33rpx;
	background-color: rgba(0, 0, 0, 0.4);
	line-height: 66rpx;
	text-align: center;
}
.swiper-item {
	height: 330rpx;
}
.swiper-item image {
	width: 100%;
	height: 100%;
}
.zhishi_item {
	display: flex;
	height: 136rpx;
	width: 33.33%;
	border-right: 2rpx solid #f7f7f7;
	border-bottom: 2rpx solid #f7f7f7;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
}
.zhishi_item image {
	width: 34rpx;
	height: 34rpx;
	margin-right: 19rpx;
}
.zhishi_list {
	background-color: #ffffff;
	display: flex;
	flex-wrap: wrap;
	margin-top: 20rpx;
}
.more_fenlei {
	line-height: 80rpx;
	text-align: center;
}
.jiedan_tab {
	height: 87rpx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ffffff;
	border-bottom: 2rpx solid #e8e8e8;
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
.tuijan_img {
	width: 200rpx;
	height: 120rpx;
	margin-right: 23rpx;
}

.tuijian_list {
	background-color: #ffffff;
}
.tuijian_item {
	display: flex;
	padding: 20rpx 30rpx;

	border-bottom: 2rpx solid #f7f7f7;
}
.tuijian_item_top {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
}

.over_fl {
	max-width: 500rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.tuijian_item_txt {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
	margin: 14rpx 0;
	max-height: 28rpx;
}
.tuijian_item_right {
	width: 70%;
}
.tuijian_item_bottom {
	display: flex;
}
.tuijian_item_time image {
	width: 20rpx;
	height: 22rpx;
	margin-right: 12rpx;
}
.tuijian_item_time {
	margin-right: 100rpx;
}
.tuijian_item_liulan image {
	width: 30rpx;
	height: 21rpx;
	margin-right: 9rpx;
}
.zuixin_list {
	background-color: #ffffff;
}
.zuixin_item {
	padding: 20rpx 30rpx;
	border-bottom: 2rpx solid #f7f7f7;
}
.zuixin_item_top {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-bottom: 10rpx;
}
.zuixin_item_bottom {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-height: 28rpx;
}
.zhishi_title{
	display: flex;
	align-items: center;
	background-color: #FFFFFF;
	border-bottom: 2rpx solid #d9d9d9;
	padding: 40rpx 0 28rpx 31rpx;
	margin-top: 20rpx;
}
.zhishi_title image{
		width: 29rpx;
		height: 33rpx;
		margin-right: 13rpx;
}
</style>
