import React, { Component } from 'react';
import  '../index.css'



class MyCompetitions extends Component {

  render() {
    return (
      <div className='myCompetitionsPage'>

        <span  className='myCompetitionsPage__name'>СОРЕВНОВАНИЯ</span>
        <span  className='myCompetitionsPage__archive-name'>Архив соревнований</span>

        <div className='myCompetitionsPage__participate'>
          <div className='participate__name name'>Учавствую</div>
          <div className='participate__heared'>
            <ul className='participate__heared-menu'>
              <li>Название</li>
              <li>Команда</li>
              <li>Место</li>
              <li>Место в команде</li>
              <li>До конца<img src="https://use.fontawesome.com/releases/v5.1.0/svgs/solid/angle-down.svg" alt="angle-down" className='pic-angle-down'/></li>
            </ul>
            <div className='dots'>
              <div className='dot-circle'></div>
              <div className='dot-circle'></div>
              <div className='dot-circle'></div>
            </div>


          </div>
          <div className='participate__inside'>
            <div className='participate__inside-elem'>
              <div className='marker1'></div>
              <ul className='participate__inside-elem-ul'>
                <li>&laquo;Турнир&raquo;</li>
                <li className='elem-team '>
                  <i className='team-pic'></i>
                  <span>&laquo;Планета&raquo;</span>
                </li>
                <li>2</li>
                <li>3</li>
                <li>1 день</li>
              </ul>
            </div>
            <div className='participate__inside-elem'>
              <div className='marker2'></div>
              <ul className='participate__inside-elem-ul'>
                <li>&laquo;Олимпиада&raquo;</li>
                <li className=' elem-team '>
                  <i className='team-pic'></i>
                  <span>&laquo;Ракета&raquo;</span>
                </li>
                <li>3</li>
                <li>8</li>
                <li>19 день</li>
              </ul>
            </div>
            <div className='participate__inside-elem participate__inside__hover'>
              <div className='marker3'></div>
              <ul className='participate__inside-elem-ul'>
                <li >&laquo;Соревнование&raquo;</li>
                <li className='elem-team '>
                  <i className='team-pic'></i>
                  <span>&laquo;Метеор&raquo;</span>
                </li>
                <li>12</li>
                <li>12</li>
                <li>54 день</li>
              </ul>
            </div>
            <div className='participate__inside-elem'>
              <div className='marker3'></div>
              <ul className='participate__inside-elem-ul'>
                <li >&laquo;Бой&raquo;</li>
                <li className=' elem-team '>
                  <i className='team-pic'></i>
                  <span>&laquo;Вселенная&raquo;</span>
                </li>
                <li>1</li>
                <li>7</li>
                <li>&#8212;</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='myCompetitionsPage__invited'>
          <div className='invited__name name'>Приглашен</div>
          <div className='invited__heared'>
            <ul className='invited__heared-menu'>
              <li>Название</li>
              <li>Команда</li>
              <li>Дата начата</li>
              <li>Дата окончания</li>
            </ul>
            <div className='dots'>
              <div className='dot-circle'></div>
              <div className='dot-circle'></div>
              <div className='dot-circle'></div>
            </div>

          </div>
          <div className='invited__inside'>
          <div className='participate__inside-elem'>
            <div className='marker3'></div>
            <ul className='invited__heared-menu'>
              <li>Соревнование</li>
              <li className='elem-team '>
                <i className='team-pic'></i>
                <span>&laquo;Ракета&raquo;</span>
              </li>
              <li>12.05.18</li>
              <li>12.06.18</li>
            </ul>
          </div>
          </div>
        </div>

        <div className='myCompetitionsPage__manage'>
          <div className='manage__name name'>Управляю</div>
          <div className='manage__heared'>
            <ul className='manage__heared-menu'>
              <li>Название</li>
              <li>Дата начата<img src="https://use.fontawesome.com/releases/v5.1.0/svgs/solid/angle-down.svg" alt="angle-down" className='pic-angle-down'/></li>
              <li>Дата окончания</li>
            </ul>
            <div className='dots'>
              <div className='dot-circle'></div>
              <div className='dot-circle'></div>
              <div className='dot-circle'></div>
            </div>
          </div>
          <div className='manage__inside'>
            <div className='participate__inside-elem'>
              <div className='marker3'></div>
              <ul className='invited__heared-menu'>
                <li>&laquo;Олимпиада&raquo;</li>
                <li>12.05.18</li>
                <li>12.06.18</li>
              </ul>
            </div>
            <div className='participate__inside-elem'>
              <div className='marker1'></div>
              <ul className='invited__heared-menu'>
                <li>&laquo;Битва&raquo;</li>
                <li>14.05.18</li>
                <li>12.06.18</li>
              </ul>
            </div>
          </div>
        </div>


      <div className='circle-bottom'>
        <span className='circle-bottom-sign'>&#10133;</span>
      </div>


      </div>
    )
  }
}

export default MyCompetitions;
