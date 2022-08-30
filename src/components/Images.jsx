import React, {useEffect, useState} from 'react';
import randomImg from '../assets/img/random-img.jpg'
import axios from "axios";
import Loader from "./Loader";
const Images = () => {
    const [loading,setLoading] = useState()
    async function getNumbers() {
        setLoading(true)
        const numberOne = await axios.get('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(res=>res.data)
        const numberTwo = await axios.get('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(res=>res.data)
        if(numberOne % 2===0 && numberTwo % 2 === 0) {
            setLoading(false)
            return numberOne % 2===0
        } else getNumbers()
    }
    useEffect( ()=> {
        getNumbers()
    },[])
    return (
        <div className="images">
            {
                loading?
                    [...new Array(3)].map(( _,index ) => <Loader key={index} />)
                    :
                    [...new Array(3)].map(() => <img src={randomImg} alt=""/>)
            }

        </div>
    );
};

export default Images;