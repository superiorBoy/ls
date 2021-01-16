<template>
	<view class="">
		<view class="head">
			<view class="head_back"><image src="@/static/img/bai_back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center bai_38_bold">我的团队</view>
			<view class=" head_right"></view>
		</view>
		<view class="zi_body">
			<view class="tuandui_top">
				<view class="tuijian bai_20">
					<image src="@/static/img/jian.png" mode=""></image>
					{{tuandui.recommended?'您的推荐人':"暂无推荐人"}}
				</view>
				
				<view class="zanwu bai_26" @click="tianjia()" v-if="!tuandui.recommended">
					<image src="@/static/img/jia_tuijian.png" mode=""></image>添加推荐人
				</view>
				
				<view class="tuijian_ren" v-if="tuandui.recommended">
					<view class="tuijian_ren_left bai_26">
						<image :src="img_url+tuandui.recommended.photourl" mode=""></image>
						{{tuandui.recommended.nickname}}
					</view>
					<view class="tuijian_ren_right bai_22" @click="go_chat(tuandui.recommended.userid)">
						联系推荐人
						<text>{{tuandui.recommended.mobile}}</text>
						<image src="@/static/img/tuandui_lianxi.png" mode=""></image>
					</view>
				</view>

				<view class="tuandui_xuan" v-if="tuandui!=''">
					<view :class="['tuandui_xuan_item',active==1?'xuanzhong':'']" @click="xuan(1)">
						<view class="num">{{tuandui.count.invitecount}}</view>
						<view class="tuandui_xuan_txt">直属粉丝</view>
					</view>
					<view :class="['tuandui_xuan_item',active==2?'xuanzhong':'']"@click="xuan(2)">
						<view class="num">{{tuandui.count.tuanzhangcount}}</view>
						<view class="tuandui_xuan_txt">下级团长</view>
					</view>
					<view :class="['tuandui_xuan_item',active==3?'xuanzhong':'']"  @click="xuan(3)">
						<view class="num">{{tuandui.count.count}}</view>
						<view class="tuandui_xuan_txt">全部</view>
					</view>
				</view>
			</view>
			<view class="tuandui_num" v-if="tuandui!=''" >
				<view class="tuandui_num_item">
					<view class="tuandui_num_item_top hei_30">{{tuandui.count.today}}</view>
					<view class="tuandui_num_item_bottom hei_24">今日新增</view>
				</view>
				<view class="tuandui_num_item">
					<view class="tuandui_num_item_top hei_30">{{tuandui.count.yesterday}}</view>
					<view class="tuandui_num_item_bottom hei_24">昨日新增</view>
				</view>
				<view class="tuandui_num_item">
					<view class="tuandui_num_item_top hei_30">{{tuandui.count.gen2}}</view>
					<view class="tuandui_num_item_bottom hei_24">二代粉丝</view>
				</view>
				<view class="tuandui_num_item">
					<view class="tuandui_num_item_top hei_30">{{tuandui.count.gen2after}}</view>
					<view class="tuandui_num_item_bottom hei_24">二代以后</view>
				</view>
			</view>

			<view class="tuandui_list">
				<view class="tuandui_item" v-for="item in list">
					<view class="tuandui_item_left">
						<image :src="img_url+item.photourl" mode="" class="tuandui_item_tx"></image>
						<view class="tuandui_item_left_r">
							<view class="hei_22 tuandui_item_left_r_name">
								{{item.nickname}}
								<!-- <image src="@/static/img/huiyuan.png" mode=""></image> -->
								<text class="tuanzhang " v-if="item.istuanzhang==1">团长</text>
							</view>
							<view class="qian_20">
								加入时间:{{ item.addtime | timeStamp }}
								<text class="lv_20 dengji">{{item.grade==1?'普通用户':'律师'}}</text>
							</view>
						</view>
					</view>
					<view class="tuandui_item_right hui_22">
						<view class="ding_num">
							直属粉丝
							<text>{{item.gan1}}</text>
						</view>
						<view class="">
							订单数量
							<text>{{item.consultcount}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class="dixian qian_20">我可是有底线的</view>
			
			<view class="add_tuijian" v-if="is_tan">
				<view class="add_tuijian_title hei_24">
					添加推荐人
				</view>
				<view class="add_tuijian_shuru">
					<input type="text" value="" placeholder="输入推荐码" class="hei_20" v-model="shuru"/>
				</view>
				<view class="add_tuijian_bottom">
					<view class="quding bai_22" @click="queren">
						确认
					</view>
					<view class="quxiao hei_22" @click="quxiao">
						取消
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	created() {},
	onShow() {},

	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			active:1,
			shuru:'',
			is_tan:false,
			page:0,
			list:[],
			is_all:false,
			tuandui:''
		};
	},
	onLoad() {
		this.huoqu_tuandui()
	this.huoqu_list()
	},
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
				this.huoqu_list()
			}
		},
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_tuandui(){
			this.$http
				.post({
					url: '/mapi/user/yaoqingjilu'
				})
				.then(res => {
					this.tuandui=res.data
					
				});
		},
		huoqu_list(){
			this.$http
				.post({
					url: '/mapi/user/invitelist',
					data:{
						page:this.page,
						state:this.active
					}
			
				})
				.then(res => {
					
					this.list=this.list.concat(res.data.invitelist)
					if (res.data.invitelist.length < 10) {
						this.is_all = true;
					}
				});
		},
		xuan(index){
			this.active=index
			
			this.page=0
			this.is_all=false
			this.list=[]
			this.huoqu_list()
		},
		queren(){
			
			if(this.shuru==''){
				uni.showToast({
					title: '请输入微信号',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
			console.log(this.shuru)
			
			
			this.$http
				.post({
					url: '/mapi/user/addline',
					data:{
						randcode:this.shuru
					}
			
				})
				.then(res => {
					if(res.code==0){
						
						uni.showToast({
							title: '添加成功',
							duration: 2000
						});	
						this.huoqu_tuandui()
						this.is_tan=false
					}

				});
			
			
			
			
		},
		go_chat(id){
			uni.navigateTo({
				url:'chat?lsid='+id
			})
		},
		quxiao(){
			this.is_tan=false
		},
		tianjia(){
			this.is_tan=true
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
.head {
	background-color: #0eb77e;
	border-bottom: 2rpx solid #ffffff;
}
.tuijian {
	display: flex;
	align-items: center;
	height: 77rpx;
}
.tuijian image {
	width: 22rpx;
	height: 24rpx;
	margin-right: 8rpx;
}
.tuandui_top {
	background-color: #0eb77e;
	height: 290rpx;
	padding: 0 44rpx;
}
.tuijian_ren_left {
	display: flex;
	align-items: center;
}
.tuijian_ren_left image {
	width: 80rpx;
	height: 80rpx;
	border-radius: 100%;
	margin-right: 20rpx;
}
.tuijian_ren_right {
	display: flex;
	align-items: center;
}

.tuijian_ren_right image {
	width: 18rpx;
	height: 18rpx;
}
.tuijian_ren {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 30rpx;
}
.tuijian_ren_right text {
	margin: 0 9rpx;
}
.tuandui_xuan {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.tuandui_xuan_item {
	width: 197rpx;
	height: 104rpx;
	text-align: center;
	color: #ffffff;
	background-color: #3ec598;
	border-radius: 10rpx 10rpx 0rpx 0rpx;
	padding-top: 10rpx;
	box-sizing: border-box;
}
.num {
	font-size: 30rpx;
	margin-bottom: 10rpx;
}
.tuandui_xuan_txt {
	font-size: 22rpx;
}
.xuanzhong {
	background-color: #ffffff;
	color: #333333;
}
.tuandui_num {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 125rpx;
	background-color: #ffffff;
}
.tuandui_num_item {
	text-align: center;
	width: 25%;
	position: relative;
}
.tuandui_num_item_top {
	margin-bottom: 6rpx;
}
.tuandui_num_item::before {
	display: inline-block;
	content: '';
	height: 41rpx;
	background-color: #f5f5f5;
	width: 2rpx;
	position: absolute;
	right: 0;
	top: 20rpx;
}
.tuandui_item_tx {
	width: 72rpx;
	height: 72rpx;
	margin-right: 20rpx;
	border-radius: 100%;
}
.tuandui_item_left_r image {
	width: 104rpx;
	height: 26rpx;
	margin-left: 14rpx;
}
.tuandui_item_left_r_name {
	margin-bottom: 10rpx;
}
.tuandui_item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	padding: 28rpx 20rpx;
	border-radius: 10rpx;
	margin-bottom: 20rpx;
}
.tuandui_item_left {
	display: flex;
	align-items: center;
}
.tuandui_list {
	padding: 15rpx 20rpx 0;
}
.ding_num {
	margin-bottom: 10rpx;
}
.dengji {
	margin-left: 25rpx;
}
.tuandui_item_right text {
	margin-left: 10rpx;
}
.dixian {
	text-align: center;
}
.zanwu{
	display: flex;
	align-items: center;
	margin-bottom: 30rpx;
}
.zanwu image{
width: 80rpx;
	height: 80rpx;	
	margin-right: 20rpx;
}
.add_tuijian_bottom{
	display: flex;
	align-items: center;
	justify-content: center;
}
.add_tuijian{
		width: 544rpx;
		height: 327rpx;
		background-color: #ffffff;
		box-shadow: 4rpx 6rpx 25rpx 4rpx 
			rgba(39, 39, 39, 0.26);
		border-radius: 10rpx;
		position: absolute;
		top: 300rpx;
		left: 50%;
		transform: translate(-50%,0);
		padding: 30rpx 30rpx 30rpx 40rpx;
		box-sizing: border-box;
}
.add_tuijian_title{
	text-align: center;
}
.quding{
		width: 124rpx;
		height: 40rpx;
		background-color: #0eb77e;
		border-radius: 5rpx;
		text-align: center;
		line-height: 40rpx;
         margin-right: 35rpx;
}
	
.quxiao{
		width: 124rpx;
		height: 40rpx;
		background-color: #bfbfbf;
		border-radius: 5rpx;
		text-align: center;
		line-height: 40rpx;
}
.add_tuijian_shuru{
	border-top: 2rpx solid #eeeeee;
	height: 90rpx;
	display: flex;
	align-items: center;
	margin: 20rpx 0 55rpx;
	border-bottom: 2rpx solid #eeeeee;
}
.tuanzhang{
	margin-left: 10rpx;
	color: #b19771;
	display: inline-block;
	padding: 4rpx 10rpx;
	height: 26rpx;
	line-height: 26rpx;
	border-radius: 10rpx;
	background-color: #333333;
	font-size: 20rpx;
	
		
}
</style>
