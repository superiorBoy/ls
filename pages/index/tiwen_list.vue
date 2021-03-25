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
			<text v-for="(item,index) in tab_arry" :class="['' ,index==active?'lv_26_bold': '']" @click="qiehuan(index)">{{item}}</text>
		</view>
		<view class="zi_body tab_zi_body">
			<view class="tiwen_list" v-for="item in jilu_list">
				<view class="tiwen_list_name">
					<view class="tiwen_list_name_l" @click="go_zhuye(item.reply[0].userid)">
					<image :src="img_url+item.reply[0].photourl" mode="" v-if="item.replynum!=0" class="tiwen_list_name_tx"></image>
					<image src="@/static/img/mohu.png" mode=""v-if="item.replynum==0" class="tiwen_list_name_tx"></image>
					<view class="tiwen_list_name_right">
						<view class="hui_24 tiwen_list_name_right_dianhua"v-if="item.replynum!=0"  @click="go_zhuye(item.reply[0].userid)">
						  	{{item.reply[0].mobile}}
						</view>	
						<view class="hui_24 tiwen_list_name_right_dianhua"v-if="item.replynum==0">
						  	<image src="@/static/img/dian_mohu.png" mode=""></image>
						</view>	
						<view class="hong_24">
							悬赏：{{item.paymoney}}元
						</view>	
					</view>	
					</view>	
					<text class="hong_26">{{item.tiwenstate==2?'待悬赏':item.tiwenstate==3?'已悬赏':item.tiwenstate==4?'已完成':''}}</text>
				</view>	
			<!-- 	<view class="tiwen_list_top">
					<view class="zhuangtai bai_22"  :class="['zhuangtai bai_22',zhuangtai==1?'zanwu':'huida']">
						{{item.tiwenstate==2?'待悬赏':item.tiwenstate==2?'已悬赏':item.tiwenstate==4?'已完成':''}}
					</view>
					<text v-if="item.tiwenstate==4" class="hong_26_bold">悬赏{{item.paymoney}}元</text>
				</view> -->
				<view class="tiwen_list_wenti hei_28">
					{{item.information}}
				</view>
				<view class="">
					<text class="qian_22">{{ item.addtime | timeStamp }}</text>
				</view>
				<view class="tiwen_list_bottom qian_26">
					<view class="tiwen_list_huida_no" v-if="item.reply.length==0">
					<image src="@/static/img/shijian.png" mode="" class="shijian"></image>等待律师回复
					</view>
					<view class="tiwen_list_huida" v-if="item.reply.length!=0">
						
					         <image src="@/static/img/yihui.png" mode="">
				 
					    
					<text class="zhanwei"></text>等<text class="hong_26">{{item.replynum}}</text>位律师回复
					</view>
						<!-- <text class="lv_26" @click="xq(item.consultid)">{{item.tiwenstate==2?'去悬赏':'查看详情'}}></text> -->
					<view class="tiwen_caozuo lv_24">
						<text v-if="item.ispay==1" @click="pay(item.consultid)">立即支付</text>
						<!-- <text v-if="item.tiwenstate==2&&item.ispay!=1&&!item.refundstate" @click="go_tuikuan(item)">申请退款</text> -->
						<!-- <text v-if="item.refundstate" @click="tui_xq(item)">退款详情</text> -->
						<text v-if="item.tiwenstate==4" class="pingjia" @click="go_pingjia(item.reply[0].userid)"><image src="@/static/img/wen_pingjia.png" mode=""></image>评价</text>
						<text v-if="item.tiwenstate==2" @click="xq(item.consultid)">去悬赏</text>
						<text @click="xq(item.consultid)">详情</text>
					</view>
				</view>
			</view>

	      <view class="none_list" v-if="jilu_list.length==0">
				<image src="../../static/img/none_tiwen.png" mode="widthFix"></image>
				<view class="none_list_txt qian_26">
			             暂无提问记录
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
				   <text :class="['',time==''?'qian_26':'hei_26']">	{{time==''?'开始时间':time}} </text>
				</picker>
				<picker mode='date' @change="time_change2">
				   <text :class="['',time2==''?'qian_26':'hei_26']">	{{time2==''?'结束时间':time2}} </text>
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
				    tab_arry: ['全部', '待付款','已付款','待悬赏','已悬赏'],
                      zhuangtai:2,
					  active:0,
					  jilu_list:[],
					  page:0,
					  is_all:false,
					  img_url: uni.getStorageSync('img_url'),
					  name:'',
					  neirong:'',
					  time:'',
					  state:0,
					  time2:''
			}
		},
		created() {

		},
		//下拉刷新
		onPullDownRefresh: function() {
			this.page=0
			this.jilu_list=[]
			this.name=''
			this.neirong=''
			this.time=''
			this.time2=''
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
			time_change2(data){
				this.time2 = data.detail.value
			},

xq(id){
	
	uni.navigateTo({
		url:'tiwen_list_xq?id='+id
	})
},
pay(consultid){
	uni.navigateTo({
		url:'xuanshang?consultid='+consultid
	})
},
go_pingjia(lawyerid){
	uni.navigateTo({
		url:'pingjia?lawyerid='+lawyerid
	})
},
qiehuan(index){
	console.log(index)
	this.active=index
	this.name=''
	this.neirong=''
	this.time=''
	this.time2=''
	this.page=0
	this.jilu_list=[]
	this.is_all=false
	this.huoqu_list()
},
go_zhuye(lawyerid){
	uni.navigateTo({
		url: 'ls_zhuye?lawyerid=' + lawyerid
	});
},
	// 获取提问记录列表
huoqu_list(){

	console.log(this.time)
	 
	 if(this.time!=''&&this.time2!=''){
		 var riqi = this.time+' - '+this.time2
	 }else{
		 var riqi = ''
	 }
	this.$http
		.post({
			url: '/mapi/consult/tiwenlist',
			data:{
				page: this.page,
				state:this.active,
				jine:this.name,
				neirong:this.neirong,
				riqi:riqi
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
			console.log(this.time,this.name, this.neirong)
			this.$refs.popup.close()
			this.page=0
			this.jilu_list=[]
			this.is_all=false
			this.huoqu_list()
			
		},
		tui_xq(item){
			uni.navigateTo({
				url:'tui_xq?item='+JSON.stringify(item)+'&type=3'
			})
		},
		go_tuikuan(item){
			uni.navigateTo({
				url:'shenqing_tuikuan?item='+JSON.stringify(item)+'&type=3'
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
		border-bottom: 20rpx solid #f5f5f5;
		
	}

	.head_right image {
		width: 40rpx;
		height: 41rpx;
	}
	.tiwen_list_bottom {
		height: 105rpx;
		display: flex;
		align-items: center;
		padding-left: 20rpx;
		justify-content: space-between;
		margin-top: 11rpx;
		border-top: 2rpx solid #c6c6c6;
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
		width: 24rpx;
		height: 24rpx;
			border-radius: 100%;
			
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
		margin: 22rpx 0 0rpx;
	     word-break: break-all;
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
	.tiwen_list_name{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tiwen_list_name_tx {
			width: 66rpx;
			height: 66rpx;
			margin-right: 10rpx;
			border-radius: 100%;
	}
	.tiwen_list_name_l{
		display: flex;
	}
	.tiwen_list_name_right_dianhua{
		margin-bottom: 4rpx;
	}
	.tiwen_list_name_right_dianhua image{
		width: 100rpx;
		height: 30rpx;
	}
	.tiwen_caozuo text{
		display: inline-block;
		height: 56rpx;
			background-color: #ffffff;
			border-radius: 28rpx;
			border: solid 1rpx #0eb77e;
			line-height: 56rpx;
			padding: 0 30rpx;
			margin-left: 16rpx;
	}
	.tiwen_caozuo text:first-child{
		margin-left: 0;
	}
	.pingjia image{
			width: 28rpx;
			height: 28rpx;
			margin-right: 2rpx;
			vertical-align: middle;
			position: relative;
			top: -2rpx;
	}
	.none_list{
		text-align: center;
		background-color: #FFFFFF;
		border-top: 20rpx solid #F7F7F7;
	}
	.none_list image{
		width: 500rpx;
		margin-bottom: 30rpx;
		margin-top: 150rpx;
		
	}
</style>
