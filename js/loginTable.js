let text = "";
let textPayMent = '';
let textName = "";
let account = "admin";
let passWord = "1"
let acc = "";
let pas = "";
let arrAccount =
    [
        {name: account, password: passWord, addrees: " hanoi", phone: "098"},
        {name: "taikhoan1", password: "1", addrees: "NamDinh", phone: "099"},
        {name: "taikhoan2", password: "1", addrees: "Hai Phong", phone: "077"}
    ];

function loginTable() {
    text =
        "                    <form action=\"#\">\n" +
        "                        <input type=\"text\" id=\"account\" placeholder=\"Account\" />\n" +
        "                        <input type=\"password\" id=\"password\" placeholder=\"Password\" />\n" +
        "                        <button onclick='checkSignIn()'>SignIn</button><a href=\"#\" onclick='registerTable()'>DangKy</a>\n" +
        "                    </form>\n"
    document.getElementById("loginHome").innerHTML = text;
}

function registerTable() {
    text = "    <table>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>Tài Khoản:</strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id='nameRegister' placeholder=\"Nhập Tài Khoản\">\n" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>Mật Khẩu:</strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"password\" id='passRegister' placeholder=\"Nhập Mật Khẩu\">\n" +
        "            </td>\n" +
        "        </tr>\n" +

        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>\n" +
        "                    Địa chỉ:\n" +
        "                </strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input\n" +
        "                        type=\"text\" id='addresRegister' placeholder=\"Nhập Địa Chỉ\">\n" +
        "\n" +
        "                \n" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>\n" +
        "                    Số Phone:\n" +
        "                </strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"number\"id='phoneRegister' placeholder=\"Nhập SDT\">\n" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td colspan=\"2\">\n" +
        "                <button onclick=\"registerHome()\" style='margin-left: 100px'>Đăng Ký</button>\n" +
        "\n" +
        "            </td>\n" +
        "        </tr>\n" +
        "    </table>\n";
    document.getElementById("loginHome").innerHTML = text;
}

function registerHome() {
    let name = document.getElementById("nameRegister").value;
    let pass = document.getElementById("passRegister").value;
    let addRes = document.getElementById("addresRegister").value;
    let phone = document.getElementById("phoneRegister").value;
    arrAccount.push({
        name: name, password: pass, addrees: addRes, phone: phone
    })
    text = "";
    document.getElementById("loginHome").innerHTML = text;
    console.log(arrAccount)
disPlay(arrayShoe)
}

function checkSignIn() {
    acc = document.getElementById("account").value;
    pas = document.getElementById("password").value;
    if (acc !== "" && pas !== "") {
        if (checkLogIn(acc, pas)) {
            textName =
                "        <a href=\"#\" style=\"float: right\" id=\"login\" onclick=\"logOut()\" >" + acc + "\n" +
                "            <i class=\"fa fa-fw fa-user\"></i>\n" +
                "        </a>\n";
            if (checkAdmin(acc)) {
                textPayMent =
                    "            <a href=\"#\" style=\" float: right; color: #0ff135\" onclick=\"addShoeTable()\">ThêmSảnPhẩm\n" +
                    "            </a>";
            } else {
                textPayMent =
                    "            <a href=\"#\"style=\" float: right\" onclick=\"payMent()\" >ThanhToan\n" +
                    "                <span class=\"glyphicon glyphicon-shopping-cart\" ></span>\n" + "<p id='showOption' style='color: red;font-size: 17px'>0</p>" +
                    "            </a>"
            }
        } else {
            textName =
                "    <a href=\"#\" style=\"float: right\" id=\"login\" onclick=\"loginTable()\">login\n" +
                "        <i class=\"fa fa-fw fa-user\"></i>\n" +
                "    </a>"
            alert("Tai Khoan Khong Ton Tai")
        }
    } else {
        textName =
            "    <a href=\"#\" style=\"float: right\" id=\"login\" onclick=\"loginTable()\">login\n" +
            "        <i class=\"fa fa-fw fa-user\"></i>\n" +
            "    </a>"
        alert("Nhap Lai")
    }

    text = "";
    document.getElementById("loginHome").innerHTML = text;
    document.getElementById("payMentHome").innerHTML = textPayMent;
    document.getElementById("loginShow").innerHTML = textName;
    disPlay(arrayShoe);
}

function logOut() {
    acc = "";
    pas = "";
    textPayMent = "";
    textName =
        "        <a href=\"#\" style=\"float: right\" id=\"login\" onclick=\"loginTable()\">login\n" +
        "            <i class=\"fa fa-fw fa-user\"></i>\n" +
        "        </a>\n"

    document.getElementById("loginShow").innerHTML = textName;
    document.getElementById("payMentHome").innerHTML = textPayMent;

    disPlay(arrayShoe);
    checkSignIn();
}

function checkLogIn(acc, pass) {
    let check = false;
    for (let i = 0; i < arrAccount.length; i++) {
        if (arrAccount[i].name === acc && arrAccount[i].password === pass) {
            check = true;
            break;
        }
    }
    return check
}

function checkAdmin(acc) {
    let check = false;
    if (acc === account) {
        check = true;
    }
    return check

}
