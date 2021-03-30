<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">{{ title }}</view>
			<view class=" head_right hong_30"></view>
		</view>

		<view class="zi_body ">
			<view class="xq_body" v-if="xq">
				<view class="tiwen_wenti">
					<view class="xq_top_tx hui_24">
						<image :src="img_url + xq.user.photourl" mode=""></image>
						{{ xq.user.nickname }} 
						 <view class=" hong_24 lianxi" @click="lianxi" >
							联系TA
						</view>
					</view>
					<view class="xq_body_top">
						<view class="xq_wenti hui_26">{{ xq.consult.information }}</view>
						<view class="tiwen_item_center qian_22">
							<view class="tiwen_item_dizhi">
								<image src="@/static/img/dizhi.png" mode=""></image>
								{{ xq.consult.province }}-{{ xq.consult.city }}
							</view>
							<view class="tiwen_item_biaoqian">
								<image src="@/static/img/biaoqian.png" mode=""></image>
								{{ fenlei[xq.consult.typeid].typename }}
							</view>
							<view class="tiwen_item_shijian">
								<image src="@/static/lsimg/shijian_icon.png" mode=""></image>
								{{ xq.consult.addtime | timeStamp }}
							</view>
						</view>
					</view>
					<view class="tiwen_zhuangtai">
						<image src="@/static/lsimg/tiwen_wancheng.png" mode="" v-if="xq.consult.tiwenstate==4"></image>
						<image src="@/static/lsimg/tiwen_daishang.png" mode="" v-if="xq.consult.tiwenstate==2"></image>
						<!-- <image src="@/static/lsimg/tiwen_yizhong.png" mode="" ></image> -->
						</view>
				</view>
				<view class="xq_bottom">
					<view class="xq_list" v-for="item in xq.consult_reply">
						<view class="xq_ls">
							<view class="xq_ls_left">
								<view class="xq_ls_tx">
									<image :src="img_url + item.photourl" mode="" class="xq_tx"></image>
									<image src="@/static/img/renzheng.png" mode="" class="xq_renzheng"></image>
								</view>
								<view class="xq_ls_name">
									<view class="hui_24">{{ item.nickname }}律师</view>
									<view class="qian_22 xq_ls_time">{{ item.addtime | timeStamp }}</view>
								</view>
								<text class="hong_30 jiang_num" v-if="xq.consult.lawyerid==item.userid">奖励{{xq.consult.ispay==2?xq.consult.paymoney:'0'}}元</text>
							</view>
						</view>
						<view class="hui_26 hui_fir_ls">
						<u-parse :content="replace_em(item.information)"></u-parse>
						<!-- {{replace_em(item.information)}} -->
						</view>
						<view class="xq_huifu_txt hui_26">
							<view class="zhui_list" v-for="iten in item.zhuiwen">
								<view class="zhuiwen hui_26" v-if="iten.type == 1">
									<view class="lv_26 xq_ls_left">
										<view class="xq_ls_tx"><image :src="img_url + xq.user.photourl" mode="" class="xq_tx"></image></view>
										<view class="xq_ls_name">
											<view class="hui_24">{{ xq.user.nickname }}</view>
											<view class="qian_22 xq_ls_time">{{ item.addtime | timeStamp }}</view>
										</view>
									</view>
									<view class="zhuiwen_body_yh">
										<view class="zhuiwen_txt bai_20">追问</view>
										<!-- {{ iten.information }} -->
										<u-parse :content="replace_em(iten.information)"></u-parse>
									</view>
								</view>

								<view class="hui_zhuiwen" v-if="iten.type == 2">
									<view class="lv_26 xq_ls_left">
										<view class="xq_ls_tx">
											<image :src="img_url + item.photourl" mode="" class="xq_tx"></image>
											<image src="@/static/img/renzheng.png" mode="" class="xq_renzheng"></image>
										</view>
										<view class="xq_ls_name">
											<view class="hui_24">{{ item.nickname }}律师</view>
											<view class="qian_22 xq_ls_time">{{ item.addtime | timeStamp }}</view>
										</view>
									</view>
									<view class="hui_zhuiwen_body">
										<text class="bai_20">回复</text>
										<!-- {{ iten.information }} -->
										<u-parse :content="replace_em(iten.information)"></u-parse>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
    <view class="huifu_bottom">
				<view class="huifu_anxiu hui_22">
					<image src="@/static/lsimg/chat_biaoqing.png" mode="" @tap="showEmj"></image>
					<textarea type="text" value="" v-model="huifu_txt" maxlength="5000" class="hei_26" />
					<button type="" class="bai_26" @click="huifu">回复</button>
				</view>
				<view class="zhanwei" v-if="isShowEmj"></view>
				<emotion @emotion="handleEmj" v-if="isShowEmj"></emotion>
    </view>
				
			</view>
		</view>
		
	<view class="bg" v-if="is_tan">
		<view class="tan_tishi" >
			<view class="tan_tishi_top hei_30_bold">
				<view class="tan_tishi_top_left hong_30_bold">
			       <image src="@/static/lsimg/jinggao.png" mode=""></image>	<text>提示</text>
					</view>
				 <image src="@/static/img/tan_close.png" mode="" @click="close" class="guanbi"></image>
			</view>
			<view class="hui_24 tan_tishi_txt">
				 请先回复用户，解答后显示电话号码
			</view>
			<button type="" class="bai_26" @click="close">知道啦</button>
		</view>
	</view>		
		
		
		
	</view>
</template>

<script>
	import emotion from '@/components/bkhumor-emoji/index.vue';
	import uParse from '@/components/feng-parse/parse.vue';
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			title: '提问详情',
			huifu_txt: '',
			id: '',
			xq: '',
			isShowEmj:false,
			is_tan:false,
			is_lianxi:''
		};
	},
	created() {},
	components: {
		emotion,
		uParse
	},
	onLoad(option) {
		console.log(option);

		// 获取分类
		this.id = option.id;
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
				this.huoqu_xq();
			});
		this.$http
			.post({
				url: '/mlawyerapi/consult/zaixian_lianxi'
			})
			.then(res => {
				this.is_lianxi=res.data.lawyer.zaixian_lianxi
			});	
			
			
			
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_xq() {
			this.$http
				.post({
					url: '/mapi/consult/zixun_xq',
					data: {
						consultid: this.id
					}
				})
				.then(res => {
					this.xq = res.data;
				});
		},
		huifu() {
			if (this.huifu_txt == '') {
				uni.showToast({
					title: '请输入回复内容',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if (this.huifu_txt.length < 10) {
				uni.showToast({
					title: '不得少于10个字',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}

			this.$http
				.post({
					url: '/lawyer/index/zhuiwen',
					data: {
						text: this.huifu_txt,
						consultid: this.xq.consult.consultid
					}
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '回复成功',
							duration: 2000
						});
						this.huifu_txt = '';
						setTimeout(function() {
							uni.navigateBack();
						}, 2000);
					}
				});
			console.log(this.huifu_txt);
		},
		replace_em(str) {
			str = str.replace(/\</g, '&lt;');
			str = str.replace(/\>/g, '&gt;');
			str = str.replace(/\n/g, '<br/>');
			str = str.replace(/\[em_([0-9]*)\]/g, '<img src="../../static/bkhumor-emoji/$1.gif" border="0" style="width:40rpx"/>');
			return str;
		},
		handleEmj(i) {
			console.log(i);
			if (i == '[em_98]') {
				//匹配最后一个表情符号并删除。
				this.huifu_txt = this.chat_txt.replace(/(\[[^\]]+\]|[\s\S])$/, '');
			} else {
				this.huifu_txt += i;
			}
			this.isShowEmj = false;
		},
		showEmj() {
			let bool = !this.isShowEmj;
			if (bool) {
				this.emojiIcon = 'cuIcon-keyboard';
				this.bt_show = false;
			} else {
				this.emojiIcon = 'cuIcon-emoji';
			}
		
			this.isShowEmj = bool;
			this.$emit('show');
		},
		lianxi(){
			
			if(this.is_lianxi==1){
				uni.navigateTo({
					url: 'chat?userid=' + this.xq.consult.userid
				})
			}else{
				if(this.xq.consult_replycount==0){
					this.is_tan=true
				}else{
					uni.navigateTo({
						url: 'chat?userid=' + this.xq.consult.userid
					})
				}
			}
			
			
			
		},
		close(){
			this.is_tan=false
		}
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
.xq_body_top {
	padding: 20rpx 30rpx 50rpx;
}

.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.xq_top_tx {
	display: flex;
	align-items: center;
	padding: 23rpx 30rpx 0;
}

.xq_top_tx image {
	width: 50rpx;
	height: 51rpx;
	border-radius: 100%;
	margin-right: 15rpx;
}

.xq_body {
}
.tiwen_wenti {
	position: relative;
}
.tiwen_zhuangtai {
	position: absolute;
	right: 30rpx;
	top: 10rpx;
}
.tiwen_zhuangtai image {
	width: 129rpx;
	height: 114rpx;
}
.tiwen_item_center {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20rpx;
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
	width: 21rpx;
	height: 21rpx;
	margin-right: 8rpx;
}

.xq_ls_left .xq_tx {
	width: 56rpx;
	height: 56rpx;
	border-radius: 100%;
	margin-right: 10rpx;
}

.jiang_num {
	position: absolute;
	right: 0rpx;
}
.xq_bottom {
	border-top: 2rpx solid #e8e8e8;
	padding: 0rpx 30rpx 240rpx;
}

.xq_ls {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30rpx 0 0;
}

.xq_ls_left {
	display: flex;
	position: relative;
	width: 100%;
}

.xq_zhauntai {
	width: 129rpx;
	height: 114rpx;
	background: url(../../static/lsimg/xq_zhuangtai.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
}

.xq_ls_time {
	margin-top: 4rpx;
}

.huifu_txt {
	-moz-transform: rotate(-35deg);
	-webkit-transform: rotate(-35deg);
	display: block;
	position: absolute;
	filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
	top: 40rpx;
	left: 20rpx;
}

.xq_huifu_txt {
	margin-top: 13rpx;
	line-height: 36rpx;
	padding-left: 62rpx;
}

.xq_ls_tx {
	position: relative;
}

.xq_renzheng {
	width: 15rpx;
	height: 15rpx;
	position: absolute;
	bottom: 15rpx;
	right: 10rpx;
	background-color: #ffffff;
	border-radius: 100%;
	border: 4rpx solid #ffffff;
}

.huifu_anxiu {
	display: flex;
align-items: center;
	padding: 40rpx 30rpx 40rpx;
	box-sizing: border-box;
	
	
	/* height: 150rpx; */
	width: 100%;
	justify-content: space-between;
	background-color: #ffffff;
}

.huifu_anxiu textarea {
	width: 505rpx;
	height: 150rpx;
	background-color: #f5f5f5;
	border-radius: 10rpx;
	border: solid 1rpx #d5d5d5;
	padding-left: 10rpx;
	padding: 8rpx;
	box-sizing: border-box;
}

.huifu_anxiu button {
	width: 99rpx;
	height: 60rpx;
	background-color: #f43a51;
	border-radius: 10rpx;
	line-height: 60rpx;
	padding: 0;
	box-sizing: border-box;
}

.zhuiwen {
	/* 		display: flex;
		align-items: flex-start;
		 */
	border-bottom: 2rpx solid #d9d9d9;
	padding: 16rpx;
	box-sizing: border-box;
}

.hui_zhuiwen {
	padding-top: 20rpx;
	border-bottom: 2rpx solid #d9d9d9;
	padding: 16rpx;
	box-sizing: border-box;
}

.zhuiwen .zhuiwen_txt {
	padding: 2rpx 4rpx;
	height: 26rpx;
	background-color: #0eb77e;
	border-radius: 3rpx;
	margin-right: 7rpx;
	line-height: 26rpx;
	margin-top: 6rpx;
	display: inline-block;
}

.zhuiwen_body {
	max-width: 450rpx;
	line-height: 38rpx;
	word-break: break-all;
}

.hui_zhuiwen_body {
	line-height: 36rpx;
	padding-left: 56rpx;
	margin-top: 10rpx;
	/* display: flex;
	align-items: flex-start;
	word-break: break-all; */
	word-break: break-all;
}
.hui_zhuiwen_body text {
	
	padding: 2rpx 4rpx;
	height: 26rpx;
	background-color: #f43a51;
	border-radius: 3rpx;
	margin-right: 7rpx;
	line-height: 26rpx;
	margin-top: 6rpx;
	display:inline-block;
}
.word_br {
	word-break: break-all;
	width: 470rpx;
}
.zhuiwen_body_yh {
/* 	display: flex;
	align-items: flex-start; */
	padding-left: 66rpx;
	word-break: break-all;
}
.hui_fir_ls {
	border-bottom: 2rpx solid #d9d9d9;
	padding: 0 0 30rpx;
	margin-top: 4rpx;
}
.huifu_anxiu image{
	width: 56rpx;
	height: 56rpx;
	margin-right: 10rpx;
}
.huifu_bottom{
	position: fixed;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
}

.lianxi{
	width: 160rpx;
		height: 56rpx;
		background-color: #ffffff;
		border-radius: 28rpx;
		border: solid 1rpx #f43a51;
		margin-left: 30rpx;
		line-height: 56rpx;
		text-align: center;
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
	.tan_tishi_top_left{
		display: flex;
		align-items: center;
	}
	.tan_tishi_top_left image{
			width: 31rpx;
			height: 27rpx;
			margin-right: 10rpx;
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
		border-bottom: 1rpx solid #cccccc;
	}
	.guanbi {
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
