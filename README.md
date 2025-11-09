# wagmi/walletclient broke

- nextjs
- privy
- wagmi
- metamask

Quite recently something on the constellation of nextjs, privy, wagmi, metamask broke wagmi's walletClient hook. I'm 80% sure this is related to some recent Metamask change (13.7, .8 is upcoming) . The hook still yields a walletclient when I'm connecting with Brave or Phantom. It also works fine with embedded wallets (not tested here) 

https://demo-mm-privy-next-walletlcient.vercel.app/