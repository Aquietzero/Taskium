function getPositionById(id){
	return getPosByElem(document.getElementById(id));
}

function getPositionByElem(elem){
	var pos = new Array(2);

	pos['left']  = elem.getBoundingClientRect().left;
	pos['top']   = elem.getBoundingClientRect().top;
	pos['left'] += Math.max(elem.scrollLeft, document.body.scrollLeft);
	pos['top']  += Math.max(elem.scrollTop, document.body.scrollTop);

	return pos;
}

function getChildrenByTagNameForParentId(id, tag){
	return getChildrenByTagNameForParentElem(document.getElementById(id), tag);
}
function getChildrenByTagNameForParentElem(parent, tag){
        var allChildren = parent.childNodes;
        var childrenWithTagName = new Array();
        var tagName = tag.toLowerCase();
        for (var i = 0; i < allChildren.length ; ++i){
                var iTagName = allChildren[i].nodeName.toLowerCase();
                if (iTagName == tagName)
                        childrenWithTagName.push(allChildren[i]);
        }
        return childrenWithTagName;
}

function pxToNumber(px){
	return Number(px.replace("px", ""));
}