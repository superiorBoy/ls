<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold" style="width: 60%;">我的在线咨询</view>
			<view class="head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="chat_list_time qian_20">{{addtime  | timeStamp}}</view>
			<view class="chat_list chat_right">
				<view class="chat_messgae bai_26">{{data.information}}</view>
				<image :src="img_url+user.photourl" mode="" class="chat_list_tx"></image>
			</view>
			<view class="jiami qian_20 " v-if="xianshi1">
				<image src="@/static/img/jiami.png" mode=""></image>
				正在寻找更多律师，律师咨询通道已加密
			</view>
			<view class="chat_list chat_left "v-if="xianshi2">
				<image src="@/static/img/wen_kefu.png" mode="" class="chat_list_tx"></image>
				<view class="chat_messgae hei_26">
					已为你找到愿意接单的在线律师，请 使用下方服务接入律师，避免问题服 务无法获得解答。
					<view class="chat_pipei ">
						<image :src="img_url+item.photourl" mode="" v-for="(item,index) in lvshi" v-if="index<=4"></image>
						<!-- <image src="@/static/img/tx.png" mode=""></image> -->
						<!-- <image src="@/static/img/tx.png" mode=""></image> -->
						<text style="margin-left: 14rpx;">律师已经通过小虎律师认证，小虎等980+位律师愿意解答。</text>
					</view>
					<text class="qian_22"></text>
				</view>
			</view>
			<view class="pay_fs_list "v-if="xianshi3">
				<view class="pay_fs_item" v-if="is_tiwen&&is_tiwen.appopenconsult==1">
					<view class="pay_fs_item_top">
						<text class="hei_30_bold" style="margin-right: 24rpx;">悬赏提问</text>
						<text class="hong_26" >
							￥
							<text class="hong_38_bold">{{min_num}}</text>
							/提问
						</text>
					</view>
					<view class="pay_fs_item_center">
						<view class="pay_fs_item_center_left hei_22">
							<view class="pay_fs_item_center_list">
								<image src="@/static/img/huojian.png" mode="" style="width: 22rpx;height: 22rpx;"></image>
								没有悬赏平均5小时解答
							</view>
							<view class="pay_fs_item_center_list">
								<image src="@/static/img/xunhuan.png" mode="" style="width: 24rpx;height: 24rpx;"></image>
								有悬赏平均30分钟解答
							</view>
							<view class="pay_fs_item_center_list">
								<image src="@/static/img/fs_duihao.png" mode="" style="width: 22rpx;height: 22rpx;"></image>
								问题解决率50%
							</view>
						</view>
						<button type="" class="bai_26" @click="go_xuanshang">立即咨询</button>
					</view>
				</view>
				<view class="pay_fs_item">
					<view class="pay_fs_item_top">
						<text class="hei_30_bold" style="margin-right: 24rpx;">在线咨询</text>
						<text class="hong_26">
							￥
							<text class="hong_38_bold">{{baojia.zaixianprice}}</text>
							/{{baojia.zaixiantime}}小时
						</text>
					</view>
					<view class="pay_fs_item_center">
						<view class="pay_fs_item_center_left hei_22">
							<view class="pay_fs_item_center_list">
								<image src="@/static/img/huojian.png" mode="" style="width: 22rpx;height: 22rpx;"></image>
								极速响应，平均3秒钟分配律师！
							</view>
							<view class="pay_fs_item_center_list">
								<image src="@/static/img/xunhuan.png" mode="" style="width: 24rpx;height: 24rpx;"></image>
								服务期内不限制次数解答，私密聊天！
							</view>
							<view class="pay_fs_item_center_list">
								<image src="@/static/img/fs_duihao.png" mode="" style="width: 22rpx;height: 22rpx;"></image>
								不限沟通，问题解决率高达99%！
							</view>
						</view>
						<button type="" class="bai_26" @click="go_zaixian">立即咨询</button>
					</view>
				</view>
				<view class="pay_fs_item">
					<view class="pay_fs_item_top">
						<text class="hei_30_bold" style="margin-right: 24rpx;">电话咨询</text>
						<text class="hong_26">
							￥
							<text class="hong_38_bold">{{baojia.dianhuaprice}}</text>
							/{{baojia.dianhuatime}}分钟
						</text>
					</view>
					<view class="pay_fs_item_center">
						<view class="pay_fs_item_center_left hei_22">
							<view class="pay_fs_item_center_list">
								<image src="@/static/img/huojian.png" mode="" style="width: 22rpx;height: 22rpx;"></image>
								极速响应，平均3秒钟分配律师！
							</view>
							<view class="pay_fs_item_center_list">
								<image src="@/static/img/xunhuan.png" mode="" style="width: 24rpx;height: 24rpx;"></image>
								可主动拨打律师电话，不满意可全额退款！
							</view>
							<view class="pay_fs_item_center_list">
								<image src="@/static/img/fs_duihao.png" mode="" style="width: 22rpx;height: 22rpx;"></image>
								问题解决律高达99%
							</view>
						</view>
						<button type="" class="bai_26" @click="go_dianhua">立即咨询</button>
					</view>
				</view>
			</view>
			<view class="chat_list chat_left " v-if="xianshi4">
				<image src="@/static/img/tx.png" mode="" class="chat_list_tx"></image>
				<view class="chat_messgae hei_26">
					我已经准备好了，请尽快支付！
				</view>
			</view>
			<view class="chat_list chat_left " style="margin: 20rpx 0;" v-if="xianshi5">
				<image src="@/static/lsimg/tx.png" mode="" class="chat_list_tx"></image>
				<view class="chat_messgae hei_26">
					服务期可不限次追问，不满意可全额退款！
				</view>
			</view>
			<view class="tishi bai_26 " v-if="xianshi6">
				<image src="@/static/img/zhineng_yonghu.png" mode=""></image>北京用户咨询在线律师挽回<text class="hong_26">2000</text>元损失
			</view>
		</view>
		<view class="pay_fa_bottom" @click="tan">
			<input type="text" value=""  disabled="true" placeholder="律师回复后可以使用..." class="hei_30"/>
			<button type="" class="qian_30">发送</button>
		</view>
		
		<view class="bg" v-if="is_tan">
			<view class="tan_tishi" >
				<view class="tan_tishi_top hei_30_bold">
					<text>温馨提示</text> <image src="@/static/img/tan_close.png" mode="" @click="close"></image>
				</view>
				<view class="hui_26 tan_tishi_txt">
					请支付并接入律师后才能使用！
				</view>
				<button type="" class="bai_26" @click="close">知道啦</button>
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			is_tan:false,
			consultid:'',
			data:'',
			xianshi1:false,
			xianshi2:false,
			xianshi3:false,
			xianshi4:false,
			xianshi5:false,
			xianshi6:false,
			baojia:'',
			addtime:new Date().getTime(),
			lvshi:'',
			user:'',
			min_num:0,
			is_tiwen:''
			 
		};
	},
	created() {},
	onLoad(option) {
		this.data=JSON.parse(option.data)
		console.log(this.data)
		// this.consultid=option.consultid
		// this.huoqu_consult_xq()
		this.xianshi()
		this.huoqu_is_tiwen()
		this.huoqu_jiage()
		this.huoqu_lvshi()
		this.huoqu_user()
		this.huoqu_xuanshang_num()
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
huoqu_is_tiwen(){
			this.$http
					.post({
						url: '/mapi/index/getopenconsult'
					})
					.then(res => {
						this.is_tiwen=res.data
					});
		},
		huoqu_jiage(){
			
			this.$http.post({
				url: '/mapi/index/getzixun',
			}).then(res => {
				if(res.code==0){
					this.baojia=res.data.zhan	
				}
				console.log(res)
			})
		},
		huoqu_user(){
			
			this.$http.post({
				url: '/mapi/user/user',
			}).then(res => {
				if(res.code==0){
					this.user=res.data.user	
				}
				console.log(res)
			})
		},
		huoqu_xuanshang_num(){
			
			this.$http.post({
				url: '/mapi/index/getxuanshang',
			}).then(res => {
				var array = [];
				for (var key in res.data.zhan) {
					
					array.push(res.data.zhan[key]);
				}
				array.sort((old,New)=>{
				return old -New
				})
				
				this.min_num=array[0]
				
				
			})
		},
		
		huoqu_lvshi(){
			
			this.$http.post({
				url: '/mapi/lawyer/lvshilist',
				data:{
					type:1,
					page:0
				}
			
			}).then(res => {
				if(res.code==0){
					this.lvshi=res.data.lawyer
				}
				console.log(res)
			})
		},
		xianshi(){
			var that=this
			setTimeout(function(){
				that.xianshi1=true
			},500)
			setTimeout(function(){
				that.xianshi2=true
			},900)
			setTimeout(function(){
				that.xianshi3=true
			},1500)
			setTimeout(function(){
				that.xianshi4=true
			},2000)
			setTimeout(function(){
				that.xianshi5=true
			},2500)
			setTimeout(function(){
				that.xianshi6=true
			},2600)
			
		},
		tan(){
			this.is_tan=true
		},
		close(){
			this.is_tan=false
		},
		go_xuanshang(){
			// uni.navigateTo({
			// 	url:'xuanshang?information='+this.data.information+'&typeid='+this.data.typeid+'&province='+this.data.province+'&city='+this.data.city+'&area='+this.data.area
			// })
			this.$http.post({
				url: '/mapi/consult/addconsult',
				data:{
					information:this.data.information,
					typeid:this.data.typeid,
					province:this.data.province,
					city:this.data.city,
					area:this.data.area
				},
				
			}).then(res => {
				if(res.code==0){
					// uni.navigateTo({
					// 	url:'xuanshang?information='+this.data.information+'&typeid='+this.data.typeid+'&province='+this.data.province+'&city='+this.data.city+'&area='+this.data.area
					// })
					uni.navigateTo({
						url:'xuanshang?consultid='+res.data
					})
					
				}
			// 	console.log(res)
			})
			
		},
		go_zaixian(){
			uni.navigateTo({
				url:'zhineng_pay?type=1&information='+this.data.information+'&typeid='+this.data.typeid+'&province='+this.data.province+'&city='+this.data.city+'&area='+this.data.area
			})
		},
		go_dianhua(){
			uni.navigateTo({
				url:'zhineng_pay?type=2&information='+this.data.information+'&typeid='+this.data.typeid+'&province='+this.data.province+'&city='+this.data.city+'&area='+this.data.area
			})
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
.head {
	border-bottom: 2rpx solid #f7f7f7;
}
page {
	background-color: #f5f5f5;
}
.chat_list_time {
	width: 280rpx;
	height: 28rpx;
	background-color: #ededed;
	border-radius: 14rpx;
	margin: 20rpx auto;
	text-align: center;
	line-height: 28rpx;
}
.chat_right .chat_messgae {
	background-color: #0eb77e;
	max-width: 500rpx;
	margin-right: 16rpx;
	border-radius: 10rpx 0 10rpx 10rpx;
	position: relative;
	padding: 10rpx 15rpx;
	height: max-content;
	    word-break: break-all;
}
.chat_right .chat_messgae::before {
	content: '';
	display: inline-block;
	width: 16rpx;
	height: 15rpx;
	background: url(../../static/img/zhineng_chat_r.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	right: -15rpx;
	top: 0;
}
.chat_left .chat_messgae {
	background-color: #ffffff;
	max-width: 500rpx;
	margin-left: 16rpx;
	border-radius: 10rpx 0 10rpx 10rpx;
	position: relative;
	padding: 10rpx 15rpx;
	height: max-content;
	    word-break: break-all;
}
.chat_left .chat_messgae::before {
	content: '';
	display: inline-block;
	width: 16rpx;
	height: 15rpx;
	background: url(../../static/img/zhineng_chat_l.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	left: -15rpx;
	top: 0;
}
.chat_list {
	display: flex;
	padding: 0 30rpx;
}
.chat_right {
	justify-content: flex-end;
}

.chat_list_tx {
	width: 96rpx;
	height: 96rpx;
	border-radius: 100%;
}
.jiami {
	width: 513rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 30rpx auto;
	border-radius: 17rpx;
	height: 34rpx;
	background-color: #ededed;
}
.jiami image {
	width: 16rpx;
	height: 20rpx;
	margin-right: 6rpx;
}
.chat_pipei {
	/* display: flex; */
	/* align-items: center; */
	border-top: 2rpx solid #f5f5f5;
	margin: 6rpx 0 0;
	padding: 10rpx 0 0 6rpx;
	color: #999999;
	/* flex-wrap: wrap; */
}
.chat_pipei image {
	width: 49rpx;
	height: 48rpx;
	border-radius: 100%;
	margin-left: -10rpx;
	vertical-align: middle;
	position: relative;
	top: 2rpx;
	margin-bottom: 10rpx;
}
.pay_fs_item_center_list image {
	margin-right: 10rpx;
}
.pay_fs_list {
	padding: 0 30rpx;
	margin: 40rpx 0 46rpx;
}
.pay_fs_item {
	background-color: #ffffff;
	padding: 0 20rpx 10rpx;
	border-radius: 10rpx;
	margin-bottom: 20rpx;
}
.pay_fs_item button {
	width: 185rpx;
	height: 60rpx;
	background-color: #01af63;
	border-radius: 30rpx;
	line-height: 60rpx;
	margin: 0;
}
.pay_fs_item_center {
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 10rpx;
}
.pay_fs_item_center_list{
	margin-bottom: 10rpx;
}
.tishi{
	width: 521rpx;
		height: 50rpx;
		background-color: #494949;
		border-radius: 25rpx;
		display: flex;
		align-items: center;
		padding-left: 6rpx;
		margin: 38rpx 0 140rpx 30rpx;
}
.tishi image{
		width: 40rpx;
		height: 40rpx;
		border-radius: 100%;
		margin-right: 6rpx;
}
.pay_fa_bottom{
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 100rpx;
	background-color: #FFFFFF;
	padding: 0 30rpx;
	box-sizing: border-box;
	}
	.pay_fa_bottom button{
			width: 196rpx;
			height: 68rpx;
			background-color: #e8e8e8;
			border-radius: 34rpx;
			margin: 0;
			line-height: 68rpx;
	}
	.tan_tishi{
			width: 472rpx;
			height: 290rpx;
			background-color: #ffffff;
			border-radius: 5rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			padding: 0 20rpx;
			box-sizing: border-box;
	}
	.bg{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.3);
		position: fixed;
		top: 0;
	}
	.tan_tishi_top{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 86rpx;
		border-bottom: 2rpx solid #cccccc;
	}
	.tan_tishi_top image{
		width: 17rpx;
			height: 17rpx;
	}
	.tan_tishi button{
			width: 167rpx;
			height: 50rpx;
			background-color: #0eb77e;
			border-radius: 5rpx;
			line-height: 50rpx;
	}
	.tan_tishi_txt{
		margin: 40rpx 0;
	}

</style>
