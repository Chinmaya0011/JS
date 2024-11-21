function callApi(status){
    return new Promise((res,rej)=>{
        if(status=="ok"){
            res("Data Fetch Sucessfyly")
        }
        rej("Failed!")
    })
}
callApi("okk")
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>[
    console.log("end")
])