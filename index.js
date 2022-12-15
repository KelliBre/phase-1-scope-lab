// GLOBAL SCOPE
var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}
//This is bad, do not do this. Tis a mere example of how this can be a problem.
function setBestCustomer(){
     bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
   bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer ='Karen';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Caren"
    return leastFavoriteCustomer;
}