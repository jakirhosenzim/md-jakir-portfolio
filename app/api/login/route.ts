import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === "admin" &&
    password === "admin123"
  ) {
    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("token", "admin", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  }

  return NextResponse.json(
    {
      success: false,
      message: "Invalid Username or Password",
    },
    {
      status: 401,
    }
  );
}