var donutEl = document.getElementById("donut").getContext("2d");
var donut = new Chart(donutEl).Doughnut(
    // Datas
    [
        {
            value: 20,
            color:"#ffb35e",
            highlight: "#ffb35e",
            label: "orange"
        },
        {
            value: 150,
            color: "#58deb6",
            highlight: "#58deb6",
            label: "Green"
        },
        {
            value: 100,
            color: "#62a7ff",
            highlight: "#62a7ff",
            label: "blue"
        },
        {
            value: 70,
            color: "#eeeeee",
            highlight: "#eeeeee",
            label: "gray"
        }
    ],
    // Options
    {
        segmentShowStroke : false,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 75,
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        animateScale: true
    });