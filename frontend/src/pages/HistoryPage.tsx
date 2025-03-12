import React from 'react'; 
import TransactionHistory from '../components/chart/TransactionHistory';  
import AccountSummaryChart from '../components/chart/AccountSummaryCart';  
import { Transaction } from '../types/Transaction.types';  
import Navbar from '../components/bar/Navbar'; 
import Sidebar from '../components/bar/Sidebar'; 

const HistoryPage: React.FC = () => {  
    const transactionsData: Transaction[] = [];  

    return (  
        <div className="min-h-screen flex">  
            {/* Navbar a la izquierda */}  
            <div className="w-[13rem] bg-white shadow-md">  
                <Navbar />  
            </div>  

            {/* Charts */}  
            <div className="flex-1 p-4 mx-2 flex">  
                <div className="flex-1 p-2">   
                        <TransactionHistory transactions={transactionsData} />  
                </div>  
                    <div className="w-[15rem] p-2">   
                        <AccountSummaryChart />  
                    </div> 
            </div>  

            {/* Sidebar a la derecha */}  
            <div className="w-[19.8rem]">  
                <Sidebar />  
            </div>  
        </div>  
    );  
};  

export default HistoryPage;  