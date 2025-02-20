import { Link } from "react-router";
import BlueButton from "../buttons/BlueButton";

interface FooterProps {
    isPending?: boolean,
    errors?: Error | null
}

const FooterForm: React.FC<FooterProps> = ({
    isPending,
    errors
}) => {
    console.log({ errors, isPending })
    return (
        <>
            <div className="flex flex-col gap-4 mt-4">
                <BlueButton
                    className="w-full"
                    label="Registrarse"
                    type="submit"
                // disabled={Object.keys(errors!).length > 0}
                // loading={isPending}
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