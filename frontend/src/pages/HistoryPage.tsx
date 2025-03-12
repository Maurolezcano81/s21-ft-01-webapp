import React from 'react';
import TransactionHistory from '../components/chart/TransactionHistory';
import AccountSummaryChart from '../components/chart/AccountSummaryCart';
import { Transaction } from '../types/Transaction.types';
import NavbarLeft from '../components/Common/NavbarLeft';
import AsideBar from '../components/Aside/AsideBar';

const HistoryPage: React.FC = () => {
    const transactionsData: Transaction[] = [];

    return (  
        <div className="min-h-screen flex">  
            {/* Navbar a la izquierda */}  
            <div className="w-[13rem] bg-white shadow-md">  
                <NavbarLeft />  
            </div>  

            {/* Charts */}
            <div className="p-4 mx-2 flex grow-2">
                <div className="flex-1 p-2">
                    <TransactionHistory transactions={transactionsData} />
                </div>
                <div className="w-[15rem] p-2">
                    <AccountSummaryChart />
                </div>
            </div>

            {/* Sidebar a la derecha */}
            <AsideBar />
        </div>
    );
};

export default HistoryPage;  