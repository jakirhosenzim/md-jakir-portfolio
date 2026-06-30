import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      experiences,
    });
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const experience =
      await prisma.experience.create({
        data: {
          company: body.company,
          position: body.position,
          startDate: body.startDate,
          endDate: body.endDate,
          description: body.description,
        },
      });

    return NextResponse.json({
      success: true,
      experience,
    });
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
export async function PUT(req: Request) {
  try {
    const body = await req.json();

    const experience =
      await prisma.experience.update({
        where: {
          id: body.id,
        },
        data: {
          company: body.company,
          position: body.position,
          startDate: body.startDate,
          endDate: body.endDate,
          description: body.description,
        },
      });

    return NextResponse.json({
      success: true,
      experience,
    });
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.experience.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}