let arr=[0,2,4,3,5,1,8]   // mapo returns new array of same size
let newArr=arr.map((data,index,a)=>{   // DATA , INDEX , ARRAY , same sequence even if names interchanged
    console.log(data, index)
}
)

arr.forEach((data)=>{      // FOR EACH FUNC
    console.log(data)
})

arr.reduce((accumulator, value, index, array)=>{   // REDUCE RETURNS ONE VALUE
    // initially ACC=1st ele, VAL=2nd ele
   return accumulator+value;
})

// ACCUMULATOR STORES LAST RETURNED VALUE, AND VALUE stores next element every time
//WE CAN ALSO PASS ACC AND VAL

let filterArr=arr.filter((data, index, a) => {   // FILTER ODD VALUES ETC
    if (data % 2 == 0) return false;

    return true;
})

console.log(filterArr)