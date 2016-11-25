var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool= require('pg').Pool;
var app = express();
app.use(morgan('combined'));

var articles = {
        'article-one' : {
        title : "Article one | Shrayan Banerjee",
        heading : "Article one",
        date : "Sep 5 , 2016",
        content: `<p><font color="687584">
        <b>DeepMind</b> Technologies Limited is a British artificial intelligence company founded in September 2010. It was acquired by Google in 2014. The company has created a neural network that learns how to play video games in a fashion similar to that of humans, as well as a Neural Turing Machine, or a neural network that may be able to access an external memory like a conventional Turing machine, resulting in a computer that mimics the short-term memory of the human brain.
        
        The company made headlines in 2016 after its AlphaGo program beat a human professional<b> Go </b> player for the first time.
        </font></p>
        <p><font color="688484">
        <b>DeepMind</b> Technologies Limited is a British artificial intelligence company founded in September 2010. It was acquired by Google in 2014. The company has created a neural network that learns how to play video games in a fashion similar to that of humans, as well as a Neural Turing Machine, or a neural network that may be able to access an external memory like a conventional Turing machine, resulting in a computer that mimics the short-term memory of the human brain.
        
        The company made headlines in 2016 after its AlphaGo program beat a human professional<b> Go </b> player for the first time.
        </font></p>
        
        <p><font color="681184">
        <b>DeepMind</b> Technologies Limited is a British artificial intelligence company founded in September 2010. It was acquired by Google in 2014. The company has created a neural network that learns how to play video games in a fashion similar to that of humans, as well as a Neural Turing Machine, or a neural network that may be able to access an external memory like a conventional Turing machine, resulting in a computer that mimics the short-term memory of the human brain.
        
        The company made headlines in 2016 after its AlphaGo program beat a human professional<b> Go </b> player for the first time.
        </font></p>`
},
        'article-two' : {
            title : "Article two | Shrayan Banerjee",
        heading : "Article two",
        date : "Sep 10 , 2016",
        content: `<p><font color="687584">
        <b>DeepMind</b> Technologies Limited is a British artificial intelligence company founded in September 2010. It was acquired by Google in 2014. The company has created a neural network that learns how to play video games in a fashion similar to that of humans, as well as a Neural Turing Machine, or a neural network that may be able to access an external memory like a conventional Turing machine, resulting in a computer that mimics the short-term memory of the human brain.
        
        The company made headlines in 2016 after its AlphaGo program beat a human professional<b> Go </b> player for the first time.
        </font></p>
        <p><font color="688484">
        <b>DeepMind</b> Technologies Limited is a British artificial intelligence company founded in September 2010. It was acquired by Google in 2014. The company has created a neural network that learns how to play video games in a fashion similar to that of humans, as well as a Neural Turing Machine, or a neural network that may be able to access an external memory like a conventional Turing machine, resulting in a computer that mimics the short-term memory of the human brain.
        
        The company made headlines in 2016 after its AlphaGo program beat a human professional<b> Go </b> player for the first time.
        </font></p>
        
        <p><font color="681184">
        <b>DeepMind</b> Technologies Limited is a British artificial intelligence company founded in September 2010. It was acquired by Google in 2014. The company has created a neural network that learns how to play video games in a fashion similar to that of humans, as well as a Neural Turing Machine, or a neural network that may be able to access an external memory like a conventional Turing machine, resulting in a computer that mimics the short-term memory of the human brain.
        
        The company made headlines in 2016 after its AlphaGo program beat a human professional<b> Go </b> player for the first time.
        </font></p>`
            
        },
        'article-three' : {
            title : "Article three | Shrayan Banerjee",
        heading : "Article three",
        date : "Sep 15 , 2016",
        content: `<p><font color="687584">
        <b>DeepMind</b> Technologies Limited is a British artificial intelligence company founded in September 2010. It was acquired by Google in 2014. The company has created a neural network that learns how to play video games in a fashion similar to that of humans, as well as a Neural Turing Machine, or a neural network that may be able to access an external memory like a conventional Turing machine, resulting in a computer that mimics the short-term memory of the human brain.
        
        The company made headlines in 2016 after its AlphaGo program beat a human professional<b> Go </b> player for the first time.
        </font></p>
        <p><font color="688484">
        <b>DeepMind</b> Technologies Limited is a British artificial intelligence company founded in September 2010. It was acquired by Google in 2014. The company has created a neural network that learns how to play video games in a fashion similar to that of humans, as well as a Neural Turing Machine, or a neural network that may be able to access an external memory like a conventional Turing machine, resulting in a computer that mimics the short-term memory of the human brain.
        
        The company made headlines in 2016 after its AlphaGo program beat a human professional<b> Go </b> player for the first time.
        </font></p>
        
        <p><font color="681184">
        <b>DeepMind</b> Technologies Limited is a British artificial intelligence company founded in September 2010. It was acquired by Google in 2014. The company has created a neural network that learns how to play video games in a fashion similar to that of humans, as well as a Neural Turing Machine, or a neural network that may be able to access an external memory like a conventional Turing machine, resulting in a computer that mimics the short-term memory of the human brain.
        
        The company made headlines in 2016 after its AlphaGo program beat a human professional<b> Go </b> player for the first time.
        </font></p>`
        },
};
var config = {
    user: 'ryanininertia21',
    database :'ryanininertia21',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: db-ryanininertia21-44268,
};
        
function createtemplate (data) 
{
    var title= data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplate=`
<!doctype html>
<html>
<body>
<link href="/ui/style.css" rel="stylesheet" />

<div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <h1>
        This is my first article about deep mind 
    </h1>
    <div>
    ${date}
    </div>
        <div>
    ${content}
</div>
</body>
</html>
`;
return htmltemplate;
}
app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'ui','index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
  counter=counter+1;
  res.send(counter.toString());
});
var pool = new Pool(config);
app.get('/test-db' , function(req,res){
pool.query('SELECT * FROM TEST ', function(err,result) {
    if (err ) {
        res.status(500).send(err.toString());
    } else
    {
res.send(JSON.stringify(result));        
    }
   });
});


app.get('/:articleName', function (req, res) {
  var articleName= req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
