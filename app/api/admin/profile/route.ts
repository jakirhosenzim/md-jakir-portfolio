import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  hashPassword,
  verifyPassword,
} from "@/lib/auth";

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    const admin = await prisma.admin.findFirst();

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin not found",
        },
        {
          status: 404,
        }
      );
    }

    const valid = await verifyPassword(
      body.currentPassword,
      admin.password
    );

    if (!valid) {
      return NextResponse.json(
        {
          success: false,
          message: "Current password is incorrect",
        },
        {
          status: 401,
        }
      );
    }

    if (
      body.newPassword !== body.confirmPassword
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Passwords do not match",
        },
        {
          status: 400,
        }
      );
    }

    const hashed = await hashPassword(
      body.newPassword
    );

    await prisma.admin.update({
      where: {
        id: admin.id,
      },
      data: {
        username: body.username,
        password: hashed,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
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