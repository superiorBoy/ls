<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">素材圈</view>
			<view class=" head_right">
				<image src="@/static/lsimg/sousuo.png" mode="" @click="tan"></image>
			</view>
		</view>
		<view class="tab_top hui_26">
			<text v-for="(item,index) in tab_arry" :class="['' ,index==active?'sucai_active': '']" @click="qiehuan(index)">{{item}}</text>
		</view>
		<view class="zi_body tab_zi_body">


			<view class="jingxuan_body" v-if="active==0">
				<view class="jingxuan_item" v-for="item in 5">
					<view class="jingxuan_item_top">
						<view class="jingxuan_item_top_left">
						<image src="@/static/img/xh_tx.png" mode="" class="xh_tx"></image>
						<view class="jingxuan_item_top_r">
							<view class="hei_32 jingxuan_item_name">
								虎哥推荐
							</view>
							<view class="qian_24">
								2020-01-05 15:20:14
							</view>
						</view>
						</view>
						<view class="jing_fenxiang lv_22">
							<image src="@/static/img/yijian_fenxiang.png" mode=""></image>一键分享
						</view>
					</view>
					
					<view class="jingxuan_wenti hei_26">
						丈夫挪用公款赌博妻子需要承担责任吗?
					</view>
					<view class="jingxuan_jieda hui_24">
						<text class="bai_20">精选解答</text>
						丈夫挪用公款赌博，如果妻子不知情，是不用承担法律责任的。
						只是调查过，没有证据完全可以证明妻子知情，或者证据不充分，
						也不能作为证据使用，作为证据使用，必须形成证据链。如果妻
						子明知丈夫挪用公款进行赌博，在司法机关调查时，还进行包庇，
						情节严重的，依法应追究刑事责任。法律链接：《刑法》第三百
						一十条　明知是犯罪的人而为其提供隐藏处所、财物，帮助其逃
						匿或者作假证明包庇的，处三年以下有期徒刑、拘役或者管制；
						情节严重的，处三年以上十年以下有期徒刑。
					</view>
					<view class="jingxuan_ls">
						<view class="jingxuan_ls_left">
							<view class="jingxuan_ls_left_tx">
								<image src="@/static/img/tx.png" mode="" class="jingxuan_ls_tx"></image>
								<image src="@/static/img/renzheng.png" mode="" class="jingxuan_ls_ren"></image>
							</view>
							<text class="hei_26 jingxuan_ls_name">樊柯律师</text>
							<text class="hui_22">18938874792 </text>
						</view>
						<text class="qian_24">2021-01-06 15:21:45</text>
					</view>
					
				</view>
			</view>

           <view class="jingxuan_body" v-if="active==1">
           	<view class="jingxuan_item" v-for="item in 5">
           		<view class="jingxuan_item_top">
           			<view class="jingxuan_item_top_left">
           			<image src="@/static/img/xh_tx.png" mode="" class="xh_tx"></image>
           			<view class="jingxuan_item_top_r">
           				<view class="hei_32 jingxuan_item_name">
           					虎哥推荐
           				</view>
           				<view class="qian_24">
           					2020-01-05 15:20:14
           				</view>
           			</view>
           			</view>
           			<view class="jing_fenxiang lv_22">
           				<image src="@/static/img/yijian_fenxiang.png" mode=""></image>一键分享
           			</view>
           		</view>
           		<view class="yingxiao_item_bottom">
           			
					<view class="yingxiao_item_wen hei_28">
						<text class="bai_20_bold">问</text>死亡理赔一定非要提供火化证明吗？
					</view>
					<view class="yingxiao_item_da">
						<text class="bai_20_bold">问</text>
						<view class="yingxiao_item_da_item">
							<view class="yingxiao_item_da_item_top">
							   <view class="yingxiao_item_da_item_tx">
								</view>
								<view class="qian_24">
									您好，关于您的这个问题，我们遇到的比较多，无法								一下子详细说清楚，当面或语音交流更方便，建议您								若有意向找律师的话可直接咨询我们。
								</view>
							</view>
						</view>
					</view>
					
					
           		</view>
           		
           		
           		
           		
           	</view>
           </view>



			
		</view>

		
	</view>

</template>

<script>
	

	export default {

		onShow() {

		},

		data() {
			return {
				img_url: uni.getStorageSync('img_url'),
				tab_arry: ['精选回答', '营销素材', '分享海报','商学院'],
				active: 1,
				page:0,
				is_all:false,
				zixun_list: [],
			
			}
		},
		created() {

		},
		onLoad() {
			
		
			
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
						console.log(this.zixun_list)
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
		top: 95rpx;
		width: 100%;
		box-sizing: border-box;
		z-index: 9;
	}

	.head_right image {
		width: 40rpx;
		height: 41rpx;
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
.tab_top text{
	padding: 4rpx 20rpx;
}
.sucai_active{
		font-size: 28rpx;
		color: #0eb77e;
		background-color: #cff1ef;
		border-radius: 20rpx;
		
}
.jingxuan_body{
	
	
	
	}
.xh_tx{
		width: 82rpx;
		height: 82rpx;
		border-radius: 100%;
		
}
.jingxuan_item:first-child{
	margin-top: 28rpx;
}
.jingxuan_item{
	padding: 30rpx;
	background-color: #FFFFFF;
	margin-bottom: 20rpx;
	
}
.jingxuan_item_top{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.jingxuan_item_top_left{
	display: flex;
	align-items: center;
}
.jingxuan_item_top_r{
	margin-left: 18rpx;
}
.jingxuan_item_name{
	margin-bottom: 10rpx;
}
.jingxuan_ls_tx{
		width: 51rpx;
		height: 51rpx;
}
.jingxuan_ls_ren{
	width: 15rpx;
		height: 16rpx;
		background-color: #FFFFFF;
		border: solid 2rpx #ffffff;
		position: relative;
		right: 10rpx;
		border-radius: 100%;
}
.jingxuan_ls{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.jingxuan_ls_left{
	display: flex;
	align-items: center;
	
}
.jingxuan_ls_name {
	margin: 0rpx 20rpx 0 10rpx;
}
.jingxuan_ls_left_tx{
	position: relative;
}
.jing_fenxiang{
		width: 161rpx;
		height: 40rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		border: solid 1rpx #0eb77e;
		display: flex;
		align-items: center;
		justify-content: center;
		
}
.jing_fenxiang image{
		width: 21rpx;
		height: 20rpx;
		margin-right: 11rpx;
}
.jingxuan_wenti{
	margin: 20rpx 0 20rpx;
}
.jingxuan_jieda{
	line-height: 40rpx;
	margin-bottom: 20rpx;
}
.jingxuan_jieda text{
		height: 30rpx;
		background-color: #f43a51;
		border-radius: 5rpx;
		display: inline-block;
	padding: 0 4rpx;
	line-height: 30rpx;
	margin-right: 4rpx;
	
}

/* 营销素材 */
.yingxiao_item_wen{
	padding: 17rpx 0rpx 17rpx 80rpx;
}
.yingxiao_item_wen text{
		width: 30rpx;
		height: 30rpx;
		background-color: #0eb77e;
		border-radius: 5rpx;
		display: inline-block;
		line-height: 30rpx;
		text-align: center;
		margin-right: 9rpx;
	}
	.yingxiao_item_da{
		border-top: 1px solid #dcdcdc;
		display: flex;
		padding: 17rpx 0rpx 17rpx 80rpx;
	}
	.yingxiao_item_da text{
		width: 30rpx;
		height: 30rpx;
		background-color: #0eb77e;
		border-radius: 5rpx;
		display: inline-block;
		line-height: 30rpx;
		text-align: center;
		margin-right: 9rpx;
		
	}
	.yingxiao_item_da_item{
		width: 90%;
	}
</style>
