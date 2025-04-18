import { ChatRoomEvents } from "@sugarch/bc-event-handler";
import { AssetManager } from "../../assetForward";
import { i18nEntry } from "../../i18n";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "极限束腰",
    Gender: "F",
    Fetish: ["Lingerie", "Latex"],
    Priority: 22,
    Value: -1,
    Difficulty: 13,
    Time: 40,
    RemoveTime: 20,
    AllowLock: true,
    AllowTighten: true,
    DrawLocks: false,
    Prerequisite: ["AccessTorso", "HasBreasts"],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    NotVisibleOnScreen: GameVersion === "R114" ? [] : ["LuziScreen"],
    DefaultColor: ["#545454", "#BC8B84"],
    Alpha: [
        {
            Group: [
                "BodyUpper",
                "BodyLower",
                "Cloth",
                "ClothLower",
                "SuitLower",
                "Suit",
                "ItemAddon",
                "Bra",
                "Socks",
                "Panties",
                "Cloth_笨笨蛋Luzi",
                "ClothLower_笨笨蛋Luzi",
                "Cloth_笨笨笨蛋Luzi2",
                "ClothLower_笨笨笨蛋Luzi2",
                "Panties_笨笨蛋Luzi",
                "Bra_笨笨蛋Luzi",
                "Shoes_笨笨蛋Luzi",
            ],
            Masks: [
                [190, 370, 10, 10],
                [300, 370, 10, 10],
                [192, 380, 10, 5],
                [298, 380, 10, 5],
                [195, 385, 10, 5],
                [295, 385, 10, 5],
                [200, 380, 100, 20],
                [193, 390, 114, 26],
                [184, 416, 132, 23],
                [175, 439, 150, 25],
            ],
        },
    ],
    Layer: [{ Name: "Main" }, { Name: "B" }],
};

export default function () {
    AssetManager.addAsset("ItemTorso", asset, undefined, {
        CN: "极限束腰",
        EN: "Extreme Corset",
        RU: "Экстремальный корсет",
    });
    AssetManager.addLayerNames("ItemTorso", asset, {
        CN: {
            B: "扣子",
            Main: "束腰",
        },
        EN: {
            B: "Buckle",
            Main: "Corset",
        },
        RU: {
            B: "Застежка",
            Main: "Корсет",
        },
    });

    if (GameVersion !== "R114") {
        ChatRoomEvents.once("PlayerJoin", () => {
            const usedThisItem =
                Player.Appearance.some(({ Asset }) => Asset.Name === asset.Name && Asset.Group.Name === "ItemTorso") ||
                Player.Crafting.some((crafting) => crafting && crafting.Item === asset.Name);

            if (usedThisItem) {
                ChatRoomSendLocal(
                    i18nEntry({
                        CN: "[NOTE] 极限束腰 (躯干物品) 已经加入基础BC，服装拓展版本即将退役.",
                        EN: "[NOTE] Extreme Corset (item on torso) has been added to the base BC, the clothing-ext version will be retired soon.",
                    })
                );
            }
        });
    }
}
