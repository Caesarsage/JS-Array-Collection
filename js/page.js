// Charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

//create an array with Array.of()
let monthlySales = Array.of(500,9000,3000);
let monthlyLabel = Array.of('Oct', 'Nov', 'Dec');


let deptSales = Array.of(12,9,3);
let deptLabels = Array.of('Hiking','Running', 'Hunting');

function addYealyTotal(a,b,c) {
    return a+b+c;
}

let octNums = Array.of(500,1000,9000);
let novNums = Array.of(1100,2000,9000);
let decNums = Array.of(4000,2000,5000);

//use of spreading
let total = Array.of( addYealyTotal(...octNums), addYealyTotal(...novNums), addYealyTotal(...decNums));

//Array find and findIndex
function findOver1000(){
    let firstThousand = monthlySales.findIndex(element => element > 1000);
    alert(firstThousand);
}

//Array fill
function resetNum(){
    monthlySales.fill(0);
    monthlySalesChart.update();
}

let yearlyTotal =  addYealyTotal(...monthlySales);
yearlyLabel.innerHTML = "s" + yearlyTotal;
// Bar
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabel,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        
    }
})