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