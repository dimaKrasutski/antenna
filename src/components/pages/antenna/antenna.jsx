import React, { useState } from 'react';
import { Footer } from '../../footer/footer'; 
import antennaVideo from '../../../img/antenna/antenna-video.webp';
import antennaCharImg from '../../../img/antenna/antenna-char.png';
import image1 from '../../../img/antenna/b2-1.png';
import image2 from '../../../img/antenna/b2-2.png';
import image3 from '../../../img/antenna/b2-3.png';
import { PageRequestSent } from '../../page-request-sent/page-request-sent';
import { FormComponent } from '../../form/form-component';
import { ANTENN_AIR_SAW_TABLE_URL } from '../../../constants';

import './antenna.scss';

export const Antenna = () => {
    const [isRequestSet, setRequestSet] = useState(false);

  return isRequestSet ? (
       <PageRequestSent setRequestSet={setRequestSet} />
    ) : (
        <>
        <div className="main-wrapper text-center main-wrapper-antenna">
        <div className="antenna-header text-white text-uppercase">
         <h1 className="mb-0">
         До 100 каналов
          <br />
            Без помех и Ряби
         </h1>
         <p className="bg-black antenna-header-secondary py-2 mb-0">
             ДАЖЕ В МЕСТНОСТИ СО СЛАБЫМ СИГНАЛОМ
         </p>
         </div> 
 
         <div className="main-1" />
  
         <div className="price d-flex justify-content-around mt-5 py-2 position-relative">
          <div className="old-price d-flex flex-column justify-content-around ml-3">
             <span className="">
              Обычная цена:
             </span>

             <span className="h4 text-black-50 mb-0 old-price-amount">80 BYN</span>
          </div>

          <div className="sale-price d-flex flex-column justify-content-around mr-2">
            <span className="font-weight-bold">
              Скидка:
             </span>

             <span className="h1 mb-0 sale-price-amount">50%</span>
          </div>

          <div className="new-price d-flex flex-column justify-content-around ml-auto mr-2">
            <span>
              Цена сегодня:
             </span>

             <span className="h4 mb-0 new-price-amount">39.99 BYN</span>

          </div>
         </div>


         <div className="d-flex mt-4 justify-content-center">
          <div className="d-flex flex-column align-items-center text-small">
           <img src={image1} className="img-1" alt="" />
           Уверенный прием картинки!
          </div>

          <div className="d-flex flex-column align-items-center text-small mr-3">
           <img src={image2} className="img-2" alt="" />
          до 100 бесплатных каналов!
          </div>

          <div className="d-flex flex-column align-items-center text-small mr-3">
           <img src={image3} className="img-3" alt="" />
           4к качество Full HD!
          </div>
         </div>
 
         <h5 className="my-4">Акция действует с 
         <span className="mx-1 text-blue">
         14 июня по 16 июня
         </span>
          2023 года</h5>
 
         <FormComponent
                  setRequestSet={setRequestSet}
                  url={ANTENN_AIR_SAW_TABLE_URL}
                  product={"antenna-tv"}
                  isSize={false}
                />
     
         <h2 className="font-weight-bold mb-3">
             Full HD в каждом доме
         </h2>
 
         <div className="hd-wrapper mb-5">
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-1 mx-auto mb-2" />
              <span>
                 Качественный сигнал и HD качество картинки
              </span>
            </div>
 
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-2 mx-auto mb-2" />
              <span>
                 Позволяет транслировать до 100 каналов
              </span>
            </div>
 
 
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-3 mx-auto mb-2" />
              <span>
                 Стабильно работает в местности со слабым сигналом
              </span>
            </div>
 
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-4 mx-auto mb-2" />
              <span>
                 Простая установка и подключение
              </span>
            </div>
         </div>
 
         <h2 className="font-weight-bold mb-3 text-uppercase">
             До 100 каналов без помех и ряби
         </h2>
 
         <div>
             <img alt="" src={antennaVideo} />
 
             <p className="text-md mb-3">
                 За компактными размерами и простым внешним видом скрывается современная начинка, благодря которой теперь телевидение в цифровом качестве будет доступно всегда и везде.
             </p>
         </div>
 
         <div className="antenna-char">
             <h2 className="mb-3 pt-3">Характеристики товара</h2>
 
            <img alt="" src={antennaCharImg} className="mb-4" />
 
            <p className="pb-2">Tип товара:
               <span className="ml-2 font-weight-bold">
                 Комнатная антенна
               </span>
             </p> 
            
 
             <p className="pb-2 bg-white">Частотный диапазон:
               <span className="ml-2 font-weight-bold">
               VHF (174..240mhz) \ UHF (470..862mhz)
               </span>
             </p>
 
 
             <p className="pb-2">Дальность приема:
               <span className="ml-2 font-weight-bold">
               50км
               </span>
             </p>
 
             <p className="pb-2 bg-white">Количество каналов:
               <span className="ml-2 font-weight-bold">
                до 100 каналов в зависимости от вашего ТВ оператора
               </span>
             </p>
             </div>
 
            <div className="how-to-order-bg mb-4" />
 
 
     </div>

     <Footer className="footer-antenna mx-auto" />
     </>
    )
}