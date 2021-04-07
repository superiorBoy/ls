<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">律师案件详情</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
           <view class="title hei_30_bold">
           	{{xq.title}}
           </view>
			
		<view class="lei_list qian_26">
			<view class="lei_item">
				案件类型：<text>诉讼案件</text>
			</view>
			<view class="lei_item">
				案&ensp;&ensp;&ensp;&ensp;号：<text>{{xq.anlinum}}</text>
			</view>
			<view class="lei_item">
				裁判日期：<text>{{xq.endtime}}</text>
			</view>
			<view class="lei_item">
				审理法院：<text>{{xq.fayuan}}</text>
			</view>
			<view class="lei_item" v-if="zhuan">
				案件专长：<text>{{zhuan[xq.typeid].typename}}</text>
			</view>
			<view class="lei_item">
				案件标的：<text>{{xq.anlibiao}}元</text>
			</view>
			<view class="lei_item">
				所属行业：<text>{{xq.hangye}}</text>
			</view>
			<view class="lei_item">
				判决结果：<text>{{xq.jieguo}}</text>
			</view>
			<view class="lei_item">
				代理方向：<text>{{xq.daili}}</text>
			</view>
			<view class="lei_item">
				我的价值：<text>{{xq.jiazhi}}</text>
			</view>
			<view class="lei_item">
				案情内容：
			</view>
		</view>
		<view class="neirong hei_26">
			<u-parse :content="xq.information"></u-parse>
		</view>
			
			
		</view>
	</view>
</template>

<script>
import uParse from '@/components/feng-parse/parse.vue';
export default {
	onShow() {
	
	},
	components: {
		
		uParse
	},
	data() {
		return {
			lyanliid:'',
			xq:'',
			zhuan:''
		};
	},
	onLoad(option) {
		this.lyanliid=option.lyanliid
		
		
		// 获取分类
			this.$http
				.post({
					url: '/mapi/index/gettype'
				})
				.then(res => {
					this.zhuan=res.data.type
					if(option.lyanliid){
						this.huoqu_xq()
						
					}
					
				});
	},
	created() {},

	methods: {
	
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_xq(){
			this.$http
				.post({
					url: '/mapi/lawyer/anli_xq',
					data: {
						lyanliid: this.lyanliid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.xq=res.data.anli
					}
				});
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
	.zi_body{
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
.head_center{
	width: 50%;
}
.title{
	margin: 10rpx 0 20rpx;
}
.lei_item{
	margin-bottom: 10rpx;
	display: flex;
	align-items: flex-start;
	
}
.lei_item text{
	display: inline-block;
	width: 80%;
	color: #333333;
}
.neirong{
	margin-top: 20rpx;
	padding-bottom: 50rpx;
	line-height: 40rpx;
}
</style>
