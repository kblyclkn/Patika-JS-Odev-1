let fullName = prompt("Lütfen Adınızı Yazınız")
let myName = document.querySelector("#myName")
myName.innerHTML = `${fullName}`

function tarihSaat() { // tarihSaat adında bir function oluşturduk
    var date = new Date().toLocaleString(); // date değişkeni oluşturduk ve new date metodu ile tarihi aldık toLocaleString ile bulunduğumuz bölgenin saatini aldık
    document.querySelector("#myClock").innerHTML = date; // myClock id li elemente yazdır
}

setInterval(tarihSaat, 1000); // saniyenin artması için setinterval özelliğini kullandık
