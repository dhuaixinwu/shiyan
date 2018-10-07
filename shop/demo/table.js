document.body.onload = table();
function table() { 

var div1 = document.getElementById("tb1");
var code = '';
code.id="tab";

// code+='<tr><td>序号	                   '
// +'</td><td>名称		       '
// +'</td><td>价格		'
// +'</td><td>图片链接		'
// +'</td></tr>';


code+='<tr><td>1	                   '
+'</td><td>安徽省的积分		       '
+'</td><td>100元			'
+'</td><td>		http://pic5.nipic.com/20100221/2839526_090902782678_2.jpg		'
+'</td></tr>';

code+='<tr><td>2	                   '
+'</td><td>安徽省的		       '
+'</td><td>100元			'
+'</td><td>		http://japan.people.com.cn/NMediaFile/2015/0107/MAIN201501070808000365751804505.jpg		'
+'</td></tr>';


code+='<tr><td>3	                   '
+'</td><td>省的积分		       '
+'</td><td>100元			'
+'</td><td>		http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg		'
+'</td></tr>';


code+='<tr><td>4	                   '
+'</td><td>安徽分		       '
+'</td><td>100元			'
+'</td><td>		http://pic31.photophoto.cn/20140401/0020033028795646_b.jpg		'
+'</td></tr>';


code+='<tr><td>5	                   '
+'</td><td>安徽省的积分		       '
+'</td><td>100元			'
+'</td><td>		http://pic5.nipic.com/20100221/2839526_090902782678_2.jpg		'
+'</td></tr>';

code+='<tr><td>6	                   '
+'</td><td>安徽省		       '
+'</td><td>100元			'
+'</td><td>		http://pic5.nipic.com/20100221/2839526_090902782678_2.jpg		'
+'</td></tr>';

code+='<tr><td>7	                   '
+'</td><td>的积分		       '
+'</td><td>100元			'
+'</td><td>		http://pic5.nipic.com/20100221/2839526_090902782678_2.jpg		'
+'</td></tr>';

code+='<tr><td>8	                   '
+'</td><td>的积分		       '
+'</td><td>100元			'
+'</td><td>		http://pic5.nipic.com/20100221/2839526_090902782678_2.jpg		'
+'</td></tr>';

div1.innerHTML=code;
}