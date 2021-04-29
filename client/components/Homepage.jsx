import React from 'react'
import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'
import AddOrder from './AddOrder'
import LiveTrades from './LiveTrades'
import TradeHistory from './TradeHistory'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.jsx'

function Homepage () {
  return (
    <>
      <IfAuthenticated>
        <Balance/>
        <OpenOrders/>
        <AddOrder/>
        <LiveTrades/>
        <TradeHistory/>
      </IfAuthenticated>

      <IfNotAuthenticated>
        <LiveTrades/>
      </IfNotAuthenticated>
    </>
  )
}

export default Homepage