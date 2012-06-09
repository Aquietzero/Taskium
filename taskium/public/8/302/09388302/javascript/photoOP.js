var xm = 0;
var ym = 0;
document.onmousemove = function(e){
	if(window.event) 
		e=window.event;
	xm = (e.x || e.clientX);
	ym = (e.y || e.clientY);
}

setOpacity = function(o, alpha){
	o.style.opacity = alpha;
}

diapo = {
	 O : 0,
	 DC : 0,
	 img : 0,
	 N : 0,

	 xm : 0,
	 ym : 0,
	 nx : 0,
	 ny : 0,
	 nw : 0,
	 nh : 0,

	 rs : 0,
	 rsB : 0,
	 zo : 0,

     tx_pos : 0,
	 tx_var : 0,
	 tx_target : 0,

	 attraction : 2,
	 acceleration : 0.9,
	 dampening : 0.1,
	 zoomOver : 2,
	 zoomClick : 5,
	 transparency : 0.8,

	 resize : function(){
		  with(this){
			   nx = DC.offsetLeft;
			   ny = DC.offsetTop;
			   nw = DC.offsetWidth;
			   nh = DC.offsetHeight;

			   if(Math.abs(rs-rsB)<100) 
				   for(var i=0; i<N; i++) 
						O[i].resize();
			   rsB = rs;
		  }
	 },

	CDiapo : function(o){
		  this.o        = o;
		  this.x_pos    = this.y_pos    = 0;
		  this.x_origin = this.y_origin = 0;
		  this.x_var    = this.y_var    = 0;
		  this.x_target = this.y_target = 0;
		  this.w_pos    = this.h_pos    = 0;
		  this.w_origin = this.h_origin = 0;
		  this.w_var    = this.h_var    = 0;
		  this.w_target = this.h_target = 0;
		  this.over     = false;
		  this.click    = false;

		  this.spa = document.createElement("span");
		  this.spa.className = "spaDC";
		  diapo.DC.appendChild(this.spa);

		  this.img = document.createElement("img");
		  this.img.className = "imgDC";
		  this.img.src = o.src;
		  this.img.O = this;
		  diapo.DC.appendChild(this.img);
		  setOpacity(this.img, diapo.transparency);

		  this.img.onselectstart = new Function("return false;");
		  this.img.ondrag = new Function("return false;");
		  this.img.onmouseover = function(){
			   diapo.tx_target = 0;
			   diapo.txt.innerHTML = this.O.o.alt;

			   this.O.over=true; 
			   setOpacity(this,this.O.click?diapo.transparency:1);
		  }
		  this.img.onmouseout = function(){
			   diapo.tx_target = -diapo.nw;

			   this.O.over=false;
			   setOpacity(this,diapo.transparency);
		  }
		  this.img.onclick = function() {
			   if(!this.O.click){
					if(diapo.zo  &&  diapo.zo != this) diapo.zo.onclick();
					this.O.click = true;
					this.O.x_origin = (diapo.nw - (this.O.w_origin * diapo.zoomClick)) / 2;
					this.O.y_origin = (diapo.nh - (this.O.h_origin * diapo.zoomClick)) / 2;
					diapo.zo = this;
					setOpacity(this, 0.95);
			   } else {
					this.O.click = false;
					this.O.over = false;
					this.O.resize();
					diapo.zo = 0;
			   }
		  }

		  this.resize = function (){
			   with (this) {
					x_origin = o.offsetLeft;
					y_origin = o.offsetTop;
					w_origin = o.offsetWidth;
					h_origin = o.offsetHeight;
			   }
		  }

		  this.position = function (){
			   with (this) {
					w_target = w_origin;
					h_target = h_origin;
					if(over){
						 w_target = w_origin * diapo.zoomOver;
						 h_target = h_origin * diapo.zoomOver;
						 x_target = diapo.xm - w_pos / 2 - (diapo.xm - (x_origin + w_pos / 2)) / (diapo.attraction*(click?10:1));
						 y_target = diapo.ym - h_pos / 2 - (diapo.ym - (y_origin + h_pos / 2)) / (diapo.attraction*(click?10:1));
					} else {
						 x_target = x_origin;
						 y_target = y_origin;
					}
					if(click){
						 w_target = w_origin * diapo.zoomClick;
						 h_target = h_origin * diapo.zoomClick;
					}

					x_pos += x_var = x_var * diapo.acceleration + (x_target - x_pos) * diapo.dampening;
					y_pos += y_var = y_var * diapo.acceleration + (y_target - y_pos) * diapo.dampening;
					w_pos += w_var = w_var * (diapo.acceleration * .5) + (w_target - w_pos) * (diapo.dampening * .5);
					h_pos += h_var = h_var * (diapo.acceleration * .5) + (h_target - h_pos) * (diapo.dampening * .5);
					diapo.rs += (Math.abs(x_var) + Math.abs(y_var));

					with(img.style){
						 left   = Math.round(x_pos) + "px";
						 top    = Math.round(y_pos) + "px";
						 width  = Math.round(Math.max(0, w_pos)) + "px";
						 height = Math.round(Math.max(0, h_pos)) + "px";
						 zIndex = Math.round(w_pos);
					}
					with(spa.style){
						 left   = Math.round(x_pos + w_pos * .1) + "px";
						 top    = Math.round(y_pos + h_pos * .1) + "px";
						 width  = Math.round(Math.max(0, w_pos * 1.1)) + "px";
						 height = Math.round(Math.max(0, h_pos * 1.1)) + "px";
						 zIndex = Math.round(w_pos);
					}
			   }
		  }
	},

	 run : function(photos){
		  var pos = getPositionByElem(this.DC);
		  this.xm = xm - pos['left'];
		  this.ym = ym - pos['top'];
		  if (update){
			  this.updateAndAct(getItemList(nowPage));
			  update = false;
		  }

		  this.tx_pos += this.tx_var = this.tx_var * .9 + (this.tx_target - this.tx_pos) * .02;
		  this.txt.style.left = Math.round(this.tx_pos) + "px";

		  for(var i in this.O) 
			  this.O[i].position();

		  setTimeout("diapo.run();", 10);
	 },

	 images_load : function(photos){
		  var M = 0;
		  for(var i=0; i < diapo.N; i++) {
			   if(this.img[i].complete) {
					this.img[i].style.position = "relative";
					this.O[i].img.style.visibility = "visible";
					this.O[i].spa.style.visibility = "visible";
					M++;
			   }
			   this.resize();
		  }
		  if(M < this.N) 
			  setTimeout("diapo.images_load();", 128);
	 },

	 updateAndAct : function(photos){
		  var i = this.N;
		  while(--i >= 0){
			   this.DC.removeChild(this.O[i].img);
   			   this.DC.removeChild(this.O[i].spa);
			   this.O.pop();
		  }

		  this.img = photos;
		  this.N = photos.length;
		  for(var i = 0; i < this.N; ++i)
			  this.O.push(new this.CDiapo(diapo.img[i]));

		  this.resize();

		  this.tx_pos = -diapo.nw;
		  this.tx_target = -diapo.nw;

		  this.images_load();
	 },
	 init : function(pcId, cptId) {
		  this.O = new Array();
		  this.DC = document.getElementById(pcId);
		  this.txt = document.getElementById(cptId);
		  this.run();
	 }
}


createElement = function(container, type, param){
	o = document.createElement(type);
	for(var i in param)
		o[i]=param[i];
	container.appendChild(o);
	return o;
}

mooz = {
	O:[],
	mult:10,
	nbI:0,

	rwh:0,
	imgsrc:0,
	W:0,
	H:0,
    oy:0,
	ox:0,

	Xoom:function(N, pcId){
		this.o = createElement(document.getElementById(pcId), "span",                 
		         {'className':'spanSlide'});
		img = createElement(this.o, "img", 
				 {'className':"imgSlide", 'src':mooz.imgsrc[N%mooz.imgsrc.length].src});
		spa = createElement(this.o, "span", {'className':"imgSlide"});
		txt = createElement(spa, "span",			
				 {'className':"txtSlide", 'innerHTML':mooz.imgsrc[N % mooz.imgsrc.length].alt});
		this.N = 10000 + N;
	},
	mainloop:function(){
		with(this){		
			for(var i = 0; i < mooz.nbI; ++i) {
				O[i].N += (oy - ox) / 8000;
				N = O[i].N % nbI;
				ti = Math.pow(mult, N);
				with(O[i].o.style){
					left   = Math.round((W - (ti * rwh)) / (W + ti) * (W * 0.5)) + "px";
					top    = Math.round((H - ti) / (H + ti) * (H * 0.5)) + "px";
					zIndex = Math.round(10000 - ti * 0.1);
					width  = Math.round(ti * rwh) + "px";
					height = Math.round(ti) + "px";
				}
			}
		}
		this.oy = ym;
		if(this.oy/2>this.ox)this.ox=this.oy/2;
		setTimeout("mooz.mainloop();", 16);
	},
	oigres:function(pcId){
		this.oy = this.ox + 50;
		with(this){
			W = document.getElementById(pcId).offsetWidth;
			H = document.getElementById(pcId).offsetHeight;
			imgsrc = document.getElementById(pcId).getElementsByTagName("img");
			rwh = imgsrc[0].width / imgsrc[0].height;
			nbI = imgsrc.length;
			for(var i = 0;i < nbI; i++)
				O[i] = new Xoom(i, pcId);
			mainloop();
		}
	}
}
