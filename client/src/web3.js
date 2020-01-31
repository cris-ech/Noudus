import Web3 from 'web3';

const OPTIONS = {
  transactionConfirmationBlocks: 2
};

//const web3 = new Web3(window.web3.currentProvider,null, OPTIONS);
let web3;
if (typeof window.web3.currentProvider !== 'undefined') {
  console.log('Web3 Detected! ' + window.web3.currentProvider.constructor.name)
  web3 = new Web3(window.web3.currentProvider,null, OPTIONS);
} else {
  console.log('No Web3 Detected... using HTTP Provider')
  web3 = new Web3(new Web3.providers.HttpProvider("rinkeby.infura.io/v3/0d77fe0f88794566858a6b008658d1a2"),null , OPTIONS);
}

export default web3;