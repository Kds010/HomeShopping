'use strict'

import express from 'express';
import { 
    cjShopCrawling,
    gsShopCrawling,
    lotteShopCrawling,
    getHyundaiShop
} from '../service/crawling';
const router = express.Router();

router.get('/', async (req, res, next) => {
    const result = await getHyundaiShop();
    res.send(result);
});

module.exports = router;