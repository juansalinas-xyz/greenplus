import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { createUser, getAllUsers, modifyUser } from "@service/UserService";
import { User } from "@model/user"

export async function POST(req: NextRequest) {
  try {
    const userRequest: User = await req.json();
    const user = await createUser(userRequest);
    return NextResponse.json(user, { status: StatusCodes.CREATED });
  } catch (error) {
      console.error(error);
      return NextResponse.error();
  }
}

export async function PUT(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams
    const user = await req.json();
    const id: string = searchParams.get('id')
    console.log(id);
    const resp = await modifyUser(user, id);
    return NextResponse.json(resp,
      {
        status: StatusCodes.OK
      })

  } catch (error) {
    return NextResponse.json(
      error.message,
      {
        status: StatusCodes.NOT_FOUND
      }
    );
  }
}

export async function GET() {
    const allUsers: User[] = await getAllUsers();
    return NextResponse.json(allUsers,
      {
        status: StatusCodes.OK
      })
  }