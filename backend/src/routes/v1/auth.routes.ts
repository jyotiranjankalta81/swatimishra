import express, { Express, Response, Request } from 'express';
import { AuthController } from '../../controller/auth.controller';
const authrouter = express.Router();


authrouter.post("/register", AuthController.CreateUser);
authrouter.post("/login", AuthController.LoginUser);

export default authrouter




