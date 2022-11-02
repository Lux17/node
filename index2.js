const fs = require('fs');


fs.writeFile('filename.txt', 'hallo world', function(err){
    if (err) throw err;
    console.log('Saved!!')
});

fs.appendFile('filename.txt', 'nama  saya lucky', function(err){
    if (err) throw err;
    console.log('Ditambah!!')
});

// fs.rename('filename.txt', 'filename2.txt', function(err){
//     if (err) throw err;
//     console.log('Rename!!')
// });

// fs.unlink('filename2.txt', function(err){
//     if (err) throw err;
//     console.log('Delete!!')
// });