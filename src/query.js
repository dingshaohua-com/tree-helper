let queryWrapper;

const handler = (treeDate) => {


    // 兼容传入的数结构数据
    const type = Object.prototype.toString.call(treeDate);
    const isObject = type === '[object Object]';
    const isArray = type === '[object Array]';
    let finalTreeDate = treeDate;
    if (isObject && Object.hasOwn(finalTreeDate,'children')) {
        finalTreeDate = finalTreeDate.children;
    }

    // 开始处理
    for (const iterator of finalTreeDate) {
        
        for (const key in queryWrapper) {
            const val = object[key];
            
        }
        
    }
}


export const query = (treeDate, queryWrapper) => {
    queryWrapper = queryWrapper;
    return handler(treeDate)
}
