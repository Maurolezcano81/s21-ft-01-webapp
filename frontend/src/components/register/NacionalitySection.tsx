import { Dropdown } from "primereact/dropdown";
import { PropsFormSubcomponent } from "../../types/FormProps.types";
import { FormDataRegister } from "../../schemas/register.schema";
import { useState } from "react";

const NacionalitySection: React.FC<PropsFormSubcomponent<FormDataRegister>> = ({
    errors,
    setValue,
    trigger
}) => {

    const countries = [
        { id: 1, name: "Argentina", code: "AR" },
        { id: 2, name: "Brazil", code: "BR" },
        { id: 3, name: "United States", code: "US" }
    ];

    const cities = [
        { id: 1, name: "Formosa", code: "AR" },
        { id: 2, name: "Gremio", code: "BR" },
        { id: 3, name: "Chubut", code: "US" }
    ];

    const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
    const [selectedCity, setSelectedCity] = useState<number | null>(null);

    return (
        <>
            <div className="flex gap-2 items-center justify-between flex-wrap">
                <div className="flex flex-col gap-4 grow-1" >
                    <label htmlFor="country_fk">País</label>
                    <Dropdown
                        value={selectedCountry}
                        options={countries}
                        optionLabel="name"
                        placeholder="Seleccione un país"
                        optionValue="id"
                        className="grow-1 w-full"
                        pt={{
                            root: {
                                style: { width: "100%" }
                            }
                        }}
                        id="country_fk"
                        invalid={!!errors.country_fk}
                        onChange={(e) => {
                            const countryId = Number(e.value); // Asegúrate de que el valor sea un número
                            console.log("ID seleccionado:", countryId);
                            setSelectedCountry(countryId);
                            setValue!("country_fk", countryId, { shouldValidate: true });
                            trigger!("country_fk");
                        }}
                    />

                    {errors && errors.country_fk && (
                        <small className="text-secondary">{errors.country_fk.message}</small>
                    )}
                </div>

                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="city_fk">Ciudad</label>
                    <Dropdown
                        value={selectedCity}
                        options={cities}
                        optionLabel="name"
                        placeholder="Seleccione una ciudad"
                        optionValue="id"
                        className="grow-1 w-full"
                        pt={{
                            root: {
                                style: { width: "100%" }
                            }
                        }}
                        id="city_fk"
                        invalid={!!errors.city_fk}
                        onChange={(e) => {
                            const cityId = Number(e.value); // Asegúrate de que el valor sea un número
                            setSelectedCity(cityId);
                            setValue!("city_fk", cityId, { shouldValidate: true });
                            trigger!("city_fk");
                        }}
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