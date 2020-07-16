// Accessing the objects
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let yearlyLabel = document.getElementById('yearlyTotal');

// Values from the form
let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');

let yearlyTotal = 0;

const monthlySales = new Set();
const monthlyLabels = new Set();

//couples of ways to add to set
// //pass in value inside the st
// const test = new Set([1,20,3]);
// const test2 =  new Set([{a: 'this'}])

// OR
// test.add(5).add(6) //chain diff value to add to one set

function addSale() {
    //adding to a set
    //parseInt convert string to a interger
    monthlySales.add(parseInt(newAmount.value));
    monthlyLabels.add(newMonth.value);
    
    yearlyTotal = 0 ;

    monthlySalesChart.data.datasets.forEach((dataset)=>{
        dataset.data.push = [];
    })

    for (let amount of monthlySales) {
        yearlyTotal = amount + yearlyTotal;
        yearlyLabel.innerHTML = yearlyTotal;

        monthlySalesChart.data.datasets.forEach((dataset)=>{
            dataset.data.push(amount);
        })
    }

    //update chart
    monthlySalesChart.data.labels = Array.from(monthlyLabels);
    monthlySalesChart.update();
}

//delete from a set
function deleteVal(){
    monthlySales.forEach((value1, value2, monthlySales) => {
        alert(value1);
    })
}

//iterating through a set
function addTotal(){
  
}

// Bar chart
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Sales',
            data: [],
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

// // Pie Chart
// var deptSalesChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: deptLabels,
//         datasets: [{
//             label: '# of Sales',
//             data: deptSales,
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {
        
//     }
// })