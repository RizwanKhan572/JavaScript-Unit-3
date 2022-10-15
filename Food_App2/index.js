


let url =`https://www.themealdb.com/api/json/v1/1/random.php`
console.log(url)

  getData(url)
async function getData(url) {

    let res= await fetch(url);
    let data= await res.json()
    console.log(data.meals)

    append(data.meals)
 }

 function append(meals) {
    meals.forEach((el,i)=>{
        let img = document.createElement("img")
          img.src=el.strMealThumb;
          img.style.width="20%"
          let name =document.createElement("h1")
          name.innerText=el.strMeal;
          let h2 =document.createElement("h2")
          h2.innerText="Recepies"
          h2.setAttribute("class","rece")

          let i1= document.createElement("h4")
          i1.innerText=el.strIngredient1;
          
          let i2= document.createElement("h4")
          i2.innerText=el.strIngredient2;
          let i3= document.createElement("h4")
          i3.innerText=el.strIngredient3;
          let i4= document.createElement("h4")
          i4.innerText=el.strIngredient4;
          let i5= document.createElement("h4")
          i5.innerText=el.strIngredient5;
         
          let box= document.createElement("div")
          box.setAttribute("class","box")
          box.append(img,name,h2,i1,i2,i3,i4,i5)
          
          document.getElementById("meals").append(box)
    })
 }
