
$(function () {
    loadHeader("header.html");
    loadFooter("footer.html");
    fourLinkage("../datas/fourlinkage.json");
    /*、导航栏*/
    $("body").on("mouseenter", ".navbar>li", function(){
        $(this).addClass("ckd").siblings().removeClass("ckd");
        $(this).children().addClass("play").parent().siblings().children().removeClass("play");
        $(this).children().slideDown(1000);
    })
    $("body").on("mouseleave", ".navbar>li,.drop", function(){
        $(this).removeClass("ckd");
        $(this).children().removeClass("play");
    })
    $("body").on("click",".shoping-cart",function(){
        $(".cartDetails").slideToggle(300);
    })
    $("body").on("mouseenter",".classify_material",function(){
        $(this).find(".classify_box").addClass("show");
    })
    $("body").on("mouseleave",".classify_material",function(){
        $(this).find(".classify_box").removeClass("show");
    })
    $("body").on("click",".navbar>li", function () {
        loadMain("goods.html");
        $("body").on("click",".goods_box",function () {
            loadMain("goodsdetails.html");
            $.getScript("js/details.js");
        })
        /*商品列表点击事件*/
        $("body").on("click",".classify_box li",function () {
            var i = $(this).parent().parent().index()
            $(".filter").eq(i).text($(this).text())
        })
        var i = $(this).index()
        if (i === 0) {
            loadJson("../datas/sofas.json");
        } else if (i === 1) {
            loadJson("../datas/tables.json")
        } else if (i === 2) {
            loadJson("../datas/beds.json");
        }else if (i === 3){
            loadJson("../datas/storages.json");
        }else if (i === 4){
            loadJson("../datas/sofas.json")
        }
    })
});


window.onhashchange = function() {
    var hashVal = location.hash;

        // 用ajax以此获取数据
        switch (hashVal) {
            case "#personInfo":
                $.get("./personinfo.html", function(doc) {
                    $("#view").html(doc);
                });
                break;
            case "#myOrder":
                $.get("./myordered.html", function(doc) {
                    $("#view").html(doc);
                });
                break;
            case "#mySell":
                $.get("./mysell.html", function(doc) {
                    $("#view").html(doc);
                });
                break;
            case "#myAccount":
                $.get("./myaccount.html", function(doc) {
                    $("#view").html(doc);
                });
                break;
            case "#message":
                $.get("./message.html", function(doc) {
                    $("#view").html(doc);
                });
                break;
            default:
            	$.get("./personinfo.html", function(doc) {
                    $("#view").html(doc);
                });
        }


};



// 生日
$(function(){
    $("#date").selectDate()

    $("#days").focusout(function(){
        var year = $("#year option:selected").html()
        var month = $("#month option:selected").html()
        var day = $("#days option:selected").html()
        console.log(year+month+day)
    })
});

$.fn.selectDate = function(){
			var minYear = 1900
			var maxYear = (new Date).getFullYear()
			var yearSel = document.getElementById('year')
			var monthSel = document.getElementById('month')
			var daySel = document.getElementById('days')

			for(var y = maxYear;y >= minYear;y--){
				var yearOpt = document.createElement('option')
				yearOpt.value = y
				yearOpt.innerHTML = y+'年'
				yearSel.append(yearOpt)
			}

			$("#year").click(function(event){
				if(!$("#year option:selected").val()) return;
				removeOption(monthSel)
				addOption(12,'月',monthSel)
				removeOption(daySel)
			})

			$("#month").click(function(){
				removeOption(daySel)
				var year = $("#year option:selected").val()
				var month = $("#month option:selected").val()
				if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
					addOption(31,'日',daySel)
				}else if(month==4 || month==6 || month==9 || month==11){
					addOption(30,'日',daySel)
				}else if(month==2){
					if((year%4 == 0 && year%100 != 0 ) || (year%400 == 0)){
						addOption(29,'日',daySel)
					}else{
						addOption(28,'日',daySel)
					}
				}
			})

			function addOption(num,unit,parent){
				//num：选项个数
				//unit：单位（年/月/日）
				//parent：父对象
				for(var index=1;index <= num;index++){
					var opt =document.createElement('option')
					$(opt).attr('value',index)
					if(index<10){index = '0'+index}
					$(opt).html(index+unit)
					$(parent).append(opt)
				}
			}

			function removeOption(parent){
				//parent：父对象
				var options = $(parent).find('option')
				for(var index = 1;index < options.length;index++){
					parent.removeChild(options[index])
				}
			}
		}


//省市区街道四级联动

function fourLinkage(url) {
    $.getJSON(url).then(
        function (data) {
            console.log("success!");
            var $province = $("#province");
            $province.html("");
            for (var i in data){
                for (var j in data[i]){
                    $province.append("<option value=" + i + ">" + j + "</option>");
                }
            }

        },
         function () {
             console.error("fail!");
         }
    );
}

























