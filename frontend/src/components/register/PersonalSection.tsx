import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { PropsFormSubcomponent } from "../../types/FormProps.types";
import { FormDataRegister } from "../../schemas/register.schema";

const PersonalSection: React.FC<PropsFormSubcomponent<FormDataRegister>> = ({
    register,
    errors
}) => {

    return (
        <>
            <div className="flex flex-col gap-4">
                <label htmlFor="name">Nombre y Apellido</label>
                <InputText
                    placeholder="Nombre y apellido"
                    {...register("name")}
                    id="name"
                    invalid={!!errors.name}
                />
                {errors && errors.name && (
                    <small className="text-secondary">{errors.name.message}</small>
                )}
            </div>

            <div className="flex flex-col gap-4">
                <label htmlFor="email">Correo electrónico</label>
                <InputText
                    placeholder="Correo electrónico"
                    {...register("email")}
                    id="email"
                    invalid={!!errors.email}
                />
                {errors && errors.email && (
                    <small className="text-secondary">{errors.email.message}</small>
                )}
            </div>

            <div className="flex gap-2 items-center justify-between flex-wrap">
                <div className="flex flex-col grow-1 gap-4">
                    <label htmlFor="birth_date">Fecha de nacimiento</label>
                    <Calendar
                        showIcon
                        placeholder="Fecha de Nacimiento"
                        className="custom-calendar"
                        {...register("birth_date")}
                        invalid={!!errors.birth_date}
                    />
                    <small className="text-secondary">{errors.birth_date?.message}</small>
                </div>

                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="phone">Número de teléfono</label>
                    <InputText
                        placeholder="(+54) 1234 5678"
                        {...register("phone")}
                        invalid={!!errors.phone}
                    />
                    <small className="text-secondary">{errors.phone?.message}</small>
                </div>
            </div>
        </>
    );
}

export default PersonalSection;
