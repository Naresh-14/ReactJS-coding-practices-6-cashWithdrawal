import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onWithdramBalance} = props
  const {value} = denominationDetails
  const onWithdram = () => {
    onWithdramBalance(value)
  }

  return (
    <li className="list-item-contanier">
      <button
        type="button"
        className="denomination-button"
        onClick={onWithdram}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
