import { useMemo } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useSignMessage,
  useWalletClient,
} from "wagmi";

function WagmiTestComponent() {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient({ account: address });
  const { signMessage } = useSignMessage();
  console.log(address, walletClient);

  const wcAddress = useMemo(() => {
    if (walletClient) {
      return walletClient.account.address;
    }
    return null;
  }, [walletClient]);

  return (
    <div>
      <div>Wagmi Test Component:</div>

      <div>
        if theres a wallet client, this is its address: &quot;{wcAddress}&quot;{" "}
      </div>
      <div>the default address hook says its: &quot;{address}&quot; </div>
      <button
        onClick={() => {
          signMessage({ message: "Hello, world!" });
        }}
      >
        Sign Message
      </button>
    </div>
  );
}

export default function YourComponent() {
  const { isConnected, address } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const {data: walletClient} = useWalletClient()
  return (
    <div>
      
      {connectors.map((connector) => (
        <button key={connector.uid} onClick={() => connect({ connector })}>
          {connector.name}
        </button>
      ))}
      {/* <button
        onClick={() => {
          //connectWallet()
          login();
        }}
      >
        Login
      </button> */}
      {isConnected && (
        <div>
          <WagmiTestComponent />
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      )}
      {walletClient ? <p>Wallet Client: {walletClient.account.address}</p> : <p>No Wallet Client</p>}
    </div>
  );
}
