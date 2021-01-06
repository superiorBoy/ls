<template>
	<view class="body">
		<view class=" ">
			<view class="ls_top_bg">
				<view class="ls_top_bg_wai">
					<view class="head2">
						<view class="head_back"><image src="@/static/img/bai_back.png" mode="" @click="navigateBack()"></image></view>
						<view class="head_center bai_38_bold">律师主页</view>
						<view class=" head_right hei_30_bold"></view>
					</view>
				</view>
			</view>
			<view class="ls_padd">
				<view class="ls_top">
					<view class="ls_tx">
						<image :src="img_url+lvshi.photourl" mode="" class="ls_tx_img"></image>
						<image src="@/static/img/ls_ren.png" mode="" class="is_ren"></image>
					</view>
					<view class="hei_28_bold">{{lvshi.nickname}}</view>
					<view class="qian_26 ls_dizhi">
						<text>{{lvshi.province}}-{{lvshi.city}}</text>
						<text>专职律师</text>
					</view>
					<view class="hui_26 techang" v-if="lvshi!=''">
						<text>{{zhuanchang_arry[lvshi.expertise1].shanchangname}}</text>
						<text>{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
						<text>{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
					</view>
					<view class="ls_gaikuo">
						<view class="ls_gaikuo_item">
							<view class="lv_30 ls_gaikuo_num">{{lvshi.replynum}}</view>
							<view class="qian_26">解答咨询</view>
						</view>
						<view class="ls_gaikuo_item">
							<view class="lv_30 ls_gaikuo_num">{{lvshi.likenum}}</view>
							<view class="qian_26">获得点赞</view>
						</view>
						<view class="ls_gaikuo_item">
							<view class="lv_30 ls_gaikuo_num">{{lvshi.pingfen}}</view>
							<view class="qian_26">综合评分</view>
						</view>
					</view>
				</view>
			</view>

			<view class="fuwu_body">
				<view class="hei_28_bold ls_jilu">图文解答</view>

				<view class="huifu_list">
					<view class="huifu_item" v-for="item in tuwen_list" @click="xq(item.lytuwenid)">
						<view class="huifu_item_top">
							<view class="huifu_item_top_tx">
								<image :src="img_url+lvshi.photourl" mode="" class="huif_tx"></image>
								<image src="@/static/img/renzheng.png" mode="" class="renzheng"></image>
							</view>
							<view class="huifu_item_top_right">
								<view class="hei_26_bold huifu_item_name">{{lvshi.nickname}}律师</view>
								<view class="qian_20">
									<text class="yuedu">{{item.readnum}}次阅读</text>
									<text>#{{type_list[item.typeid].typename}}</text>
								</view>
							</view>
						</view>
						<view class="biaoti hei_24">{{item.title}}</view>
						<view class="wen_body  qian_20">文章内容：{{item.information}}</view>
						<view class="tuwen_img"><image :src="img_url+item.pic" mode="widthFix"></image></view>
					</view>
				</view>

				<view class="fenye hei_26">
					<view class="shangyiye" @click="pre_ye()">
						<image src="@/static/img/shangye.png" mode="" style="width: 14rpx;height: 14rpx;"></image>
						上一页
					</view>
					<view class="yeshu qian_26">
						<text class="lv_26">{{page+1}}</text>
						/{{yeshu}}
					</view>
					<view class="xiayiye" @click="nextye()">
						下一页
						<image src="@/static/img/xiaye.png" mode="" style="width: 14rpx;height: 14rpx;"></image>
					</view>
				</view>

				<view class="zhanwei2" style="height: 120rpx;"></view>
				<view class="bottom">
					<view class="bottom_fenxiang">
						<image src="@/static/img/share.png" mode=""></image>
						<view class="hui_26">分享</view>
					</view>
					<view class="bottom_pingjia" @click="go_dianping()">
						<image src="@/static/img/go_pingjia.png" mode=""></image>
						<view class="hui_26">评价</view>
					</view>
					<view class="dianhua lv_26"  @click="go_chat(lvshi.userid)">
						<image src="@/static/img/dianhua_lv.png" mode=""></image>
						电话咨询
					</view>
					<view class="zaixian bai_26" @click="go_chat(lvshi.userid)">
						<image src="@/static/img/zaixian_bai.png" mode=""></image>
						在线咨询
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
			img_url: uni.getStorageSync('img_url'),
			lawyerid:'',
			tuwen_list:[],
			zhuanchang_arry:'',
			lvshi:'',
			page:0,
			type_list:[],
			is_all:false,
			yeshu:0
		};
	},
	created() {},
	onLoad(option) {
		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.type_list = res.data.type;
			});
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
				this.huoqu_lvshi()
			});
		this.lawyerid=option.lawyerid
		this.huoqu_tuwen()
		this.huiqu_num()
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
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
		// 获取图文
		huoqu_tuwen(){
			this.$http
				.post({
					url: '/mapi/lawyer/tuwenlist',
					data: {
						lawyerid:this.lawyerid,
						page:this.page
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.tuwen_list=this.tuwen_list.concat(res.data.tuwen);
						if(res.data.tuwen.length<10){
							this.is_all=true
						}
					}
				});	
		},
		// 获取图文总数
		huiqu_num(){
			this.$http
				.post({
					url: '/mapi/lawyer/tuwenlistcount',
					data: {
						lawyerid:this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.yeshu= Math.ceil(res.data.count/10); 
					}
				});	
		},
		xq(lytuwenid) {
			uni.navigateTo({
				url: 'tuwen_xq?lytuwenid='+lytuwenid
			});
		},
		pre_ye(){
			if(this.page==0){
				uni.showToast({
					title: '暂无更多',
					duration: 2000,
					icon: 'none'
				});
				return false
			}else{
				this.page--
				this.huoqu_lvshi()
			}
		},
		nextye(){
			if(this.is_all){
				uni.showToast({
					title: '暂无更多',
					duration: 2000,
					icon: 'none'
				});
				return false
			}else{
				this.page++
				this.huoqu_lvshi()
			}
		
		},
		tochat(id,mobile) {
			uni.navigateTo({
				url: 'zaixian_wen?user=' + id+'&mobile='+mobile
			});
		},
		go_chat(id){
			uni.navigateTo({
				url:'chat?lsid='+id
			})
		},
		go_dianping(){
			uni.navigateTo({
				url:'pingjia?lsid='+this.lawyerid
			})
		},
		call(mobile) {
			uni.makePhoneCall({
				// 手机号
				phoneNumber: ''+mobile,
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
		go_pay(lawyerid){
			uni.navigateTo({
				url:'pay?lawyerid='+lawyerid
			})
		}
	}
};
</script>

<style>
.ls_top_bg {
	width: 100%;
	height: 308rpx;
	background: url(../../static/img/ls_bg.png) no-repeat;
	background-size: 100% 100%;
}
.head2 {
	background: none;
	padding-top: 86rpx;
	display: flex;
	justify-content: space-between;
	/* position: fixed; */
	top: 0;
	width: 100%;
	padding: 96rpx 30rpx 26rpx;
	z-index: 99;
	box-sizing: border-box;
	align-items: center;
}
.ls_tx_img {
	width: 152rpx;
	height: 152rpx;
	margin-top: -76rpx;
	border-radius: 100%;
}
.is_ren {
	width: 24rpx;
	height: 22rpx;
	position: absolute;
	bottom: 26rpx;
	left: 364rpx;
}
.ls_top {
	height: 398rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(0, 0, 0, 0.13);
	border-radius: 10rpx;
	text-align: center;
	padding: 0 30rpx;
	box-sizing: border-box;
}
.ls_padd {
	padding: 0 30rpx;
	margin-top: -45rpx;
}
.ls_tx {
	text-align: center;
	position: relative;
	margin-bottom: 10rpx;
}
.ls_gaikuo {
	display: flex;
	justify-content: space-between;
}
.ls_top_bg_wai {
	background-color: rgba(0, 0, 0, 0.6);
	height: 308rpx;
}
.ls_dizhi text {
	margin-right: 30rpx;
}
.ls_dizhi {
	margin: 10rpx 0;
}
.techang {
	margin: 30rpx 0;
}

.techang text {
	height: 42rpx;
	background-color: #f5f5f5;
	line-height: 42rpx;
	margin-right: 20rpx;
	padding: 10rpx 10rpx;
}
.ls_gaikuo {
	border-top: 2rpx solid #f7f7f7;
	padding: 20rpx 0;
}
.ls_gaikuo_item {
	position: relative;
	width: 33.33%;
}
.ls_gaikuo_item::before {
	content: '';
	width: 2rpx;
	height: 36rpx;
	background-color: #f7f7f7;
	position: absolute;
	right: 0;
	top: 26rpx;
}
.ls_gaikuo_item:last-child::before {
	content: none;
}
.ls_gaikuo_num {
	margin-bottom: 8rpx;
}

.ls_jilu {
	padding-left: 30rpx;
	margin: 37rpx 0 15rpx;
}

.pingjia {
	padding: 30rpx 0rpx 0rpx;
}
.pingjia_title {
	margin: 32prx 0 18rpx;
	padding: 0 30rpx;
}

.bottom {
	display: flex;
	padding: 0 30rpx;
	height: 100rpx;
	align-items: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #ffffff;
}
.bottom_fenxiang,
.bottom_pingjia {
	text-align: center;
	margin-right: 22rpx;
}
.bottom_fenxiang image {
	width: 24rpx;
	height: 23rpx;
}

.bottom_pingjia image {
	width: 25rpx;
	height: 24rpx;
}
.dianhua {
	width: 270rpx;
	height: 74rpx;
	border: solid 1rpx #0eb77e;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10rpx 0 0 10rpx;
}
.dianhua image {
	width: 25rpx;
	height: 27rpx;
	margin-right: 16rpx;
}
.zaixian image {
	width: 26rpx;
	height: 26rpx;
	margin-right: 12rpx;
}
.zaixian {
	width: 270rpx;
	height: 74rpx;
	background-color: #0eb77e;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0 10rpx 10rpx 0;
}

.qiun-charts {
	width: 100%;
	height: 500rpx;
	background-color: #ffffff;
	border-bottom: 2rpx solid #f7f7f7;
}
.charts {
	width: 100%;
	height: 100%;
	background-color: #ffffff;
}
.huifu_item_huida_left {
	/* display: flex; */
	/* align-items: center; */
}
.huifu_list {
	padding: 0 30rpx;
}

.huifu_item {
	border-bottom: 2rpx solid #eeeeee;
	padding: 12rpx 0;
}
.huifu_item_top {
	display: flex;
	margin-bottom: 10rpx;
}
.huifu_item_name {
	margin-bottom: 10rpx;
}
.yuedu {
	margin-right: 20rpx;
}
.huifu_item_top_tx {
	width: 80rpx;
	height: 80rpx;
	position: relative;
	margin-right: 20rpx;
}
.huif_tx {
	width: 100%;
	height: 100%;
	border-radius: 100%;
}
.renzheng {
	width: 20rpx;
	height: 17rpx;
	position: absolute;
	right: -4rpx;
	bottom: 4rpx;
}
.wen_body {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	margin: 10rpx 0;
	line-height: 38rpx;
}
.tuwen_img image {
	width: 100%;
	max-height: 300rpx;
}
.fenye {
	display: flex;
	justify-content: space-between;
	padding: 0 30rpx;
	height: 88rpx;
	background-color: #fcfcfc;
	align-items: center;
	margin-bottom: 50rpx;
	border-top: 2rpx solid #eeeeee;
	border-bottom: 2rpx solid #eeeeee;
}
.yeshu {
	height: 41rpx;
	border-radius: 20rpx;
	border: solid 1rpx #dcdcdc;
	line-height: 40rpx;
	padding: 0 40rpx;
}
.shangyiye,
.xiayiye {
	display: flex;
	align-items: center;
}
</style>
