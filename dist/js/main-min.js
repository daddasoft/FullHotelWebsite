var button=document.getElementById("submit"),error=document.getElementById("error"),theName=document.getElementById("name"),email=document.getElementById("email"),message=document.getElementById("message"),emailReg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;function Validate(){return theName.value.length<5?"The Name Should Be Between 5 Characters or More":emailReg.test(email.value)?message.value.length<10?"The Message Should Have at Least 10 Characters":null:"Email Not Valid See If The Email Follow This Format : example@company.domain"}button&&button.addEventListener("click",function(){null!=Validate()?(error.textContent=Validate(),error.style.display="block",error.style.background="#f8d7da",setTimeout(function(){error.style.display="none",error.textContent=null},2e3)):(error.textContent="Thank You",error.style.display="block",error.style.background="#2ecc71",setTimeout(function(){error.style.display="none"},3e3))});var menu=document.getElementById("menu"),nav=document.querySelector(".company"),list=document.querySelector(".company__nav"),isOpened=!1;menu&&(menu.addEventListener("click",function(){isOpened?(list.style.display="none",nav.style.height="auto",menu.style.backgroundImage="url('icons/menu.svg')",isOpened=!1):(list.style.display="block",nav.style.height="140px",menu.style.backgroundImage="url('icons/close.svg')",isOpened=!0)}),window.addEventListener("resize",function(){window.innerWidth>432?(list.style.display="block",menu.style.display="none",menu.style.backgroundImage="url('icons/menu.svg')"):(list.style.display="none",menu.style.display="block",nav.style.height="auto")}));