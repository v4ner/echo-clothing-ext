import { AssetManager } from "../../assetForward";
import { DialogTools } from "@mod-utils/Tools";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "充气式拘束袋_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 64,
    Difficulty: 8,
    AllowLock: true,
    AllowTighten: true,
    DrawLocks: false,
    RemoveTime: 5,
    Time: 10,
    Extended: true,
    ParentGroup: {},
    Effect: [E.Freeze, E.BlockWardrobe, E.Block, E.Mounted, E.MapImmobile, E.OnBed, E.OneWayEnclose],
    SetPose: ["BackElbowTouch", "LegsClosed"],
    Hide: [],
    EditOpacity: true,
    MinOpacity: 0,
    MaxOpacity: 1,
    DefaultColor: [
        "#000000",
        "Default",
        "Default",
        "Default",
        "#000000",
        "Default",
        "Default",
        "Default",
        "#000000",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "#444444",
        "#000000",
        "Default",
        "Default",
    ],
    Layer: [
        {
            Name: "拘束袋充气底色",
            AllowTypes: { o: 1 },
        },
        {
            Name: "拘束袋充气阴影",
            AllowTypes: { o: 1 },
            MinOpacity: 1,
        },
        {
            Name: "拘束袋充气高光",
            AllowTypes: { o: 1 },
            MinOpacity: 1,
        },
        {
            Name: "拘束带充气",
            AllowTypes: { o: 1 },
            MinOpacity: 1,
        },

        {
            Name: "拘束袋底色",
            AllowTypes: { o: 0 },
        },
        {
            Name: "拘束袋阴影",
            AllowTypes: { o: 0 },
            MinOpacity: 1,
        },
        {
            Name: "拘束袋高光",
            AllowTypes: { o: 0 },
            MinOpacity: 1,
        },
        {
            Name: "拘束带",
            AllowTypes: { o: 0 },
            MinOpacity: 1,
        },

        {
            Name: "头拘束袋底色",
            AllowTypes: { t: 1 },
        },
        {
            Name: "头拘束袋阴影",
            AllowTypes: { t: 1 },
            MinOpacity: 1,
        },
        {
            Name: "头拘束袋高光",
            AllowTypes: { t: 1 },
            MinOpacity: 1,
        },
        {
            Name: "头拘束带",
            AllowTypes: { t: 1 },
            MinOpacity: 1,
        },

        {
            Name: "卡扣",
            MinOpacity: 1,
        },
        {
            Name: "接口",
            AllowTypes: { t: 1 },
            MinOpacity: 1,
        },
        {
            Name: "管子",
            AllowTypes: { g: 1 },
            MinOpacity: 1,
        },

        {
            Name: "罐子",
            AllowTypes: { g: 1 },
            MinOpacity: 1,
        },
        {
            Name: "罐子软管",
            AllowTypes: { g: 1 },
            MinOpacity: 1,
        },
        {
            Name: "液体",
            AllowTypes: { g: 1 },
            MinOpacity: 1,
        },
        {
            Name: "罐子高光",
            AllowTypes: { g: 1 },
            MinOpacity: 1,
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "充气",
            DrawImages: false,
            Key: "o",
            Options: [{}, {}],
        },
        {
            Name: "头套",
            DrawImages: false,
            Key: "t",
            Options: [{}, {}],
        },
        {
            Name: "链接罐子",
            DrawImages: false,
            Key: "g",
            Options: [{}, {}],
        },
    ],
    BaselineProperty: { Opacity: 1 },
    ScriptHooks: {
        Init: PropertyOpacityInit,
        Load: PropertyOpacityLoad,
        Draw: PropertyOpacityDraw,
        Exit: PropertyOpacityExit,
    },
};

/** @type {Translation.Dialog} */
const dialog = DialogTools.replicateGroupedItemDialog(["ItemDevices"], ["充气式拘束袋_Luzi"], {
    CN: {
        SelectBase: "设置充气式拘束袋",
        Select充气: "设置",
        Module充气: "充气",
        Optiono0: "无",
        Optiono1: "充满",
        Select链接罐子: "设置",
        Module链接罐子: "链接罐子",
        Optiong0: "无",
        Optiong1: "有",
        Select头套: "设置",
        Module头套: "头套",
        Optiont0: "无",
        Optiont1: "有",
        Seto0: "SourceCharacter放掉了DestinationCharacter拘束袋的气体",
        Seto1: "SourceCharacter将DestinationCharacter拘束袋充满了气体",
        Setg0: "SourceCharacter移除了DestinationCharacter呼吸器限制",
        Setg1: "SourceCharacter添加了DestinationCharacter呼吸器限制",
        Sett0: "SourceCharacter移除了DestinationCharacter头套",
        Sett1: "SourceCharacter添加了DestinationCharacter头套",
    },
    EN: {
        SelectBase: "Set Inflatable Restraint Bag",
        Select充气: "Set",
        Module充气: "Inflate",
        Optiono0: "None",
        Optiono1: "Full",
        Select链接罐子: "Set",
        Module链接罐子: "Link Canister",
        Optiong0: "None",
        Optiong1: "Yes",
        Select头套: "Set",
        Module头套: "Hood",
        Optiont0: "None",
        Optiont1: "Yes",
        Seto0: "SourceCharacter released the gas from DestinationCharacter restraint bag",
        Seto1: "SourceCharacter filled DestinationCharacter restraint bag with gas",
        Setg0: "SourceCharacter removed the breathing restriction from TargetCharacter",
        Setg1: "SourceCharacter added a breathing restriction to TargetCharacter",
        Sett0: "SourceCharacter removed the hood from TargetCharacter",
        Sett1: "SourceCharacter added a hood to DestinationCharacter",
    },
    RU: {
        SelectBase: "Настройка надувного мешка для сдерживания",
        Select充气: "Настройка",
        Module充气: "Надуть",
        Optiono0: "Нет",
        Optiono1: "Полный",
        Select链接罐子: "Настройка",
        Module链接罐子: "Связать баллон",
        Optiong0: "Нет",
        Optiong1: "Да",
        Select头套: "Настройка",
        Module头套: "Надеть капюшон",
        Optiont0: "Нет",
        Optiont1: "Да",
        Seto0: "SourceCharacter выпустил газ из мешка для сдерживания DestinationCharacter",
        Seto1: "SourceCharacter наполнил мешок для сдерживания DestinationCharacter газом",
        Setg0: "SourceCharacter удалил ограничение дыхания у DestinationCharacter",
        Setg1: "SourceCharacter добавил ограничение дыхания к DestinationCharacter",
        Sett0: "SourceCharacter снял капюшон с DestinationCharacter",
        Sett1: "SourceCharacter надел капюшон на DestinationCharacter",
    },
    UA: {
        SelectBase: "Налаштування надувної сумки для обмеження",
        Select充气: "Налаштування",
        Module充气: "Надути",
        Optiono0: "Ні",
        Optiono1: "Повна",
        Select链接罐子: "Налаштування",
        Module链接罐子: "Приєднати бак",
        Optiong0: "Ні",
        Optiong1: "Так",
        Select头套: "Налаштування",
        Module头套: "Надіти капюшон",
        Optiont0: "Ні",
        Optiont1: "Так",
        Seto0: "SourceCharacter випустив газ з сумки для обмеження DestinationCharacter",
        Seto1: "SourceCharacter наповнив сумку для обмеження DestinationCharacter газом",
        Setg0: "SourceCharacter прибрав обмеження дихання у DestinationCharacter",
        Setg1: "SourceCharacter додав обмеження дихання до DestinationCharacter",
        Sett0: "SourceCharacter зняв капюшон з DestinationCharacter",
        Sett1: "SourceCharacter надів капюшон на DestinationCharacter",
    },
});

/** @type {Translation.Dialog} */
const dialog2 = DialogTools.replicateGroupedItemDialog(["ItemArms"], ["充气式拘束袋_Luzi"], {
    CN: {
        SelectBase: "设置充气式拘束袋",
        Select充气: "设置",
        Module充气: "充气",
        Optiono0: "无",
        Optiono1: "充满",
        Select链接罐子: "设置",
        Module链接罐子: "链接罐子",
        Optiong0: "无",
        Optiong1: "有",
        Select头套: "设置",
        Module头套: "头套",
        Optiont0: "无",
        Optiont1: "有",
        Seto0: "SourceCharacter放掉了DestinationCharacter拘束袋的气体",
        Seto1: "SourceCharacter将DestinationCharacter拘束袋充满了气体",
        Setg0: "SourceCharacter移除了DestinationCharacter呼吸器限制",
        Setg1: "SourceCharacter添加了DestinationCharacter呼吸器限制",
        Sett0: "SourceCharacter移除了DestinationCharacter头套",
        Sett1: "SourceCharacter添加了DestinationCharacter头套",
    },
    EN: {
        SelectBase: "Set Inflatable Restraint Bag",
        Select充气: "Set",
        Module充气: "Inflate",
        Optiono0: "None",
        Optiono1: "Full",
        Select链接罐子: "Set",
        Module链接罐子: "Link Canister",
        Optiong0: "None",
        Optiong1: "Yes",
        Select头套: "Set",
        Module头套: "Hood",
        Optiont0: "None",
        Optiont1: "Yes",
        Seto0: "SourceCharacter released the gas from DestinationCharacter restraint bag",
        Seto1: "SourceCharacter filled DestinationCharacter restraint bag with gas",
        Setg0: "SourceCharacter removed the breathing restriction from DestinationCharacter",
        Setg1: "SourceCharacter added a breathing restriction to DestinationCharacter",
        Sett0: "SourceCharacter removed the hood from DestinationCharacter",
        Sett1: "SourceCharacter added a hood to DestinationCharacter",
    },
    RU: {
        SelectBase: "Настройка надувного мешка для сдерживания",
        Select充气: "Настройка",
        Module充气: "Надуть",
        Optiono0: "Нет",
        Optiono1: "Полный",
        Select链接罐子: "Настройка",
        Module链接罐子: "Связать баллон",
        Optiong0: "Нет",
        Optiong1: "Да",
        Select头套: "Настройка",
        Module头套: "Надеть капюшон",
        Optiont0: "Нет",
        Optiont1: "Да",
        Seto0: "SourceCharacter выпустил газ из мешка для сдерживания DestinationCharacter",
        Seto1: "SourceCharacter наполнил мешок для сдерживания DestinationCharacter газом",
        Setg0: "SourceCharacter удалил ограничение дыхания у DestinationCharacter",
        Setg1: "SourceCharacter добавил ограничение дыхания к DestinationCharacter",
        Sett0: "SourceCharacter снял капюшон с DestinationCharacter",
        Sett1: "SourceCharacter надел капюшон на DestinationCharacter",
    },
    UA: {
        SelectBase: "Налаштування надувної сумки для обмеження",
        Select充气: "Налаштування",
        Module充气: "Надути",
        Optiono0: "Ні",
        Optiono1: "Повна",
        Select链接罐子: "Налаштування",
        Module链接罐子: "Приєднати бак",
        Optiong0: "Ні",
        Optiong1: "Так",
        Select头套: "Налаштування",
        Module头套: "Надіти капюшон",
        Optiont0: "Ні",
        Optiont1: "Так",
        Seto0: "SourceCharacter випустив газ з сумки для обмеження DestinationCharacter",
        Seto1: "SourceCharacter наповнив сумку для обмеження DestinationCharacter газом",
        Setg0: "SourceCharacter прибрав обмеження дихання у DestinationCharacter",
        Setg1: "SourceCharacter додав обмеження дихання до DestinationCharacter",
        Sett0: "SourceCharacter зняв капюшон з DestinationCharacter",
        Sett1: "SourceCharacter надів капюшон на DestinationCharacter",
    },
});

const translations = {
    CN: "充气式拘束袋",
    EN: "Inflatable Restraint Bag",
    UA: "Надувна сумка для обмеження",
    RU: "Надувной мешок для сдерживания",
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended, translations);
    AssetManager.addAsset("ItemArms", { ...asset, DynamicGroupName: "ItemDevices" }, extended, translations);
    AssetManager.addCustomDialog(dialog);
    AssetManager.addCustomDialog(dialog2);
}
