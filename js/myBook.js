var myBook;
//  	拿数据的函数
function getMyBook(){
	$.getJSON('data/myBook.json',function(data){
		myBook=data;
		var oData={
			data:myBook
		}
		//得到模板
		var str=document.getElementById("data").innerHTML;
		//替换模板数据
		var res=Mustache.render(str,oData);
		var oBox=document.getElementById("box");
			oBox.innerHTML=res;
		
		//  	给图书下划线增加颜色,更改数组colorBootm即可更改
    	var bookList={
    		colorBootm:['red','skyblue','green','yellow'],
    		fourColor:function(){
    			var oBook=mui('.myBookList>.mui-col-sm-3');
    			for(var i=0;i<oBook.length;i++){
    				var cs=bookList.colorBootm.length;
    				var num=i%cs;
    				oBook[i].style.borderBottomColor = bookList.colorBootm[num];
    			}
    		}
    	}
		bookList.fourColor();
	})
};

//登录按钮
var pl=(document.documentElement.clientWidth-$('.bookLogin').width())/2;
var pt=(document.documentElement.clientHeight-$('.bookLogin').height())/2;
$('.bookLogin').css({left:pl,top:pt});
$('.bookLogin').on('tap',function(){
	window.location='login.html';
});
console.log(pl,pt)
$('#box').on('tap','a',function(){
	var url="contentRead.html?num="+this.dataset.num;
	window.location=url;
})