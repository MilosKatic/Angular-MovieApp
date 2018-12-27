"use strict";

var express = require("express"),
	app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    controller = require("./controller.js");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

app.route("/api/:entity")
    .get(controller.query)
    .post(controller.save);
app.route("/api/:entity/:id")
    .get(controller.show)
    .put(controller.update)
    .delete(controller.remove);

app.route("/api/:entity/:entityId/:related")
    .get(controller.queryRelationship)
    .post(controller.saveRelationship);
app.route("/api/:entity/:entityId/:related/:relatedId")
    .get(controller.showRelationship)
    .put(controller.updateRelationship)
    .delete(controller.removeRelationship);



app.listen(3000, function() {
    console.log("Server started");
});