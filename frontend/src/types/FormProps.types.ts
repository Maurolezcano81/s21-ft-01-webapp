// types/FormProps.types.ts
import { UseFormRegister, FieldErrors, FieldValues, UseFormWatch, Control } from "react-hook-form";

export interface PropsFormSubcomponent<T extends FieldValues> {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    watch?: UseFormWatch<T>;
    control?: Control<T>;
}
