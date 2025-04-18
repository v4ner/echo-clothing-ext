import { AssetManager } from "../../../assetForward";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "鱼嘴高跟鞋_Luzi",
    Random: false,
    Top: 850,
    Left: 90,
    PoseMapping: {
        Kneel: "Hide",
        KneelingSpread: "Hide",
        LegsClosed: "LegsClosed",
        Spread: "Spread",
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    DefaultColor: ["#FFFFFF", "#FFFFFF", "#000000", "#000000", "#000000", "#000000"],
    Layer: [
        {
            Name: "高光",
            Priority: 24,
        },
        {
            Name: "卡扣",
            Priority: 24,
        },
        {
            Name: "绑带",
            Priority: 23,
        },
        {
            Name: "鞋面",
            Priority: 23,
        },
        {
            Name: "鞋垫",
            Priority: 1,
        },
        {
            Name: "鞋底",
            Priority: 1,
        },
    ],
};

const translations = {
    CN: "鱼嘴高跟鞋",
    EN: "Peep-toe Heels",
};

export default function () {
    AssetManager.addAsset("Shoes", asset, undefined, translations);
}
