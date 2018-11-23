//----------设计思路----------
//尝试jQuery的无new操作，并试写链式调用，仅用于解读jQuery源码前，了解jQuery设计思路。
//优缺点：
//		 1）通过return对象this，达成链式操作;
//		 2）依赖属性操作，链式调用方式死板;
//		 3）因为通过属性覆盖实现某些方法，所以应用时，需要对调用顺序进行逻辑排列;


//尝试jQuery无new操作，未实现对象jQuery化

(function(window, document) {

	function Try(selector) {
		//返回实例
		return new Try.prototype.init(selector);
	}

	Try.prototype = {
		constructor: Try,
		//init函数，判断传入参数并获取节点。继承Try原型方法
		init: function(selector) { //不能使用箭头函数，箭头函数无法执行new操作
			if (!selector) { //如果初始化没传参，直接给对象节点设置为document
				this.selector = document;
				return;
			}

			this.find(selector);
		},

		//查找元素
		find: function(selector) {
			//必须传参，不传参报错
			if (!selector) throw new Error("The function find need a target");
			if (typeof selector !== "string") throw new Error("The parameter must be String");
			//判断传入参数是id、class或tagName
			selector.replace(/([#.])?(.+)/, ($0, $1, $2) => { //因为是函数参数，所以必须写满$0,$1,$2才能一一识别参数值
				//this.selector是否已经存在，调用find前是否已经存在父节点
				if (this.i && this.selector) { //不是id查找
					const ele = this.i;
					if ($1 === "#") selector = ele.querySelector($0); //getElementById只能document下查找，所以换成querySelector
					else if ($1 === ".") selector = ele.getElementsByClassName($2);
					else selector = ele.getElementsByTagName($2);
				} else if (!this.i && this.selector) { //是id查找
					const ele = this.selector;
					if ($1 === "#") selector = ele.querySelector($0); //getElementById只能document下查找，所以换成querySelector
					else if ($1 === ".") selector = ele.getElementsByClassName($2);
					else selector = ele.getElementsByTagName($2);
				} else { //如果初始化没传参，那么对象节点就是document，那就在document下找
					if ($1 === "#") selector = document.getElementById($2);
					else if ($1 === ".") selector = document.getElementsByClassName($2);
					else selector = document.getElementsByTagName($2);
				}
			})

			//this.selector重新赋值
			this.selector = selector;

			return this;
		},
		//获取当前对象节点下的对应元素
		index: function(num) {
			//如果目标不是类数组，报错
			if (this.selector.nodeType) throw new Error("The target is not [object HTMLCollection]");
			this.i = this.selector[num]; //实际使用时，漏洞很大，需要排列调用顺序，保证正确的index值
			return this;
		},

		//获取节点内容
		html: function(selector) {
			//如果传入参数，先查找元素，再设置innerHTML值
			if (selector) this.find(selector);
			//设置对象下html为当前对象下selector或index的innerHTML
			if (this.i) this.h = this.i.innerHTML;
			else this.h = this.selector.innerHTML;

			return this;
		},
		//获取节点文本
		text: function(selector) {
			//如果传入参数，先查找元素，再设置innerText值
			if (selector) this.find(selector);
			//设置对象下text为当前对象下selector或index的innerText
			if (this.i) this.t = this.i.innerText;
			else this.t = this.selector.innerText;

			return this;
		},
		//插入内容
		inner: function(selector, content) {
			//传入参数就更新节点
			if (selector) this.find(selector);
			//节点innerHTML更新为传入的内容
			if (this.i) this.i.innerHTML = content;
			else this.selector.innerHTML = content;

			return this;
		},
		//转换为数字
		toNumber: function(selector, boolean) {
			//如果传入了参数，就先获取对应参数的innerHTML
			if (selector) this.html(selector);
			//判断是获取整数还是小数，并且判断是获取text值还是html值
			if (boolean) this.n = this.t ? parseFloat(this.t) : parseFloat(this.h);
			if (!boolean) this.n = this.t ? parseInt(this.t) : parseInt(this.h);

			return this;
		},

		//点击事件
		click: function(selector, callback) {
			if (selector) this.find(selector);
			if (this.i) {
				this.i.addEventListener("click", ev => {
					callback && callback();
					ev.stopPropagation();
				}, false)
			} else {
				this.selector.addEventListener("click", ev => {
					callback && callback();
					ev.stopPropagation();
				}, false)
			}

			return this;
		}
	}

	//init继承Try原型
	Try.prototype.init.prototype = Try.prototype;

	//$号赋值，返回构造函数
	window.Try = window.$ = Try;
	return Try;
})(window, document) //将window及document传入，限制为局部参数，避免每次调用全局查找