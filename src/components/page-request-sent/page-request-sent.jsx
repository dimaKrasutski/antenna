import React from 'react';
import { IconOk } from '../../icons/icon-ok';
import './page-request-sent.css';

export const PageRequestSent = ({ setRequestSet }) => (
    <div className="page-request-sent text-center d-flex flex-column align-items-center mt-5 pt-5 mx-auto">
        <IconOk />

        <h3>Ваша заявка принята!</h3>
        <h4>
            В ближайшее время с вами свяжется наш специалист!
        </h4>

        <button onClick={() => setRequestSet(false)} className="btn-back mt-5 btn-lg text-white">
            Вернуться на сайт
        </button>
    </div>
)