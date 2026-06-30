import { NextResponse } from "next/server";
import { getSettings } from "@/lib/settings";

export async function GET() {
  try {
    const settings = await getSettings();

    return NextResponse.json({
      success: true,
      settings,
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