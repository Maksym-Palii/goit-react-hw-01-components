import { Profile } from "components/profile/Profile"
import { Statistics } from "components/statistics/Statistics"
import { FriendList } from "components/friendList/FriendList"
import {TransactionHistory} from "components/transactionHistory/TransactionHistory"
import user from 'dataServer/user.json'
import data from 'dataServer/data.json'
import transactions from 'dataServer/transactions.json'


export const App = () => { 
    return (
        <>
            <Profile username={user.username}
                tag={user.tag} location={user.location}
                avatar={user.avatar} stats={user.stats} />
            <Statistics stats={data} title={data.title} />
            <FriendList />
            <TransactionHistory transactions={transactions} />
        </>
    )
}