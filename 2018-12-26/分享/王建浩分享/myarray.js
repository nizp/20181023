Array.prototype.myPush = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
    }
    return this.length
}



Array.prototype.mySlice = function (n, m) {
    let arr2 = [];
    let s = this.length - 1;
    if (!m) {//没有第二个参数
        m = this.length;//没有第二个参数的时候 默认为整个数组
        if (n < 0) {//n为负数的时候
            n = s - (n + 1) * -1;
            if (n >= 0) {
                for (var i = 0, c = n; c < m; c++, i++) {
                    arr2[i] = this[c]; //
    
                }
            }

        } else {   //正常
            for (var i = 0, c = n; c < m; c++, i++) {
                arr2[i] = this[c]; //
            }
        }
    } else {
        if (n < 0 && n < m && m < 0) {//都为负数的时候
            n = s - (n + 1) * -1;//发现的规律 不知道是啥算法
            m = s - (m * -1);
            if(m > (s+1)) m = (s+1);
            for (var i = 0, c = n; c < (m + 1); c++, i++) {
                arr2[i] = this[c]; //
            }
        }
        if (n >= 0) {//正常的
            if(m > (s+1)) m = (s+1);
            for (var i = 0, c = n; c < m; c++, i++) {
                arr2[i] = this[c]; //

            }
        }

    }
    return arr2;
};



Array.prototype.mySplice = function (n, m, ...obj) {
    let arr2 = [];
    let arr3 = [];
    for (var i = 0, c = n; i < m; c++, i++) {
        arr2[i] = this[c]; //获取删除的内容 也是方法返回的内容
    }
    for (var j = 0; j < n; j++) {
        arr3[j] = this[j] // 将n前面的原数组的内容放到新的数组中
    }

    for (var i = 0, u = n; i < obj.length; i++, u++) {
        arr3[u] = obj[i]; // 将obj的内容放到n开始 m个索引中
    }
    let bian = this.length - m - n;
    for (var i = n + obj.length; i < (n + obj.length + bian); i++) {
        arr3[i] = this[i - obj.length + m]; // 将原数组剩余的内容放到新数组里面
    }

    this.length = arr3.length; // 将原数组的长度变成改变后的长度

    for (var i = 0; i < this.length; i++) { //将替换改变了的数据放回原数组里面
        this[i] = arr3[i];
    }
    return arr2;
};