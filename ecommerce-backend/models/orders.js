let orders = [];

function createOrder(order) {
    orders.push(order);
    return order;
}

function getOrdersByUser(userId) {
    return orders.filter(o => o.userId === userId);
}

module.exports = {
    createOrder,
    getOrdersByUser
};
