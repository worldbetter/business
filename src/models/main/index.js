import { changeTest } from './changeTest';
import { changeNowList } from './changeNowList';
import { queryShopInfo, updateShopInfo } from "./shopinfo";
import { queryFirstCommod, updateFirstCommod } from "./firstcommod";
export const PREFIX = 'main';
export const initState = {
    test: 0,
    list: [
        {
            name: "商品列表",
            key: 0,
            id: 0
        },
        {
            name: "商户列表",
            key: 1,
            id: 1
        },
        {
            name: "购物车",
            key: 2,
            id: 2
        },
        {
            name: "个人中心",
            key: 3,
            id: 3
        }
    ],
    nowList: 0,
    shop: null,
    commodList: []
};
export default {
    namespace: PREFIX,
    state: initState,
    effects: {
        queryShopInfo: queryShopInfo,
        queryFirstCommod: queryFirstCommod
    },
    reducers: {
        changeTest: changeTest,
        changeNowList: changeNowList,
        updateShopInfo: updateShopInfo,
        updateFirstCommod: updateFirstCommod
    }
};
//# sourceMappingURL=index.js.map