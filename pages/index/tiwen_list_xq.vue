<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">咨询详情</view>
			<view class=" head_right">
				<navigator url="tiwen_list" class="hei_30_bold" >我的提问</navigator>
				
			</view>
		</view>

		<view class="zi_body ">
			<view class="wenti hei_28">
				<view class="" :class="['',is_zhankai?'zhankai':'zhankai_none']">
					{{xinxi.information}}
				</view>
				<view class="wenti_zhankai lv_28" @click="zhan">
					{{is_zhankai?'收起':'展开'}}
					<image src="@/static/img/zhankai.png" mode="" :class="is_zhankai?'zhuan':''"></image>
				</view>
			</view>
			
			<view class="none" v-if="huifu_list.length==0">
				<image src="@/static/img/tiwen_no_huifu.png" mode=""></image>
				<view class="qian_30 zanwu_txt">
					暂无回复
				</view>
				<view class="lv_26 huiqu_huifu">
					如何快速获取律师回复
				</view>
			</view>
			
			
			<view class="huida_num hei_28"  v-if="huifu_list.length!=0">
				共<text class="hong_28">{{data.consult_replycount}}</text>位律师回复
			</view>
			<view class="ls_list"   v-if="huifu_list.length!=0">

				<view class="ls_item" v-for="item in huifu_list" >
					<image :src=img_url+item.photourl mode="" @click="go_zhuye(item.userid)"></image>
					<view class="ls_item_right">
						<view class="ls_item_right_top">
							<view class="hei_30" @click="go_zhuye(item.userid)">
								{{item.nickname}}律师 <text class="mianfei bai_24">免费咨询</text>
							</view>

							<text class="qian_24">{{ item.addtime | timeStamp }}</text>
						</view>
						<view class="ls_item_right_bottom">
							<view class="ls_item_right_bottom_list">
							<text class="qian_26 huida_txt">{{item.information}}</text>
							</view>
							<view class="zhuiwen bai_24" @click="zhuiwen(item.userid,item.crid)">
								追问
							</view>
						
						</view>
	<view class="zhui_list">
								<view class="zhui_item" v-for="zhui_item in item.zhuiwen">
									<text class="zhuiwen_txt qian_20">{{ zhui_item.type == 1 ? '追问' : '追答' }}</text>
									<text class="zhuiwen_body qian_24">{{ zhui_item.information }}</text>
								</view>
							</view>
					</view>
				</view>
		
				
				
			</view>
				<view class="get_more hei_26" @click="get_more()" v-if="!is_all">查看更多></view>
		</view>



	</view>



</template>

<script>
	export default {

onLoad(option) {
	this.get_xq(option.id)
	this.wenid = option.id;
},
		onShow() {

		},

		data() {
			return {
				is_zhankai: true,
				shujv:true,
				is_all:false,
				xinxi:'',
				wenid: '',
				huifu_list:[],
				img_url: uni.getStorageSync('img_url'),
				data:''

			}
		},
		created() {

		},


		methods: {
		
		navigateBack() {
				uni.navigateBack()
			},
			zhan() {
				this.is_zhankai = !this.is_zhankai
			},
			zhuiwen(lawyerid,crid){
			
				uni.navigateTo({
					url:'zhuiwen?lawyerid='+lawyerid+'&crid='+crid
				})
			},
			get_xq(id) {
				this.$http.post({
						url: '/mapi/consult/zixun_xq',
						data: {
							consultid: id
						}
					})
					.then(res => {
						console.log(res);
						this.xinxi = res.data.consult;
						this.data=res.data
						this.huifu_list = res.data.consult_reply;
						if (res.data.consult_replycount < 5) {
							this.is_all = true;
						}
					});
			},
			
	// 获取更多回复
		get_more() {
			var last_id = this.huifu_list[this.huifu_list.length - 1].crid;
			this.$http.post({
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
				url: 'ls_zhuye?lawyerid='+id
			});
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
	}

	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}

	.wenti {
		padding: 19rpx 30rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
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
.zhuan{
	transform:rotate(180deg);
	-ms-transform:rotate(180deg); 	/* IE 9 */
	-moz-transform:rotate(180deg); 	/* Firefox */
	-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
	-o-transform:rotate(180deg); 	/* Opera */
	transition: all 0.5s ease-in-out;
}

	.zhankai {
		/* zhakai */
	}

	.zhankai_none {
		height: 40rpx;
		overflow: hidden;
	}

	.huida_num {
		height: 90rpx;
		line-height: 90rpx;
		background-color: #FFFFFF;
		border-bottom: 2rpx solid #F7F7F7;
		padding: 0 30rpx;
	}
	.none{
		text-align: center;
	}
.none image{
	width: 186rpx;
		height: 159rpx;
		margin: 86rpx 0 0;
}
.zanwu_txt{
	margin: 16rpx 0;
}
.huiqu_huifu{
	text-decoration: underline
}
	.ls_list {
		padding: 0 30rpx;
		background-color: #FFFFFF;
	}

	.ls_item {
		border-bottom: 2rpx solid #F7F7F7;
		display: flex;
		justify-content: space-between;
		padding: 30rpx 0;
	}

	.ls_item image {
		width: 95rpx;
		height: 95rpx;
		border-radius: 100%;
		margin-right: 23rpx;
	}

	.ls_item_right_top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 14rpx;
	}

	.ls_item_right_bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
.huida_txt{
	display: inline-block;
	white-space: normal;
	word-break : break-all;
}
.ls_item_right_bottom_list{
	max-width: 85%;
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
		width:82%;
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
	}
	.zhuiwen_txt {
		
		border: 1px solid #EEEEEE;
		padding: 0rpx 6rpx;
		line-height: 32rpx;
		height: 32rpx;
		border-radius:14rpx;
		/* 	position: relative;
		top: 6rpx; */
		margin-right: 6rpx;
		background-color: #FFFFFF;
	}
	.zhui_item {
		display: flex;
		align-items: flex-start;
		margin-bottom: 8rpx;
	}
	.zhui_item:first-child{
		margin-top: 4rpx;
	}
	.zhuiwen_body {
		max-width: 83%;
		line-height: 34rpx;
		    line-height: 17px;
		    white-space: normal;
			word-break : break-all;
	}
</style>
