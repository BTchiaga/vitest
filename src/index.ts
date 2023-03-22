export function deepMerge(x, y){
    //TODO make it generic
    if(Array.isArray(x)){
        return [...x,...y]
    }
    //return Object.assign(x,y) does not work foe deep merge
    // let make a clone of X ad loop over the keys of y
    const merged = {...x}
    for (const key of Object.keys(y)){
        //using recursives
        if(typeof x[key] === 'object' || Array.isArray(x[key]))
            merged[key] = deepMerge(x[key],y[key])
        else
            merged[key] = y[key]

    }
return merged 
}