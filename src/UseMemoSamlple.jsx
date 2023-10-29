import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const UseMemoSamlple = () => {
    const [ex, setEx] = useState(0);
    const [why, setWhy] = useState(0);

    //useMemo 사용하기
    useMemo(() => { 
        console.log('===useMemo ex start===')
        console.log(ex)
    },[ex])

    useMemo(() => { 
        console.log('===useMemo why start===')
        console.log(why)
    },[why])

    return (
        <div>
            <button onClick={() => setEx((curr) => (curr+1))}>X</button>
           <button onClick={()=> setWhy((curr) => (curr+1))}>Y</button> 
        </div>
    );
};

export default UseMemoSamlple;