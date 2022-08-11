// let btn1=document.getElementById("search_bar_button");
// var search_id = document.getElementById("search_bar").value;
// btn1.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let url=`https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;
//     let xhr=new XMLHttpRequest();
//     xhr.open("GET",url);
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState===4 && xhr.status===200){
//             var res = JSON.parse(xhr.responseText);
//             console.log(res[0].name);
//         }
//     }
//     xhr.send();
// })

document.querySelector("#search_bar_button").addEventListener("click",(e)=>{
    e.preventDefault();
    var xhr=new XMLHttpRequest();
    var search_id = document.querySelector("#search_bar").value;
    const url=`https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;
    
    xhr.open("GET",url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4 && xhr.status===200){
            var res = JSON.parse(xhr.responseText);
            // console.log(res[search_id].name);
            document.querySelector("#id").innerHTML=res[search_id-1].id;
            document.querySelector("#name").innerHTML=res[search_id-1].name;
            document.querySelector("#username").innerHTML=res[search_id-1].username;
            document.querySelector("#email").innerHTML=res[search_id-1].email;
            document.querySelector("#street").innerHTML=res[search_id-1].address.street;
            document.querySelector("#suite").innerHTML=res[search_id-1].address.suite;
            document.querySelector("#city").innerHTML=res[search_id-1].address.city;
            document.querySelector("#zipcode").innerHTML=res[search_id-1].address.zipcode;
            document.querySelector("#phone").innerHTML=res[search_id-1].phone;
            document.querySelector("#website").innerHTML=res[search_id-1].website;
            document.querySelector("#company").innerHTML=res[search_id-1].company.name;
        }
    }
    xhr.send();
})