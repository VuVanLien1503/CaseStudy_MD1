class Shoe{
    constructor(id,name,tradeMark,size,price,img,category) {
        this.id=id;
        this.name=name;
        this.tradeMark=tradeMark;
        this.size=size;
        this.price=price;
        this.img=img;
        this.category=category;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getTradeMark(){
        return this.tradeMark;
    }
    getSize(){
        return this.size;
    }
    getPrice(){
        return this.price;
    }
    getImg(){
        return this.img;
    }
    getCategory(){
        return this.category;
    }
    setName(name){
        this.name=name;
    }
    setTradeMark(tradeMark){
        this.tradeMark=tradeMark;
    }
    setSize(size){
        this.size=size;
    }
    setPrice(price){
        this.price=price;
    }
    setImg(img){
        this.img=img;
    }
    setCategory(category){
        this.category=category;
    }
}
let arrayShoe=new Array();
let shoe1=new Shoe(1,"Adidas1","Adidas",35,990000,"../img/shoe/adidas/Adidas-Nam-Yeezy350V1.png","Nam");
let shoe2=new Shoe(2,"Adidas2","Adidas",36,1990000,"../img/shoe/adidas/Adidas-Nu-UltraBoostV2.png","Nam");
let shoe3=new Shoe(3,"Adidas3","Adidas",37,2500000,"../img/shoe/mbl/MBL-Nam-LinerV1.png","Nam");
let shoe4=new Shoe(4,"Adidas4","Adidas",38,3500000,"../img/shoe/mbl/MBL-Nu-BigBallV2.png","Nu");
let shoe5=new Shoe(5,"Adidas5","Adidas",39,5000000,"../img/shoe/nike/NIKE-Nam-DunkLowV1.png","Nam");
let shoe6=new Shoe(6,"Adidas6","Adidas",40,10000000,"../img/shoe/nike/NIKE-Nu-DunkLowV2.jpg","Nu");
let shoe7=new Shoe(7,"Nike1","Nike",35,1000000,"../img/shoe/nike/NIKE-Nam-DunkLowV1.png","Nam");
let shoe8=new Shoe(8,"Nike2","Nike",36,5000000,"../img/shoe/mbl/MBL-Nu-BigBallV2.png","Nu");
let shoe9=new Shoe(9,"Nike3","Nike",37,3000000,"../img/shoe/nike/NIKE-Nam-DunkLowV1.png","Nam");
let shoe10=new Shoe(10,"Nike4","Nike",38,2000000,"../img/shoe/mbl/MBL-Nam-LinerV1.png","Nu");
let shoe11=new Shoe(11,"Nike5","Nike",39,4500000,"../img/shoe/adidas/Adidas-Nam-Yeezy350V1.png","Nam");
let shoe12=new Shoe(12,"Nike6","Nike",40,1000000,"../img/shoe/adidas/Adidas-Nu-UltraBoostV2.png","Nu");
let shoe13=new Shoe(13,"Mbl1","Mbl",35,700000,"../img/shoe/mbl/MBL-Nam-LinerV1.png","Nam");
let shoe14=new Shoe(14,"Mbl2","Mbl",36,1900000,"../img/shoe/mbl/MBL-Nu-BigBallV2.png","Nu");
let shoe15=new Shoe(15,"Mbl3","Mbl",37,2500000,"../img/shoe/nike/NIKE-Nam-DunkLowV1.png","Nam");
let shoe16=new Shoe(16,"Mbl4","Mbl",40,3500000,"../img/shoe/mbl/MBL-Nam-LinerV1.png","Nam");
let shoe17=new Shoe(17,"Mbl5","Mbl",38,10000,"../img/shoe/mbl/MBL-Nu-BigBallV2.png","Nu");
let shoe18=new Shoe(18,"Mbl6","Mbl",39,5000000,"../img/shoe/nike/NIKE-Nam-DunkLowV1.png","Nam");



arrayShoe.push(shoe5)
arrayShoe.push(shoe3)
arrayShoe.push(shoe9)
arrayShoe.push(shoe12)
arrayShoe.push(shoe4)
arrayShoe.push(shoe1)
arrayShoe.push(shoe6)
arrayShoe.push(shoe16)
arrayShoe.push(shoe2)
arrayShoe.push(shoe7)
arrayShoe.push(shoe8)
arrayShoe.push(shoe17)
arrayShoe.push(shoe15)
arrayShoe.push(shoe11)

arrayShoe.push(shoe18)
arrayShoe.push(shoe10)
arrayShoe.push(shoe13)
arrayShoe.push(shoe14)


