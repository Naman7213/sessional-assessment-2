let btn1=document.getElementById("search_bar_button");
btn1.addEventListener("click",(e)=>{
    e.preventDefault();
    let url="https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4 && xhr.status===200){
            console.log(xhr.responseText);
        }
    }
    xhr.send();
})