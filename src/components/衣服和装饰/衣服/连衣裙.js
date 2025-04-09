import { AssetManager } from "../../../assetForward";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "连衣裙_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 26,
    DefaultColor: ["#1F1F1F", "#1F1F1F", "#1F1F1F", "#1F1F1F", "#FFFFFF"],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    Layer: [
        {
            Name: "绳子",
            ParentGroup: {},
        },
        {
            Name: "裙",
            PoseMapping: {
                TapedHands: "TapedHands",
                BackBoxTie: "BackElbowTouch",
                BackCuffs: "BackElbowTouch",
                BackElbowTouch: "BackElbowTouch",
                OverTheHead: "BackElbowTouch",
                Yoked: "BackElbowTouch",
                AllFours: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
            },
        },
        {
            Name: "蝴蝶结小",
            PoseMapping: {
                AllFours: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
            },
        },
        {
            Name: "蝴蝶结大",
            ParentGroup: {},
        },

        {
            Name: "珠",
            ParentGroup: {},
        },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "连衣裙",
    EN: "Satin Bow Dress",
};

export default function () {
    AssetManager.addAsset("Cloth", asset, undefined, translation);
}
