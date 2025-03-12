import React from 'react'; 
import TransactionHistory from '../components/chart/TransactionHistory';  
import AccountSummaryChart from '../components/chart/AccountSummaryCart';  
import { Transaction } from '../types/Transaction.types';  
import AsideBar from "../components/Aside/AsideBar";
import NavbarLeft from "../components/Common/NavbarLeft"

const HistoryPage: React.FC = () => {  
    const transactionsData: Transaction[] = [];  

    return (  
        <div className="min-h-screen flex">  
            {/*NavbarLeft a la izquierda */}  
            <div className="flex">  
                <NavbarLeft />  
            </div>  

            {/* Charts */}  
            <main className="p-6 flex flex-col gap-8 grow-2">  
                <div className="flex">   
                        <TransactionHistory transactions={transactionsData} />  
                </div>  
                    <div className="flex">   
                        <AccountSummaryChart />  
                    </div> 
            </main>  

            {/* AsideBar a la derecha */}  
            <div className="flex">  
                <AsideBar />  
            </div>  
        </div>  
    );  
};  

export default HistoryPage;  