var myChart = {
  "type": "bar",
  "title": {
    "text": "",
    "fontSize": 40
  },
  "subtitle": {
    "text": ""
  },
  "plot": {
    "value-box":{
      "text":"%v"
    },
    "tooltip":{
      "rules": [{ //Rule 1
        "rule": "%v == 6457",
        "text": "2월의 키워드",
        "background-color": "#000000"
      }, { //Rule 2
        "rule": "%v == 9076",
        "text": "3월의 키워드",
        "background-color": "#000000"
      }, { //Rule 3
        "rule": "%v == 5218",
        "text": "4월의 키워드",
        "background-color": "#000000"
      }, { //Rule 4
        "rule": "%v == 13823",
        "text": "5월의 키워드",
        "background-color": "#000000"
      }, { //Rule 5
        "rule": "%v == 38288",
        "text": "6월의 키워드",
        "background-color": "#000000"
      }, { //Rule 6
        "rule": "%v == 14798",
        "text": "7월의 키워드",
        "background-color": "#000000"
      }, { //Rule 7
        "rule": "%v == 13366",
        "text": "8월의 키워드",
        "background-color": "#000000"
      }, { //Rule 8
        "rule": "%v == 21018",
        "text": "9월의 키워드",
        "background-color": "#000000"
      }, { //Rule 9
        "rule": "%v == 26697",
        "text": "10월의 키워드",
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