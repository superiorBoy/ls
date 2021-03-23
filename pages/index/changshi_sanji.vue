<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">{{title}}</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			
			<view class="erji_weizhi hui_30_bold">
				<text @click="go_index()">首页</text>	
				<image src="@/static/img/zhishi_weizhi.png" mode=""></image>
				<navigator url="changshi">法律知识</navigator> 
				<image src="@/static/img/zhishi_weizhi.png" mode=""></image>
				<navigator :url="'changshi_erji?typeid='+yi_id">{{yiji_title}} </navigator>
				<image src="@/static/img/zhishi_weizhi.png" mode=""></image>
				<text class="hei_30">{{title}}</text>
			</view>
			<view class="zhishi_list hei_26">
				<text v-for="item in fenlei" :class="['' ,sanji_id==item.knowledgetypeid?'sanji_active': '']" @click="sanji(item.knowledgetypeid)">{{item.knowledgetypename}}</text>
			</view>
			
			<view class="zhishi_title hei_28_bold">
				<text></text>{{title}}
			</view>
			<view class="tuijian_list">
				<view class="tuijian_item" v-for="item in remenlist" @click="go_xq(item.knowledgeid)">
					<image :src="img_url+item.pic" mode="" class="tuijan_img"></image>
					<view class="tuijian_item_right">
						<view class="tuijian_item_top hei_26">{{ item.title }}</view>
						<view class="tuijian_item_txt qian_22"><u-parse :content="item.information"></u-parse></view>
						<view class="tuijian_item_bottom qian_24">
							<view class="tuijian_item_time ">
								<image src="@/static/img/changshi_time.png" mode=""></image>
								{{ item.addtime | timeStamp }}
							</view>
							<view class="tuijian_item_liulan">
								<image src="@/static/img/changshi_liulan.png" mode=""></image>
								{{ item.readnum }}浏览
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
			
			<view class="fenye">
				<view class="fenye_pre hui_28" @click="shangyiye">
					<image src="@/static/img/shangye.png" mode="heightFix"></image>上一页
				</view>
				<view class="fenye_num hui_26">
					<text class="lv_26">{{page+1}}</text>/{{yeshu}}
				</view>
				<view class="fenye_next hei_28" @click="xiayiye">
					下一页<image src="@/static/img/xiaye.png" mode="heightFix"></image>
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
import uParse from '@/components/feng-parse/parse.vue';
export default {
	data() {
		return {
			zhifu: 1,
			img_url: uni.getStorageSync('img_url'),
			page: 0,
			is_all: false,
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
			remenlist: [],
			zuixin_list: [],
			erji_id:'',
			title:'',
			yiji_title:'',
			yi_id:'',
			sanji_id:'',
			yeshu:0
		};
	},
	components: {
		uParse
	},
	created() {},
	onLoad(option) {
		this.erji_id=option.erjiid
		// this.title=option.name
		// this.yiji_title=option.yiji
		this.yi_id=option.yi_id
		this.huoqu_fenlei();
		this.huoqu_remen();
		this.huiqu_num()
		// this.huoqu_zuixin()
		// 获取分类title
			  this.$http
					.post({
						url: '/mapi/index/knowledgetype',
					})
					.then(res => {
							for (var item in res.data.type[2]){
								if(res.data.type[2][item].knowledgetypeid==option.erjiid)
								this.title=res.data.type[2][item].knowledgetypename
							}
							for (var item in res.data.type[1]){
								if(res.data.type[1][item].knowledgetypeid==option.yi_id)
								this.yiji_title=res.data.type[1][item].knowledgetypename
							}
					});
	
	},

	methods: {
		//上拉加载
		// onReachBottom() {
		// 	var that = this;
		// 	if (that.is_all) {
		// 		uni.showToast({
		// 			title: '没有更多内容了',
		// 			duration: 2000,
		// 			icon: 'none'
		// 		});
		// 		uni.stopPullDownRefresh();
		// 		return false;
		// 	} else {
		// 		that.page++;
		// 		// if(that.active==0){
		// 		that.huoqu_remen();
		// 		// }else{
		// 		// 	that.huoqu_zuixin()
		// 		// }
		// 	}
		// },

		navigateBack() {
			uni.navigateBack();
		},
		swiperchang(e) {
			this.current = e.detail.current;
			
			
		},
		// jiedan_qiehuan(index) {
		// 	this.active = index;
		// 	this.is_all=false
		// },
		go_xq(knowledgeid) {
			uni.navigateTo({
				url: 'changshi_xq?knowledgeid=' + knowledgeid+'&yiid=' + this.yi_id + '&erid='+this.erji_id
			});
		},

		// 获取分类
		huoqu_fenlei() {
			this.$http
				.post({
					url: '/mapi/index/knowledgetype',
					data:{
						knowledgetypeid:this.erji_id
					}
				})
				.then(res => {
					
					this.fenlei = res.data.type[3];
				});
		},
	// 获取回复总数
		huiqu_num(){
			this.$http
				.post({
					url: '/mapi/index/knowledgecount',
					data: {
						knowledgetypeid:this.yi_id,
						knowledgetypeid1:this.erji_id,
						knowledgetypeid2:this.sanji_id
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.yeshu= Math.ceil(res.data.count/10); 
					}
				});	
		},

		// 获取热门
		huoqu_remen() {
			this.$http
				.post({
					url: '/mapi/index/knowledge',
					data: {
						page: this.page,
						type: 1,
						knowledgetypeid:this.yi_id,
						knowledgetypeid1:this.erji_id,
						knowledgetypeid2:this.sanji_id
					}
				})
				.then(res => {
					if (res.data.knowledgelist < 10) {
						this.is_all = true;
					}
					// console.log(res.data.knowledgelist);
					this.remenlist =res.data.knowledgelist;
				});
		},

		go_index() {
			uni.switchTab({
				url: 'index'
			});
		},
		// 三级切换
		sanji(id){
			this.sanji_id=id
			this.remenlist=[]
			this.page=0
			this.is_all=false
			this.huoqu_remen()
			this.huiqu_num()
		},
		shangyiye(){
			if(this.page==0){
				uni.showToast({
					title: '暂无更多',
					duration: 2000,
					icon: 'none'
				});
				return false
			}else{
				this.page--
				this.huoqu_remen()
			}
		},
		xiayiye(){
			if(this.is_all){
				uni.showToast({
					title: '暂无更多',
					duration: 2000,
					icon: 'none'
				});
				return false
			}else{
				this.page++
				this.huoqu_remen()
			}
		
		},
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
	background-color: #F9F9F9;
}
.erji_top {
	height: 200rpx;
	position: relative;
}
.erji_top_body {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	text-align: center;
	z-index: 9;
	padding-top: 55rpx;
}
.erji_top_first {
	margin-bottom: 20rpx;
}
.erji_top image {
	width: 100%;
	height: 100%;
}
.zhishi_item {
	height: 136rpx;
	width: 25%;
	border-right: 2rpx solid #f7f7f7;
	border-bottom: 2rpx solid #f7f7f7;
	box-sizing: border-box;
	text-align: center;
	padding: 20rpx 0;
}
.zhishi_item image {
	width: 34rpx;
	height: 34rpx;
	margin-bottom: 15rpx;
}
.zhishi_list {
	background-color: #ffffff;
	display: flex;
	flex-wrap: wrap;
	
	border-top: 1px solid #f7f7f7;
	padding: 40rpx  30rpx 0;
}
.zhishi_list text{
	display: inline-block;
		height: 60rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		border: solid 1rpx #dcdcdc;
		padding: 0 30rpx;
		line-height: 60rpx;
		text-align: center;
		margin: 0 20rpx 20rpx 0;
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
.zhishi_title {
	display: flex;
	align-items: center;
	background-color: #ffffff;
	border-bottom: 2rpx solid #f7f7f7;
	padding: 40rpx 0 28rpx 31rpx;
	margin-top: 20rpx;
}
.zhishi_title text {
	width: 6rpx;
		height: 24rpx;
		background-color: #fd4358;
	margin-right: 9rpx;
}
.erji_weizhi {
	height: 70rpx;
	background-color: #f9f9f9;
	display: flex;
	align-items: center;
	/* margin: 20rpx 0; */
	padding-left: 30rpx;
	border-bottom: 20rpx solid #FFFFFF;
}
.erji_weizhi image {
	margin: 0 13rpx 0 20rpx;
	width: 24rpx;
	height: 100%;
}
.sanji_active{
	background-color: #fd4358 !important;
	color: #FFFFFF;
}
.fenye{
	display: flex;
	align-items: center;
	justify-content: space-between;
		height: 89rpx;
		background-color: #fcfcfc;
		padding: 0 31rpx;
}
.fenye_num{
		height: 41rpx;
		border-radius: 20rpx;
		border: solid 1rpx #dcdcdc;
		padding: 0 40rpx;
		line-height: 41rpx;
}
.fenye_pre image{
	margin-right: 4rpx;
}
.fenye image{
	height: 20rpx;
}
.fenye_next image{
	margin-left: 4rpx;
}
</style>
