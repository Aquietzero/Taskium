/* **************************************************
*       主页导航卷轴特效启动
*  **************************************************/
function rolinNav(elemId, tag1, tag2) {
        var navRoot = document.getElementById(elemId)
        var children = getChildrenByTagNameForParentElem(navRoot, tag1);
        navRoot.openNav = null;
        for (var i = 0; i < children.length; i++)
                rolinSubNav(children[i], tag2);
}

/* **************************************************
*       卷轴特效
*  **************************************************/
function rolinSubNav(nav, tag2) {
        nav.subNav = getChildrenByTagNameForParentElem(nav, tag2)[0];

        nav.subNav.rate     = 0.1
        nav.subNav.minDiff  = 1;
        nav.subNav.toOpen   = false;
        nav.subNav.baseH    = nav.subNav.offsetHeight;
        nav.subNav.interval = 0;
        nav.subNav.style.overflow = "hidden";
        nav.subNav.style.height   = "0px";
        nav.subNav.style.display  = "block";
        
        nav.subNav.toHidden = function() {
                clearInterval(this.interval);
                rolinElem(-1, this);
        }       
        nav.subNav.toShow = function() {
                var openNav= this.parentNode.parentNode.openNav;
                if (openNav!= null && openNav != this)
                        openNav.toHidden();
                clearInterval(this.interval);
                rolinElem(1, this);
        }
        /*
        nav.onclick = function(){
               if (!this.subNav.toOpen)
                        this.subNav.toShow(); 
               else
                        this.subNav.toHidden();
        }*/
        
        nav.onmouseover = function() { this.subNav.toShow(); }
        nav.onmouseout  = function() { this.subNav.toHidden(); }
        
}

function rolinElem(dir, obj){
        if (dir == 1){
                obj.toOpen= true;
                obj.parentNode.parentNode.openNav = obj;
        }
        else{
                obj.toOpen= false;
                obj.parentNode.parentNode.openNav = null;
        }
        var finalH = (dir == 1)? obj.baseH : 0;
        obj.interval = setInterval(rolinV, 10);
        function rolinV(){
                var height = Number(obj.style.height.replace("px", ""));
                var delt = (finalH - height) * obj.rate; 
                if (Math.abs(delt) < 1) 
                        delt = (delt > 0)? 1 : -1;
                obj.style.height = height + delt + "px";
                if (Math.abs(finalH - height) < obj.minDiff){
                        obj.style.height = finalH + "px"
                        clearInterval(obj.interval);
                }
        }
}
