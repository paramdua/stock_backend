"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyCall = exports.getProjects = void 0;
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const projects = await prisma.project.findMany();
        const abc = yield fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json());
        // .then(json => console.log(json))
        console.log("abc", abc);
        res.json({ result: abc });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving projects: ${error.message}` });
    }
});
exports.getProjects = getProjects;
const buyCall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status } = req.body;
    try {
        // const projects = await prisma.project.findMany();
        const abc = yield fetch('https://api.upstox.com/v3/order/gtt/place', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': req.headers["authorization"] || ' '
            },
            body: JSON.stringify(req.body) // forward incoming request body
        }).then(response => response.json());
        // .then(json => console.log(json))
        res.json({ result: abc });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving projects: ${error.message}` });
    }
});
exports.buyCall = buyCall;
