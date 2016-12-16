window.onload = function() {
	$("body").css('height', $(window).height());
	$("body").css('width', $(window).width());
	$(".loading").hide().remove();
	$('.page1 .text').show();
	document.getElementById("videoSourse").addEventListener('touchend', function() {
		document.getElementById("videoSourse").play();
	}, false);
};
var mySwiper = new Swiper('#pages', {
	direction: 'vertical',
	speed: 400,
	onSlideChangeEnd: function(swiper){
		$('.text').hide();
		switch (swiper.activeIndex){
			case 0:
				$('.page1 .text').show();
				break;
			case 1:
				$('.page2 .text').show();
				break;
			case 2:
				$('.page3 .text').show();
				break;
			case 3:
				$('.page4 .text').show();
				break;
			default:
				break;
		}
	},
	onInit: function(){
	$('.text').hide();
}
});

var main = {
	'重庆名望汽车销售服务有限公司': {
		pic: '重庆名望汽车销售服务有限公司',
		phone: '023-68825566',
		num: 1
	},
	'重庆名望宝晟汽车销售服务有限公司': {
		pic: '重庆名望宝晟汽车销售服务有限公司',
		phone: '023-58855511',
		num: 2
	},
	'绍兴德智汽车销售服务有限公司': {
		pic: '绍兴德智汽车销售服务有限公司',
		phone: '0575-89192999',
		num: 3
	},
	'金华中旭汽车有限公司': {
		pic: '金华中旭汽车有限公司',
		phone: '',
		num: 4
	},
	'温州市宝合汽车贸易有限公司': {
		pic: '温州市宝合汽车贸易有限公司',
		phone: '0577-86568808',
		num: 5
	},
	'台州鸿鹰汽车销售服务有限公司': {
		pic: '台州鸿鹰汽车销售服务有限公司',
		phone: '0576-89212988',
		num: 6
	},
	'宁波宝峰汽车销售服务有限公司': {
		pic: '宁波宝峰汽车销售服务有限公司',
		phone: '0574-87502111',
		num: 7
	},
	'永康市九安汽车销售服务有限公司': {
		pic: '',
		phone: '0579-89209123',
		num: 111
	},
	'杭州宝粲汽车销售有限公司': {
		pic: '',
		phone: '0571-88144000',
		num: 111
	},
	'曲靖恺悌有限责任公司': {
		pic: '曲靖恺悌有限责任公司',
		phone: '0874-3519989',
		num: 11
	},
	'云南恺悌汽车贸易有限公司': {
		pic: '云南恺悌汽车贸易有限公司',
		phone: '0871-68325036',
		num: 12
	},
	'文山市润金汽车销售服务有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'乌鲁木齐骏腾宝沃汽车销售有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'喀什德宝宝沃汽车销售有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'天津市沃德宏安汽车贸易有限公司': {
		pic: '天津市沃德宏安汽车贸易有限公司',
		phone: '',
		num: 16
	},
	'成都宝沃行汽车销售服务有限公司': {
		pic: '成都宝沃行汽车销售服务有限公司',
		phone: '',
		num: 17
	},
	'绵阳兴宝沃汽车销售服务有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'德阳兴沃汽车销售服务有限公司': {
		pic: '',
		phone: '0838-2603080',
		num: 111
	},
	'泸州兴沃汽车销售服务有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'南充兴沃汽车销售服务有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'上海统焕汽车销售服务有限公司': {
		pic: '上海统焕汽车销售服务有限公司',
		phone: '021-54730096',
		num: 22
	},
	'陕西恒安宝沃汽车销售服务有限公司': {
		pic: '陕西恒安宝沃汽车销售服务有限公司',
		phone: '029-63606808',
		num: 23
	},
	'榆林恒安宝沃汽车销售服务有限公司': {
		pic: '',
		phone: '0912-3231600',
		num: 111
	},
	'渭南恒安宝沃汽车销售服务有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'山西中汽贸联现代汽车销售有限公司': {
		pic: '山西中汽贸联现代汽车销售有限公司',
		phone: '0351-2207666',
		num: 26
	},
	'临汾市中盛瑞嘉汽贸有限公司': {
		pic: '临汾市中盛瑞嘉汽贸有限公司',
		phone: '0357-5096666',
		num: 27
	},
	'山西省长治市飞路汽车贸易有限公司': {
		pic: '山西省长治市飞路汽车贸易有限公司',
		phone: '0357-2084567',
		num: 28
	},
	'大同市荣迪汽车服务有限公司': {
		pic: '大同市荣迪汽车服务有限公司',
		phone: '0352-5030222',
		num: 29
	},
	'济宁骥源汽车销售服务有限公司': {
		pic: '济宁骥源汽车销售服务有限公司',
		phone: '0537-2612555',
		num: 30
	},
	'临沂美华汽车销售服务有限公司': {
		pic: '临沂美华汽车销售服务有限公司',
		phone: '0539-8486111',
		num: 31
	},
	'德州艮生汽车销售服务有限公司': {
		pic: '德州艮生汽车销售服务有限公司',
		phone: '0534-2569999',
		num: 32
	},
	'济南金万通商贸有限公司': {
		pic: '济南金万通商贸有限公司',
		phone: '0531-58538000',
		num: 33
	},
	'潍坊宝之盈汽车销售服务有限公司': {
		pic: '潍坊宝之盈汽车销售服务有限公司',
		phone: '0536-2106108',
		num: 34
	},
	'烟台市君通沃达汽车销售有限公司': {
		pic: '烟台市君通沃达汽车销售有限公司',
		phone: '0535-3468888',
		num: 35
	},
	'威海市德工汽车销售服务有限公司': {
		pic: '威海市德工汽车销售服务有限公司',
		phone: '0631-5316158',
		num: 36
	},
	'淄博金智达汽车销售服务有限公司': {
		pic: '',
		phone: '0533-2987078',
		num: 111
	},
	'滨州运宝汽车销售有限公司': {
		pic: '滨州运宝汽车销售有限公司',
		phone: '0543-2294333',
		num: 38
	},
	'东营君泰宝沃汽车贸易有限公司': {
		pic: '东营君泰宝沃汽车贸易有限公司',
		phone: '0546-6393111',
		num: 39
	},
	'聊城世通汽车销售服务有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'宁夏金德宝汽车销售有限公司': {
		pic: '宁夏金德宝汽车销售有限公司',
		phone: '',
		num: 41
	},
	'包头市辰市汽车贸易有限公司': {
		pic: '',
		phone: '0472-18147289709',
		num: 111
	},
	'赤峰宝昇汽车贸易有限公司': {
		pic: '赤峰宝昇汽车贸易有限公司',
		phone: '0476-5990666',
		num: 43
	},
	'通辽市华通汽车销售有限公司': {
		pic: '通辽市华通汽车销售有限公司',
		phone: '0475-8883488',
		num: 44
	},
	'呼和浩特市庞大明绅汽车销售服务有限责任公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'锦州市凯迪汽车销售有限公司': {
		pic: '锦州市凯迪汽车销售有限公司',
		phone: '0416-2847111',
		num: 46
	},
	'大连鑫晨汽车销售服务有限公司': {
		pic: '大连鑫晨汽车销售服务有限公司',
		phone: '0411-86578800',
		num: 47
	},
	'沈阳南星行汽车销售服务有限公司': {
		pic: '沈阳南星行汽车销售服务有限公司',
		phone: '',
		num: 48
	},
	'江西德之骏汽车销售有限公司': {
		pic: '江西德之骏汽车销售有限公司',
		phone: '0791-83888822',
		num: 49
	},
	'九江德沃汽车贸易有限公司': {
		pic: '九江德沃汽车贸易有限公司',
		phone: '0792-6950019',
		num: 50
	},
	'常州东源汽车销售服务有限公司': {
		pic: '常州东源汽车销售服务有限公司',
		phone: '0519-68786666',
		num: 51
	},
	'江苏宝沃汽车服务有限公司': {
		pic: '江苏宝沃汽车服务有限公司',
		phone: '025-83687777',
		num: 52
	},
	'苏州宝沃汽车销售服务有限公司': {
		pic: '苏州宝沃汽车销售服务有限公司',
		phone: '0512-66516661',
		num: 53
	},
	'无锡宝沃汽车销售服务有限公司': {
		pic: '无锡宝沃汽车销售服务有限公司',
		phone: '0510-83835111',
		num: 54
	},
	'徐州中豪汽车销售有限公司': {
		pic: '徐州中豪汽车销售有限公司',
		phone: '0516-68081666',
		num: 55
	},
	'南京天沃汽车销售服务有限公司': {
		pic: '南京天沃汽车销售服务有限公司',
		phone: '025-58600000',
		num: 56
	},
	'森风集团盐城义德汽车有限公司': {
		pic: '',
		phone: '0515-88557388',
		num: 111
	},
	'泰州同悦汽车销售服务有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'连云港市沃德汽车销售服务有限公司': {
		pic: '',
		phone: '0518-85772896',
		num: 111
	},
	'延吉中诚汽车销售服务有限公司': {
		pic: '延吉中诚汽车销售服务有限公司',
		phone: '',
		num: 60
	},
	'吉林宝荣汽车贸易有限公司': {
		pic: '吉林宝荣汽车贸易有限公司',
		phone: '0431-89825555',
		num: 61
	},
	'湖南煜峤投资有限公司': {
		pic: '湖南煜峤投资有限公司',
		phone: '0731-84028288',
		num: 62
	},
	'永州新凯旋汽车销售服务有限公司': {
		pic: '永州新凯旋汽车销售服务有限公司',
		phone: '0746-6662881',
		num: 63
	},
	'常德市天赐汽车服务有限公司': {
		pic: '',
		phone: '0736-7261798',
		num: 111
	},
	'衡阳市顺成汽车贸易有限公司': {
		pic: '衡阳市顺成汽车贸易有限公司',
		phone: '0734-8166678',
		num: 65
	},
	'荆州市鑫峰汽车销售服务有限公司': {
		pic: '荆州市鑫峰汽车销售服务有限公司',
		phone: '0716-8518306',
		num: 66
	},
	'十堰御胜汽车销售服务有限公司': {
		pic: '十堰御胜汽车销售服务有限公司',
		phone: '0719-8129000',
		num: 67
	},
	'武汉宏博瑞德汽车销售服务有限公司': {
		pic: '武汉宏博瑞德汽车销售服务有限公司',
		phone: '027-84771919',
		num: 68
	},
	'襄阳勤谨汽车销售服务有限公司': {
		pic: '襄阳勤谨汽车销售服务有限公司',
		phone: '0710-2958858',
		num: 69
	},
	'宜昌时远汽车销售服务有限公司': {
		pic: '',
		phone: '0717-6903688',
		num: 111
	},
	'恩施州泰利达汽车销售服务有限公司': {
		pic: '恩施州泰利达汽车销售服务有限公司',
		phone: '0718-8028180',
		num: 71
	},
	'哈尔滨广来宝沃汽车销售服务有限公司': {
		pic: '哈尔滨广来宝沃汽车销售服务有限公司',
		phone: '',
		num: 72
	},
	'驻马店市宝沃汽车销售有限公司': {
		pic: '驻马店市宝沃汽车销售有限公司',
		phone: '',
		num: 73
	},
	'商丘市正兴汽车销售服务有限公司': {
		pic: '商丘市正兴汽车销售服务有限公司',
		phone: '0370-2058555',
		num: 74
	},
	'周口宏驰汽车贸易有限公司': {
		pic: '周口宏驰汽车贸易有限公司',
		phone: '0394-8383666',
		num: 75
	},
	'濮阳市豫港汽车销售服务有限公司': {
		pic: '濮阳市豫港汽车销售服务有限公司',
		phone: '0393-6921888',
		num: 76
	},
	'河南宇之林汽车销售服务有限公司': {
		pic: '河南宇之林汽车销售服务有限公司',
		phone: '0371-55634444',
		num: 77
	},
	'河南新路明汽车销售有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'许昌宝沃汽车服务有限公司': {
		pic: '',
		phone: '0374-2659999',
		num: 79
	},
	'开封市中原亚飞汽车销售服务有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'新乡市宇之林汽车销售服务有限公司': {
		pic: '',
		phone: '0373-7134444',
		num: 111
	},
	'安阳市百弘汽车销售服务有限公司': {
		pic: '安阳市百弘汽车销售服务有限公司',
		phone: '',
		num: 82
	},
	'石家庄晨阳宝尚汽车贸易有限公司': {
		pic: '石家庄晨阳宝尚汽车贸易有限公司',
		phone: '0311-85529099',
		num: 83
	},
	'沧州懿宝汽车销售服务有限公司': {
		pic: '',
		phone: '0317-3202888',
		num: 111
	},
	'邢台和佳汽车贸易有限公司': {
		pic: '邢台和佳汽车贸易有限公司',
		phone: '0319-5601888',
		num: 85
	},
	'邯郸市广达汽车销售有限公司': {
		pic: '邯郸市广达汽车销售有限公司',
		phone: '0310-5510000',
		num: 86
	},
	'保定交运汽贸有限公司': {
		pic: '保定交运汽贸有限公司',
		phone: '0312-2021919',
		num: 87
	},
	'衡水宝沃汽车销售服务有限公司': {
		pic: '衡水宝沃汽车销售服务有限公司',
		phone: '0318-2631166',
		num: 88
	},
	'唐山宝佑汽车销售服务有限公司': {
		pic: '',
		phone: '0315-2599299',
		num: 111
	},
	'海南宝之瑞汽车贸易有限公司': {
		pic: '',
		phone: '',
		num: 111
	},
	'贵州博睿羿菲汽车销售服务有限公司': {
		pic: '',
		phone: '',
		num: 91
	},
	'南宁市恒骅通汽车销售服务有限公司': {
		pic: '南宁市恒骅通汽车销售服务有限公司',
		phone: '',
		num: 92
	},
	'柳州市恒熙汽车销售服务有限公司': {
		pic: '柳州市恒熙汽车销售服务有限公司',
		phone: '',
		num: 93
	},
	'佛山市正沃汽车销售服务有限公司': {
		pic: '佛山市正沃汽车销售服务有限公司',
		phone: '0757-86230111',
		num: 94
	},
	'东莞市永盛汽车销售服务有限公司': {
		pic: '东莞市永盛汽车销售服务有限公司',
		phone: '0769-39000877',
		num: 95
	},
	'惠州市宝惠汽车有限公司': {
		pic: '惠州市宝惠汽车有限公司',
		phone: '0752-7805118',
		num: 96
	},
	'广东容大宝沃汽车贸易有限公司': {
		pic: '广东容大宝沃汽车贸易有限公司',
		phone: '0663-8206000',
		num: 97
	},
	'广州宝隆汽车销售服务有限公司': {
		pic: '广州宝隆汽车销售服务有限公司',
		phone: '020-86826777',
		num: 98
	},
	'深圳润汉汽车贸易有限公司': {
		pic: '深圳润汉汽车贸易有限公司',
		phone: '0755-89233287',
		num: 99
	},
	'茂名市进达汽车有限公司': {
		pic: '茂名市进达汽车有限公司',
		phone: '',
		num: 100
	},
	'江门市骏马通汽车销售有限公司': {
		pic: '江门市骏马通汽车销售有限公司',
		phone: '0750-3617388',
		num: 101
	},
	'珠海宝隆汽车销售服务有限公司': {
		pic: '',
		phone: '8581688',
		num: 111
	},
	'甘肃海通汽车销售有限公司': {
		pic: '甘肃海通汽车销售有限公司',
		phone: '',
		num: 103
	},
	'泉州鸿鑫汽车销售服务有限公司': {
		pic: '泉州鸿鑫汽车销售服务有限公司',
		phone: '0595-28777666',
		num: 104
	},
	'龙岩市新宇汽车销售服务有限公司': {
		pic: '',
		phone: '0592-6365035',
		num: 111
	},
	'福州三丰宝沃汽车销售服务有限公司': {
		pic: '福州三丰宝沃汽车销售服务有限公司',
		phone: '0591-86219111',
		num: 106
	},
	'北京博瑞九龙汽车服务有限公司': {
		pic: '北京博瑞九龙汽车服务有限公司',
		phone: '',
		num: 107
	},
	'北京市庞大祥华盛汽车销售有限公司': {
		pic: '北京市庞大祥华盛汽车销售有限公司',
		phone: '',
		num: 108
	},
	'安徽源沃汽车销售服务有限公司': {
		pic: '安徽源沃汽车销售服务有限公司',
		phone: '0551-63452222',
		num: 109
	},
	'青海紫源宝沃汽车销售服务有限公司': {
		pic: '',
		phone: '0971-7662388',
		num: 111
	}

};

var page3Swiper = new Swiper('#pageCommon', {
	direction: 'horizontal',
	pagination: '#fenye1',
	autoplay: 5000,
	speed: 700,
	autoplayDisableOnInteraction: false,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	paginationHiddenClass: 'my-pagination-hidden',
});
var handleSelect = {
	cityHasChoose: false,
	init: function(option) {
		var self = this;
		var $userName = option['userName'],
			$tel = option['tel'],
			$province = option['province'],
			$prefectureCity = option['prefectureCity'],
			$dealerName = option['dealerName'],
			$time = option['time'],
			projectId = 62;
		var getProvince = 'https://top.yidianzixun.com/tool/getProvince',
			getPrefectureCity = 'https://top.yidianzixun.com/tool/getPrefectureviCity',
			getDealerName = 'https://top.yidianzixun.com/tool/getDealerName';
		if(!self.cityHasChoose) {
			$.ajax({
				url: getProvince,
				type: 'get',
				data: {
					projectId: projectId
				},
				dataType: 'json',
				success: function(data) {
					if(data['status'] == 1) {
						var dataList = data['data'],
							tpl = '<option value="">请选择省份</option>';
						for(var i = 0; i < dataList.length; i++) {
							tpl += '<option value="' + dataList[i]['province'] + '">' + dataList[i]['province'] + '</option>';
						}
						$province.empty().append(tpl);
						self.cityHasChoose = true;
					}
				}
			});
		}
		$province.on('change', function() {
			var val = $(this).val();
			if(val === '') {
				$prefectureCity.empty().append('<option value="">请选择省份</option>');
				$dealerName.empty().append('<option value="">请选择经销商</option>');
				return;
			}
			$.ajax({
				url: getPrefectureCity,
				type: 'get',
				data: {
					projectId: projectId,
					province: val
				},
				dataType: 'json',
				success: function(data) {
					if(data['status'] == 1) {
						var p_data_list = data['data'],
							tpl = '<option value="">请选择城市</option>';
						for(var i = 0; i < p_data_list.length; i++) {
							tpl += '<option value="' + p_data_list[i]['prefectureCity'] + '">' + p_data_list[i]['prefectureCity'] + '</option>';
						}
						$dealerName.empty().append('<option value="">请选择经销商</option>');
						$prefectureCity.empty().append(tpl);
					}
				}
			});
		});

		$prefectureCity.on('change', function() {
			var val = $(this).val();
			if(val === '') {
				$dealerName.empty().append('<option value="">请选择经销商</option>');
				return;
			}
			$.ajax({
				url: getDealerName,
				type: 'get',
				data: {
					projectId: projectId,
					prefectureCity: val
				},
				dataType: 'json',
				success: function(data) {
					if(data['status'] == 1) {
						var data_list = data['data'],
							tpl = '<option value="">请选择经销商</option>';
						for(var i = 0; i < data_list.length; i++) {
							tpl += '<option value="' + data_list[i]['dealerName'] + '">' + data_list[i]['dealerName'] + '</option>';
						}
						$dealerName.empty().append(tpl);
					}
				}
			});
		});
	},
	valedate: function(data) {
		var valHandle = {
			name: function(val) {
				if(val === '' || val === undefined || val === null) {
					return {
						status: false,
						msg: '姓名不能为空'
					}
				}
				var nameReg = /^[0-9]*$/;
				if(nameReg.test(val)) {
					return {
						status: false,
						msg: '请填入真实姓名'
					}
				}
				return {
					status: true
				}
			},
			phone: function(val) {
				var telReg = /^1[3|4|5|7|8]\d{9}$/;
				if(!telReg.test(val)) {
					return {
						status: false,
						msg: '联系电话格式不正确'
					}
				}
				if(val === '') {
					return {
						status: false,
						msg: '手机号码不能为空'
					}
				}
				return {
					status: true
				}
			},
			province: function(val) {
				if(val === '') {
					return {
						status: false,
						msg: '省份不能为空'
					}
				}
				return {
					status: true
				}
			},
			city: function(val) {
				if(val === '') {
					return {
						status: false,
						msg: '城市不能为空'
					}
				}
				return {
					status: true
				}
			},
			agency: function(val) {
				if(val === '') {
					return {
						status: false,
						msg: '经销商不能为空'
					}
				}
				return {
					status: true
				}
			}

		};
		for(var key in data) {
			var result = valHandle[key](data[key]);
			if(!result['status']) {
				alert(result['msg']);
				return false;
			}
		}
		return true;
	}
};
$(function() {
	var $iBox = $('.i-box-wrap');
	$iBox.on('click', function() {
		var $this = $(this);
		if(!$this.hasClass('i-click')) {
			$iBox.removeClass('i-click');
			$this.addClass('i-click');
		}
	});
	var $flag = $('.gou img');
	$flag.on('click', function() {
		var $this = $(this);
		if($this.attr('data-flag') == 'true') {
			$this.attr('data-flag', 'false');
			$this.attr('src', 'img/page2/gou1.png');
		} else {
			$this.attr('data-flag', 'true');
			$this.attr('src', 'img/page2/gou2.png');
		}
	});
	handleSelect.init({
		userName: $('#name'),
		tel: $('#phone'),
		province: $('#province'),
		prefectureCity: $('#city'),
		dealerName: $('#jxs')
	});
	var id = 0;
	$('.btn').on('click', function() {
		var postJson = {
			name: '',
			sex: '',
			phone: '',
			province: '',
			city: '',
			agency: '',
			project: 62

		}
		postJson.name = $('#name').val();
		postJson.sex = $('.cb .i-click').attr('data-value');
		postJson.phone = $("#phone").val();
		postJson.province = $("#province").val();
		postJson.city = $("#city").val();
		postJson.agency = $("#jxs").val();
		console.log(postJson);
		var data = {
			name: $('#name').val(),
			phone: $("#phone").val(),
			province: $("#province").val(),
			city: $("#city").val(),
			agency: $("#jxs").val()
		};

		if(!handleSelect.valedate(data)) {
			return;
		} else if(localStorage.getItem("JACYiDianPhone") == postJson.phone) {
			alert("您已经提交过啦！");
			return;
		} else {
			$.post('https://top.yidianzixun.com/tool/yysjInfo', postJson, function(result) {
				if(result.status == 1) {

					localStorage.setItem("JACYiDianName", postJson.name);
					localStorage.setItem("JACYiDianPhone", postJson.phone);
				} else {
					alert("提交失败，请检查信息");
				}
			});
		};
		id++;

		if(id == 1) {
			if(main[$("#jxs").val()].pic == '' && main[$("#jxs").val()].phone == '') {
				//$('.ewm').empty().append('<img src=img/images/111.png />'+'<p>111111宝沃贵宾专线&nbsp;400-688-1919</p>');
				$('.ewm').empty().append('<img src=img/images/111.png /><p>' + main[$("#jxs").val()].pic + '</p><p>经销商销售热线' + main[$("#jxs").val()].phone + '</p><p>宝沃贵宾专线&nbsp;400-688-1919</p>');

				$(".tanchuang_three").show();
				id = 0;
			} else if(main[$("#jxs").val()].pic == '' && main[$("#jxs").val()].phone !== '') {
				$('.ewm').empty().append('<img src=img/images/111.png /><p>' + main[$("#jxs").val()].pic + '</p><p>经销商销售热线' + main[$("#jxs").val()].phone + '</p><p>宝沃贵宾专线&nbsp;400-688-1919</p>');

				//$('.ewm').empty().append('<img src=img/images/111.png />'+'<p>'+main[$("#jxs").val()].pic)+'</p><p>经销商销售热线'+main[$("#jxs").val()].phone+'</p><p>宝沃贵宾专线&nbsp;400-688-1919</p>';
				$(".tanchuang_three").show();
				id = 0;
			} else if(main[$("#jxs").val()].pic !== '' && main[$("#jxs").val()].phone == '') {

				$('.ewm').empty().append('<img src=img/images/' + main[$("#jxs").val()].num + '.png /><p>' + main[$("#jxs").val()].pic + '</p><p>经销商销售热线' + main[$("#jxs").val()].phone + '</p><p>宝沃贵宾专线&nbsp;400-688-1919</p>');
				//$('.ewm').empty().append('<img src=img/images/'+main[$("#jxs").val()].num+'.png /><p>宝沃贵宾专线&nbsp;400-688-1919</p>');
				$(".tanchuang_three").show();
				id = 0;
			} else if(main[$("#jxs").val()].pic !== '' && main[$("#jxs").val()].phone !== '') {

				$('.ewm').empty().append('<img src=img/images/' + main[$("#jxs").val()].num + '.png /><p>' + main[$("#jxs").val()].pic + '</p><p>经销商销售热线' + main[$("#jxs").val()].phone + '</p><p>宝沃贵宾专线&nbsp;400-688-1919</p>');
				$(".tanchuang_three").show();
				id = 0;
			}
		}

	});

	$('.close').on('click', function() {
		$('.tanchuang_one,.tanchuang_two,.tanchuang_three').hide();
	});
	$('.wenxin').on('click', function() {
		$('.tanchuang_two').show();

	});
	$('.page2_activity').on('click', function() {
		$(".tanchuang_one").show();
	});

})