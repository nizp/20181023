//----------设计思路----------
//1）整体方法只有+和-，所以只在对象下挂了add和sub方法;
//2）另外的init方法，由于仿写的Utils的链式查找不完美，所以只能通过init初始化对象属性，并以obj参数形式，每次都要执行一遍全链条的节点查找;
//3）因为方法的单一，应用了对象的继承，公用一套add和sub方法;
//4）为了解耦，将run函数作为对象私有属性挂在实例上并执行;
//----------优缺点----------
//1）Utils封装不太好，链式操作太繁琐;
//2）由于继承性，count与sum的click事件先后顺序无法调整，如果判断单独条目是否为0，判断停止sum计数的-操作，那么sum的最后一次-操作总是无法执行。所以只能给-号按钮添加flag属性用于判断计数是否为0，停止sum计数的-操作;
//3）通过call方法调用，声明了匿名函数的执行环境，this指针满天飞……;
//----------思考点----------
//1）Utils中的click方法中，通过function添加callback，那么理应callback为箭头函数时，指针指向调用事件的DOM。但是实际使用时，是按照调用click的环境查找的this;



//---------------------------创建类---------------------------
//---------------------------Count类
class Count {
	constructor() {}

	//初始化
	init(obj) {
		for (let i = 0; i < obj.child.length; i++) {
			this["target" + i] = $(obj.parent).index(obj.index).find(obj.child[i]);
		}
	}

	//加与减方法
	add(selector, value, max, unit) { //默认最大值为正无穷
		//必须传参，不传参报错
		if (!selector) throw new Error("The function ADD need a parameter");
		//判断最大值
		if (selector.text().toNumber("", true).n === (typeof max === "number" ? max : Infinity)) return;
		//目标的innerHTML执行加操作
		selector.inner("", selector.text().toNumber("", true).n + value + (unit ? unit : 0))
	}
	sub(selector, value, min, unit) { //默认最小值为负无穷
		//必须传参，不传参报错
		if (!selector) throw new Error("The function SUB need a parameter");
		//判断最小值
		if (selector.text().toNumber("", true).n === (typeof min === "number" ? min : -Infinity)) return;
		//目标innerHTML执行减操作
		selector.inner("", selector.text().toNumber("", true).n - value + (unit ? unit : 0));
	}
}

//---------------------------Sum类
//继承Count
class Sum extends Count {
	constructor(heritage) {
		super(); //啥也没有，先加上，以后优化没准用得上
		this.heritage = heritage; //将Count的结果作为参数传入Sum
	}
}



//---------------------------执行程序---------------------------

//---------------------------获取目标的长度
let len = $(".count").selector.length;

//---------------------------Count类创建执行
//循环，new所有目标
const arr = [];
(function() {
	for (let i = 0; i < len; i++) {
		arr[i] = new Count();
		arr[i].init({
			parent: ".count",
			index: i,
			child: ["i", "em", "strong"]
		})

		//私有方法
		arr[i].run = (function() {
			this.target0.index(0).click("", () => {
				//点击时，在执行-号操作前如果计数为0，就给按钮加上flag = true，用于sum判断。否则因为计数-操作在sum-操作前，没法用计数为0判断是否执行操作
				if (!this.target1.text().toNumber().n) this.target0.index(0).flag = true;
				//数量-
				this.sub(this.target1.index(0), 1, 0);
				//小计-
				const value = this.target2.index(0).text().toNumber("", true).n; //因为index查找的不完美，必须先取值，保证运算时index为第二个值
				this.sub(this.target2.index(1), value, 0, "元")
			});
			this.target0.index(1).click("", () => {
				//数量+
				this.add(this.target1.index(0), 1);
				//小计+
				const value = this.target2.index(0).text().toNumber("", true).n; //因为index查找的不完美，必须先取值，保证运算时index为第二个值
				this.add(this.target2.index(1), value, "", "元")
			})
		}).call(arr[i]);
	}
})()

//---------------------------Sum类创建执行
const sum = new Sum(arr); //将count值传入sum
sum.init({
	parent: ".info",
	index: 0,
	child: ["em"]
});

//私有方法
sum.run = (function() {
	const countVal = [];

	for (let i = 0; i < this.heritage.length; i++) {
		this.heritage[i].target0.index(0).click("", () => {
			//如果-号的flag判断不为true，即flag不为0，就执行sum操作
			if (!this.heritage[i].target0.index(0).flag) {
				//计数-
				this.sub(this.target0.index(0), 1, 0);
				//总计-
				this.sub(this.target0.index(1), this.heritage[i].target2.index(0).text().toNumber("", true).n);
				//最高单价
				if (!this.heritage[i].target1.text().toNumber("", true).n) {
					countVal[i] = "";
					if (this.heritage[i].target2.index(0).text().toNumber("", true).n === this.target0.index(2).text().toNumber("", true).n) {
						this.target0.index(2).inner("", Math.max(...countVal));
					}
				}
			}
		});
		this.heritage[i].target0.index(1).click("", () => {
			//每次点击+号，都将-号的flag重置为false，用于计数为0时的判断
			this.heritage[i].target0.index(0).flag = false;
			//计数+
			this.add(this.target0.index(0), 1);
			//总计+
			this.add(this.target0.index(1), this.heritage[i].target2.index(0).text().toNumber("", true).n);
			//最高单价
			if (!countVal[i]) {
				countVal[i] = this.heritage[i].target2.index(0).text().toNumber("", true).n;
				const curMax = this.target0.index(2).text().toNumber("", true).n;
				this.target0.index(2).inner("", Math.max(countVal[i], curMax));
			}
		})
	}
}).call(sum)