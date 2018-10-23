var myChart = {
  "type": "bar",
  "title": {
    "text": "",
    "fontSize": 40
  },
  "subtitle": {
    "text": "마우스를 올리면 TOP5 키워드를 볼 수 있습니다."
  },
  "plot": {
    "value-box":{
      "text":"%v"
    },
    "tooltip":{
      "rules": [{ //Rule 1
        "rule": "%v == 6457",
        "text": "[2월의 키워드]<br>애월읍 87<br>우도 79<br>한라산 51<br>성산일출봉 35<br>섭지코지 29",
        "background-color": "#000000"
      }, { //Rule 2
        "rule": "%v == 9076",
        "text": "[3월의 키워드]<br>애월읍 229<br>해안도로 121<br>서귀포 94<br>우도 73<br>섭지코지 66",
        "background-color": "#000000"
      }, { //Rule 3
        "rule": "%v == 5218",
        "text": "[4월의 키워드]<br>애월읍 112<br>오름 44<br>섭지코지 35<br>비자림 30<br>김녕해수욕장 30",
        "background-color": "#000000"
      }, { //Rule 4
        "rule": "%v == 13823",
        "text": "[5월의 키워드]<br>애월읍 129<br>한라산 104<br>쇠소깍 54<br>우도 50<br>테라로사카페 43",
        "background-color": "#000000"
      }, { //Rule 5
        "rule": "%v == 38288",
        "text": "[6월의 키워드]<br>한라산 1045<br>올레길 264<br>서귀포 124<br>애월읍 99<br>오름 82",
        "background-color": "#000000"
      }, { //Rule 6
        "rule": "%v == 14798",
        "text": "[7월의 키워드]<br>한라산 394<br>올레길 84<br>애월읍 72<br>게스트하우스 56<br>협재해수욕장 35",
        "background-color": "#000000"
      }, { //Rule 7
        "rule": "%v == 13366",
        "text": "[8월의 키워드]<br>한라산 301<br>애월읍 108<br>해변 102<br>올레길 91<br>비자림 41",
        "background-color": "#000000"
      }, { //Rule 8
        "rule": "%v == 21018",
        "text": "[9월의 키워드]<br>한라산 570<br>올레길 143<br>횟집 123<br>중문동 102<br>협재해수욕장 72",
        "background-color": "#000000"
      }, { //Rule 9
        "rule": "%v == 26697",
        "text": "[10월의 키워드]<br>한라산 565<br>우도 490<br>성산읍 278<br>올레길 133<br>에코랜드 99",
        "background-color": "#000000"
      }],
      "font-color": "white",
      "font-size" : "13",
      "font-weight": "bold",
      "alpha": 0.5,
      "border-color": "#000001",
      "border-width": 1,
      "padding": "20%",
      "border-radius": "9px"
    },
    "animation": {
      "delay": "100",
      "effect": "4",
      "method": "5",
      "sequence": "3"
    }
  },
  "series": [
    {
      "values": [["2월", 6457],
      ["3월", 9076],
      ["4월", 5218],
      ["5월", 13823],
      ["6월", 38288],
      ["7월", 14798],
      ["8월", 13366],
      ["9월", 21018],
      ["10월", 26697]
    ]
    }
  ]
};
zingchart.render({
  id: "myChart",
  data: myChart,
  height: "500",
  width: "100%"
});