
<?php
// @$if_https = $_SERVER['HTTPS'];	
// if ($if_https) {	//如果是使用 https 访问的话就添加 https
//     $url='https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
// } else {
//     $url='http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
// }
$url = 'https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$url = urlencode($url);
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "http://t1.toptest.yidianzixun.com/webservice/wxShare/get.php?clientUrl=" . $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_POSTFIELDS => "Key=ydinfo2016&RequestObjectList=%5B%5D",
    CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache",
        "content-type: application/x-www-form-urlencoded"
    ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    $response = json_decode($response);
    $data = $response->data;

    $timestamp = $data->timestamp;

    $nonceStr = $data->nonceStr;

    $signature = $data->signature;
}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<meta http-equiv="refresh" content="0; url=https://toptest.yidianzixun.com/2016/borgward/app.php">
		<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
		<!--从桌面icon启动IOS Safari是否进入全屏状态（APP模式-->
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<!--	添加到主屏幕“后，全屏显示-->
		<meta name="apple-touch-fullscreen" content="yes" />
		<!--	指定状态栏的颜色-->
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		<!--手机号码不被显示为拨号链接-->
		<meta name="format-detection" content="telephone=no">
		<!-- 浏览器全屏显示-->
		<meta name="screen-orientation" content="portrait">
		<meta name="full-screen" content="yes">
		<meta name="x5-orientation" content="portrait">
		<meta name="x5-fullscreen" content="true">
		<title>宝沃</title>
		<link rel="stylesheet" href="css/swiper-3.3.1.min.css" />
		<link rel="stylesheet" href="css/style.css" />
	</head>
	    

	<body>
		<!--一点资讯分享-->
		<div id="yidian_share_title" class="yidianShare" style="display:none;">发现基因 与生俱来，路虎之境从发现神行开始。</div>
		<div id="yidian_share_content" class="yidianShare" style="display:none;"></div>
		<div id="yidian_share_url" class="yidianShare" style="display:none;">https://toptest.yidianzixun.com/2016/borgward/app.php</div>
		<div id="yidian_share_imageurl" class="yidianShare" style="display:none;">http://tstatic.toptest.yidianzixun.com.ks3-cn-beijing.ksyun.com/public/files/share1479660532059.jpg</div>
		<!-- end -->
		<div style="display: none;" id="timestamp" class="wxShare"><?php echo $timestamp; ?></div>
		<div style="display: none;" id="nonceStr" class="wxShare"><?php echo $nonceStr; ?></div>
		<div style="display: none;" id="signature" class="wxShare"><?php echo $signature; ?></div>
        <div id="loading" class="loading"></div>
		
		<div class="tanchuang_one">
			<div class="news_active">
				<div class="close"></div>
			</div>
		</div>
		<div class="tanchuang_two">
			<div class="news_wenxin">
				<div class="close close2"></div>
			</div>
		</div>
		<div class="tanchuang_three">
			<div class="close close2"></div>
			<div class="news_tijiao">
				<div id="ewm" class="ewm">
				</div>
			</div>
		</div>
		<div id="pages" class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide page1">
					<div class="page1_info fadeInUp text">

					</div>
					<div class="next nextPage text">
						<img src="img/jt.png">
					</div>
				</div>
				<div class="swiper-slide page2">
					<div class="page2_activity">
						<img src="img/page2/page2_active.png">
					</div>
					<div class="page2_form">
						<div class="fromInput">
							<div class="from_top">
								<div class="from_frist">
									<div class="page-2-item one">
										<span class="sp1">姓&nbsp;&nbsp;&nbsp;名</span>
										<div class="input">
											<input type="text" name="name" id="name">
										</div>
									</div>
									<div class="page-2-item">
										<span class="sp2">性&nbsp;&nbsp;&nbsp;别</span>
										<span class="cb">
		                            <span class="i-box-wrap i-click" data-value="男">
		                                <span class="i-box"></span><span>&nbsp;男</span>
										</span>
										<span class="i-box-wrap" id="women" data-value="女">
		                                <span class="i-box"></span><span>&nbsp;女</span>
										</span>
										</span>
									</div>
									<div class="page-2-item">
										<span class="sp3">电&nbsp;&nbsp;&nbsp;话</span>
										<div class="input">
											<input type="number" name="phone" id="phone">
										</div>
									</div>
									<div class="page-2-item">
										<span class="sp4">省&nbsp;&nbsp;&nbsp;份</span>
										<div class="input">
											<select id="province">
												<option value="">请选择省份</option>
											</select>
										</div>
									</div>
									<div class="page-2-item">
										<span class="sp5">城&nbsp;&nbsp;&nbsp;市</span>
										<div class="input">
											<select id="city">
												<option value="">请选择城市</option>
											</select>
										</div>
									</div>
									<div class="page-2-item">
										<span class="sp6">经销商</span>
										<div class="input">
											<select id="jxs">
												<option value="">请选择经销商</option>
											</select>
										</div>
									</div>
									<div class="textCheckbox">
										<div class="left_xuan">
											<div class="gou">
												<img data-flag='true' src="img/page2/gou2.png">
											</div>
											<div class="zi">
												我已阅读并接受如下隐私条款：
											</div>
										</div>
									</div>
									<div class="textInfo">
										<div class="left_info">
											您的个人资料有可能会提交至宝沃厂商的授权经销商与您进一步沟通试驾、购车等事宜。
										</div>
									</div>
								</div>
							</div>
							<div class="from_bottom">
								<div class="btn">
									<img src="img/page2/page2_btn.png">
								</div>
							</div>
						</div>
					</div>
					<div class="guanwang">
						<a href="http://www.borgward.com.cn/"></a>
					</div>
					<div class="wenxin"></div>
					<div class="shangcheng">
						<a href="http://www.borgward.com.cn/shop_online"></a>
					</div>
					<div class="next nextPage text">
						<img src="img/jt.png">
					</div>
				</div>
				<div class="swiper-slide page3">
					<div class="page3_video">
						<video id="videoSourse" src="http://tstatic.toptest.yidianzixun.com.ks3-cn-beijing.ksyun.com/public/files/BX1481705227293.mp4" poster="http://tstatic.toptest.yidianzixun.com.ks3-cn-beijing.ksyun.com/public/files/page3_video1481705045250.png" x-webkit-airplay="true" webkit-playsinline="true"></video>

					</div>
					<div class="lunbo">
						<div class="page3_lunbo">
							<div id="pageCommon" class="swiper-container pageCommon">
								<div class="swiper-wrapper">
									<div class="swiper-slide pagechild1"></div>
									<div class="swiper-slide pagechild2"></div>
									<div class="swiper-slide pagechild3"></div>
									<div class="swiper-slide pagechild4"></div>
									<div class="swiper-slide pagechild5"></div>
								</div>
								<!-- 如果需要导航按钮 -->
								<div class="swiper-button-prev left-jt"></div>
								<div class="swiper-button-next right-jt"></div>
							</div>
						</div>
					</div>
					<div id="fenye1" class="fenye1"></div>
					<div class="next nextPage text">
						<img src="img/jt.png">
					</div>
				</div>

				<div class="swiper-slide page4"></div>
			</div>
			<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
			<script type="text/javascript" src="js/swiper-3.3.1.min.js"></script>
			<script type="text/javascript" src="js/script.js"></script>
			<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		    <script type="text/javascript">
        		    var my_timestamp=document.getElementById('timestamp').innerText.trim();
        		    var my_nonceStr=document.getElementById('nonceStr').innerText.trim();
        		    var my_signature=document.getElementById('signature').innerText.trim();
        		    var myWXdata = {
        		       imgurl:$('#yidian_share_imageurl').text(),
        		       url:$('#yidian_share_url').text(),
        		       title:$('#yidian_share_title').text(),
        		       desc:$('#yidian_share_content').text()
        		   };
        		    wx.config({
        		        debug: false,//判断是否为debug模式
        		        appId:'wxdda4779e3944e490',
        		        timestamp:my_timestamp,
        		        nonceStr:""+my_nonceStr,
        		        signature:""+my_signature,
        		        jsApiList:[
        		            'checkJsApi',
        		            'onMenuShareTimeline',
        		            'onMenuShareAppMessage',
        		            'onMenuShareQQ',
        		            'onMenuShareWeibo'
        		        ]//开启的功能列表
        		    });
        		    var sharePerson = function(){
        		        wx.ready(function(){
        		            var mydata=myWXdata;
        		            wx.onMenuShareTimeline({
        		                title: mydata.title,
        		                link: mydata.url,
        		                imgUrl: mydata.imgurl,
        		                trigger: function (res) {
        		                    //alert('点击分享到朋友圈');
        		                },
        		                success:function(res){

        		                }
        		            });
        		            //alert('已注册获取“分享到朋友圈”状态事件');
        		            wx.onMenuShareAppMessage({
        		                title: mydata.title,
        		                desc: mydata.desc,
        		                link:  mydata.url,
        		                imgUrl: mydata.imgurl,
        		                trigger: function (res) {
        		                    //alert('用户点击发送给朋友');
        		                },
        		                success:function(res){

        		                }
        		            });
        		            wx.onMenuShareQQ({
        		                title: mydata.title,
        		                desc: mydata.desc,
        		                link: mydata.url,
        		                imgUrl: mydata.imgurl,
        		                trigger: function (res) {
        		                    //alert('用户点击分享到QQ');
        		                },
        		                success:function(res){

        		                }
        		            });
        		        });
        		    };
        		    sharePerson();
        		</script>
	</body>

</html>