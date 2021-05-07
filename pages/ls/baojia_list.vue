<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">{{type==1?'在线咨询':type==2?'电话咨询':type==3?'合同文书':type==6?'法律顾问':'诉讼委托'}}</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<!-- 在线咨询 -->
			
			
			
			
			<view class="baojia_list" v-for="(item, index) in all_dalei" v-if="index==type-1">
				
				<view class="baojia_list_item hei_28" v-for="item2 in arry[index]">
					<text>{{item2.name}}</text>
					<view class="baojia_list_item_right ">
						<input type="text"  placeholder="请填写" class="hei_28" v-model="baojia[item2.baojiamode]"/> 元
					</view>
				</view>
		
			</view>
			
			
	
			<view class="baocun_btn">
				<button type="" class="bai_30" @click="save" >立即添加</button>
			</view>
			
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
                 chatprice:'',
				 zaixian1:'',
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
				 title:'在线咨询',
				 baojia:'',
				 legaladviser1:'',
				 legaladviser2:'',
				 all_dalei:[],
				 arry:[]
		};
	},
	created() {},
	onLoad(option) {
		this.type=option.type
       this.$http
       	.post({
       		url: '/mlawyerapi/lawyer/baojia'
       	})
       	.then(res => {
       		this.baojia=res.data.lawyer
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
		
		this.huoqu_baojia()
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

       huoqu_baojia(){
	this.$http
		.post({
			url: '/mapi/index/lawyerservice'
		})
		.then(res => {
			
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
			
			
			 })
  },
		save() {
			

			console.log(this.baojia)
			
			
			if(this.type==1){
				if (this.baojia.chatprice == ''||this.baojia.zaixian1=='' || this.baojia.zaixian3=='' || this.baojia.zaixian30=='') {
					uni.showToast({
						title: '请填写完整',
						duration: 2000,
						icon: 'none'
					});
					return false;
				} 
				
					var data={
					state: 2,
					zaixian1:this.baojia.chatprice,
					zaixian2:this.baojia.zaixian1,
					zaixian3:this.baojia.zaixian3,
					zaixian30:this.baojia.zaixian30
				}
				
			}
		   if(this.type==2){
		   	if (this.baojia.phoneprice == '' || this.baojia.dianhua1=='' || this.baojia.dianhua3=='' || this.baojia.dianhua30=='') {
		   		uni.showToast({
		   			title: '请填写完整',
		   			duration: 2000,
		   			icon: 'none'
		   		});
		   		return false;
		   	} 
              	var data={
				  state: 3,
              	dianhua:this.baojia.phoneprice,
              	dianhua1:this.baojia.dianhua1,
              	dianhua3:this.baojia.zaixian3,
				dianhua30:this.baojia.zaixian30,
              }
		   }
		   if(this.type==3){
		   	if (this.baojia.hetong_shenhe == '' || this.baojia.hetong_daixie=='' || this.baojia.hetong_wenshu=='') {
		   		uni.showToast({
		   			title: '请填写完整',
		   			duration: 2000,
		   			icon: 'none'
		   		});
		   		return false;
		   	} 
				var data={
				state: 4,
				hetong_shenhe:this.baojia.hetong_shenhe,
				hetong_daixie:this.baojia.hetong_daixie,
				hetong_wenshu:this.baojia.hetong_wenshu
			}
		   
		   }
		   if(this.type==4){
		   	if (this.baojia.lvshi_huijian == '' || this.baojia.lvshihan=='' || this.baojia.anjianzhidao=='') {
		   		uni.showToast({
		   			title: '请填写完整',
		   			duration: 2000,
		   			icon: 'none'
		   		});
		   		return false;
		   	} 
			var data={
				state: 5,
				lvshi_huijian:this.baojia.lvshi_huijian,
				lvshihan:this.baojia.lvshihan,
				anjianzhidao:this.baojia.anjianzhidao,
				qisushu:this.baojia.qisushu,
				yingsushu:this.baojia.yingsushu,
				weituosusong:this.baojia.weituosusong
			}
		   
		   }
		   if(this.type==5){
		   	if (this.baojia.legaladviser1 == '' || this.baojia.legaladviser2=='') {
		   		uni.showToast({
		   			title: '请填写完整',
		   			duration: 2000,
		   			icon: 'none'
		   		});
		   		return false;
		   	} 
		   			var data={
		   				state: 6,
		   				legaladviser1:this.baojia.legaladviser1,
		   				legaladviser2:this.baojia.legaladviser2,
						legaladviser3:this.baojia.legaladviser3,
		   				
		   			}
		   
		   }


		this.$http
			.post({
				url: '/mlawyerapi/lawyer/upbaojia',
				data:data
			})
			.then(res => {
				uni.showToast({
					title: '修改成功',
					duration: 2000,
					icon: 'none'
				});
				setTimeout(function(){
				uni.navigateBack()
							},2000)
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
