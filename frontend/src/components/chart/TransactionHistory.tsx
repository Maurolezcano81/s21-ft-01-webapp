import React, { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { useTransactions } from "../../hooks/useMoves";
import { useAuthStore } from "../../store/AuthStore";
import { MonthPickerDemo } from "./MonthPicker";

interface TransactionHistoryProps {
    limit?: boolean;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ limit = false }) => {
    const user = useAuthStore((state) => state.user);
    const [selectedMonth, setSelectedMonth] = useState<Date | null>(new Date());

    const { transactions, loading, error } = useTransactions(
        user!.id_user,
        selectedMonth ? selectedMonth.toISOString() : ""
    );

    // Obtener la primera fecha si limit=true
    const firstDate = limit ? Object.keys(transactions || {})[0] : null;

    return (
        <div className="p-4 bg-whiteSecondary">
            {loading && (
                <div className="flex justify-center">
                    <ProgressSpinner />
                </div>
            )}

            {error && <div className="text-red-500 text-center">{error}</div>}

            <div className="flex justify-end">
                <MonthPickerDemo selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
            </div>

            {/* Verificación de transacciones y mensaje cuando no haya */}
            {!loading && !error && (!transactions || Object.keys(transactions).length === 0) ? (
                <div className="text-gray-500 text-center">No hay transacciones para este mes.</div>
            ) : (
                (limit && firstDate ? [[firstDate, transactions![firstDate]]] : Object.entries(transactions || {}))
                    .map(([date, trans]) => (
                        <div key={date} className="mb-4">
                            <h3 className="text-lg text-secondary font-bold">{date}</h3>
                            <ul className="bg-white shadow-md rounded-lg p-3">
                                {trans.slice(0, limit ? 5 : trans.length).map((t) => (
                                    <li key={t.transaction_id} className={`my-2 p-4 rounded-md last:border-none flex justify-between items-center ${t.is_income ? 'text-primary' : 'text-secondary shadow-md'}`}>
                                        <div className="flex flex-col items-start grow-1">
                                            <div className="font-semibold">Número de Transacción: {t.transaction_id}</div>
                                            <div className="text-xs">
                                                {new Date(t.date).toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="text-right grow-1">
                                            <span>${t.ammount}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
            )}
        </div>
    );
};

export default TransactionHistory;
