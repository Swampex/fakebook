export const createMappedObj = (arr, fieldInArr, comparObj, extraObj) => {
    return arr.map( i => {
        if(i[fieldInArr] === comparObj) {
            return {...i, ...extraObj}
        }
        return i;
    })
};