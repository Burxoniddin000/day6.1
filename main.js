let elInput = document.querySelector('input');
let elbtn = document.querySelector('button');
let eltaxt = document.querySelector('#name');

elInput.addEventListener("change", function () {
    let valu = elInput.value;
    if (valu == 1) {
        eltaxt.textContent = ('Dushanba');
    } else if(valu == 2) {
        eltaxt.textContent = ('Seshanba');
    } else if(valu == 3) {
        eltaxt.textContent = ('Chorshanba');
    } else if(valu == 4) {
        eltaxt.textContent = ('Payshanba');
    } else if(valu == 5) {
        eltaxt.textContent = ('Juma');
    } else if(valu == 6) {
        eltaxt.textContent = ('Shanba');
    } else if(valu == 7) {
        eltaxt.textContent = ('Yakshanba');
    } else{
        eltaxt.textContent = ('Iltimos 1da 7gacha b\'lgan sonlardi yozing');
    }
});