import React from 'react';
import { ReactElement } from "react";
import likesLogo from './images/likes.svg';

export class UserPost{
    text: string;
    pic_url: string;
    id: string;

    constructor(text: string = '', pic_url: string = ''){
        this.text = text;
        this.pic_url = pic_url;
        this.id = Date.now() + "_" + Math.floor(Math.random()*1000);
    }

    setText(text: string){
        this.text = text;
    }

    setImg(pic_url: string){
        this.pic_url = pic_url;
    }

    /**
     * @param obj объект с 2 текстовыми полями: адрес изображения и шутка
     * @returns готовый ReactElement для вставки в html документ
     */
    static template(obj: UserPost): ReactElement{
        const time = new Date();
        return (
        <article className="article" key={obj.id}>
            <div className='article_header'>
                <div className='user_pic'/>
                    <h2 className='user_name'>Hlebushek</h2>
                </div>
                <img src={obj.pic_url} alt="Что-то пошло не так" className='img'/>
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
                <div className='date'>{time.getDate() + '.' + time.getMonth()+1 + '.' + time.getFullYear()}</div>
            </div>
        </article>);
    }
}