import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSettings } from "@/lib/settings";

export async function GET() {
  try {
    const [
      settings,
      skills,
      services,
      projects,
      experience,
    ] = await Promise.all([
      getSettings(),
      prisma.skill.findMany({
        orderBy: {
          percent: "desc",
        },
      }),
      prisma.service.findMany(),
      prisma.project.findMany({
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.experience.findMany({
        orderBy: {
          id: "desc",
        },
      }),
    ]);

    return NextResponse.json({
      success: true,
      settings,
      skills,
      services,
      projects,
      experience,
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