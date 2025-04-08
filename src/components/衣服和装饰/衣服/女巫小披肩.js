import { AssetManager } from "../../../assetForward";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "女巫小披肩_Luzi",
    Random: false,
    Gender: "F",
    Left: 100,
    Top: 180,
    ParentGroup: {},
    PoseMapping: {
        Yoked: "Yoked",
        OverTheHead: "OverTheHead",
        AllFours: PoseType.HIDE,
        Hogtied: PoseType.HIDE,
    },
    EditOpacity: true,
    MinOpacity: 0,
    MaxOpacity: 1,
    Layer: [
        { Name: "后背", Priority: 4 },
        { Name: "下半基础" },
        { Name: "下半纹路" },
        { Name: "下半阴影", BlendingMode: "multiply" },
        { Name: "上半基础" },
        { Name: "上半阴影", BlendingMode: "multiply" },
        { Name: "环" },
    ],
};

/** @type {Translation.CustomRecord<string,string> } */
const layerNames = {
    CN: {
        后背: "后背",
        下半基础: "下半基础",
        下半纹路: "下半纹路",
        下半阴影: "下半阴影",
        上半基础: "上半基础",
        上半阴影: "上半阴影",
        环: "环",
    },
    EN: {
        后背: "Back",
        下半基础: "Lower Base",
        下半纹路: "Lower Pattern",
        下半阴影: "Lower Shadow",
        上半基础: "Upper Base",
        上半阴影: "Upper Shadow",
        环: "Ring",
    },
};

const translations = {
    CN: "女巫小披肩",
    EN: "Witch Small Shawl",
    DE: "Hexen kleine Stola",
};

export default function () {
    AssetManager.addAsset("ClothAccessory", asset, undefined, translations);
    AssetManager.addLayerNamesByEntry("ClothAccessory", "女巫小披肩_Luzi", layerNames);
}
