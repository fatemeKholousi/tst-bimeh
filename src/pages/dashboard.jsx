import React from 'react';
import {useNavigate} from "react-router-dom";
import Car from "../assets/car.png";
import TimeIcon from '../assets/icons/time.png'
import CarIcon from '../assets/icons/car.png'
import NightIcon from '../assets/icons/night.png'
import SettingIcon from '../assets/icons/setting.png'
import Separator from '../assets/separator.png'
import CalendarIcon from '../assets/icons/calendar.png'

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className='px-[1.5rem] py-[3rem] flex flex-col justify-between h-screen'>
            <div>
                <div className='text-[#424242] text-right'>
                    <p className='font-thin'>روز خوش</p>
                    <p className='font-medium text-[1rem]'>فاطمه خلوصی</p>
                </div>

                <div className='flex flex-row-reverse text-[10px] items-center gap-3 mt-[1.5rem]'>
                    <div className='flex items-center'>

                        <img src={CalendarIcon}/>
                        <div className="text-primary font-regular inline-block" dir="rtl">
                            30
                            روز
                        </div>

                    </div>

                    <span className='font-thin'>
                    مدت زمان ارزیابی عملکرد شما٬ برای اعمال تخفیف
                </span>

                </div>
                <img src={Separator} className='my-[2rem]'/>

                <div className='flex justify-around gap-[.75rem]'>
                    <section className='text-center'>
                        <p className='font-regular'>پیمایش کل سفرهای شما</p>
                        <p className='font-extraBold'>۲۳۰۰Km</p>
                    </section>
                    <section className='text-center'>
                        <p className='font-regular'>زمان کل سفرهای شما</p>
                        <p className='font-extraBold'>۳۰:۲۴</p>
                    </section>

                </div>

                <div className='my-4 flex justify-center'>
                    <img src={Car} alt="Car" className="h-[97px] w-[264px]"/>
                </div>

                <h2 className='text-right text-md font-medium mb-[.5rem]'>آخرین سفر</h2>

                <div className='flex gap-3 mb-[2rem]'>
                    <div
                        className='p-[.5rem] rounded-xl bg-[#FFF9F1] h-[90px] flex flex-col items-end text-[#7B6E4E] gap-[.5rem]'>
                        <p className='text-[10px] font-medium text-right'>رانندگی در روز</p>
                        <img src={SettingIcon} width={14} height={14}/>
                        <p className='text-[1rem] font-[900] font-extraBold'>۰۹:۳۴</p>
                    </div>
                    <div
                        className='p-[.5rem] rounded-xl bg-[#F4F2FF] h-[90px] flex flex-col items-end text-[#403572] gap-[.5rem]'>
                        <p className='text-[10px] font-medium text-right'>رانندگی در شب</p>
                        <img src={NightIcon} width={14} height={14}/>
                        <p className='text-[1rem] font-[900] font-extraBold'>۱۵:۲۰</p>
                    </div>
                    <div
                        className='p-[.5rem] rounded-xl bg-[#FFF4F4] h-[90px] flex flex-col items-end text-[#ED3D2E] gap-[.5rem]'>
                        <p className='text-[10px] font-medium text-right'>بیشترین سرعت</p>
                        <img src={CarIcon} width={14} height={14}/>
                        <p className='text-[1rem] font-[900] font-extraBold'>۱۲۳Km/h</p>
                    </div>
                    <div
                        className='p-[.5rem] rounded-xl bg-[#F5F9F9] h-[90px] flex flex-col items-end text-[#3A8383] gap-[.5rem]'>
                        <p className='text-[10px] font-medium text-right'>مدت زمان سفر</p>
                        <img src={TimeIcon} width={14} height={14}/>
                        <p className='text-[1rem] font-[900] font-extraBold'>۲۴:۲۲</p>
                    </div>
                </div>
            </div>


            <button className="bg-primary rounded-[12px] w-full py-[13px] font-bold"
                    onClick={() => navigate('/move')}>شروع به حرکت
            </button>
        </div>
    );
};

export default Dashboard;