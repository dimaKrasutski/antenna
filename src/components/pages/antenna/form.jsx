import React from 'react';
import axios from 'axios';
import './form.css';

const url = 'https://sheet.best/api/sheets/eb44ba6d-6356-4f6f-9d09-f03dd759a093'; // antenna

export const Form = ({ setRequestSet }) => {
    
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const userInfo = Object.fromEntries(formData.entries());
        const { name, phone } = userInfo;

        const dateNow = new Date();

        console.log(name, phone, dateNow);

       axios.post(url,
        { phone,
          name,
          date: dateNow,
          position: 'antenna',
        })
         .then(response => {
        console.log(response);

        setRequestSet(true);
      })
    }

    return (
        <>

        <div className="form block-2 bg-light pt-5 mb-4">
         <form method="post" onSubmit={handleSubmit}>
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
                <input type="checkbox" name="agree" defaultChecked={true} className="me-1" />
                {/* onClick={handleCheck} value={isChecked}  */}
                <span className="ml-2">
                  Я согласен с &shy;
                 <a href="https://goldshop.by/politics.html" target="_blank" rel="noopener noreferrer">
                      политикой конфиденциальности &shy;
                  </a>
                  и пользовательским соглашением
                </span>
              </label>
    

              <button className="btn-order mt-4 mb-5 mx-auto">
                 Заказать
              </button>
            </div>
    
         </form>
      </div>
    </>
    )
}
