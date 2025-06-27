import { useState } from "react";

export default function useCounter(initialValue){
    const [cnt, setCnt]= useState(initialValue);
    function updateCnt(){
        if(cnt<10 && cnt>-1) setCnt(cnt+1);
        else{
            setCnt(0);
        }
    }
    return [cnt, updateCnt];
}