import { RelationConfigMap } from '../../../plugins/deployment_manager/RelationConfig';
import baseRelationConfig from '../../relations';

console.log("LRT")

export default {
  ...baseRelationConfig,
  // '0xbf5495Efe5DB9ce00f80364C8B423567e58d2110': {
  //   artifact: 'contracts/ERC20.sol:ERC20',
  //   delegates: {
  //     field: {
  //       slot: '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
  //     }
  //   },
    '0xbf5495Efe5DB9ce00f80364C8B423567e58d2110': {
      artifact: 'contracts/ERC20.sol:ERC20',
      delegates: {
        field: {
          slot: '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
        }
      }
  },
  'AppProxyUpgradeable': {
    artifact: 'contracts/ERC20.sol:ERC20',
  }
};
