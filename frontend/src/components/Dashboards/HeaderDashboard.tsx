import { useDashboard } from "../../hooks/useDashboard";
import { useAuthStore } from "../../store/AuthStore";
import AnualResume from "./AnualResume";


const HeaderDashboard = () => {


    const user = useAuthStore((state) => state.user);
    console.log(user)
    const dashboardData = useDashboard(user?.account_id)

    console.log(dashboardData)
    return (
        <div className="flex gap-12">
            <div className="w-1/3">
                <div>
                    <h4 className="font-semibold">Hola, {user?.name} 👋</h4>
                </div>

                <div className="font-semibold">
                    <div className="text-secondary flex flex-col gap-2">
                        <h6 className="text-3xl">Saldos</h6>

                        <div className="p-4 pr-18 rounded-xl border-1 border-secondary bg-whiteGray">
                            <p className="font-normal">Balance Total</p>
                            <h4 className="my-2 font-bold text-4xl text-black">${dashboardData.data?.balance}</h4>
                        </div>

                        <div className="p-4 pr-18 rounded-xl border-1 border-secondary bg-whiteGray">
                            <p className="font-normal">Limite de Créditos</p>
                            <h4 className="my-2 font-normal italic text-gray-400 text-3xl">Soon!</h4>
                        </div>

                    </div>

                    <button className="text-center w-full my-4 p-2 rounded-xl bg-secondary text-white font-normal cursor-pointer border-secondary border-1 hover:bg-white hover:text-secondary">
                        Hacer una Transferencia
                    </button>

                </div>

            </div>

            <div className="w-2/3">
                {dashboardData && (
                    <AnualResume
                        dataGraphics={dashboardData?.data}
                    />
                )}
            </div>
        </div>
    )
}

export default HeaderDashboard;