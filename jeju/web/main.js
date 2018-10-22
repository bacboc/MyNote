var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'153624',
  database: 'tourmaker'
});
db.connect();
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;


    // if(pathname==='/'){ // root
    //   if(queryData.id === undefined){
    //     fs.readdir('./')
    //   }
    // } 

    if(_url == '/'){ // Root
      title = "welcome";
    }    
    if(_url == '/favicon.ico'){
      	response.writeHead(404);
	     	response.end('Not found');
		    return;
    }

    response.writeHead(200);
    db.query(`SELECT * FROM tweeter WHERE content LIKE '%애월%'`, function(err, topics){
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, desciption){
      template = `
  <!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 위 3개의 메타 태그는 *반드시* head 태그의 처음에 와야합니다; 어떤 다른 콘텐츠들은 반드시 이 태그들 *다음에* 와야 합니다 -->
    <title> ${title} </title>

    <!-- 부트스트랩 -->
    <link href="tool/css/bootstrap.min.css" rel="stylesheet">
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=AlWeVmj86pAZl3ts8CpR&submodules=geocoder"></script>
    <style>
        body{
          padding-top:20px;
          background-image:url("img/jeju1.jpg");
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
    <div class="navbar-wrapper">
      <div class="container">

        <nav class="navbar navbar-inverse navbar-static-top back">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">JEJU</a>
            </div>

            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="/">Home</a></li>
                <li><a href="/?id=index"> 제주 여행지 추천 </a></li>
                <li><a href="/?id=index1"> 제주 여행 Review </a></li>
                <li><a href="/?id=index2"> 제주 현황 </a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> #### <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">#1</a></li>
                    <li><a href="#">#2</a></li>
                    
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  <div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8 back">
    <!-- 본문 내용 채우기 -->
      <h1> ${title} </h1>
      ${desciption}

    </div>
    <div class="col-sm-2">
    </div>
    </div>
    <!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
    <script src="tool/js/bootstrap.min.js"></script>
  </body>
  </html>
      `;
      response.end(template);
    });
    });
    
    //response.end(fs.readFileSync(__dirname + _url));

});

app.listen(3000);






// var fs = require('fs');
// fs.readFile('sample.txt', 'utf8', function(err, data){
//   console.log(data);
// });