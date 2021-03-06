
async function ApiRest (API) {
       try{
        const res = await fetch(API)
        .then(response => response.json())
        return res
       }
       catch{
           console.log("Sucedio algo")
       } }
      
(async function(){
if(localStorage.getItem('lista')){
    return document.getElementById('items').innerHTML=localStorage.getItem('lista')
}
const respo = await ApiRest('https://pokeapi.co/api/v2/pokemon/')
const lista = respo.results.map((resp)=>{
   return `<li>${resp.name}</li>`
}).join("")
localStorage.setItem('lista',lista)
document.getElementById('items').innerHTML=lista
})()

document.getElementById('deleteStorage').addEventListener('click',function(){
    localStorage.removeItem('lista')
    window.location.replace('https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch')
})
