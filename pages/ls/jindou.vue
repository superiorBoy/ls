<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">记录</view>
			<view class=" head_right">
				<image src="@/static/lsimg/sousuo.png" mode="" @click="tan"></image>
			</view>
		</view>

		<view class="zi_body ">
			<view class="liushui_list">
				<view class="jindou_item" v-for="item in liushui_list">
					<view class="jindou_item_left" >
						<view class="hei_28 jindou_item_title">
							{{item.information}}
						</view>
						<view class="qian_24">
							{{ item.addtime | timeStamp }}
						</view>
					</view>
					<view class="jindou_item_right" >{{item.jindou}}金豆</view>	
				</view>
              
				

			</view>
		</view>

		<uni-popup type="bottom" ref='popup'>
			<view class="tan">
				<view class="tan_title hei_30">
					查询条件
				</view>
				<view class="tan_list hei_26">
					<view class="tan_list_top" @click="zhuan_togg">
						<text>{{zhuanchang_txt==""?'订单类型':zhuanchang_txt}}</text>
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
					</view>
					<view class="tan_list_bottom zhuanchang_arry hei_26" v-if="zhuan_show">
						
						<text v-for="(item,index) in leixing" :class="['' ,index==xuanzc?'xuanzhong': '']" @click="xuanzhuangchang(index,item)">
							{{item}}</text>
					</view>
					<button type="" class="zhuanchang_quer_ding bai_30" @click="zhuanchang_go" v-if="zhuan_show">确定</button>
				</view>
				<view class="tan_list hei_26">
					<view class="tan_list_top">
						<picker @change="change1" class='aaaaaa' mode="date"><text class="dizhi">{{str_time==''?'开始时间':str_time}}</text></picker>
						<picker @change="change" class='aaaaaa' mode="date"><text class="dizhi">{{time==''?'结束时间':time}}</text></picker>
						
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
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



		data() {
			return {
				time: '',
				zhuanchang: ['余额充值', '订单支付', '提现'],
				zhuanchang_txt: '',
				zhuanchang_txt2: '',
				zhuan_show:false,
				xuanzc:'9999',
				page:0,
				is_all:false,
				liushui_list:[],
				leixing:[],
				str_time:'',
				url:'',
				typeid:''
			}
		},
		created() {

		},
		//下拉刷新
		onPullDownRefresh: function() {

			this.page=0
			this.is_all=false
			this.liushui_list=[]
			this.zhuanchang_txt=''
			this.str_time=''
			this.time=''
			this.huoqu_liushui()
		
		},
		// stopPullDownRefresh:function(){

		// },
		onShow() {

		},
		onLoad(option) {
			
			this.huoqu_liushui()
			// this.huoqu_leixing()
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
					this.huoqu_liushui()
				}
				
				
			},
			navigateBack() {
				uni.navigateBack()
			},
	   huoqu_liushui(){
		   // 获取流水记录
		   var typeid =''
				if(this.str_time!=''&&this.time!=''){
					this.liushui_list=[]
					var sou_time=this.str_time +' - '+this.time
				}else{
					var sou_time=''
				}
				if(this.zhuanchang_txt!=''){
					for(let i in this.leixing) {
					
					if(this.leixing[i]==this.zhuanchang_txt){
						
						typeid = i
					}
					
					
					}
				}
		
		   
		   	this.$http
		   		.post({
		   			url:'/mlawyerapi/user/jindoulist',
		   			data:{
		   				page:this.page,
						type:typeid,
						riqi:sou_time
		   			}
		   		})
		   		.then(res => {
						this.liushui_list=this.liushui_list.concat(res.data.jindou);
					
						if(res.data.jindou.length<10){
							this.is_all=true
						}
						this.leixing=res.data.type
						console.log(this.leixing)
		   		});
	   },

			tan() {
				this.$refs.popup.open()

			},
			// 时间
			change(data) {
				console.log(data.detail.value)
				this.time = data.detail.value
			},
			// 时间
			change1(data) {
				console.log(data.detail.value)
				this.str_time = data.detail.value
			},
			// 选择类型
			xuanzhuangchang(index, item) {
				this.xuanzc = index
				console.log(index)
				this.zhuanchang_txt2 = item
			},
			// 类型确定
			zhuanchang_go() {
				this.zhuanchang_txt = this.zhuanchang_txt2
				this.zhuan_show = false
			},
			zhuan_togg() {
				this.zhuan_show = !this.zhuan_show
			},
			// 取消搜索
			quxiao_btn() {
				this.zhuanchang_txt = '订单类型'
				this.time = '创建时间'
				this.$refs.popup.close()
			},
			// 确定搜索
			queding_btn() {
				console.log(this.time, this.zhuanchang_txt)
				this.page=0
				this.is_all=false
				this.liushui_list=[]
				this.$refs.popup.close()
				this.huoqu_liushui()
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

	.head_right image {
		width: 40rpx;
		height: 41rpx;
	}

	.liushui_list {
		padding: 0 30rpx;

	}
	.jindou_item{
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #e5e5e5;
		justify-content: space-between;
		padding: 30rpx 0 ;
	}
	.jindou_item_title{
		margin-bottom: 16rpx;
	}
	.jindou_item_right{
		color: #ab7921;
		font-size: 30rpx;
		font-weight: bold;
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
		bottom: 50rpx;

	}

	.aaaaaa {
		
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
		padding: 8rpx 20rpx;
		display: inline-block;
		margin-right: 28rpx;
		margin-bottom: 15rpx;
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
</style>
