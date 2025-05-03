import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const [categoryNews, setCategoryNews] = useState([]);

    const {id} = useParams();
    const data = useLoaderData();
    // console.log(id, data);

    useEffect(()=>{

        if(id=="0"){ //all news
            setCategoryNews(data);
            return;
        }
        else if (id == "1"){ //breaking news
            const filterNews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filterNews)
            return;
        }
        else{
            //id via left category
            const filterNews = data.filter(news => news.category_id == id)
           console.log(filterNews);

           setCategoryNews(filterNews)
        }

        
    }, [data, id])

    return (
        <div>
            <h2 className='font-bold mb-5'>Total <span className='text-secondary'>{categoryNews.length} </span>news found</h2>
            <div className='grid grid-cols-1 gap-5'> 
                {
                    categoryNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;