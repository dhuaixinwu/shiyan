document.body.onload = addElement();
function addElement () { 



var b= parseInt(document.getElementById('div2').innerHTML);//商品数量
var a= b/2;
//数字为a就a行,2a个商品





for (var i  = 2; i <= a; i++) {
//row,i;修改i的值设置行数，
//旧的元素
var oELE = document.getElementById("row"+(i-1));

//创建一个row元素,并且给他添加一些内容
var nrow = document.createElement("div");
nrow.id="row"+i;
nrow.className="row";

//创建一个左window元素,并且给他添加一些内容
	var newl = document.createElement("div");
	newl.className="window";

//图片
	var newlTpdiv = document.createElement("div");
		newlTpdiv.className="tp";
	var newlTp = document.createElement("img");
		newlTp.id="t"+(2*i-1);
		newlTp.src='https://api.uixsj.cn/bing/bing.php';
		newlTp.alt ="这是爱心屋商品图片哦！！";
		newlTp.style.width="375px";
		newlTp.style.height="375px";


//名称
	var newlMcdiv = document.createElement("div");
		newlMcdiv.className="mc";
	var newlMc = document.createElement("p");
		newlMc.id="z"+(2*i-1);
		newlMc.innerHTML = "商品名称"+(2*i-1);

//价格
	var newlJgdiv = document.createElement("div");
	var newlAxj = document.createElement("span");
		newlAxj.className="axj";
		newlAxj.innerHTML = "爱心价:";
		newlAxj.style.height='50px';
		newlAxj.style.lineHeight='50px';
		newlAxj.style.textAlign='center';
	var newlJg = document.createElement("span");
		newlJg.id="p"+(2*i-1);
		newlJg.className="jg";
		newlJg.style.float='left';
		newlJg.style.marginLeft='5px';
		
		
		
		
		
		
		
//创建一个右window元素,并且给他添加一些内容
	var newr = document.createElement("div");
	newr.className="window";

//图片
	var newrTpdiv = document.createElement("div");
		newrTpdiv.className="tp";
	var newrTp = document.createElement("img");
		newrTp.id="t"+(2*i);
		newrTp.src='https://api.uixsj.cn/bing/bing.php';
		newrTp.alt ="这是爱心屋商品图片哦！！";
		newrTp.style.width="375px";
		newrTp.style.height="375px";


//名称
	var newrMcdiv = document.createElement("div");
		newrMcdiv.className="mc";
	var newrMc = document.createElement("p");
		newrMc.id="z"+(2*i);
		newrMc.innerHTML = "商品名称"+(2*i);

//价格
	var newrJgdiv = document.createElement("div");
	var newrAxj = document.createElement("span");
		newrAxj.className="axj";
		newrAxj.innerHTML = "爱心价:";
		newrAxj.style.height='50px';
		newrAxj.style.lineHeight='50px';
		newrAxj.style.textAlign='center';
	var newrJg = document.createElement("span");
		newrJg.id="p"+(2*i);
		newrJg.className="jg";
		newrJg.style.float='left';
		newrJg.style.marginLeft='5px';





//添加左边商品
document.body.insertBefore(nrow, oELE.nextSibling);
nrow.appendChild(newl);
newl.appendChild(newlTpdiv);
newlTpdiv.appendChild(newlTp);
newl.appendChild(newlMcdiv);
newlMcdiv.appendChild(newlMc);
newl.appendChild(newlJgdiv);
newlJgdiv.appendChild(newlAxj);
newlJgdiv.appendChild(newlJg);


//添加右边商品
document.body.insertBefore(nrow, oELE.nextSibling);
nrow.appendChild(newr);
newr.appendChild(newrTpdiv);
newrTpdiv.appendChild(newrTp);
newr.appendChild(newrMcdiv);
newrMcdiv.appendChild(newrMc);
newr.appendChild(newrJgdiv);
newrJgdiv.appendChild(newrAxj);
newrJgdiv.appendChild(newrJg);



}}
