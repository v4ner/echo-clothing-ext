import { AssetManager } from "../../../assetForward";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "兽蹄鞋_Luzi",
    Random: false,
    Height: 14,
    Top: 490,
    Left: 120,
    PoseMapping: {
        Kneel: "Hide",
        KneelingSpread: "Hide",
        LegsClosed: "LegsClosed",
        Spread: "Spread",
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    DefaultColor: ["#000000", "#212121"],
    Layer: [
        {
            Name: "袜子",
        },
        {
            Name: "鞋底",
        },
    ],
};

const translations = {
    CN: "兽蹄鞋",
    EN: "Hoof Shoe",
};

export default function () {
    AssetManager.addAsset("Shoes", asset, undefined, translations);
}
