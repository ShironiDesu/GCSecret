"use client";
import { useState, useEffect } from "react";
import "./calculator.scss";
import Image from "next/image";
import ButtonRounded from "@/components/ui/ButtonRounded";
import FadeUp_block from "@/components/ui/FadeUp-block";

export default function Calculator() {
  const departments = [
    { name: "Продажи", price: 300000 },
    { name: "Снабжение", price: 300000 },
    { name: "Маркетинг", price: 300000 },
    { name: "Финансы", price: 300000 },
    { name: "Бухгалтерия", price: 300000 },
    { name: "Кадры (HR)", price: 300000 },
    { name: "Юридический", price: 300000 },
    { name: "Логистика", price: 300000 },
    { name: "Производство", price: 300000 },
    { name: "Качество", price: 300000 },
    { name: "Исследования и разработки (R&D)", price: 300000 },
    { name: "Управление проектами", price: 300000 },
    { name: "Внутренний контроль", price: 300000 },
    { name: "Служба поддержки клиентов", price: 300000 },
  ];
  const [isOpenDepartment, setIsOpenDepartment] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("Выбрать отдел");
  const [selectedService, setSelectedService] = useState(
    "Выбрать сервисы для интеграции"
  );
  const [selectedDepartmentsArray, setSelectedDepartmentsArray] = useState([]);
  const [selectedServicesArray, setSelectedServicesArray] = useState([]);
  const [staffCount, setStaffCount] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalSavings, setTotalSavings] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1025) {
        setSelectedService("Выбрать сервисы");
      } else {
        setSelectedService("Выбрать сервисы для интеграции");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const toggleSelectDepartment = () => setIsOpenDepartment(!isOpenDepartment);
  // const toggleSelectServices = () => setIsOpenServices(!isOpenServices);

  const handleOptionClick = (option, type) => {
    if (type === "department") {
      const findElement = departments.find(
        (department) => department.name === option
      );

      if (selectedDepartmentsArray.some((dep) => dep.name === option)) {
        // Если отдел уже выбран, удаляем его
        setSelectedDepartmentsArray((prev) =>
          prev.filter((dep) => dep.name !== option)
        );
        if (selectedDepartment === option) {
          setSelectedDepartment("Выбрать отдел");
        }
      } else {
        // Иначе добавляем отдел
        setSelectedDepartmentsArray((prev) => [...prev, findElement]);
        // setSelectedDepartment(option);
        setIsClicked(true);
      }
    } else if (type === "services") {
      const findService = serviceOptions.find(
        (service) => service.name === option
      );

      if (selectedServicesArray.some((serv) => serv.name === option)) {
        // Если сервис уже выбран, удаляем его
        setSelectedServicesArray((prev) =>
          prev.filter((serv) => serv.name !== option)
        );
        if (selectedService === option) {
          setSelectedService("Выбрать сервисы");
        }
      } else {
        // Иначе добавляем сервис
        setSelectedServicesArray((prev) => [...prev, findService]);
        // setSelectedService(option);
        setIsClicked(true);
      }
    }
    // if (type === "department") {
    //   setIsOpenDepartment(false);
    // } else {
    //   setIsOpenServices(false);
    // }
  };
  const handleOnChange = (value) => {
    if (value === "0") {
      return;
    }

    setStaffCount(value);
  };
  const serviceOptions = [
    { name: "Телефония (12 месяцев)", price: 60000 },
    { name: "WhatsApp (12 месяцев)", price: 105600 },
    { name: "Инстаграм", price: 0 },
    { name: "1С", price: 50000 },
    { name: "Каспи (12 месяцев)", price: 240000 },
    { name: "Онлайн-платежи", price: 90000 },
  ];
  const calculatePrice = () => {
    const departmentTotal = selectedDepartmentsArray.reduce(
      (sum, dep) => sum + dep.price,
      0
    );

    let departmentDiscount = 0;
    if (selectedDepartmentsArray.length === 2) {
      departmentDiscount = departmentTotal * 0.15;
    } else if (
      selectedDepartmentsArray.length >= 3 &&
      selectedDepartmentsArray.length <= 5
    ) {
      departmentDiscount = departmentTotal * 0.2;
    } else if (
      selectedDepartmentsArray.length >= 6 &&
      selectedDepartmentsArray.length <= 7
    ) {
      departmentDiscount = departmentTotal * 0.25;
    } else if (
      selectedDepartmentsArray.length >= 8 &&
      selectedDepartmentsArray.length <= 9
    ) {
      departmentDiscount = departmentTotal * 0.3;
    } else if (selectedDepartmentsArray.length >= 10) {
      departmentDiscount = departmentTotal * 0.4;
    }

    const discountedDepartmentTotal = departmentTotal - departmentDiscount;

    let staffTariff = 0;
    let staffDiscount = 0;

    if (staffCount >= 1 && staffCount <= 5) {
      staffTariff = 86400;
      staffDiscount = 57600;
    } else if (staffCount >= 6 && staffCount <= 50) {
      staffTariff = 230400;
      staffDiscount = 177600;
    } else if (staffCount >= 51 && staffCount <= 100) {
      staffTariff = 432000;
      staffDiscount = 384000;
    }

    const serviceTotal = selectedServicesArray.reduce(
      (sum, serv) => sum + serv.price,
      0
    );

    const totalPrice = discountedDepartmentTotal + staffTariff + serviceTotal;
    const totalSavings = departmentDiscount + staffDiscount;

    setTotalPrice(totalPrice);
    setTotalSavings(totalSavings);
  };
  const handleCalculate = () => {
    setIsClicked(true);
    calculatePrice();
  };
  useEffect(() => {
    // Проверяем наличие элементов
    setIsOpen(
      selectedDepartmentsArray.length > 0 || selectedServicesArray.length > 0
    );
  }, [selectedDepartmentsArray, selectedServicesArray]);
  const toggleSelectDepartment = () => {
    setIsOpenDepartment(!isOpenDepartment); // Открываем/закрываем департаменты
    if (isOpenServices) setIsOpenServices(false); // Закрываем сервисы, если они открыты
  };
  const toggleSelectServices = () => {
    setIsOpenServices(!isOpenServices); // Открываем/закрываем сервисы
    if (isOpenDepartment) setIsOpenDepartment(false); // Закрываем департаменты, если они открыты
  };
  return (
    <div className="calculator__container">
      <div className="container ">
        <div className="calculator">
          <FadeUp_block>
            <p className="calculator__title">
              Рассчитайте
              <span className="calculator__title__blue"> стоимость</span>
              <br /> Вашего проекта
            </p>
          </FadeUp_block>
          <div className="calculator__block">
            <div className="calculator__block__settings">
              <div className="custom-select">
                <div className="select-header" onClick={toggleSelectDepartment}>
                  <span className="select-header__title">
                    {selectedDepartment}
                  </span>
                  <div className={`arrow ${isOpenDepartment ? "open" : ""}`}>
                    <Image
                      src="/icons/Chevron_Down_Calculator.svg"
                      alt="Select down"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                {isOpenDepartment && (
                  <div className="options">
                    {departments.map((option, index) => (
                      <div
                        key={index}
                        className={`option ${
                          selectedDepartmentsArray.some(
                            (dep) => dep.name === option.name
                          )
                            ? "highlight"
                            : ""
                        }`}
                        onClick={() =>
                          handleOptionClick(option.name, "department")
                        }
                      >
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="custom-select">
                <div className="select-header" onClick={toggleSelectServices}>
                  <span>{selectedService}</span>
                  <div className={`arrow ${isOpenServices ? "open" : ""}`}>
                    <Image
                      src="/icons/Chevron_Down_Calculator.svg"
                      alt="Select down"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                {isOpenServices && (
                  <div className="options">
                    {serviceOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`option ${
                          selectedServicesArray.some(
                            (serv) => serv.name === option.name
                          )
                            ? "highlight"
                            : ""
                        }`}
                        onClick={() =>
                          handleOptionClick(option.name, "services")
                        }
                      >
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="calculator__block__settings__input">
                <input
                  type="number"
                  placeholder=" "
                  value={staffCount || ""}
                  onChange={(e) => handleOnChange(e.target.value)}
                  min="1"
                />
                <label>Количество сотрудников</label>
              </div>
              <button
                type="button"
                className="calculator__block__settings__button"
                onClick={handleCalculate}
              >
                Рассчитать стоимость
              </button>
            </div>
            <div className={`calculator__block__sum ${isOpen ? "open" : ""}`}>
              <p className="calculator__block__sum__title">
                <Image
                  src="/icons/Calculator.svg"
                  alt="Calculator"
                  width={48}
                  height={48}
                  className="calculator__block__sum__title__img"
                />
                Примерная стоимость
                <br /> Вашего проекта
              </p>
              <ul className="calculator__block__sum__list">
                {selectedDepartmentsArray.map(
                  (list, index) =>
                    selectedDepartmentsArray.length !== 0 && (
                      <li
                        className="calculator__block__sum__list__item"
                        key={index}
                      >
                        <p className="calculator__block__sum__list__item__name">
                          {list.name}
                        </p>

                        <p className="calculator__block__sum__list__item__number">
                          {list.price}
                        </p>
                      </li>
                    )
                )}
                {selectedServicesArray.map(
                  (list, index) =>
                    selectedServicesArray.length !== 0 && (
                      <li
                        className="calculator__block__sum__list__item"
                        key={index}
                      >
                        <p className="calculator__block__sum__list__item__name">
                          {list.name}
                        </p>

                        <p className="calculator__block__sum__list__item__number">
                          {list.price}
                        </p>
                      </li>
                    )
                )}
              </ul>

              {(selectedDepartmentsArray.length !== 0 ||
                selectedServicesArray.length !== 0) && (
                <div className="calculator__block__sum__price">
                  {staffCount && isClicked && (
                    <FadeUp_block>
                      <p className="calculator__block__sum__price__final">
                        {staffCount && totalPrice !== null
                          ? totalPrice.toLocaleString()
                          : ""}
                      </p>
                    </FadeUp_block>
                  )}
                  {staffCount && isClicked && (
                    <FadeUp_block>
                      <p className="calculator__block__sum__price__discount">
                        {staffCount && totalSavings !== null
                          ? `Вы экономите ${totalSavings.toLocaleString()} т`
                          : ""}
                      </p>
                    </FadeUp_block>
                  )}
                </div>
              )}

              <div className="calculator__block__sum__info">
                {selectedDepartmentsArray.length > 0 &&
                  selectedServicesArray.length > 0 &&
                  staffCount > 0 &&
                  isClicked && (
                    <FadeUp_block>
                      <p className="calculator__block__sum__info__text">
                        *Окупаемость ожидается{" "}
                        <span className="calculator__block__sum__info__text__blue">
                          к концу третьего месяца
                        </span>
                        .
                        <br />
                        За счёт повышения эффективности работы
                        <br />и оптимизации затрат на лишние процессы.
                        <br />
                        Затем начнётся рост прибыли.
                      </p>
                    </FadeUp_block>
                  )}
              </div>
              {!(
                selectedDepartmentsArray.length > 0 &&
                selectedServicesArray.length > 0 &&
                staffCount > 0
              ) && (
                <FadeUp_block>
                  <p className="calculator__block__sum__text">
                    Выберите отделы, которые нужно оцифровать, сервисы для
                    синхронизации с Битрикс24 и укажите количество сотрудников,
                    которые будут работать в системе.
                  </p>
                </FadeUp_block>
              )}
            </div>
          </div>
          <a
            href="https://wa.me/77752214996?text=Меня+интересует+демо-версия+Битрикс24"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <ButtonRounded className="calculator__btn">
              Получить КП
              <Image
                className="button-img"
                src="/icons/arrow-top-right-white.png"
                layout="fixed"
                width={24}
                height={30}
                alt="arrow top right white png"
              />
            </ButtonRounded>
          </a>
        </div>
      </div>
    </div>
  );
}
