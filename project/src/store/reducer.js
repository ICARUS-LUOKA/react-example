import special from "../components/index/special";

const reducer = (state,{type,payload})=>{
    var goodslist = [...state.goodslist]
    switch (type) {
        case 'view_topContent':
            return Object.assign({},state,{topTitle:payload[0],topLeft:payload[1],topRight:payload[2]})   
        case 'footer_show':
            return Object.assign({},state,{footer_show:payload})
        case 'User_login':
            return Object.assign({},state,{userName:payload})
        case 'clear_Login':
            return Object.assign({},state,{userName:payload})
        case "update_special":
            return Object.assign({},state, {special:[...payload]})
        case 'addToCar':
            let onOff = false;
            goodslist.forEach(item => {
                if (item.id == payload.id) {
                    item.numeber++;
                    onOff = true;
                }
            });
            if (!onOff) {
                payload.numeber = 1;
              goodslist = goodslist.concat(payload);
            }
            return Object.assign({},state,{goodslist:[...goodslist]})
        case 'reduceItem':
        goodslist.forEach(item => {
            if (item.id == payload.id) {
                if (item.numeber <= 1) {
                    return 
                }else{
                    item.numeber--
                }
            }
        })
        return Object.assign({},state,{goodslist:[...goodslist]})

        case 'deleteItem':
        goodslist.forEach((item,index) =>{
            if (item.id == payload.id) {
                goodslist.splice(index,1)
            }
        })
        return Object.assign({},state,{goodslist:[...goodslist]})

        case 'sumPrice':
        state.sumprice = 0;
        goodslist.forEach((item)=>{
            state.sumprice += item.numeber * parseInt(item.price)
        })
        return Object.assign({},state,{sumprice:state.sumprice})
        default:
        return state;
    }
}

export default reducer;