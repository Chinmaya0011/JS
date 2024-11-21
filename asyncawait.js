async function myApi() {
    try{
let response=await fetch("https://random-data-api.com/api/v2/")
let data=await response.json()
console.log(data)
    }
    catch{
console.log("Error CHinm")
    }
}
myApi()