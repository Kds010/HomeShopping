'use strict'

import { 
    cjShopCrawling,
    gsShopCrawling,
    lotteShopCrawling
} from './crawling';

const setSchedule = async (shopName) => {
    let result = undefined;
    switch(shopName) {
        case 'cjShop':
            result = await cjShopCrawling();
        case 'gsShop':
            result = await gsShopCrawling();
        case 'lotteShop':
            result = await lotteShopCrawling();
        default:
            break;
    }    
}

export default async () => {
    try {
        setInterval(() => {
            // setSchedule('cjShop')
            // setSchedule('gsShop')
        }, 1000 * 10);
    } catch (err) {
        console.error(err);
    }
};