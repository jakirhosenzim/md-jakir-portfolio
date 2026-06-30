import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const exists = await prisma.admin.findUnique({
      where: {
        username,
      },
    });

    if (exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashed = await hashPassword(password);

    const admin = await prisma.admin.create({
      data: {
        username,
        password: hashed,
      },
    });

    return NextResponse.json({
      success: true,
      admin,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}