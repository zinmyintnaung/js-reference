// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function(e){
    
    //hide the result first
    document.getElementById('result').style.display = 'none';
    
    //show the loader as soon as submit button is click
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate Results
function calculateResults(){
    //console.log('answer');

    //UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //Compute the monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x -1);

    //check for finite number of monthly payment value
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        //show result and hide the loader once calculation is completed
        document.getElementById('result').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    }else{
        showError('Please check your numbers');
    }

    //e.preventDefault();
}

function showError(error){
    
    //we should hide both result and loader while showing for error
    document.getElementById('result').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    
    //Create a div
    const errorDiv = document.createElement('div');

    //Add class
    errorDiv.className = 'alert alert-danger';

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Insert error above heading
    card.insertBefore(errorDiv, heading);

    //Clear error after 3 seconds
    setTimeout(clearError, 3000);

}

function clearError(){
    document.querySelector('.alert').remove();
}