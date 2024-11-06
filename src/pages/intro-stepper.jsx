import FirstIntroStep from "../components/FirstIntroStep.jsx";
import {useState} from "react";
import SecondIntroStep from "../components/SecondIntroStep.jsx";
import ThirdIntroStep from "../components/ThirdIntroStep.jsx";
import Vector from "../assets/vector.png";
import Logo from "../assets/logo.png";

const IntroStepper = () => {
    const [chosenStep, setChosenStep] = useState(0)
    return (<>
            {chosenStep === 1 ?
                (
                    <div className='my-[3rem] flex flex-col min-h-full justify-between'>
                        <FirstIntroStep onChangeStep={(item) => setChosenStep(item)}/>
                    </div>

                ) : chosenStep === 2 ?
                    (
                        <div className='my-[3rem] flex flex-col min-h-full justify-between'>
                            <SecondIntroStep onChangeStep={item => setChosenStep(item)}/>
                        </div>

                    )
                    : chosenStep === 3 ?

                        (<div className='my-[3rem] flex flex-col min-h-full justify-between'>

                            <ThirdIntroStep onChangeStep={item => setChosenStep(item)}/>
                        </div>)
                        : chosenStep === 0 ?
                            (<div className='bg-primary w-full' onClick={() => setChosenStep(1)}>
                                <img src={Vector} className='absolute top-0'/>
                                <div className='h-screen flex flex-col justify-center gap-[1.25rem] items-center'>
                                    <img src={Logo} width={126} height={141}/>
                                    <div className='text-center'>
                                        <h1 className='text-[1.5rem] font-medium'>
                                            بیمه هوشمند
                                        </h1>
                                        <p className='text-md font-thin'>
                                            پلتفرم بیمه رفتار محور
                                        </p>
                                    </div>
                                </div>

                            </div>) : null
            }
            <div className='flex gap-3 justify-center mt-5'>
                <div
                    className={`${chosenStep === 1 ? 'bg-primary' : 'bg-light-gray'} w-[18px] h-[.25rem] rounded`}></div>
                <div
                    className={`${chosenStep === 2 ? 'bg-primary' : 'bg-light-gray'} w-[18px] h-[.25rem] rounded`}></div>
                <div
                    className={`${chosenStep === 3 ? 'bg-primary' : 'bg-light-gray'} w-[18px] h-[.25rem] rounded`}></div>


            </div>
        </>
    );
};

export default IntroStepper;