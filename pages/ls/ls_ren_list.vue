<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">{{ title }}</view>
			<view class=" head_right hei_30_bold"><text @click="add">新增</text></view>
		</view>

		<view class="zi_body ">
			<!-- 媒体报道 -->
			<view class="list" v-if="title == '教育背景'" v-for="(item, index) in jiaoyu_list" @click="jiaoyu_xq(index)">
				<view class="list_left">
					<view class="hei_26 time">{{ item.starttime }}-{{ item.endtime }}</view>
					<view class="hei_28">{{ item.school }}</view>
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			<!-- 工作经历 -->
			<view class="list" v-if="title == '工作经历'" v-for="(item, index) in gongzuo_list" @click="gongzuo_xq(item)">
				<view class="list_left">
					<view class="hei_26 time">{{item.starttime}}-{{item.endtime}}</view>
					<view class="hei_28">{{item.school}}-{{item.zhuanye}}</view>
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			<!-- 社会职务 -->
			<view class="list" v-if="title == '社会职务'" v-for="(item, index) in shehui_list" @click="zhiwu_xq(item.lyinfoid,item.zwstate,item.school,item.zhuanye)">
				<view class="list_left">
					<view class="hei_26 time">{{ item.zwstate==1?'曾任':'现任' }}</view>
					<view class="hei_28">{{item.school}}-{{item.zhuanye}}</view>
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			<!-- 荣誉奖励 -->
			<view class="list" v-if="title == '荣誉奖励'" v-for="(item, index) in rongyu_list" @click="rongyu_xq(item.lyinfoid,item.starttime,item.zhuanye)">
				<view class="list_left">
					<view class="hei_26 time">{{ item.starttime }}</view>
					<view class="hei_28">{{item.zhuanye}}</view>
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			<!-- 媒体报道 -->
			<view class="list" v-if="title == '媒体报道'" v-for="(item, index) in meiti_list" @click="meiti_xq(item.lyinfoid,item.pintai,item.starttime,item.zhuanye)">
				<view class="list_left">
					<view class="hei_26 time">{{ item.starttime }}</view>
					<view class="hei_28">{{item.zhuanye}}</view>
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			<!-- 学术成果 -->
			<view class="list" v-if="title == '学术成果'" v-for="(item, index) in xueshu_list" @click="xueshu_xq(item.lyinfoid,item.leixing,item.lianjie,item.pintai,item.starttime,item.zhuanye)">
				<view class="list_left">
					<view class="hei_26 time">{{ item.starttime }}</view>
					<view class="hei_28">{{item.zhuanye}}</view>
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			jiaoyu_list: [],
			shehui_list:[],
			rongyu_list:[],
			meiti_list:[],
			xueshu_list:[],
			gongzuo_list:[]
			
		};
	},
	created() {},
	onLoad(option) {
		this.title = option.title;
		
	},
	onShow() {
		this.huoqu_list();
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		huoqu_list() {
			if (this.title == '教育背景') {
				this.$http
					.post({
						url: '/mlawyerapi/lawyer/lawyerinfo',
						data: {
							state: 5
						}
					})
					.then(res => {
						this.jiaoyu_list = res.data.lawyerinfo;
					});
			} else if (this.title == '社会职务') {
				
				this.$http
							 .post({
							 	url: '/mlawyerapi/lawyer/lawyerinfo',
							 	data:{
							 		state:6
							 	}
							 })
							 .then(res => {	
							this.shehui_list=res.data.lawyerinfo
							 });
				
				
			}  else if (this.title == '工作经历') {
				
				this.$http
							 .post({
							 	url: '/mlawyerapi/lawyer/lawyerinfo',
							 	data:{
							 		state:11
							 	}
							 })
							 .then(res => {	
							this.gongzuo_list=res.data.lawyerinfo
							 });
				
				
			}else if (this.title == '荣誉奖励') {
				
				this.$http
							 .post({
							 	url: '/mlawyerapi/lawyer/lawyerinfo',
							 	data:{
							 		state:7
							 	}
							 })
							 .then(res => {	
							this.rongyu_list=res.data.lawyerinfo
							 });
				
				
			} else if (this.title == '媒体报道') {
				this.$http
							 .post({
							 	url: '/mlawyerapi/lawyer/lawyerinfo',
							 	data:{
							 		state:8
							 	}
							 })
							 .then(res => {	
							this.meiti_list=res.data.lawyerinfo
							 });
			} else if (this.title == '学术成果') {
				this.$http
							 .post({
							 	url: '/mlawyerapi/lawyer/lawyerinfo',
							 	data:{
							 		state:9
							 	}
							 })
							 .then(res => {	
							this.xueshu_list=res.data.lawyerinfo
							 });
			}
		},

		add() {
			if (this.title == '教育背景') {
				uni.navigateTo({
					url: 'ls_jiaoyu'
				});
			} else if (this.title == '社会职务') {
				uni.navigateTo({
					url: 'ls_zhiwu'
				});
			}else if (this.title == '工作经历') {
				uni.navigateTo({
					url: 'ls_gongzuo'
				});
			} else if (this.title == '荣誉奖励') {
				uni.navigateTo({
					url: 'ls_rongyu'
				});
			} else if (this.title == '媒体报道') {
				uni.navigateTo({
					url: 'ls_meiti'
				});
			} else if (this.title == '学术成果') {
				uni.navigateTo({
					url: 'ls_xueshu'
				});
			}
		},
		jiaoyu_xq(index) {
			
			uni.navigateTo({
				url: 'ls_jiaoyu?index='+index
			});
		},
		zhiwu_xq(id,zhuangtai,jigou) {
			uni.navigateTo({
				url: 'ls_zhiwu?id='+id+'&zhuangtai='+ zhuangtai+'&jigou='+ jigou
			});
		},
		gongzuo_xq(item){
			uni.navigateTo({
				url: 'ls_gongzuo?item='+JSON.stringify(item)
			});
		},
		rongyu_xq(id,time,jigou) {
			uni.navigateTo({
				url: 'ls_rongyu?id='+id+'&time='+ time+'&jigou='+ jigou
			});
		},
		meiti_xq(id,pingtai,time,neirong) {
			uni.navigateTo({
				url: 'ls_meiti?id='+id+'&pingtai='+ pingtai+'&time='+ time+'&neirong='+ neirong
			});
		},
		xueshu_xq(id,leixing,lianjie,pingtai,time,neirong) {
			uni.navigateTo({
				url: 'ls_xueshu?id='+id+'&leixing='+ leixing+'&lianjie='+ lianjie+'&pingtai='+ pingtai+'&time='+ time+'&neirong='+ neirong
			});
		}
	}
};
</script>

<style>
page {
	background-color: #f8f8f8;
}
.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.list {
	padding: 20rpx 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
	position: relative;
	background-color: #ffffff;
}

.list_left {
	max-width: 95%;
}

.list image {
	width: 13rpx;
	height: 23rpx;
}
.time {
	margin-bottom: 10rpx;
}
</style>
