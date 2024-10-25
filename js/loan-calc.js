let form = document.getElementById('form');
let loan_reason = document.getElementById('loan-reason');
let jobs = document.getElementById('jobs');
let mount = document.getElementById('mount'); // Fixed the ID typo
let amount = document.getElementById('amount');
let result = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let res = mount.value * 0.6 * amount.value + 500 ;
    result.innerHTML = res.toFixed(2)
});
