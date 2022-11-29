function payMent() {
    text="";
    // let showPayMent="";
    let sum=0;
    let stt =1;
    text += "<table>" +
        "<tr>" +
        "<th>STT</th>" +
        "<th>Name</th>" +
        "<th>TradeMark</th>" +
        "<th>Gender</th>" +
        "<th>Price</th>" +
        "</tr>"
    for (let i = 0; i <arrPayMent.length; i++) {
        sum +=arrPayMent[i].priceShoe;
        text +=
            "<tr>"+
            "<td>" + stt +"</td>"+
            "<td>" + arrPayMent[i].nameShoe +"</td>"+
            "<td>" + arrPayMent[i].tradeMarkShow +"</td>"+
            "<td>" + arrPayMent[i].genderShoe +"</td>"+
            "<td>" + arrPayMent[i].priceShoe +"</td>"+
            "</tr>"
        stt++;
    }
    text +="<tr>" +"<td colspan='4' style='text-align: center;color: red;font-size: 20px'>"+ "Tong :"+sum+" VND" +"</td>"
        +"<td>" +"<button onclick='sumPayMent()'>" + "ThanhToan"      +"</button>"+"</td>"
        +"</tr>"
    text +="</table>"
    document.getElementById("loginHome").innerHTML=text;

    // location.replace("payment.html");
}
let countOption=0;
let arrPayMent=[];
function option(index){
    countOption++
    let name=arrayShoe[index].getName();
    let price=arrayShoe[index].getPrice();
    let tradeMark=arrayShoe[index].getTradeMark();
    let genderShoe=arrayShoe[index].getCategory();
    arrPayMent.push({
        nameShoe:name,
        priceShoe:price,
        tradeMarkShow:tradeMark,
        genderShoe:genderShoe
    })

    document.getElementById("showOption").innerHTML=countOption;
    console.log(arrPayMent);
}
function sumPayMent(){
    text="";
    countOption =0;
    arrPayMent=[];
    document.getElementById("loginHome").innerHTML=text;
    document.getElementById("showOption").innerHTML=countOption;

    alert(" Thanks You..")
}