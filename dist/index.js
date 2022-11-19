"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let pepoleArr = [
    { id: "1", name: "nasser" },
    { id: "2", name: "naif" },
    { id: "3", name: "ahmed" },
    { id: "4", name: "mansour" },
];
let gredeArr = [
    { student: "nasser", grade: "A+" },
    { student: "naif", grade: "b+" },
    { student: "khalid", grade: "A" },
    { student: "sami", grade: "c+" },
];
let taskArr = [];
app.get(`/pepole`, (req, res) => {
    return res.json(pepoleArr);
});
app.get(`/grade`, (req, res) => {
    return res.json(gredeArr);
});
app.get(`/task`, (req, res) => {
    return res.json(taskArr);
});
app.post(`/pepole`, (req, res) => {
    const newItem = req.body;
    pepoleArr.push(newItem);
    return res.json({
        message: "Item Added !",
    });
});
app.post(`/grade`, (req, res) => {
    gredeArr.push(req.body);
    return res.json({
        message: "Item Added !",
    });
});
app.post(`/task`, (req, res) => {
    taskArr.push(req.body);
    return res.json({
        message: "task added !",
    });
});
app.put(`/pepole/:id`, (req, res) => {
    const { id } = req.params;
    const newObj = req.body;
    pepoleArr.map((obj) => {
        if (obj.id === id) {
            obj.name = newObj.name;
            obj.id = id;
        }
    });
    return res.json({
        message: "item updated !",
    });
});
app.put(`/grade/:student`, (req, res) => {
    const { student } = req.params;
    const updateGrade = req.body;
    gredeArr.map((upd) => {
        if (upd.student === student) {
            upd.student = updateGrade.student;
            upd.grade = updateGrade.grade;
        }
    });
    return res.json({
        message: "item updated !",
    });
});
app.put(`/task/:id`, (req, res) => {
    const { id } = req.params;
    const updateTask = req.body;
    taskArr.map((task) => {
        if (task.id === id) {
            task.id = id;
            task.description = updateTask.description;
            task.title = updateTask.title;
            task.status = updateTask.status;
        }
    });
    return res.json({
        message: "task Updated !",
    });
});
app.delete(`/pepole/:id`, (req, res) => {
    const { id } = req.params;
    pepoleArr.map((del) => {
        return del.id !== id;
    });
    return res.json({
        message: "item deleted !",
    });
});
app.delete(`/grade/:student`, (req, res) => {
    const { student } = req.params;
    const newArr = gredeArr.filter((delGrad) => {
        return delGrad.student !== student;
    });
    gredeArr = newArr;
    return res.json({
        message: "item Deleted !",
    });
});
app.delete(`/task/:id`, (req, res) => {
    const { id } = req.params;
    const newArr = taskArr.filter((fil) => {
        return fil.id !== id;
    });
    taskArr = newArr;
    return res.json({
        message: "task deleted !",
    });
});
app.get(`/task/:id`, (req, res) => {
    const { id } = req.params;
    taskArr.map((search) => {
        if (search.id === id || search.title === id) {
            return res.json(search);
        }
    });
});
app.listen(5100);
