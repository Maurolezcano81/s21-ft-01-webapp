import { Link } from "react-router";
import BlueButton from "../buttons/BlueButton";


const FooterForm: React.FC = () => {

    return (
        <>
            <div className="flex flex-col gap-4 mt-4">
                <BlueButton
                    className="w-full"
                    label="Registrarse"
                    type="submit"
                />

                <small
                    className="w-full text-center text-gray text-lg"
                >
                    ¿Tenés una cuenta?
                    <Link
                        to={'/login'}
                        className="font-bold text-secondary ml-2">
                        Inicia sesión
                    </Link>

                </small>
            </div>
        </>
    )
}

export default FooterForm;