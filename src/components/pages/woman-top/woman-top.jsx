import React from "react";
import { FormComponent } from '../../form/form-component'; 
import { CustomCarousel } from '../../carousel/carousel';
import { PageRequestSent } from '../../page-request-sent/page-request-sent';

export const WomanTop = () => (
     <div className="main-wrapper">
          <div className="block-1" />
          <div className="price-block">
            <div className="block-sale py-2 h4 mb-0 text-white">Скидка 50%</div>

            <div className="d-flex align-items-center justify-content-around">
            <div className="d-flex flex-column align-items-center price-old">
              <span>
                Обычная цена:
              </span>

              <span className="h4 mb-0">
                60 byn
              </span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span>
                Цена по акции:
              </span>
               <span className="h4 mb-0">
               29.99 byn
                </span> 
            </div>
            </div>
           
          </div>
          {/* setRequestSet={setRequestSet} */}
          <FormComponent /> 
          <div className="block-4" /> 
          <div className="block-5" /> 
          <div className="block-6 carousel-wrapper py-2">
             <CustomCarousel order={1} />
             </div>
          <div className="block-7" /> 
          <div className="block-8" /> 
          <div className="block-9">
              <h3>Отзывы покупателей</h3>
             <CustomCarousel order={2} />
            </div> 
          <div className="block-10" />
          {/* <FormComponent /> */}
       </div>
)