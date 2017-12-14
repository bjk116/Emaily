//Node only has support for common JS modules
const express = require("express");
// import express from 'express';
// this is ES2015 modules, Node doesn't currently have support
// for this
const app = express();

app.get("/", (req, res) => {
	res.send({ bye: "buddy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);