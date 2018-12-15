let list = Array.from(ul1.children);

//本地有数据的时候，就使用本地的数据，没有默认为[]
let arr = localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):[];

if(arr.length)render(arr);

onstorage = function(){
	arr = localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):[];
	if(arr.length)render(arr);
}

list.forEach(e => {
	e.onclick = function(){
		if(!arr.includes(e.innerHTML)){
			arr.push(e.innerHTML);
			render(arr);
		}
	};
});

function render(arr){
	localStorage.setItem('data',JSON.stringify(arr));
	let html = '';
	for(let attr of arr){
		html += '<li>'+ attr +'</li>';
	}
	ul2.innerHTML = html;
}
ul2.onclick = function(ev){
	if(ev.target.tagName == 'LI'){
		arr = arr.filter(e=>e!=ev.target.innerHTML);
		render(arr);
	}
}







