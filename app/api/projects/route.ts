import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      projects,
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

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const project = await prisma.project.create({
      data: {
        title: body.title,
        category: body.category,
        description: body.description,
        image: body.image,
        github: body.github,
        demo: body.demo,
        featured: body.featured ?? false,
      },
    });

    return NextResponse.json({
      success: true,
      project,
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

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.project.delete({
      where: {
        id,
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

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    const project = await prisma.project.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        category: body.category,
        description: body.description,
        image: body.image,
        github: body.github,
        demo: body.demo,
        featured: body.featured,
      },
    });

    return NextResponse.json({
      success: true,
      project,
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