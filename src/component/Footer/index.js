import React from 'react'
import './style.scss'
function Footer() {
  return (
    <div className='footer_page'>
      <div className='footer_bar'>
        <div className='footer_text_icon'>
          <div className='footer_text'>
            <ul>
              <a href=''><li>ABOUT ROG</li></a>
              <a href=''><li>HOME</li></a>
              <a href=''><li>NEWSROOM</li></a>
              <a href=''><li>ACCESSIBILITY HELP</li></a>
            </ul>
          </div>
          <div className='footer_icon'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className='footer_underline_text'>
          <div className='footer_left_text'>
          <i class="fa-light fa-globe"></i>
            <a href=''><p>Global/English</p></a>
          </div>

          <div className='footer_right_text'>
            <ul>
              <a href=''><li>TERMS OF USE NOTICE</li></a>
              <a href=''><li>PRIVACY POLICY</li></a>
              <a href=''><li>©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED.</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer