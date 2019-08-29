import React from 'react';
import NewsItem from '../components/NewsItem';

import FakeNews from '../fake/news';

export default function() {
    return (
        <div className="page-align">
            <h2>Новости</h2>
            <div className="news">
                {
                    FakeNews.map((item, index) => {
                        return <NewsItem key={ index } item={ item }/>
                    })
                }
            </div>
        </div>
    )
}