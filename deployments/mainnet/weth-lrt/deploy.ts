import { Deployed, DeploymentManager } from '../../../plugins/deployment_manager';
import { DeploySpec, deployComet, exp } from '../../../src/deploy';

export default async function deploy(deploymentManager: DeploymentManager, deploySpec: DeploySpec): Promise<Deployed> {
  const ezETH = await deploymentManager.existing('ezETH', '0x1e756B7bCca7B26FB9D85344B3525F5559bbacb0');
  const WETH = await deploymentManager.existing('WETH', '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2');

  // Deploy scaling price feed for cbETH
  const ezETHScalingPriceFeed = await deploymentManager.deploy(
    'ezETH:priceFeed',
    'pricefeeds/ScalingPriceFeed.sol',
    [
      '0x636A000262F6aA9e1F094ABF0aD8f645C44f641C', // ezETH / ETH price feed
      8                                             // decimals
    ]
  );

  const cometAdmin = await deploymentManager.fromDep('cometAdmin', 'mainnet', 'usdc');
  const cometFactory = await deploymentManager.fromDep('cometFactory', 'mainnet', 'usdc');
  // const $configuratorImpl = await deploymentManager.fromDep('configurator:implementation', 'mainnet', 'usdc');
  // const configurator = await deploymentManager.fromDep('configurator', 'mainnet', 'usdc');
  const rewards = await deploymentManager.fromDep('rewards', 'mainnet', 'usdc');
  const bulker = await deploymentManager.fromDep('bulker', 'mainnet', 'usdc'); // 0xa397a8C2086C554B531c02E29f3291c9704B00c7
  const localTimelock = await deploymentManager.fromDep('timelock', 'mainnet', 'usdc');
  // Deploy all Comet-related contracts
  const deployed = await deployComet(deploymentManager, deploySpec);
  const { comet } = deployed;

    // console.log({getAssetInfo: comet.getAssetInfo})
    // console.log({getAssetInfo2: await comet.getAssetInfo(0)})
  
  // const bulker = await deploymentManager.deploy(
  //   'bulker',
  //   'bulkers/BaseBulker.sol',
  //   [await comet.governor(), WETH.address]
  // );

  return { ...deployed, bulker };
}
