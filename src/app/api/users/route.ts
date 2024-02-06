import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { createUser, getAllUsers, getAllUsersByType, modifyUser } from "@service/UserService";
import { BaseUser } from "@model/user"


export async function POST(req: NextRequest) {

  try {
    const userRequest: BaseUser = await req.json();
    const userType = userRequest.type || 0;
    if (userType == 0) throw new Error('You must indicate the type for the user')
    delete userRequest.type
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
        status: StatusCodes.BAD_REQUEST
      }
    )
  }


}

export async function GET(req: NextRequest) {

  let allUsers: Array<BaseUser> = [];
  try {
    const searchParams = req.nextUrl.searchParams
    const type: number = parseInt(searchParams.get('type')) || 0;
    const typesNumbers = [0, 1, 2, 3]
    if (!typesNumbers.includes(type)) {
      throw new Error('Invalid type number, it must be between 0 and 3')
    }

    if (type === 0) {
      allUsers = await getAllUsers();
    } else {
      allUsers = await getAllUsersByType(type);
    }

    return NextResponse.json(allUsers,
      {
        status: StatusCodes.OK
      })
  } catch (error) {
    return NextResponse.json(
      error.message,
      {
        status: StatusCodes.BAD_REQUEST
      }
    )
  }


}

/** Here is also needed to determine userType and make the specific Repository to apply changes */
export async function PUT(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams
    const user = await req.json();
    const id: string = searchParams.get('id')
    const resp = await modifyUser(user, id);
    return NextResponse.json(resp,
      {
        status: StatusCodes.CREATED
      })

  } catch (error) {
    return NextResponse.json(
      error.message,
      {
        status: StatusCodes.BAD_REQUEST
      }
    );
  }
}


