import { Button, ButtonProps } from "primereact/button"
import React from "react"

const BlueButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            {...props}
            className={`blue-button ${props.className}`} 
        />
    );
};

export default BlueButton