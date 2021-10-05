require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note range provide gesture help foster genius'; 
let testAccounts = [
"0xbebd40d5571e837da5a5ebca60be7921b8412cf261ab0a6c26c407795fc2cc00",
"0x8ac892363fff68e58a1fae9997da72e738644466c7657dc158039a23b4fc4aec",
"0x657991668be6b25d1975b0af2bd42243a25b462e4dc56a6369c40e91a89201d7",
"0x9a00c893f4d25542906059fe6846d739d1b03a842284bdd4f9b62ad2fd11d0b2",
"0x3e99d73c3c9c56b7811ab465a77b7ff76c87b71493b8e39bde694c0183b1a750",
"0x9efa9fae75534d1ad3df2510a9963cef8713fe2710d371cd5336f5238454677e",
"0xfe64a7de47ede9a2eaf130600e3535302fe43761af0d1af50fcf63934ad5993a",
"0x3a088b3425b2ef39e87205cc205e26a7c2e7472aaa9054b8d4103242caf5711b",
"0x2f6556e66da35470143d1820f0afcae69c50b36ed45a57fc37c62528ff33b5e7",
"0xeb3aceb77ff880f59967cdc5cd09669e37b8b030156d59fb8106e10f69d58882"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

