fetch("https://randomuser.me/api/")
.then((response)=>{if(!response.ok){throw new Error("Some Erro")} return response.json()})
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })