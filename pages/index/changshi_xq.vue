<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">知识详情</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="erji_weizhi hui_26_bold">
				<text @click="go_index()">首页</text>	
				<image src="@/static/img/zhishi_weizhi.png" mode=""></image>
				<navigator url="changshi">法律知识</navigator> 
				<image src="@/static/img/zhishi_weizhi.png" mode=""  v-if="yiji_title!=''"></image>
				<navigator :url="'changshi_erji?typeid='+yiid" v-if="yiji_title!=''">{{yiji_title}} </navigator>
				<image src="@/static/img/zhishi_weizhi.png" mode=""  v-if="er_title!=''"></image>
				<navigator :url="'changshi_sanji?erjiid='+er_id +'&yi_id='+yiid" v-if="er_title!=''">{{er_title}} </navigator>
				<image src="@/static/img/zhishi_weizhi.png" mode=""></image>
				<text class="hei_30">详情</text>
			</view>
			<view class="zhishi_xq">
				<view class="xq_title hei_30_bold">{{ data.title }}</view>
				<view class="xq_top qian_24">
					<view class="xq_top_item1">
						<image src="@/static/img/shuqian.png" mode=""></image>
						小虎网络整理
					</view>
					<view class="xq_top_item2">
						<image src="@/static/img/changshi_time.png" mode=""></image>
						{{ data.addtime | timeStamp }}
					</view>
					<view class="xq_top_item3">
						<image src="@/static/img/changshi_liulan.png" mode=""></image>
						{{data.readnum}}浏览
					</view>
				</view>
				<view class="zhaiyao hui_26" v-if="data.daodu != ''">{{ data.daodu }}</view>

				<view class="zhengwen hei_26">
					<u-parse :content="data.information"></u-parse>

					<!-- 	<image src="../../static/img/banner5.jpg" mode="widthFix"></image>
					<view class="hei_26">
						可能大家在看刑法当中的法律条文的时候都可以发现在很多 的犯罪量刑的条文规定中可以看到没收个人全部财产。当然，
						这种没收的话，它是分为几种方式的，比如说有并处没收个 人全部财产。因此，有人想要了解一下。并处没收个人全部 财产的规定是什么?
					</view>
					<view class="xq_zhengwen_title hei_26_bold">一、并处没收个人全部财产的规定是什么?</view>
					<view class="hei_26">
						必并制，指在判处其他刑罚的同时必须同时并处没收财产。 例如，刑法第383条规定，对犯贪污罪的，个人贪污数额在 10万元以上的，情节特别严重的，处死刑，并处没收财产
					</view>
					<br />
					<view class="hei_26">没收财产没收的是哪些财产</view>
					<br />
					<view class="">
						(一)没收财产不同于罚金，也不同于追缴非法所得、没收违 禁品和供犯罪所用的本人财物。罚金是较轻的财产刑，适用
						于情节较轻的犯罪;没收财产是较重的财产刑，适用于情节较 重的犯罪。罚金是让犯罪分子缴纳一定的金钱;没收财产剥夺
						的是犯罪分子个人所有财产的一部或全部，可以是金钱，也 可以是其他财产(包括动产和不动产)。没收财产是刑罚方法，
						追缴非法所得、没收违禁品和犯罪物品不是刑罚方法。任何 犯罪分子非法所得的财物，都应当予以追缴或者责令退赔。
						对于犯罪分子本人所有的财产是没收一部分还是全部，应当 根据犯罪的性质、情节、社会的危害程度以及案件的具体情
						况确定，不论是没收一部分还是全部，都应当对没收的财产 名称、数量等在判决中写明，不能笼统地写判决没收被告人 财产一部分或者全部。
					</view>
					<br />
					<view class="">
						(二)没收财产是没收犯罪分子个人所有财产的一部或者全部。 没收的只能是属于犯罪分子本人所有的财产，包括犯罪分子
						本人所有的财物及其在与他人共有财产中依法应有的份额。 在判处没收财产的时候，不得没收属于犯罪分子家属所有或
						者应有的财产。这是我国罪责自负不株连他人原则的具体体 现和要求。所谓犯罪分子家属所有财产，是指所有权明确属
						于犯罪分子家属本人专有的财产。犯罪分子家属应有的财产， 是指在共有财产中应归犯罪分子享有的份额。此外，如果犯
						罪分子家属没有其他生活来源，原来就依靠犯罪分子赡养、 抚养、扶养的，人民法院判决没收财产时，就必须给其留下
						维持生计所必要的财产。这是我国人道主义文明司法的体现， 也是促使犯罪分子安心改造、安定社会秩序的要求。
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uParse from '@/components/feng-parse/parse.vue';
export default {
	data() {
		return {
			knowledgeid: '',
			data: '',
			yiid:'',
			yiji_title:'',
			er_id:'',
			er_title:''
		};
	},
	components: {
		uParse
	},
	created() {},
	onLoad(option) {
		console.log(option);
		if (option.knowledgeid != undefined) {
			this.knowledgeid = option.knowledgeid;
			this.huoqu_xq();
		}
		if (option.yiid != undefined) {
			this.yiid=option.yiid
			// 获取分类title
				  this.$http
						.post({
							url: '/mapi/index/knowledgetype',
						})
						.then(res => {
								
								for (var item in res.data.type[1]){
									if(res.data.type[1][item].knowledgetypeid==option.yiid)
									this.yiji_title=res.data.type[1][item].knowledgetypename
								}
							if (option.erid != undefined) {
								this.er_id=option.erid
								for (var item in res.data.type[2]){
									if(res.data.type[2][item].knowledgetypeid==option.erid)
									this.er_title=res.data.type[2][item].knowledgetypename
								}
								
							}	
								
						});
		}
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_xq() {
			this.$http
				.post({
					url: '/mapi/index/zhishi_xq',
					data: {
						knowledgeid: this.knowledgeid
					}
				})
				.then(res => {
					this.data = res.data.knowledge;
				});
		},
		go_index(){
			uni.switchTab({
				url:'index'
			})
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
.head {
	border-bottom: 2rpx solid #f7f7f7;
}
.zhishi_xq {
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.xq_title {
	margin: 15rpx 0;
}
.xq_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.xq_top_item1 image {
	width: 21rpx;
	height: 23rpx;
	margin-right: 10rpx;
}
.xq_top_item2 image {
	width: 22rpx;
	height: 23rpx;
	margin-right: 10rpx;
}
.xq_top_item3 image {
	width: 30rpx;
	height: 22rpx;
	margin-right: 10rpx;
}
.zhaiyao {
	margin: 35rpx 0 0;
	background-color: #eaeaea;
	line-height: 40rpx;
	padding: 36rpx 30rpx;
}
.zhengwen {
	line-height: 40rpx;
	padding-bottom: 30rpx;
	margin-top: 35rpx;
}
.zhengwen image {
	width: 100%;
}
.xq_zhengwen_title {
	margin: 10rpx 0;
}
.erji_weizhi {
	height: 70rpx;
	background-color: #f9f9f9;
	display: flex;
	align-items: center;
	margin: 0rpx 0 20rpx;
	padding-left: 30rpx;
}
.erji_weizhi image {
	margin: 0 13rpx 0 20rpx;
	width: 24rpx;
	height: 100%;
}
</style>
