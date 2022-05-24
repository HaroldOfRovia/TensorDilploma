import React from 'react';
import { ReactElement } from "react";
import likesLogo from './images/likes.svg';

export class UserPost{
    text: string;
    pic_url: string;

    constructor(text: string, pic_url: string){
        this.text = text;
        this.pic_url = pic_url;
    }

    /**
     * @param obj объект с 2 текстовыми полями: адрес изображения и шутка
     * @returns готовый ReactElement для вставки в html документ
     */
    static template(obj: UserPost): ReactElement{
        const time = new Date();
        let dd = time.getDate();
        let mm = time.getMonth()+1;
        let yy = time.getFullYear();
        return (
        <article className="article">
            <div className='article_header'>
            <div className='user_pic'/>
                <h2 className='user_name'>Hlebushek</h2>
            </div>
            <img src={obj.pic_url} className='img'/>
            <div className='description'>
                {obj.text}
            </div>
            <div className='under_img'>
            <div className='reaction'>
                <a href='/'>
                <img src={likesLogo} alt="Likes" className='icon'/>
                </a>
                <button type='button' className='com_button'>Comments</button>
            </div>
            <div className='date'>{dd + '.' + mm + '.' + yy}</div>
            </div>
        </article>);
    }
}