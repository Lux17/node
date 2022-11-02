const fetch = require('node-fetch');
const getindexApi  = () =>{
    fetch('https://api-frontend.kemdikbud.go.id/hit_mhs/200511086',{
        method: 'GET'
    })
    .then(res => res.json())
    .then(result => {
        console.log(result)
    })
}
getindexApi()