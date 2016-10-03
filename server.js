var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var article={
'article-one':{
    title: "Article-one the first",
    heading: "Article- one",
    date: "Sep 30",
    content: '<p>This text shows the body of an html page</p>'
       
},
'article-two':{
    title: "Article-two the second",
    heading: "Article- two",
    date: "Sep 6",
    content: '<p>This text shows the body of an html page</p>'
},
'article-three':{
    title: "Article-three the third",
    heading: "Article- three",
    date: "Sep 8",
    content: '<p>This text shows the body of an html page</p>'
}
};
var createTemplate=function(data)
{
    
var title=data.title;
var heading =data.heading;
var content=data.content;

var htmlTemplate='<!DOCTYPE html><html><head><title> '+title+'</title>\
                <link href="/ui/style.css" rel="stylesheet" />\
                <meta name="viewport" content="width=device-width, initial-scale=1.0">\
                </head>\
                <body>\
                <div class="container">\
                <div>\
                <a href="/"><h5>Home </h5></a>\
                </div>\
                <hr/>\
                <h3>\
                '+heading+'\
                </h3>\
                <p>'+content+' </p>\
                </div>\
                </body>\
                </html>'
                ;
                return htmlTemplate;
};
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(article[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log("IMAD course app listening on port"+ port+"!");
});
