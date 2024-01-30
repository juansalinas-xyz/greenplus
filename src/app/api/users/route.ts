import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { createUser, getAllUsers,modifyUser } from "@service/UserService";
import { BaseUser } from "@model/user"


export async function POST(req: NextRequest) {

  try {
    const searchParams = req.nextUrl.searchParams
    const userType: number = parseInt(searchParams.get('type'))
    const userRequest: BaseUser = await req.json();
    if(userType==null) throw new Error( 'An userType must me provided via query param url?type=number')
    const user = await createUser(userRequest, userType);
    return NextResponse.json(
      user,
      {
        status: StatusCodes.CREATED
      })
  } catch (error) {
    return NextResponse.json(
      error.message /**Aqui va a ir el ErrorModel, tengo que leer la doc para ver que va en cada parte */,
      {
        status:StatusCodes.BAD_REQUEST
      }
    )
  }


}

export async function GET() {
  const allUsers: Array<BaseUser> = await getAllUsers();
  return NextResponse.json(allUsers,
    {
      status: StatusCodes.OK
    })
}


export async function PUT(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams
    const user = await req.json();
    const id: string = searchParams.get('id')
    const resp= await modifyUser(user,id);
    return NextResponse.json(resp,
      {
      status:StatusCodes.CREATED
      })
    
  } catch (error) {
    return NextResponse.json(
      error.message,
      {
        status:StatusCodes.BAD_REQUEST
      }
      );
  }
}