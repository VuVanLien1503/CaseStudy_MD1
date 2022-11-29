function editShoeTable(inForShoe) {
    text = "    <table>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>Name Shoe:</strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id=\"nameShoe\" value='" + arrayShoe[inForShoe].getName() + "' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>Trade Mark:</strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id=\"tradeMark\"value='" + arrayShoe[inForShoe].getTradeMark() + "' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>\n" +
        "                    Size :\n" +
        "                </strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"number\" id=\"sizeShoe\" value='" + arrayShoe[inForShoe].getSize() + "' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>\n" +
        "                    priceShoe:\n" +
        "                </strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id=\"priceShoe\" value='" + arrayShoe[inForShoe].getPrice() + "' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>\n" +
        "                    imgShoe:\n" +
        "                </strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id=\"imgShoe\" value='" + arrayShoe[inForShoe].getImg() + "' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>\n" +
        "                    category:\n" +
        "                </strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id=\"genderShoe\" value='" + arrayShoe[inForShoe].getCategory() + "' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td colspan=\"2\">\n" +
        "                <button onclick=\"editShoe("+inForShoe+")\"style='margin-left: 100px' >Edit</button>\n" +
        "\n" +
        "            </td>\n" +
        "        </tr>\n" +
        "    </table>\n"

    document.getElementById("loginHome").innerHTML = text;

}
function addShoeTable() {
    text =
        "    <table>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>Name Shoe:</strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id=\"nameShoeAdd\" placeholder='Name Shoe' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>Trade Mark:</strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id=\"tradeMarkAdd\"placeholder='Trade Mark' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>\n" +
        "                    Size :\n" +
        "                </strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"number\" id=\"sizeShoeAdd\" placeholder='Size Shoe' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>\n" +
        "                    priceShoe:\n" +
        "                </strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id=\"priceShoeAdd\" placeholder='Price Shoe' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>\n" +
        "                    imgShoe:\n" +
        "                </strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id=\"imgShoeAdd\" value='../img/shoe/imgShoe1.png' placeholder=' Url: Img' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>\n" +
        "                <strong>\n" +
        "                    category:\n" +
        "                </strong>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" id=\"categoyShoeAdd\" placeholder='GenderShoe' >" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td colspan=\"2\">\n" +
        "                <button onclick=\"AddShoe()\"style='margin-left: 100px' >Add</button>\n" +
        "\n" +
        "            </td>\n" +
        "        </tr>\n" +
        "    </table>\n"

    document.getElementById("loginHome").innerHTML = text;

}


function deleteShoe(index) {
    if (confirm(" Delete : " + arrayShoe[index].getName() + "..?")) {
        arrayShoe.splice(index, 1);
        disPlay(arrayShoe);
        console.log(arrayShoe[index].getName());
    }
}
function editShoe(index) {
    let id = index;
    let nameShoe = document.getElementById("nameShoe").value;
    let tradeMark = document.getElementById("tradeMark").value;
    let size = document.getElementById("sizeShoe").value;
    let priceShoe = document.getElementById("priceShoe").value;
    let imgShoe = document.getElementById("imgShoe").value;
    let category = document.getElementById("genderShoe").value;

    let newShoe = new Shoe(id, nameShoe, tradeMark, size, priceShoe, imgShoe, category);
    console.log(newShoe)
    console.log(arrayShoe)
    arrayShoe[index] = newShoe;

    disPlay(arrayShoe)
    text = "";
    document.getElementById("loginHome").innerHTML = text;

}
function AddShoe() {
    let id = arrayShoe.length + 1;
    let nameShoe = document.getElementById("nameShoeAdd").value;
    let tradeMark = document.getElementById("tradeMarkAdd").value;
    let size = document.getElementById("sizeShoeAdd").value;
    let priceShoe = document.getElementById("priceShoeAdd").value;
    let imgShoe = document.getElementById("imgShoeAdd").value;
    let category = document.getElementById("categoyShoeAdd").value;


    let shoe = new Shoe(id, nameShoe, tradeMark, size, priceShoe, imgShoe, category);
    arrayShoe.push(shoe);
    disPlay(arrayShoe);
    text = "";
    document.getElementById("loginHome").innerHTML = text;
}
