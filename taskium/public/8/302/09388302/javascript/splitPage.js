/* **************************************************
*       静态网页动态分页特效
*  **************************************************/
var items;//条目数组
var itemNum; //总条目数
var pagesLen;//总页数
var nowPage = null;//当前页号
var oldPage = null;//上一次显示页号
var pageMidNum; //分页链接中间
var pageNum;//分页链接数(从0开始共5个)
var listNum;//每页显示条目数
var positions;
var update = false;
var display = "";
function splitPage(titleId, itemTag, pN, lN, type){
	pageNum = pN;
	listNum= lN;
	items = document.getElementById(titleId).getElementsByTagName(itemTag);
	itemNum = items.length;
	pagesLen = Math.ceil(itemNum / listNum);
	pageMidNum = Math.floor(pageNum / 2) + 1;
	display = type;
	for (var i = 0; i < itemNum; ++i)
		items[i].style.display = "none";
	upPage(0);
}

function range(pn){
	var rangeES = new Array();
	var eItemTmp = (pn + 1) * listNum;
	rangeES['S'] = pn * listNum;
	rangeES['E'] = (eItemTmp < itemNum)? eItemTmp : itemNum;
	return rangeES;
}

function getItemList(){
	var itemList = new Array();
	var itemES = range(nowPage);		
		for (var i = itemES['S']; i < itemES['E']; ++i)
			itemList.push(items[i]);
	return itemList;
}
function upPage(pn){
	if (itemNum == 0)
		document.getElementById("splitPage_bar").innerHTML = "没有可显示信息！";
	else if (nowPage != pn){
		oldPage = nowPage;
		nowPage = pn;
		
		//内容变换
		if (oldPage != null){
			var itemES = range(oldPage);		
			for (var i = itemES['S']; i < itemES['E']; ++i)
				items[i].style.display = "none";
		}
		if(oldPage != nowPage){
			var itemES = range(nowPage);
			for (var i = itemES['S']; i < itemES['E']; ++i)
				items[i].style.display = display;
			update = true;
			var trS="", strC = "", strE = "", strE2 = "", strP = "", strN = "", startPage, endPage;
			
			if (nowPage == 0){
				strS = '[首页] ';//首页
				strP= '[前一页] ';//前一页
			}
			else {
				strS = '<a href="###" onclick="upPage(0)">[首页]</a> ';//首页
				strP = '<a href="###" onclick="upPage(' + (nowPage - 1) + ')">[前一页]</a> ';//前一页
			}
			if (pageNum >= pagesLen - 1) {
				startPage = 0;
				endPage = pagesLen-1;
			}
			else if (nowPage < pageMidNum){
				startPage = 0;
				endPage = pageNum;
			}
			else {
				var startPage = nowPage - pageMidNum + 1;
				var endPageTmp = startPage + pageNum;
				endPage = (endPageTmp > pagesLen - 1)? pagesLen-1 : endPageTmp;
				startPage = (endPage == pagesLen - 1)? pagesLen - 1 - pageNum : startPage;
			}
			for (var i = startPage; i <= endPage; ++i){
				if (i == nowPage)
					strC += '<span style="color: #0000FF; text-shadow: 1px 1px 2px #7F1F4F">[' + (i + 1) + ']</span> ';
				else 
					strC += '<a href="###" onclick="upPage(' + i + ')">[' + (i + 1) + ']</a> ';

			}
			if (nowPage == pagesLen - 1){
				strN = '[后一页] ';//后一页
				strE = '[尾页]';//尾页
			}
			else {
				strN = '<a href="###" onclick="upPage(' + (nowPage + 1) + ')">[后一页]</a> ';//后一页
				strE = ' <a href="###" disabled="true" onclick="upPage(' + (pagesLen - 1) + ')">[尾页]</a>  ';//尾页
			}
			
			strE2 = " (" + (nowPage + 1) + "/" + pagesLen + "页" + " 共" + itemNum + "条)";
			var strG = '<input id="inputPageNum" type="text" name="nPage" size="3" value="' + (nowPage + 1) + '"/>' +
					   '<button id = "submitPageNum" type="button" onclick="checkPageNum()">到</button>';
			document.getElementById("splitPage_bar").innerHTML = strS + strP + strC + strN + strE + strG + strE2;
		}
	}
}

function checkPageNum(){
	var np = document.getElementById("inputPageNum").value;
	var nPage = Math.round(Number(np)) - 1;
	if (nPage == nowPage)
		document.getElementById("inputPageNum").value = 1 + nowPage;
	else if (nPage >= 0 && nPage < pagesLen)
		upPage(nPage);
	else{
		var msg = "请输入(1-" + pagesLen + ")内的数字！";
		alert(msg);
	}
}
