<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">{{type==1?'在线咨询':type==2?'电话咨询':type==3?'合同文书':'诉讼委托'}}</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<!-- 在线咨询 -->
			<view class="baojia_list" v-if="type==1">
				<view class="baojia_list_item hei_28">
					<text>1天</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="chatprice"/> 元
					</view>
				</view>
                <view class="baojia_list_item hei_28">
                	<text>3天</text>
                	<view class="baojia_list_item_right ">
                		<input type="text" value="" placeholder="请填写" class="hei_28" v-model="zaixian3"/> 元
                	</view>
                </view>
				<view class="baojia_list_item hei_28">
					<text>1个月</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="zaixian30"/> 元
					</view>
				</view>
			</view>
			<!-- 电话咨询 -->
			<view class="baojia_list" v-if="type==2">
				<view class="baojia_list_item hei_28">
					<text>20分钟</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="phoneprice"/> 元
					</view>
				</view>
				<view class="baojia_list_item hei_28">
					<text>1天</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="dianhua1"/> 元
					</view>
				</view>
			    <view class="baojia_list_item hei_28">
			    	<text>3天</text>
			    	<view class="baojia_list_item_right ">
			    		<input type="text" value="" placeholder="请填写" class="hei_28" v-model="dianhua3"/> 元
			    	</view>
			    </view>
				<view class="baojia_list_item hei_28">
					<text>1个月</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="dianhua30"/> 元
					</view>
				</view>
			</view>
			
			<!-- 合同文书 -->
			<view class="baojia_list" v-if="type==3">
				<view class="baojia_list_item hei_28">
					<text>合同审核</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="hetong_shenhe"/> 元
					</view>
				</view>
				<view class="baojia_list_item hei_28">
					<text>代写合同</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="hetong_daixie"/> 元
					</view>
				</view>
			    <view class="baojia_list_item hei_28">
			    	<text>代写文书</text>
			    	<view class="baojia_list_item_right ">
			    		<input type="text" value="" placeholder="请填写" class="hei_28" v-model="hetong_wenshu"/> 元
			    	</view>
			    </view>

			</view>
			
			<!-- 委托诉讼 -->
			<view class="baojia_list" v-if="type==4">
				<view class="baojia_list_item hei_28">
					<text>律师会见</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="lvshi_huijian"/> 元
					</view>
				</view>
				<view class="baojia_list_item hei_28">
					<text>发律师函</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="lvshihan"/> 元
					</view>
				</view>
			    <view class="baojia_list_item hei_28">
			    	<text>案件知道</text>
			    	<view class="baojia_list_item_right ">
			    		<input type="text" value="" placeholder="请填写" class="hei_28" v-model="anjianzhidao"/> 元
			    	</view>
			    </view>
			
			</view>
			
			<view class="baocun_btn">
				<button type="" class="bai_30">立即添加</button>
			</view>
			
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
                 chatprice:'',
				 zaixian3:'',
				 zaixian30:'',
				 phoneprice:'',
				 dianhua1:'',
				 dianhua3:'',
				 dianhua30:'',
				 hetong_shenhe:'',
				 hetong_daixie:'',
				 hetong_wenshu:'',
				 lvshi_huijian:'',
				 lvshihan:'',
				 anjianzhidao:'', 
				 type:1,
				 title:'在线咨询'
		};
	},
	created() {},
	onLoad(option) {
		this.type=option.type

	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		// save() {
		// 	if (this.zaixian == '') {
		// 		uni.showToast({
		// 			title: '请填写在线咨询费用',
		// 			duration: 2000,
		// 			icon: 'none'
		// 		});
		// 		return false;
		// 	} else if (this.dianhua == '') {
		// 		uni.showToast({
		// 			title: '请填写电话咨询费用',
		// 			duration: 2000,
		// 			icon: 'none'
		// 		});
		// 		return false;
		// 	}

		// 	this.$http
		// 		.post({
		// 			url: '/lawyer/lawyer/zx_baojia',
		// 			data: {
		// 				zaixian: this.zaixian,
		// 				dianhua: this.dianhua
		// 			}
		// 		})
		// 		.then(res => {
		// 			uni.showToast({
		// 				title: '修改成功',
		// 				duration: 2000,
		// 				icon: 'none'
		// 			});
		// 		});

		// 	console.log(this.zaixian, this.dianhua);
		// }
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.baojia_list {
	
}

.baojia_list_item{
	padding: 0 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 120rpx;
	border-bottom: 2rpx solid #e8e8e8;
}
.baojia_list_item_right{
	display: flex;
	align-items: center;
}
.baojia_list_item_right input{
	text-align: right;
	margin-right: 4rpx;
}


.baocun_btn {
	padding: 0 30rpx;
	margin-top:150rpx;
}
.baocun_btn button {
	height: 88rpx;
	background-color: #f43a51;
	border-radius: 44rpx;
	line-height: 88rpx;
}

</style>
