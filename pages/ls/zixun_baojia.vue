<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">咨询报价</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="fuwu_top">
				<view class="fuwu_list">
					<view class="fuwu_list_left qian_24">
						<image src="@/static/lsimg/ls_guanli1.png" mode=""></image>
						<text class="hei_30 fuwu_leixing">服务范围</text>
						<text v-if="zhuanchang_arry[lawyerauth.expertise1] && zhuanchang_arry[lawyerauth.expertise1].shanchangname" class="youshi">
							{{ zhuanchang_arry[lawyerauth.expertise1].shanchangname }}
						</text>
						<text v-if="zhuanchang_arry[lawyerauth.expertise2] && zhuanchang_arry[lawyerauth.expertise2].shanchangname" class="youshi">
							{{ zhuanchang_arry[lawyerauth.expertise2].shanchangname }}
						</text>
						<text v-if="zhuanchang_arry[lawyerauth.expertise3] && zhuanchang_arry[lawyerauth.expertise3].shanchangname" class="youshi">
							{{ zhuanchang_arry[lawyerauth.expertise3].shanchangname }}
						</text>
					</view>
					<view class="fuwu_list_right qian_24" @click="go_zhiye">
						修改
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</view>
				<view class="fuwu_list">
					<view class="fuwu_list_left qian_24">
						<image src="@/static/lsimg/ls_guanli2.png" mode=""></image>
						<text class="hei_30 fuwu_leixing">服务地区</text>
						{{ lawyerauth.province }} {{ lawyerauth.city }}
					</view>
					<view class="fuwu_list_right qian_24" @click="go_zhiye">
						修改
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</view>
				<navigator url="jiedan_time" class="fuwu_list">
					<view class="fuwu_list_left qian_24">
						<image src="../../static/lsimg/fuwu_jiedan.png" mode=""></image>
						<text class="hei_30 fuwu_leixing">接单时间</text>
						<text class="qian_24">
							{{
								jiedan_time.workstate == 1
									? '全天24小时'
									: jiedan_time.workstate == 2
									? '白天（9:00-23:00）'
									: jiedan_time.workstate == 3
									? '晚上（23:00-9:00）'
									: jiedan_time.workstarttime + '-' + jiedan_time.workendtime
							}}
						</text>
					</view>
					<view class="fuwu_list_right qian_24">
						修改
						<image src="../../static/lsimg/go_r.png" mode=""></image>
					</view>
				</navigator>
			</view>

			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;" v-for="(item, index) in all_dalei">
				<view class="baojia_list_top hei_28">
					<text>
						<image src="@/static/lsimg/ls_guanli3.png" mode="" v-if="index == 0"></image>
						<image src="@/static/lsimg/ls_guanli4.png" mode="" v-if="index == 1"></image>
						<image src="../../static/lsimg/baojia_hetong.png" mode="" v-if="index == 2"></image>
						<image src="../../static/lsimg/baojia_weituo.png" mode="" v-if="index == 3"></image>
						<image src="../../static/lsimg/baojia_dangmian.png" mode="" v-if="index == 4"></image>
						<image src="@/static/lsimg/ls_guanli3.png" mode="" v-if="index == 5"></image>
						{{ item.name }}
						<switch name="switch" :disabled="true" @click="tanchu" :checked="kaiqi" color="#1890ff" />
					</text>
					<view class="baojia_list_top_right qian_28" @click="go_baojia(index + 1)" v-if="index != 4">
						<text>修改</text>
						<image src="@/static/lsimg/go_r.png" mode="" class="go_r"></image>
					</view>
					<view class="baojia_list_top_right qian_28" @click="go_jianmian()" v-if="index == 4">
						<text>修改</text>
						<image src="@/static/lsimg/go_r.png" mode="" class="go_r"></image>
					</view>
				</view>
				<view class="baojia_list_bottom qian_26">
					<text v-for="item2 in arry[index]" v-if="index != 4">￥{{ baojia[item2.baojiamode] }}/{{ item2.name }}</text>
					<text v-for="item2 in arry[index]" v-if="index == 4">￥{{ baojia[item2.baojiamode] }}/{{ item2.unit }}</text>
				</view>
			</view>

			<!-- <view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text><image src="@/static/lsimg/ls_guanli3.png" mode=""></image>在线咨询<switch name="switch" :disabled="true" @click="tanchu" :checked='kaiqi' color='#1890ff'/></text>
					<view class="baojia_list_top_right qian_28" @click="go_baojia(1)">
						<text>修改</text>
						<image src="@/static/lsimg/go_r.png" mode="" class="go_r"></image>
					</view>
				</view>
				<view class="baojia_list_bottom qian_26">
					
				<text v-for="item in arry1">￥{{baojia[item.baojiamode]}}/{{item.name}}</text>
				
				
			</view>
			</view>
			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text><image src="@/static/lsimg/ls_guanli4.png" mode=""></image>电话咨询<switch name="switch" :disabled="true" @click="tanchu" :checked='kaiqi' color='#1890ff'/></text>
					<view class="baojia_list_top_right qian_28" @click="go_baojia(2)">
						<text>修改</text>
						<image src="@/static/lsimg/go_r.png" mode=""class="go_r"></image>
					</view>
				</view>
				<view class="baojia_list_bottom qian_26">
				<text v-for="item in arry2">￥{{baojia[item.baojiamode]}}/{{item.name}}</text>
			</view>
			</view>
			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text><image src="../../static/lsimg/baojia_hetong.png" mode=""></image>合同文书<switch name="switch" :disabled="true" @click="tanchu" :checked='kaiqi' color='#1890ff'/></text>
					<view class="baojia_list_top_right qian_28" @click="go_baojia(3)">
						<text>修改</text>
						<image src="@/static/lsimg/go_r.png" mode="" class="go_r"></image>
					</view>
				</view>
				<view class="baojia_list_bottom qian_26 wen_txt">
				<text v-for="item in arry3">￥{{baojia[item.baojiamode]}}/{{item.name}}</text>
			</view>
			</view>
			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text><image src="../../static/lsimg/baojia_weituo.png" mode=""></image>诉讼委托<switch name="switch" :disabled="true" @click="tanchu" :checked='kaiqi' color='#1890ff'/></text>
					<view class="baojia_list_top_right qian_28" @click="go_baojia(4)">
						<text>修改</text>
						<image src="@/static/lsimg/go_r.png" mode="" class="go_r"></image>
					</view>
				</view>
				<view class="baojia_list_bottom qian_26 wen_txt">
				<text v-for="item in arry4">￥{{baojia[item.baojiamode]}}/{{item.name}}</text>
				
			</view>
			</view>
			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text><image src="../../static/lsimg/baojia_dangmian.png" mode=""></image>当面咨询<switch name="switch" :disabled="true" @click="tanchu" :checked='kaiqi' color='#1890ff'/></text>
					<navigator url="baojia_jianmian" class="baojia_list_top_right qian_28">
						<text v-for="item in arry5">￥{{baojia[item.baojiamode]}}/{{item.name}}</text>
						<image src="@/static/lsimg/go_r.png" mode="" class="go_r"></image>
					</navigator>
				</view>
			
			</view>
			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text>法律顾问</text>
					<view class="baojia_list_top_right qian_28" @click="go_baojia(5)">
						<text>修改</text>
						<image src="@/static/lsimg/go_r.png" mode="" class="go_r"></image>
					</view>
				</view>
				<view class="baojia_list_bottom qian_26 wen_txt guwen_txt">
				<text v-for="item in arry6">￥{{baojia[item.baojiamode]}}/{{item.name}}</text>
				
			</view>
			</view> -->
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			baojia: '',
			zhuanchang_arry: [],
			lawyerauth: '',
			jiedan_time: '',
			kaiqi: false,
			isvip: 2,
			all_dalei: [],
			arry: []
		};
	},
	created() {},
	onLoad(option) {
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
				this.huoqu_lawyerauth();
			});
		this.huoqu_kaiqi();
		this.huoqu_lawyer();
	},
	onShow() {
		this.all_dalei = [];
		this.arry = [];
		this.$http
			.post({
				url: '/mlawyerapi/lawyer/baojia'
			})
			.then(res => {
				this.baojia = res.data.lawyer;
			});
		this.$http
			.post({
				url: '/mapi/index/lawyerservice'
			})
			.then(res => {
				// this.baojia=res.data.lawyer
				res.data.forEach((item, index, array) => {
					if (!item.upserviceid) {
						this.all_dalei.push(item);
						this.arry.push([]);
					}
				});

				res.data.forEach((item, index, array) => {
					this.all_dalei.forEach((item2, index2, array2) => {
						if (item.upserviceid == item2.serviceid) {
							this.arry[index2].push(item);
						}
					});
				});

				console.log(this.arry);

				console.log(this.all_dalei);
			});
		// 获取接单时间
		this.$http
			.post({
				url: '/mlawyerapi/consult/getworktime'
			})
			.then(res => {
				this.jiedan_time = res.data;
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		go_baojia(type) {
			uni.navigateTo({
				url: 'baojia_list?type=' + type
			});
		},
		go_jianmian(){
			uni.navigateTo({
				url:'baojia_jianmian'
			})
		},
		go_zhiye() {
			uni.navigateTo({
				url: 'zhiye_renzheng'
			});
		},
		huoqu_lawyer() {
			this.$http
				.post({
					url: '/mlawyerapi/user/getlawyer'
				})
				.then(res => {
					this.isvip = res.data.user.isvip;
				});
		},
		huoqu_lawyerauth() {
			this.$http
				.post({
					url: '/mlawyerapi/lawyer/auth',
					data: {
						type: 2
					}
				})
				.then(res => {
					this.lawyerauth = res.data.lawyerauth;
				});
		},
		huoqu_kaiqi() {
			this.$http
				.post({
					url: '/mlawyerapi/consult/auto_match'
				})
				.then(res => {
					if (res.data.lawyer) {
						// this.userid=res.data.lawyer.userid

						if (res.data.lawyer.auto_match == 1) {
							this.kaiqi = true;
						} else {
							this.kaiqi = false;
						}
					}
				});
		},
		tanchu() {
			if (!this.kaiqi) {
				if (this.isvip == 1) {
					this.$http
						.post({
							url: '/mlawyerapi/consult/auto_matchopen'
						})
						.then(res => {
							if (res.code == 0) {
								uni.showToast({
									title: '已开启',
									duration: 2000,
									icon: 'none'
								});
								this.huoqu_kaiqi();
							}
						});
					// this.kaiqi=true
					console.log(this.isvip, 'kaiqi');
				} else {
					this.is_tan = true;
				}
			} else {
				this.$http
					.post({
						url: '/mlawyerapi/consult/auto_matchclose'
					})
					.then(res => {
						if (res.code == 0) {
							uni.showToast({
								title: '已关闭',
								duration: 2000,
								icon: 'none'
							});
							this.huoqu_kaiqi();
						}
					});
			}
		},
		close() {
			this.is_tan = false;
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.baojia_list {
	padding: 0 30rpx;
	background-color: #ffffff;
}
.baojia_list_bottom {
	padding-bottom: 16rpx;
}
.baojia_list_bottom text {
	height: 56rpx;
	background-color: #f7f7f7;
	border-radius: 10rpx;
	display: inline-block;
	line-height: 56rpx;
	/* width: 210rpx; */
	text-align: center;
	margin-right: 30rpx;
	padding: 0 12rpx;
	margin-bottom: 20rpx;
}
.wen_txt text {
	width: 260rpx;
}
.baojia_list_bottom text:nth-child(3n) {
	/* margin-right: 0; */
}

.shiming_list input {
	width: 500rpx;
	text-align: right;
}

.shiming_list_left {
	width: 170rpx;
}
.baojia_list_top {
	display: flex;
	height: 106rpx;
	align-items: center;
	justify-content: space-between;
}
.baocun_btn {
	padding: 0 30rpx;
	margin-top: 278rpx;
}
.baocun_btn button {
	height: 88rpx;
	background-color: #f43a51;
	border-radius: 44rpx;
	line-height: 88rpx;
}

.guwen_txt text {
	width: 365rpx;
}
.fuwu_top {
	padding: 0 30rpx;
	background-color: #ffffff;
	margin-bottom: 20rpx;
	border-bottom: 20rpx solid #f3f3f3;
}
.fuwu_list {
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2rpx solid #e8e8e8;
}
.fuwu_list_left {
	display: flex;
	align-items: center;
}
.fuwu_list_left image,
.baojia_list_top image {
	width: 36rpx;
	height: 36rpx;
	margin-right: 16rpx;
	border-radius: 5rpx;
}
.baojia_list_top image {
	vertical-align: text-bottom;
}
.fuwu_list:last-child {
	border: none;
}
.fuwu_leixing {
	margin-right: 22rpx;
}
.fuwu_list_right {
}
.fuwu_list_right image {
	width: 10rpx;
	height: 17rpx;
	margin-left: 10rpx;
}
.baojia_list_top_right .go_r {
	width: 12rpx;
	height: 21rpx;
	margin-left: 12rpx;
	vertical-align: middle;
}
.baojia_list_top switch {
	margin-left: 30rpx;
	transform: scale(0.7, 0.7);
}
.youshi {
	margin-right: 10rpx;
}
</style>
