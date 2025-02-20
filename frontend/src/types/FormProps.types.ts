// types/FormProps.types.ts
import { UseMutationResult } from "@tanstack/react-query";
import { UseFormRegister, FieldErrors, FieldValues, UseFormWatch, Control, UseFormTrigger, UseFormSetValue } from "react-hook-form";

export interface PropsFormSubcomponent<T extends FieldValues> {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    watch?: UseFormWatch<T>;
    control?: Control<T>;
    trigger?: UseFormTrigger<T>;
    setValue?: UseFormSetValue<T>;
    mutateProps?: UseMutationResult<T>;
}