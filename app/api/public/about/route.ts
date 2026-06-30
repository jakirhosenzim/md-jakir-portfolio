import { NextResponse } from "next/server";
import { getSettings } from "@/lib/settings";

export async function GET() {
  try {
    const settings = await getSettings();

    return NextResponse.json({
      success: true,
      about: settings.about,
      phone: settings.phone,
      email: settings.email,
      location: settings.location,
      facebook: settings.facebook,
      github: settings.github,
      linkedin: settings.linkedin,
      youtube: settings.youtube,
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