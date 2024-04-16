// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.15;
import "./CometConfiguration.sol";

interface ICometAssetContainerFactory {
    event AssetContainerCreated(address indexed assetContainer);
    
    function createAssetContainer(
        CometConfiguration.AssetConfig[] calldata assetConfigs
    ) external returns (address);
}