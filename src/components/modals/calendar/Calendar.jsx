"use client";
import React, { useEffect, useState } from "react";
import { useModal } from "@/components/hooks/use-modal-store";
import Popup from "@/components/ui/Popup";
import "./calendar.scss";
import Image from "next/image";
import { DatePicker } from "@/components/ui/calendar";
import Input from "@/components/ui/Input";

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Майя",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const freeTime = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

function getKazakhstanTime() {
  const now = new Date();

  const utcTime = now.getTime() + now.getTimezoneOffset() * 60 * 1000;

  const kazakhstanOffset = 5 * 60 * 60 * 1000;

  const kazakhstanTime = new Date(utcTime + kazakhstanOffset);
  const hours = kazakhstanTime.getHours();
  const minutes = kazakhstanTime.getMinutes();

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export default function CalendarPopup({ isModalOpen }) {
  const { closePopup } = useModal();
  const kazTime = getKazakhstanTime();
  // данные которые отправятся на сервер
  const [selectedDate, setSelectedDay] = useState({
    date: null,
    day: "",
    month: "",
    year: null,
    time: "",
    name: "",
    phone: "",
  });
  // Проверка заполнения всех полей
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  // Встреча назначена
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const ready = Object.values(selectedDate).every((value) => value !== null && value !== "");
    if (ready && !success) {
      setReadyToSubmit(true);
    } else {
      setReadyToSubmit(false);
    }
  }, [selectedDate, success]);

  const [busyDays, setBusyDays] = useState([]);
  const [availableTime, setAvailableTime] = useState([]);

  const filterAvailableTime = (timeZones) => {
    const filteredTime = [...freeTime];
    timeZones.forEach((zone) => {
      let from = filteredTime.indexOf(zone.from);
      let to = filteredTime.indexOf(zone.to);

      if (from === -1 && to !== -1) {
        return filteredTime.splice(to, 1);
      }
      if (from !== -1 && to === -1) {
        return filteredTime.splice(from, 1);
      }

      filteredTime.splice(from, to - from + 1);
    });
    setAvailableTime(filteredTime);
  };

  const getDates = async () => {
    try {
      const req = await fetch("/api/get/calendar");
      const res = await req.json();
      setBusyDays(res);
      filterAvailableTime(res.workTime);
    } catch (error) {
      console.log("ошибка при получении информации с календаря", error);
    }
  };

  useEffect(() => {
    getDates();
  }, []);

  const datepickerHandler = ({ year, month, date, day }) => {
    let currentDay = `${year}-${String(month).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
    const dayInfo = busyDays.workTime.find((date) => date.date === currentDay);

    if (dayInfo) {
      filterAvailableTime(dayInfo.timeZones);
    } else {
      setAvailableTime(freeTime);
    }

    setSelectedDay((prev) => ({ ...prev, year, month, date, day }));


    resetSubmitBtns();
  };

  const resetSubmitBtns = () => {
    setReadyToSubmit(false);
  };

  const selectTime = (time) => {
    setSelectedDay((prev) => ({ ...prev, time: time }));
  };


  const sendData = async () => {
    const req = await fetch("/api/create/meet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedDate),
    });
    const res = await req.json();

    if ("result" in res) {
      setSuccess(true);
    }
  };

  return (
    <Popup className="calendar" popupName="calendar">
      <h2>Готовы узнать как Битрикс24 изменит Ваш рабочий мир?</h2>
      <div className="wrapper">
        <div className="calendar__aside">
          <div className="calendar__aside__header calendar__box">
            <button className="close_popup" onClick={closePopup}>
              <Image
                src="/icons/close-btn.svg"
                width={48}
                height={48}
                alt="close btn"
                loading="lazy"
              />
            </button>
            <Image
              src="/video/Logo-min.gif"
              className="calendar__logotype"
              alt="logotype"
              width={90}
              height={90}
              loading="lazy"
              
            />
          </div>
          <div className="calendar__aside__main calendar__box">
            <Image
              src="/images/daniel-new.png"
              width={100}
              height={100}
              alt="Daniel Galbert SEO of Gamechanger"
              className="calendar__avatar"
              loading="lazy"
            />
            <h3>Даниель Гальберт</h3>
            <p className="calendar__subtitle">
              Технический специалист центра качества и метрологии
            </p>
            <div className="calendar__aside__info">
              <span>
                <Image
                  src="/icons/clock.svg"
                  width={16}
                  height={16}
                  alt="clock svg"
                  loading="lazy"
                />
                30 мин
              </span>
              <span>
                <Image
                  src="/icons/camera.svg"
                  width={14}
                  height={9}
                  alt="camera svg"
                  loading="lazy"
                />
                Онлайн встреча через Google.meet (установка не требуется)
              </span>
            </div>

            <p className="calendar__description">
              Для заинтересованных в системе это возможность ознакомиться с функционалом и подходом
              к работе, а также обсудить перспективы сотрудничества.
            </p>
          </div>
        </div>

        <div className="calendar__main calendar__box">
          <h3>Выберите Дату и Время</h3>
          <DatePicker
            className="calendar__date-picker"
            datepickerHandler={datepickerHandler}
            busyDays={busyDays}
          />
          {selectedDate.date && (
            <div className="calendar__main__right">
              {selectedDate.date && (
                <p className="calendar__main__selected-day">{`${days[selectedDate.day]}, ${
                  selectedDate.date
                } ${months[selectedDate.month - 1]}`}</p>
              )}

              <Input
                type="text"
                name="task"
                text="Имя"
                animationOff={true}
                onChange={(e) => setSelectedDay((prev) => ({ ...prev, name: e.target.value }))}
              />
              <Input
                type="number"
                name="task"
                animationOff={true}
                text="Номер"
                onChange={(e) => setSelectedDay((prev) => ({ ...prev, phone: e.target.value }))}
              />

              <div className="calendar__main__btns-wrapper">
                {availableTime.map((time) => (
                  <button
                    key={time}
                    onClick={() => selectTime(time)}
                    className={`calendar-select_time-btn ${
                      selectedDate.time === time ? "active" : ""
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {/* <input
                className="calendar-select_time-inp"
                type="time"
                name=""
                id="calendar-time_inp"
                onChange={(e) => timeInpHandler(e)}
              /> */}

              <button className="calendar-next-step" disabled={!readyToSubmit} onClick={sendData}>
                {success ? "Встреча назначена!" : "Отправить"}
              </button>
            </div>
          )}

          <div className="calendar__main__footer">
            <span>Часовой пояс</span>
            <div>
              <Image
                src="/icons/earth.svg"
                width={16}
                height={16}
                alt="earth svg icon"
                loading="lazy"
              />{" "}
              Астана ({kazTime})
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
