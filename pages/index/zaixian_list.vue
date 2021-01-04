<template>

	<view class="">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">在线咨询</view>
			<view class=" head_right hei_30_bold">

			</view>
		</view>
		<view class="zi_body">


			<view class="xiaoxi_list">
				<view class="xiaoxi_item" v-for="item in xiaoxi_list" @click="kan(item.user_to.userid)" v-if="item.user_to">
					<view class="xiaoxi_item_left">
						<view class="xiaoxi_tx">
							<image :src=img_url+item.user_to.photourl  mode=""></image>
							<text class="xiaoxi_num bai_20" v-if="item.messagecount>0">{{item.messagecount}}</text>
						</view>
						<view class="xiaoxi_item_left_name">
							<view class="hei_30_bold xiaoxi_item_name">
								{{item.opposite_nickname}}
							</view>
							<view class="qian_26 txt_over">
								<view class="" v-if="item.msgtype==1">
							<u-parse :content="replace_em(item.content)"></u-parse>	
								</view>
								<view class="" v-if="item.msgtype==2">
									[图片]
								</view>
							</view>
						</view>
					</view>
					<view class="xiaoxi_item_right qian_20">
						{{ item.addtime | timeStamp }}

					</view>
				</view>


			</view>

		</view>



	<!-- 	<uni-popup type="center" ref='popup'>

			<view class="tan_jiage">
				<view class="tan_title">
					<text></text><text class="hei_34_bold">咨询费用</text>
					<image src="../../static/img/tan_close.png" mode="" @click="close"></image>
				</view>
				<view class="feiyong_list">
					<view class="feiyong_item item1">
						<view class="bai_34">
							在线图文咨询
						</view>
						<view class="bai_39 feiyong_item_center">
							58元/24小时
						</view>
						<view class="feiyong_item_btn lv_34">
							立即咨询
						</view>
					</view>
					<view class="feiyong_item item2">
						<view class="bai_34">
							付费电话咨询
						</view>
						<view class="bai_34 feiyong_item_center">
							98元/20分钟
						</view>
						<view class="feiyong_item_btn ">
							付费咨询
						</view>
					</view>
					<view class="feiyong_item item3">
						<view class="bai_34">
							免费拨打电话
						</view>
						<view class="bai_34 feiyong_item_center">
							{{dianhua}}
						</view>
						<view class="feiyong_item_btn " @click="xianshi">
							点击查看
						</view>
					</view>
				</view>


			</view>

		</uni-popup> -->




		<view class="padding_bottom"></view>


	</view>

</template>

<script>
	// import unpopup from '@/components/uni-popup/uni-popup-share.vue'
import uParse from '@/components/feng-parse/parse.vue';
	export default {

		created() {

		},
		components: {
			uParse

		},
		onShow() {
             this.huoqu_xiaoxilist()
		    },
		data() {
			return {
				dianhua: '点击查看显示电话号码',
				img_url: uni.getStorageSync('img_url'),
				xiaoxi_list:[]
			}
		},
		
		//下拉刷新
		onPullDownRefresh: function() {
			// this.getList();

			setTimeout(function() {
				uni.showToast({
					title: '没有更多内容了',
					duration: 2000,
					icon: "none"
				});
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// stopPullDownRefresh:function(){

		// },
		methods: {
			//上拉加载
			onReachBottom() {
				uni.showToast({
					title: '没有更多内容了',
					duration: 2000,
					icon: "none"
				});
			},
			replace_em(str) {
			    str = str.replace(/\</g, '&lt;');
			    str = str.replace(/\>/g, '&gt;');
			    str = str.replace(/\n/g, '<br/>');
			    str = str.replace(/\[em_([0-9]*)\]/g, '<img src="../../static/bkhumor-emoji/$1.gif" border="0" style="width:40rpx"/>');
			    return str;
			},
			navigateBack() {
				uni.navigateBack()
			},
			kan(id) {
				
				uni.navigateTo({
					url:'chat?lsid='+id
				})
				
				

			},
			xianshi() {
				this.dianhua = '13122223333'
			},
			close() {
				this.$refs.popup.close()
			},
			huoqu_xiaoxilist(){
				this.$http
					.post({
						url: '/mapi/consult/messagelist'
					})
					.then(res => {
					
						this.xiaoxi_list=res.data.messagelist
					});
				
				
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
	}

	.xiaoxi_list {
		background-color: #FFFFFF;
		margin-top: 20rpx;
	}

	.xiaoxi_item {
		padding: 30rpx 30rpx;
		display: flex;
		position: relative;
		justify-content: space-between;
	}

	.xiaoxi_item::before {
		content: '';
		display: inline-block;
		position: absolute;
		bottom: 0;
		right: 0;
		width: 80%;
		height: 2rpx;
		background-color: #EEEEEE;
	}

	.xiaoxi_item:last-child::before {
		content: none;
	}

	.xiaoxi_item_left {
		display: flex;
	}

	.xiaoxi_tx {
		width: 84rpx;
		height: 84rpx;
		margin-right: 30rpx;
		position: relative;
	}

	.xiaoxi_num {
		position: absolute;
		right: 0;
		top: -10rpx;
		background-color: #ff5267;
		border-radius: 100%;
		width: 35rpx;
		height: 35rpx;
		padding: 2rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
		line-height: 35rpx;
	}

	.xiaoxi_tx image {
		width: 84rpx;
		height: 84rpx;
		border-radius: 100%;

	}

	.xiaoxi_btn {
		width: 160rpx;
		height: 50rpx;
		background-color: #ffffff;
		border-radius: 25rpx;
		border: solid 1rpx #ff2b46;
		line-height: 50rpx;
		text-align: center;
		margin-top: 10rpx;
	}

	.xiaoxi_item_name {
		margin-bottom: 10rpx;

	}

	.txt_over {
		max-width: 450rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.tan {
		padding: 0 30rpx;
	}

	.tan_jiage {
		height: 1000rpx;
		background-color: #ffffff;
		border-radius: 5rpx;
		width: 691rpx;
		overflow: auto;
	}

	.tan_title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 34rpx;
		height: 100rpx;
		border-bottom: 2rpx solid #F7F7F7;
	}

	.tan_title image {
		width: 26rpx;
		height: 26rpx;
	}

	.feiyong_list {
		padding: 39rpx 100rpx 0;
	}

	.feiyong_item {
		text-align: center;
		height: 242rpx;
		margin-bottom: 30rpx;
		border-radius: 10rpx;
		padding: 24rpx 0 20rpx;
		box-sizing: border-box;
	}


	.item1 {
		background: url(../../static/img/fei1.png) no-repeat;
		background-size: 100% 100%;
	}

	.item2 {
		background: url(../../static/img/fei2.png) no-repeat;
		background-size: 100% 100%;
	}

	.item3 {
		background: url(../../static/img/fei3.png) no-repeat;
		background-size: 100% 100%;
	}

	.feiyong_item_center {
		margin: 20rpx 0;
	}

	.feiyong_item_btn {
		height: 63rpx;
		line-height: 63rpx;
		border-radius: 13rpx;
		text-align: center;
		margin: 0 auto;
		background-color: #FFFFFF;
	}

	.item1 .feiyong_item_btn {
		width: 225rpx;
		background-color: #ffffff;
	}

	.item2 .feiyong_item_btn {
		color: #bcb198;
		width: 226rpx;
	}

	.item3 .feiyong_item_btn {
		width: 391rpx;
		color: #ef995f;
		background-color: #ffffff;
	}
</style>
