// import "../App.css";
// import { useState, useRef, Component } from "react";
// import { Router, useNavigate } from "react-router-dom";
// import { useContent } from "../Hooks/Content";
// import { useAuth } from "../Hooks/Auth";

// const Order = (props) => {
//     const { user } = useAuth();

//     Router.put(/order/:id, (req, res) => {
//         const { id } = req.params;
//         const { user } = req.body;
//         console.log(id, user);
//         res.send("Order placed");
//     });