import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    const settings = await prisma.setting.findFirst();

    if (!settings) {
      return NextResponse.json(
        {
          success: false,
          message: "Settings not found",
        },
        {
          status: 404,
        }
      );
    }

    const updated = await prisma.setting.update({
      where: {
        id: settings.id,
      },
      data: {
        heroTitle: body.heroTitle,
        heroSubtitle: body.heroSubtitle,
        about: body.about,
        phone: body.phone,
        email: body.email,
        location: body.location,
        facebook: body.facebook,
        github: body.github,
        linkedin: body.linkedin,
        youtube: body.youtube,
        resume: body.resume,
      },
    });

    return NextResponse.json({
      success: true,
      settings: updated,
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