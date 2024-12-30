import { NextResponse } from "next/server";
const hookUrl =
  "https://gamechanger.bitrix24.kz/rest/1026/excjvwa1dt2sdluz/calendar.event.add.json";

const userId = 16;
const section = "88";
// const userId = 1026;
// const section = "116";
export async function POST(req) {
  const data = await req.json();

  const format = {
    type: "user",
    ownerId: userId,
    name: `Назначена встреча по сайту с ${data.name} / ${data.phone}`,
    description: "Назначена встреча с сайта",
    from: `${data.year}-${data.month}-${data.date}T${data.time}:00+05:00`,
    to: `${data.year}-${data.month}-${data.date}T${data.time}:00+05:00`,
    color: "#04d404",
    section,
    text_color: "#04d404",
    accessibility: "busy",
    TZ_FROM: "Europe/Moscow",
    TZ_TO: "Europe/Moscow",
    importance: "high",
    is_meeting: "Y",
    remind: [{ type: "min", count: 60 }],
    location: "Meets",
  };

  try {
    const req = await fetch(hookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(format),
    });

    return NextResponse.json(await req.json());
  } catch (error) {
    console.log(error, "Ошибка при создании сделки");
  }
}
