import { useEffect, useState } from 'react';
import './portfolio.scss';
import PortfolioList from './portfolioList/PortfolioList';
import { featuredPortfolio, websitePortfolio,
     desktopPortfolio, mobilePortfolio } from '../../data';

export default function Portfolio() {

    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'websites',
            title: 'Websites'
        },
        {
            id: 'desktop_apps',
            title: 'Desktop Apps'
        },
        {
            id: 'mobile_apps',
            title: 'Mobile Apps'
        },
    ];

    useEffect(()=>{

        switch(selected){
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'websites':
                setData(websitePortfolio);
                break;
            case 'desktop_apps':
                setData(desktopPortfolio);
                break;
            case 'mobile_apps':
                setData(mobilePortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    },[selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className='container'>
                {data.map(d=>(
                    <div className='item'>
                        <img src={d.img} 
                        alt='' />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
