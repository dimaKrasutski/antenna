import Carousel from 'react-bootstrap/Carousel';
import carousel1_1 from '../../img/carousel-1/1.png'; 
import carousel1_2 from '../../img/carousel-1/2.png'; 
import carousel1_3 from '../../img/carousel-1/3.png'; 
import carousel1_4 from '../../img/carousel-1/4.png'; 

import carousel2_1 from '../../img/carousel-2/1.png'; 
import carousel2_2 from '../../img/carousel-2/2.png'; 
import carousel2_3 from '../../img/carousel-2/3.png'; 
import carousel2_4 from '../../img/carousel-2/4.png'; 

import './carousel.css';

export const carousel1 = [
    {
        'title': 'Изящная форма',
        'img': carousel1_1,
    },
    {
        'title': 'Гипоаллергенный дышащий материал',
        'img': carousel1_2,
    },
    {
        'title': 'Съемные пуш-ап вставки для доп. обьема',
        'img': carousel1_3,
    },
    {
        'title': 'Незаметны под одеждой',
        'img': carousel1_4,
    }
]

export const carousel2 = [
   {
    'title': "Елена Долгих, Слуцк",
    'img': carousel2_1,
    'text': 'Такие хорошенькие топы! Мне очень понравились )) Кружевная вставка придает изюминку'
   },
   {
    'title': "Ольга Миронова, Кобрин",
    'img': carousel2_2,
    'text': 'С моим пятым размером груди я уже сталкивалась со столькими проблемами! Найти хорошее бельё – целый квест! Ажур бра мне подошли так, что теперь я не могу носить ничего другого. Материал качественный, и бретельки широкие. Спасибо, очень довольна!)'
   },
   {
    'title': "Катя Дрозд, Логойск",
    'img': carousel2_3,
    'text': 'Очень удобное бельё! Мне нравится что это целый набор топов разных цветов, потому что я могу носить их подо всё. Белый я только на работу ношу под блузку, чёрный и бардовый во всех остальных случаях. Под одеждой незаметно, что плюс!'
   },
   {
    'title': "Мария Беляева, Миоры",
    'img': carousel2_4,
    'text': 'Топы действительно замечательные! Наверное, это единственное нижнее бельё, в котором я не выгляжу как гусеница. Сидят отлично, а самое главное, скрывают все ненавистные складки!'
   }
]


export const CustomCarousel = ({ order }) => (
    <Carousel className="mx-2" indicators={false} variant="light" fade={false} interval={1500}>

       {order === 1 ? 
        (
            carousel1.map(({ title, img }) => (
                <Carousel.Item key={title}>
                  <Carousel.Caption className="py-0">
                     <p className="carousel-text mb-2">{title}</p>
                </Carousel.Caption>
        
                 <img
                   className="d-block w-100"
                   src={img}
                   alt={title}
               />
        
        
            
            </Carousel.Item>
        ))
        ) : carousel2.map(({ title, img, text }) => (
            <Carousel.Item key={title}>
              <div className="img-container d-flex align-items-center justify-content-center mb-2">
                  <img className="avatar mr-4" src={img} alt="" />
                  <p className="carousel-text mb-2">{title}</p>    
            </div>  

            <span className="text-text mx-4 text-center">
                {text}
            </span>
    
        </Carousel.Item>
    ))
            }
  </Carousel>
)