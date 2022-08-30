import React, {useEffect, useState} from 'react';
import randomImg from '../assets/img/random-img.jpg'
import axios from "axios";
const Images = () => {
    const [showImages,setShowImages] = useState(false)
    async function getNumbers() {
        const numberOne = await axios.get('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(res=>res.data)
        const numberTwo = await axios.get('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(res=>res.data)
        if(numberOne % 2===0 && numberTwo % 2 === 0) {
            setShowImages(true)
            return numberOne % 2===0
        } else getNumbers()
    }
    useEffect( ()=> {
        getNumbers()
    },[])
    if(!showImages) return null
    return (
        <div className="images">
            <button onClick={()=>console.log(showImages)}>123</button>
            <img src={randomImg} alt=""/>
            <img src={randomImg} alt=""/>
            <img src={randomImg} alt=""/>
        </div>
    );
};

export default Images;