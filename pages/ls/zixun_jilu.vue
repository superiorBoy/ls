<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">咨询记录</view>
			<view class=" head_right"><image src="@/static/lsimg/sousuo.png" mode="" @click="tan"></image></view>
		</view>
		<view class="tab_top hui_26">
			<text v-for="(item, index) in tab_arry" :class="['', index == active ? 'hong_26_bold' : '']" @click="qiehuan(index)">{{ item }}</text>
		</view>
		<view class="zi_body tab_zi_body">
			<view class="zixun_list">
				<view class="zixun_item" v-for="(item, index) in jilu_list">
					<view class="zixun_item_top">
					
					<view class="zixun_item_left">
						<view class="zixun_item_tx"><image :src=img_url+item.photourl mode=""></image></view>
						<view class="zixun_item_xinxi">
							<view class="hei_26">{{item.nickname}}</view>
							<view class="hong_26 zixun_item_feiyong">￥{{item.paymoney}}</view>
							<view class="qian_22 zixun_item_feiyong">{{ item.addtime | timeStamp }}</view>
						</view>
					</view>
                      <view class="zixun_item_right">
					<view :class="['',item.zixunstate == 4?'qian_26_bold':'hong_26_bold']">{{ item.zixunstate == 1 ? '未付款':item.zixunstate == 2?'已付款':item.zixunstate == 3?'接单中':'已完成' }}</view>
                      	<!-- <view class="zixun hong_20" @click="go_chat(item.userid)">
							<image src="@/static/lsimg/xiaoxi.png" mode=""></image>
                      		在线联系
                      	</view> -->
                      </view>
					  </view>
					  <view class="zixun_item_top_bottom" >
					  	
					  	<view class="iten_lianxi hong_26" @click="go_chat(item.userid)">
					  	 	<image src="@/static/lsimg/hong_zaixian.png" mode=""></image>在线联系
					  	</view>
					  </view>
				</view>
			</view>
		</view>

		<uni-popup type="bottom" ref="popup">
			<view class="tan">
				<view class="tan_title hei_30">查询条件</view>
			<!-- 	<view class="tan_list hei_26">
					<view class="tan_list_top">
						<text>电话号码</text>
						<input type="text" value="" placeholder="" v-model="dianhua" />
					</view>
				</view> -->
				<view class="tan_list hei_26">
					<view class="tan_list_top">
						<text>咨询金额</text>
						<input type="text" value="" placeholder="0.00" v-model="name" />
					</view>
				</view>

				<view class="tan_buttom ">
					<button type="" class="quxiao hong_30" @click="quxiao_btn">取消搜索</button>
					<button type="" class="queren bai_30" @click="queding_btn">确认搜索</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import unpopup from '@/components/uni-popup/uni-popup-share.vue';

export default {
	components: {
		unpopup
	},

	onShow() {},

	data() {
		return {
			tab_arry: ['全部', '未付款', '已付款','接单中','已完成'],
			active: '0',
			zhuangtai: '0',
			dianhua: '',
			name: '',
			jilu_list:[],
			page:0,
			is_all:false,
			img_url: uni.getStorageSync('img_url'),
			state:''
			
		};
	},
	onLoad() {
		this.huoqu_list()	
	},
	created() {},
	//下拉刷新
	onPullDownRefresh: function() {
		this.page=0
		this.jilu_list=[]
		this.is_all=false
		this.dianhua='',
		this.name='',
		this.huoqu_list()
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
				this.huoqu_list()
			}
		},
		navigateBack() {
			uni.navigateBack();
		},
		// 获取记录列表
		huoqu_list(){
			this.$http
				.post({
					url: '/mlawyerapi/consult/zixun_jilu',
					data:{
						page: this.page,
						jine:this.name,
						state:this.state
					}
				})
				.then(res => {
					if(res.data.consult<10){
						this.is_all=true
					}
					this.jilu_list=this.jilu_list.concat(res.data.consult);
					
				});
			
		},
		// 切换tab
		qiehuan(index) {
			this.active = index;
			if(index==0){
				this.state=''
			}else{
				this.state=index
			}
			// if (index == 1) {
			// 	this.zhuangtai = 1;
			// } else {
			// 	this.zhuangtai = 0;
			// }

			this.page=0
			this.jilu_list=[]
			this.is_all=false
			this.dianhua='',
			this.name='',
			this.huoqu_list()
		},
		huifu() {
			// this.$refs.huifu.open()
		},
		// 底部弹窗
		tan() {
			this.$refs.popup.open();
		},

		// 取消搜索
		quxiao_btn() {
			this.name = ''
			this.dianhua = ''
			this.$refs.popup.close();
		},
		// 确定搜索
		queding_btn() {
			console.log(this.jine, this.name);
			this.$refs.popup.close();
			this.page=0
			this.jilu_list=[]
			this.is_all=false
			this.huoqu_list()
		},
		go_chat(id){
			uni.navigateTo({
				url:'chat?userid='+id
			})
		},
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
	min-height: 100%;
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

.zixun_item_tx image {
	width: 80rpx;
	height: 81rpx;
	box-sizing: border-box;
	margin-right: 18rpx;
	border-radius: 100%;
}

.zixun_item {

	background-color: #ffffff;
	margin-bottom: 20rpx;
	justify-content: space-between;
	padding: 30rpx 49rpx 0rpx 30rpx;
	box-sizing: border-box;
}
.zixun_item_top{
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
}
.zixun_item:first-child {
	margin-top: 20rpx;
}

.zixun_item_left {
	display: flex;
}

.zixun_item_feiyong {
	margin: 18rpx 0;
}

.item_zhuangtai {
	width: 164rpx;
	height: 50rpx;

	border-radius: 5rpx;
	/* -moz-transform: rotate(-10deg); */
	/* -webkit-transform: rotate(-10deg); */
	text-align: center;
	line-height: 46rpx;
}

.zhengzai {
	background-color: #f43a51;
}

.jieshu {
	color: #999999;
	background-color: #dee0e2;
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

.tan_list input {
	text-align: right;
}

.tan_buttom {
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 120rpx;
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
	.daifu{
			border: solid 1px #f43a51;
			color:#f43a51 ;
	}
	.yifu{
		border: solid 1px #0eb77e;
		color: #0eb77e;
	}
	.zixun {
		width: 164rpx;
		height: 44rpx;
		background-color: #ffffff;
		border-radius: 22rpx;
		border: solid 1rpx #f43a51;
		text-align: center;
		line-height: 44rpx;
		margin-top: 10rpx;
		
	}
	.zixun image {
		width: 18rpx;
		height: 18rpx;
		margin-right: 5rpx;
	}
	.zixun_item_leixing{
		
		margin: 15rpx 0;
	}
	.zixun_item_jiage{
		margin-left: 9rpx;
	}
	.iten_lianxi{
			width: 186rpx;
			height: 60rpx;
			background-color: #ffffff;
			border-radius: 30rpx;
			border: solid 1rpx #f43a51;
			display: flex;
			align-items: center;
			justify-content: center;
	}
	.iten_lianxi image{
			width: 28rpx;
			height: 27rpx;
			margin-right: 10rpx;
	}
	.zixun_item_top_bottom{
		display: flex;
		justify-content: flex-end;
		border-top: 2rpx dashed #c6c6c6;
		padding:  20rpx 0;
	}
	.fukuan{
		width: 187rpx;
			height: 60rpx;
			background-color: #ffffff;
			border-radius: 30rpx;
			border: solid 1rpx #0eb77e;
			line-height: 60rpx;
			text-align: center;
			margin-right: 20rpx;
	}
</style>
