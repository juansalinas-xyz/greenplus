import { NextRequest, NextResponse } from "next/server";
import { findUserById } from "@service/UserService";import { StatusCodes } from "http-status-codes";

export async function GET(req : NextRequest,{params}:{params: {id: string}}){
    const id = params.id
    console.log(id)
    try {
        return NextResponse.json(await findUserById(id));
    } catch (error) {
        return NextResponse.json(
            error.message,
            {status:StatusCodes.NOT_FOUND}
        )    
    }
    
}