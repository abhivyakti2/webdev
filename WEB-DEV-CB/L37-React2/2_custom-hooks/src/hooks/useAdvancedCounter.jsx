import { useState } from "react";

export default function useAdvCnt(initialValue){
    const [cnt, setCnt]=useState(initialValue);

    function inc(){
        if(cnt<10 && cnt>-1) setCnt(cnt+1);
        else setCnt(0);
    }
    function dec(){
        if(cnt>0 && cnt<=10) setCnt(cnt-1);
        else setCnt(0)
    }
    function reset(){
        setCnt(initialValue)
    }
    return {
        cnt,
        inc,
        dec,
        reset
    };
}