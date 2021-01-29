<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">咨询详情</view>
			<view class=" head_right"><navigator url="tiwen_list" class="hei_30_bold">提问记录</navigator></view>
		</view>

		<view class="zi_body ">
			<view class="wenti hei_28" v-if="xinxi">
				<view class="wenti_top">
					<image :src="img_url + data.user.photourl" mode=""></image>
					{{ data.user.nickname }}
				</view>
				<view class="" :class="['', is_zhankai ? 'zhankai' : 'zhankai']">{{ xinxi.information }}</view>
				<view class="tiwen_item_center qian_22">
					<view class="tiwen_item_biaoqian" v-if="fenlei != ''">
						<image src="@/static/img/biaoqian.png" mode=""></image>
						{{ fenlei[xinxi.typeid].typename }}
					</view>
					<view class="tiwen_item_dizhi">
						<image src="@/static/img/dizhi.png" mode=""></image>
						{{ xinxi.province }}-{{ xinxi.city }}
					</view>
					<view class="tiwen_item_shijian">
						<image src="@/static/lsimg/shijian_icon.png" mode=""></image>
						{{ xinxi.addtime | timeStamp }}
					</view>
				</view>
				<!-- 	<view class="wenti_zhankai lv_28" @click="zhan">
					{{is_zhankai?'收起':'展开'}}
					<image src="@/static/img/zhankai.png" mode="" :class="is_zhankai?'zhuan':''"></image>
				</view> -->
			</view>

			<view class="none" v-if="huifu_list.length == 0">
				<image src="@/static/img/tiwen_no_huifu.png" mode=""></image>
				<view class="qian_30 zanwu_txt">暂无回复</view>
				<view class="lv_26 huiqu_huifu">如何快速获取律师回复</view>
			</view>

			<view class="huida_num hei_28" v-if="huifu_list.length != 0">
				共
				<text class="hong_28">{{ data.consult_replycount }}</text>
				位律师回复
			</view>
			<view class="ls_list" v-if="huifu_list.length != 0">
				<view class="ls_item" v-for="item in huifu_list">
					<view class="ls_item_top">
						<view class="ls_item_top_tx">
							<image :src="img_url + item.photourl" mode="" class="ls_item_top_tx_img" @click="go_zhuye(item.userid)"></image>
							<image src="@/static/img/renzheng2.png" mode="" class="ls_item_top_tx_ren"></image>
						</view>
						<view class="ls_item_right_top">
							<view class="hei_30 ls_item_name" @click="go_zhuye(item.userid)">{{ item.nickname }}律师</view>

							<view class="qian_24">
								已解答
								<text class="lv_24">131313</text>
								次
							</view>
						</view>
						<view class="caina" v-if="data.consult.lawyerid==item.userid">
							<image src="@/static/img/caina.png" mode=""></image>
						</view>
						<view class="guanzhu bai_24"v-if="item.guanzhu==2" @click="guanzhu(item.userid)">
						<image src="@/static/img/guan_no.png" mode=""></image>	关注
						</view>
						<view class="yiguanzhu bai_24"v-if="item.guanzhu==1" >
						      已关注
						</view>
					</view>

					<view class="ls_item_right">
						<view class="ls_item_right_bottom_list">
							<text class="hui_26 huida_txt">{{ item.information }}</text>
						</view>
						<view class="qian_24">
							{{ item.addtime | timeStamp }}
							<text style="margin-left: 10rpx;">回复</text>
						</view>
						<view class="ls_item_right_bottom">
							<!-- <view class="ls_item_right_bottom_list">
							<text class="qian_26 huida_txt">{{item.information}}</text>
							</view> -->
							<!-- 	<view class="zhuiwen bai_24" @click="zhuiwen(item.userid,item.crid)">
								追问
							</view> -->
						</view>
					</view>
					<view class="zhui_list">
						<view class="zhui_item" v-for="zhui_item in item.zhuiwen">
							<view class="zhui_item_xq" v-if="zhui_item.type == 1">
								<view class="zhui_item_xq_top">
									<view class="ls_item_top_tx"><image :src="img_url + data.user.photourl" mode="" class="ls_item_top_tx_img"></image></view>
									<view class="ls_item_right_top">
										<view class="hei_30 ls_item_name" @click="go_zhuye(item.userid)">{{ data.user.nickname }}</view>

										<view class="qian_24">{{ item.addtime | timeStamp }}</view>
									</view>
								</view>
								<view class="zhuiwen_body hui_26">
									{{ zhui_item.information }}
								</view>
							</view>
							<view class="zhui_item_xq" v-if="zhui_item.type == 2">
								<view class="zhui_item_xq_top">
									<view class="ls_item_top_tx">
										<image :src="img_url + item.photourl" mode="" class="ls_item_top_tx_img" @click="go_zhuye(item.userid)"></image>
										<image src="@/static/img/renzheng2.png" mode="" class="ls_item_top_tx_ren"></image>
									</view>
									<view class="ls_item_right_top">
										<view class="hei_30 ls_item_name" @click="go_zhuye(item.userid)">{{ item.nickname }}律师</view>

										<view class="qian_24">{{ item.addtime | timeStamp }}</view>
									</view>
								</view>
								<view class="zhuiwen_body hui_26">
									{{ zhui_item.information }}
								</view>
							</view>

							<!-- <text class="zhuiwen_txt qian_20">{{ zhui_item.type == 1 ? '追问' : '追答' }}</text> -->
						</view>
					</view>

					<view class="tiwen_caozuo lv_26">
						<view class="zhuiwen_caozuo zhuiwen_txt" @click="tan(item.crid)" v-if="data.consult.tiwenstate!=4"><image src="@/static/img/wen_zhui.png" mode="" style="width: 26rpx;height: 26rpx;"></image>追问</view>
						<view class="zhuiwen_caozuo caina_txt"@click="xuanshang_tan(item.userid,item.photourl,item.nickname,item.replynum)" v-if="data.consult.tiwenstate==2"><image src="@/static/img/wen_caina.png" mode="" style="width: 23rpx;height: 27rpx;"></image>采纳悬赏</view>
					   <navigator :url="'ls_zhuye?lawyerid='+item.userid" class="zhuiwen_caozuo lianxi_txt">
						<image src="@/static/img/wen_zaixian.png" mode="" style="width: 28rpx;height: 27rpx;"></image>在线联系
						</navigator>
					    <navigator :url="'pingjia?lawyerid='+item.userid" class="zhuiwen_caozuo pingjia_txt">
						<image src="@/static/img/wen_pingjia.png" mode="" style="width: 29rpx;height: 29rpx;"></image>评价
					    </navigator>
					</view>
				</view>
			</view>
			<view class="get_more hei_26" @click="get_more()" v-if="!is_all">查看更多></view>
		</view>
		
		
		
	<uni-popup type="center" ref="popup">
		<view class="tan">
			<view class="tan_title">
				<text></text><text>追问</text> <image src="@/static/img/tan_close.png" mode=""  @click="xiao1"></image>
			</view>
			<view class="tan_bottom">
				<textarea value="" placeholder="" class="hei_26" v-model="hui_txt"/>
				<view class="tan_bottom_btn">
					<button type="" class="quxiao bai_30"  @click="xiao1">取消</button>
					<button type="" class="go_zhuiwen bai_30" @click="send()">确认追问</button>
				</view>	
			</view>
		</view>
	</uni-popup>	
		
		<uni-popup type="center" ref="popup2">
			<view class="tan_shang">
				<view class="tan_title">
					<text></text><text>采纳悬赏</text> <image src="@/static/img/tan_close.png" mode=""  @click="xiao2"></image>
				</view>
				<view class="tan_shang_bottom">
					
					<view class="hei_30 tan_shang_txt">
						确认采纳{{shang_name}}律师的回答内容做为悬赏吗？
					</view>
					<view class="tan_ls">
						<view class="tan_ls_top">
							<image :src="img_url+shang_img" mode="" class="tan_ls_top_img"></image>
							<image src="@/static/img/renzheng2.png" mode="" class="tan_ls_top_ren"></image>
						</view>
						<view class="tan_ls_name">
							{{shang_name}}律师
						</view>
						<view class="qian_24">
							已解答 <text class="lv_24">{{replynum}}</text>次
						</view>
					</view>
					
					<view class="tan_bottom_btn">
						<button type="" class="go_zhuiwen bai_30" @click="shang()">确认采纳</button>
						<button type="" class="quxiao bai_30" @click="xiao2">取消</button>
					</view>	
				</view>
			</view>
		</uni-popup>	
		
		
		
		
	</view>
</template>

<script>
	import unpopup from '@/components/uni-popup/uni-popup-share.vue';
export default {
	components: {
		unpopup
	},
	onLoad(option) {
		this.consultid=option.id
		this.get_xq();
		this.wenid = option.id;
	},
	onShow() {
		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
				var array = [];
				for (var key in res.data.type) {
					array.push(res.data.type[key]);
				}
				this.zhuanchang_arry = array;
			});
	},

	data() {
		return {
			is_zhankai: true,
			shujv: true,
			is_all: false,
			xinxi: '',
			wenid: '',
			huifu_list: [],
			img_url: uni.getStorageSync('img_url'),
			data: '',
			zhuanchang_arry: [],
			crid:'',
			hui_txt:'',
			consultid:'',
			fenlei:'',
			shang_id:'',
			shang_name:'',
			shang_img:'',
			replynum:0
		};
	},
	created() {},

	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		zhan() {
			this.is_zhankai = !this.is_zhankai;
		},
		zhuiwen(lawyerid, crid) {
			uni.navigateTo({
				url: 'zhuiwen?lawyerid=' + lawyerid + '&crid=' + crid
			});
		},
		get_xq() {
			this.$http
				.post({
					url: '/mapi/consult/zixun_xq',
					data: {
						consultid: this.consultid
					}
				})
				.then(res => {
					console.log(res);
					this.xinxi = res.data.consult;
					this.data = res.data;
					this.huifu_list = res.data.consult_reply;
					if (res.data.consult_replycount < 5) {
						this.is_all = true;
					}
				});
		},

		// 获取更多回复
		get_more() {
			var last_id = this.huifu_list[this.huifu_list.length - 1].crid;
			this.$http
				.post({
					url: '/mapi/consult/getconsult_reply',
					data: {
						consultid: this.wenid,
						crid: last_id
					}
				})
				.then(res => {
					console.log(res);
					if (res.data.consult_reply.length < 5) {
						this.is_all = true;
					}
					for (var i = 0; i < res.data.consult_reply.length; i++) {
						this.huifu_list.push(res.data.consult_reply[i]);
					}
				});
		},
		go_zhuye(id) {
			uni.navigateTo({
				url: 'ls_zhuye?lawyerid=' + id
			});
		},
		// 底部弹窗
		tan(crid) {
			this.crid=crid
			this.$refs.popup.open();
		},
		// 悬赏弹窗
		xuanshang_tan(userid,img,name,replynum) {
			this.shang_id=userid
			this.shang_name=name
			this.shang_img=img
			this.replynum=replynum
			this.$refs.popup2.open();
		},
		xiao1(){
			this.$refs.popup.close();
		},
		xiao2(){
			this.$refs.popup2.close();
		},
		shang(){
			console.log(this.shang_id,this.consultid)
			
			this.$http
				.post({
					url: '/index/zixun/xuanshang',
					data: {
						consultid: this.consultid,
						lawyerid:this.shang_id
					}
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '采纳成功',
							duration: 2000,
							icon: 'none'
						});
						this.get_xq()
					}
				});
			
			this.$refs.popup2.close();
		},
		guanzhu(lawyerid){
			this.$http
				.post({
					url: '/mapi/index/guanzhu',
					data: {
						lawyerid: lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: res.message,
							duration: 2000,
							icon: 'none'
						});
						this.get_xq()
					}
				});
		},
		// 添加追问
		send(){
			if(this.hui_txt==''){
				uni.showToast({
					title: '请输入回复内容',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
			this.$http
				.post({
					url: '/index/zixun/zhuiwen',
					data: {
						crid: this.crid,
						txt:this.hui_txt
					}
				})
				.then(res => {
					if(res.code==0){
						uni.showToast({
							title: '回复成功',
							duration: 2000,
							icon: 'none'
						});
						this.$refs.popup.close();
						this.get_xq()
					}
				});
			console.log(this.hui_txt,this.crid)
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
	background-color: #f7f7f7;
}

.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.wenti {
	padding: 19rpx 30rpx;
	background-color: #ffffff;
	margin-bottom: 20rpx;
}
.wenti_top {
	display: flex;
	align-items: center;
}
.wenti_top image {
	width: 98rpx;
	height: 97rpx;
	margin-right: 23rpx;
	border-radius: 100%;
}
.wenti_zhankai {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 4rpx;
}

.wenti_zhankai image {
	width: 28rpx;
	height: 17rpx;
	margin-left: 4rpx;
}
.zhuan {
	transform: rotate(180deg);
	-ms-transform: rotate(180deg); /* IE 9 */
	-moz-transform: rotate(180deg); /* Firefox */
	-webkit-transform: rotate(180deg); /* Safari 和 Chrome */
	-o-transform: rotate(180deg); /* Opera */
	transition: all 0.5s ease-in-out;
}

.zhankai {
	/* zhakai */
	word-break: break-all;
}

.zhankai_none {
	height: 40rpx;
	overflow: hidden;
}

.huida_num {
	height: 90rpx;
	line-height: 90rpx;
	background-color: #ffffff;
	border-bottom: 2rpx solid #f7f7f7;
	padding: 0 30rpx;
}
.none {
	text-align: center;
}
.none image {
	width: 186rpx;
	height: 159rpx;
	margin: 86rpx 0 0;
}
.zanwu_txt {
	margin: 16rpx 0;
}
.huiqu_huifu {
	text-decoration: underline;
}
.ls_list {
	padding: 0 30rpx;
	background-color: #ffffff;
}

.ls_item {
	/* display: flex; */
	justify-content: space-between;
	padding: 30rpx 0 0;
}
.ls_item_top {
	display: flex;
	position: relative;
}
.guanzhu{
	position: absolute;
	right: 0;
		width: 100rpx;
		height: 36rpx;
		background-color: #cccccc;
		border-radius: 3rpx;
		line-height: 36rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
}
.yiguanzhu{
	position: absolute;
	right: 0;
		width: 100rpx;
		height: 36rpx;
		background-color: #f43a51;
		border-radius: 3rpx;
		text-align: center;
		line-height: 36rpx;
		
}
.caina{
	position: absolute;
	left: 150rpx;
	top:20rpx
}
.caina image{
	width: 82rpx;
	height: 72rpx;	
}
.guanzhu image{
		width: 24rpx;
		height: 20rpx;
		margin-right: 2rpx;
}
.ls_item_top_tx {
	width: 95rpx;
	height: 95rpx;
	margin-right: 23rpx;
	position: relative;
}
.ls_item .ls_item_top_tx_img {
	width: 100%;
	height: 100%;
	border-radius: 100%;
}
.ls_item_top_tx_ren {
	position: absolute;
	bottom: 0rpx;
	right: 10rpx;
	width: 16rpx;
	height: 16rpx;
	border: 2rpx;
	isolation: #ffffff;
	background-color: #ffffff;
	border-radius: 100%;
}
.ls_item_right_top {
}

.ls_item_right_bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.huida_txt {
	display: inline-block;
	white-space: normal;
	word-break: break-all;
	margin: 12rpx 0;
}
.ls_item_right_bottom_list {
	
}
.zhuiwen {
	width: 75rpx;
	height: 44rpx;
	background-color: #0eb77e;
	border-radius: 22rpx;
	text-align: center;
	line-height: 44rpx;
}

.ls_item_right {
	
}

.mianfei {
	width: 116rpx;
	height: 30rpx;
	background-color: #cccccc;
	border-radius: 3rpx;
	display: inline-block;
	text-align: center;
	line-height: 30rpx;
	margin-left: 10rpx;
}
.get_more {
	height: 90rpx;
	background-color: #dcdcdc;
	line-height: 90rpx;
	text-align: center;
}
.zhui_list {
	margin-bottom: 6rpx;
	padding-left: 123rpx;
	margin-top: 20rpx;
}
.zhuiwen_txt {
	border: 1px solid #eeeeee;
	padding: 0rpx 6rpx;
	line-height: 32rpx;
	height: 32rpx;
	border-radius: 14rpx;
	/* 	position: relative;
		top: 6rpx; */
	
	background-color: #ffffff;
}
.zhui_item {
	display: flex;
	align-items: flex-start;
	margin-bottom: 8rpx;
}
.zhui_item_xq {
	border-top: 2rpx solid #dcdcdc;
	width: 100%;
	padding: 24rpx 0 0;
}

.zhui_item:first-child {
	margin-top: 4rpx;
}
.zhuiwen_body {
	max-width: 100%;
	line-height: 34rpx;
	
	white-space: normal;
	word-break: break-all;
	margin: 20rpx 0;
}

.tiwen_item_center {
	display: flex;
	align-items: center;
	margin: 18rpx 0 10rpx;
	justify-content: space-between;
}

.tiwen_item_dizhi image {
	width: 18rpx;
	height: 20rpx;
	margin-right: 8rpx;
}
.tiwen_item_biaoqian {
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
.zhui_item_xq_top {
	display: flex;
}

.tiwen_caozuo {
	display: flex;
	justify-content: flex-end;
	/* border-top: 2rpx solid #dcdcdc; */
	border-bottom: 2rpx solid #dcdcdc;
	padding-bottom: 30rpx;
	/* padding-top: 30rpx; */
}
.zhuiwen_caozuo {
	height: 60rpx;
	background-color: #ffffff;
	border-radius: 30rpx;
	border: solid 2rpx #0eb77e;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 15rpx;
}
.zhuiwen_caozuo:first-child{
	margin-left: 0;
}
.zhuiwen_caozuo image {
	margin-right: 10rpx;
}
.zhuiwen_txt,
.pingjia_txt {
	width: 140rpx;
}
.caina_txt,
.lianxi_txt {
	width: 180rpx;
}
.ls_item_name{
	margin: 12rpx 0 6rpx;
}
.tan{
		width: 688rpx;
		height: 545rpx;
		background-color: #ffffff;
		border-radius: 5rpx;
}
.tan_title{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 37rpx;
	height: 106rpx;
	font-size: 38rpx;
	color: #0eb77e;
}
.tan_title image{
	width: 26rpx;
		height: 26rpx;
}
.tan_bottom{
	padding: 0 20rpx;
}
.tan_bottom textarea{
	height: 216rpx;
		background-color: #ffffff;
		border: solid 1rpx #cccccc;
		padding: 20rpx;
		box-sizing: border-box;
		margin: 0;
		width: 100%;
}
.tan_bottom_btn{
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 82rpx;
}
.quxiao{
		width: 214rpx;
		height: 80rpx;
		background-color: #c6c6c6;
		border-radius: 40rpx;
		line-height: 80rpx;
		margin: 0 36rpx 0 0rpx;
}
.go_zhuiwen{
	width: 214rpx;
		height: 80rpx;
		background-color: #0eb77e;
		border-radius: 40rpx;
		line-height: 80rpx;
		margin: 0;
}
.tan_shang{
		width: 688rpx;
		height: 632rpx;
		background-color: #ffffff;
		border-radius: 5rpx;
}
.tan_shang .quxiao{
	margin: 0 0 0 36rpx;
	}
.tan_shang .tan_title{
	border-bottom: 2rpx solid #ececec;
}
.tan_shang_bottom{
	text-align: center;
	
}
.tan_shang_txt{
	line-height: 100rpx;
}
.tan_shang .tan_bottom_btn{
	margin-top: 40rpx;
	border-top: 2rpx solid #ececec;
	padding-top: 60rpx;
}
.tan_ls_top{
		width: 94rpx;
		height: 94rpx;
		position: relative;
		margin: 0 auto;
}
.tan_ls_top_img {
	width: 100%;
	height: 100%;
	border-radius: 100%;
}
.tan_ls_top_ren{
	background-color: #FFFFFF;
	width: 15rpx;
		height: 15rpx;
		border-radius: 100%;
		border: 2rpx solid #FFFFFF;
		position: absolute;
		right: 0;
		bottom: 0;
}
.tan_ls_name{
	margin: 8rpx 0;
}
</style>
