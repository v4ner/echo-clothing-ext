import { AssetManager } from "../../assetForward";
import { DialogTools } from "@mod-utils/Tools";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "玻璃罐子_Luzi",
    Random: false,
    /** @type {AssetGender} */
    Gender: "F",
    Top: -110,
    Left: 0,
    AllowLock: true,
    Difficulty: 50,
    Hide: ["Mouth", "Glasses", "TailStraps"],
    AllowActivePose: ["BackBoxTie", "BackCuffs", "BackElbowTouch", "LegsClosed"],
    Extended: true,
    LayerVisibility: true,
    DefaultColor: [
        "#151515",
        "#151515",
        "#FFFFFF",
        "#FFFFFF",
        "#2A2A2A",
        "#404040",
        "#2A2A2A",
        "#404040",
        "#EE168E",
        "#EE168E",
        "#9E2184",
        "#6D0B4A",
        "#4A4242",
        "#FF3CC3",
        "#E17070",
    ],
    Layer: [
        { Name: "舌头", AllowColorize: false, Priority: 7 },
        { Name: "身体衔接", Priority: 30 },
        { Name: "管道衔接", Priority: 40, AllowTypes: { gz: 1 } },
        { Name: "管道", Priority: 38, AllowTypes: { gz: 1 } },
        { Name: "管道2", Priority: 5, AllowTypes: { gz: 1 } },
        { Name: "上1", Priority: 56 },
        { Name: "上2", Priority: 4 },
        { Name: "下1", Priority: 56 },
        { Name: "下2", Priority: 4 },
        { Name: "面板", Priority: 56 },
        { Name: "液体", Priority: 39, AllowTypes: { yt: 1 } },
        { Name: "液体2", Priority: 6, AllowTypes: { yt: 1 } },
        { Name: "玻璃罐液体前", Priority: 56, AllowTypes: { yt: 1 } },
        { Name: "玻璃罐液体后", Priority: 4, AllowTypes: { yt: 1 } },
        { Name: "玻璃外层", Priority: 57, AllowTypes: { c: 0 } },
        { Name: "发光", Priority: 31 },
        { Name: "玻璃关闭", Priority: 57, AllowTypes: { c: 1 }, Visibility: "Others" },
        { Name: "手臂拘束", Priority: 35, AllowTypes: { s: 1 } },
        { Name: "腿部拘束", Priority: 35, AllowTypes: { t: 1 } },
        { Name: "吊顶链", Priority: 5, AllowTypes: { s: 1 } },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    Modules: [
        {
            Name: "窗户",
            Key: "c",
            DrawImages: false,
            Options: [{}, { Property: { Difficulty: 52, Effect: [E.BlindHeavy, E.GagLight, E.Freeze, E.Enclose] } }],
        },
        {
            Name: "腿部拘束",
            Key: "t",
            DrawImages: false,
            Options: [{}, { Property: { Difficulty: 22, SetPose: ["LegsClosed"], Effect: [E.Freeze, E.Mounted] } }],
        },
        {
            Name: "手臂拘束",
            Key: "s",
            DrawImages: false,
            Options: [
                {},
                {
                    Property: {
                        Difficulty: 18,
                        SetPose: ["BackElbowTouch"],
                        Effect: ["Freeze", "Block", "Mounted"],
                        OverrideHeight: { Height: 0, Priority: 60 },
                    },
                },
            ],
        },
        {
            Name: "管道",
            Key: "gz",
            DrawImages: false,
            Options: [{}, {}],
        },
        {
            Name: "液体",
            Key: "yt",
            DrawImages: false,
            Options: [{}, { Effect: [E.GagLight] }],
        },
        {
            Name: "快感模块",
            Key: "k",
            DrawImages: false,
            Options: [
                { Property: { Intensity: -1, Effect: ["Egged"] } },
                { Property: { Intensity: 0, Effect: ["Egged", "Vibrating"] } },
                { Property: { Intensity: 1, Effect: ["Egged", "Vibrating"] } },
                { Property: { Intensity: 2, Effect: ["Egged", "Vibrating"] } },
                { Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] } },
            ],
        },
        {
            Name: "电击模块",
            Key: "d",
            DrawImages: false,
            Options: [
                { Property: { ShockLevel: 0 } },
                { Property: { ShockLevel: 0 } },
                { Property: { ShockLevel: 1 } },
                { Property: { ShockLevel: 2 } },
            ],
        },
        {
            Name: "高潮锁",
            Key: "g",
            DrawImages: false,
            Options: [
                {},
                { Property: { Effect: ["DenialMode"] } },
                { Property: { Effect: ["DenialMode", "RuinOrgasms"] } },
            ],
        },
    ],
    ChangeWhenLocked: false,
};

/** @type {Translation.Dialog} */
const dialog = DialogTools.replicateGroupedItemDialog(["ItemDevices"], ["玻璃罐子_Luzi"], {
    CN: {
        Setc0: "SourceCharacter打开了DestinationCharacter罐子",
        Setc1: "SourceCharacter封上了DestinationCharacter罐子",
        Sett0: "SourceCharacter移除了DestinationCharacter双腿的拘束",
        Sett1: "SourceCharacter将DestinationCharacter双腿束缚在一起",
        Sets0: "SourceCharacter移除了DestinationCharacter手腕和手肘的拘束",
        Sets1: "SourceCharacter将DestinationCharacter手腕和手肘束缚到她的身后",
        Setgz0: "SourceCharacter移除了连接DestinationCharacter身体的管子",
        Setgz1: "SourceCharacter将管子连接进了DestinationCharacter身体",
        Setyt0: "SourceCharacter排空了DestinationCharacter身体和罐子里的液体",
        Setyt1: "DestinationCharacter身体和罐子充满了液体",
        Setk0: "插在TargetCharacter体内的振动装置停止振动",
        Setk1: "插在TargetCharacter体内的振动装置轻微逗弄起来",
        Setk2: "插在TargetCharacter体内的振动装置带温和嗡鸣着",
        Setk3: "插在TargetCharacter体内的振动装置猛烈地颤动",
        Setk4: "插在TargetCharacter体内的振动装置以最大速度振动着",
        Setd0: "SourceCharacter关闭了插在TargetCharacter体内的振动装置关闭了",
        Setd1: "SourceCharacter将插在TargetCharacter体内的电击装置设置为等级1",
        Setd2: "SourceCharacter将插在TargetCharacter体内的电击装置设置为等级2",
        Setd3: "SourceCharacter将插在TargetCharacter体内的电击装置设置为等级3",
        Setg0: "SourceCharacter关闭了插在TargetCharacter体内的振动装置设置为允许高潮",
        Setg1: "SourceCharacter将插在TargetCharacter体内的振动装置设置为寸止模式",
        Setg2: "SourceCharacter将插在TargetCharacter体内的振动装置设置为拒绝模式",

        SelectBase: "选择罐子配置",
        Select窗户: "设置窗户",
        Module窗户: "窗户",
        Optionc0: "无",
        Optionc1: "密封",
        Select腿部拘束: "设置腿部拘束",
        Module腿部拘束: "腿部拘束",
        Optiont0: "无",
        Optiont1: "腿拘束",
        Select手臂拘束: "设置手臂拘束",
        Module手臂拘束: "手臂拘束",
        Options0: "无",
        Options1: "手臂拘束",
        Select管道: "设置管道",
        Module管道: "管道",
        Optiongz0: "无",
        Optiongz1: "连接身体",
        Select液体: "设置液体",
        Module液体: "液体",
        Optionyt0: "无",
        Optionyt1: "注入液体",
        Select快感模块: "设置快感模块",
        Module快感模块: "快感模块",
        Optionk0: "关闭",
        Optionk1: "低",
        Optionk2: "一般",
        Optionk3: "高",
        Optionk4: "最多",
        Select电击模块: "设置电击模块",
        Module电击模块: "电击模块",
        Optiond0: "关闭",
        Optiond1: "低",
        Optiond2: "一般",
        Optiond3: "高",
        Select高潮锁: "设置高潮锁",
        Module高潮锁: "高潮锁",
        Optiong0: "允许",
        Optiong1: "寸止",
        Optiong2: "拒绝",
    },
    EN: {
        Setc0: "SourceCharacter opens DestinationCharacter jar.",
        Setc1: "SourceCharacter seals DestinationCharacter jar.",
        Sett0: "SourceCharacter removes the restraints from DestinationCharacter legs.",
        Sett1: "SourceCharacter binds DestinationCharacter legs together.",
        Sets0:
            "SourceCharacter removes the restraints from DestinationCharacter wrists and elbows.",
        Sets1: "SourceCharacter binds DestinationCharacter wrists and elbows behind her back.",
        Setgz0: "SourceCharacter removes the tube connected to DestinationCharacter body.",
        Setgz1: "SourceCharacter connects the tube into DestinationCharacter body.",
        Setyt0: "SourceCharacter drains the liquid from DestinationCharacter body and the jar.",
        Setyt1: "DestinationCharacter body and the jar are filled with liquid.",
        Setk0: "The vibrating device inside TargetCharacter stops vibrating.",
        Setk1: "The vibrating device inside TargetCharacter teases gently.",
        Setk2: "The vibrating device inside TargetCharacter hums softly.",
        Setk3: "The vibrating device inside TargetCharacter vibrates fiercely.",
        Setk4: "The vibrating device inside TargetCharacter vibrates at maximum speed.",
        Setd0: "SourceCharacter turns off the vibrating device inside TargetCharacter.",
        Setd1:
            "SourceCharacter sets the electric shock device inside TargetCharacter to level 1.",
        Setd2:
            "SourceCharacter sets the electric shock device inside TargetCharacter to level 2.",
        Setd3:
            "SourceCharacter sets the electric shock device inside TargetCharacter to level 3.",
        Setg0:
            "SourceCharacter turns off the orgasm allowance setting of the vibrating device inside TargetCharacter.",
        Setg1:
            "SourceCharacter sets the vibrating device inside TargetCharacter to edge play mode.",
        Setg2:
            "SourceCharacter sets the vibrating device inside TargetCharacter to denial mode.",

        SelectBase: "Select Container Configuration",
        Select窗户: "Set Window",
        Module窗户: "Window",
        Optionc0: "None",
        Optionc1: "Sealed",
        Select腿部拘束: "Set Leg Restraint",
        Module腿部拘束: "Leg Restraint",
        Optiont0: "None",
        Optiont1: "Leg Restraint",
        Select手臂拘束: "Set Arm Restraint",
        Module手臂拘束: "Arm Restraint",
        Options0: "None",
        Options1: "Arm Restraint",
        Select管道: "Set Tube",
        Module管道: "Tube",
        Optiongz0: "None",
        Optiongz1: "Connect to Body",
        Select液体: "Set Liquid",
        Module液体: "Liquid",
        Optionyt0: "None",
        Optionyt1: "Inject Liquid",
        Select快感模块: "Set Pleasure Module",
        Module快感模块: "Pleasure Module",
        Optionk0: "Off",
        Optionk1: "Low",
        Optionk2: "Moderate",
        Optionk3: "High",
        Select声音模块: "Set Sound Module",
        Module声音模块: "Sound Module",
        Optionsd0: "Silent",
        Optionsd1: "Ambient Sounds",
        Optionsd2: "Music",
        Select温度模块: "Set Temperature Module",
        Module温度模块: "Temperature Module",
        Optiontm0: "Room Temperature",
        Optiontm1: "Warm",
        Optiontm2: "Hot",
        Optiontm3: "Cold",
        Select电击模块: "Set Electro Module",
        Module电击模块: "Electro Module",
        Optiond0: "Off",
        Optiond1: "Low",
        Optiond2: "Medium",
        Optiond3: "High",
        Select高潮锁: "Set Orgasm Lock",
        Module高潮锁: "Orgasm Lock",
        Optiong0: "Allow",
        Optiong1: "Edge",
        Optiong2: "Deny",
    },
    UA: {
        Setc0: "SourceCharacter відриває DestinationCharacter контейнер",
        Setc1: "SourceCharacter закриває DestinationCharacter контейнер",
        Sett0: "SourceCharacter знімає обмежувачі з DestinationCharacter ніг",
        Sett1: "SourceCharacter зв'язує DestinationCharacter ноги",
        Sets0: "SourceCharacter знімає обмежувачі з DestinationCharacter рук і ліктів",
        Sets1: "SourceCharacter зв'язує DestinationCharacter руки за їхніми спинами",
        Setgz0: "SourceCharacter забирає трубки під'єднані до DestinationCharacter тіла",
        Setgz1: "SourceCharacter під'єднює трубки до DestinationCharacter тіла",
        Setyt0: "SourceCharacter спустошує рідину з DestinationCharacter контейнера",
        Setyt1: "DestinationCharacter тіло та контейнер наповнені рідинною",
        Setk0: "Вібратор в середині TargetCharacter виключився.",
        Setk1: "Вібратор в середині TargetCharacter починає ніжно дражнити.",
        Setk2: "Вібратор в середині TargetCharacter ніжно вібрує.",
        Setk3: "Вібратор в середині TargetCharacter потужно вібрує.",
        Setk4: "Вібратор в середині TargetCharacter вібрує на максимальній швидкості.",
        Setd0: "SourceCharacter виключає TargetCharacter вібратори.",
        Setd1:
            "SourceCharacter налаштовує елеткрошок в середині TargetCharacter до першого рівна.",
        Setd2:
            "SourceCharacter налаштовує елеткрошок в середині TargetCharacter до другого рівня.",
        Setd3:
            "SourceCharacter налаштовує елеткрошок в середині TargetCharacter до третього рівня.",
        Setg0:
            "SourceCharacter відключає налаштування дозволення оргазму на вібраторі в середині TargetCharacter.",
        Setg1: "SourceCharacter налаштовує вібратор в середині TargetCharacter на окантовку.",
        Setg2: "SourceCharacter налаштовує вібратор в середині TargetCharacter на відмову.",

        SelectBase: "Виберіть конфігурацію контейнера",
        Select窗户: "Вікно",
        Module窗户: "Вікно",
        Optionc0: "Відкрите",
        Optionc1: "Закрите",
        Select腿部拘束: "Зв'язування ніг",
        Module腿部拘束: "Зв'язування ніг",
        Optiont0: "Вільні",
        Optiont1: "Зв'язати",
        Select手臂拘束: "Зв'язування рук",
        Module手臂拘束: "Зв'язування рук",
        Options0: "Вільні",
        Options1: "Зв'язати",
        Select管道: "Трубки",
        Module管道: "Трубки",
        Optiongz0: "Жодних",
        Optiongz1: "Під'єднати до тіла",
        Select液体: "Рідина",
        Module液体: "Рідина",
        Optionyt0: "Спустошено",
        Optionyt1: "Наповнити рідиною",
        Select快感模块: "Модуль Вібраторів",
        Module快感模块: "Модуль Вібраторів",
        Optionk0: "Вимкнути",
        Optionk1: "Низька потужність",
        Optionk2: "Середня потужність",
        Optionk3: "Висока потужність",
        Select声音模块: "Звуковий модуль",
        Module声音模块: "Звуковий модуль",
        Optionsd0: "Звукова ізоляція",
        Optionsd1: "Навколишній звук",
        Optionsd2: "Музика",
        Select温度模块: "Термо модуль",
        Module温度模块: "Термо модуль",
        Optiontm0: "Кімнатна температура",
        Optiontm1: "Тепла температура",
        Optiontm2: "Гаряча температура",
        Optiontm3: "Холодна температура",
        Select电击模块: "Модуль електрошоку",
        Module电击模块: "Модуль електрошоку",
        Optiond0: "Вимкнути",
        Optiond1: "Низька потужність",
        Optiond2: "Середна потужність",
        Optiond3: "Висока потужність",
        Select高潮锁: "Модуль оргазму",
        Module高潮锁: "Модуль оргазму",
        Optiong0: "Дозволити",
        Optiong1: "Окантовка",
        Optiong2: "Відмова",
    },
});

const translations = {
    CN: "玻璃罐子",
    EN: "Glass Jar",
    RU: "Стеклянная банка",
    UA: "Скляний контейнер",
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
