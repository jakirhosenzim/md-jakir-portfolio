import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await prisma.visitor.create({
      data: {
        ip: body.ip,
        country: body.country,
        city: body.city,
        browser: body.browser,
        os: body.os,
        device: body.device,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  const total = await prisma.visitor.count();

  const today = await prisma.visitor.count({
    where: {
      createdAt: {
        gte: new Date(
          new Date().setHours(0, 0, 0, 0)
        ),
      },
    },
  });

  return NextResponse.json({
    total,
    today,
  });
}