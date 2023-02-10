const fs = require('fs');
const process = require('process');
const axios = require('axios')

function cat(path, outputText) {
    if(path.toLowerCase().startsWith('http')) {
        webCat(path)
    }
    else {
        if(outputText){
            handleOutput(path, outputText)
        }
        else{
            file_cat(path)
        }
    }
  }


function file_cat(path,outputText) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
          console.error(`Error reading ${path}: ${err}`);
          process.exit(1);
        } else {
          console.log(data);
          console.log(outputText)
        }
      });
}


async function webCat(url) {
    const res = await axios.get(url)
    console.log(res.data)
}
    

function handleOutput(path,text) {
    fs.writeFile(path,text, 'utf8', function(err) {
        if (err) {
            console.error((`Couldn't write ${out}: ${err}`));
            process.exit(1)
        }
    })
}
    

// cat('https://www.google.com/')
cat('mockfile.js', 'it worked, bruh');