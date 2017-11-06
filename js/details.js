$(function () {
    $.getJSON("datas/detail.json",function (datas) {
        $(".name").text( datas.goodsInfo[0].name);
        datas.goodsStyle.forEach(function (item,idx) {
            $(".goods_size").text(item.sizex)
            $(".goods_texture").text(item.texturex)
            $(".goods_color").text(item.colorx)
        })
        datas.goodsInfo.forEach(function (item,idx) {

            $(".dec").text(item.typex);
            $(".dec_old").text(item.old);
            $(".goods_sales").text(item.sales);
            $(".goods_pri").text(item.pri);
            $(".origin_pri").text(item.originpri);
            $(".rank_point").html(item.rank);
            $(".stock_num").text(item.storage);
            var i = parseInt(item.storage)
            var num = 0
            $(".plus").on("click",function () {
                if(num<i){
                    num ++
                }else {
                    $(".plus").attr("disabled","disabled").css("background-color","#e3e3e3").next()
                        .removeAttr("disabled","disabled").css("background-color","none")
                    return num;
                }
                $(".input_box input").val(num)
            })




            $(".add_to_car").on("click",function () {
                $(".flag").text($(".input_box input").val())
                if ($(".input_box input").val() == 0){
                    alert("请选择数量")
                    return;
                }else {
                    var cost1 = parseInt($(".flag").text())
                    var cost2 = parseInt($(".goods_pri").text())
                    var cost = cost1 * cost2
                    console.log(cost)
                    var obj = {
                        goodsImg: $(".show_img img").attr("src"),
                        goodsName: $(".name").text(),
                        goodsSize: $(".goods_size").text(),
                        goodsTexture: $(".goods_texture").text(),
                        goodsColor: $(".goods_color").text(),
                        goodsCost: $(".goods_pri").text(),
                        goodsCount: $(".flag").text(),
                        goodsTotal: cost
                    }
                    var oArr = [];
                    oArr.push(obj)
                    var arr = JSON.stringify(oArr)
                    sessionStorage.setItem("goodsInfo", arr)
                    alert("加入购物车成功")
                    /*arr.push(obj);
                console.log(arr)
                var oArr = JSON.stringify(arr)
                sessionStorage.setItem("goodsInfo",oArr)*/
                }
            })
           /* $(".checkCart>a).on("click",function () {
                if ($(".input_box input").val() == 0){
                    return;
                }
                    /!*$.getScript("js/shopcar.js",function () {
                        loadMain({
                            pageName: "shopcar",
                            jsName: "shopcar"
                        });
                    })*!/
            })*/
        })




        var $imgName = datas.goodsImgSrc
        for (var i=0;i<$imgName.length;i++){
            $("section img").eq(i).attr("src",$imgName[i])
        }
    })
    $(".small_img_item").on("click",function () {
        var idx = $(this).index();
        $(".big_img_item").eq(idx).addClass("show_img").siblings().removeClass("show_img")
    })

})