var express = require('express');
var app = express();
app.use(express.static('img')); // public이라는 디렉토리를 정적인 디렉토리로 설정
//Home 으로 들어왔을때 
app.get('/' , function(req,res){
    res.send(`<style>
    body{
      padding-top:20px;
      background-image:url("/jeju1.jpg");
      background-attachment:fixed;
      background-size:cover;
      color: white;
    }
    .back{
      background-color: rgba(0,0,0,0.7);
    }
    
</style>
</head>
<body>
<h1> Hello </H1>
</body>
`);
});

app.listen(3000, function(){
    console.log('Connected 3000 port! ');
});


