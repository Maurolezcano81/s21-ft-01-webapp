import React from "react"
import CapybaraColor from '../../svgs/capybaraColor.svg';


const RightSide: React.FC = () => {

    return (
        <div className="hidden md:w-[47%] h-screen md:flex items-center justify-center flex-col md:gap-12 text-white md:py-12 md:px-20">


            <h1
                className="md:text-7xl">
                CapyBank
            </h1>

            <p
                className=" lg:w-[80%] md:text-xl text-center">
                Por normativa del BCRA necesitamos que completes tus datos y que nos compartas un DNI o Pasaporte para poder verificar tu identidad y asignarte una Cuenta bancaria 🤓
            </p>

            <div className="bg-secondary w-[80%] md:w-[64%] aspect-square flex items-center justify-center rounded-full">
                <img
                    src={CapybaraColor}
                    alt="Capybara"
                    className="max-w-[80%] max-h-[80%] object-contain"
                />
            </div>

        </div>
    )
}

export default RightSide