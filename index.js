const express = require('express');
const fs = require('fs');
const app = express();

const port = 8000;

app.get('/',(req,res) => {
    const filePath ='input.csv';
    
    fs.readFile(filePath, 'utf8', (error, data) => {
        if(error) {
            console.error(error);
            return;
        }
        // console.log(data);
        // const arr = data.map((item) => item.split(','));
        const arr = data.split('\n').map((item) => item.split(','));
        const headers = arr[0];
        const result = [];

        for(let i=1; i<arr.length; i++) {
            const currentLine = arr[i];
            const obj = {};

            for(let j=0; j<headers.length; j++) {
                obj[headers[j]] = currentLine[j];
            }
            result.push(obj);
        }
        res.json(result);
    });
})

app.listen(8000, () => {
    console.log('Server is running on port '+port);   
})