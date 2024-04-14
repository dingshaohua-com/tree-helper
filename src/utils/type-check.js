export const typeCheck = (param)=>{
   
    const type = Object.prototype.toString.call(treeDate);
    return /[object .]/.test(type)
}



const isObject = type === '[object Object]';
const isArray = type === '[object Array]';