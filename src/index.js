window.addEventListener("DOMContentLoaded",e=>{var n=function(){let e=document.body.querySelector("#mainNav");e&&(0===window.scrollY?e.classList.remove("navbar-shrink"):e.classList.add("navbar-shrink"))};n(),document.addEventListener("scroll",n);let t=document.body.querySelector("#mainNav");t&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",offset:74});let o=document.body.querySelector(".navbar-toggler"),r=[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));r.map(function(e){e.addEventListener("click",()=>{"none"!==window.getComputedStyle(o).display&&o.click()})});let i=["Plants","Bushes","Rocks","Pond Building","Garden Construction","Grass/Fern cutting"];for(let l=1;l<=6;l++)document.getElementById("btn"+l.toString()).onclick=function(){document.getElementById("done"+l.toString()).innerHTML="Your item has been added to your cart!",document.getElementById("btn"+l.toString()).hidden=!0,document.getElementById("cart").innerHTML="Cart ("+(parseInt(document.getElementById("cart").innerHTML[6])+1).toString()+")";let e=document.createElement("li");e.appendChild(document.createTextNode(i[l-1])),document.getElementById("incart").appendChild(e),document.getElementById("done7").innerHTML="",document.getElementById("checkout").hidden=!1};document.getElementById("btn7").onclick=function(){if("Cart (0)"===document.getElementById("cart").innerHTML)document.getElementById("done7").innerHTML="You have nothing in your cart!";else if(""===document.getElementById("address").value)document.getElementById("done7").innerHTML="Please enter your address.";else{document.getElementById("done7").innerHTML="Your order has been recieved! We're on our way!",document.getElementById("checkout").hidden=!0,document.getElementById("cart").innerHTML="Cart (0)",document.getElementById("incart").innerHTML="";let e=document.createElement("lh");e.appendChild(document.createTextNode("In cart:")),document.getElementById("incart").appendChild(e);for(let n=1;n<=6;n++)document.getElementById("done"+n.toString()).innerHTML="",document.getElementById("btn"+n.toString()).hidden=!1}};let d=[[6,16],[7,19],[7,19],[7,19],[7,19],[7,19],[12,16]];function a(){let e=new Date,n=e.getDay(),t=e.getHours(),o=e.getMinutes();t>=d[n][0]&&t<d[n][1]?(hToClose=60==o?d[n][1]-t:d[n][1]-t-1,60==(mToClose=60-o)?document.getElementById("open").innerHTML="We are available to answer your questions! The shop closes in "+hToClose.toString()+" hours.":0==hToClose?document.getElementById("open").innerHTML="We are available to answer your questions! The shop closes in "+mToClose.toString()+" minutes.":document.getElementById("open").innerHTML="We are available to answer your questions! The shop closes in "+hToClose.toString()+" hours and "+mToClose.toString()+" minutes."):(hToOpen=0,mToOpen=60-o,hToOpen=t<d[n][0]?60==o?d[n][0]-t:d[n][0]-t-1:60==o?d[(n+1)%7][0]-t+24:d[(n+1)%7][0]-t+23,60==mToOpen?document.getElementById("open").innerHTML="Our store is temporarily closed, but we open soon! The shop opens in "+hToOpen.toString()+" hours.":0==hToOpen?document.getElementById("open").innerHTML="Our store is temporarily closed, but we open soon! The shop opens in "+mToOpen.toString()+" minutes.":document.getElementById("open").innerHTML="Our store is temporarily closed, but we open soon! The shop opens in "+hToOpen.toString()+" hours and "+mToOpen.toString()+" minutes.")}a();let s=new Date,c=s.getSeconds();setTimeout(()=>{a(),setInterval(a,6e4)},(60-c)*1e3)});