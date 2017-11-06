$(function () {
    MyOrder("../datas/myorder.json");
});

function MyOrder(url) {
    $.get(url,function (data) {
       console.log(data);
        for (var i in data){
            $("tbody").append("<tr></tr>");
            for (var j in data[i]){
                if (j === "src"){
                    $("tbody").children("tr").eq(i).append(
                        '<td>' + '<img src="' + data[i][j][0] + '">' + '<p>'+ data[i][j][1] + '</p>' + '</td>')
                }
                else if(j === "operate"){
                    $("tbody").children("tr").eq(i).append('<td></td>');

                        for(var z in data[i][j]){
                            $("tbody").children("tr").last().children("td").last().append(
                                '<a>' + data[i][j][z] + '</a>'
                            )

                        }
                }
                else {
                    $("tbody").children("tr").eq(i).append(
                        '<td>' + data[i][j] + '</td>'
                    )
                }

            }
        }

    });



}
