import React from 'react';
import './style.scss';

function RecentStories() {
  return (
    <div className='RecentStories'>
        <h1>RECENT STORIES</h1>
        <div className='RecentStories_cards'>
            <div className='card'>
                <img src='https://dlcdnrog.asus.com/rog/media/1670893994624.webp'></img>
            </div>
            <div className='card'>
                <img src='https://dlcdnrog.asus.com/rog/media/1669857154768.webp'></img>
            </div>
            <div className='card'>
                <img src='https://dlcdnrog.asus.com/rog/media/166864109730.webp'></img>
            </div>
            <div className='uzuncard'>
                <img src='https://dlcdnrog.asus.com/rog/media/1667344658657.webp'></img>
            </div>
            <div className='uzuncard'>
                <img src='https://dlcdnrog.asus.com/rog/media/1665200765593.webp'></img>
            </div>
        </div>
        <a href=''><h6>LEARN MORE</h6></a>
    </div>
  )
}

export default RecentStories