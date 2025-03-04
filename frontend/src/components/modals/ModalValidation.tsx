import React, { useEffect, useState } from 'react';   
import Capymonoculus from 'frontend/src/svgs/Capymonoculus.svg';  

interface ModalValidationProps {  
    isOpen: boolean;  
    onClose: () => void;  
}  

const ModalValidation: React.FC<ModalValidationProps> = ({ isOpen, onClose }) => {  
    const [isAnimating, setAnimating] = useState(false);   
    const [showContent, setShowContent] = useState(true);  
    const [showImage, setShowImage] = useState(false);  
    const [code, setCode] = useState(Array(6).fill(''));   

    useEffect(() => {  
        if (isOpen) {  
            setAnimating(false);  
            setShowContent(true);  
            setShowImage(false);   
            setCode(Array(6).fill('')); // Reinicia código al abrir  
        }  
    }, [isOpen]);  

    if (!isOpen) return null;  

    const handleChange = (index: number, value: string) => {  
        const newCode = [...code];  
        newCode[index] = value;  
        setCode(newCode);  
        
        // Pasar al siguiente input   
        if (value && index < 5) {  
            const nextInput = document.getElementById(`code-input-${index + 1}`);  
            if (nextInput) {  
                (nextInput as HTMLInputElement).focus();  
            }  
        }  
    };  

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {  
        if (event.key === 'Backspace' && !code[index] && index > 0) {  
            const prevInput = document.getElementById(`code-input-${index - 1}`);  
            if (prevInput) {  
                (prevInput as HTMLInputElement).focus();  
            }  
        }  
    };  

    const handleSubmit = () => {  
        if (code.join('').length === 6) {  
            setShowContent(false);   
            setAnimating(true);   
            setTimeout(() => {  
                setShowImage(true);  
            }, 900);   
            
            setTimeout(() => {  
                // Redirigir o cerrar modal  
                onClose();   
            }, 2000);  
        }  
    };  

    return (  
        <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur">  
            <div className="bg-gradient-to-b from-coral-400 to-coral-200 p-6 rounded-lg shadow-lg text-center w-full h-full max-w-lg mx-5 flex flex-col justify-center">  

                {showContent ? (  
                    <>  
                        <h2 className="text-2xl md:text-4xl font-bold font-monserrat text-white mb-2"> ¡Solo falta un paso! </h2>    
                        <p className="text-black font-monserrat text-base md:text-lg mb-2"> Revisa tu bandeja de entrada para validar tu correo electrónico. </p>  

                        <div className="flex justify-center space-x-2 mb-4">  
                            {code.map((digit, index) => (  
                                <input   
                                    id={`code-input-${index}`} // Añadir ID único para cada input  
                                    key={index}  
                                    type="text"  
                                    maxLength={1}  
                                    value={digit}  
                                    onChange={(e) => handleChange(index, e.target.value)}  
                                    onKeyDown={(e) => handleKeyDown(e, index)}   
                                    className="w-12 h-12 text-center border border-gray-300 rounded-md"  
                                />  
                            ))}  
                        </div>  
                        
                        <button   
                            onClick={handleSubmit}   
                            className="mx-auto block mt-4 px-6 py-3 bg-primary text-white rounded-lg font-monserrat hover:bg-primary-dark transition-colors">  
                            Validar  
                        </button>  
                    </>  
                ) : (  
                    <>  
                    <div className="flex flex-col items-center">  
                        <div className={`checkmark ${isAnimating ? 'animate-check' : ''} mb-4`}>  
                            <div className="check-symbol"></div>  
                        </div>  

                        {showImage && (   
                            <div className="flex flex-col items-center justify-center space-y-1">  
                                <h2 className="text-2xl md:text-4xl font-bold font-monserrat text-white mb-0">   
                                    ¡Bienvenido al CapyClub!   
                                </h2>   
                                <img   
                                    src={Capymonoculus}   
                                    alt="Capybara con monoculo"   
                                    className="w-[60%] h-auto max-w-[400px] opacity-100 transition-opacity duration-500"   
                                />  
                            </div>  
                        )}  
                    </div>   
                    </>   
                )}  
            </div>  
        </div>  
    );  
};  

export default ModalValidation;  