let data = [{number:0, perPrice: 10.5}, 
    {number:0, perPrice: 10}, 
    {number:0, perPrice: 20}, 
    {number:0, perPrice: 30},
    {number:0, perPrice: 45},
]
class Single {
    constructor(information) {
        this.number = information.number || 0;
        this.perPrice = information.perPrice || 0;
        this.content = null;
        this.domCount = null;
    }
    init() {
        return this.struct();
    }
    // 返回data[i] -> dom
    struct() {
        let dom = document.createElement('li');
        dom.innerHTML = `<i></i><em>${this.number}</em><i></i>
                <span>
                    单价：<strong>${this.perPrice}</strong> 
                    小计：<strong>${this.number * this.perPrice}元</strong>
                </span>`;
        let eventButtons = dom.getElementsByTagName('i');
        eventButtons[0].addEventListener('click', this.deleteThing.bind(this));
        eventButtons[1].addEventListener('click', this.addThing.bind(this));
        this.content = dom.getElementsByTagName('strong');
        this.domCount = dom.getElementsByTagName('em')[0];
        return dom;
    }
    addThing() {
        this.number++;
        this.change();
    }
    deleteThing() {
        if(this.number <= 0) return;
        this.number--;
        this.change();
    }
    change() {
        if(!this.content) return;
        this.content[1].innerText = this.perPrice * this.number + '元';
        this.domCount.innerText = this.number;
        // 耦合
        statistic.render();
    }
}
// all 
class Statistics {
    constructor(node, data = []) {
        this.shopCar = [];
        this.domData = node.getElementsByTagName('em');
        let  other = node.getElementsByTagName('button')[0];
        other.addEventListener('click', this.clear.bind(this));
        this.data = data.slice();
        this.init();
    }
    init(data) {
        this.shopCar = [];
        this.data = data || this.data;
        this.data.forEach(item => {
            let i = new Single(item);
            this.shopCar.push(i);
            list.appendChild(i.init()); // html.list ?
        })
    }
    render() {
        let obj = this.filter();
        this.domData[0].innerText = obj.count;
        this.domData[1].innerText = obj.cost;
        this.domData[2].innerText = obj.expensitive;
    }
    filter() {
        let obj = {count: 0, cost: 0, expensitive: 0};
        this.shopCar.forEach(item => {
            obj.count += item.number;
            obj.cost += item.number * item.perPrice;
            obj.expensitive = (item.number > 0) &&
                (obj.expensitive < item.perPrice) ?
                item.perPrice : obj.expensitive;
        });
        return obj;
    }
    clear() {
        list.innerHTML = '';
        this.shopCar = [];
        this.init(this.data);
        this.render();
    }
}
let info = document.getElementById('info');
let statistic = new Statistics(info, data);