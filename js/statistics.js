


var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
var month_dataset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var ctx = document.getElementById("myChart").getContext('2d');

var gradient = ctx.createLinearGradient(0, 0, 900, 0);
gradient.addColorStop(0, 'rgba(254, 199,139, 0.1)');
gradient.addColorStop(0.5, 'rgba(254, 107, 121, 0.2)');

var purple_orange_gradient = ctx.createLinearGradient(0,0,600,0);
purple_orange_gradient.addColorStop(0, '#ffb767');
purple_orange_gradient.addColorStop(1, '#ff3b4d');

Chart.defaults.global.defaultFontColor = '#404447';
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.elements.point.radius = 1;
Chart.defaults.global.elements.point.borderWidth = 4;

var config = {
    type: 'bar',
    data: {
        labels: chart_labels,
        datasets: [
        {
            type: 'line',
            label: "# of Items",
            yAxisID: "y-axis-0",
            data: year_dataset,
            borderColor: purple_orange_gradient,
            backgroundColor: gradient,
            //backgroundColor: "rgba(255, 235, 237, 0.2)",
            borderWidth: 3,
            pointBorderColor: "#fb945f"
        }, 
        {
            type: 'bar',
            yAxisID: "y-axis-0",
            data: month_dataset,
            backgroundColor: "#f38b4a",
            width : "3"
        }]
    },    
    options: {
        legend: {
            display: false
        },
        title: {
            display: false
        },
        tooltips: {
            enabled: false,           
            custom: function(tooltipModel) {
            // Tooltip Element
            var tooltipEl = document.getElementById('chartjs-tooltip');

            // Create element on first render
            if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'chartjs-tooltip';
                tooltipEl.innerHTML = "<table></table>";
                document.body.appendChild(tooltipEl);
            }

            // Hide if no tooltip
            if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
            }

            // Set caret Position
            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
            } else {
                tooltipEl.classList.add('no-transform');
            }

            function getBody(bodyItem) {
                return bodyItem.lines;
            }

            // Set Text
            if (tooltipModel.body) {
                var titleLines = tooltipModel.title || [];
                var bodyLines = tooltipModel.body.map(getBody);

                var innerHtml = '<thead>';

                titleLines.forEach(function(title) {
                    innerHtml += '<tr><th>' + title + '</th></tr>';
                });
                innerHtml += '</thead><tbody>';

                bodyLines.forEach(function(body, i) {
                    var colors = tooltipModel.labelColors[i];
                    var bod = body + "";
                    bod = bod.split(": ")[1];
                    innerHtml += '<tr><td>' + bod + '</td></tr>';
                });
                innerHtml += '</tbody>';

                var tableRoot = tooltipEl.querySelector('table');
                tableRoot.innerHTML = innerHtml;
            }

            // `this` will be the overall tooltip
            var position = this._chart.canvas.getBoundingClientRect();

            // Display, position, and set styles for font
            tooltipEl.style.opacity = 1;
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.left = position.left + tooltipModel.caretX + 'px';
            tooltipEl.style.top = position.top + tooltipModel.caretY + 'px';
            tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
            tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        events: ['click'],
        scales: {
            yAxes: [{  
                gridLines: {
                    color: "rgba(252, 237, 221, 1)",
                    style: "dotted"
                },                   
                position: "left",
                "id": "y-axis-0",
            }],
            xAxes:[{
                barPercentage: 0.1,
                gridLines: {
                    display:false
                } 
            }]
        }
    }
};
var forecast_chart = new Chart(ctx, config);
$("#0").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#1").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#2").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#3").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 190, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#4").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#5").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#6").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 0, 0, 0, 210, 0, 0, 0, 0, 0, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#7").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 0, 0, 0, 0, 190, 0, 0, 0, 0, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#8").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#9").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 0, 0, 0, 0, 0, 0, 110, 0, 0, 0];
    zIndex: 1;
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#10").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#11").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 0];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#12").click(function() {
    var chart_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year_dataset = [200, 110, 190, 220, 250, 210, 190, 150, 110, 150, 200, 300];
    var month_dataset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300];
    var data = forecast_chart.config.data;
    data.datasets[0].data = year_dataset;
    data.datasets[1].data = month_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});


