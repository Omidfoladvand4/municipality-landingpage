const informationSBtn = document.querySelectorAll('.information-tab')
const tabDataElm = document.querySelector('.tab-data-list')
const filterBtn = document.querySelector('.filter-btn')


let tabListData = {
    Assistants :[ "  معاونت فنی و عمرانی", " معاونت محیط زیست و خدمات شهری", " معاونت حمل و نقل و ترافیک", "  معاونت شهرسازی و معماری"," معاونت برنامه ریزی و توسعه سرمایه انسانی",],

    Organizations:[" سازمان آتشنشانی و خدمات ایمنی"," سازمان فرهنگی، اجتماعی و ورزشی",  " سازمان عمران و بازآفرینی فضاهای شهری",
  " سازمان مدیریت پسماند",
  " سازمان مدیریت حمل و نقل مسافر",
  " سازمان مدیریت حمل و نقل بار",
  " سازمان آرامستان ها",
  " سازمان سرمایه گذاری و مشارکت های مردمی",
"   سازمان حمل و نقل ریلی",
  " سازمان ساماندهی مشاغل شهری و فرآورده های کشاورزی "],

    mainOffices: [" اداره کل حراست",
       " اداره کل بازرسی",
       " اداره کل ارتباطات و امور بین الملل",
       " اداره کل حسابرسی",
       " اداره کل سرمایه انسانی",
      "  اداره کل امور حقوقی",
       "  اداره کل تشخیص و وصول درآمد",
      " دفتر نوسازی و تحول اداری",
       " دفتر برنامه و بودجه",
     " اداره کل املاک و مستغلات,"],

    other: [
     "   امور بانوان شهرداری شیراز",
     "   هسته گزینش شهرداری",
       " اداره مدیریت بحران",
       " اداره تخلفات شهری",
       " امور ایثارگران",
      "  مدیریت ارتفاعات شهرداری شیراز",
      " اداره حوزه استحفاظی باغ های قصردشت",]
      
    }



informationSBtn.forEach(informationBtn => {
    informationBtn.addEventListener('click' ,  function (e) {
        informationSBtn.forEach(item  => {
        item.classList.remove('clicked')
  })
        e.target.classList.add('clicked')
        const mainBtnName = e.target.getAttribute('data-name')
        let mainObjData = tabListData[mainBtnName]
        tabDataElm.innerHTML = ''
       for(i = 0 ; i < mainObjData.length;  i++){
         const liElm = document.createElement('li')
         liElm.className = 'tab-data-item'
        liElm.textContent = mainObjData[i]
       tabDataElm.appendChild(liElm)
       }
        
    })
})




const filterClickHandler  = () =>{
  document.body.classList.toggle('filtered')
}




filterBtn.addEventListener('click' , filterClickHandler)