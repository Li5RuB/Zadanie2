var fs = require('fs')
sha3_256 = require('js-sha3').sha3_256;
fs.readdir(process.cwd(), (err, files) => {
    files.forEach(file => {
        fs.readFile(process.cwd()+'\\'+file,'utf8',function(error,data){
            console.log(file+" "+sha3_256(data)
            )})
        });
    });