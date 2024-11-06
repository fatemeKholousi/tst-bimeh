import React, {useEffect, useState} from 'react';
import Logo from "../assets/logo.png";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [isDisabled, setIsDisabled] = useState(false)
    const [password, setPassword] = useState()
    const [userName, setUserName] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        if (password && userName) setIsDisabled(false)
        else setIsDisabled(true)
    }, [password, userName])

    return (
        <div className="min-h-svh px-[1.5rem] py-[3rem] flex flex-col justify-between">
            <div className='flex gap-3 justify-end items-center'>
                <h1 className='text-[26px] font-semi-bold'>بیمه هوشمند</h1>
                <img src={Logo} width={40} height={40}/>

            </div>
            <div className='flex flex-col items-end'>
                <p className='font-bold text-[20px] pb-3'>ورود</p>
                <p className='text-right text-[#4A4863] pb-[1.75rem]'>
                    نام کاربری و رمز عبور شما در پاکت قرار دارد برای شما گذاشته شده است٬ لطفا این دو را وارد نمایید
                </p>
                <div className='flex flex-col gap-3'>
                    <input type='text' placeholder='نام کاربری' dir='rtl'
                           className='w-[328px] h-[48px] px-[1rem] bg-[#F8F8F8] placeholder:text-[#222222]'
                           value={userName}
                           onChange={(e) => setUserName(e.target.value)}
                    />
                    <input type='password' placeholder='رمز عبور' dir='rtl'
                           className='w-[328px] h-[48px]  px-[1rem]  bg-[#F8F8F8]  placeholder:text-[#222222]'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>


                <div className='flex flex-col w-full mt-[1.5rem] gap-3 '>
                    <button
                        className={`bg-primary ${isDisabled ? 'opacity-50' : ''} rounded-[12px] min-w-full py-[13px] font-bold`}
                        onClick={() => navigate('/dashboard')}>
                        ورود
                    </button>
                    <button>نیاز به کمک دارم</button>
                </div>

            </div>
        </div>
    );
};

export default Login;