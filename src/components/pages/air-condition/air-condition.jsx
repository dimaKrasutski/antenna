import React, { useState } from 'react';
import { IconOk } from '../../../icons/icon-ok';
import { Footer } from '../../footer/footer';
import { FormComponent } from '../../form/form-component';
import { PageRequestSent } from '../../page-request-sent/page-request-sent';
import advantageImg1 from '../../pages/air-condition/img/advantages-1.png';
import advantageImg2 from '../../pages/air-condition/img/advantages-2.png';
import advantageImg3 from '../../pages/air-condition/img/advantages-3.png';
import advantageImg4 from '../../pages/air-condition/img/advantages-4.png';
import airAd from '../../pages/air-condition/img/air-condition-ad.jpeg';
import airSpec1 from '../../pages/air-condition/img/spec-1.png';
import airSpec2 from '../../pages/air-condition/img/spec-2.png';
import airSpec3 from '../../pages/air-condition/img/spec-3.png';
import { ANTENN_AIR_SAW_TABLE_URL } from '../../../constants';

import './air-condition.scss';

export const AirCondition = () => {
    const [isRequestSet, setRequestSet] = useState(false);

    return isRequestSet ? (
        <PageRequestSent setRequestSet={setRequestSet} />
     ) : (
        <>
            <div className="header d-flex justify-content-center pt-4">
                <h3 className="header-text text-uppercase text-left mb-5">
                    Мини-
                    <br />
                    кондиционер
                    <br />
                    арктика
                </h3>
            </div>

            <div className="air-condition-main text-center pb-5 mx-auto">
                <div className="d-flex flex-column pt-5 ml-4">
                    <h3 className="font-weight-bold">Мини-кондиционер 4в1</h3>

                    <span className="d-flex align-items-center">
                        <IconOk className="mr-3" />
                        <span>
                            Увлажнитель и очиститель воздуха
                        </span>
                    </span>

                    <span className="d-flex align-items-center">
                        <IconOk className="mr-3" />
                        <span>
                            Работает абсолютно бесшумно
                        </span>
                    </span>

                    <span className="d-flex align-items-center">
                        <IconOk className="mr-3" />
                        <span>
                            Компактные размеры
                        </span>
                    </span>

                    <span className="d-flex align-items-center">
                        <IconOk className="mr-3" />
                        <span>
                            Прост и удобен в использовании
                        </span>
                    </span>

                </div>

                <a href="#order" className="btn py-0 btn-order mt-3 h3">
                    Заказать
                </a>

                <div className="air-condition-gif mt-2" />
                <div className="old-price-bg" />

                <p className="text-md">Акция действует с 14.06.2023 по 16.06.2023 включительно на всей территории РБ</p>
            </div>


            <div className="advantages pb-5 d-flex flex-column align-items-center">

                <h3 className="mx-5 px-5 mt-4 text-center">
                    Преимущества мини-кондиционера
                </h3>

                <div className="d-flex flex-column align-items-center">
                    <img src={advantageImg1} alt="" />

                    <h4>Охладитель</h4>
                    <span>
                        Устройство остужает нагретый воздух
                    </span>
                </div>

                <div className="d-flex flex-column align-items-center">
                    <img src={advantageImg2} alt="" />

                    <h4>Увлажнитель</h4>
                    <span>
                        Устройство остужает нагретый воздух
                    </span>
                </div>

                <div className="d-flex flex-column align-items-center mb-2">
                    <img src={advantageImg3} alt="" />

                    <h4>Освежитель</h4>
                    <span>
                        Устройство остужает нагретый воздух
                    </span>
                </div>

                <div className="d-flex flex-column align-items-center">
                    <img src={advantageImg4} alt="" />

                    <h4>Ночник</h4>
                    <span>
                        Устройство остужает нагретый воздух
                    </span>
                </div>

            </div>

            <div className="air-condition-ad d-flex align-items-center flex-column">
                <div className="air-condition-inner mt-5 pb-4 px-3 rounded bg-white text-center">
                    <img src={airAd} className="air-condition-img rounded" alt="" />

                    <h4 className="mx-1">Мини-кондиционер 4в1 "Арктика"</h4>

                    <span className="text-center">
           Компактный персональный охладитель наполняющий воздух вокруг вас
          приятной прохладой всего за несколько минут. Он обладает легким весом
          и бесшумным вентилятором, который имеет 3 скоростных режима.
          Устройство быстро создает приятный микроклимат рядом с пользователем.
          С его помощью вы сможете наслаждаться прохладой где угодно: на кухне,
          в кабинете, в гостиной. Устройство абсолютно бесшумно и его можно
          взять с собой на работу.
                    </span>
                </div>

            </div>

            <div className="air-condition-spec d-flex flex-column align-items-center">
              <div className="air-spec d-flex flex-column mt-3 mx-auto text-small py-3 mb-3">
                <img src={airSpec1} className="air-spec-img mx-auto my-3" alt="" />

                <span className="">Модель: "Арктика"</span>
                <span className="">Оригинальное название: Arctic Cooler</span>
                <span className="">Цвет: белый, серый</span>
                <span className="">Таймер: до 8 часов</span>
              </div>

              <div className="air-spec d-flex flex-column mt-3 mx-auto text-small py-3 mb-3">
                <img src={airSpec2} className="air-spec-img mx-auto my-3" alt="" />

                <span className="">Назначение: очистка воздуха/увлажнение</span>
                <span className="">Тип увлажнителя: холодное увлажнение</span>
                <span className="">Дисплей: нет</span>
                <span className="">Емкость резервуара для воды: 700 мл</span>
                <span className="">Подстветка корпуса: есть</span>
                <span className="">Габариты: 170х170х170 мм</span>
                <span className="">Страна производителя: Китай</span>
              </div>

              <div className="air-spec d-flex flex-column mt-3 mx-auto text-small py-3 mb-3">
                <img src={airSpec3} className="air-spec-img mx-auto my-3" alt="" />

                <span className="">Увлажнитель и очиститель воздуха</span>
                <span className="">Встроенная подстветка</span>
                <span className="">Отличное дополнение к интерьеру</span>
              </div>


            </div>


            <div className="main-second mx-auto">
              <div className="air-condition-gif mt-5" />
              <div className="old-price-bg" />
            </div>


            <div id="order" className="form-order text-center">
                <h2 className="text-order pt-5 mb-5">Оформить заказ</h2>
                <FormComponent
                  setRequestSet={setRequestSet}
                  url={ANTENN_AIR_SAW_TABLE_URL}
                  product={'air-condition'}
                  isSize={false}
                />
            </div>

            <Footer className="air-condition-footer mt-5 mb-3" />

        </>
    )
}