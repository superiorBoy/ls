<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">接单时间设置</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="jiedan_top hui_28">
				<view class="jiedan_top_list" @click="radio(1)">
					<view class="jiedan_top_list_left">
						<label class="radio"><radio value="1" :checked="xuanze == 1" /></label>
						全天模式
					</view>
					<view class="jiedan_top_list_right hei_28">24小时</view>
				</view>
				<view class="jiedan_top_list" @click="radio(2)">
					<view class="jiedan_top_list_left">
						<label class="radio"><radio value="2" :checked="xuanze == 2" /></label>
						白天模式
					</view>
					<view class="jiedan_top_list_right hei_28">09:00~23:00</view>
				</view>
				<view class="jiedan_top_list" @click="radio(3)">
					<view class="jiedan_top_list_left">
						<label class="radio"><radio value="3" :checked="xuanze == 3" /></label>
						夜间模式
					</view>
					<view class="jiedan_top_list_right hei_28">23:00~09:00</view>
				</view>
				<view class="jiedan_top_list" @click="radio(4)">
					<view class="jiedan_top_list_left">
						<label class="radio"><radio value="4" :checked="xuanze == 4" /></label>
						自定义模式
					</view>
					<view class="jiedan_top_list_zidin qian_30" @click="tan_xuanze">
						{{ str_time ? str_time : '开始时间' }}
						<text>~</text>
						{{ end_time ? end_time : '结束时间' }}
					</view>
				</view>
			</view>

			<!-- <date-range mode="date" :showMutibleDate="showMutibleDate" :startDate="startDate" :endDate="endDate" @onSelected="dateSelected"></date-range> -->
			<view class="jiedan_bottom">
				<button type="" class="bai_30" @click="save">选好啦</button>
				<view class="qian_30">注：晚上11点到早上9点推送的订单不扣金豆</view>
			</view>
		</view>

		<!-- <uni-popup type="bottom" ref='popup'>
			<view class="tan">
				<view class="tan_title hei_30">
				 <text class="qian_30">取消</text>	<text>自定义时间</text> <text class="hong_30">确定</text>
				</view>
			<view class="tan_list hei_26">
				<picker @change="change1"  mode="time">
				<view class="tan_list_item">
					{{str_time?str_time:'请选择'}}
				</view>
				</picker>
				<text>~</text>
				<picker @change="change"  mode="time">
				<view class="tan_list_item">
					{{end_time?end_time:'请选择'}}
				</view>
                  </picker>
			</view>
				

			</view>
		</uni-popup> -->

		<!-- <date-range mode="time" :showMutibleDate="showMutibleDate"  @onSelected="dateSelected"></date-range> -->
		<date-range :mode="viewMode" :showMutibleDate="showMutibleDate" :startDate="startDate" :endDate="endDate" @onSelected="dateSelected"></date-range>
	</view>
</template>

<script>
import dateRange from '@/components/zxp-datepickerRange/zxp-datepickerRange.vue';
import unpopup from '@/components/uni-popup/uni-popup-share.vue';
export default {
	components: {
		unpopup,
		dateRange
	},
	data() {
		return {
			xuanze: '',
			str_time: '',
			end_time: '',
			startDate: '00:00',
			endDate: '00:00',
			showMutibleDate: false,

			viewMode: 'time',
			dateValue: '',
			timeValue: '',
			jiedan_time:'',
			shezhi_url:'/mlawyerapi/consult/worktime',
			chakan_url:'/mlawyerapi/consult/getworktime'
		};
	},
	onReady() {},
	created() {},
	onLoad(option) {
		
		
		if(option.type){
			this.shezhi_url='/mlawyerapi/lawyer/worktime'
			this.chakan_url='/mlawyerapi/lawyer/getworktime'
		}
		this.huoqu_time();
	},
	onShow() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		radio(i) {
			this.xuanze = i;
		},

		huoqu_time() {
			this.$http
				.post({
					url:this.chakan_url
				})
				.then(res => {
					this.jiedan_time = res.data;
					this.xuanze=res.data.workstate
					if(res.data.workstate==4){
						this.str_time=res.data.workstarttime
						this.end_time=res.data.workendtime
					}
				});
		},
		save() {
			

			this.$http
				.post({
					url:this.shezhi_url,
					data:{
						state:this.xuanze,
						start:this.str_time,
						end:this.end_time
					}
				})
				.then(res => {
					if(res.code==0){
						uni.showToast({
							title: '设置成功',
							duration: 2000,
							icon: 'none'
						});
						setTimeout(function(){
							uni.navigateBack();
						},1000)
					}
				});
			
			
			
		},
		dateSelected(e) {
			console.log(e);
			if (e) {
				let start = e.start;
				let end = e.end;
				this.dateValue = start + '至' + end;
				(this.str_time = start), (this.end_time = end);
			} else {
				// uni.showToast({
				// 	title: '请选择正确时间',
				// 	duration: 2000,
				// 	icon: 'none'
				// });
				(this.str_time = ''), (this.end_time = '');
			}

			this.showMutibleDate = false;
		},

		tan_xuanze() {
			this.viewMode = 'time';
			if (this.startDate.length > 5) {
				//这里仅做测试数据，实际使用时，根据业务逻辑传值即可。
				this.startDate = '00:00';
				this.endDate = '24:00';
			}

			this.showMutibleDate = true;
		}
	}
};
</script>

<style>
page {
	background-color: #f3f3f3;
}
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.head_center {
	width: 50%;
}
.jiedan_top_list {
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #efefef;
	height: 100rpx;
	justify-content: space-between;
}
.jiedan_top {
	padding: 0 30rpx;
	background-color: #ffffff;
}
.jiedan_bottom {
	text-align: center;
	padding: 0 30rpx;
	margin-top: 168rpx;
}
.jiedan_bottom button {
	height: 88rpx;
	background-color: #f43a51;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin-bottom: 30rpx;
}
.jiedan_top_list_zidin {
	width: 458rpx;
	height: 70rpx;
	background-color: #f7f8f8;
	border-radius: 5rpx;
	text-align: center;
	line-height: 70rpx;
}
.jiedan_top_list_zidin text {
	margin: 0 50rpx;
}
.tan {
	height: 684rpx;
	background-color: #ffffff;
}
.tan_title {
	height: 136rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	border-bottom: 2rpx solid #e8e8e8;
}
.tan_list_item {
	width: 300rpx;
	height: 70rpx;
	background-color: #efefef;
	border-radius: 5rpx;
	text-align: center;
	line-height: 70rpx;
}
.tan_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40rpx;
	margin: 30rpx 0;
	box-sizing: border-box;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}

.cell-view {
	position: relative;
	width: 90%;
	height: 88rpx;
	line-height: 88rpx;

	margin: 0rpx 30rpx;

	border-bottom: 1rpx solid rgb(245, 245, 245);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
}
</style>
