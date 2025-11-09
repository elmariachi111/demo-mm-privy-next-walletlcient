import { usePrivy } from "@privy-io/react-auth";
import { useMemo } from "react";
import { useAccount, useSignMessage, useWalletClient } from "wagmi";

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

      <div>if theres a wallet client, this is its address: &quot;{wcAddress}&quot; </div>

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
  const { ready, login, logout, connectWallet } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  // Now it's safe to use other Privy hooks and state
  return (
    <div>
      Privy is ready!
      <button
        onClick={() => {
          connectWallet();
        }}
      >
        Connect Wallet
      </button>
      <button
        onClick={() => {
          //connectWallet()
          login();
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
      <WagmiTestComponent />
    </div>
  );
}
