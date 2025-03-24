import { AssetManager } from "../../../assetForward";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "透明身体",
    Random: false,
    Gender: "F",
    ParentGroup: {},
    Hide: [
        "HandsLeft",
        "HandsRight",
        "BodyUpper",
        "BodyLower",
        "ArmsLeft",
        "ArmsRight",
        "Pussy",
        "Mouth",
        "Head",
        "Eyes",
        "Eyes2",
        "右眼_Luzi",
        "左眼_Luzi",
    ],
};

const translations = {
    CN: "透明身体",
    EN: "Transparent body",
};

export default function () {
    AssetManager.addAsset("动物身体_Luzi", asset, undefined, translations);
}
