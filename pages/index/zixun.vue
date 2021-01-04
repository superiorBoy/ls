<template>

	<view class="body">
		<view class="head">
			<view class="head_back">	
			</view>
			<view class="head_center hei_38_bold">咨询</view>
			<view class=" head_right hei_30_bold">
				<navigator url="tiwen">
				我要提问</navigator>
			</view>
		</view>

		<view class="zi_body ">
			<view class="jiedan_tab qian_30_bold">
				<view :class="['jiedan_tab_item' ,index==active?'jiedan_tab_item_active': '']" v-for="(tab,index) in tabs" @click="jiedan_qiehuan(index)">
					{{tab}}
				</view>
			</view>
			<view class="tiwen_list" v-if ="active==0">
				<view class="tiwen_item" v-for="(item,index) in zixun_list" @click="zixun_xq(item.consultid)">
					<view class="tiwen_item_top hei_26">
						{{item.information}}
					</view>
					<view class="tiwen_item_center qian_22">
						<view class="tiwen_item_shijian">
							<image src="@/static/lsimg/shijian_icon.png" mode=""></image><text class="hong_22"></text>{{ item.addtime | timeStamp }}
						</view>
						<view class="tiwen_item_biaoqian" v-if="fenlei!=''">
							<image src="@/static/img/biaoqian.png" mode=""></image>{{ fenlei[item.typeid].typename }}
						</view>
						<view class="tiwen_item_dizhi">
							<image src="@/static/img/dizhi.png" mode=""></image>{{item.province}}-{{item.city}}
						</view>
					</view>
				</view>
			</view>
			<view class="jingxuan_list" v-else>
				<view class="jingxuan_item">
					<view class="jingxuan_item_top">
						<view class="jingxuan_item_top_left">
						<view class="jingxuan_item_tx" @click="go_zhuye()">
							<image src="@/static/img/tx.png" mode="" class="tx"></image>
							<image src="@/static/img/renzheng2.png" mode="" class="renzheng"></image>
						</view>
						<view class="">
						<view class="hei_26_bold lv_name">
							樊柯律师
						</view>
						<view class="qian_20">
							与7分钟前回复
						</view>
						</view>
						</view>
						<button type="" class="lv_24" @click="zixun()">咨询我</button>
					</view>
					<view class="wen_da">
					<view class="zixun_wen hei_22">
						您好，是可以判3年的缓刑
					</view>
					<view class="zixun_da qian_20">
						来自问题：我想问一下，开庭量刑3-6年建议缓刑什么意思？
					</view>
					</view>
				</view>

			</view>
		</view>

	</view>

</template>

<script>
	export default {

		data() {
			return {
				tabs: ['最新提问', '精选问答'],
				active: '0',
				zixun_list:[],
				page:0,
				fenlei:'',
				is_all:false
			}
		},
		created() {
		},
		//下拉刷新
		onPullDownRefresh: function() {
			// this.getList();
				this.page=0
				this.zixun_list=[]
				this.is_all=false
				this.huoqu()
		},
		// stopPullDownRefresh:function(){

		// },
		onShow() {
this.huoqu()
		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
			});
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
					this.huoqu()
				}
			},
			navigateBack() {
				uni.navigateBack()
			},

			jiedan_qiehuan(index) {
				this.active = index
                    this.page=0
					this.zixun_list=[]
					this.is_all=false
					this.huoqu()
			},
				//获取最新咨询
			
			huoqu(){
				  this.$http
						.post({
							url: '/mapi/consult/zixunlist',
							data:{
								page:this.page
							}
						})
						.then(res => {
							this.zixun_list=this.zixun_list.concat(res.data.consultlist);
							uni.stopPullDownRefresh();
							if(res.data.consultlist.length<10){
								this.is_all=true
							}
						});
			},
           zixun(){
			   // uni.navigateTo({
			   // 	url:'zaixian_wen?user='+666
			   // })
		   },
		   zixun_xq(id){
			   uni.navigateTo({
			   	url: 'zhuye_zixun_xq?id=' + id
			   })
		   },
		   go_zhuye(){
		   	uni.navigateTo({
		   		url: 'ls_zhuye'
		   	});
		   }


		},
		filters: {
			timeStamp: function(value) {
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
	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}

	.head_right image {
		width: 40rpx;
		height: 41rpx;
	}

	.tiwen_item {
		padding: 20rpx 30rpx;
		margin-bottom: 20rpx;
		background-color: #FFFFFF;
		border-bottom: 2rpx solid #E8E8E8;
	}

	.tiwen_item:first-child {
		margin-top: 20rpx;
	}

	.tiwen_item_center {
		display: flex;
		align-items: center;
		margin: 18rpx 0 10rpx;
	}

	.tiwen_item_dizhi image {
		width: 18rpx;
		height: 20rpx;
		margin-right: 8rpx;
	}
.tiwen_item_biaoqian{
	margin: 0 98rpx 0 50rpx;
}
	.tiwen_item_biaoqian image {
		width: 21rpx;
		height: 20rpx;
		margin-right: 8rpx;
	}

	.tiwen_item_shijian image {
		width: 21rpx;
		height: 21rpx;
		margin-right: 8rpx;
	}

	.tiwen_item_top {
		line-height: 36rpx;

	}

	.jiedan_tab {
		height: 87rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 2rpx solid #E8E8E8;
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
	
	.jingxuan_item{
		padding: 20rpx 30rpx;
		border-bottom: 2rpx solid #E8E8E8;
	}
	.jingxuan_item_top{
		display: flex;
		justify-content: space-between;
		
		
	}
	.jingxuan_item_top .tx{
			width: 80rpx;
			height: 81rpx;
			border-radius: 100%;
		
	}
	.jingxuan_item_top button{
			width: 136rpx;
			height: 51rpx;
			background-color: #ffffff;
			border-radius: 25rpx;
			border: solid 1rpx #0eb77e;
			line-height: 51rpx;
			margin: 0;
	}
	.jingxuan_item_top_left{
		display: flex;
		
	}
	.jingxuan_item_tx{
		margin-right: 17rpx;
		position: relative;
	}
	.renzheng{
		width: 20rpx;
			height: 21rpx;
			position: absolute;
			right: 5rpx;
			bottom: 10rpx;
			border: solid 2rpx #ffffff;
			border-radius: 100%;
			background-color: #FFFFFF;
	}
	.wen_da{
		padding-left: 96rpx;
	}
	.zixun_da{
		margin: 10rpx 0 5rpx ;
	}
	.lv_name{
		margin-bottom: 6rpx;
	}

</style>
