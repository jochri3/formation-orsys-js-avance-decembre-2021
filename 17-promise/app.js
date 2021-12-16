//Bases
const rendreVisiteAMonAmie=new Promise((tenue,echoue)=>{
    const heure=17;
    if(heure>16){
        echoue("Désolé, j'ai une urgence de dernière minute au bureau")
    }else{
        tenue("Je suis en route")
    }
})


// rendreVisiteAMonAmie.then((data)=>{
//     console.log("resultat : ",data)
// }).catch((err)=>{
//     console.error("erreur : ",err)
// })

// Vrai use case
const rendreVisiteAMonAmie2=(heure)=>{
    return new Promise((tenue,echoue)=>{
    if(heure>16){
        echoue(`Il est déjà ${heure} heure,Désolé, j'ai une urgence de dernière minute au bureau`)
    }else{
        tenue(`Il est ${heure} heure,Je suis en route`)
    }
})
}


rendreVisiteAMonAmie2(12).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.error(err)
})


rendreVisiteAMonAmie2(17).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.error(err)
})

