<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">电话记录</view>
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

					<view class="zixun_item_left">
						<view class="zixun_item_tx" @click="go_zhuye(item.lawyerid)">
							<image :src="img_url+item.photourl" mode=""></image>
						</view>
						<view class="zixun_item_xinxi">
							<view class="hei_26"  @click="go_zhuye(item.lawyerid)">
								{{item.nickname}}律师
							</view>
							<view class="hong_26 zixun_item_feiyong">
								￥{{item.paymoney}}
							</view>
							<view class="hei_26" v-if="fenlei!=''">
								{{ fenlei[item.typeid].typename }}
							</view>
						</view>
					</view>
	      
					<view :class="['item_zhuangtai bai_26' ,item.zixunstate==1?'zhengzai': 'jieshu']">
						{{item.zixunstate==1?'正在咨询':'结束咨询'}}
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
				</view>
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
				tab_arry: ['全部咨询', '正在咨询', '结束咨询'],
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
				type_id:''
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
				
				if(index==1){
					this.zixunstate=index
				}else if(index==2){
					this.zixunstate=index
				}else {
					this.zixunstate=''
				}					this.page=0
					this.type_id=''
					this.name = ''
					this.xuanzc = '999'
					this.zhuanchang_txt=''
					this.zhuanchang_txt2=''					this.zixun_list=[]					this.is_all=false
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
			huoqu_list(){
				this.$http.post({
						url: '/mapi/consult/zixunlists',
						data: {
							page: this.page,
							state:2,
							zixunstate:this.zixunstate,
							typeid:this.type_id,
							lvshi:this.name
						}
					})
					.then(res => {
						console.log(res);
						this.zixun_list=this.zixun_list.concat(res.data.consult);
					});
			},
			go_zhuye(id) {
				uni.navigateTo({
					url: 'ls_zhuye?lawyerid='+id
				});
			},

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

	.zixun_item_tx image {
		width: 80rpx;
		height: 81rpx;
		box-sizing: border-box;
		margin-right: 18rpx;
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

	.item_zhuangtai {
		width: 164rpx;
		height: 50rpx;

		border-radius: 5rpx;
		-moz-transform: rotate(-10deg);
		-webkit-transform: rotate(-10deg);
		text-align: center;
		line-height: 46rpx;
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
</style>
