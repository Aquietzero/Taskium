/* **********************************�∐***************************************************************
 ��ɹ��ܣ�
	1. ������Ϸ��ʾ��
		 ��Ӯ����Ϸʱ�������е�ƴͼ��ظ���ԭʼ˳��ʱ���ṩĳ����ʽ���Ӿ���ʾ��
		 ���˲���ȡ�������ӿ���ʾ����ͼ�����Ϊ������ͼ���Ա���ʾ�����Ϣ��
    2. ��һ�λ������ƴͼ�飺
		 ��������տ��л����ϣ�������Զ��տ������ƴͼ�飬��ƴͼ��Ϳտ�֮�����໥�������淨������ϲ������
		 �������ƶ���ƴͼ�飨����Զ��տ�ļ��Ż��У��������ͣʱ��Ч����ǰ������һ����
    3. ��Ϸ��������:
		 ��¼��Ϸ�в�������������ƴͼ����ʾ��ĿǰΪֹ�û���ѵ���Ϸ�����͵�ǰ����
    4. �౳����
		 �����ṩ30�ű���ͼƬ������4�ţ��Թ�ѡ�񣬲�����һͼ����һͼ�ļ�ѡ��ʽ��
		 ��Ϸ������һ�ű���ͼƬ��ʼ�����ṩ�û����棬ʹ�û���Ϸ��ͬʱ��ѡ��ͬ��ͼƬ��
    5. ��ͬ��ƴͼ��ģ(�ߴ�)��
		 �ṩһ��ľ���������������Ϸ��ƴͼ�ָ�Ϊ������С����3x3��6x6��
		 ���������Ҫ��һ�£�����û����õĹ�ģ���󣨳���100*100������ô�������ʱ�����Ҫ���ҵ�Ч����
		 ���ɱ���Ľ�Ҫ�������ʱ�䣬�������ʦ����Ҫ���ܳ���һ���ǳ�ͻ�ġ����������Ҫ������������
		 ��ΪҪ����������ʱ����ƴͼ��ģ��ͬ�����ġ���������û��ǵ�Ҫ���ñȽϴ�Ĺ�ģ�����Ǳ�ʡ�������ƣ�
		 �û��Թ�ģ�����ã�ֻ�������û��⽫������ʱ�䣩����ô������ʹ�ô���������ʱ�䰴Ȼ������һ���أ�
		 �������Ǵ��ҵ�ʱ�򣬻�����Ҫ��֤���ҵ�ƴͼ��һ���ܹ�ͨ��һ��������ԭ�ģ�
		 ���ԣ�Ҫ�Ǵ���ʱ��ʼ�ղ�����һ�룬ˡѧ��������ˣ���������ʦ��TA���ܻ��߸���һ���õ��㷨��
	6. ƴͼ�������ƴͼ��ģ�����ӿ��С������
		 ����ͼ���С����ƴͼ�������С��Ȼ�����ƴͼ�������С��ƴͼ��ģ��������ÿһ��
		 �ӿ�Ĵ�С����ʾ���壬ʹ��ƴͼ������ͼ���������
** *****************************************************************************************************/

function fifteen(){
	Npuzzle.init("puzzlearea", new Array(
		"http://www.ssspace.net/webpages/web2.0-lab6/background.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg1.jpg", 
		"http://www.ssspace.net/webpages/web2.0-lab6/bg2.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg3.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg4.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg5.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg6.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg7.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg8.jpg", 
		"http://www.ssspace.net/webpages/web2.0-lab6/bg9.jpg", 
		"http://www.ssspace.net/webpages/web2.0-lab6/bg10.jpg", 
		"http://www.ssspace.net/webpages/web2.0-lab6/bg11.jpg", 
		"http://www.ssspace.net/webpages/web2.0-lab6/bg12.jpg", 
		"http://www.ssspace.net/webpages/web2.0-lab6/bg13.jpg", 
		"http://www.ssspace.net/webpages/web2.0-lab6/bg14.jpg", 
		"http://www.ssspace.net/webpages/web2.0-lab6/bg15.jpg", 
		"http://www.ssspace.net/webpages/web2.0-lab6/bg16.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg17.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg18.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg19.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg20.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg21.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg22.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg23.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg24.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg25.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg26.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg27.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg28.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg29.jpg",
		"http://www.ssspace.net/webpages/web2.0-lab6/bg30.jpg"));

	controller.init("controls", "shufflebutton");
}

controller = {
	host: 0,//ƴͼ���ƿ�
	shuffle: 0,//���ҿؼ�
	stepsLabel: 0,//�������ӿؼ�
	setSize: 0,//��ģ�ؼ�
	changeImg: 0,//ͼ��ѡ��ؼ�
	msg: 0,//�����Ϣ��ʾ����
	
	setMsg: function(str){
		this.msg.innerHTML = str;
	},

	init: function(controlId, shuffleId){
		this.host       = document.getElementById(controlId);/*��ȡƴͼ���ƿ�*/
		this.shuffle    = document.getElementById(shuffleId);/*��ȡ�Ѵ��ڵĴ��ҿؼ�*/
		this.shuffle.title = "It will take you much time if the scale is too large!!";
		this.shuffle.style.cssFloat = "left";

		var steps	    = document.createElement("input");/*����������ʾ�ؼ�*/
		steps.type      ="text";
		steps.size      = "5";

		this.stepsLabel = document.createElement("label");/*�����������ӿؼ�*/
		this.stepsLabel.style.cssFloat = "right";
		this.stepsLabel.innerHTML      = "[Steps]:";
		this.stepsLabel.appendChild(steps);/*��������ʾ�ؼ���������ӿؼ�*/

		var reSize	    = document.createElement("input");/*����ƴͼ��ģ�ύ�ؼ�*/
		reSize.type     = "button";
		reSize.value    = "Set Scale";
		reSize.style.cssFloat= "right";

		var width	    = document.createElement("input");/*����ƴͼ������ؼ�*/
		width.type      ="text";
		width.size      = "4";
		width.maxLength = "2";
		var wLabel	    = document.createElement("label");/*����ƴͼ����ǩ*/
		wLabel.innerHTML= "[Width]:";
		wLabel.style.cssFloat = "left";
		wLabel.appendChild(width);/*��ƴͼ������ؼ��ӵ�����ǩ*/

		var height	    = document.createElement("input");/*����ƴͼ������ؼ�*/
		height.type     ="text";
		height.size     = "4";
		height.maxLength= "2";
		var hLabel	    = document.createElement("label");/*����ƴͼ�߱�ǩ*/
		hLabel.innerHTML= "[Height]:";
		hLabel.style.cssFloat = "left";
		hLabel.appendChild(height);/*��ƴͼ������ؼ��ӵ��߱�ǩ*/
		
		this.setSize       = document.createElement("div")/*����ƴͼ��ģ�ؼ�*/		
		this.setSize.title = "must be a integer and greater than 1";
		this.setSize.style.clear = "both";
		this.setSize.appendChild(wLabel);/*��ƴͼ������ؼ��ӵ���ģ�ؼ�*/
		this.setSize.appendChild(hLabel);/*��ƴͼ������ؼ��ӵ���ģ�ؼ�*/
		this.setSize.appendChild(reSize);/*��ƴͼ��ģ�ύ�ؼ��ӵ�ƴͼ�ع�ģ�ؼ�*/

		

		var nextImg     = document.createElement("input");/*����ƴͼ��һͼ��ѡ��ؼ�*/
		nextImg.type    = "button";
		nextImg.value   = "Next Image";
		nextImg.style.cssFloat= "right";

		var prevImg     = document.createElement("input");/*����ƴͼ��һͼ��ѡ��ؼ�*/
		prevImg.type    = "button";
		prevImg.value   = "Previous Image";
		prevImg.style.cssFloat= "left";

		this.changeImg  = document.createElement("div");/*����ƴͼͼ��ѡ��ؼ�*/
		this.changeImg.style.clear = "both";
		this.changeImg.appendChild(prevImg);/*��ƴͼ��һͼ��ѡ��ؼ��ӵ�ͼ��ѡ��ؼ�*/
		this.changeImg.appendChild(nextImg);/*��ƴͼ��һͼ��ѡ��ؼ��ӵ�ͼ��ѡ��ؼ�*/
		
		this.msg        = document.createElement("div");
		this.msg.style.clear = "both";
		this.msg.style.color = "red";

		this.host.appendChild(this.stepsLabel);/*���������ӿؼ��ӵ�ƴͼ���ƿ�*/
		this.host.appendChild(this.setSize);/*����ģ�ؼ��ؼ��ӵ�ƴͼ���ƿ�*/
		this.host.appendChild(this.changeImg);/*��ͼ��ѡ��ؼ��ӵ�ƴͼ���ƿ�*/
		this.host.appendChild(this.msg);



		attach();//�ؼ���������
		updateSteps();
		function attach(){
			controller.shuffle.onclick = function(){Npuzzle.shuffle()};//���ҹ�������
			reSize.onclick = function(){//��ģ���ù�������
				var w = parseInt(width.value);
				var h = parseInt(height.value);
				if (!isNaN(w) && !isNaN(h) && w > 1 && h > 1){
					width.value  = w;
					height.value = h;
					Npuzzle.setScale(w, h);
				}
				else 
					alert("Please Enter Valid(w,h>1) Integer!");
			}
			prevImg.onclick = function(){ Npuzzle.setImg(Npuzzle.imgPos - 1);}//��һͼ��ѡ��������
			nextImg.onclick = function(){ Npuzzle.setImg(Npuzzle.imgPos + 1);}//��һͼ��ѡ��������
		}
		function updateSteps(){//�������ӿ���
			steps.value = Npuzzle.counter;
			setTimeout(updateSteps, 100);
		}
	}
};

Npuzzle = {
	host: null,//ƴͼ������
	imgPos: null,//��ǰ����ͼ������
	imgs: null,//��ѡͼ��
	pieces: null,//ƴͼ�ӿ鼯

	sizeW: 4,//ƴͼ��ģ--��
	sizeH: 4,//ƴͼ��ģ--��
	
	pieceW: 0,//ƴͼ�ӿ�--��
	pieceH: 0,//ƴͼ�ӿ�--��
	blank: null,
	
	counter: 0,//ÿ��ƴͼ����������
	bestRec: 0,//��ǰ��ģ��ǰͼ��ƴͼ��Ѽ�¼

	init: function(pId, imgList){//��ʼ��ƴͼ����
		this.host = document.getElementById(pId);//��ȡƴͼ������
		this.pieces = new Array();//����ƴͼ�ӿ鼯����

		this.imgs = new Array(imgList.length);//������ѡͼ������
		for (var i = 0; i < imgList.length; ++i){//����ѡͼ�񼯵�URLת��Ϊ����img,�Ա����ͼ������ƴͼʵ�ʵ�����
			this.imgs[i] = document.createElement("img");
			this.imgs[i].src = imgList[i];
		}
		this.imgPos = 0;//��ʼ����ǰ���õ�ͼ������
		this.clearPieces();
		this.initPieces();//��ʼ��ƴͼ�ӿ鼯
	},
	clearPieces: function(){//���ƴͼ�ӿ鼯
		var children = this.host.childNodes;
		for (var i = children.length - 1; i >= 0; --i)
			this.host.removeChild(children[i]);//���ƴͼ��ҳ����ʾ���ӿ�Ԫ��
		this.pieces.splice(0);//���ƴͼ�ӿ鼯����
		this.counter = 0;
	},
	updateState: function(pos){//����ƴͼ״̬
		//�����ӿ��ƶ�ʱ�����ӿ�λ�ã�������ÿһ���ӿ�ľ���λ��
		this.pieces[pos].position = this.blank;
		this.pieces[this.blank].position = pos;

		var pieceTmp = this.pieces[pos];
		this.pieces[pos] = this.pieces[this.blank];
		this.pieces[this.blank] = pieceTmp;

		this.blank = pos;//���¿հ׿��λ��
		++this.counter;	//�����ۼ�
	},
	isFinish: function(){//�ж��Ƿ���ɣ�����ÿ���ӿ����ʾ���֣�������ȷλ���뵱ǰ����λ�ñȽϿ�ʵ��
		for (var i = 0; i < this.pieces.length; ++i)
			if("" + (this.pieces[i].position + 1) != this.pieces[i].innerHTML)
				return false;
		return true;
	},
	finishAct: function(){//�ɹ���ɺ���������
		if (this.bestRec == 0 || this.bestRec > this.counter)
			this.bestRec = this.counter//�п��ܵĻ�������Ѽ�¼
		controller.setMsg("<p><strong>Congratulation:</strong></p>" + 
			"<p>(^o^):You have finished The Task in <strong>" + this.counter + "</strong> steps</p>" + 
			"<p>(^_^):Your best record is <strong>" + this.bestRec + "</strong> Steps</p>");

		this.clearPieces();//���ƴͼ�ӿ켯
		this.host.style.backgroundImage = "url(" + this.imgs[this.imgPos].src + ")";//��ʾ��ǰƴͼ�����õ�����ͼ��
	},
	initPieces: function(){//�ӿ鼯��ʼ�������鴦����ȷ��λ��
		controller.setMsg("");
		//����ƴͼ�������С��ƴͼ��ģ����ÿ��ƴͼ�ӿ�Ĵ�С
		this.pieceW = Math.round(this.host.offsetWidth / this.sizeW);
		this.pieceH = Math.round(this.host.offsetHeight / this.sizeH);
		this.blank = this.sizeH * this.sizeW - 1;//��ʼ���հ׿�Ϊ���һ��
		this.host.style.background = "none";//���ƴͼ�����򱳾�

		for (var i = 0; i < this.sizeH; ++i){//����ÿһ���ӿ�
			for (var j = 0; j < this.sizeW; ++j){
				var index = j + i * this.sizeW;
				this.pieces.push(document.createElement("div"));//�����ӿ鲢�ӵ��ӿ鼯����
				this.host.appendChild(this.pieces[index]);//���ӿ飨���ӣ����������򣨸��ף�
				
				this.pieces[index].position        = index;//�ӿ鵱ǰλ��
				this.pieces[index].className       = "puzzlepiece movablepiece";//�ӿ���ʽ
				this.pieces[index].innerHTML       = index + 1;//�ӿ���ȷλ��
				
				this.pieces[index].style.backgroundImage    = "url(" + this.imgs[this.imgPos].src + ")";//�ӿ鱳��
				this.pieces[index].style.backgroundPosition = (-j * this.pieceW) + "px "
													      	+ (-i * this.pieceH) + "px";//�ӿ鱳��λ�ã�ʹ���ӿ鿴������ͼƬ�ָ��Ч��
				this.pieces[index].style.borderWidth        = "1px";
				//�ӿ��ʼλ��
				this.pieces[index].style.top       = i * this.pieceH + "px";
				this.pieces[index].style.left      = j * this.pieceW + "px";
				this.pieces[index].style.width     = (this.pieceW - 2) + "px";
				this.pieces[index].style.height    = (this.pieceH - 2) + "px";
				this.pieces[index].style.fontSize  = 
					((this.pieceH < this.pieceW)?this.pieceH : this.pieceW) / 3 + "px";
				this.pieces[index].style.lineHeight= this.pieceH + "px";
				this.pieces[index].style.zIndex    = "1";

				this.pieces[index].onmouseover     = function(){this.setBorderColor("2", "red");}//�����ͣ���
				this.pieces[index].onmouseout      = function(){this.setBorderColor("1", "black");}//����Ƴ����
				
				//���������ƶ��ӿ�ʱ���ӿ���ʽ
				this.pieces[index].setBorderColor  = function(zindex, color){
					this.style.zIndex = zindex;
					this.style.borderColor = color;

					var isMove = this.canMove();
					if (!isMove)
						return;
					if (isMove == "+x" && this.position - 1 != Npuzzle.blank)
						Npuzzle.pieces[this.position - 1].setBorderColor(zindex, color);
					else if (isMove == "-x" && this.position + 1 != Npuzzle.blank)
						Npuzzle.pieces[this.position + 1].setBorderColor(zindex, color);
					else if (isMove == "+y" && this.position - Npuzzle.sizeW != Npuzzle.blank)
						Npuzzle.pieces[this.position - Npuzzle.sizeW].setBorderColor(zindex, color);
					else if (isMove == "-y" && this.position + Npuzzle.sizeW != Npuzzle.blank)
						Npuzzle.pieces[this.position + Npuzzle.sizeW].setBorderColor(zindex, color);
				}
				//�ж��ӿ��Ƿ����ƶ������ܣ��������ܹ��ƶ��ķ���
				this.pieces[index].canMove = function(){
					var y = Math.floor(this.position / Npuzzle.sizeW);
					var x = this.position % Npuzzle.sizeW;
					var by = Math.floor(Npuzzle.blank / Npuzzle.sizeW);
					var bx = Npuzzle.blank % Npuzzle.sizeW;

					if (y == by && x > bx)
						return "+x";//����
					else if (y == by && x < bx)
						return "-x";//����
					else if (x == bx && y > by)
						return "+y";//����
					else if (x == bx && y < by)
						return "-y";//����
					return false;
				}
				this.pieces[index].goAhead = function(){//�ӿ��ƶ�
					var left = Npuzzle.pieces[Npuzzle.blank].style.left;
					var top  = Npuzzle.pieces[Npuzzle.blank].style.top;

					Npuzzle.pieces[Npuzzle.blank].style.left = this.style.left;
					Npuzzle.pieces[Npuzzle.blank].style.top  = this.style.top;

					this.style.left        = left;
					this.style.top         = top;
					this.style.zIndex      = "1";
					this.style.borderColor = "black";

					Npuzzle.updateState(this.position);//�ƶ���Ȼ�ø���ƽͿ״̬��
				}
				this.pieces[index].move = function(){//�ӿ�����ӿ������ƶ�
					var isMove = this.canMove();
					if (!isMove)
						return;
					//���ƶ������ǲ���հ׿�ֱ�����ڣ���ݹ�����ƶ�������ʵ���ӿ������ƶ�
					if (isMove == "+x" && this.position - 1 != Npuzzle.blank)
						Npuzzle.pieces[this.position - 1].move();//
					else if (isMove == "-x" && this.position + 1 != Npuzzle.blank)
						Npuzzle.pieces[this.position + 1].move();
					else if (isMove == "+y" && this.position - Npuzzle.sizeW != Npuzzle.blank)
						Npuzzle.pieces[this.position - Npuzzle.sizeW].move();
					else if (isMove == "-y" && this.position + Npuzzle.sizeW != Npuzzle.blank)
						Npuzzle.pieces[this.position + Npuzzle.sizeW].move();

					this.goAhead();
					if (Npuzzle.isFinish())//ÿһ���ƶ��굱ȻҪ�����������û��
						Npuzzle.finishAct();
				}
				this.pieces[index].onclick = this.pieces[index].move;
			}	
		}
		this.pieces[this.sizeW * this.sizeH - 1].style.background = "none #FFF";//�����λ���ϵ��ӿ鱳������Ϊ��ɫ������ƴͼ����
	},
	shuffle: function(){//�漴����ƴͼ
		if (this.pieces.length == 0)
			this.initPieces();//����ƴͼ֮�ҵ�ȻҪ���ӿ鼯��

		var end = (this.sizeW * this.sizeH) * (this.sizeW * this.sizeH);
		var rdm, oldRdm = 3;
		for(var i = 0; i < end; ++i){
			//�����(this.sizeW * this.sizeH) * (this.sizeW * this.sizeH)��Ӧ���ܴ����˰ɣ���ʵ�ǿ��������ģ����������������������ˣ�����Ҳ��ȷ��ƴͼһ������ɣ���Ϊ���ó�ʼ������ȷƴͼ����ߵ�1000��
			rdm = Math.floor(4 * Math.random()) % 4;//�����0,1,2,3�ֱ��ʾ���ƣ����ƣ����ƣ�����
			if (oldRdm + rdm == 3)//��ʾ��һ���ƶ����෴�����⵱Ȼ�����ˣ�Ҫ�������ˣ��ǲ������߻�ȥ����
				--i;//���Լ������ȼ�1�������ּ�1���ǲ���仯�ġ�
			else if (rdm == 0 && this.blank % this.sizeW < this.sizeW - 1){
				this.pieces[this.blank + 1].goAhead();//����ҲҪ����û���߽簡������Ȼ�ǲ�������
				oldRdm = rdm;//��¼�����ƶ��ķ���
			}
			else if (rdm == 3 && this.blank % this.sizeW > 0){
				this.pieces[this.blank - 1].goAhead();//����Ҳ���ܳ��߽�
				oldRdm = rdm;
			}
			else if (rdm == 1 && Math.floor(this.blank / this.sizeW) < this.sizeH - 1){
				this.pieces[this.blank + this.sizeW].goAhead();//����Ҳ���ܳ��߽�
				oldRdm = rdm;
			}
			else if (rdm == 2 && Math.floor(this.blank / this.sizeW) > 0){
				this.pieces[this.blank - this.sizeW].goAhead();//����Ҳ���ܳ��߽�
				oldRdm = rdm;
			}
			else
				--i;//�������˵��û�ƶ��ɹ��ˡ���������ȻҲ�Ͳ��������ˣ������ȼ�1��˵
		}
		this.counter = 0;//�����������ˣ�������ȻҲ��ͳ���ˡ����ߵĲ�����ȻҲ��Ҫ������
	},
	setScale: function(w, h){//ƴͼ��ģ����
		this.sizeW = w;
		this.sizeH = h;

		this.clearPieces();
		this.initPieces();//�ı��˹�ģ����ȻҪ���³�ʼ���ӿ鼯��
		this.bestRec = 0;//��Ȼ�ˡ���ģ���ı��ˣ���Ѽ�¼Ҳ���������
	},
	setImg: function(n){//����ƴͼ����ͼ��
		if(n < 0)
			this.imgPos = this.imgs.length - 1;
		else if (n >= this.imgs.length)
			this.imgPos = 0;
		else
			this.imgPos = n;//ͼƬ�ı��ˣ���ǰ���õ�ͼƬ������Ȼ�͵ø�����
		//���������õ�ͼƬ��С������������ͼƬ������Ĵ�С����Ȼ������Ĵ�С��ͼ���С��һ��������ѿ���
		this.host.style.width = this.imgs[this.imgPos].width + "px";
		this.host.style.height = this.imgs[this.imgPos].height + "px";

		this.clearPieces();
		this.initPieces();//�͸ı��ģһ����ͼ��ı��ˣ���ȻҪ���³�ʼ���ӿ鼯��
		this.bestRec = 0;//�ԣ�������Ѽ�¼Ҳ�������
	}
}