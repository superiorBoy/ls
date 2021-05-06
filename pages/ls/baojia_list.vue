<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">{{type==1?'在线咨询':type==2?'电话咨询':type==3?'合同文书':type==5?'法律顾问':'诉讼委托'}}</view>
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
			<!-- 法律顾问 -->
			<view class="baojia_list" v-if="type==5">
				<view class="baojia_list_item hei_28">
					<text>个人法律顾问一年</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="legaladviser1"/> 元
					</view>
				</view>
				<view class="baojia_list_item hei_28">
					<text>企业法律顾问一年</text>
					<view class="baojia_list_item_right ">
						<input type="text" value="" placeholder="请填写" class="hei_28" v-model="legaladviser2"/> 元
					</view>
				</view>
		
			
			</view>
			<view class="baocun_btn">
				<button type="" class="bai_30" @click="save">立即添加</button>
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
				 title:'在线咨询',
				 baojia:'',
				 legaladviser1:'',
				 legaladviser2:''
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
			this.chatprice=res.data.lawyer.chatprice
			this.zaixian3=res.data.lawyer.zaixian3
			this.zaixian30=res.data.lawyer.zaixian30
			this.phoneprice=res.data.lawyer.phoneprice
			this.dianhua1=res.data.lawyer.dianhua1
			this.dianhua3=res.data.lawyer.dianhua3
			this.dianhua30=res.data.lawyer.dianhua30
			this.hetong_shenhe=res.data.lawyer.hetong_shenhe
			this.hetong_daixie=res.data.lawyer.hetong_daixie
			this.hetong_wenshu=res.data.lawyer.hetong_wenshu
			this.lvshi_huijian=res.data.lawyer.lvshi_huijian
			this.lvshihan=res.data.lawyer.lvshihan
       		this.anjianzhidao=res.data.lawyer.anjianzhidao
			this.legaladviser1=res.data.lawyer.legaladviser1
			this.legaladviser2=res.data.lawyer.legaladviser2
       	});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		save() {
			
			if(this.type==1){
				if (this.chatprice == '' || this.zaixian3=='' || this.zaixian30=='') {
					uni.showToast({
						title: '请填写完整',
						duration: 2000,
						icon: 'none'
					});
					return false;
				} 
				
					var data={
					state: 2,
					zaixian1:this.chatprice,
					zaixian3:this.zaixian3,
					zaixian30:this.zaixian30
				}
				
			}
		   if(this.type==2){
		   	if (this.phoneprice == '' || this.dianhua1=='' || this.dianhua3=='' || this.dianhua30=='') {
		   		uni.showToast({
		   			title: '请填写完整',
		   			duration: 2000,
		   			icon: 'none'
		   		});
		   		return false;
		   	} 
              	var data={
				  state: 3,
              	dianhua:this.phoneprice,
              	dianhua1:this.dianhua1,
              	dianhua3:this.zaixian3,
				dianhua30:this.zaixian30,
              }
		   }
		   if(this.type==3){
		   	if (this.hetong_shenhe == '' || this.hetong_daixie=='' || this.hetong_wenshu=='') {
		   		uni.showToast({
		   			title: '请填写完整',
		   			duration: 2000,
		   			icon: 'none'
		   		});
		   		return false;
		   	} 
				var data={
				state: 4,
				hetong_shenhe:this.hetong_shenhe,
				hetong_daixie:this.hetong_daixie,
				hetong_wenshu:this.hetong_wenshu
			}
		   
		   }
		   if(this.type==4){
		   	if (this.lvshi_huijian == '' || this.lvshihan=='' || this.anjianzhidao=='') {
		   		uni.showToast({
		   			title: '请填写完整',
		   			duration: 2000,
		   			icon: 'none'
		   		});
		   		return false;
		   	} 
			var data={
				state: 5,
				lvshi_huijian:this.lvshi_huijian,
				lvshihan:this.lvshihan,
				anjianzhidao:this.anjianzhidao
			}
		   
		   }
		   if(this.type==5){
		   	if (this.legaladviser1 == '' || this.legaladviser2=='') {
		   		uni.showToast({
		   			title: '请填写完整',
		   			duration: 2000,
		   			icon: 'none'
		   		});
		   		return false;
		   	} 
		   			var data={
		   				state: 6,
		   				legaladviser1:this.legaladviser1,
		   				legaladviser2:this.legaladviser2
		   				
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
