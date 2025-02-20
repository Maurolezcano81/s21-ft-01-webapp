import { Dropdown } from "primereact/dropdown";
import { PropsFormSubcomponent } from "../../types/FormProps.types";
import { FormDataRegister } from "../../schemas/register.schema";
import { useForm } from "react-hook-form";

const NacionalitySection: React.FC<PropsFormSubcomponent<FormDataRegister>> = ({
    register,
    errors
}) => {

    const { setValue } = useForm<FormDataRegister>(); // Desestructura setValue

    const countries = [
        { id: 1, name: "Argentina", code: "AR" },
        { id: 2, name: "Brazil", code: "BR" },
        { id: 3, name: "United States", code: "US" }
    ];

    return (
        <>
            <div className="flex gap-2 items-center justify-between flex-wrap">
                <div className="flex flex-col gap-4 grow-1" >
                    <label htmlFor="country_fk">País</label>
                    <Dropdown
                        options={countries}
                        optionLabel="name" // Lo que se muestra
                        optionValue="id" // Valor que se guarda
                        placeholder="Seleccione un país"
                        filter
                        className="grow-1 w-full"
                        pt={{
                            root: {
                                style: { width: "100%" }
                            }
                        }}
                        invalid={!!errors.country_fk}

                        id="country_fk"
                        {...register('country_fk')} // Vincula el campo 'country_fk' a react-hook-form
                        onChange={(e) => setValue('country_fk', e.value)} // Asegura que el valor se guarda en 'country_fk'

                    />
                    {errors && errors.country_fk && (
                        <small className="text-secondary">{errors.country_fk.message}</small>
                    )}
                </div>

                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="city_fk">Ciudad</label>
                    <Dropdown
                        options={countries}
                        optionLabel="name" // id de referencia para el nombre de las options
                        optionValue="id"
                        placeholder="Seleccione una ciudad"
                        filter
                        className="grow-1 w-full"
                        pt={{
                            root: {
                                style: { width: "100%" }
                            }
                        }}
                        id="city_fk"
                        invalid={!!errors.city_fk}

                        {...register('city_fk')}
                    />

                    {errors && errors.city_fk && (
                        <small className="text-secondary">{errors.city_fk.message}</small>
                    )}
                </div>
            </div>
        </>
    )
}

export default NacionalitySection;