import { useState } from "react";
import { useAuthStore } from "../../store/AuthStore";
import CashPlus from "../svg/CashPlus";
import { Dialog } from "primereact/dialog";


const CashIn = () => {

    const user = useAuthStore((state) => state.user);

    const [cashInVisible, setCashInVisible] = useState(false);

    console.log(user)


    return (
        <div>
            <button
                className="p-2 flex items-center justify-center rounded-sm shadow-md mb-2  bg-secondary cursor-pointer"
            >
                <CashPlus
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                />
            </button>
            <p className="text-secondary text-center text-sm">Recibir</p>

            <Dialog header="Mis datos de cuenta" visible={cashInVisible} style={{ width: 'fit-content' }} onHide={() => { if (!cashInVisible) return; setCashInVisible(false); }} >

                <div>
                    <h4>Numero de cuenta: </h4>
                </div>
            </Dialog>
        </div>
    )
}

export default CashIn;