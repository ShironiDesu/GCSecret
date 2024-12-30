import { NextResponse } from "next/server";
import dayjs from "dayjs";
const hookUrl =
  "https://gamechanger.bitrix24.kz/rest/1026/kjbtbgy8yvw5rakb/calendar.accessibility.get.json";

// const userId = 16;
const userId = 1026;

const getDate = async (data) => {
  try {
    const format = {
      from: `${data.year}-${data.month}-${data.date}`,
      to: `${data.year}-${data.month}-${data.date}`,
      users: [userId],
    };

    const req = await fetch(hookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(format),
    });
    const res = await req.json();

    return res;
  } catch (error) {
    console.error("Ошибка при получении информации с календаря", error);
  }
};

const checkDate = (bitrix, user) => {
  const meets = bitrix.result[userId];
  const userDateTime = dayjs(
    `${user.date}.${user.month}.${user.year} ${user.time}:00`,
    "DD.MM.YYYY HH:mm:ss"
  );


  const isAvailable = meets.every(({ DATE_FROM, DATE_TO }) => {
    const dateFrom = dayjs(DATE_FROM, "DD.MM.YYYY HH:mm:ss");
    const dateTo = dayjs(DATE_TO, "DD.MM.YYYY HH:mm:ss");

    return userDateTime.isBefore(dateFrom) || userDateTime.isAfter(dateTo);
  });

  if (isAvailable) {
    return true;
  } else {
    return false;
  }
};

export async function POST(req) {
  const data = await req.json();

  try {
    const bitrix = await getDate(data);

    if (bitrix.error_description) {
      return NextResponse.json({ error_description: bitrix.error_description });
    }

    const success = checkDate(bitrix, data);

    return NextResponse.json(success);
  } catch (error) {
    console.log(error, "Ошибка при создании сделки");
  }
}
