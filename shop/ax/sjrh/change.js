document.body.onload = getRowContent();
function getRowContent(){
var tab = document.getElementById("tab");

	 var c = parseInt(document.getElementById('div2').innerHTML);//商品数量,需要强制转化

	//注意数组是从零开始的a[行][列]
	var n=c+1;
	var ar = new Array();
	for(var i=0;i<n;i++){
		var arr = new Array();
		for(var j=0;j<6;j++){
		arr.push(tab.rows[i].cells[i,j].innerText);
		};
	ar[i]=arr;
	}


//以下为替换商品内容
for (var i  = 0; i < ar.length; i++) {
	for (var j=0; j<ar[i].length; j++){

document.getElementById("z"+(i+1)).innerHTML= (i+1)+'.'+ar[i+1][1];
document.getElementById("p"+(i+1)).innerHTML= ar[i+1][2];
document.getElementById("t"+(i+1)).src= ar[i+1][3];
//ar[1]表示第一个商品
}
}
}