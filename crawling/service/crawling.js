'use strict'

import cheerio from 'cheerio-httpcli';
import moment from 'moment';

const shopNames = {
    'cjShop': 'https://display.cjonstyle.com/c/rest/tv/tvSchedule',
    'gsShop': 'https://with.gsshop.com/shop/tv/tvScheduleDetail.gs',
    'lotteShop': 'https://www.lotteimall.com/main/scheduleLive.lotte',
    'hyundaiShop': 'https://www.hmall.com/p/bmc/brodPordPbdv.do'
};

module.exports = {
    async cjShopCrawling() {
        let ret = [];
        const param = {
            bdDt: moment().format('YYYYMMDD'),
            isMobile: false,
            broadType: 'live',
            isEmployee: false
        };
        try {
            await cheerio.fetch(shopNames['cjShop'], param).then(function(res) {
                const list = JSON.parse(res.body).result.programList;
                for (var i=0; i<list.length; i++) {
                    for (var j=0; j<list[i].itemList.length; j++) {
                        ret.push(list[i].itemList[j]);
                    }
                }
            });
            return ret;
        } catch (e) {
            console.error(`crawling.js > cjShopCrawling(), ${e}`);
        }
    },
    
    async gsShopCrawling() {
        let ret = [];
        const param = {
            today: moment().format('YYYYMMDD')
        };
        try {
            await cheerio.fetch(shopNames['gsShop'], param).then(function(res) {
                let list = res.body;
                ret.push(list);
            });
            return ret;
        } catch (e) {
            console.error(`crawling.js > gsShopCrawling(), ${e}`);
        }
    },

    async lotteShopCrawling() {
        let ret = [];
        const param = {
            bdDate: moment().format('YYYYMMDD'),
            date: moment().format('YYYY-MM-DD')
        };
        try {
            await cheerio.fetch(shopNames['lotteShop'], param).then(function(res) {
                let list = JSON.parse(res.body).body.prod;
                for(var i=0; i<list.length; i++)
                    ret.push(list[i].name);
                    // ret.push(list);
            });
            return ret;
        } catch (e) {
            console.error(`crawling.js > lotteShopCrawling(), ${e}`);
        }
    },

    async getHyundaiShop() {
        let ret = [];
        const param = {
            date: moment().format('YYYYMMDD'),
            brodType: false,
            sort: 'BROD_STRT_TIME@DESC'
        };
        try {
            await cheerio.fetch(shopNames['hyundaiShop'], param).then(function(res) {
                let list = res;
                console.info(list);
                ret.push(list);
            });
            return ret;
        } catch (e) {
            console.error(`crawling.js > getHyundaiShop(), ${e}`);
        }
    }
};