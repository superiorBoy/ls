<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">咨询记录</view>
			<view class=" head_right">
				<image src="@/static/lsimg/sousuo.png" mode="" @click="tan"></image>
			</view>
		</view>
		<view class="tab_top hui_26">
			<text v-for="(item,index) in tab_arry" :class="['' ,index==active?'hong_26_bold': '']" @click="qiehuan(index)">{{item}}</text>
		</view>
		<view class="zi_body tab_zi_body">

			<view class="zixun_list">
				<view class="zixun_item" v-for="(item,index) in zixun_list">

<view class="zixun_item_top">
	
					<view class="zixun_item_left">
						<view class="zixun_item_tx" @click="go_zhuye(item.lawyerid)">
							<image :src="img_url+item.photourl" mode="" class="zixun_item_tx_img"></image>
							<image src="@/static/img/renzheng2.png" mode="" class="zixun_item_ren"></image>
						</view>
						<view class="zixun_item_xinxi">
							<view class="hei_26" @click="go_zhuye(item.lawyerid)">
								{{item.nickname}}律师
							</view>
							<view class="qian_22 zixun_item_feiyong">
							        {{ item.addtime | timeStamp }}
							</view>
							
						</view>
					</view>
	      <view class="zixun_item_right">
					<view :class="['',item.zixunstate == 4?'qian_26_bold':'lv_26_bold']">{{ item.zixunstate == 1 ? '未付款':item.zixunstate == 2?'已付款':item.zixunstate == 3?'接单中':'已完成' }}</view>
		<!-- 	<view class="zixun hong_20" @click="go_chat(item.lawyerid)">
				<image src="@/static/lsimg/xiaoxi.png" mode=""></image>
				在线联系
			</view> -->
			</view>
			</view>
			<view class="zixun_item_leixing hui_26" v-if="fenlei">
				<text v-if="item.typeid">咨询类型：{{ fenlei[item.typeid].typename }}</text>  <text class="hong_26 zixun_item_jiage">￥{{item.paymoney}}/{{item.zixunshicahng==24?'1天':item.zixunshicahng==72?'3天':item.zixunshicahng==720?'1个月':item.zixunshicahng+'小时'}}</text>
			</view>
			<view class="zixun_item_top_bottom" >
				<view class="fukuan lv_26" v-if="item.zixunstate == 1" @click="pay(item.lawyerid,item.consultid)">
					立即付款
				</view>
				<view class="fukuan lv_26" v-if="item.zixunstate == 4" @click="go_pingjia(item.lawyerid)">
					我要评价
				</view>
				<view class="iten_lianxi lv_26" @click="go_chat(item.lawyerid)">
				 	<image src="@/static/img/zaixian_chat.png" mode=""></image>在线联系
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
				<!-- <view class="tan_list hei_26">
					<view class="tan_list_top" @click="zhuan_togg">

						<text>咨询类别</text>
						<view class="" :class="zhuanchang_txt==''?'qian_26':''">
							{{zhuanchang_txt==""?'例如：家庭婚姻':zhuanchang_txt}}
							<image src="@/static/lsimg/xuan_xia.png" mode=""></image>
						</view>
					</view>
					<view class="tan_list_bottom zhuanchang_arry hei_26" v-if="zhuan_show">
						<text v-for="(item,index) in fenlei" :class="['' ,index==xuanzc?'xuanzhong': '']" @click="xuanzhuangchang(index,item.typename,item.typeid)">
							{{item.typename}}</text>
					</view>
					<button type="" class="zhuanchang_quer_ding bai_30" @click="zhuanchang_go" v-if="zhuan_show">确定</button>
				</view> -->
				<view class="tan_list hei_26">
					<view class="tan_list_top">
						<text>咨询律师</text>
						<input type="text" value="" placeholder="张三律师" v-model="name" class="hei_26" />
					</view>
				</view>

				<view class="tan_buttom " v-if="!zhuan_show">
					<button type="" class="quxiao lv_30" @click="quxiao_btn">取消搜索</button>
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

		onShow() {

		},

		data() {
			return {
				img_url: uni.getStorageSync('img_url'),
				tab_arry: ['全部', '未付款', '已付款','接单中','已完成'],
				active: '0',
				zhuangtai: '1',
				name: '',
				zhuanchang_txt: '',
				zhuan_show: false,
				xuanzc: '9999',
				zhuanchang_txt2: '',
				page:0,
				is_all:false,
				fenlei: '',
				zixun_list: [],
		        zixunstate:'',
				type_id:'',
			
			}
		},
		created() {

		},
		onLoad() {
			this.huoqu_list()
			// 获取分类
			this.$http
				.post({
					url: '/mapi/index/gettype'
				})
				.then(res => {
					this.fenlei = res.data.type;
				});
			
		},
		//下拉刷新
		onPullDownRefresh: function() {
			this.page=0
			this.type_id=''
			this.name = ''
			this.xuanzc = '999'
			this.zhuanchang_txt=''
			this.zhuanchang_txt2=''
			this.zixun_list=[]
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
			// 切换tab
			qiehuan(index) {
				this.active = index
				this.zhuangtai=index
				
				
					this.zixunstate=index
			if(index==0){
				this.zixunstate=''
			}					this.page=0
					this.type_id=''
					this.name = ''
					this.xuanzc = '999'
					this.zhuanchang_txt=''
					this.zhuanchang_txt2=''
					this.zixun_list=[]
					this.is_all=false
					this.huoqu_list()
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
			zhuan_togg() {
				this.zhuan_show = !this.zhuan_show

			},
			// 取消搜索
			quxiao_btn() {
				this.name = ''
				this.type_id=''
				this.xuanzc = '999'
				this.zhuanchang_txt=''
				this.zhuanchang_txt2=''
				this.$refs.popup.close()
			},
			// 确定搜索
			queding_btn() {
				console.log(this.zhuanchang_txt, this.name)
				this.$refs.popup.close()
				this.page=0
				this.zixun_list=[]
				this.is_all=false
				this.huoqu_list()
				
			},
			pay(id,consultid){
				uni.navigateTo({
					url:'pay?lawyerid='+id+'&type=1'+'&consultid='+consultid
				})
			},
			huoqu_list(){
				this.$http.post({
						url: '/mapi/consult/zixunlists',
						data: {
							page: this.page,
							state:1,
							zixunstate:this.zixunstate,
							lvshi:this.name
						}
					})
					.then(res => {
						console.log(res);
				
						this.zixun_list=this.zixun_list.concat(res.data.consult);
						if (res.data.consult.length < 10) {
							this.is_all = true;
						}
					});
			},
			go_zhuye(id) {
				uni.navigateTo({
					url: 'ls_zhuye?lawyerid='+id
				});
			},
			go_chat(id){
				uni.navigateTo({
					url:'chat?lawyerid='+id
				})
			},
            go_pingjia(lawyerid){
				uni.navigateTo({
					url:'pingjia?lawyerid='+lawyerid
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
	page {
		background-color: #F7F7F7;
		min-height: 100%;
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

	.zixun_item_tx_img  {
	width: 100%;
	height: 100%;
		box-sizing: border-box;
		
		border-radius: 100%;
	}
	.zixun_item_tx{
		width: 80rpx;
		height: 81rpx;
		position: relative;
		margin-right: 18rpx;
	}
.zixun_item_ren{
		width: 15rpx;
		height: 16rpx;
		background-color: #ffffff;
		border: solid 2rpx #ffffff;
		position: absolute;
		right: 8rpx;
		bottom: 0;
		border-radius: 100%;
		
}
	.zixun_item {
		
		background-color: #ffffff;
		margin-bottom: 20rpx;
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
		margin: 18rpx 0 0;
	}

	.item_zhuangtai {
		
		/* -moz-transform: rotate(-10deg); */
		/* -webkit-transform: rotate(-10deg); */
	
	}

	.zhengzai {
		background-color: #0eb77e;
	}

	.go_fufei {
		border: 2rpx solid #0eb77e;
		color: #0eb77e;
	}

	.jieshu {
		color: #999999;
		background-color: #dee0e2;
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
			border: solid 1rpx #0eb77e;
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
