const fetch = require('node-fetch');
const getindexApi  = () =>{
    fetch('#',{
        method: 'GET'
    })
    .then(res => res.json())
    .then(result => {
        result.mahasiswa.map(data =>{
            console.log(data.text)
         })
        // console.log(result)
    })
}
// const postApi  = () =>{
//     const data ={
//         no: '1',
//         catalog: 'test',
//         notes: 'test'
//     }
//     fetch('https://api-frontend.kemdikbud.go.id/hit_mhs/200511086',{
//         method: 'POST',
//         headers: {
//             'Content-Type: application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(result => {
//         console.log(result)
//     })
// }

getindexApi()
