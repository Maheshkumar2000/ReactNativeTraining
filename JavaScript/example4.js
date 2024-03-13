let waitingTime = 0;

const ticket = (order_id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(waitingTime < 65 )
            resolve(serverMeal(order_id)); // Path 1
        else
            reject(cancelOrder(order_id)); // Path 2
    }, 5000);
});

const serverMeal = (order_id) => {
    console.log(`Order ${order_id}: on your table time: ${waitingTime}!`);
} 

const cancelOrder = (order_id) => {
    console.log(`Order ${order_id}: Sorry, we are cannot serve time: ${waitingTime}!`);
}

const createTicket = (order_id) => {
    waitingTime += 2;
    ticket(order_id)
        .then(() => { 
            console.log(`Ticket generated for Order: ${order_id}`);
        })
        .catch(() => { console.log(`Ticket generation failed`)})
        .finally(() => { console.log(`Ticket generation process completed !`)}); //Optional
}

// re-write createTicket function using async-await
const createTicketAsync = async (order_id) => {
    waitingTime += 2;
    try {
        await ticket(order_id);
        console.log(`Ticket generated for Order: ${order_id}`);
    } catch (error) {
        console.log(`Ticket generation failed`);
    } finally {
        console.log(`Ticket generation process completed !`);
    }
} 

const cookTheFood = (order_id) => {
    setTimeout(() => {
        // set a random number between 40 and 80 in waitingTime
        waitingTime += Math.floor(Math.random() * (80 - 40 + 1)) + 40;
        console.log(`Order ${order_id}: food cooked time: ${waitingTime}!`);
    }, 2000);
}

const PlaceOrder = () => {
    const order_id = Math.floor(Math.random() * 1000);
    createTicket(order_id);
    cookTheFood(order_id);
    console.log(`Order ${order_id}: placed!`);
}

// re-write PlaceOrder function using async-await
const PlaceOrderAsync = async () => {
    const order_id = Math.floor(Math.random() * 1000);
    await createTicketAsync(order_id);
    cookTheFood(order_id);
    console.log(`Order ${order_id}: placed!`);
}


PlaceOrder();