const inputwrapper = document.querySelector('main')
const formEl = document.querySelector("form")
const img=document.querySelector("img") 
const p=document.querySelector("p")
const one=document.getElementById("one")
const two=document.getElementById("two")

formEl.addEventListener('submit', function(e) {
    e.preventDefault()
const ism=formEl.ism.value
const vazn=formEl.vazn.value
const boy=formEl.boy.value/100
let bharf=ism.charAt(0).toUpperCase()
let davomi=ism.slice(1).toLowerCase()
let result=bharf+davomi
let bmi = vazn/boy**2
one.style.display='none'
two.style.display='block'
if  (bmi<18.5) {
    p.textContent=`${result} siz juda ozg'insiz😫`
    document.body.style.backgroundColor="orangered"
   

    
}

else if (bmi>18.5 && bmi<=24.9) {
p.textContent=` ${result} siz normal vaznli insonsiz😊`
document.body.style.backgroundColor="orangered"


}
else if (bmi>25 && bmi<=29.9) {
    p.textContent=`${result} siz ortiqcha vaznli insonsiz😮`
    document.body.style.backgroundColor="orangered"
    }

else if (bmi>30) {
        p.textContent=`${result} siz semirib ketgansiz☹`       
        document.body.style.backgroundColor="orangered"
    }
       


})