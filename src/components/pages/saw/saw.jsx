import React, { useState } from 'react';
import infoImg1 from './img/info-1.jpeg';
import infoImg2 from './img/info-2.jpeg';
import infoImg3 from './img/info-3.jpeg';
import sawVideo from './img/saw-video.gif';
import sawDeliveryImg from './img/delivery.jpeg';
import sawPaymentImg from './img/payment.jpeg';
import sawWalletImg from './img/quality.jpeg';
import { Footer } from '../../footer/footer';
import { FormComponent } from '../../form/form-component';
import { PageRequestSent } from '../../page-request-sent/page-request-sent';
import { ANTENN_AIR_SAW_TABLE_URL } from '../../../constants';

import './saw.scss';

export const Saw = () => {
    const [isRequestSet, setRequestSet] = useState(false);

    return isRequestSet ? (
        <PageRequestSent setRequestSet={setRequestSet} />
     ) : (
        <div className="saw text-center">
            <div className="saw-header text-center py-1">
                <h5 className="text-white">
                    Аккумуляторная цепная мини-пила
                </h5>

                <h5 className="saw-header-text-secondary">Для обрезания деревьев и распилик дров</h5>

            </div>
            <div className="saw-main-1">

                <div className="saw-price d-flex justify-content-between mb-4">
                   <div className="d-flex flex-column text-center saw-price-block saw-price-block-1 py-3">
                      <span className="text-light-blue h5 mb-0">
                        Старая цена:
                      </span>

                      <span className="text-blue h4 mb-0">
                        200 byn
                      </span>

                   </div>

                   <div className="d-flex flex-column text-center saw-price-sale py-3">
                     <span className="h4 mb-0">
                        Cкидка
                      </span>
                      <span className="h4 text-red mb-0">
                        -50%
                      </span>

                   </div>

                   <div className="d-flex flex-column text-center saw-price-block saw-price-block-3 py-3">
                   <span className="text-light-blue h5 mb-0">
                       Новая цена:
                      </span>

                      <span className="text-white h4 mb-0">
                       99 byn
                      </span>

                   </div>
                </div>

                <span className="h4 mb-2">
                    Акция действует с
                    <span className="text-blue"> 14 июня по 16 июня  
                    </span>

                    <span className="ml-2">
                      2023 года
                    </span>
                </span>
              
            <div className="d-flex justify-content-between px-2 my-4">
                <div className="d-flex flex-column">
                  <img src={infoImg1} className="info-img mx-auto" alt="" />
                  <span className="text-center mt-1 text-small">
                    Компактная и эргономичная
                  </span>
                </div>

                <div className="d-flex flex-column">
                  <img src={infoImg2} className="info-img mx-auto" alt="" />
                  <span className="text-center mt-1 text-small">
                   Мощный и надежный двигатель
                  </span>
                </div>

                <div className="d-flex flex-column">
                  <img src={infoImg3} className="info-img mx-auto" alt="" />
                  <span className="text-center mt-1 text-small">
                   Легкая разборка и сборка
                  </span>
                </div>
            </div>


            <div>
            </div>

            <span className="h6 text-uppercase">По акционной цене осталось 17 шт.</span>

            <img src={sawVideo} alt="" className="saw-video my-4 d-block mx-auto rounded" />

            <a href="#sawOrderForm" className="btn btn-order my-4 py-0">
               Заказать со скидкой
            </a>

            <div className="saw-img-bg mx-4" />

            <span className="m-4 d-block font-weight-medium">
               Лучшая портативная пила в своем роде, которая за счет мощного двигателя способна спиливать не только ветки
               деревьев в садоводстве, но и распиливать достаточно большие бревна для деревозаготовки!
            </span>

            <div className="saw-img-bg-2 mx-4" />

            <span className="mx-4 my-2 d-block font-weight-medium">
            Аккумуляторная электрическая пилка, легкая и портативная, длительное время автономной работы. Легкая и
            удобная, эргономичный корпус, благодаря чему не будут уставать руки.
            </span>

            <div className="saw-img-bg-3 mx-4" />

            <span className="mx-4 my-2 d-block font-weight-medium">
            Быстрая и медленная регулировка, плавная смена скорости. Интеллектуальная плата управления пилой.
            Специальная направляющая из вольфрамовой стали не требует смазки, поэтому снижает сопротивление во время
            работы и снижает износ. Небольшой размер, можно удерживать одной рукой. Направляющая пластина хорошего
            качества, глубокая закалка, более износостойкая, гладкая резка.
            </span>

            <div className="saw-img-bg-4 mx-4" />

            <a href="#sawOrderForm" className="btn btn-order my-4 py-0">
               Заказать со скидкой
            </a>

            <div className="saw-img-bg-5 mx-4 mb-4" />
            <div className="saw-img-bg-6 mx-4" />

            <a href="#sawOrderForm" className="btn btn-order my-4 py-0">
               Заказать со скидкой
            </a>

            <div className="saw-delivery d-flex flex-column my-4">
                <h3 className="text-blue">ДОСТАВКА И ОПЛАТА</h3>

              <div className="saw-delivery-item d-flex flex-column align-items-center my-3 pb-3">
                  <img src={sawDeliveryImg} className="saw-delivery-item-img my-3" />
                  <span className="saw-delivery-item-text font-weight-medium text-md">
                     Доставкой почтой по Беларуси или курьером по Минску
                     в течение 1-3 дней
                  </span>
              </div>

              <div className="saw-delivery-item d-flex flex-column align-items-center my-3 pb-3">
                  <img src={sawPaymentImg} className="saw-delivery-item-img my-3" />
                  <span className="saw-delivery-item-text font-weight-medium text-md">
                      Без предоплат
                      <br />
                      Оплата только по факту получения товара
                  </span>
              </div>

              <div className="saw-delivery-item d-flex flex-column align-items-center my-3 pb-3">
                  <img src={sawWalletImg} className="saw-delivery-item-img my-3" />
                  <span className="saw-delivery-item-text font-weight-medium text-md">
                      Возможность проверки товара перед покупкой
                  </span>
              </div>
            </div>

            <FormComponent
                  formId="sawOrderForm"
                  setRequestSet={setRequestSet}
                  url={ANTENN_AIR_SAW_TABLE_URL}
                  product={"saw"}
                  isSize={false}
                />

            <Footer className="saw-footer mt-5 pb-3 mx-4" />
            </div>
        </div>
    )
}