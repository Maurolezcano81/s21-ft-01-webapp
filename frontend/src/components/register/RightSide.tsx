import React from "react"
import CapybaraColor from '../../svgs/capybaraColor.svg';


const RightSide: React.FC = () => {

    return (
        <div className="hidden relative md:w-[47%] h-screen md:flex items-center justify-center flex-col md:gap-12 text-white lg:py-12 lg:px-20">

            <div className="flex flex-col items-center gap-16 top-[10%] fixed">
                <h1
                    className="md:text-5xl lg:text-7xl">
                    CapyBank
                </h1>

                <p
                    className=" p-4 lg:w-[80%] md:text-lg lg:text-xl text-center">
                    Por normativa del BCRA necesitamos que completes tus datos y que nos compartas un DNI o Pasaporte para poder verificar tu identidad y asignarte una Cuenta bancaria 🤓
                </p>

                <div className="bg-secondary w-[80%] md:w-[80%] lg:w-[50%] aspect-square flex items-center justify-center rounded-full">
                    <img
                        src={CapybaraColor}
                        alt="Capybara"
                        className="max-w-[80%] max-h-[80%] object-contain"
                    />
                </div>

            </div>

        </div>
    )
}

export default RightSide