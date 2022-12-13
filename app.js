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
if  (bmi<18.5) {
    p.textContent=`${result} siz juda ozg'insiz😫`
    img.src="https://b7.pngbarn.com/png/311/102/cartoon-graphy-drawing-thin-png-clip-art.png"
    document.body.style.backgroundColor="orangered"
    img.width="400px"
    img.height="400px"
}

else if (bmi>18.5 && bmi<=24.9) {
p.textContent=` ${result} siz normal vaznli insonsiz😊`
img.src="https://img1.pnghut.com/20/2/11/0CyGQeNCF5/cartoon-scalable-vector-graphics-tuxedo-businessperson-business.jpg"
document.body.style.backgroundColor="orangered"
img.width="400px"
img.height="400px"


}
else if (bmi>25 && bmi<=29.9) {
    p.textContent=`${result} siz ortiqcha vaznli insonsiz😮`
    img.src="https://yandex.ru/images/search?pos=13&from=tabbar&img_url=http%3A%2F%2Fw7.pngwing.com%2Fpngs%2F352%2F232%2Fpng-transparent-the-fat-man-fat-overweight.png&text=plump+person+png&rpt=simage&lr=10336"
    document.body.style.backgroundColor="orangered"
    img.width="400px"
    img.height="400px"
    }

else if (bmi>30) {
        p.textContent=`${result} siz semirib ketgansiz☹`       
        img.src="https://yandex.ru/images/search?p=2&text=plump+person+icon&pos=88&rpt=simage&img_url=http%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F888%2F72%2Fpng-clipart-barbell-mime-barbell-fat-material-png-material-child.png&from=tabbar&lr=10336"
        document.body.style.backgroundColor="orangered"
        img.width="400px"
        img.height="400px"
    }
       


})