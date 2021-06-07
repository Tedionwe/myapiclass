import { NextFunction , Request ,Response} from "express";





export default class AuthValidation{

static login(req:Request,res:Response,next:NextFunction){
   
    const {email,pwd} =req.body;

    if(typeof email !== "string") throw "Email must be a string"

    if(typeof pwd !== "string") throw "pwd must be a string"

    if(pwd.length < 6) throw "password must not be less than six (6) characters"

    next();

}

static register(req:Request,res:Response,next:NextFunction){
   
    const {email,pwd} =req.body;

    if(typeof email !== "string") throw "Email must be a string"

    if(typeof pwd !== "string") throw "pwd must be a string"

    if(pwd.length < 6) throw "password must not be less than six (6) characters"

    next("Account Successful");

}



}