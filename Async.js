const takeOrder = (customer, callback) => {
    console.log(`Taking order for ${customer}.`);
    callback(customer);
};

const processOrder = (customer, callback) => {
    console.log(`Processing order for ${customer}.`)
    setTimeout(() => {
        console.log(`Cooking complete.`);
        console.log(`Order processed for ${customer}.`);
        callback(customer);
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`Completed order for ${customer}.`);
};

takeOrder('Customer 1', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    })
});