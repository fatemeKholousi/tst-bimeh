import React, {useEffect, useState} from 'react';
import Car from '../assets/car.png'
import Street from '../assets/street.png'

const LetsGo = () => {
    const [count, setMessage] = useState(1);

    useEffect(() => {
        const timeouts = [
            setTimeout(() => setMessage(1), 1000),
            setTimeout(() => setMessage(2), 2000),
            setTimeout(() => setMessage(3), 3000),
        ];

        // Cleanup function to clear timeouts
        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
        };
    }, []);


    return (
        <div className="relative w-full">
            <p className='text-center text-[50px] font-extraBold text-[#41619F] mb-[3rem]'>
                {count}
            </p>
            <div>
                <img src={Street}/>
                <img src={Car} alt="Car" className="absolute animate-car w-[264px]"/>
            </div>
        </div>
    );
};

export default LetsGo;