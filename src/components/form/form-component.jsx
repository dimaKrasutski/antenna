import React, { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

const url = 'https://sheet.best/api/sheets/94e0aaa5-8285-4bf3-a0b9-2bfbbffebdff';

export const FormComponent = () => {
    const [size, setSize] = useState('s-m');
    // const [isChecked, setChecked] = useState(false);
    // const handleCheck = () => setChecked(!isChecked)
    
    const handleSize = ({ target : { id }}) => setSize(id);
    
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const userInfo = Object.fromEntries(formData.entries());
        const { name, phone } = userInfo;

        const dateNow = new Date().toLocaleString();

        console.log(name, phone);

       axios.post(url,
        { phone,
          name,
          date: dateNow,
          position: 'woman-top',
          size
        })
         .then(response => {
        console.log(response);
      })
    }

    return (
        <>

        <div className="block-2 bg-light">
        <h4>
          Выберите размер
        </h4>

         <form method="post" onSubmit={handleSubmit}>
            <div className="radio-block-top d-flex justify-content-around w-50 mx-auto mb-3">
               <label className="label position-relative">
                 <input id="s-m" type="radio" name="myRadio" className="radio-input" value="s-m" onClick={handleSize} defaultChecked={true} />
    
                 <span className={classNames('size-button d-inline-flex', {'size-active bg-warning': size === "s-m"})}>S-M</span> 
               </label>
             
              <label className="label position-relative">
              <input id="l-xl" type="radio" name="myRadio" className="radio-input" value="l-xl" onClick={handleSize} />
    
              <span className={classNames('size-button d-inline-flex', {'size-active bg-warning': size === "l-xl"})}>L-XL</span> 
                </label>
            </div>
    
            <div className="d-flex flex-column">
              <div className="div-input mb-3">
              <input
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                className="form-input"
                minLength="2"
              />
              </div>
           
              <div className="div-input mb-3">
               <input
                type="text"
                name="phone"
                placeholder="Телефон"
                className="form-input"
                minLength="7"
                />
             </div>
    
              <label className="form-checkbox mx-auto w-75">
                <input type="checkbox" name="agree" defaultChecked={false} className="me-1" />
                {/* onClick={handleCheck} value={isChecked}  */}
                <span className="ml-2">
                  Я согласен с &shy;
                 <a href="https://goldshop.by/politics.html" target="_blank" rel="noopener noreferrer">
                      политикой конфиденциальности &shy;
                  </a>
                  и пользовательским соглашением
                </span>
              </label>
    
              <div className="mt-4">
                <button type="submit" className="btn-submit bg-warning border-0 w-75">
                  Отправить заявку
                </button>
              </div>
            </div>
    
         </form>
      </div>
    
    {/* <div id="block-3" className="block-3">
    <div>
      <p className="sale-text text-right pr-5 pt-2">Aкция действует с 25 по 28 мая</p>             
    
    </div>
    </div> */}
    </>
    )
}
