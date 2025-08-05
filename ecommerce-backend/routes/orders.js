const express = require('express');
const router = express.Router();

let orders = [];

router.post('/', (req, res) => {
    const { userId, items, total } = req.body;
    const newOrder = { id: Date.now(), userId, items, total, date: new Date(), status: "Processing" };
    orders.push(newOrder);
    res.json({ message: "Order placed successfully", orderId: newOrder.id });
});

module.exports = router;
