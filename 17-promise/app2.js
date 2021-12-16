const requete=(URL)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pages={
                "/users":[{id:1,nom:"Sébastien Rival"},{id:2,nom:"Toai Vu Do CHi"}],
                "/users/1":{id:1,nom:"Sébastien Rival"},
                "/users/2":{id:2,nom:"Toai Vu Do CHi"}
            }
            if(pages[URL]){
                resolve({
                    status:200,
                    data:pages[URL]
                })
            }else{
                reject({
                    status:404,
                    message:"not found"
                })
            }
        },4000)
    })
}

requete("/toto").then(response=>console.log(response)).catch(err=>console.error(err))

requete("/users").then(response=>console.log(response)).catch(err=>console.error(err))