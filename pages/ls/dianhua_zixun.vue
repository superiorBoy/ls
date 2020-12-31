<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">电话咨询</view>
			<view class=" head_right">
				<image src="@/static/lsimg/sousuo.png" mode="" @click="tan"></image>
			</view>
		</view>
	
		<view class="zi_body ">

			<view class="zixun_list">
				<view class="zixun_item" v-for="(item,index) in jilu_list">

					<view class="zixun_item_left">
						<view class="zixun_item_tx">
							<image :src=img_url+item.photourl></image>
						</view>
						<view class="zixun_item_xinxi">
							<view class="hei_26">
								{{item.nickname}}
							</view>
							<view class="hong_26 zixun_item_feiyong">
								￥{{item.paymoney}}
							</view>
							<view class="qian_22">
								{{ item.addtime | timeStamp }}
							</view>
						</view>
					</view>

					<view class="zixun_r">
						<view class="zixun_leibie hei_26">
							{{ fenlei[item.typeid].typename }}
						</view>
						<view class="zixun_dianhua">
							<image src="@/static/lsimg/dianhua.png" mode=""></image>{{item.phone}}
						</view>
					</view>
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
						<text>咨询类别</text>
						<view class="">
						<text>{{zhuanchang_txt}}</text>
						<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
							
						</view>
					</view>
					<view class="tan_list_bottom zhuanchang_arry hei_26" v-if="zhuan_show">
						<text v-for="(item,index) in fenlei" :class="['' ,index==xuanzc?'xuanzhong': '']" @click="xuanzhuangchang(index,item.typename,item.typeid)">
							{{item.typename}}</text>
					</view>
					<button type="" class="zhuanchang_quer_ding bai_30" @click="zhuanchang_go" v-if="zhuan_show">确定</button>
				</view>
				<view class="tan_list hei_26" v-if="!zhuan_show">
					<view class="tan_list_top">

						<text>用户名称</text>
						<input type="text" value="" placeholder="例如：张三" v-model="name" class="hei_26"/>
					</view>
				</view>
				<view class="tan_list hei_26" v-if="!zhuan_show">
					<view class="tan_list_top">
						<text>联系电话</text>
						<input type="text" value="" placeholder="例如：15174541221" v-model="dianhua" class="hei_26" />
					</view>
				</view>

				<view class="tan_buttom "  v-if="!zhuan_show">
					<button type="" class="quxiao hong_30" @click="quxiao_btn">取消搜索</button>
					<button type="" class="queren bai_30" @click="queding_btn">确认搜索</button>
				</view>

			</view>
		</uni-popup>
	</view>

</template>

<script>
	import unpopup from '@/components/uni-popup/uni-popup-share.vue'

	export default {
		components: {
			unpopup,
		},
		
		data() {
			return {
				tab_arry: ['全部咨询', '正在咨询', '结束咨询'],
				active: '0',
				zhuangtai: '0',
				dianhua: '',
				name: '',
				zhuanchang: [],
				xuanzc: '9999',
				zhuanchang_txt: '',
				zhuan_show:false,
				zhuanchang_txt2:'',
				jilu_list:[],
				page:0,
				is_all:false,
				img_url: uni.getStorageSync('img_url'),
				fenlei:'',
				type_id:'',
			}
		},
     onLoad() {
	// 获取分类
	this.$http
		.post({
			url: '/mapi/index/gettype'
		})
		.then(res => {
			this.fenlei = res.data.type;
		});
	this.huoqu_list()
	
},
		onShow() {

		},

		created() {

		},
		//下拉刷新
		onPullDownRefresh: function() {
			this.page=0
			this.jilu_list=[]
			this.is_all=false
			this.zhuanchang_txt = ''
			this.type_id=''
			this.xuanzc='9999'
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
				uni.navigateBack()
			},
			// 获取记录列表
			huoqu_list(){
				this.$http
					.post({
						url: '/mlawyerapi/consult/dianhua',
						data:{
							page: this.page,
							typeid:this.type_id,
							dianhua:this.dianhua,
							mingcheng:this.name
							
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
				this.active = index
			},
			huifu() {
				// this.$refs.huifu.open()
			},
			// 底部弹窗
			tan() {
				this.$refs.popup.open()

			},
	// 专长选择
			xuanzhuangchang(index, item,id) {
				this.xuanzc = index
				this.zhuanchang_txt2 = item
				this.type_id=id
			},
		// 专长确定
			zhuanchang_go() {

				this.zhuanchang_txt = this.zhuanchang_txt2
				this.zhuan_show = !this.zhuan_show
			},

			// 取消搜索
			quxiao_btn() {
				this.name = ''
				this.dianhua = ''
				this.type_id=''
				this.zhuanchang_txt = ''
				this.$refs.popup.close()
			},
			// 确定搜索
			queding_btn() {
				console.log(this.dianhua, this.name,this.zhuanchang_txt)
				this.$refs.popup.close()
				this.page=0
				this.jilu_list=[]
				this.is_all=false
				this.huoqu_list()
				
			},
			zhuan_togg() {
				this.zhuan_show = !this.zhuan_show
			
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
	page {
		background-color: #F7F7F7;
		min-height: 100%;
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
		display: flex;
		align-items: center;
		height: 191rpx;
		background-color: #ffffff;
		margin-bottom: 20rpx;
		justify-content: space-between;
		padding: 0 49rpx 0 30rpx;
		box-sizing: border-box;
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

	.xuanzhong {
		color: #f43a51;
		border: 2rpx solid #f43a51 !important;
	}

.zixun_dianhua{
	width: 238rpx;
		height: 50rpx;
		background-color: #ffffff;
		border-radius: 25rpx;
		border: solid 1rpx #0eb77e;
		font-size: 26rpx;
			color: #0eb77e;
			display: flex;
			align-items: center;
			justify-content: center;
			
}
.zixun_dianhua image{
	width: 23rpx;
		height: 23rpx;
		margin-right: 8rpx;
}
.zixun_leibie{
	margin-bottom: 30rpx;
}
.zixun_r{
	text-align: right;
	padding-top: 10rpx;
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
		margin-left: 10rpx;
		vertical-align: middle;
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
</style>
