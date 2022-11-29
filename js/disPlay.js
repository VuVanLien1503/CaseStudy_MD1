function disPlay(arr) {
    let result = "";
    result += "<table>"
    let count = 0;
    let j = 0;
    if (arr.length % 4 === 0) {
        while (j < arr.length / 4) {
            result += "<tr>"
            for (let i = 0; i < 4; i++) {
                result += "<td>"
                result += "<img width='223px' height='130px' style='margin: 15px ' alt='Error' src=" + arr[count].getImg() + ">"
                result += "<h4 style='color: blue;text-align: center'>" + "Name:" + arr[count].getName() + "</h4>"
                result += "<h4 style='color: #23ea15;text-align: center'>" + "Gender:" + arr[count].getCategory() +"-"+ "Size:" + arr[count].getSize() + "</h4>"
                result += "<h4 style='color: rgba(255,0,0,0.77) ;text-align: center'>Giá: " + arr[count].getPrice() + "VND</h4>"
                result += "<hr style='border: 1px solid blue'>"
                if (checkLogIn(acc, pas)) {
                    if (checkAdmin(acc, pas)) {
                        result += "<button onclick='editShoeTable(" + count + ")'style='margin-left:50px;color:blue '>&nbsp;Sửa&nbsp;</button>"
                        result += "<button onclick='deleteShoe(" + count + ")'style='margin-left: 50px;color: red'>&nbsp;Xóa&nbsp;</button>"
                    } else {
                        result += "<button onclick='option(" + count + ")' style='margin-left: 95px'>" + "Mua" + "<span class=\"glyphicon glyphicon-shopping-cart\"></span>" + "</button>"
                    }

                } else {
                    result += "<button style='margin-left: 95px' onclick='registerTable()'>" + "Dang Ky" + "</button>"
                }
                result += "</td>"
                count++;
            }
            result += "</tr>"
            j++;
        }
        result += "</table>"
    } else {
        while (j < (arr.length / 4) + 1) {
            result += "<tr>"
            for (let i = 0; i < 4; i++) {
                if (count <= arr.length - 1) {
                    result += "<td>"
                    result += "<img width='223px' height='130px' style='margin: 15px ' alt='Error' src=" + arr[count].getImg() + ">"
                    result += "<h4 style='color: black;text-align: center'>" + "Name:" + arr[count].getName() + "</h4>"
                    result += "<h4 style='color: black;text-align: center'>" + "Gender:" + arr[count].getCategory() +"-"+ "Size:" + arr[count].getSize() + "</h4>"
                    result += "<h4 style='color: black;text-align: center'>" + "TradeMark:" + arr[count].getTradeMark() + "</h4>"
                    result += "<h4 style='color: red ;text-align: center'>Giá: " + arr[count].getPrice() + "VND</h4>"
                    result += "<hr style='border: 1px solid rgba(0,0,255,0.67)'>"
                    if (checkLogIn(acc, pas)) {
                        if (checkAdmin(acc, pas)) {
                            result += "<button onclick='editShoeTable(" + count + ")'style='margin-left:50px;color:blue '>&nbsp;Sửa&nbsp;</button>"
                            result += "<button onclick='deleteShoe(" + count + ")'style='margin-left: 50px;color: red'>&nbsp;Xóa&nbsp;</button>"
                        } else {
                            result += "<button onclick='option(" + count + ")' style='margin-left: 95px'>" + "Mua" + "<span class=\"glyphicon glyphicon-shopping-cart\"></span>" + "</button>"
                        }
                    } else {
                        result += "<button style='margin-left: 95px' onclick='registerTable()'>" + "Dang Ky" + "</button>"
                    }
                    result += "</td>"
                    count++;
                } else {
                    result += "<td> " + " " + "</td>"
                    count++
                }
            }
            result += "</tr>"
            j++;
        }
        result += "</table>"
    }
    document.getElementById("result").innerHTML = result;

}

disPlay(arrayShoe)
event.preventDefault();




