/* **************************************************
*       ��̬��ҳ��̬��ҳ��Ч
*  **************************************************/
var items;//��Ŀ����
var itemNum; //����Ŀ��
var pagesLen;//��ҳ��
var nowPage = null;//��ǰҳ��
var oldPage = null;//��һ����ʾҳ��
var pageMidNum; //��ҳ�����м�
var pageNum;//��ҳ������(��0��ʼ��5��)
var listNum;//ÿҳ��ʾ��Ŀ��
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
		document.getElementById("splitPage_bar").innerHTML = "û�п���ʾ��Ϣ��";
	else if (nowPage != pn){
		oldPage = nowPage;
		nowPage = pn;
		
		//���ݱ任
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
				strS = '[��ҳ] ';//��ҳ
				strP= '[ǰһҳ] ';//ǰһҳ
			}
			else {
				strS = '<a href="###" onclick="upPage(0)">[��ҳ]</a> ';//��ҳ
				strP = '<a href="###" onclick="upPage(' + (nowPage - 1) + ')">[ǰһҳ]</a> ';//ǰһҳ
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
				strN = '[��һҳ] ';//��һҳ
				strE = '[βҳ]';//βҳ
			}
			else {
				strN = '<a href="###" onclick="upPage(' + (nowPage + 1) + ')">[��һҳ]</a> ';//��һҳ
				strE = ' <a href="###" disabled="true" onclick="upPage(' + (pagesLen - 1) + ')">[βҳ]</a>  ';//βҳ
			}
			
			strE2 = " (" + (nowPage + 1) + "/" + pagesLen + "ҳ" + " ��" + itemNum + "��)";
			var strG = '<input id="inputPageNum" type="text" name="nPage" size="3" value="' + (nowPage + 1) + '"/>' +
					   '<button id = "submitPageNum" type="button" onclick="checkPageNum()">��</button>';
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
		var msg = "������(1-" + pagesLen + ")�ڵ����֣�";
		alert(msg);
	}
}
