import FirstStepperImage from '../assets/stepper-guide1.png'
import Vector from "../assets/vectors/first-stepper2.png";
import Vector2 from "../assets/vectors/first-stepper1.png";

const FirstIntroStep = ({onChangeStep}) => {
    return (
        <>
            <img src={Vector} className='absolute top-0'/>

            <div className='flex flex-col gap-[2rem] items-center justify-between'>
                <img width={222} height={220} src={FirstStepperImage} className='pb-[3rem]'/>
                <div
                    className='w-[260px] text-center flex flex-col justify-center gap-[1.25rem] items-center justify-center'>
                    <h1 className='text-[14px] font-bold'>
                        فقط وقتایی که به بیمه نیاز داری، ماشینت رو بیمه کن
                    </h1>
                    <p className='text-[13px] font-regular'>
                        با بیمه هوشمند فقط وقتایی که نیازه، بیمه داری!
                        وقتی ماشین ات تو پارکینگ خونه ات امن و امانه نیاز نیست کلی پول بدی </p>
                </div>

            </div>

            <div className='flex flex-col gap-3 px-[1rem] mt-[3rem] font-medium'>
                <button className="bg-primary rounded-[12px] py-[13px]" onClick={() => onChangeStep(2)}>بعدی</button>
                <button>رد کردن</button>
            </div>
            <img src={Vector2} className='absolute bottom-0 right-0'/>

        </>


    );
};

export default FirstIntroStep;