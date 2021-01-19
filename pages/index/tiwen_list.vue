<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">提问记录</view>
			<view class=" head_right">
				<image src="@/static/lsimg/sousuo.png" mode="" @click="tan"></image>
			</view>
		</view>
<view class="tab_top hui_26">
			<text v-for="(item,index) in tab_arry" :class="['' ,index==active?'hong_26_bold': '']" @click="qiehuan(index)">{{item}}</text>
		</view>
		<view class="zi_body tab_zi_body">
			<view class="tiwen_list" v-for="item in jilu_list">
				<view class="tiwen_list_top">
					<view class="zhuangtai bai_22"  :class="['zhuangtai bai_22',zhuangtai==1?'zanwu':'huida']">
						{{item.reply.length==0?'暂无解答':'已回复'}}
					</view>
					<text class="qian_22">{{ item.addtime | timeStamp }}</text>
				</view>
				<view class="tiwen_list_wenti hei_28">
					{{item.information}}
				</view>
				<view class="tiwen_list_bottom qian_26">
					<view class="tiwen_list_huida_no" v-if="item.reply.length==0">
					<image src="@/static/img/shijian.png" mode="" class="shijian"></image>等待律师回复
					</view>
					<view class="tiwen_list_huida" v-if="item.reply.length!=0">
						<block v-for="(ls,ls_index) in item.reply"  v-if="ls_index<3">
					<image :src=img_url+ls.photourl mode="">
				    <!-- 	<image src="../../static/img/tx.png" mode="">
					<image src="../../static/img/tx.png" mode=""></image> -->
					</block>
					<text class="zhanwei"></text>等<text class="hong_26">{{item.replynum}}</text>位律师回复
					</view>
						<text class="lv_26" @click="xq(item.consultid)">查看详情></text>
				</view>
			</view>


		</view>

<uni-popup type="bottom" ref='popup'>
			<view class="tan">
				<view class="tan_title hei_30">
					查询条件
				</view>
				
				<view class="tan_list hei_26">
					<view class="tan_list_top">
						<text>悬赏金额</text>
						<input type="text" value="" placeholder="请输入" v-model="name" class="hei_26" />
					</view>
				</view>
                <view class="tan_list hei_26">
                	<view class="tan_list_top">
                		<text>提问内容</text>
                		<input type="text" value="" placeholder="请输入" v-model="neirong" class="hei_26" />
                	</view>
                </view>
				<view class="tan_list hei_26 tan_list_shijian">
					<text>提问时间</text>
				<picker mode='date' @change="time_change">
				   <text :class="['',time==''?'qian_26':'hei_26']">	{{time==''?'请选择时间':time}} </text>
				</picker>
				 </view>
				<view class="tan_buttom " >
					<button type="" class="quxiao lv_30" @click="quxiao_btn">取消搜索</button>
					<button type="" class="queren bai_30" @click="queding_btn">确认搜索</button>
				</view>

			</view>
		</uni-popup>

	</view>



</template>

<script>
	export default {

onLoad() {
	this.huoqu_list()
},
		onShow() {
		},

		data() {
			return {
				    tab_arry: ['全部', '待付款', '待悬赏','已悬赏'],
                      zhuangtai:2,
					  active:0,
					  jilu_list:[],
					  page:0,
					  is_all:false,
					  img_url: uni.getStorageSync('img_url'),
					  name:'',
					  neirong:'',
					  time:''
			}
		},
		created() {

		},
		//下拉刷新
		onPullDownRefresh: function() {
			this.page=0
			this.jilu_list=[]
			this.is_all=false
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
				uni.navigateBack()
			},
			time_change(data) {
				this.time = data.detail.value
			
			},

xq(id){
	
	uni.navigateTo({
		url:'tiwen_list_xq?id='+id
	})
},
	// 获取提问记录列表
huoqu_list(){
	this.$http
		.post({
			url: '/mapi/consult/tiwenlist',
			data:{
				page: this.page
			}
		})
		.then(res => {
		
			this.jilu_list=this.jilu_list.concat(res.data.consult);
			if (res.data.consult.length < 10) {
				this.is_all = true;
			}
		});
	
},
	// 底部弹窗
			tan() {
				this.$refs.popup.open()

			},

	// 取消搜索
		quxiao_btn() {
			this.name = ''
			this.neirong=''
			this.time=''
			this.$refs.popup.close()
		},
		// 确定搜索
		queding_btn() {
			console.log(this.name, this.neirong,this.time)
			// this.$refs.popup.close()
			// this.page=0
			// this.zixun_list=[]
			// this.is_all=false
			// this.huoqu_list()
			
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
	}
</script>

<style>


	.tab_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10rpx 38rpx;
		background-color: #FFFFFF;
		position: fixed;
		top: 100rpx;
		width: 100%;
		box-sizing: border-box;
		z-index: 9;
	}
.tiwen_list:first-child{
	border-top: 20rpx solid #F5F5F5;
}
	.tiwen_list {
		padding: 18rpx 30rpx;
		border-bottom: 2rpx solid #E8E8E8;
		
	}

	.head_right image {
		width: 40rpx;
		height: 41rpx;
	}
	.tiwen_list_bottom {
		height: 68rpx;
		background-color: #f3f5f7;
		display: flex;
		align-items: center;
		padding-left: 20rpx;
		justify-content: space-between;
	}
.tiwen_list_bottom .shijian{
		width: 24rpx;
		height: 24rpx;
		margin-right: 8rpx;
	}
	.tiwen_list_huida{
		display: flex;
		align-items: center;
		padding-left: 8rpx;
	}
	.zhanwei{
		margin-left: 8rpx;
	}
	.tiwen_list_huida image{
		width: 46rpx;
			height: 46rpx;
			border-radius: 100%;
			border: solid 1rpx #ffffff;
			margin-left: -8rpx;
	}
	.tiwen_list_top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.zhuangtai {
		height: 40rpx;
		
		line-height: 40rpx;
		padding: 0 8rpx;
	}
	.zanwu{
		background-color: #f43a51;
	}
.huida{
		background-color: #494949;
}
	.tiwen_list_wenti {
		margin: 22rpx 0 22rpx;
	}
	.tan {
		width: 100%;
		height: 758rpx;
		background-color: #FFFFFF;
		padding: 0 23rpx;
		box-sizing: border-box;
		position: relative;
	}
	
	.tan_title {
		text-align: center;
		line-height: 120rpx;
	}
	
	.tan_list {}
	
	.tan_list image {
		width: 22rpx;
		height: 12rpx;
		margin-left: 10rpx;
		vertical-align: middle;
	}
	
	.tan_list_top {
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #E8E8E8;
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
	
	.zhuanchang_arry {
		display: flex;
		margin-top: 20rpx;
		flex-wrap: wrap;
	
	}
	
	.zhuanchang_arry text {
		border: 2rpx solid #E8E8E8;
		border-radius: 20rpx;
		padding: 4rpx 20rpx;
		display: inline-block;
		margin-right: 28rpx;
		margin-bottom: 20rpx;
	}
	
	.zhuanchang_quer_ding {
		height: 88rpx;
		background-color: #0eb77e;
		border-radius: 44rpx;
		line-height: 88rpx;
		position: absolute;
		bottom: 50rpx;
		width: 691rpx;
		box-sizing: border-box;
	
	}
	
	.quxiao {
		width: 342rpx;
		height: 88rpx;
		background-color: #dcfff3;
		border-radius: 44rpx 0rpx 0rpx 44rpx;
		line-height: 88rpx;
	}
	
	.queren {
		width: 342rpx;
		height: 88rpx;
		line-height: 88rpx;
		background-color: #0eb77e;
		border-radius: 0rpx 44rpx 44rpx 0rpx;
	}
	
	.xuanzhong {
		color: #f43a51;
		border: 2rpx solid #f43a51 !important;
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
		width: 13rpx;
		height: 23rpx;
		position: absolute;
		right: 30rpx;
	
	}
	.tan_list_shijian{
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #E8E8E8;
		height: 98rpx;
		justify-content: space-between;
	}
</style>
