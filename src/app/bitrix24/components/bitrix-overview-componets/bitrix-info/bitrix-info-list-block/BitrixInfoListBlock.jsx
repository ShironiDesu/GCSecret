import "./BitrixInfoListBlock.scss";
import Image from "next/image";
export default function BitrixInfoListBlock({ data, title }) {
  return (
    <div className="bitrix-overview__list__container blue-background">
      <div className="bitrix-overview__list__block">
        <h4 className="bitrix-overview__list__title">{title}</h4>
        <ul className="bitrix-overview__list">
          {data.blueInfo.info.map((item, index) => (
            <li className="bitrix-overview__list__item" key={index}>
              <Image
                className="bitrix-icon"
                src="/icons/select.svg"
                alt="Select"
                width={16}
                height={16}
                loading="lazy"
              />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
