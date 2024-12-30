"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./form.scss";
import Input from "../ui/Input";
import FadeUp_block from "../ui/FadeUp-block";
export default function Form(id) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [segment, setSegment] = useState("");
  const [task, setTask] = useState("");
  const [file, setFile] = useState("");
  const [selectedFile, setSelectedFile] = useState("Вложите техническое задание (опционально)");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitText, setSubmitText] = useState("Отправить");

  const changeSubmitText = () => {
    setSubmitText("Ошибка при отправке");
    setTimeout(() => {
      setSubmitText("Отправить");
    }, 2000);
  };

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]); // Убираем префикс data:
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  const uploadFileToBitrix = async () => {
    try {
      const file64 = await toBase64(file);

      const folderId = 27110;
      const formData = {
        id: folderId,
        data: { NAME: file.name },
        fileContent: [file.name, file64],
      };

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const req = await res.json();

      return req;
    } catch (error) {
      changeSubmitText();
      console.error("Ошибка при загрузке файла", error);
      return false;
    }
  };

  const sendData = async (data) => {
    try {
      const req = await fetch("/api/create/deal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await req.json();
      setLoading(false);

      if (res.result) {
        console.log("Сделка успешно создана с ID:", res.result);
        setSubmitText("Отправлено!");
        return true;
      } else {
        throw new Error();
      }
    } catch (error) {
      setLoading(false);
      changeSubmitText();
      console.error("Ошибка при создании сделки", error);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    setSubmitText("Отправляем");
    let urlToBitrixFile;
    try {
      if (file) {
        urlToBitrixFile = await uploadFileToBitrix();

        if (urlToBitrixFile?.error) {
          setErrorMsg(urlToBitrixFile?.error_description);
          throw new Error(urlToBitrixFile?.error_description);
        }
      }

      const data = {
        fields: {
          TITLE: name,
          COMMENTS: `${name} / ${phone} / ${company} / ${segment}`,
          UF_CRM_1729507386492: `${name} / ${company} / ${segment}`,
          UF_CRM_6738CF09CE9DB: task,
          UF_CRM_1731779763: urlToBitrixFile?.result.DETAIL_URL,
        },
        params: { REGISTER_SONET_EVENT: "Y" },
      };

      sendData(data);
    } catch (error) {
      changeSubmitText();
      setLoading(false);
      console.error("Возникли ошибки при отправке формы", error);
    }
  };

  const selectFile = (file) => {
    setFile(file);
    if (file.name) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile("Опишите техническое задание (опционально)");
    }
  };

  return (
    <form className="form" id={id} onSubmit={(e) => submitForm(e)}>
      <Input
        type="text"
        name="name"
        className="form__wrapper"
        text="Введите имя"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="number"
        name="phone"
        className="form__wrapper"
        text="Введите номер телефона"
        required
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        type="text"
        name="company"
        className="form__wrapper"
        text="Введите компанию (опционально)"
        onChange={(e) => setCompany(e.target.value)}
      />
      <Input
        type="text"
        name="segment"
        className="form__wrapper"
        text="Введите нишу (опционально)"
        onChange={(e) => setSegment(e.target.value)}
      />
      <Input
        type="text"
        name="task"
        className="form__wrapper form__wrapper--task"
        text="Опишите техническое задание (опционально)"
        onChange={(e) => setTask(e.target.value)}
      />
      <Input
        type="file"
        name="task"
        className="form__wrapper form__wrapper--file"
        text={selectedFile}
        accept=".png, .jpg, .jpeg, .docx, .pdf"
        onChange={(e) => selectFile(e.target.files[0])}
      >
        <Image
          src="/icons/file.svg"
          alt="upload file svg icon"
          width={32}
          height={32}
          loading="lazy"
        />
      </Input>

      <FadeUp_block>
        <div className="form__send-form--wrapper">
          <input
            className="form__send-form"
            type="submit"
            name="send"
            value={submitText}
            id=""
            disabled={loading}
          />
          {loading && !errorMsg && (
            <Image src="/icons/loader.svg" alt="loading..." width={32} height={32} loading="lazy" />
          )}

          {errorMsg && <p>{errorMsg}</p>}
        </div>
      </FadeUp_block>
    </form>
  );
}
