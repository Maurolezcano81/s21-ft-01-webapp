import { Password } from "primereact/password";
import { useFormContext, Controller } from "react-hook-form";

const PasswordSection = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext(); 

    return (
        <div className="flex flex-col gap-4">
            <label htmlFor="password">Contraseña</label>
            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <Password
                        {...field}
                        toggleMask
                        placeholder="Contraseña"
                        className="w-full"
                        feedback={false}
                        invalid={!!errors.password}
                        pt={{
                            iconField: {
                                root: { style: { width: "100%" } },
                            },
                            input: { style: { width: "100%" } },
                            root: { style: { width: "100%" } },
                        }}
                    />
                )}
            />
            {errors.password && (
                <small className="text-secondary">{errors.password?.message}</small>
            )}
        </div>
    );
};

export default PasswordSection;