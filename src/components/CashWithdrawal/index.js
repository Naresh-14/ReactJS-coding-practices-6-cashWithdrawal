import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    isBalance: 2000,
  }

  onWithdramBalance = value => {
    this.setState(prevState => ({isBalance: prevState.isBalance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {isBalance} = this.state

    return (
      <div className="app-container">
        <div className="cash-container">
          <div className="cash-card">
            <p className="cash-icon">S</p>
            <h1 className="cash-name">Sarah Williams</h1>
          </div>
          <div className="cash-balance-card">
            <h1 className="cash-balance-title">Your Balance</h1>
            <div className="sub-balance-card">
              <h1 className="sub-balance-rupees">{isBalance}</h1>
              <p className="sub-balance-name">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <h1 className="withdraw-title">Withdraw</h1>
            <p className="withdraw-description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="lists-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominationDetails={eachItem}
                  key={eachItem.id}
                  onWithdramBalance={this.onWithdramBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
