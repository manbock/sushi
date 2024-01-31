//header
let scrollHeader = () => {
  let header = document.querySelector("#header");
  //pageYOffset >=50?A:B;//조건문이 참이면 A가 실행되고 거짓이면 B가 실행된다.
  pageYOffset >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

//배경테마 변경
let themeButton = document.getElementById("theme-button");
let iconTheme = "ri-sun-line";
let darkTheme = "dark-theme";

let getCurrentTheme = () => {
  //document.body.classList.contains(darkTheme)==>body가 class명 dark-theme를 가지고 있는가? true/false
  let result = document.body.classList.contains(darkTheme) ? "dark" : "light";
  return result;
};

let getCurrentIcon = () => {
  let result = themeButton.classList.contains(iconTheme)
    ? "ri-moon-line"
    : "ri-sun-line";

  return result;
};

//웹의 스토어에 값셋팅
//localStorage.setItem() --> 웹 스토어에 값을 입력
//localStorage.getItem()  -->  웹 스토어의 값을 가져올때

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
//console.log(selectedTeme);

if (selectedTheme) {
  if (selectedTheme == "dark") {
    document.body.classList.add(darkTheme);
  } else {
    document.body.classList.remove(darkTheme);
  }

  if (selectedIcon == "ri-moon-line") {
    themeButton.classList.add(iconTheme);
  } else {
    themeButton.classList.remove(iconTheme);
  }
}



// 모바일 메뉴 보이기

let navToggle=document.getElementById("nav_toggle");
let navMenu=document.getElementById("nav_menu");
let navClose=document.getElementById("nav_close");

navToggle.addEventListener("click",()=>{
  navMenu.classList.add('show-menu')
})

navClose.addEventListener("click",()=>{
  navMenu.classList.remove('show-menu')
})





// 전체화면 애니메이션(ScrollReveal)
ScrollReveal().reveal('.home_img,.home_data,.about_data,.about_img,.popular_card,.recently_img,.recently_data,.footer_description,.footer_content,.footer_info', {
  delay: 400,
  duration: 2500,
  // reset: true
  origin:"top",
  distance: '60px',
});

ScrollReveal().reveal('.home_data', {origin:'bottom'})
ScrollReveal().reveal('.about_data,.recently_data', {origin:'left'})
ScrollReveal().reveal('.about_img,.recently_img', {origin:'right'})


ScrollReveal().reveal('.popular_card', {origin:'top',
  interval:300
})

// scrollup
let scrollup=()=>{
  let scrollup=document.getElementById("scroll-up")
  scrollY>=350?scrollup.classList.add('show-scroll')
  :scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollup)

//menu
let scrollActive=()=>{
  let scrollY=pageYOffset
  let sections=document.querySelectorAll('section[id]');//id속성이 있는 section 태그를 가져옴.
  // console.log(sections)
  sections.forEach((current)=>{
    let sectionHeight=current.offsetHeight; //현재 불러온 section높이값
    let sectionTop=current.offsetTop - 60;//현재 불러온 section의 top값
    
    let sectionId=current.getAttribute('id');//section의 id속성
    // console.log(sectionId)

    let sectionClass=document.querySelector(`.nav_menu a[href*="${sectionId}"]`)
    console.log(sectionClass)
    //↪ a[href*="home"]  a태그의 href속성중 "home"을 포함하는 a태그들

    if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll',scrollActive)