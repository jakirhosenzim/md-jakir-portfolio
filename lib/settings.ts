import { prisma } from "@/lib/prisma";

export async function getSettings() {
  let settings = await prisma.setting.findFirst();

  if (!settings) {
    settings = await prisma.setting.create({
      data: {
        heroTitle: "MD Jakir Hosen",
        heroSubtitle: "IT Specialist & Full Stack Developer",
        about:
          "Professional IT Support, Networking, CCTV, Graphics Design & Web Developer.",

        phone: "+8801732537388",
        email: "mdjakirhosenzim@gmail.com",
        location: "Rangpur, Bangladesh",

        facebook: "",
        github: "",
        linkedin: "",
        youtube: "",

        resume: "",
      },
    });
  }

  return settings;
}