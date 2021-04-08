<template>
	<view>
		<!-- 
		  更多api，请前往：https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html 
		  字体图标，微信小程序官方的确没有给出名称
		-->
		<view class="container">
			<editor id="editor" show-img-size :read-only="isEdit" show-img-resize show-img-toolbar class="ql-container"
			 :placeholder="placeholder" @statuschange="onStatusChange" @ready="onEditorReady">
			</editor>
		</view>

		<view class="toolbar" @touchend.stop="format" :style="'bottom: ' + (isIOS ? keyboardHeight : 0) + 'px'">
			<i class="iconfont icon-charutupian" @touchend.stop="insertImage"></i>
			<i :class="'iconfont icon-format-header-1 ' + (formats.header === 1 ? 'ql-active' : '')" data-name="header"
			 :data-value="1"></i>
			<i :class="'iconfont icon-format-header-2 ' + (formats.header === 2 ? 'ql-active' : '')" data-name="header"
			 :data-value="2"></i>
			<i :class="'iconfont icon-format-header-3 ' + (formats.header === 3 ? 'ql-active' : '')" data-name="header"
			 :data-value="3"></i>
			<i :class="'iconfont icon-format-header-4 ' + (formats.header === 4 ? 'ql-active' : '')" data-name="header"
			 :data-value="4"></i>
			<i :class="'iconfont icon-format-header-5 ' + (formats.header === 5 ? 'ql-active' : '')" data-name="header"
			 :data-value="5"></i>
			<i :class="'iconfont icon-format-header-6 ' + (formats.header === 6 ? 'ql-active' : '')" data-name="header"
			 :data-value="6"></i>
			<i :class="'iconfont icon-zitijiacu ' + (formats.bold ? 'ql-active' : '')" data-name="bold"></i>
			<i :class="'iconfont icon-zitishanchuxian ' + (formats.strike ? 'ql-active' : '')" data-name="strike"></i>
			<i :class="'iconfont icon-zitixieti ' + (formats.italic ? 'ql-active' : '')" data-name="italic"></i>
			<i :class="'iconfont icon-zuoduiqi ' + (formats.align === 'left' ? 'ql-active' : '')" data-name="align" data-value="left"></i>
			<i :class="'iconfont icon-juzhongduiqi ' + (formats.align === 'center' ? 'ql-active' : '')" data-name="align"
			 data-value="center"></i>
			<i :class="'iconfont icon-youduiqi ' + (formats.align === 'right' ? 'ql-active' : '')" data-name="align" data-value="right"></i>
			<i :class="'iconfont icon-zuoyouduiqi ' + (formats.align === 'justify' ? 'ql-active' : '')" data-name="align"
			 data-value="justify"></i>
			<i :class="'iconfont icon-line-height ' + (formats.lineHeight ? 'ql-active' : '')" data-name="lineHeight" data-value="2"></i>
			<i :class="'iconfont icon-Character-Spacing ' + (formats.letterSpacing ? 'ql-active' : '')" data-name="letterSpacing"
			 data-value="2em"></i>
			<i :class="'iconfont icon-722bianjiqi_duanqianju ' + (formats.marginTop ? 'ql-active' : '')" data-name="marginTop"
			 data-value="20px"></i>
			<i :class="'iconfont icon-723bianjiqi_duanhouju ' + (formats.micon-previewarginBottom ? 'ql-active' : '')" data-name="marginBottom"
			 data-value="20px"></i>
			<i class="iconfont icon-clearedformat" @tap="removeFormat"></i>
			<i :class="'iconfont icon-font ' + (formats.fontFamily ? 'ql-active' : '')" data-name="fontFamily" data-value="Pacifico"></i>
			<i :class="'iconfont icon-fontsize ' + (formats.fontSize === '24px' ? 'ql-active' : '')" data-name="fontSize"
			 data-value="24px"></i>
			<i :class="'iconfont icon-text_color ' + (formats.color === fontColor ? 'ql-active' : '')" data-name="color"
			 :data-value="fontColor" @tap="open"></i>
			<i :class="'iconfont icon-fontbgcolor ' + (formats.backgroundColor === '#00ff00' ? 'ql-active' : '')" data-name="backgroundColor"
			 data-value="#00ff00"></i>
			<!-- 引用黄河浪的color取色器 -->
			<i class="iconfont icon-date" @tap="insertDate"></i>
			<i class="iconfont icon-undo" @tap="undo"></i>
			<i class="iconfont icon-redo" @tap="redo"></i>
			<i :class="'iconfont icon-zitixiahuaxian ' + (formats.underline ? 'ql-active' : '')" data-name="underline"></i>
			<i class="iconfont icon--checklist" data-name="list" data-value="check"></i>
			<i :class="'iconfont icon-youxupailie ' + (formats.list === 'ordered' ? 'ql-active' : '')" data-name="list"
			 data-value="ordered"></i>
			<i :class="'iconfont icon-wuxupailie ' + (formats.list === 'bullet' ? 'ql-active' : '')" data-name="list" data-value="bullet"></i>
			<i class="iconfont icon-outdent" data-name="indent" data-value="-1"></i>
			<i class="iconfont icon-indent" data-name="indent" data-value="+1"></i>
			<i class="iconfont icon-fengexian" @tap="insertDivider"></i>
			<i class="iconfont icon-preview" @tap="store" id="2"></i>
			<i :class="'iconfont icon-zitixiabiao ' + (formats.script === 'sub' ? 'ql-active' : '')" data-name="script"
			 data-value="sub"></i>
			<i :class="'iconfont icon-zitishangbiao ' + (formats.script === 'super' ? 'ql-active' : '')" data-name="script"
			 data-value="super"></i>
			<!-- <i class="iconfont icon-quanping"></i> -->
			<i class="iconfont icon-shanchu" @tap="clear"></i>
			<i :class="'iconfont icon-direction-rtl ' + (formats.direction === 'rtl' ? 'ql-active' : '')" data-name="direction"
			 data-value="rtl"></i>
			<i class="iconfont icon-baocun" @tap="store" id="1"></i>
		</view>
		
	</view>
</template>

<script>
	
	var _self;
	export default {
		components: {
			
		},
		data() {
			return {
				color: {
					r: 255,
					g: 0,
					b: 0,
					a: 0.6
				},
				isEdit: false,
				fontColor: '#000',
				formats: {},
				readOnly: false,
				placeholder: '开始输入...',
				editorHeight: 300,
				keyboardHeight: 0,
				isIOS: false
			};
		},
		onLoad() {
			_self = this;
		},

		methods: {
			cancel() {
				this.isEdit = false;
			},
			open() {
				this.$refs.colorPicker.open();
				this.isEdit = true;
				// uni.hideKeyboard();
			},
			hideKey() {
				uni.hideKeyboard();
			},
			async confirm(e) {
				this.isEdit = false;
				this.fontColor = await e.hex;
				this.onStatusChange({
					detail: {
						color: e.hex
					}
				});
				this.$forceUpdate();
			},
			readOnlyChange() {
				this.readOnly = !this.readOnly
			},
			onEditorReady() {
				
				let html=`
<p>&lt;p class="MsoNormal" align="center" style="text-align:center;"&gt;&lt;span style="font-family: 宋体;"&gt;&lt;font size="5"&gt;&lt;b&gt;河南省洛阳市洛龙区人民法院&lt;/b&gt;&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" align="center" style="text-align:center;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;民事调解书&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" align="right" style="text-align:right;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;(2021&lt;font face="宋体"&gt;）豫&lt;/font&gt;&lt;font face="Calibri"&gt;0311&lt;/font&gt;&lt;font face="宋体"&gt;民初&lt;/font&gt;&lt;font face="Calibri"&gt;560&lt;/font&gt;&lt;font face="宋体"&gt;号&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;原告：河南省大鹏装饰&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;**&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;font face="宋体"&gt;有限公司，住所：河南省郑州市经开区第*大街&lt;/font&gt;***&lt;font face="宋体"&gt;号。统一社会信用代码：&lt;/font&gt;&lt;font face="Calibri"&gt;914101007218******&lt;/font&gt;&lt;font face="宋体"&gt;。&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;法定代表人：王真真。&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;委托代理人：王焕章、韩俊秀，河南大进律师事务所律师，&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;特别授权。&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;被告：洛阳科技城&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;**&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;font face="宋体"&gt;发展有限公司，住所：洛阳市伊滨区科技大道&lt;/font&gt;**&lt;font face="宋体"&gt;号中意科技园一号研发楼&lt;/font&gt;&lt;font face="Calibri"&gt;***&lt;/font&gt;&lt;font face="宋体"&gt;室。统一社会信用代码：&lt;/font&gt;&lt;font face="Calibri"&gt;914103005897******&lt;/font&gt;&lt;font face="宋体"&gt;。&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;法定代表人：回戈。&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;委托代理人：雷会云、许会杰，河南广文律师事务所律师，特别授权。&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;原告&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;font face="宋体"&gt;河南省大鹏装饰&lt;/font&gt;**&lt;font face="宋体"&gt;有限公司&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;诉被告洛阳科技城产业发展有限公司建设工程施工合同纠纷一案，经本案主持调解，双方协商自愿达成协议如下：&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;font face="宋体"&gt;一、原被告双方确认本案剩余工程款本金&lt;/font&gt;1179406.07&lt;font face="宋体"&gt;元&lt;/font&gt;&lt;font face="Calibri"&gt;(&lt;/font&gt;&lt;font face="宋体"&gt;含质保金&lt;/font&gt;&lt;font face="Calibri"&gt;363970.3&lt;/font&gt;&lt;font face="宋体"&gt;元），原告同意被告于&lt;/font&gt;&lt;font face="Calibri"&gt;2021&lt;/font&gt;&lt;font face="宋体"&gt;年&lt;/font&gt;&lt;font face="Calibri"&gt;3&lt;/font&gt;&lt;font face="宋体"&gt;月&lt;/font&gt;&lt;font face="Calibri"&gt;23&lt;/font&gt;&lt;font face="宋体"&gt;日前支付工程款&lt;/font&gt;&lt;font face="Calibri"&gt;815435.77&lt;/font&gt;&lt;font face="宋体"&gt;元，&lt;/font&gt;&lt;font face="Calibri"&gt;2021&lt;/font&gt;&lt;font face="宋体"&gt;年&lt;/font&gt;&lt;font face="Calibri"&gt;11&lt;/font&gt;&lt;font face="宋体"&gt;月&lt;/font&gt;&lt;font face="Calibri"&gt;30&lt;/font&gt;&lt;font face="宋体"&gt;日前支付剩余质保金&lt;/font&gt;&lt;font face="Calibri"&gt;363970.3&lt;/font&gt;&lt;font face="宋体"&gt;元（案涉工程有质量问题除外&lt;/font&gt;&lt;font face="Calibri"&gt;)&lt;/font&gt;&lt;font face="宋体"&gt;。原告指定的收款账户&lt;/font&gt;&lt;font face="Calibri"&gt;(&lt;/font&gt;&lt;font face="宋体"&gt;户名：&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;font face="宋体"&gt;河南省大鹏装饰&lt;/font&gt;**&lt;font face="宋体"&gt;有限公司&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;font face="宋体"&gt;，开户行：郑州银行财经支行，账号：&lt;/font&gt;938760120102100667)&lt;font face="宋体"&gt;。&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;font face="宋体"&gt;二、被告付款后，原告须&lt;/font&gt;3&lt;font face="宋体"&gt;日内向被告提供等额增值税专用发票，原告违约的，应支付违约金&lt;/font&gt;&lt;font face="Calibri"&gt;5&lt;/font&gt;&lt;font face="宋体"&gt;万元。&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;font face="宋体"&gt;三、原告放弃诉讼请求中工程款的利息主张，本案诉讼费&lt;/font&gt;7707&lt;font face="宋体"&gt;元、保全费&lt;/font&gt;&lt;font face="Calibri"&gt;5000&lt;/font&gt;&lt;font face="宋体"&gt;元由原告自行承担。&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;font face="宋体"&gt;四、本案工程所涉及的施工配合费由原告自行独立与总承包人河南明安建设集团有限公司交涉并向其支付，与被告无涉。日后若因施工配合费问题牵累被告，因之所发生的一应费用（包括日后被告或需直接向总承包人支付的该项目施工配合费、被告解决配合费纠纷所发生的诉讼费用、律师费用等&lt;/font&gt;)&lt;font face="宋体"&gt;，全部由原告承担并原告另行向被告支付违约金&lt;/font&gt;&lt;font face="Calibri"&gt;1&lt;/font&gt;&lt;font face="宋体"&gt;万元。&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;上述调解协议不违反法律规定，本院予以确认。&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="text-indent:30.0000pt;mso-char-indent-count:2.0000;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;本调解书经原、被告双方当事人签收后，即发生法律效力。&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" align="right" style="text-align:right;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&amp;nbsp;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" align="right" style="text-align:right;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;font face="宋体"&gt;审&lt;/font&gt; &lt;font face="宋体"&gt;判&lt;/font&gt; &lt;font face="宋体"&gt;员&lt;/font&gt; &amp;nbsp;&lt;font face="宋体"&gt;张&lt;/font&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;font face="宋体"&gt;静&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" align="right" style="text-align:right;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;二〇二一年三月十九日&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal" align="right" style="text-align:right;"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;font face="宋体"&gt;书&lt;/font&gt; &lt;font face="宋体"&gt;记&lt;/font&gt; &lt;font face="宋体"&gt;员&lt;/font&gt; &amp;nbsp;&lt;font face="宋体"&gt;高&lt;/font&gt; &lt;font face="宋体"&gt;晓&lt;/font&gt; &lt;font face="宋体"&gt;曼&lt;/font&gt;&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;↵mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;	&lt;/span&gt;&lt;span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;↵mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:15.0000pt;↵mso-font-kerning:1.0000pt;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;</p>
				`
				
				
		 var count=0;
		     while(html.indexOf('&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;') != -1 ) {
		        html = html.replace('&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;',"")
		        count++;    
		     }
		     console.log(count)
		
		
		console.log(html)
				uni.createSelectorQuery().select('#editor').context(function(res) {
					_self.editorCtx = res.context;
					 _self.editorCtx.setContents({    
					                html:html    
					        }) 
				}).exec();
			},
			undo() {
				this.editorCtx.undo();
			},

			redo() {
				this.editorCtx.redo();
			},

			blur() {
				this.editorCtx.blur();
			},

			format(e) {
				// this.hideKey();
				let {
					name,
					value
				} = e.target.dataset;
				if (!name) return; // console.log('format', name, value)
				this.editorCtx.format(name, value);
			},

			onStatusChange(e) {
				this.formats = e.detail;
			},

			insertDivider() {
				this.editorCtx.insertDivider({
					success: function() {
						console.log('insert divider success');
					}
				});
			},

			store(e) {
				this.editorCtx.getContents({
					success: function(res) {
						e.currentTarget.id == 1 ? console.log('保存内容:', res.html) : uni.navigateTo({
							url: `../preview/preview?rich=${encodeURIComponent(res.html)}`
						});
					}
				});
			},

			clear() {
				this.editorCtx.clear({
					success: function(res) {
						console.log("clear success");
					}
				});
			},

			removeFormat() {
				this.editorCtx.removeFormat();
			},

			insertDate() {
				const date = new Date();
				const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
				this.editorCtx.insertText({
					text: formatDate
				});
			},

			insertImage() {
				// const that = this;
				uni.chooseImage({
					count: 1,
					success: function(res) {
						_self.editorCtx.insertImage({
							src: res.tempFilePaths[0],
							data: {
								id: 'abcd',
								role: 'god'
							},
							width: '80%',
							success: function() {
								console.log('insert image success');
							}
						});
					}
				});
			}
		}
	};
</script>
<style>
	
</style>
