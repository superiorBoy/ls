<template>
	<view class="">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold" style="width: 80%;">追问{{ lvshi.nickname }}</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class="zi_body">
			<view :class="['chat_body', bt_show ? 'chat_body_jia' : '']" @click="bt_show=!bt_show">
				<view v-for="item in message">
					<view class="chat_list chat_right" v-if="item.userid_from == id">
						<view class="chat_right_txt bai_26">
							<text>{{ item.content }}</text>
						</view>
						<image src="@/static/lsimg/yh_tx.png" mode="" class="tx"></image>
					</view>

					<view class="chat_list chat_left" v-if="item.userid_from != id">
						<image src="@/static/img/tx.png" mode="" class="tx"></image>
						<view class="chat_left_txt hei_26">{{ item.content }}</view>
					</view>
				</view>

				<view class="shendu bai_28">
					一对一深入沟通，试试
					<text class="lv_28" @click="go_shendu">深度咨询</text>
				</view>

				<!-- 	<view class="chat_list chat_left">
					<image src="@/static/lsimg/yh_tx.png" mode="" class="tx"></image>
					<view class="chat_left_txt hei_30">
						就是读书期间，在外面打架被判刑了可以保出来的?
					</view>
				</view>
				<view class="chat_list chat_right">
					<view class="chat_right_txt hei_30">
						就是读书期间，在外面打架被判刑了可以保出来的?
					</view>
					<image src="@/static/lsimg/yh_tx.png" mode="" class="tx"></image>
				</view> -->
			</view>

			<view class="zhanwei" v-if="!bt_show"></view>
			<view class="chat_bottom">
				<view class="chat_bottom_top" v-if="bt_show">
					<view class="qian_28 zhuiwen_time">
						<view class=" zhuiwen_time_left">
							追问入口将在
							<text class="hong_28">19</text>
							小时后关闭...
						</view>
						<button type="" class="bai_24" @click="go_zhuiwen">追问</button>
					</view>
				</view>
				<view class="shu_zhuiwen" v-if="!bt_show">
					<textarea value="" placeholder="请输入追问内容..." maxlength="500" class="hei_28" v-model="chat_txt" />
					<button type="" class="bai_30" @click="send()">追问</button>
				</view>
				<view class="chat_bottom_bottom hui_26" v-if="bt_show">
					<view class="chat_bt_item" @click="call">
						<image src="@/static/lsimg/chat_dianhua.png" mode=""></image>
						<view>电话咨询</view>
					</view>
					<view class="chat_bt_item" @click="dianzan">
						<image src="@/static/img/chat_zan.png" mode=""></image>
						<view>点赞回复</view>
					</view>
					<view class="chat_bt_item" @click="pingjia">
						<image src="@/static/img/chat_pingjia.png" mode=""></image>
						<view>评价律师</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	created() {},

	
	data() {
		return {
		
			bt_show: true,
			chat_txt: '',
			id: '100004',
			message: [
				// {
				// 	addtime: 1591171851,
				// 	content: '对以后的就业有没有什么影响？',
				// 	flag: 1,
				// 	messageid: 173,
				// 	msgtype: 1,
				// 	nickname_from: '1234',
				// 	nickname_to: '会员100005',
				// 	photourl_form: 'user/20200525/159037945424676.png',
				// 	photourl_to: 'user/20200529/159074444286391.png',
				// 	read: 1,
				// 	userid_from: 100004,
				// 	userid_to: 100005
				// },

				// {
				// 	addtime: 1591171761,
				// 	content:
				// 		'你好！按照你说的这个情况来看，如果是行政拘留的话，可能对他的升迁有影响，这个一般情况下不会上征信，可以考公务员，对孩子没有多大影响。万一如果是刑事拘留的话，就是有案底了。',
				// 	flag: 1,
				// 	messageid: 172,
				// 	msgtype: 1,
				// 	nickname_from: '会员100005',
				// 	nickname_to: '1234',
				// 	photourl_form: 'user/20200529/159074444286391.png',
				// 	photourl_to: 'user/20200525/159037945424676.png',
				// 	read: 1,
				// 	userid_from: 100005,
				// 	userid_to: 100004
				// }
			],
			lawyerid:'',
			lvshi:'',
			consultid:'',
			zixun_list:''
		};
	},
	onLoad(option) {
		this.lawyerid=option.lawyerid
		this.consultid=option.consultid
		this.huoqu_lvshi()
		this.huoqu_zixun_xq()
	},
	//下拉刷新
	onPullDownRefresh: function() {
		// this.getList();

		setTimeout(function() {
			uni.showToast({
				title: '没有更多内容了',
				duration: 2000,
				icon: 'none'
			});
			uni.stopPullDownRefresh();
		}, 1000);
	},
	// stopPullDownRefresh:function(){

	// },
	methods: {
		//上拉加载
		onReachBottom() {
			// uni.showToast({
			// 	title: '没有更多内容了',
			// 	duration: 2000,
			// 	icon: "none"
			// });
		},
		// 律师信息
		huoqu_lvshi(){
			this.$http
				.post({
					url: '/mapi/lawyer/lawyer',
					data: {
						lawyerid:this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.lvshi=res.data.lawyer
						
					}
				});	
		},
		// 获取咨询详情
		huoqu_zixun_xq(){
			this.$http
				.post({
					url: '/mapi/consult/zixun_xq',
					data: {
						consultid:this.consultid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.zixun_list=res.data.consult
						
					}
				});	
		},
		navigateBack() {
			uni.navigateBack();
		},
		dianzan() {
			uni.showToast({
				title: '点赞成功',
				duration: 2000
			});
		},
		go_zhuiwen() {
			this.bt_show = false;
		},
		jia() {
			this.bt_show = !this.bt_show;
			this.isShowEmj = false;
		},
		send() {
			console.log(this.chat_txt);
			if (this.chat_txt == '') {
				uni.showToast({
					title: '请输入内容',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			
			this.$http
				.post({
					url: '/lawyer/index/zhuiwen',
					data: {
						consultid:this.consultid,
						text:this.chat_txt
					}
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '已回复',
							duration: 2000,
							icon: 'none'
						});
						
					}
				});	
			
			
			var data = {
				content: '' + this.chat_txt,
				userid_from: '' + this.id
			};

			this.message.push(data);
			this.chat_txt = '';
			this.bt_show = true;
		},
		call() {
			uni.makePhoneCall({
				// 手机号
				phoneNumber: ''+this.lvshi.mobile,
				// 成功回调
				success: res => {
					console.log('调用成功!');
				},
				// 失败回调
				fail: res => {
					console.log('调用失败!');
				}
			});
		},

		pingjia() {
			uni.navigateTo({
				url:'pingjia?lsid='+this.lawyerid
			})
		},
		go_shendu(){
			uni.navigateTo({
				url: 'shendu_pay'
			});
		},
		
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}
.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.time {
	margin: 24rpx auto;
	text-align: center;
	width: 300rpx;
	height: 28rpx;
	background-color: #f6f6f6;
	border-radius: 14rpx;
	text-align: center;
	line-height: 28rpx;
}

.chat_list {
	display: flex;
	align-items: flex-start;
	margin-bottom: 30rpx;
}

.chat_list .tx {
	width: 94rpx;
	height: 94rpx;
	border-radius: 100%;
}

.chat_left .tx {
	margin-right: 20rpx;
}

.chat_body {
	padding: 30rpx 30rpx 100rpx;
	overflow: auto;
}

.chat_body_jia {
	padding-bottom: 354rpx;
}

.chat_left_txt {
	max-width: 410rpx;
	background-color: #ffffff;
	position: relative;
	padding: 10rpx 20rpx;
	border-radius: 10rpx;
}
.chat_right_txt {
	max-width: 410rpx;
	border: solid 2rpx #d9d9d9;
	position: relative;
	padding: 10rpx 20rpx;
	border-radius: 10rpx;
	background-color: #0eb77e;
}

.chat_left_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 24rpx;
	left: -10rpx;
	width: 10rpx;
	height: 16rpx;
	background: url(../../static/img/index_chat_l.png) no-repeat;
	background-size: 100% 100%;
}
.chat_right_txt image,
.chat_left_txt image {
	max-width: 100%;
	max-height: 400rpx;
}

.chat_right_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 24rpx;
	right: -10rpx;
	width: 10rpx;
	height: 16rpx;
	background: url(../../static/img/index_chat_r.png) no-repeat;
	background-size: 100% 100%;
}

.chat_right {
	justify-content: flex-end;
	display: flex;
}

.chat_right .tx {
	margin-left: 20rpx;
}
.zhuiwen_time {
	display: flex;
	width: 100%;
	justify-content: space-between;
}
.shu_zhuiwen {
	padding: 30rpx;
	background-color: #ffffff;
}
.shu_zhuiwen textarea {
	width: 100%;
}
.shu_zhuiwen button {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin-top: 10rpx;
}
.chat_bottom_top image {
	width: 56rpx;
	height: 56rpx;
}
.chat_bottom_top button {
	width: 75rpx;
	height: 44rpx;
	background-color: #0eb77e;
	border-radius: 22rpx;
	margin: 0;
	padding: 0;
	line-height: 44rpx;
}
.chat_bottom_top {
	display: flex;
	align-items: center;
	height: 100rpx;
	background-color: #ffffff;
	border-top: solid 1rpx #d9d9d9;
	padding: 0 30rpx;
	justify-content: space-between;
}

.chat_bottom_bottom {
	background-color: #fafafa;
	display: flex;
	justify-content: space-between;
	padding: 40rpx 0;
}

.chat_bt_item {
	text-align: center;
	width: 33.33%;
}

.chat_bt_item image {
	width: 126rpx;
	height: 126rpx;
	background-color: #ffffff;
	border-radius: 30rpx;
}

.chat_bottom {
	position: fixed;
	bottom: 0;
	width: 100%;
}
.slider {
	width: 375;
	height: 128;
}
.slider-emoji {
	width: 375;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}
.slider-emoji-icon {
	width: 53%;
	text-align: center;
	padding: 10.5 0;
}
/* <!-- 设置最后一列左靠齐 --> */
.lastbox {
	justify-content: flex-start;
}
.zhanwei {
	height: 360rpx;
}
.shendu {
	width: 467rpx;
	height: 88rpx;
	background-color: #d8dbd9;
	border-radius: 10rpx;
	margin: 0 auto 230rpx;
	line-height: 88rpx;
	text-align: center;
}
</style>
