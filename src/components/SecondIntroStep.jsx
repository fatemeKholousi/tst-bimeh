import StepperImage from '../assets/stepper-guide2.png'
import Vector from "../assets/vectors/second-stepper1.png"
import Vector2 from "../assets/vectors/second-stepper2.png"

const SecondStepper = ({onChangeStep}) => {
    return (
        <>
            <img src={Vector2} className='absolute top-0 right-0'/>

            <div className='flex flex-col gap-[2rem] items-center justify-between'>
                <img width={222} height={220} src={StepperImage} className='pb-[3rem]'/>
                <div
                    className='w-[260px] text-center flex flex-col justify-center gap-[1.25rem] items-center justify-center'>
                    <h1 className='text-[14px] font-bold'>
                        بیشتر از پیمایش‌ات پول نده!
                    </h1>
                    <p className='text-[13px] font-regular'>
                        با بیمه هوشمند هر مسافتی که با ماشین‌ات طی کنی
                        خرج بیمه اش می‌کنی نه بیشتر حتی به راحتی می‌تونی میزان تخفیف‌ بیمه‌ات رو افزایش بدی</p>
                </div>

            </div>

            <div className='flex flex-col gap-3 px-[1rem] mt-[3rem] font-medium'>
                <button className="bg-primary rounded-[12px] py-[13px]" onClick={() => onChangeStep(3)}>بعدی</button>
                <button>رد کردن</button>
            </div>
            <img src={Vector} className='absolute bottom-0 left-0'/>

        </>


    );
};

export default SecondStepper;