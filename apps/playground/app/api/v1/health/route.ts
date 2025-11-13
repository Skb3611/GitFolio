import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(
      {
        status: true,
        message: "Server Up",
      },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        status: false,
        message: "Server Down",
      },
      { status: 500 }
    );
  }
}
