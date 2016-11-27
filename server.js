var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

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
app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'ui','contact.html'));
});
app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'ui','login.html'));
});
app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'ui','post.html'));
});
var counter=0;
app.get('/counter',function(req,res){
  counter=counter+1;
  res.send(counter.toString());
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
