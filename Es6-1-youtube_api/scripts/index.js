


let search= ()=> {
    let query=document.getElementById('query').value;
    getData(query)
}

let api_key="AIzaSyDSAhIgUlAtZmMZQBmJcuLAJQsLWjIyN1E"
let getData=async (query)=> {
    let url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
    let res= await fetch(url)
   let data=await res.json();
    console.log(data.items)
   append(data.items)
}

let append=(data)=> {
    let container=document.getElementById("container")
    container.innerHTML=null;
    data.forEach(el => {
        
        container.setAttribute("id","container");
        let img=document.createElement("img");
        img.src=el.snippet.thumbnails.medium.url;
        let title=document.createElement("h3")
        title.innerText=el.snippet.title;
        let div = document.createElement('div')
        div.setAttribute("class","box")
       div.append(img,title)
       container.append(div);
       console.log(img)
    });
}