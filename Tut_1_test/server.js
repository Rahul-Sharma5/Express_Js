const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

/* console.log(app.get('view engine')); */

console.log(app.get('views'));

app.use(express.static('public'));

/* res.send('<h1>Hello From Express.....</h1>'); */

app.get('/', (req, res) =>{    
    res.sendFile(path.resolve(__dirname) + '/index.html');
});

app.get('/about', (req, res) =>{    
    res.sendFile(path.resolve(__dirname) + '/about.html');
});

app.get('/download', (req, res) =>{    
    res.download(path.resolve(__dirname) + '/about.html');
});

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});

/* app.listen(3000, () =>{
    console.log('Listening on port 3000');
}); */