

// SideBar Toggle

var sideBaropen = false;
var sideBar = document.getElementById("sideBar");

function openSidebar() {
    if (!sideBaropen) {
        sideBar.classList.add("sidebar-responsive");
        sideBaropen = true;
    }
}

function closeSidebar() {
    if (sideBaropen) {
        sideBar.classList.remove("sidebar-responsive")
        sideBaropen = false;
    }
}



// Apex Vertical Bar Chart

var barChartOptions = {
    series: [{
        data: [10, 8, 6, 4, 2]
    }],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false
        },
    },
    colors: [
        "#246dec",
        "#cc3c43",
        "#367952",
        "#f5b74f",
        "#4f35a1"
    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: false,
            columnWidth: '40%',
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
    },
    yaxis: {
        title: {
            text: "Count"
        }
    }
};

var barchart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barchart.render();




// AREA CHART

var areaChartOptions = {
    series: [{
        name: 'Purchase Orders',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Sales Orders',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false,
        }
    },

    colors: ["#4f35a1", "#246dec"],

    dataLabels: {
        enabled: false,
    },

    stroke: {
        curve: 'smooth'
    },

    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    markers: {
        size: 0
    },
    yaxis: [
        {
            title: {
                text: 'Purchase Orders',
            },
        },
        {
            opposite: true,
            title: {
                text: 'Sales Orders',
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
};

var areachart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areachart.render();