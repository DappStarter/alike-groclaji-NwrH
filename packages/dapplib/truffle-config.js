require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stool rice rural horn gesture fashion equal gentle'; 
let testAccounts = [
"0x62ad3dd6ad9607c13b2abe5ed99b3f38e1dd655f6640584d28781afd477a0545",
"0xe796ad2cc37929d95c0a2c474f4f72d06d3ab164e6f4801a09ae156f720c5e80",
"0x427e03ed45ee084097d5b1300a5ea1fdac0444fc15ba505142b4049a3c9a9697",
"0x1cb10f37f3b651ef4d36c37d49c7f99136b1bc003e3d6d014bf72a4e7edc16ac",
"0x3133eafbbc41befd3664d24fc698cdd724939097fabc4a8b9aa0d0c0a42e5e85",
"0xa41a398a88356b60ba345668877d85cc38313b72fad9330ec0e12cd9e929103f",
"0xf537567f816d68a659325b4b1e92e3a02f44ab7b638dcb00f38967c400292672",
"0xbbd2b6898939740d8dede423b26a98a42a3ac0eecc3e3007b53c5a86ca980751",
"0x8a36dfacf1fa52e7df9da2e18ad72991291b43ff4d860b939d1c3c997bd4bf8a",
"0x3cd8f087e7651a9a66d2dd9e28dce50e64615140addd5296cbd45123b2fa6bed"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

