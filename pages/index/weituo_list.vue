<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">委托记录</view>
			<view class=" head_right">
				<image src="@/static/lsimg/sousuo.png" mode="" @click="tan"></image>
			</view>
		</view>
		<view class="tab_top hui_26">
			<text v-for="(item,index) in tab_arry" :class="['' ,index==active?'lv_26_bold': '']" @click="qiehuan(index)">{{item}}</text>
		</view>
		<view class="zi_body tab_zi_body">

			<view class="tiwen_list">
				<view class="tiwen_item" v-for="(item,index) in weituo_list" >
					<view class="tiwen_item_top hui_26" @click="go_xq">

						<text  :class="['zhuangtai',item.state==1?'jinxing':'yijieshu']" >{{item.state==1?'进行中':'已结束'}}</text>
						{{item.information}}
					</view>
					<view class="tiwen_item_center qian_22">
					
						<view class="tiwen_item_biaoqian">
							<image src="@/static/img/weituo_yonghu.png" mode=""></image>{{item.name}}
						</view>
						<view class="tiwen_item_shijian">
							<image src="@/static/img/weitui_shouji.png" mode=""></image>{{item.phone}}
						</view>
						<view class="tiwen_item_dizhi">
							<image src="@/static/img/dizhi.png" mode=""></image>四川-成都
						</view>
					</view>
					<view class="huifu_btn">
						<view class="tiwen_ren qian_22">
							{{ item.addtime | timeStamp }}
						</view>
						<button type="" class="huifu bai_24" @click="caozuo(item.state,item.entrustid)">{{item.state==1?'停止委托':'删除委托'}}</button>
					</view>
				
				</view>

         <view class="none_list" v-if="weituo_list.length==0">
				<image src="../../static/img/none_weituo.png" mode="widthFix"></image>
				<view class="none_list_txt qian_26">
			             暂无委托记录
				</view>
			</view>
			</view>
		</view>

		<uni-popup type="bottom" ref='popup'>
			<view class="tan">
				<view class="tan_title hei_30">
					查询条件
				</view>
				<!-- <view class="tan_list hei_26">
					<view class="tan_list_top">
						<pickerAddress @change="change" class='aaaaaa' @click='dianji'><text class="dizhi">{{dizhi}}</text></pickerAddress>
						
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
					</view>
				</view> -->
				<!-- <view class="tan_list hei_26">
					<view class="tan_list_top" @click="zhuan_togg">
						<text>{{zhuanchang_txt==""?'按专长':zhuanchang_txt}}</text>
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
					</view>
					<view class="tan_list_bottom zhuanchang_arry hei_26" v-if="zhuan_show">
						<text v-for="(item,index) in zhuanchang" :class="['' ,index==xuanzc?'xuanzhong': '']" @click="xuanzhuangchang(index,item)">
							{{item}}</text>
					</view>
					<button type="" class="zhuanchang_quer_ding bai_30" @click="zhuanchang_go" v-if="zhuan_show">确定</button>
				</view> -->
	<view class="tan_list hei_26">
					<view class="tan_list_top">
						<text>委托标题</text>
						<input type="text" value="" placeholder="输入标题" v-model="biaoti" class="hei_26" />
					</view>
				</view>
				<view class="tan_buttom " v-if="!zhuan_show">
					<button type="" class="quxiao hong_30" @click="quxiao_btn">取消搜索</button>
					<button type="" class="queren bai_30" @click="queding_btn">确认搜索</button>
				</view>

			</view>
		</uni-popup>


	</view>



</template>

<script>
	import unpopup from '@/components/uni-popup/uni-popup-share.vue'
	import pickerAddress from '@/components/pickerAddress/pickerAddress.vue'
	export default {
		components: {
			unpopup,
			pickerAddress
		},
onLoad() {
	this.huoqu_weituo()
},
		onShow() {

		},

		data() {
			return {
				tab_arry: [ '全部委托', '委托进行中', '委托已结束'],
				active: '0',
				zhuangtai:0,
				dizhi: '按地区',
				zhuanchang: ['全部专长', '婚姻家庭', '交通事故', '形势辩护', '劳动工伤', '房产纠纷', '债权债务', '合同事务', '公司经营', '损害赔偿', '知识产权', '征地拆迁'],
				xuanzc: '9999',
				zhuanchang_txt: '按专长',
				zhuanchang_txt2: '',
				zhuan_show: false,
				page:0,
				is_all:false,
				weituo_list:[],
				caozuo_txt:'',
				state:'',
				biaoti:''
				
			}
		},
		created() {

		},
		//下拉刷新
		onPullDownRefresh: function() {
			this.page=0
			this.weituo_list=[]
			this.is_all=false
			this.biaoti=''
			this.huoqu_weituo()
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
			this.huoqu_weituo()
		}
		},
			navigateBack() {
				uni.navigateBack()
			},
			// 切换tab
			qiehuan(index) {
				this.active = index
				console.log(index)
				if(index==1){
					this.zhuangtai=0
					this.state=index
				}else if(index==2){
					this.zhuangtai=1
					this.state=index
				}else{
					this.state=''
				}
				this.weituo_list=[]
				this.page=0
				this.biaoti=''
				this.is_all=false
				this.huoqu_weituo()
			},
			// 进入详情
			go_xq() {
				uni.navigateTo({
					url:'weituo_xq'
				})
			},
			// 底部弹窗
			tan() {
				this.$refs.popup.open()

			},
			// 地址确定
			// change(data) {
			// 	console.log(data)
			// 	this.dizhi = data.data.join('-')
			// 	console.log(data.data.join(''))
			// 	this.zhuan_show = false
			// },
			// 专长选择
			// xuanzhuangchang(index, item) {
			// 	this.xuanzc = index
			// 	this.zhuanchang_txt2 = item
			// },
			// 专长确定
			// zhuanchang_go() {

			// 	this.zhuanchang_txt = this.zhuanchang_txt2
			// 	this.zhuan_show = !this.zhuan_show
			// },
			zhuan_togg() {
				this.zhuan_show = !this.zhuan_show

			},
			// 取消搜索
			quxiao_btn() {
				// this.zhuanchang_txt = '按专长'
				// this.dizhi = '按地区'
				this.biaoti=''
				this.$refs.popup.close()
			},
			// 确定搜索
			queding_btn() {
				// console.log(this.dizhi, this.zhuanchang_txt)
				this.$refs.popup.close()
				this.page=0
				this.weituo_list=[]
				this.is_all=false
				this.huoqu_weituo()
			},
			// 停止委托---删除委托
			caozuo(txt,entrustid){
				 if(txt==1){
					 this.caozuo_txt='close'
				 }else{
					 this.caozuo_txt='del'
				 }
				
				this.$http
					.post({
						url: '/index/zixun/upentrust',
						data:{
							entrustid:entrustid,
							type:this.caozuo_txt
						}
					})
					.then(res => {
						if(res.code==0){
							uni.showToast({
								title: '操作成功',
								duration: 2000
							});
							this.weituo_list=[]
							this.page=0
							this.is_all=false
							this.huoqu_weituo()
						}
						
					});
			},
			huoqu_weituo(){
				this.$http
					.post({
						url: '/mapi/consult/weituo',
						data:{
							page:this.page,
							state:this.state,
							biaoti:this.biaoti
						}
					})
					.then(res => {
						this.weituo_list=this.weituo_list.concat(res.data.entrustlist);
						if (res.data.entrustlist.length < 10) {
							this.is_all = true;
						}
					});
				
				
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
	page {
		/* background-color: #F7F7F7; */
		
	}

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

	.head_right image {
		width: 40rpx;
		height: 41rpx;
	}

	.huifu {
		width: 160rpx;
		height: 56rpx;
		background-color: #0eb77e;
		border-radius: 28rpx;
		line-height: 56rpx;
		margin: 0;
		display: inline-block;
		text-align: center;
	}

	.tiwen_item {
		padding: 20rpx 30rpx 32rpx;
		margin-bottom: 20rpx;
		background-color: #FFFFFF;
		border-top: 20rpx solid #F7F7F7;
	}

	.tiwen_item:first-child {
		margin-top: 20rpx;
	}
.tiwen_item:last-child {
		border-bottom: 20rpx solid #F7F7F7;
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
		width: 14rpx;
		height: 21rpx;
		margin-right: 8rpx;
	}

	.huifu_btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
.huifu_btn image{
		width: 50rpx;
		height: 51rpx;
		margin-right: 15rpx;
		border-radius: 100%;
}
	.zhuangtai {
		
		border-radius: 3rpx;
		color: #FFFFFF;
		padding: 0 5rpx;
		display: inline-block;
		border-radius: 4rpx;
		font-size: 20rpx;
		vertical-align: middle;
		margin-right: 9rpx;
	}
	.jinxing{
		background-color: #f43a51;
	}
	.yijieshu{
			background-color: #999999;
	}
	.tiwen_ren{
		display: flex;
		align-items: center;
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

	.tan_list_top {
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #E8E8E8;
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
		border: 2rpx solid #E8E8E8;
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
