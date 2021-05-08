<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">{{ type == 1 ? '在线咨询' : type == 2 ? '电话咨询' : type == 3 ? '合同文书' : type == 6 ? '法律顾问' : '诉讼委托' }}</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<!-- 在线咨询 -->

			<view class="baojia_list" v-for="(item, index) in all_dalei" v-if="item.serviceid == type">
				<view class="baojia_list_item hei_28" v-for="item2 in arry[index]">
					<text>{{ item2.name }}</text>
					<view class="baojia_list_item_right ">
						<input type="text" placeholder="请填写" class="hei_28" v-model="baojia[item2.baojiamode]" />
						元
					</view>
				</view>
			</view>

			<view class="baocun_btn"><button type="" class="bai_30" @click="save">立即添加</button></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			chatprice: '',
			zaixian1: '',
			zaixian3: '',
			zaixian30: '',
			phoneprice: '',
			dianhua1: '',
			dianhua3: '',
			dianhua30: '',
			hetong_shenhe: '',
			hetong_daixie: '',
			hetong_wenshu: '',
			lvshi_huijian: '',
			lvshihan: '',
			anjianzhidao: '',
			type: 1,
			title: '在线咨询',
			baojia: '',
			legaladviser1: '',
			legaladviser2: '',
			all_dalei: [],
			arry: [],
			all_baojia: []
		};
	},
	created() {},
	onLoad(option) {
		this.type = option.type;
		this.$http
			.post({
				url: '/mlawyerapi/lawyer/baojia'
			})
			.then(res => {
				this.baojia = res.data.lawyer;
				// this.chatprice=res.data.lawyer.chatprice
				// this.zaixian1=res.data.lawyer.zaixian1
				// this.zaixian3=res.data.lawyer.zaixian3
				// this.zaixian30=res.data.lawyer.zaixian30
				// this.phoneprice=res.data.lawyer.phoneprice
				// this.dianhua1=res.data.lawyer.dianhua1
				// this.dianhua3=res.data.lawyer.dianhua3
				// this.dianhua30=res.data.lawyer.dianhua30
				// this.hetong_shenhe=res.data.lawyer.hetong_shenhe
				// this.hetong_daixie=res.data.lawyer.hetong_daixie
				// this.hetong_wenshu=res.data.lawyer.hetong_wenshu
				// this.lvshi_huijian=res.data.lawyer.lvshi_huijian
				// this.lvshihan=res.data.lawyer.lvshihan
				//     		this.anjianzhidao=res.data.lawyer.anjianzhidao
				// this.legaladviser1=res.data.lawyer.legaladviser1
				// this.legaladviser2=res.data.lawyer.legaladviser2
			});

		this.huoqu_baojia();
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		huoqu_baojia() {
			this.$http
				.post({
					url: '/mapi/index/lawyerservice'
				})
				.then(res => {
					this.all_baojia = res.data;
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
				});
		},
		save() {
			var data = {};
			this.all_baojia.forEach((item, index, array) => {
				if (item.upserviceid == this.type) {
					if (this.type < 6) {
						data.state = Number(this.type)+1;
					} else {
						data.state = this.type;
					}
                     
					data[item.baojiamode] = this.baojia[item.baojiamode];
					
					if(this.type==1){
						data.zaixian1=this.baojia['chatprice']
						data.zaixian2=this.baojia['zaixian1']
						delete data.chatprice 
					}
					if(this.type==2){
						data.dianhua=this.baojia['phoneprice']
						
						delete data.phoneprice 
					}
				}
			});

			console.log(data);

			this.$http
				.post({
					url: '/mlawyerapi/lawyer/upbaojia',
					data: data
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '修改成功',
							duration: 2000,
							icon: 'none'
						});
						setTimeout(function() {
							uni.navigateBack();
						}, 2000);
					}
				});

			// 	console.log(this.zaixian, this.dianhua);
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.baojia_list {
}

.baojia_list_item {
	padding: 0 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 120rpx;
	border-bottom: 2rpx solid #e8e8e8;
}
.baojia_list_item_right {
	display: flex;
	align-items: center;
}
.baojia_list_item_right input {
	text-align: right;
	margin-right: 4rpx;
}

.baocun_btn {
	padding: 0 30rpx;
	margin-top: 150rpx;
}
.baocun_btn button {
	height: 88rpx;
	background-color: #f43a51;
	border-radius: 44rpx;
	line-height: 88rpx;
}
</style>
