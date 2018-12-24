/* * 
 * 音频可视化与html5音频元素
  AudioContext接口表示从连接在一起的音频模块，每个模块由表示内置的音频处理图AudioNode。
  音频上下文控制其包含的节点的创建以及音频处理或解码的执行。
 * 
 * 
 * 
 * 频率数据是[0,255]赫兹，频率的单位是赫兹。
 * 
 * reference: http://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html
 * chrome://flags/#autoplay-policy&&live server本地开发搭建临时的服务。
 */

window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
//统一前缀
window.onload = function() {
    var audio = document.getElementById('audio');
    var ctx = new AudioContext();//实例化一个音频容器对象。

    //创造节点
    var analyser = ctx.createAnalyser();
    //接口的createAnalyser()方法BaseAudioContext创建一个AnalyserNode，
    //我们特别需要一个名为AnalyserNode的东西。AnalyserNode将为我们的可视化提供实时频率数据。
    var audioSrc = ctx.createMediaElementSource(audio);
    //AudioContext 接口的 createMediaElementSource() 方法
    //用于创建一个新的 MediaElementAudioSourceNode 对象,
    //输入某个存在的 HTML <audio> or <video> 元素, 对应的音频即可被播放或者修改.
    
    audioSrc.connect(analyser);
    analyser.connect(ctx.destination);
    //我们必须把creatMediaElementsource和analysern连接起来
    //audioSrc获取音频.mp3的内容节点，analyser是为可视化做准备的*频谱分析器*，destination是电脑上的声卡。
    //连接后，音频节点先通过分析器，然后传到声卡。
    

    var frequencyData = new Uint8Array(analyser.frequencyBinCount);


    //我们准备好接收一些数据了


    var canvas = document.getElementById('canvas'),
        cwidth = canvas.width,
        cheight = canvas.height - 2,//减去上方小横条的高度，等于真正的起始位；
        meterWidth = 10, //光谱的宽度；
        gap = 2, //光谱的间隙；
        capHeight = 2,//光谱上方小横条的高度；
        capStyle = '#fff',//小横条的颜色；
        meterNum = 800 / (10 + 2), 
        //仪表计数/800是canvas的宽度，除以光谱的宽度10+光谱的间距2 = 一个有多少支光谱；
        capYPositionArray = []; //存储前一帧的帽的垂直位置
    ctx = canvas.getContext('2d'),//2d绘图环境
    gradient = ctx.createLinearGradient(0, 0, 0, 300);//canvas的方法创建线性渐变
    gradient.addColorStop(1, '#0f0');
    gradient.addColorStop(0.5, '#ff0');
    gradient.addColorStop(0, '#f00');
    //通过多个 addColorStop() 方法来定义渐变：
    //介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置。


    //数据渲染


    function renderFrame() {
        var array = new Uint8Array(analyser.frequencyBinCount);//通过下面的代码我们可以从analyser中得到此刻的音频中各频率的能量值。*傅里叶*
        analyser.getByteFrequencyData(array);
        var step = Math.round(array.length / meterNum); //计算从analyser中的采样步长；
        ctx.clearRect(0, 0, cwidth, cheight);//清理画布；
        //对信源数组进行抽样遍历，画出每个频谱条；
        for (var i = 0; i < meterNum; i++) {
            var value = array[i * step];//取样作为y轴的值；
            //绘制缓慢降落的冒头
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);//初始化保存帽头位置的数组，将第一个画面的数据压入其中
                //初始化保存冒头位置的数组，将第一个画面位置保存
            };
            ctx.fillStyle = capStyle;//fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。
            //开始绘制冒头
            if (value < capYPositionArray[i]) {//如果当前值小于之前值
                //使用前一次数据
                ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
            } else {
                //否则，则使用前一次保存的值来绘制帽头
                ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);//否则使用当前值直接绘制
                capYPositionArray[i] = value;
            };
             //开始绘制频谱条
            ctx.fillStyle = gradient; //设置filllStyle为渐变以获得更好的外观
            ctx.fillRect(i * 12 /*频谱条的宽度+条间距*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
        }
        requestAnimationFrame(renderFrame);//重复执行的块内
    }
    renderFrame();
    audio.play();
};
//获取了分析后的音频数据（数组），通过canvas的requestAnimationFrame还有最终的音频数组，循环画出音频的图形。