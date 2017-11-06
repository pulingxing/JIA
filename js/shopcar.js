$(function () {
    if (sessionStorage.getItem("goodsInfo") != null){
        var objX = sessionStorage.getItem("goodsInfo");
        var oNewObj = JSON.parse(objX);
        $(".goods_info_tdImg img").attr("src",oNewObj[0].goodsImg)
        $(".goods_info_tdImg p a").text("商品名称："+oNewObj[0].goodsName)
        $(".td_size").text("规格："+oNewObj[0].goodsSize)
        $(".td_texture").text("材料:"+oNewObj[0].goodsTexture)
        $(".td_color").text("颜色:"+oNewObj[0].goodsColor)
        $(".single_cost").text(oNewObj[0].goodsCost)
        $(".td_ctr input").val(oNewObj[0].goodsCount)
        $(".td_cost").text(oNewObj[0].goodsTotal)
        var oVul = parseInt($(".td_ctr input").val())
        var oTotal = $(".td_cost").text()
        $(".sel_goods_cont span").text(oVul)
        $(".total_cost").text("总计花费："+oTotal)
        $("body").on("click",".td_ctr a",function () {
            $(this).parent().parent().remove()
            $(".sel_goods_cont span").text(0)
            $(".total_cost").text("总计花费："+0)
            sessionStorage.removeItem("goodsInfo")
            $(".flag").text("0")
        })
    }else{
        alert("尚未添加物品，请继续选购")
    }






    /*var objX = sessionStorage.getItem("goodsInfo");
    var oNewObj = JSON.parse(objX);
    $(".goods_info_tdImg img").attr("src",oNewObj[0].goodsImg)
    $(".goods_info_tdImg p a").text("商品名称："+oNewObj[0].goodsName)
    $(".td_size").text("规格："+oNewObj[0].goodsSize)
    $(".td_texture").text("材料:"+oNewObj[0].goodsTexture)
    $(".td_color").text("颜色:"+oNewObj[0].goodsColor)
    $(".single_cost").text(oNewObj[0].goodsCost)
    $(".td_ctr input").val(oNewObj[0].goodsCount)
    $(".td_cost").text(oNewObj[0].goodsTotal)
    var oVul = parseInt($(".td_ctr input").val())
    var oTotal = $(".td_cost").text()
    $(".sel_goods_cont span").text(oVul)
    $(".total_cost").text("总计花费："+oTotal)
    $("body").on("click",".td_ctr a",function () {
        $(this).parent().parent().remove()
        $(".sel_goods_cont span").text(0)
        $(".total_cost").text("总计花费："+0)
    })*/
})