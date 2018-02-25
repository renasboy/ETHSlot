var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"max_fee","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"destruct","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"last_result","outputs":[{"name":"","type":"bytes1"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"create_block","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_start","type":"bytes1"},{"name":"_end","type":"bytes1"}],"name":"play","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_balance","type":"uint256"}],"name":"Balance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_sender","type":"address"},{"indexed":false,"name":"_start","type":"bytes1"},{"indexed":false,"name":"_end","type":"bytes1"},{"indexed":false,"name":"_result","type":"bytes1"},{"indexed":false,"name":"_winner","type":"bool"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"Play","type":"event"},{"anonymous":false,"inputs":[],"name":"Destroy","type":"event"}];

var code = "0x60606040527f455448426c6f636b427974650000000000000000000000000000000000000000600090600019169055341561003957600080fd5b5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504360038190555060ff7f010000000000000000000000000000000000000000000000000000000000000002600460016101000a81548160ff02191690837f0100000000000000000000000000000000000000000000000000000000000000900402179055505b5b6109c9806100f16000396000f30060606040523615610081576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100fd578063241c2b8c1461012e5780632b68b9c614610157578063334f75361461016c5780638da5cb5b146101d957806394e47e611461022e5780639702889914610257575b5b60043073ffffffffffffffffffffffffffffffffffffffff16318115156100a557fe5b046002819055507fe8d947d7ebdd7b8b8fa2ad2022c7591418ac32d8c29c5f8a8fc9de52ffa540923073ffffffffffffffffffffffffffffffffffffffff16316040518082815260200191505060405180910390a15b005b341561010857600080fd5b6101106102d4565b60405180826000191660001916815260200191505060405180910390f35b341561013957600080fd5b6101416102da565b6040518082815260200191505060405180910390f35b341561016257600080fd5b61016a6102e0565b005b341561017757600080fd5b61017f6103a6565b60405180827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b34156101e457600080fd5b6101ec6103d8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561023957600080fd5b6102416103fe565b6040518082815260200191505060405180910390f35b6102ba60048080357effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190919080357effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610404565b604051808215151515815260200191505060405180910390f35b60005481565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561033c57600080fd5b7ff58fef8e187ef8dfd7bef096c1ef3e4f3c54f98d95b8ad5659349b07e61204df60405160405180910390a1600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b600460009054906101000a90047f01000000000000000000000000000000000000000000000000000000000000000281565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b60008060008060008060008060008060003411801561042557506002543411155b151561043057600080fd5b600098508b7f0100000000000000000000000000000000000000000000000000000000000000900497508a7f01000000000000000000000000000000000000000000000000000000000000009004965060008860ff16148061049757508760ff168760ff16105b156104a157600080fd5b600460019054906101000a90047f0100000000000000000000000000000000000000000000000000000000000000027f0100000000000000000000000000000000000000000000000000000000000000900460ff164303409550856020600460029054906101000a90047f0100000000000000000000000000000000000000000000000000000000000000027f0100000000000000000000000000000000000000000000000000000000000000900460ff1681151561055c57fe5b0660ff1660208110151561056c57fe5b1a7f010000000000000000000000000000000000000000000000000000000000000002600460006101000a81548160ff02191690837f010000000000000000000000000000000000000000000000000000000000000090040217905550600460009054906101000a90047f0100000000000000000000000000000000000000000000000000000000000000027f01000000000000000000000000000000000000000000000000000000000000009004945085601f60208110151561062c57fe5b1a7f010000000000000000000000000000000000000000000000000000000000000002600460016101000a81548160ff02191690837f01000000000000000000000000000000000000000000000000000000000000009004021790555085600060208110151561069857fe5b1a7f010000000000000000000000000000000000000000000000000000000000000002600460026101000a81548160ff02191690837f01000000000000000000000000000000000000000000000000000000000000009004021790555060008560ff1611801561070e57508760ff168560ff1610155b801561072057508660ff168560ff1611155b156107a4576001985060018888030160ff16935060ff6064850281151561074357fe5b046064039250606483340281151561075757fe5b04915081340190503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156107a3576000995061098d565b5b60043073ffffffffffffffffffffffffffffffffffffffff16318115156107c757fe5b046002819055507fe8d947d7ebdd7b8b8fa2ad2022c7591418ac32d8c29c5f8a8fc9de52ffa540923073ffffffffffffffffffffffffffffffffffffffff16316040518082815260200191505060405180910390a13373ffffffffffffffffffffffffffffffffffffffff167fcc30f7404b8347fa37b5b1c96916396609d867483a5ec6f56affcd94c87222bd8d8d600460009054906101000a90047f0100000000000000000000000000000000000000000000000000000000000000028d4260405180867effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001847effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001831515151581526020018281526020019550505050505060405180910390a2600199505b5b505050505050505050929150505600a165627a7a72305820bf81c5e0c2d083c79c10b1cba43145015fa8858e9f9723762642beaf799d8e050029";
