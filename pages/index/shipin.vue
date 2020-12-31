<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">视频说法</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
	<view class="lunbo">
	
		<swiper :indicator-dots="false" :autoplay="false" circular='true' easing-function='default' :interval="3000"
		 indicator-color='#c7c7c7' indicator-active-color='#ffffff' :duration="500" class="swiper" @change="swiperchang">
			<swiper-item v-for="item in banner">
				<view class="swiper-item">
					<image :src="item.img">
				</view>
				
				<view class="lun_txt ">
				<text class="over_fl bai_30">{{item.text}}</text>
				<view class="lun_num bai_30">
					{{current+1}}/{{banner.length}}
				</view>
				</view>
			</swiper-item>
		</swiper>
	
	</view>
			
			
		<view class="zhishi_list">
			<view class="zhishi_item hei_26" v-for="item in fenlei" >
				<image :src="item.img" mode=""></image>
				<view>{{item.text}}</view>
			</view>	
		</view>	
			<view class="more_fenlei qian_26">
				更多分类>
			</view>
			
			
			<view class="shipin_title hei_30_bold">
			<text></text>	最新视频推荐
			</view>
			<view class="tuijian_list" >
				<view class="tuijian_item" v-for="item in 10"@click="go_xq">
					<view class="shipin_img">
					<image src="@/static/img/shipin.png" mode="" class="tuijan_img"></image>
					<view class="shipin_time bai_22">
						01:48
					</view>
					<view class="mengceng">
						<image src="@/static/img/bofang_icon.png" mode=""></image>
					</view>	
					</view>
					<view class="tuijian_item_right">
						<view class="tuijian_item_top hei_26">
							什么条件可以监外执行？
						</view>
						
						<view class="shipin_bottom">
							<view class="tuijian_item_txt qian_22">
								#刑事处罚辩护
							</view>
							<view class="tuijian_item_bottom qian_22">
								<view class="tuijian_item_time ">
									<image src="@/static/img/shipin_icon.png" mode=""></image>895457次观看
								</view>
								<view class="tuijian_item_liulan">
									<image src="@/static/img/shipin_time.png" mode=""></image>2020.06.12
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
	data() {
		return {
			zhifu: 1,
			banner: [{
					img: '../../static/img/shipin.png',
					"text":'外商投资法解读'
				},
				{
					img: '../../static/img/shipin.png',
					"text":'外商投资法解读2'
				},
				{
					img: '../../static/img/shipin.png',
					"text":'外商投资法解读3'
				},
				{
					img: '../../static/img/shipin.png',
					"text":'外商投资法解读4'
				},
				{
					img: '../../static/img/shipin.png',
					"text":'外商投资法解读5'
				}
			],
			fenlei: [{
					img: '../../static/img/changshi1.png',
					"text":'婚姻家庭'
				},
				{
						img: '../../static/img/changshi2.png',
						"text":'交通事故'
				},
				{
						img: '../../static/img/changshi3.png',
						"text":'刑事辩护'
				},
				{
						img: '../../static/img/changshi4.png',
						"text":'合同纠纷'
				},
				{
						img: '../../static/img/changshi5.png',
						"text":'公司法'
				},
				{
						img: '../../static/img/changshi6.png',
						"text":'拆迁安置'
				},
				{
						img: '../../static/img/changshi7.png',
						"text":'劳动纠纷'
				},
				{
						img: '../../static/img/changshi8.png',
						"text":'债券债务'
				},
				{
						img: '../../static/img/changshi9.png',
						"text":'医疗纠纷'
				},
				{
						img: '../../static/img/changshi10.png',
						"text":'房产纠纷'
				},
				{
						img: '../../static/img/changshi11.png',
						"text":'知识产权'
				},
				{
						img: '../../static/img/changshi12.png',
						"text":'侵权纠纷'
				},
				
			],
	current:0
		};
	},
	created() {},
	onLoad(option) {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
	swiperchang(e) {
		this.current = e.detail.current;
	console.log(this.current)
	console.log(this.banner.length)
	
	},
	go_xq(){
		uni.navigateTo({
			url:'shipin_xq'
		})
	}

	}
};
</script>

<style>
	page{
		background-color: #F7F7F7;
	}
	uni-swiper{
		height: 330rpx !important;
	}
	.lunbo {
		position: relative;
		
	}

	.lun_txt {
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 20rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		width: 100%;
		font-size: 38rpx;
		color: #FFFFFF;
	}

	.lun_num {
			width:110rpx;
			height:50rpx;
			
			border-radius: 33rpx;
			background-color: rgba(0,0,0,0.4);
			line-height: 50rpx;
			text-align: center;
	}
.swiper-item{
	height: 330rpx;
}
.swiper-item image{
	width: 100%;
	height: 100%;
}
.zhishi_item{
	text-align: center;
	height: 136rpx;
	width: 25%;
	border-right: 2rpx solid #F7F7F7;
	border-bottom: 2rpx solid #F7F7F7;
	padding-top: 20rpx;
	box-sizing: border-box;
}
.zhishi_item image{
		width: 34rpx;
		height: 34rpx;
		margin-bottom: 10rpx;
}
.zhishi_list{
	background-color: #FFFFFF;
	display: flex;
	flex-wrap: wrap;
	margin-top: 20rpx;
}
.more_fenlei{
	line-height: 80rpx;
	text-align: center;
}
.shipin_img{
	width:48%;
	height: 150rpx;
	position: relative;
}
.shipin_time{
	position: absolute;
	bottom: 13rpx;
	right:16rpx;
}
.mengceng{
	width: 100%;
	height: 150rpx;
	position: absolute;
	background-color: rgba(0,0,0,0.2);
	top: 0;
	left: 0;
	text-align: center;
	line-height: 150rpx;
}
.mengceng image{
	width: 36rpx;
		height: 36rpx;
}
	.tuijan_img{
			width: 100%;
			height: 100%;
			margin-right: 23rpx;
	}
		
	.tuijian_list{
		background-color: #FFFFFF;
	}
	.tuijian_item{
		display: flex;
		padding: 20rpx 30rpx;
		
		border-bottom: 2rpx solid #F7F7F7;
	}
	.tuijian_item_top{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		width: 100%;
	}
		
	.over_fl{
		max-width: 500rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		}
	.tuijian_item_txt{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		width: 100%;
		margin: 0rpx 0 10rpx;
	}
	.tuijian_item_right{
		width:52%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 16rpx;
		box-sizing: border-box;
	}
	.tuijian_item_bottom{
		display: flex;
		justify-content: space-between;
	}
	.tuijian_item_time image{
width: 21rpx;
	height: 19rpx;
			margin-right: 6rpx;
			
	}
	.tuijian_item_time{
		
	}
	.tuijian_item_liulan image{
		width: 21rpx;
		height: 20rpx;
			margin-right: 6rpx;
	}
	.zuixin_list{
		background-color: #FFFFFF;
	}
	.zuixin_item{
		padding: 20rpx 30rpx;
		border-bottom: 2rpx solid #F7F7F7;
	}
	.zuixin_item_top{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-bottom: 10rpx;
	}
	.zuixin_item_bottom{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.shipin_title{
		height: 96rpx;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		border-bottom: 2rpx solid #eeeeee;
		padding: 0 30rpx;
	}
	.shipin_title text{
		display: inline-block;
		width: 6rpx;
			height: 28rpx;
			background-color: #0eb77e;
			margin-right: 10rpx;
	}
</style>
