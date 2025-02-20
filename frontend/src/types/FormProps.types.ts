// types/FormProps.types.ts
import { UseFormRegister, FieldErrors, FieldValues, UseFormWatch } from "react-hook-form";

export interface PropsFormSubcomponent<T extends FieldValues> {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    watch?: UseFormWatch<T>;
}
