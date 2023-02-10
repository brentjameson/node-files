const fs = require('fs');
const process = require('process');
const axios = require('axios')

function cat(path) {
    if(path.toLowerCase().startsWith('http')) {
        webCat(path)
    }
    else {
        file_cat(path)
    }
  }


function file_cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
          console.error(`Error reading ${path}: ${err}`);
          process.exit(1);
        } else {
          console.log(data);
        }
      });
}


async function webCat(url) {
    const res = await axios.get(url)
    console.log(res.data)
}

cat('https://www.google.com/')
cat(process.argv[1]);
