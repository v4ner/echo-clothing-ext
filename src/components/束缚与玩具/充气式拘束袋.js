import { AssetManager } from "../../assetForward";
import { VersionSupport } from "@mod-utils/VersionSupport";

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
    ParentGroup: VersionSupport.NoParentGroup,
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
const dialog = {
    CN: {
        ItemDevices充气式拘束袋_LuziSelectBase: "设置充气式拘束袋",
        ItemDevices充气式拘束袋_LuziSelect充气: "设置",
        ItemDevices充气式拘束袋_LuziModule充气: "充气",
        ItemDevices充气式拘束袋_LuziOptiono0: "无",
        ItemDevices充气式拘束袋_LuziOptiono1: "充满",
        ItemDevices充气式拘束袋_LuziSelect链接罐子: "设置",
        ItemDevices充气式拘束袋_LuziModule链接罐子: "链接罐子",
        ItemDevices充气式拘束袋_LuziOptiong0: "无",
        ItemDevices充气式拘束袋_LuziOptiong1: "有",
        ItemDevices充气式拘束袋_LuziSelect头套: "设置",
        ItemDevices充气式拘束袋_LuziModule头套: "头套",
        ItemDevices充气式拘束袋_LuziOptiont0: "无",
        ItemDevices充气式拘束袋_LuziOptiont1: "有",
        ItemDevices充气式拘束袋_LuziSeto0: "SourceCharacter放掉了DestinationCharacter拘束袋的气体",
        ItemDevices充气式拘束袋_LuziSeto1: "SourceCharacter将DestinationCharacter拘束袋充满了气体",
        ItemDevices充气式拘束袋_LuziSetg0: "SourceCharacter移除了DestinationCharacter呼吸器限制",
        ItemDevices充气式拘束袋_LuziSetg1: "SourceCharacter添加了DestinationCharacter呼吸器限制",
        ItemDevices充气式拘束袋_LuziSett0: "SourceCharacter移除了DestinationCharacter头套",
        ItemDevices充气式拘束袋_LuziSett1: "SourceCharacter添加了DestinationCharacter头套",
    },
    EN: {
        ItemDevices充气式拘束袋_LuziSelectBase: "Set Inflatable Restraint Bag",
        ItemDevices充气式拘束袋_LuziSelect充气: "Set",
        ItemDevices充气式拘束袋_LuziModule充气: "Inflate",
        ItemDevices充气式拘束袋_LuziOptiono0: "None",
        ItemDevices充气式拘束袋_LuziOptiono1: "Full",
        ItemDevices充气式拘束袋_LuziSelect链接罐子: "Set",
        ItemDevices充气式拘束袋_LuziModule链接罐子: "Link Canister",
        ItemDevices充气式拘束袋_LuziOptiong0: "None",
        ItemDevices充气式拘束袋_LuziOptiong1: "Yes",
        ItemDevices充气式拘束袋_LuziSelect头套: "Set",
        ItemDevices充气式拘束袋_LuziModule头套: "Hood",
        ItemDevices充气式拘束袋_LuziOptiont0: "None",
        ItemDevices充气式拘束袋_LuziOptiont1: "Yes",
        ItemDevices充气式拘束袋_LuziSeto0: "SourceCharacter released the gas from DestinationCharacter restraint bag",
        ItemDevices充气式拘束袋_LuziSeto1: "SourceCharacter filled DestinationCharacter restraint bag with gas",
        ItemDevices充气式拘束袋_LuziSetg0: "SourceCharacter removed the breathing restriction from TargetCharacter",
        ItemDevices充气式拘束袋_LuziSetg1: "SourceCharacter added a breathing restriction to TargetCharacter",
        ItemDevices充气式拘束袋_LuziSett0: "SourceCharacter removed the hood from TargetCharacter",
        ItemDevices充气式拘束袋_LuziSett1: "SourceCharacter added a hood to DestinationCharacter",
    },
    RU: {
        ItemDevices充气式拘束袋_LuziSelectBase: "Настройка надувного мешка для сдерживания",
        ItemDevices充气式拘束袋_LuziSelect充气: "Настройка",
        ItemDevices充气式拘束袋_LuziModule充气: "Надуть",
        ItemDevices充气式拘束袋_LuziOptiono0: "Нет",
        ItemDevices充气式拘束袋_LuziOptiono1: "Полный",
        ItemDevices充气式拘束袋_LuziSelect链接罐子: "Настройка",
        ItemDevices充气式拘束袋_LuziModule链接罐子: "Связать баллон",
        ItemDevices充气式拘束袋_LuziOptiong0: "Нет",
        ItemDevices充气式拘束袋_LuziOptiong1: "Да",
        ItemDevices充气式拘束袋_LuziSelect头套: "Настройка",
        ItemDevices充气式拘束袋_LuziModule头套: "Надеть капюшон",
        ItemDevices充气式拘束袋_LuziOptiont0: "Нет",
        ItemDevices充气式拘束袋_LuziOptiont1: "Да",
        ItemDevices充气式拘束袋_LuziSeto0: "SourceCharacter выпустил газ из мешка для сдерживания DestinationCharacter",
        ItemDevices充气式拘束袋_LuziSeto1: "SourceCharacter наполнил мешок для сдерживания DestinationCharacter газом",
        ItemDevices充气式拘束袋_LuziSetg0: "SourceCharacter удалил ограничение дыхания у DestinationCharacter",
        ItemDevices充气式拘束袋_LuziSetg1: "SourceCharacter добавил ограничение дыхания к DestinationCharacter",
        ItemDevices充气式拘束袋_LuziSett0: "SourceCharacter снял капюшон с DestinationCharacter",
        ItemDevices充气式拘束袋_LuziSett1: "SourceCharacter надел капюшон на DestinationCharacter",
    },
    UA: {
        ItemDevices充气式拘束袋_LuziSelectBase: "Налаштування надувної сумки для обмеження",
        ItemDevices充气式拘束袋_LuziSelect充气: "Налаштування",
        ItemDevices充气式拘束袋_LuziModule充气: "Надути",
        ItemDevices充气式拘束袋_LuziOptiono0: "Ні",
        ItemDevices充气式拘束袋_LuziOptiono1: "Повна",
        ItemDevices充气式拘束袋_LuziSelect链接罐子: "Налаштування",
        ItemDevices充气式拘束袋_LuziModule链接罐子: "Приєднати бак",
        ItemDevices充气式拘束袋_LuziOptiong0: "Ні",
        ItemDevices充气式拘束袋_LuziOptiong1: "Так",
        ItemDevices充气式拘束袋_LuziSelect头套: "Налаштування",
        ItemDevices充气式拘束袋_LuziModule头套: "Надіти капюшон",
        ItemDevices充气式拘束袋_LuziOptiont0: "Ні",
        ItemDevices充气式拘束袋_LuziOptiont1: "Так",
        ItemDevices充气式拘束袋_LuziSeto0: "SourceCharacter випустив газ з сумки для обмеження DestinationCharacter",
        ItemDevices充气式拘束袋_LuziSeto1: "SourceCharacter наповнив сумку для обмеження DestinationCharacter газом",
        ItemDevices充气式拘束袋_LuziSetg0: "SourceCharacter прибрав обмеження дихання у DestinationCharacter",
        ItemDevices充气式拘束袋_LuziSetg1: "SourceCharacter додав обмеження дихання до DestinationCharacter",
        ItemDevices充气式拘束袋_LuziSett0: "SourceCharacter зняв капюшон з DestinationCharacter",
        ItemDevices充气式拘束袋_LuziSett1: "SourceCharacter надів капюшон на DestinationCharacter",
    },
};

/** @type {Translation.Dialog} */
const dialog2 = {
    CN: {
        ItemArms充气式拘束袋_LuziSelectBase: "设置充气式拘束袋",
        ItemArms充气式拘束袋_LuziSelect充气: "设置",
        ItemArms充气式拘束袋_LuziModule充气: "充气",
        ItemArms充气式拘束袋_LuziOptiono0: "无",
        ItemArms充气式拘束袋_LuziOptiono1: "充满",
        ItemArms充气式拘束袋_LuziSelect链接罐子: "设置",
        ItemArms充气式拘束袋_LuziModule链接罐子: "链接罐子",
        ItemArms充气式拘束袋_LuziOptiong0: "无",
        ItemArms充气式拘束袋_LuziOptiong1: "有",
        ItemArms充气式拘束袋_LuziSelect头套: "设置",
        ItemArms充气式拘束袋_LuziModule头套: "头套",
        ItemArms充气式拘束袋_LuziOptiont0: "无",
        ItemArms充气式拘束袋_LuziOptiont1: "有",
        ItemArms充气式拘束袋_LuziSeto0: "SourceCharacter放掉了DestinationCharacter拘束袋的气体",
        ItemArms充气式拘束袋_LuziSeto1: "SourceCharacter将DestinationCharacter拘束袋充满了气体",
        ItemArms充气式拘束袋_LuziSetg0: "SourceCharacter移除了DestinationCharacter呼吸器限制",
        ItemArms充气式拘束袋_LuziSetg1: "SourceCharacter添加了DestinationCharacter呼吸器限制",
        ItemArms充气式拘束袋_LuziSett0: "SourceCharacter移除了DestinationCharacter头套",
        ItemArms充气式拘束袋_LuziSett1: "SourceCharacter添加了DestinationCharacter头套",
    },
    EN: {
        ItemArms充气式拘束袋_LuziSelectBase: "Set Inflatable Restraint Bag",
        ItemArms充气式拘束袋_LuziSelect充气: "Set",
        ItemArms充气式拘束袋_LuziModule充气: "Inflate",
        ItemArms充气式拘束袋_LuziOptiono0: "None",
        ItemArms充气式拘束袋_LuziOptiono1: "Full",
        ItemArms充气式拘束袋_LuziSelect链接罐子: "Set",
        ItemArms充气式拘束袋_LuziModule链接罐子: "Link Canister",
        ItemArms充气式拘束袋_LuziOptiong0: "None",
        ItemArms充气式拘束袋_LuziOptiong1: "Yes",
        ItemArms充气式拘束袋_LuziSelect头套: "Set",
        ItemArms充气式拘束袋_LuziModule头套: "Hood",
        ItemArms充气式拘束袋_LuziOptiont0: "None",
        ItemArms充气式拘束袋_LuziOptiont1: "Yes",
        ItemArms充气式拘束袋_LuziSeto0: "SourceCharacter released the gas from DestinationCharacter restraint bag",
        ItemArms充气式拘束袋_LuziSeto1: "SourceCharacter filled DestinationCharacter restraint bag with gas",
        ItemArms充气式拘束袋_LuziSetg0: "SourceCharacter removed the breathing restriction from DestinationCharacter",
        ItemArms充气式拘束袋_LuziSetg1: "SourceCharacter added a breathing restriction to DestinationCharacter",
        ItemArms充气式拘束袋_LuziSett0: "SourceCharacter removed the hood from DestinationCharacter",
        ItemArms充气式拘束袋_LuziSett1: "SourceCharacter added a hood to DestinationCharacter",
    },
    RU: {
        ItemArms充气式拘束袋_LuziSelectBase: "Настройка надувного мешка для сдерживания",
        ItemArms充气式拘束袋_LuziSelect充气: "Настройка",
        ItemArms充气式拘束袋_LuziModule充气: "Надуть",
        ItemArms充气式拘束袋_LuziOptiono0: "Нет",
        ItemArms充气式拘束袋_LuziOptiono1: "Полный",
        ItemArms充气式拘束袋_LuziSelect链接罐子: "Настройка",
        ItemArms充气式拘束袋_LuziModule链接罐子: "Связать баллон",
        ItemArms充气式拘束袋_LuziOptiong0: "Нет",
        ItemArms充气式拘束袋_LuziOptiong1: "Да",
        ItemArms充气式拘束袋_LuziSelect头套: "Настройка",
        ItemArms充气式拘束袋_LuziModule头套: "Надеть капюшон",
        ItemArms充气式拘束袋_LuziOptiont0: "Нет",
        ItemArms充气式拘束袋_LuziOptiont1: "Да",
        ItemArms充气式拘束袋_LuziSeto0: "SourceCharacter выпустил газ из мешка для сдерживания DestinationCharacter",
        ItemArms充气式拘束袋_LuziSeto1: "SourceCharacter наполнил мешок для сдерживания DestinationCharacter газом",
        ItemArms充气式拘束袋_LuziSetg0: "SourceCharacter удалил ограничение дыхания у DestinationCharacter",
        ItemArms充气式拘束袋_LuziSetg1: "SourceCharacter добавил ограничение дыхания к DestinationCharacter",
        ItemArms充气式拘束袋_LuziSett0: "SourceCharacter снял капюшон с DestinationCharacter",
        ItemArms充气式拘束袋_LuziSett1: "SourceCharacter надел капюшон на DestinationCharacter",
    },
    UA: {
        ItemArms充气式拘束袋_LuziSelectBase: "Налаштування надувної сумки для обмеження",
        ItemArms充气式拘束袋_LuziSelect充气: "Налаштування",
        ItemArms充气式拘束袋_LuziModule充气: "Надути",
        ItemArms充气式拘束袋_LuziOptiono0: "Ні",
        ItemArms充气式拘束袋_LuziOptiono1: "Повна",
        ItemArms充气式拘束袋_LuziSelect链接罐子: "Налаштування",
        ItemArms充气式拘束袋_LuziModule链接罐子: "Приєднати бак",
        ItemArms充气式拘束袋_LuziOptiong0: "Ні",
        ItemArms充气式拘束袋_LuziOptiong1: "Так",
        ItemArms充气式拘束袋_LuziSelect头套: "Налаштування",
        ItemArms充气式拘束袋_LuziModule头套: "Надіти капюшон",
        ItemArms充气式拘束袋_LuziOptiont0: "Ні",
        ItemArms充气式拘束袋_LuziOptiont1: "Так",
        ItemArms充气式拘束袋_LuziSeto0: "SourceCharacter випустив газ з сумки для обмеження DestinationCharacter",
        ItemArms充气式拘束袋_LuziSeto1: "SourceCharacter наповнив сумку для обмеження DestinationCharacter газом",
        ItemArms充气式拘束袋_LuziSetg0: "SourceCharacter прибрав обмеження дихання у DestinationCharacter",
        ItemArms充气式拘束袋_LuziSetg1: "SourceCharacter додав обмеження дихання до DestinationCharacter",
        ItemArms充气式拘束袋_LuziSett0: "SourceCharacter зняв капюшон з DestinationCharacter",
        ItemArms充气式拘束袋_LuziSett1: "SourceCharacter надів капюшон на DestinationCharacter",
    },
};

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
