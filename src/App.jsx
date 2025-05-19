
import './App.css'


import img1 from '@/assets/INNOMA.VC.png'
import img2 from '@/assets/Group 929.png'
import img3 from '@/assets/img.png'
import img4 from '@/assets/rocket 1.png'
import img5 from '@/assets/Group 661.png'
import img6 from '@/assets/Group 763.png'
import img7 from '@/assets/3.png'
import img8 from '@/assets/Vector (4).png'
import img9 from '@/assets/Vector (5).png'
import img10 from '@/assets/Group 1072.png'
import img10_1 from '@/assets/Group 840.png'
import img11 from '@/assets/Group 1017.png'
import img12 from '@/assets/Group 811.png'
import img13 from '@/assets/Vector (6).png'
import img14 from '@/assets/Vector (7).png'
import img15 from '@/assets/Group 670.png'
import img16 from '@/assets/work1.png'
import img17 from '@/assets/Group 841.png'

import img18 from '@/assets/Group 1036.png'
import img19 from '@/assets/IMG_6198 2.png'
import img20 from '@/assets/test233 1.png'
import img21 from '@/assets/test23444 1.png'
import img22 from '@/assets/work2.png'
import img23 from '@/assets/Ellipse 545.png'
import img24 from '@/assets/Ellipse 546.png'
import img25 from '@/assets/Ellipse 548.png'
import img26 from '@/assets/Ellipse 544.png'

import img27 from '@/assets/the-1.png'
import img28 from '@/assets/the-2.png'
import img29 from '@/assets/the-3.png'
import img30 from '@/assets/the-4.png'
import img31 from '@/assets/the-5.png'
import img32 from '@/assets/the-6.png'
import img33 from '@/assets/the-7.png'
import img34 from '@/assets/the-8.png'

import img35 from '@/assets/fot-1.png'
import img36 from '@/assets/fot-2.png'
import img37 from '@/assets/fot-3.png'

import img38 from '@/assets/Group 664.png'
import img39 from '@/assets/Group 665.png'
import img40 from '@/assets/Group 870.png'




export default function App() {
  return (
    <>
      <header className='header'>
        <div className='div_header'>
          <img src={img1} alt="" />
          <div className='p_header'>
            <p>Кто мы?</p>
            <p>Услуги</p>
            <p>Акселератор</p>
            <p>Новости</p>
          </div>
          <button>Войти</button>
          <img src={img2} className='img2' alt="" />
        </div>

        <div className='div2_header'>
          <h1>Запустите <span style={{ backgroundColor: "#07AF91", borderRadius: "10px" }}> <br /> технологический IT-бизнес </span> <br /> на международных рынках</h1>
          <p>Открыт набор заявок на акселератор</p>
          <button className='button'>Подать заявку</button>
        </div>
      </header>

      <section className="section1">
        <Section style={{ display: "flex" }} name="Аналитические исследования" img={img3} des="Одним из наших ключевых направлений является анализ технологических трендов на международных рынках.Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации" />
        <Section style={{ display: "flex" }} name="Онлайн акселератор для IT бизнеса" img={img4} des="Онлайн программа аскелерации IT бизнеса позволит вашей команде открыть новые горизонты и возможности для бизнеса на глобальных рынках. В результате программы вы получите возможность презентовать свой проект для международных инвесторов и локальных партнеров" />
      </section>


      <h1 className="h1" style={{ color: "#1178B2" }}>Для кого мы?</h1>

      <section className='section2'>
        <Card2 number="01" name="IT проекты на стадии идеи" des="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт" />
        <Card2 number="02" name="IT проекты на стадии идеи" des="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт" />
        <Card2 number="03" name="IT проекты на стадии идеи" des="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт" />
      </section>

      <section className="section3">
        <div>
          <h1>Научитесь исследовать иностранные рынки и откройте новые возможности для своего бизнеса</h1>
          <p>Наша команда поможет вам изучить рынки Ближнего Востока, Азии, Латинской Америки и Африки</p>
          <Button2 name="Получить консультацию" />
        </div>
      </section>

      <section className="section4">
        <div>
          <h1 style={{ color: "#1178B2" }} className='h1'>С какими рынками мы работаем?</h1>
          <div className='card3_1'>
            <Card3 name="Ближний восток" style={{ backgroundColor: "#88BBD8", color: "white", borderRadius: "10px" }} />
            <Card3 name="Азия" />
            <Card3 name="Латинская Америка" style={{ backgroundColor: "#EEF1F4" }} />
            <Card3 name="Африка" style={{ backgroundColor: "#EEF1F4", borderRadius: "10px" }} />

          </div>
        </div>
        <div className='div_sec4'>
          <div className='div_div_sec4'>
            <h1>Чем интересен <span style={{ color: "#07AF91" }}>Рынок MENA:</span></h1>
            <p>ОАЭ, Саудовская Аравия,
              Израиль, Оман, Бахрейн, Катар,
              Тунис, Йемен, Египет, Алжир</p>
            <Button2 name="Выйти на рынок" />
            <img style={{ width: "220px", height: "80px" }} src={img6} alt="" />
          </div>
          <aside className='aside_sec4'>
            <div className='div_aside'>
              <Card4 number=">5,5 Млрд" des="Инвестиции pre-seed, seed" />
              <Card4 number="73" des="Венчурных фонда" />
            </div>
            <div className='div_aside'>
              <Card4 number=">300" des="Акселераторов, инкубаторов" />
              <Card4 img={img5} style={{ backgroundColor: "#1178B2", color: "white" }} des="Скачать отчетпо рынку MENA" />
            </div>

          </aside>
        </div>
      </section>

      <section className="section5">
        <div className='div2_sec5'>
          <h1 style={{ color: "#1178B2" }}>Об акселераторе IT бизнеса</h1>
          <p>Программа акселератора расчитана на 8 недель интенсивного онлайн  курса с вебинарами приглашенных экспертов по международным рынкам, разборами ваших идей и проектов </p>
        </div>
        <div className='div_sec5'>
          <Card5 img={img7} des="Месяца обучения" />
          <Card5 img={img8} des="Приглашенные эксперты" />
          <Card5 img={img9} des="Месяца обучения" />
        </div>
      </section>

      <section>


        <img src={img10} className='img10' alt="" />
        <img src={img10_1} className='img10_1' alt="" />
        <img src={img18} className='img18' alt="" />
      </section>

      <section className="section7">
        <h1 className="h1" style={{ color: "#1178B2" }}>Программа акселератора</h1>
        <div className='card6_1'>
          <Card6 name="Модуль 1" des="Тенденции и тренды современного мира" img={img11} />
          <Card6 style={{ color: "gray", border: "0", borderRadius: "0", boxShadow: "1px 1px 1px white" }} des="Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний" />
          <Card6 style={{ color: "gray", border: "0", borderRadius: "0", boxShadow: "1px 1px 1px white" }} des="Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний" />
          <Card6 style={{ color: "gray", border: "0", borderRadius: "0", boxShadow: "1px 1px 1px white" }} des="Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний" />
          <Card6 name="Модуль 2" des="Тенденции и тренды современного мира" img={img11} />
          <Card6 name="Модуль 3" des="Тенденции и тренды современного мира" img={img11} />
          <Card6 name="Модуль 4" des="Тенденции и тренды современного мира" img={img11} />
          <Card6 name="Модуль 5" des="Тенденции и тренды современного мира" img={img11} />
          <Card6 name="Модуль 6" des="Тенденции и тренды современного мира" img={img11} />
          <Card6 name="Модуль 7" des="Тенденции и тренды современного мира" img={img11} />
          <Card6 name="Модуль 8" des="Открытие юридического лица. Возможности для стартапов" img={img11} />
          <Card6 name="Демо день " />



        </div>
      </section>

      <section className="section8">
        <aside style={{ color: "white" }}>
          <h1>Попадите на радары инвесторов и партнеров</h1>
          <p>В результате прохождения обучения мы создадим профили вашей компании на всех международных скаутинговых площадках</p>
          <Button1 name="Записаться в акселератор" />
        </aside>
        <img src={img12} alt="" />
      </section>

      <section className="section9">
        <h1 className="h1" style={{ color: "#1178B2" }}>Что вы получите в результате?i</h1>
        <div>

          <Card7 number="01" name="Документы по продукту" des="Бизнес план, отчет по анализу рынка, маркетинговый план, unit экономика, список гипотез, проект MVP" />
          <Card7 number="02" name="Документы по продукту" des="Проведение исследования целевой аудитории позволит сформировать Product market fit" />
          <Card7 number="03" name="Продвижение продукта" des="Продвижение продукта через аналитические системы партнеров" />
        </div>
        <div>

          <Card7 number="04" name="Подписка на отчеты" des="Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер" />
          <Card7 number="05" name="Подписка на отчеты" des="Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер" />
          <Card7 number="06" name="Подписка на отчеты" des="Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер" />
        </div>
      </section>
      <section className="section10">
        <Card8 img={img13} name="Анализ международных рынков " naem2="Что входит в отчет?" des1="1. Анализ конкурентов" des2="2. Анализ инвесторов" des3="3. Размеры рынка (TAM,SAM,SOM)" des4="4. Анализ СМИ" des5="5. Анализ запрос в сети интернет" />
        <Card8 img={img14} name="Упаковка стартапа под локальные рынки" naem2="Что входит в отчет?" des1="1. Анализ конкурентов" des2="2. Анализ инвесторов" des3="3. Размеры рынка (TAM,SAM,SOM)" des4="4. Анализ СМИ" des5="5. Анализ запрос в сети интернет" />
        <Card8 img={img15} name="Акселератор вашего бизнеса" naem2="Что входит в отчет?" des1="1. Анализ конкурентов" des2="2. Анализ инвесторов" des3="3. Размеры рынка (TAM,SAM,SOM)" des4="4. Анализ СМИ" des5="5. Анализ запрос в сети интернет" />
      </section>
      <h1 className="h1" style={{ color: "#1178B2" }}>Кто мы?</h1>

      <section className="section11">
        <img src={img16} alt="" />
        <aside>
          <p> <span style={{ color: "#1178B2" }}> INNOMA.VC </span> -  Международное аналитическое агентство по запуску IT бизнеса на локальных рынках регионов Азии, Ближнего Востока, Латинской Америки, Африки.</p><br />
          <p>Наша команда состоит из профессионалов своего дела и основной нашей целью является помощь IT компаниям получить необходимые знания и пакеты документов, чтобы успешно запустить свой продукт на международных рынках. </p>

        </aside>
      </section>

      <section className="section12">
        <img src={img17} alt="" />
        <aside>
          <p style={{ fontSize: "20px" }}>Всем привет! Меня зовут Роман. Последние 6 лет я являюсь частью <br /> инновационной экосистемы СНГ,  прошел путь от проектного <br /> менеджера до руководителя продукта по автоматизированному скаутингу и скорингу стартапов. За 6 лет работы я увидел  множество ошибок и отсутствие ориентации акселерационных программ под запросы стартапов. Все акселераторы выполнялись ради акселераторв и выполнения КПЭ. </p>
          <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            <h1>Роман Гайн</h1>
            <p> Основатель INNOMA.VC</p>
          </div>
        </aside>
      </section>
      
      <section className="section13">
        <img src={img21} alt="" />
        <img src={img19} alt="" />
        <img src={img20} alt="" />
        <img src={img21} alt="" />
        <img src={img22} alt="" />
      </section>

      <section className="section14">
        <h1 className="h1" style={{color:"#1178B2"}}>Эксперты и трекеры программы</h1>
        <div className='div_div_sec14'>
          <img src={img11} className='img11' alt="" />
          <div className='div_sec14'>
            <Card9 img={img23} des="Проведение исследования целевой аудитории позволит сформировать Product market fit" name="Юрий Ким"/>
            <Card9 img={img24} des="Проведение исследования целевой аудитории позволит сформировать Product market fit" name="Эшли Абрамс"/>
            <Card9 img={img25} des="Проведение исследования целевой аудитории позволит сформировать Product market fit" name="Фатими Юсуф"/>
            <Card9 img={img26} des="Проведение исследования целевой аудитории позволит сформировать Product market fit" name="Майкл Донован"/>
          </div>
          <img src={img11} className='img11' alt="" />
        </div>
      </section>

      <section className="section15">
        <h1 className="h1" style={{color:"#1178B2"}}>Наши партнеры</h1>
        <div className='div_sec15'>
          <div>
            <Card10 img={img27}/>
            <Card10 img={img28}/>
            <Card10 img={img29}/>
            <Card10 img={img30}/>
          </div>
          <div>
            <Card10 img={img31}/>
            <Card10 img={img32}/>
            <Card10 img={img33}/>
            <Card10 img={img34}/>
          </div>
        </div>
      </section>


      <section className="section16">
        <div style={{color:"white"}}>
          <h1>Мы создаем международное сообщество экспертов и партнеров</h1>
          <p>Если вы или ваш бизнес может быть полезен IT  командам при выходе на международные рынки,  приглашем вас стать нашим партнером</p>
          <Button2 name="Стать партнером"/>
        </div>
      </section>


      <section className="section17">
        <h1>Мероприятия и события</h1>
        <div className='div_sec17'>
          <Card11 img={img35} number="22.11.2022" name="Новый отчет по MENA" des="Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем раундов, ТОП сферы)"/>
          <Card11 img={img36} number="22.11.2022" name="Вебинар по особенностям рынков Ближнего Востока" des="Поговорим с экспертами рынков в формате дискуссии"/>
          <Card11 img={img37} number="22.11.2022" name="Вебинар по особенностям рынков Ближнего Востока" des="Поговорим с экспертами рынков в формате дискуссии"/>
        </div>
      </section>

      <section className="section18">
        <div className='div_sec18'>
          <div>
            <h1 style={{fontSize:"40px"}}>Остались вопросы?</h1>
            <p style={{fontSize:"20px"}}>Оставьте заявку и наша команда свяжется с вами</p>
          </div>

          <div>
            <h1>Или напишите нам:</h1>
            <div  className='mesege'>
              <Card12 img={img39} name="Telegram"/>
              <Card12 img={img38} name="Whatsapp"/>
            </div>
          </div>
        </div>
        <aside className='aside_sec18'>
        <input type="text" placeholder='Имя' />
        <input type="text" placeholder='Почта' />
        <input type="text" placeholder='+(971) 🏁' />
        <Button1 name="Оставить заявку" style={{width:"200px",height:"50px"}}/>
        </aside>
      </section>
      <footer className='footer'>
      
        <div className='div_header' >
        <div>
          <img src={img1} alt="" />
          <p>Все права защищены</p>
        </div>
          <div className='p_header'>
            <p>Кто мы?</p>
            <p>Услуги</p>
            <p>Акселератор</p>
            <p>Новости</p>
          </div>
         
              <div style={{width:"210px"}}>
                <p>Dubai, Single Business Tower 1503, Business Bay</p>
                <p>Sales@innoma.vc</p>
              </div>
        </div>

      </footer>
    </>
  )
}



function Section(props) {
  return (
    <section style={props.style} className='card1'>
      <div>
        <h1 style={{ color: "#1178B2" }}>{props.name}</h1>
        <p>{props.des}</p>
        <Button1 name="Узнать подробнее" />
      </div>
      <img src={props.img} alt="" />
    </section>
  )
}


function Button1(props) {
  return (
    <button style={props.style} className='button1'>{props.name}</button>
  )
}
function Button2(props) {
  return (
    <button className='button2'>{props.name}</button>
  )
}

function Card2(props) {
  return (
    <div className='card2'>
      <h1>{props.number}</h1>
      <h4>{props.name}</h4>
      <p>{props.des}</p>
    </div>
  )
}

function Card3(props) {
  return (
    <div style={props.style} className='card3'>{props.name}</div>
  )
}


function Card4(props) {
  return (
    <div style={props.style} className='card4'>
      <h1 style={{ color: "#87BBD8", fontSize: "40px" }}>{props.number}</h1>
      <img src={props.img} alt="" />
      <p>{props.des}</p>
    </div>
  )
}

function Card5(props) {
  return (
    <div className='card5'>
      <img src={props.img} alt="" />
      <p>{props.des}</p>
    </div>
  )
}

function Card6(props) {
  return (
    <div className='card6' style={props.style}>
      <div>

        <h1 style={{ color: "#2A79C2" }}>{props.name}</h1>
        <p>{props.des}</p>
      </div>
      <img src={props.img} alt="" />
    </div>
  )
}


function Card7(props) {
  return (
    <div className='card7'>
      <h1 style={{ color: "#87BBD8", fontSize: "100px" }}>{props.number}</h1>
      <h3>{props.name}</h3>
      <p style={{ color: "gray", width: "300px" }}>{props.des}</p>
    </div>
  )
}


function Card8(props) {
  return (
    <div className='card8'>
      <div style={{ textAlign: "center", width: "300px" }}>
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h1>{props.naem2}</h1>
        <p>{props.des1}</p>
        <p>{props.des2}</p>
        <p>{props.des3}</p>
        <p>{props.des4}</p>
        <p>{props.des5}</p>
      </div>
      <div className='div_card8' >
        <h1>Готовность</h1>
        <p>7 раб. дней</p>
      </div>
      <div className='div_card8'>
        <h1>Язык</h1>
        <p>рус. / англ.</p>
      </div>
      <div className='div_card8' >
        <h1>Стоимость</h1>
        <p style={{ color: "#0F77B1" }}>$1 000 </p>
      </div>
      <Button2 name="Оставить заявку" />
    </div>
  )
}

function Card9(props) {
  return(
    <div className='card9'> 
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <p>{props.des}</p>
    </div>
  )
}

function Card10(props) {
  return(
    <div className='card10'>
      <img src={props.img} alt="" />
    </div>
  )
}

function Card11(props) {
  return(
    <div className='card11'>
        <img src={props.img} alt="" />
        <div>

        <h1>{props.name}</h1>
        <p style={{color:"gray"}}>{props.des}</p>
        <p style={{color:"gray"}}>{props.number}</p>
        </div>
    </div>
  )
}

function Card12(props) {
  return(
    <div className='card12'>
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
    </div>
  )
}

