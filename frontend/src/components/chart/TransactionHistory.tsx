import React, { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { useTransactions } from "../../hooks/useMoves";
import { useAuthStore } from "../../store/AuthStore";
import { MonthPickerDemo } from "./MonthPicker";

interface TransactionHistoryProps {
    limit?: boolean;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ limit = false }) => {
    const user = useAuthStore((state) => state.user);  // Obtenemos el id del usuario
    const [selectedMonth, setSelectedMonth] = useState<Date | null>(new Date());  // Usamos la fecha actual por defecto
    console.log("Selected Month:", selectedMonth);  // Debugging

    const { transactions, loading, error } = useTransactions(
        user!.id_user, 
        selectedMonth ? selectedMonth.toISOString() : ""
    );  // Pasamos el mes al hook

    if (loading) return <div className="flex justify-center"><ProgressSpinner /></div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;
    if (!transactions || Object.keys(transactions).length === 0) {
        return <div className="text-gray-500 text-center">No hay transacciones para este mes.</div>;
    }

    return (
        <div className="p-4">
            {/* Verifica si MonthPickerDemo se está renderizando */}
            <MonthPickerDemo selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} /> 
            {Object.entries(transactions).map(([date, trans]) => (
                <div key={date} className="mb-4">
                    <h3 className="text-lg font-bold">{date}</h3>
                    <ul className="bg-white shadow-md rounded-lg p-3">
                        {trans.slice(0, limit ? 5 : trans.length).map((t) => (
                            <li key={t.transaction_id} className="border-b last:border-none p-2 flex justify-between">
                                <span className={t.is_income ? "text-green-500" : "text-red-500"}>
                                    {t.is_income ? "Ingreso" : "Gasto"}
                                </span>
                                <span>${t.ammount}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TransactionHistory;
