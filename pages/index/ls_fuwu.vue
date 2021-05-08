<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">律师服务</view>
			<view class=" head_right"><image src="@/static/lsimg/sousuo.png" mode="" @click="tan"></image></view>
		</view>
		<view class="zi_body ">
			<view class="fuwu_list">
				<view class="fuwu_item" v-for="(item,index) in lslist"  :class="{ zhankai_on: zhankai_arry.indexOf(index) != -1 }">
					<view class="fuwu_item_top">
						<view class="fuwu_item_top_left">
							<view class="fuwu_item_top_tx" @click="go_zhuye(item.userid)">
								<image :src="img_url+item.photourl" mode="" class="tx"></image>
								<image src="../../static/img/renzheng2.png" mode="" class="ren"></image>
							</view>
							<view class="fuwu_item_top_zhuangtai qian_22">
								<image src="../../static/img/zaixian.png" mode=""></image>
								<!-- <image src="../../static/img/lixian.png" mode=""></image> -->
								在线</view>
						</view>
						<view class="fuwu_item_top_right" @click="go_zhuye(item.userid)">
							<view class="hei_32_bold">{{item.nickname}}律师</view>
							<view class="hei_26 fuwu_item_lvsuo">
								<image src="../../static/img/heise_lvsuo.png" mode=""></image>
								{{item.lvsuo}}</view>
							<view class="qian_22 fuwu">
								<view class="fuwu_num">
									<image src="../../static/img/fuwu.png" mode=""></image>
									已服务
									<text class="lv_22">{{item.replynum}}</text>
									人
								</view>
								<view class="fuwu_pingjia">
									<image src="../../static/img/pingjia.png" mode=""></image>
									评价
									<text class="lv_22">{{item.haopingnum}}</text>
									次
								</view>
							</view>
							<view class="fuwu_item_top_shanchang qian_24">
							<text v-if="shanchang_obj[item.expertise1] && shanchang_obj[item.expertise1].shanchangname">{{shanchang_obj[item.expertise1].shanchangname}}</text>
							<text v-if="shanchang_obj[item.expertise2] && shanchang_obj[item.expertise2].shanchangname">{{shanchang_obj[item.expertise2].shanchangname}}</text>
							<text v-if="shanchang_obj[item.expertise3] && shanchang_obj[item.expertise3].shanchangname">{{shanchang_obj[item.expertise3].shanchangname}}</text>
							</view>
						</view>
						
						
						<view class="shou_zhangtai hui_24" @click="zhankai(index)">
							{{zhankai_arry.indexOf(index) != -1?'收起':'展开'}} <image src="../../static/img/xiangxia.png" mode=""></image>
						</view>
					</view>

					<view class="fuwu_item_bottom bai_28" >
						<view class="fuwu_item_shoufei " @click="go_zhifu(item.userid,item.hetong_shenhe,'合同审核',3)">
							<view class="fuwu_item_shoufei_title">合同审核</view>
							<view class="bai_20">
								￥
								<text class="bai_30">{{item.hetong_shenhe}}</text>/次
							</view>
						</view>
						<view class="fuwu_item_shoufei" @click="go_zhifu(item.userid,item.hetong_daixie,'代写合同',3)">
							<view class="fuwu_item_shoufei_title">代写合同</view>
							<view class="bai_20">
								￥
								<text class="bai_30">{{item.hetong_daixie}}</text>
								/次
							</view>
						</view>
						<view class="fuwu_item_shoufei" @click="go_zhifu(item.userid,item.hetong_wenshu,'代写文书',3)">
							<view class="fuwu_item_shoufei_title">代写文书</view>
							<view class="bai_20">
								￥
								<text class="bai_30">{{item.hetong_wenshu}}</text>
								/次
							</view>
						</view>
						<view class="fuwu_item_shoufei"  @click="go_zhifu(item.userid,item.lvshi_huijian,'律师会见',4)">
							<view class="fuwu_item_shoufei_title">律师会见</view>
							<view class="bai_20">
								￥
								<text class="bai_30">{{item.lvshi_huijian}}</text>
								/次
							</view>
						</view>
						<view class="fuwu_item_shoufei" @click="go_zhifu(item.userid,item.lvshihan,'发律师函',4)">
							<view class="fuwu_item_shoufei_title">发律师函</view>
							<view class="bai_20">
								￥
								<text class="bai_30">{{item.lvshihan}}</text>
								/次
							</view>
						</view>
						<view class="fuwu_item_shoufei"  @click="go_zhifu(item.userid,item.anjianzhidao,'案件指导',4)">
							<view class="fuwu_item_shoufei_title">案件指导</view>
							<view class="bai_20">
								￥
								<text class="bai_30">{{item.anjianzhidao}}</text>/次
							</view>
						</view>
						<view class="fuwu_item_shoufei" @click="go_zhifu(item.userid,item.jianmian,'1次',5)">
							<view class="fuwu_item_shoufei_title">见面咨询</view>
							<view class="bai_20">
								￥
								<text class="bai_30">{{item.jianmian}}</text>
								/次
							</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>

		<uni-popup type="bottom" ref="popup">
			<view class="tan">
				<view class="tan_title hei_30">查询条件</view>
				<picker mode="selector" :range="zhuanchang_arry" @change="zhuanchang_change" :range-key="'shanchangname'">
				<view class="tan_list hei_26" >
					<view class="tan_list_top">
						<text>选择专长</text>
						{{ zhuanchang?zhuanchang:'请选择' }}
					</view>
				</view>
				</picker>
				<pickerAddress2 @change="change" class="">
				<view class="tan_list hei_26" >
					<view class="tan_list_top">
						<text>服务地区</text>
						{{ dizhi?dizhi:'请选择' }}
					</view>
				</view>
				</pickerAddress2>

				<view class="tan_buttom " >
					<button type="" class="quxiao hong_30" @click="quxiao_btn">取消搜索</button>
					<button type="" class="queren bai_30" @click="queding_btn">确认搜索</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import unpopup from '@/components/uni-popup/uni-popup-share.vue';
import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
export default {
	components: {
		unpopup,
		pickerAddress2
	},

	data() {
		return {

			jilu_list: [],
			page: 0,
			is_all: false,
			img_url: uni.getStorageSync('img_url'),
			zhankai_arry:[0,1],
			dizhi:'',
			zhuanchang_arry:[],
			shanchang_id:'',
			zhuanchang:'',
			lslist :[],
			shanchang_obj:''
			
		};
	},
	onLoad() {
		// 获取专长
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				var array = [];
				for (var key in res.data.shanchang) {
					array.push(res.data.shanchang[key]);
				}
				this.shanchang_obj=res.data.shanchang
				this.zhuanchang_arry = array;
				this.huoqu_lvshi()
			});
		// this.huoqu_list();
	},
	onShow() {},

	created() {},
	//下拉刷新
	onPullDownRefresh: function() {
		
		
		
		this.page=0
		this.is_all=false
		this.lslist=[]
		this.shanchang_id = ''
		this.dizhi=''
		this.zhuanchang=''
		this.huoqu_lvshi()
		
		
		
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
				this.huoqu_lvshi();
			}
		},
		huoqu_lvshi() {
			console.log(this.dizhi);
			
			
			if(this.dizhi){
				var dizhi_arry=this.dizhi.split('-')
			}else{
				var dizhi_arry=['','']
			}
			
			this.$http
				.post({
					url: '/mapi/lawyer/lvshilist',
					data: {
						page: this.page,
						shanchangid: this.shanchang_id,
						province: dizhi_arry[0],
						city: dizhi_arry[1]
						
					}
				})
				.then(res => {
					this.lslist=this.lslist.concat(res.data.lawyer);
					if (res.data.lawyer.length < 10) {
						this.is_all = true;
					} 
				});
		},
		go_zhuye(lawyerid){
			uni.navigateTo({
				url: 'ls_zhuye?lawyerid='+lawyerid
			});
		},
		go_zhifu(lawyerid,money,time,type){
			uni.navigateTo({
				url:'pay?lawyerid='+lawyerid+'&type='+type+'&time='+time+'&pay_money='+money
			})
		},
		navigateBack() {
			uni.navigateBack();
		},
		zhankai(index){
			if (this.zhankai_arry.indexOf(index) == -1) {
				this.zhankai_arry.push(index); //选中添加到数组里
			} else {
				this.zhankai_arry.splice(this.zhankai_arry.indexOf(index), 1); //取消
			}
		},
	

		// 底部弹窗
		tan() {
			this.$refs.popup.open();
		},
	
		// 专长选择
		zhuanchang_change(e) {
			this.zhuanchang = this.zhuanchang_arry[e.detail.value].shanchangname;
			this.shanchang_id = this.zhuanchang_arry[e.detail.value].shanchangid;
			this.page=0,
			console.log(this.shanchang_id);
		},
	

		// 取消搜索
		quxiao_btn() {
			this.shanchang_id = ''
			this.dizhi=''
			this.zhuanchang=''
			this.$refs.popup.close();
		},
		// 确定搜索
		queding_btn() {
			
			this.$refs.popup.close();
			this.page = 0;
			this.lslist = [];
			this.is_all = false;
			this.huoqu_lvshi();
		},

		// 地区选择
		change(data) {
			console.log(data);
			this.dizhi = data.data[0] + '-' + data.data[1];

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
	background-color: #f3f3f3;
	min-height: 100%;
}

.head_right image {
	width: 40rpx;
	height: 41rpx;
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
	margin-left: 10rpx;
	vertical-align: middle;
}

.tan {
	width: 100%;
	height:640rpx;
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

.fuwu_item {
	background-color: #ffffff;
	padding: 0 30rpx;
	margin-top: 20rpx;
}
.fuwu_item_top {
	display: flex;
	border-bottom: 2rpx dashed #dcdcdc;
	padding: 18rpx 0;
	margin-bottom: 20rpx;
	position: relative;
}
.shou_zhangtai{
	position: absolute;
	right: 0;
	top: 20rpx;
	display: flex;
	align-items: center;
}
.shou_zhangtai image{
		width: 18rpx;
		height: 10rpx;
		margin-left: 6rpx;
}

.fuwu_item_top_left{
	text-align: center;
}
.fuwu_item_bottom {
	display: none;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
}
.fuwu_item_shoufei {
	width: 216rpx;
	height: 121rpx;
	text-align: center;
	border-radius: 5px;
	margin: 0 20rpx 20rpx 0;
}
.fuwu_item_shoufei_title{
	margin: 20rpx 0 0;
}
.fuwu_item_shoufei:nth-child(3n) {
	margin-right: 0;
}

.fuwu_item_top_tx {
	width: 130rpx;
	height: 131rpx;
	position: relative;
	border-radius: 100%;
}
.fuwu_item_top_tx .tx {
	width: 100%;
	height: 100%;
	border-radius: 100%;
}
.fuwu_item_top_tx .ren {
	width: 24rpx;
	height: 25rpx;
	position: absolute;
	bottom: 0rpx;
	right: 10rpx;
	border: solid 2rpx #ffffff;
	border-radius: 100%;
}
.fuwu_num image {
	width: 26rpx;
	height: 22rpx;
	margin-right: 10rpx;
}

.fuwu_pingjia {
	margin-left: 42rpx;
}
.fuwu_pingjia image {
	width: 25rpx;
	height: 23rpx;
	margin-right: 10rpx;
}
.fuwu {
	display: flex;
	align-items: center;
	margin: 10rpx  0 16rpx;
}
.fuwu_item_top_right {
	margin-left: 20rpx;
}
.fuwu_item_top_shanchang text {
	display: inline-block;
	width: 140rpx;
	height: 42rpx;
	background-color: #f5f5f5;
	border-radius: 3rpx;
	line-height: 42rpx;
	text-align: center;
	margin-right: 20rpx;
}
	
.fuwu_item_lvsuo{
	margin-top:8rpx;
}
.fuwu_item_lvsuo image{ 
		width: 25rpx;
		height: 24rpx;
		margin-right: 12rpx;
}
.fuwu_item_top_zhuangtai{
	margin-top: 20rpx;
}
.fuwu_item_top_zhuangtai image{
		width: 20rpx;
		height: 20rpx;
		margin-right: 6rpx;
}
.fuwu_item_shoufei:nth-child(1){
	background: url(../../static/img/baojia1.png) no-repeat;
	background-size: 100% 100%;
}
.fuwu_item_shoufei:nth-child(2){
	background: url(../../static/img/baojia2.png) no-repeat;
	background-size: 100% 100%;
}
.fuwu_item_shoufei:nth-child(3){
	background: url(../../static/img/baojia3.png) no-repeat;
	background-size: 100% 100%;
}
.fuwu_item_shoufei:nth-child(4){
	background: url(../../static/img/baojia4.png) no-repeat;
	background-size: 100% 100%;
}
.fuwu_item_shoufei:nth-child(5){
	background: url(../../static/img/baojia5.png) no-repeat;
	background-size: 100% 100%;
}
.fuwu_item_shoufei:nth-child(6){
	background: url(../../static/img/baojia6.png) no-repeat;
	background-size: 100% 100%;
}
.fuwu_item_shoufei:nth-child(7){
	background: url(../../static/img/baojia7.png) no-repeat;
	background-size: 100% 100%;
}
.zhankai_on .shou_zhangtai image{
	transform:rotate(180deg);
	-ms-transform:rotate(180deg); 	/* IE 9 */
	-moz-transform:rotate(180deg); 	/* Firefox */
	-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
	-o-transform:rotate(180deg); 	/* Opera */
}
.zhankai_on .fuwu_item_bottom{
	display: flex;
}
</style>
