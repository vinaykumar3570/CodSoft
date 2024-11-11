  window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // document.getElementById("navbar").style.background = "#010024    ";
    document.getElementById("navbar").style.boxShadow = " 2px 2px 7px #7a7a7a8a";

  } else {
    // document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.boxShadow = "none";
  }
}

function check(){
  document.getElementById("check").checked = false;
}

let flag = true;
function themeChange(){
  if (flag){
    document.querySelector(':root').style.setProperty('--profile-bg', 'royalblue' )
    document.querySelector(':root').style.setProperty('--bg-color', '#f8f8f8' )
    document.querySelector(':root').style.setProperty('--secondary-color', '#DBDBDB' )
    document.querySelector(':root').style.setProperty('--white-color', '#000' )
    document.querySelector(':root').style.setProperty('--profile-corner', '#000020' )
    document.querySelector(".fa-sun").classList.add("fa-moon");
    document.querySelector(".bg").style.opacity = .3;
    flag = false
  }
  else{
    document.querySelector(':root').style.setProperty('--profile-bg', '#000816' )
    document.querySelector(':root').style.setProperty('--bg-color', '#010024' )
    document.querySelector(':root').style.setProperty('--secondary-color', '#010046' )
    document.querySelector(':root').style.setProperty('--white-color', '#fff' )
    document.querySelector(':root').style.setProperty('--profile-corner', '#aba9ff' )
    document.querySelector(".fa-sun").classList.remove("fa-moon");
    document.querySelector(".bg").style.opacity = .7;
    flag = true
  }
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a")

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')
    console.log(top + " , " + offset)

    // if(top > offset && top < offset + height){
    //   navLinks.forEach(links => {
    //     links.classList.remove('active')
    //     document.querySelector('nav ul li a [href*=' + id + ']').classList.add('active')
    //   })
    // }
  })
}
