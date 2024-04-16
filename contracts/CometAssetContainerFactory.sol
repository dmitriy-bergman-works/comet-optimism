// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.15;

import "./IPriceFeed.sol";
import "./ERC20.sol";
import "./CometAssetContainer.sol";

contract CometAssetContainerFactory{
    event AssetContainerCreated(address indexed assetContainer);

    function createAssetContainer(
        CometAssetContainer.AssetConfig[] calldata assetConfigs
    ) external returns (address) {
        CometAssetContainer assetContainer = new CometAssetContainer(assetConfigs);
        emit AssetContainerCreated(address(assetContainer));
        return address(assetContainer);
    }
}