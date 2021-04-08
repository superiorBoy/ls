<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">案情内容</view>
			<view class=" head_right hei_30_bold"><text @click="save">保存</text></view>
		</view>

		<view class="zi_body ">
			<view class="up_neirong" @click="zhanshi">
				
				<!-- <textarea value="" placeholder="" class=" hei_26" v-model="neirong_txt" maxlength="5000" /> -->
				<!-- <editor id="editor" class="ql-container hei_26" @ready="onEditorReady" @input="getEditorContent" placeholder=""></editor> -->
			<editor id="editor" show-img-size  show-img-resize show-img-toolbar class="ql-container"
			 placeholder="" @statuschange="onStatusChange" @ready="onEditorReady" @input="getEditorContent">
			</editor>
			<!-- <u-parse :content="neirong_txt"></u-parse> -->
		
			</view>

			<view class="neirong hui_26" v-if="!show">
				<view class="">案情内容建议格式:</view>
				<view class="center" style="margin: 60rpx 0;">案情标题、案号、审理法院信息</view>
				<view class="">案情简介</view>
				<view class="">简述案情内容，需填写原告、被告、代理人、法定代表人等信息。</view>
				<view class="" style="margin-top: 80rpx;">案情简介</view>
				<view class="">简述描写办案的经过...</view>
				<view class="" style="margin-top: 80rpx;">案情结果</view>
				<view class="">简述案情的结果。写明判决结果及判决的理由，也可简述本案中应用的法条...</view>
				<view class="" style="margin-top: 80rpx;">审判人员</view>
				<view class="">裁判日期</view>
				<view class="center" style="margin-top: 80rpx;">请按照以上要求填写案件内容。</view>
				<view class="center">以中国裁判文书网的案例格式为准！</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/feng-parse/parse.vue';
	
	
export default {
	data() {
		return {
			neirong_txt: '',
			show: false,
			lyanliid:''
		};
	},
	components: {
		
		uParse
	},
	created() {},
	onLoad(option) {
		this.lyanliid=option.lyanliid
		var that = this;
		// uni.getStorage({
		// 	key: 'neirong',
		// 	success: function(res) {
		// 		if (res.data != '') {
		// 			that.neirong_txt = res.data;
		// 			that.show = true;
		// 		}
		// 	}
		// });
		if(option.lyanliid){
		that.show = true;
		
		
	// this.$http
	// 		.post({
	// 			url: '/mapi/lawyer/anli_xq',
	// 			data:{
	// 				lyanliid:this.lyanliid
	// 			}
	// 		})
	// 		.then(res => {
	// 			that.neirong_txt= res.data.anli.information
	// 		});			
		
		}
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		//转意符换成普通字符
		  escape2Html(str) { 
		  var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}; 
		  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];}); 
		 },
		   removeHTMLTag(str) {
		    str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
		    str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
		    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
		    str=str.replace(/ /ig,'');//去掉 
		    return str;
		  },
		   formatQuoteInStyle(htmlString) {
		      var stylePattern = /style="[^=>]*"[\s+\w+=|>]/g;
		      var innerQuotePattern = /(?<!=)"(?!>)/g;
		      return htmlString.replace(stylePattern, function(matches) {
		          return matches.replace(innerQuotePattern, '\'');
		      });
		  },
		onEditorReady() {
			var that = this;
			if(this.lyanliid){
      	this.$http
		.post({
			url: '/mapi/lawyer/anli_xq',
			data:{
				lyanliid:this.lyanliid
			}
		})
		.then(res => {
			that.neirong_txt= res.data.anli.information
			
			
			     while(that.neirong_txt.indexOf('<o:p></o:p>') != -1 ) {
			        that.neirong_txt = that.neirong_txt.replace('<o:p></o:p>',"")
			       
			     }
				 while(that.neirong_txt.indexOf('&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;') != -1 ) {
				    that.neirong_txt = that.neirong_txt.replace('&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;',"")
				   
				 }
			   
			
			var contentVal_1 =that.neirong_txt

			uni.createSelectorQuery().select('#editor').context(res => {
					
				
					
				// 	    while(contentVal_1.indexOf('&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;') != -1 ) {
				// 	       contentVal_1 = contentVal_1.replace('&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;',"")
					       
				// 	    }
					    
				console.log(contentVal_1)	
					//将内容写入编辑器
					that.editorCtx = res.context;
					// let EContent = {
					// 	html: contentVal_1
					// };
					that.editorCtx.setContents({
					               html:contentVal_1    
					       }) 
					// this.editorCtx.setContents(EContent); //设置富文本编辑器的内容
				})
				.exec();
				
				});		
			}	else{
				uni.createSelectorQuery()
					.select('#editor')
					.context(res => {
						var contentVal_1 =that.neirong_txt ;
						
						//将内容写入编辑器
						this.editorCtx = res.context;
						let EContent = {
							html: contentVal_1
						};
						this.editorCtx.setContents(EContent); //设置富文本编辑器的内容
					})
					.exec();
			}
				
		},

		getEditorContent(e) {
			this.neirong_txt = e.detail.html;
		},
		change() {
			console.log(this.neirong_txt);
		},
		zhanshi() {
			this.show = true;
		},
		save() {
			console.log(this.neirong_txt, '1111');
			uni.setStorage({
				key: 'neirong',
				data: this.neirong_txt,
				success: function() {
					uni.navigateBack();
				}
			});

			if (this.neirong_txt == '') {
				uni.showToast({
					title: '请输入内容',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}

			console.log(this.neirong_txt);
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.shiming_list {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #e8e8e8;
	padding-left: 30rpx;
	padding-right: 30rpx;
	position: relative;
}

.shiming_list input {
	width: 500rpx;
	text-align: right;
}

.shiming_list_left {
	width: 170rpx;
}
.up_neirong {
	width: 100%;
	height: 1000rpx;
	position: absolute;
	left: 0;
}

.neirong,
.up_neirong {
	padding: 30rpx;
	line-height: 40rpx;
	box-sizing: border-box;
}
.up_neirong textarea {
	padding: 0;
	width: 100%;
	min-height: 1000rpx;
}
.center {
	text-align: center;
}
.ql-container{
	height:1000rpx;
}
</style>
