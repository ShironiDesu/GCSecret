import { NextResponse } from "next/server";
import dayjs from "dayjs";
const hookUrl =
  "https://gamechanger.bitrix24.kz/rest/1026/kjbtbgy8yvw5rakb/calendar.accessibility.get.json";

const userId = 16;
// const userId = 1026;

// Описание объектов получаемых от битрикса
// DT_SKIP_TIME - полностью ли занят день
// DATE_FROM_TS_UTC - дата формата "1733346000" которая будет преобразована в YYYY-MM-DD
// DATE_FROM - дата в формате DD-MM-YYYY HH:MM:SS

const convertDate = (isoDate) => {
  return new Date(isoDate * 1000).toISOString().split("T")[0];
};

const oneDayUnix = 86400;

const getTime = (date, TZ_FROM) => {
  // формат времени 18:43:00
  const time = date.split(" ")[1];
  const [hour, minute] = time.split(":").map(Number);
  // приходится вручную добавлять 2 часа из-за разницы в часовых поясах
  const hourUTC = TZ_FROM === "Europe/Moscow" ? hour + 2 : hour;

  const roundedHour = minute >= 30 ? hourUTC + 1 : hourUTC;
  // Рабочие часы с 10 до 20
  if (roundedHour > 20 || hourUTC < 10) {
    return false;
  }
  const newTime = roundedHour + ":00";
  return newTime;
};

const formatDate = (dates) => {
  let formedDates = {
    workTime: [],
    busyDays: [],
  };
  dates.forEach((date) => {
    if (date.DT_SKIP_TIME === "Y") {
      return formedDates.busyDays.push(convertDate(+date.DATE_FROM_TS_UTC + oneDayUnix));
    }
    const busyDate = convertDate(date.DATE_FROM_TS_UTC);
    const from_time = getTime(date.DATE_FROM, date.TZ_FROM);
    const to_time = getTime(date.DATE_TO, date.TZ_FROM);

    if (!from_time && !to_time) return;

    const dateAlreadyExist = formedDates.workTime.find((item) => item.date === busyDate);

    if (dateAlreadyExist) {
      const newTimeZone = { from: from_time, to: to_time };
      return dateAlreadyExist.timeZones.push(newTimeZone);
    }

    const newDate = {
      date: busyDate,
      timeZones: [{ from: from_time, to: to_time }],
    };

    formedDates.workTime.push(newDate);
  });

  return formedDates;
};

const getDate = async () => {
  const todayJs = dayjs();
  const twoWeeksLater = todayJs.add(2, "week");
  const today = {
    year: todayJs.year(),
    month: todayJs.month() + 1,
    date: todayJs.date(),
  };
  const nextTwoWeeks = {
    year: twoWeeksLater.year(),
    month: twoWeeksLater.month() + 1,
    date: twoWeeksLater.date(),
  };

  try {
    const format = {
      from: `${today.year}-${today.month}-${today.date}`,
      to: `${nextTwoWeeks.year}-${nextTwoWeeks.month}-${nextTwoWeeks.date}`,
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
    if ("result" in res) {
      return res.result[userId];
    }
  } catch (error) {
    console.error("Ошибка при получении информации с календаря", error);
  }
};

export async function GET() {
  try {
    const bitrix = await getDate();
    const formedDates = formatDate(bitrix);

    return NextResponse.json(formedDates);
  } catch (error) {
    console.log(error, "Ошибка при создании сделки");
  }
}
