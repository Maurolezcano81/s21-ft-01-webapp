import React from 'react';
import TransactionHistory from '../components/chart/TransactionHistory';
import AccountSummaryChart from '../components/chart/AccountSummaryCart';
import NavbarLeft from '../components/Common/NavbarLeft';
import AsideBar from '../components/Aside/AsideBar';

const HistoryPage: React.FC = () => {

    return (  
        <div className="min-h-screen flex">  
                <NavbarLeft />  

            <div className="p-4 mx-2 flex grow-2">
                <div className="flex-1 p-2">
                    <TransactionHistory 
                    limit={false}
                    />
                </div>
                <div className="w-[15rem] p-2">
                    <AccountSummaryChart />
                </div>
            </div>

            <AsideBar />
        </div>
    );
};

export default HistoryPage;  