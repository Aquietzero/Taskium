/* **********************************吴垚***************************************************************
 完成功能：
	1. 结束游戏提示：
		 在赢得游戏时，即所有的拼图块回复到原始顺序时，提供某种形式的视觉提示。
		 本人采用取出所有子块显示完整图像的行为，并在图像旁边显示完成信息。
    2. 能一次滑动多个拼图块：
		 如果你点击空块行或列上，甚至是远离空块的任意拼图块，在拼图块和空块之间能相互滑动（玩法更令人喜爱）。
		 所有能移动的拼图块（包括远离空块的几排或列）在鼠标悬停时的效果和前面做的一样。
    3. 游戏步数监视:
		 记录游戏中步数。并在做完拼图后，显示到目前为止用户最佳的游戏步数和当前步数
    4. 多背景：
		 本人提供30张背景图片（至少4张）以供选择，采用上一图和下一图的简单选择方式。
		 游戏以任意一张背景图片开始，并提供用户界面，使用户游戏的同时能选择不同的图片。
    5. 不同的拼图规模(尺寸)：
		 提供一个木板控制器，允许游戏将拼图分割为其他大小，如3x3或6x6。
		 在这里，必须要提一下，如果用户设置的规模过大（超过100*100），那么随机打乱时，如果要打乱的效果好
		 不可避免的将要花更多的时间，这里，与老师给的要求不能超过一秒是冲突的。。而且这个要求本身不合理，
		 因为要打乱所花的时间与拼图规模是同增长的。。。如果用户非得要设置比较大的规模（我们本省不能限制，
		 用户对规模的设置，只能提醒用户这将花更多时间），怎么可能再使得打乱所花的时间按然不超过一秒呢！
		 而且我们打乱的时候，还必须要保证打乱的拼图是一定能够通过一定步数复原的！
		 所以，要是打乱时间始终不超过一秒，恕学生解决不了，还得请老师和TA介绍或者给出一个好的算法。
	6. 拼图主区域和拼图规模调整子块大小调整：
		 根据图像大小调整拼图主区域大小，然后根据拼图主区域大小和拼图规模合理设置每一块
		 子块的大小和显示字体，使得拼图过程中图像更加美观
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
	host: 0,//拼图控制块
	shuffle: 0,//打乱控件
	stepsLabel: 0,//步数监视控件
	setSize: 0,//规模控件
	changeImg: 0,//图像选择控件
	msg: 0,//完成信息显示部件
	
	setMsg: function(str){
		this.msg.innerHTML = str;
	},

	init: function(controlId, shuffleId){
		this.host       = document.getElementById(controlId);/*获取拼图控制块*/
		this.shuffle    = document.getElementById(shuffleId);/*获取已存在的打乱控件*/
		this.shuffle.title = "It will take you much time if the scale is too large!!";
		this.shuffle.style.cssFloat = "left";

		var steps	    = document.createElement("input");/*创建步数显示控件*/
		steps.type      ="text";
		steps.size      = "5";

		this.stepsLabel = document.createElement("label");/*创建步数监视控件*/
		this.stepsLabel.style.cssFloat = "right";
		this.stepsLabel.innerHTML      = "[Steps]:";
		this.stepsLabel.appendChild(steps);/*将步数显示控件添加入监视控件*/

		var reSize	    = document.createElement("input");/*创建拼图规模提交控件*/
		reSize.type     = "button";
		reSize.value    = "Set Scale";
		reSize.style.cssFloat= "right";

		var width	    = document.createElement("input");/*创建拼图宽输入控件*/
		width.type      ="text";
		width.size      = "4";
		width.maxLength = "2";
		var wLabel	    = document.createElement("label");/*创建拼图宽标签*/
		wLabel.innerHTML= "[Width]:";
		wLabel.style.cssFloat = "left";
		wLabel.appendChild(width);/*将拼图宽输入控件加到宽标签*/

		var height	    = document.createElement("input");/*创建拼图高输入控件*/
		height.type     ="text";
		height.size     = "4";
		height.maxLength= "2";
		var hLabel	    = document.createElement("label");/*创建拼图高标签*/
		hLabel.innerHTML= "[Height]:";
		hLabel.style.cssFloat = "left";
		hLabel.appendChild(height);/*将拼图高输入控件加到高标签*/
		
		this.setSize       = document.createElement("div")/*创建拼图规模控件*/		
		this.setSize.title = "must be a integer and greater than 1";
		this.setSize.style.clear = "both";
		this.setSize.appendChild(wLabel);/*将拼图宽输入控件加到规模控件*/
		this.setSize.appendChild(hLabel);/*将拼图高输入控件加到规模控件*/
		this.setSize.appendChild(reSize);/*将拼图规模提交控件加到拼图控规模控件*/

		

		var nextImg     = document.createElement("input");/*创建拼图下一图像选择控件*/
		nextImg.type    = "button";
		nextImg.value   = "Next Image";
		nextImg.style.cssFloat= "right";

		var prevImg     = document.createElement("input");/*创建拼图上一图像选择控件*/
		prevImg.type    = "button";
		prevImg.value   = "Previous Image";
		prevImg.style.cssFloat= "left";

		this.changeImg  = document.createElement("div");/*创建拼图图像选择控件*/
		this.changeImg.style.clear = "both";
		this.changeImg.appendChild(prevImg);/*将拼图上一图像选择控件加到图像选择控件*/
		this.changeImg.appendChild(nextImg);/*将拼图下一图像选择控件加到图像选择控件*/
		
		this.msg        = document.createElement("div");
		this.msg.style.clear = "both";
		this.msg.style.color = "red";

		this.host.appendChild(this.stepsLabel);/*将步数监视控件加到拼图控制块*/
		this.host.appendChild(this.setSize);/*将规模控件控件加到拼图控制块*/
		this.host.appendChild(this.changeImg);/*将图像选择控件加到拼图控制块*/
		this.host.appendChild(this.msg);



		attach();//控件功能连接
		updateSteps();
		function attach(){
			controller.shuffle.onclick = function(){Npuzzle.shuffle()};//打乱功能连接
			reSize.onclick = function(){//规模设置功能连接
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
			prevImg.onclick = function(){ Npuzzle.setImg(Npuzzle.imgPos - 1);}//上一图像选择功能连接
			nextImg.onclick = function(){ Npuzzle.setImg(Npuzzle.imgPos + 1);}//下一图像选择功能连接
		}
		function updateSteps(){//步数监视空能
			steps.value = Npuzzle.counter;
			setTimeout(updateSteps, 100);
		}
	}
};

Npuzzle = {
	host: null,//拼图主区域
	imgPos: null,//当前采用图像索引
	imgs: null,//备选图像集
	pieces: null,//拼图子块集

	sizeW: 4,//拼图规模--宽
	sizeH: 4,//拼图规模--高
	
	pieceW: 0,//拼图子块--宽
	pieceH: 0,//拼图子块--高
	blank: null,
	
	counter: 0,//每次拼图步数计数器
	bestRec: 0,//当前规模当前图像拼图最佳记录

	init: function(pId, imgList){//初始化拼图部件
		this.host = document.getElementById(pId);//获取拼图主区域
		this.pieces = new Array();//创建拼图子块集容器

		this.imgs = new Array(imgList.length);//创建备选图像集容器
		for (var i = 0; i < imgList.length; ++i){//将备选图像集的URL转化为对象img,以便根据图像设置拼图实际的像素
			this.imgs[i] = document.createElement("img");
			this.imgs[i].src = imgList[i];
		}
		this.imgPos = 0;//初始化当前采用的图像索引
		this.clearPieces();
		this.initPieces();//初始化拼图子块集
	},
	clearPieces: function(){//清空拼图子块集
		var children = this.host.childNodes;
		for (var i = children.length - 1; i >= 0; --i)
			this.host.removeChild(children[i]);//清除拼图在页面显示的子块元素
		this.pieces.splice(0);//清空拼图子块集容器
		this.counter = 0;
	},
	updateState: function(pos){//更新拼图状态
		//发生子块移动时交换子块位置，并更新每一个子块的具体位置
		this.pieces[pos].position = this.blank;
		this.pieces[this.blank].position = pos;

		var pieceTmp = this.pieces[pos];
		this.pieces[pos] = this.pieces[this.blank];
		this.pieces[this.blank] = pieceTmp;

		this.blank = pos;//更新空白块的位置
		++this.counter;	//步数累加
	},
	isFinish: function(){//判断是否完成：根据每个子块的显示数字，即其正确位置与当前所在位置比较可实现
		for (var i = 0; i < this.pieces.length; ++i)
			if("" + (this.pieces[i].position + 1) != this.pieces[i].innerHTML)
				return false;
		return true;
	},
	finishAct: function(){//成功完成后所做操作
		if (this.bestRec == 0 || this.bestRec > this.counter)
			this.bestRec = this.counter//有可能的话更行最佳记录
		controller.setMsg("<p><strong>Congratulation:</strong></p>" + 
			"<p>(^o^):You have finished The Task in <strong>" + this.counter + "</strong> steps</p>" + 
			"<p>(^_^):Your best record is <strong>" + this.bestRec + "</strong> Steps</p>");

		this.clearPieces();//清空拼图子快集
		this.host.style.backgroundImage = "url(" + this.imgs[this.imgPos].src + ")";//显示当前拼图所采用的完整图像
	},
	initPieces: function(){//子块集初始化，各块处于正确的位置
		controller.setMsg("");
		//根据拼图主区域大小与拼图规模设置每个拼图子块的大小
		this.pieceW = Math.round(this.host.offsetWidth / this.sizeW);
		this.pieceH = Math.round(this.host.offsetHeight / this.sizeH);
		this.blank = this.sizeH * this.sizeW - 1;//初始化空白块为最后一块
		this.host.style.background = "none";//清楚拼图主区域背景

		for (var i = 0; i < this.sizeH; ++i){//设置每一个子块
			for (var j = 0; j < this.sizeW; ++j){
				var index = j + i * this.sizeW;
				this.pieces.push(document.createElement("div"));//创建子块并加到子块集容器
				this.host.appendChild(this.pieces[index]);//将子块（儿子）加入主区域（父亲）
				
				this.pieces[index].position        = index;//子块当前位置
				this.pieces[index].className       = "puzzlepiece movablepiece";//子块样式
				this.pieces[index].innerHTML       = index + 1;//子块正确位置
				
				this.pieces[index].style.backgroundImage    = "url(" + this.imgs[this.imgPos].src + ")";//子块背景
				this.pieces[index].style.backgroundPosition = (-j * this.pieceW) + "px "
													      	+ (-i * this.pieceH) + "px";//子块背景位置，使得子块看起来有图片分割的效果
				this.pieces[index].style.borderWidth        = "1px";
				//子块初始位置
				this.pieces[index].style.top       = i * this.pieceH + "px";
				this.pieces[index].style.left      = j * this.pieceW + "px";
				this.pieces[index].style.width     = (this.pieceW - 2) + "px";
				this.pieces[index].style.height    = (this.pieceH - 2) + "px";
				this.pieces[index].style.fontSize  = 
					((this.pieceH < this.pieceW)?this.pieceH : this.pieceW) / 3 + "px";
				this.pieces[index].style.lineHeight= this.pieceH + "px";
				this.pieces[index].style.zIndex    = "1";

				this.pieces[index].onmouseover     = function(){this.setBorderColor("2", "red");}//鼠标悬停监控
				this.pieces[index].onmouseout      = function(){this.setBorderColor("1", "black");}//鼠标移出监控
				
				//设置整体移动子块时的子块样式
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
				//判断子块是否能移动，若能，并返回能够移动的方向
				this.pieces[index].canMove = function(){
					var y = Math.floor(this.position / Npuzzle.sizeW);
					var x = this.position % Npuzzle.sizeW;
					var by = Math.floor(Npuzzle.blank / Npuzzle.sizeW);
					var bx = Npuzzle.blank % Npuzzle.sizeW;

					if (y == by && x > bx)
						return "+x";//左移
					else if (y == by && x < bx)
						return "-x";//右移
					else if (x == bx && y > by)
						return "+y";//上移
					else if (x == bx && y < by)
						return "-y";//下移
					return false;
				}
				this.pieces[index].goAhead = function(){//子块移动
					var left = Npuzzle.pieces[Npuzzle.blank].style.left;
					var top  = Npuzzle.pieces[Npuzzle.blank].style.top;

					Npuzzle.pieces[Npuzzle.blank].style.left = this.style.left;
					Npuzzle.pieces[Npuzzle.blank].style.top  = this.style.top;

					this.style.left        = left;
					this.style.top         = top;
					this.style.zIndex      = "1";
					this.style.borderColor = "black";

					Npuzzle.updateState(this.position);//移动后当然得更新平涂状态了
				}
				this.pieces[index].move = function(){//子块或者子块整体移动
					var isMove = this.canMove();
					if (!isMove)
						return;
					//能移动，但是不与空白快直接相邻，则递归调用移动函数，实现子块整体移动
					if (isMove == "+x" && this.position - 1 != Npuzzle.blank)
						Npuzzle.pieces[this.position - 1].move();//
					else if (isMove == "-x" && this.position + 1 != Npuzzle.blank)
						Npuzzle.pieces[this.position + 1].move();
					else if (isMove == "+y" && this.position - Npuzzle.sizeW != Npuzzle.blank)
						Npuzzle.pieces[this.position - Npuzzle.sizeW].move();
					else if (isMove == "-y" && this.position + Npuzzle.sizeW != Npuzzle.blank)
						Npuzzle.pieces[this.position + Npuzzle.sizeW].move();

					this.goAhead();
					if (Npuzzle.isFinish())//每一次移动完当然要看看完成了们没有
						Npuzzle.finishAct();
				}
				this.pieces[index].onclick = this.pieces[index].move;
			}	
		}
		this.pieces[this.sizeW * this.sizeH - 1].style.background = "none #FFF";//将最后位置上得子块背景设置为白色，符合拼图规则
	},
	shuffle: function(){//随即打乱拼图
		if (this.pieces.length == 0)
			this.initPieces();//打乱拼图之家当然要有子块集了

		var end = (this.sizeW * this.sizeH) * (this.sizeW * this.sizeH);
		var rdm, oldRdm = 3;
		for(var i = 0; i < end; ++i){
			//随机走(this.sizeW * this.sizeH) * (this.sizeW * this.sizeH)步应该能打乱了吧，其实是可以收敛的，至于收敛步数，懒得算了，而且也能确保拼图一定能完成，因为是用初始化的正确拼图随机走得1000步
			rdm = Math.floor(4 * Math.random()) % 4;//随机数0,1,2,3分别表示右移，下移，左移，上移
			if (oldRdm + rdm == 3)//表示上一次移动的相反方向，这当然不能了，要是允许了，那不是又走回去了吗
				--i;//所以计数器先减1，后面又加1，是不会变化的。
			else if (rdm == 0 && this.blank % this.sizeW < this.sizeW - 1){
				this.pieces[this.blank + 1].goAhead();//右移也要满足没出边界啊。。不然那不是遭了
				oldRdm = rdm;//记录本次移动的方向
			}
			else if (rdm == 3 && this.blank % this.sizeW > 0){
				this.pieces[this.blank - 1].goAhead();//左移也不能出边界
				oldRdm = rdm;
			}
			else if (rdm == 1 && Math.floor(this.blank / this.sizeW) < this.sizeH - 1){
				this.pieces[this.blank + this.sizeW].goAhead();//下移也不能出边界
				oldRdm = rdm;
			}
			else if (rdm == 2 && Math.floor(this.blank / this.sizeW) > 0){
				this.pieces[this.blank - this.sizeW].goAhead();//上移也不能出边界
				oldRdm = rdm;
			}
			else
				--i;//到这里，就说明没移动成功了。计数器当然也就不能增加了，所以先减1再说
		}
		this.counter = 0;//随机打乱完成了，步数当然也被统计了。所走的步数当然也就要归零了
	},
	setScale: function(w, h){//拼图规模设置
		this.sizeW = w;
		this.sizeH = h;

		this.clearPieces();
		this.initPieces();//改变了规模，当然要重新初始化子块集了
		this.bestRec = 0;//当然了。规模都改变了，最佳记录也必须归零了
	},
	setImg: function(n){//设置拼图采用图像
		if(n < 0)
			this.imgPos = this.imgs.length - 1;
		else if (n >= this.imgs.length)
			this.imgPos = 0;
		else
			this.imgPos = n;//图片改变了，当前采用的图片索引当然就得更新了
		//根据所采用的图片大小重新设置整个图片主区域的大小，不然主区域的大小和图像大小不一样，会很难看的
		this.host.style.width = this.imgs[this.imgPos].width + "px";
		this.host.style.height = this.imgs[this.imgPos].height + "px";

		this.clearPieces();
		this.initPieces();//和改变规模一样。图像改变了，当然要重新初始化子块集了
		this.bestRec = 0;//对，还有最佳记录也必须归零
	}
}