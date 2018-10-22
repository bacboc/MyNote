var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'153624',
	database: 'tourmaker'
});
db.connect();
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url === '/'){
      url = '/home.html';

      db.query(`SELECT * FROM tweeter WHERE content LIKE '%애월%'`, function(err, topics){
      	var list = template.list(topics);
      	html=`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 위 3개의 메타 태그는 *반드시* head 태그의 처음에 와야합니다; 어떤 다른 콘텐츠들은 반드시 이 태그들 *다음에* 와야 합니다 -->
    <title>ByoungChan</title>

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
                <li class="active"><a href="./home.html">Home</a></li>
                <li><a href="./index.html"> 제주 여행지 추천 </a></li>
                <li><a href="./index1.html"> 제주 여행 Review </a></li>
                <li><a href="./index2.html"> 제주 현황 </a></li>
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
 	<!-- 본문 내용 채우기 -->
 	<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8 back">
      <h1> Jeju </h1>
    ${topics}

    </div>
    <div class="col-sm-2">
    </div>
  </div>

    <!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
    <script src="tool/js/bootstrap.min.js"></script>
  </body>
</html>`;

      });
    }
    if(request.url == '/favicon.ico'){
      	response.writeHead(404);
		response.end();
		return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);