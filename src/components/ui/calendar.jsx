"use client"
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";
import { ru } from "react-day-picker/locale";

export function DatePicker({ className, datepickerHandler, busyDays }) {
  const [selected, setSelected] = useState();
  const today = new Date();

  const isDisabled = (date) => {
    // Установим сегодняшнюю дату и дату через две недели
    const today = new Date();
    const twoWeeksLater = new Date(today);
    twoWeeksLater.setDate(today.getDate() + 14);

    if (date < today.setHours(0, 0, 0, 0)) {
      return true;
    }

    // Преобразуем `busyDays` в массив дат
    const disabledDays = busyDays.busyDays.map((item) => {
      const [year, month, day] = item.split("-");
      return new Date(+year, +month - 1, +day);
    });

    // Проверяем, находится ли дата через две недели или позже
    const isAfterTwoWeeks = date > twoWeeksLater;

    // Проверяем, входит ли дата в массив `disabledDays`
    const isInDisabledDays = disabledDays.some(
      (disabledDate) =>
        disabledDate.getFullYear() === date.getFullYear() &&
        disabledDate.getMonth() === date.getMonth() &&
        disabledDate.getDate() === date.getDate()
    );

    // Дата считается отключенной, если она выходной, позже двух недель или в массиве `disabledDays`
    return isAfterTwoWeeks || isInDisabledDays;
  };

  function handleSelect(e) {
    if (e) {
      setSelected(e);
      const year = e.getFullYear();
      const month = e.getMonth();
      const date = e.getDate();
      const day = e.getDay();
      datepickerHandler({ year, month: month + 1, date, day });
    }
  }

  return (
    <DayPicker
      startMonth={today}
      disabled={isDisabled}
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={handleSelect}
      className={className}
    />
  );
}
