import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      skills,
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

    const skill = await prisma.skill.create({
      data: {
        name: body.name,
        percent: Number(body.percent),
        icon: body.icon,
      },
    });

    return NextResponse.json({
      success: true,
      skill,
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

    const skill = await prisma.skill.update({
      where: {
        id: body.id,
      },
      data: {
        name: body.name,
        percent: Number(body.percent),
        icon: body.icon,
      },
    });

    return NextResponse.json({
      success: true,
      skill,
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

    await prisma.skill.delete({
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