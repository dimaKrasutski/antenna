import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { Footer } from '../../footer/footer'; 
import antennaVideo from '../../../img/antenna/antenna-video.webp';
import image1 from '../../../img/antenna/b2-1.png';
import image2 from '../../../img/antenna/b2-2.png';
import image3 from '../../../img/antenna/b2-3.png';
import { PageRequestSent } from '../../page-request-sent/page-request-sent';
import { FormComponent } from '../../form/form-component';
import { ANTENN_AIR_SAW_TABLE_URL } from '../../../constants';

import './antenna.scss';

export const Antenna = () => {
    const [isRequestSet, setRequestSet] = useState(false);
  
    const dayYesterday = moment().subtract(1, 'days').format('Do MMMM');
    const dayTomorrow = moment().add(1, 'days').format('Do MMMM');
    
  return isRequestSet ? (
       <PageRequestSent setRequestSet={setRequestSet} />
    ) : (
        <>
        <div className="main-wrapper text-center main-wrapper-antenna">
        <div className="antenna-header text-white bg-primary">
         <h3 className="mb-0 font-weight-medium py-1">
         TV Антенна до 100 каналов
          <br />
            без помех и ряби
         </h3>
         <p className="bg-black antenna-header-secondary py-2 mb-0 font-weight-bold">
             Даже в местности со слабым сигналом
         </p>
         </div> 
 
         <div className="main-1" />
  
         <div className="price d-flex justify-content-around mt-2 py-2 position-relative">
          <div className="old-price d-flex flex-column justify-content-around ml-3">
             <span className="">
              Обычная цена:
             </span>

             <span className="h4 text-black-50 mb-0 old-price-amount">80 BYN</span>
          </div>

          <div className="sale-price d-flex flex-column justify-content-around">
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


         <div className="grid-wrapper mt-4">
         <div className="d-flex flex-column align-items-center text-small">
           <img src={image3} className="img-3" alt="" />
            качество Full HD
          </div>

          <div className="d-flex flex-column align-items-center text-small">
           <img src={image2} className="img-2" alt="" />
          до 100 бесплатных каналов!
          </div>

          <div className="d-flex flex-column align-items-center text-small">
           <img src={image1} className="img-1" alt="" />
            Хороший прием картинки!
          </div>         
         </div>

         <h2 className="font-weight-bold my-3">
             Full HD в каждом доме
         </h2>
 
         <div className="hd-wrapper mb-5">
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-1 mx-auto mb-2" />
              <span>
                 Хороший сигнал и Full HD качество картинки
              </span>
            </div>
 
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-2 mx-auto mb-2" />
              <span>
                 Транслирует до 100 каналов
              </span>
            </div>
 
 
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-3 mx-auto mb-2" />
              <span>
                 Хорошо работает в местности со слабым сигналом
              </span>
            </div>
 
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-4 mx-auto mb-2" />
              <span>
                 Быстрая установка и подключение
              </span>
            </div>
         </div>
 
         <h5 className="my-4">Акция действует с 
         <br />
         <span className="mx-1 text-blue">
         {dayYesterday}
         </span>
        <span>по</span>
         <span className="mx-1 text-blue">
           {dayTomorrow} <br />
         </span>
          2023 года</h5>
 
         <FormComponent
                  setRequestSet={setRequestSet}
                  url={ANTENN_AIR_SAW_TABLE_URL}
                  product={"antenna-tv"}
                  isSize={false}
                />
     
       
 
         <h2 className="font-weight-bold mb-3 text-uppercase">
             До 100 каналов без помех и ряби
         </h2>
 
         <div>
             <img alt="" src={antennaVideo} />
         </div>
 
         <div className="antenna-char mt-4">
             <h2 className="mb-3 pt-3">Характеристики товара</h2>

             <div className="antenna-char-bg mb-4" />
 
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
                до 100 каналов в зависимости от TV оператора
               </span>
             </p>
             </div>
 
            <div className="how-to-order-bg" />
 
 
     </div>

     <Footer className="footer-antenna mx-auto" />
     </>
    )
}