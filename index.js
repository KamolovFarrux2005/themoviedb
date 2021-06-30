const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const request = require('request');


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')

app.use(express.static('public'));


app.get('/results',(req, resp) =>{

    let query = req.query.search;
    request('https://api.themoviedb.org/3/search/movie?api_key=45a1f14b21ea6e2b2d9fe853154d0f71&query='+query, (error, res, body) => {
    if(error){
        console.error('error:', error);
    }
    
    let data =  JSON.parse(body);
    
    resp.render('movies', { data, searchHeading: query})
});
});





app.get('/', (req, res)=>{
    res.render('search')
})


app.listen(process.env.PORT || 3000, ()=>{
    console.log('ss');
})