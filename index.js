
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Correct function name to overwrite bestCustomer
function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'some initial value';

// Function attempting to change leastFavoriteCustomer (this will throw an error)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new';
}


