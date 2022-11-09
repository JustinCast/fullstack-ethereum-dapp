import { NextPage } from "next"
import { useAccount, useConnect, useContractRead } from "wagmi"
import { nftabi } from "../abis/nftfarm.abi"

const Workshop: NextPage = () => {

  const { data: earnedData, isLoading
  } = useContractRead({
    address: '0xd512C324018454959f1bcC9E69f63D7426f9487E',
    abi: nftabi,
    functionName: 'earned',
    args: ['0x8fb26DB09Cff35dbbF580dA0ebC0cAD2E70386FE']
  })
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()

  return (
    <>
      <div>
        {
          earnedData ?
            <span>{earnedData.toString()}</span> : null
        }
        <br />
        {
          isConnected ?
            <span>{address}</span> : null
        }
        <br />
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
          </button>
        ))}
      </div>
    </>
  )
}

export default Workshop