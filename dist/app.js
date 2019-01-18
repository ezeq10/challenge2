"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map