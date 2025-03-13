import { useState } from "react";
import CashMove from "../svg/CashMove"
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { moveOut, MoveOutForm } from "../../schemas/cashMove.schema";


const CashOut = () => {

    const [isTransferModalVisible, setIsTransferModalVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
        resolver: zodResolver(moveOut)
    })


    const onSubmit = (data: MoveOutForm) => {
        console.log(data)
    }

    return (
        <>
            <div>
                <button
                    className="p-2 rounded-sm shadow-md mb-2  bg-secondary cursor-pointer"
                    onClick={() => setIsTransferModalVisible(true)}
                >
                    <CashMove
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                    />
                </button>
                
                <p className="text-secondary text-center text-sm">
                    Enviar
                </p>

                <Dialog header="Transferir a otra persona" visible={isTransferModalVisible} style={{ width: 'fit-content' }} onHide={() => { if (!isTransferModalVisible) return; setIsTransferModalVisible(false); }} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap flex-col items-center justify-between gap-2">

                            <div className="flex flex-col gap-4 grow-1">
                                <label htmlFor="reciever_account_id">Numero de Cuenta</label>
                                <InputText
                                    placeholder="Numero de Cuenta"
                                    {...register("reciever_account_id")}
                                    id="reciever_account_id"
                                    invalid={!!errors.reciever_account_id}
                                />
                                {errors && errors.reciever_account_id && (
                                    <small className="text-secondary">{errors.reciever_account_id.message}</small>
                                )}
                            </div>

                            <div className="flex flex-col gap-4 grow-1">
                                <label htmlFor="last_name">Monto</label>
                                <InputText
                                    placeholder="Monto"
                                    {...register("amount")}
                                    id="amount"
                                    invalid={!!errors.amount}
                                />

                                {errors && errors.amount && (
                                    <small className="text-secondary">{errors.amount.message}</small>
                                )}
                            </div>
                        </div>
                    </form>
                </Dialog>
            </div>


        </>

    )
}

export default CashOut