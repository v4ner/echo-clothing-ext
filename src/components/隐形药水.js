import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "隐形药水_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 8,
    AllowLock: true,
    AllowTighten: true,
    DrawLocks: false,
    RemoveTime: 5,
    Time: 10,
    Effect: [E.Slow, E.Block],
    DynamicBeforeDraw: true,
    Hide: [
        "ItemHandheld",
        "Bracelet",
        "HandsLeft",
        "HandsRight",
        "SocksRight",
        "SocksLeft",
        "BodyLower",
        "BodyUpper",
        "AnkletLeft",
        "AnkletRight",
        "ArmsLeft",
        "ArmsRight",
        "Gloves",
        "Bracelet",
        "HandAccessoryLeft",
        "HandAccessoryRight",
    ],
    HideItem: [
        "ItemArmsCeilingShackles",
        "ItemArmsBolero",
        "ItemArmsYoke",
        "ItemArmsLatexButterflyLeotard",
        "ItemArmsLatexSleevelessLeotard",
        "ItemArmsPillory",
        "ItemArmsHeavyYoke",
    ],
    Block: ["ItemFeet", "ItemBoots"],
    AllowActivePose: ["BackBoxTie", "OverTheHead", "Yoked", "BackElbowTouch", "Hogtied", "AllFours"],
    SetPose: ["BackBoxTie"],
    Extended: true,
    Layer: [
        {
            Name: "下半身",
            Priority: 9,
            Top: 460,
            Left: 0,
            ParentGroup: "BodyLower",
            InheritColor: "BodyLower",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "上半身",
            Priority: 9,
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            InheritColor: "BodyUpper",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
            PoseMapping: {
                TapedHands: "BaseUpper",
                BackCuffs: "BackCuffs",
                BackElbowTouch: "BackElbowTouch",
                OverTheHead: "OverTheHead",
                Yoked: "Yoked",
                Hogtied: "Hogtied",
                AllFours: "AllFours",
            },
        },

        {
            Name: "脚链",
            Priority: 31,
            AllowTypes: { ll: [0, 1, 2, 3, 4, 5] },
            Top: 460,
            Left: 0,
            CopyLayerColor: "手链",
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
            Alpha: [
                {
                    Group: [
                        "SuitLower",
                        "Garters",
                        "Bra",
                        "Socks",
                        "SocksRight",
                        "SocksLeft",
                        "AnkletRight",
                        "AnkletLeft",
                        "ItemFeet",
                        "ItemLegs",
                        "ItemTorso",
                        "ItemTorso2",
                        "ItemBoots",
                        "Liquid2_Luzi",
                        "身体痕迹_Luzi",
                        "BodyMarkings2_Luzi",
                        "Bra_笨笨蛋Luzi",
                        "Shoes",
                        "Shoes_笨笨蛋Luzi",
                        "ClothAccessory",
                        "ClothAccessory_笨笨蛋Luzi",
                    ],
                    Masks: [[100, 570, 300, 430]],
                    Pose: ["BaseLower", "LegsClosed", "Kneel", "Spread", "LegsOpen"],
                },
                {
                    Group: [
                        "SuitLower",
                        "Garters",
                        "Bra",
                        "Socks",
                        "SocksRight",
                        "SocksLeft",
                        "AnkletRight",
                        "AnkletLeft",
                        "ItemFeet",
                        "ItemLegs",
                        "ItemTorso",
                        "ItemTorso2",
                        "ItemBoots",
                        "Liquid2_Luzi",
                        "身体痕迹_Luzi",
                        "BodyMarkings2_Luzi",
                        "Bra_笨笨蛋Luzi",
                        "Shoes_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [100, 500, 62, 100],
                        [337, 500, 62, 100],
                        [100, 550, 300, 450],
                    ],
                    Pose: ["KneelingSpread"],
                },
            ],
        },
        {
            Name: "手链",
            Priority: 31,
            AllowTypes: { l: [0, 1, 2, 3] },
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            PoseMapping: {
                BackBoxTie: "BackBoxTie",
                BackCuffs: "BackCuffs",
                BackElbowTouch: "Hide",
                OverTheHead: "OverTheHead",
                Yoked: "Yoked",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
            Alpha: [
                {
                    Group: [
                        "Suit",
                        "Bra",
                        "Bra_笨笨蛋Luzi",
                        "Gloves",
                        "HandsLeft",
                        "HandsRight",
                        "Bracelet",
                        "ItemTorso",
                        "ItemTorso2",
                        "ItemArms",
                        "Gloves_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [0, 0, 500, 200],
                        [100, 100, 48, 110],
                        [354, 100, 48, 110],
                    ],
                    Pose: ["OverTheHead"],
                },
                {
                    Group: [
                        "Suit",
                        "Bra",
                        "Bra_笨笨蛋Luzi",
                        "Gloves",
                        "HandsLeft",
                        "HandsRight",
                        "Bracelet",
                        "ItemTorso",
                        "ItemTorso2",
                        "ItemArms",
                        "Gloves_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [0, 100, 141, 300],
                        [367, 100, 141, 300],
                    ],
                    Pose: ["Yoked"],
                },
            ],
        },

        {
            Name: "手链遮罩小号",
            HasImage: false,
            AllowTypes: { a: [0] },
            CopyLayerColor: "手链",
            Alpha: [
                {
                    Group: [
                        "Suit",
                        "Bra",
                        "Bra_笨笨蛋Luzi",
                        "Gloves",
                        "HandsLeft",
                        "HandsRight",
                        "Bracelet",
                        "ItemTorso",
                        "ItemTorso2",
                        "ItemArms",
                        "Gloves_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [100, 318, 91, 97], // 左
                        [190, 326, 1, 89],
                        [191, 329, 1, 86],
                        [192, 346, 1, 79],
                        [193, 348, 1, 75],
                        [194, 355, 1, 66],
                        [195, 360, 1, 52],
                        [196, 363, 1, 50],
                        [197, 369, 1, 42],
                        [198, 372, 1, 37],
                        [199, 376, 1, 29],
                        [200, 381, 1, 19],

                        [310, 318, 91, 97], // 右
                        [309, 326, 1, 89],
                        [308, 329, 1, 86],
                        [307, 346, 1, 69],
                        [306, 350, 1, 65],
                        [305, 355, 1, 60],
                        [304, 360, 1, 55],
                        [303, 363, 1, 49],
                        [302, 369, 1, 41],
                        [301, 372, 1, 36],
                        [300, 376, 1, 26],
                        [299, 381, 1, 19],
                    ],
                    Pose: ["BackBoxTie"],
                },
            ],
        },
        {
            Name: "手链遮罩中号",
            HasImage: false,
            AllowTypes: { a: [1] },
            CopyLayerColor: "手链",
            Alpha: [
                {
                    Group: [
                        "Suit",
                        "Bra",
                        "Bra_笨笨蛋Luzi",
                        "Gloves",
                        "HandsLeft",
                        "HandsRight",
                        "Bracelet",
                        "ItemTorso",
                        "ItemTorso2",
                        "ItemArms",
                        "Gloves_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [100, 318, 85, 102], // 左
                        [185, 329, 1, 91],
                        [186, 335, 1, 85],
                        [187, 337, 1, 83],
                        [188, 339, 1, 81],
                        [189, 341, 1, 79],
                        [190, 343, 1, 77],
                        [191, 345, 1, 75],
                        [192, 352, 1, 68],
                        [193, 359, 1, 61],
                        [194, 364, 1, 55],
                        [195, 370, 1, 48],
                        [196, 375, 1, 41],
                        [197, 379, 1, 35],
                        [198, 384, 1, 28],
                        [199, 393, 1, 15],

                        [317, 318, 85, 102], // 右
                        [316, 328, 1, 92],
                        [315, 332, 1, 88],
                        [314, 335, 1, 85],
                        [313, 337, 1, 83],
                        [312, 339, 1, 81],
                        [311, 341, 1, 79],
                        [310, 343, 1, 77],
                        [309, 345, 1, 75],
                        [308, 352, 1, 68],
                        [307, 359, 1, 61],
                        [306, 364, 1, 55],
                        [305, 370, 1, 47],
                        [304, 375, 1, 40],
                        [303, 379, 1, 34],
                        [302, 384, 1, 26],
                        [301, 389, 1, 18],
                        [300, 394, 1, 12],
                    ],
                    Pose: ["BackBoxTie"],
                },
            ],
        },
        {
            Name: "手链遮罩大号",
            HasImage: false,
            AllowTypes: { a: [2] },
            CopyLayerColor: "手链",
            Alpha: [
                {
                    Group: [
                        "Suit",
                        "Bra",
                        "Bra_笨笨蛋Luzi",
                        "Gloves",
                        "HandsLeft",
                        "HandsRight",
                        "Bracelet",
                        "ItemTorso",
                        "ItemTorso2",
                        "ItemArms",
                        "Gloves_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [100, 319, 80, 101], // 左
                        [179, 334, 1, 86],
                        [180, 338, 1, 82],
                        [181, 340, 1, 80],
                        [182, 343, 1, 77],
                        [183, 345, 1, 75],
                        [184, 347, 1, 73],
                        [185, 349, 1, 71],
                        [186, 350, 1, 70],
                        [187, 351, 1, 69],
                        [188, 352, 1, 68],
                        [189, 353, 1, 67],
                        [190, 359, 1, 61],
                        [191, 365, 1, 55],
                        [192, 369, 1, 48],
                        [193, 376, 1, 40],
                        [194, 380, 1, 34],
                        [195, 386, 1, 25],
                        [196, 391, 1, 18],

                        [322, 319, 78, 101], // 右
                        [321, 334, 1, 86],
                        [320, 338, 1, 82],
                        [319, 340, 1, 80],
                        [318, 342, 1, 78],
                        [317, 344, 1, 76],
                        [316, 346, 1, 74],
                        [315, 348, 1, 72],
                        [314, 350, 1, 70],
                        [313, 351, 1, 69],
                        [312, 353, 1, 67],
                        [311, 354, 1, 66],
                        [310, 359, 1, 61],
                        [309, 367, 1, 53],
                        [308, 369, 1, 48],
                        [307, 376, 1, 40],
                        [306, 381, 1, 31],
                        [305, 386, 1, 24],
                        [304, 389, 1, 18],
                        [303, 393, 1, 12],
                    ],
                    Pose: ["BackBoxTie"],
                },
            ],
        },
        {
            Name: "手链遮罩超大号",
            HasImage: false,
            Priority: 31,
            AllowTypes: { a: [3] },
            CopyLayerColor: "手链",
            Alpha: [
                {
                    Group: [
                        "Suit",
                        "Bra",
                        "Bra_笨笨蛋Luzi",
                        "Gloves",
                        "HandsLeft",
                        "HandsRight",
                        "Bracelet",
                        "ItemTorso",
                        "ItemTorso2",
                        "ItemArms",
                        "Gloves_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [100, 316, 74, 111], // 左
                        [173, 333, 1, 94],
                        [174, 339, 1, 88],
                        [175, 342, 1, 85],
                        [176, 346, 1, 81],
                        [177, 349, 1, 78],
                        [178, 351, 1, 76],
                        [179, 353, 1, 74],
                        [180, 354, 1, 73],
                        [181, 355, 1, 72],
                        [182, 357, 1, 70],
                        [183, 358, 1, 69],
                        [184, 359, 1, 68],
                        [185, 360, 1, 67],
                        [186, 361, 1, 66],
                        [187, 363, 1, 64],
                        [188, 365, 1, 59],
                        [189, 370, 1, 52],
                        [190, 373, 1, 46],
                        [191, 377, 1, 40],
                        [192, 383, 1, 32],
                        [193, 387, 1, 26],
                        [194, 390, 1, 21],
                        [195, 394, 1, 14],

                        [327, 316, 73, 111], // 右
                        [326, 339, 1, 88],
                        [325, 343, 1, 84],
                        [324, 346, 1, 81],
                        [323, 348, 1, 79],
                        [322, 350, 1, 77],
                        [321, 352, 1, 75],
                        [320, 354, 1, 73],
                        [319, 355, 1, 72],
                        [318, 357, 1, 70],
                        [317, 358, 1, 69],
                        [316, 360, 1, 67],
                        [315, 361, 1, 66],
                        [314, 362, 1, 65],
                        [313, 363, 1, 64],
                        [312, 367, 1, 58],
                        [311, 371, 1, 51],
                        [310, 375, 1, 46],
                        [309, 378, 1, 41],
                        [308, 382, 1, 33],
                        [307, 386, 1, 27],
                        [306, 390, 1, 20],
                        [305, 393, 1, 13],
                    ],
                    Pose: ["BackBoxTie"],
                },
            ],
        },

        {
            Name: "手链链子",
            Priority: 8,
            AllowTypes: { l: 2 },
            Top: -430,
            Left: 0,
            CopyLayerColor: "吊顶链",
        },
        {
            Name: "脚链链子",
            Priority: 8,
            AllowTypes: { ll: 2 },
            Top: -430,
            Left: 0,
            CopyLayerColor: "吊顶链",
        },
        {
            Name: "脚链链子反",
            Priority: 8,
            AllowTypes: { ll: [3, 4] },
            Top: 530,
            Left: 0,
            CopyLayerColor: "吊顶链",
        },
        {
            Name: "脚链拘束",
            Priority: 30,
            AllowTypes: { ll: [5] },
            Top: 460,
            Left: 0,
            CopyLayerColor: "吊顶链",
        },
        {
            Name: "吊顶链",
            Priority: 1,
            AllowTypes: { lll: [2] },
            Top: -400,
            Left: -10,
        },
    ],
    OverrideHeight: {
        Height: -450,
        Priority: 21,
        HeightRatioProportion: 0,
    },
};

/**@type {AssetArchetypeConfig} */
const extened = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "铐子手",
            DrawImages: false,
            Key: "l",
            Options: [
                {},
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedArms] },
                },
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedArms, E.Mounted], SetPose: ["OverTheHead"] },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedArms, E.Mounted], SetPose: ["BackElbowTouch"] },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
            ],
        },
        {
            Name: "铐子腿",
            DrawImages: false,
            Key: "ll",
            Options: [
                {},
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedFeet] },
                },
                {
                    Property: {
                        Difficulty: 8,
                        Effect: [E.CuffedFeet, E.Mounted],
                        SetPose: ["BackBoxTie", "KneelingSpread"],
                    },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
                {
                    Property: {
                        Difficulty: 8,
                        Effect: [E.CuffedFeet, E.Mounted],
                        SetPose: ["BackBoxTie", "KneelingSpread"],
                    },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
                {
                    Property: {
                        Difficulty: 8,
                        Effect: [E.CuffedFeet, E.Mounted],
                        SetPose: ["BackBoxTie", "KneelingSpread"],
                    },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedFeet, E.Mounted], SetPose: ["BackBoxTie", "Kneel"] },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
            ],
        },
        {
            Name: "自定义高度",
            DrawImages: false,
            Key: "lll",
            Options: [
                {},
                {
                    HasSubscreen: true,
                    ArchetypeConfig: {
                        Archetype: ExtendedArchetype.VARIABLEHEIGHT,
                        MaxHeight: 0,
                        MinHeight: -250,
                        DrawData: {
                            elementData: [{ position: [1140, 650, 100, 500], icon: "rope" }],
                        },
                        DialogPrefix: {
                            Chat: "SuspensionChange",
                        },
                    },
                },
                {
                    HasSubscreen: true,
                    ArchetypeConfig: {
                        Archetype: ExtendedArchetype.VARIABLEHEIGHT,
                        MaxHeight: 0,
                        MinHeight: -250,
                        DrawData: {
                            elementData: [{ position: [1140, 650, 100, 500], icon: "rope" }],
                        },
                        DialogPrefix: {
                            Chat: "SuspensionChange",
                        },
                    },
                },
            ],
        },
        {
            Name: "遮罩",
            DrawImages: false,
            AllowSelfSelect: false,
            Key: "a",
            Options: [{}, {}, {}, {}],
        },
    ],
};

/**@type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemAddon隐形药水_LuziSelectBase: "选择隐形药水配置",
        ItemAddon隐形药水_LuziSelect铐子手: "选择手部铐子",
        ItemAddon隐形药水_LuziModule铐子手: "手部铐子",
        ItemAddon隐形药水_LuziOptionl0: "无",
        ItemAddon隐形药水_LuziOptionl1: "添加铁拷",
        ItemAddon隐形药水_LuziOptionl2: "添加铁链(向上吊起来)",
        ItemAddon隐形药水_LuziOptionl3: "添加铁链(手向后铐起来)",
        ItemAddon隐形药水_LuziSetl0: "SourceCharacter移除了DestinationCharacter身上的铐子",
        ItemAddon隐形药水_LuziSetl1: "SourceCharacter在DestinationCharacter手臂加上了铐子",
        ItemAddon隐形药水_LuziSetl2: "SourceCharacter将吊顶链连接在了DestinationCharacter手臂上",
        ItemAddon隐形药水_LuziSetl3: "SourceCharacter将的DestinationCharacter手拷在一起",

        ItemAddon隐形药水_LuziSelect铐子腿: "选择腿部铐子",
        ItemAddon隐形药水_LuziModule铐子腿: "腿部铐子",
        ItemAddon隐形药水_LuziOptionll0: "无",
        ItemAddon隐形药水_LuziOptionll1: "添加铁拷",
        ItemAddon隐形药水_LuziOptionll2: "添加铁链(朝上)",
        ItemAddon隐形药水_LuziOptionll3: "添加铁链(朝下)",
        ItemAddon隐形药水_LuziOptionll4: "添加铁链(朝下反向)",
        ItemAddon隐形药水_LuziOptionll5: "添加铁链(合并)",
        ItemAddon隐形药水_LuziSetll0: "SourceCharacter移除了DestinationCharacter身上的铐子",
        ItemAddon隐形药水_LuziSetll1: "SourceCharacter在DestinationCharacter腿上加上了铐子",
        ItemAddon隐形药水_LuziSetll2: "SourceCharacter将吊顶连连接在了DestinationCharacter腿上",
        ItemAddon隐形药水_LuziSetll3: "SourceCharacter将吊顶连连接在了DestinationCharacter腿上",
        ItemAddon隐形药水_LuziSetll4:
            "SourceCharacter将吊顶连连接在了DestinationCharacter腿上,将TargetCharacter头朝下吊了起来",
        ItemAddon隐形药水_LuziSetll5: "SourceCharacter将DestinationCharacter腿拷在一起",

        ItemAddon隐形药水_LuziSelect自定义高度: "设置高度",
        ItemAddon隐形药水_LuziModule自定义高度: "调整高度",
        ItemAddon隐形药水_LuziOptionlll0: "无",
        ItemAddon隐形药水_LuziOptionlll1: "自定义高度",
        ItemAddon隐形药水_LuziOptionlll2: "自定义高度(吊顶链)",
        ItemAddon隐形药水_LuziSetlll0: "SourceCharacter还原DestinationCharacter高度",
        ItemAddon隐形药水_LuziSetlll1: "SourceCharacter调整DestinationCharacter高度",
        ItemAddon隐形药水_LuziSetlll2: "SourceCharacter在DestinationCharacter身上使用了吊顶连",

        ItemAddon隐形药水_LuziSelect遮罩: "设置遮罩",
        ItemAddon隐形药水_LuziModule遮罩: "调整上半身遮罩",
        ItemAddon隐形药水_LuziOptiona0: "小号",
        ItemAddon隐形药水_LuziOptiona1: "中号",
        ItemAddon隐形药水_LuziOptiona2: "大号",
        ItemAddon隐形药水_LuziOptiona3: "超大号",
        ItemAddon隐形药水_LuziSeta0: "SourceCharacter将DestinationCharacter手臂的遮罩调整为小号",
        ItemAddon隐形药水_LuziSeta1: "SourceCharacter将DestinationCharacter手臂的遮罩调整为中号",
        ItemAddon隐形药水_LuziSeta2: "SourceCharacter将DestinationCharacter手臂的遮罩调整为大号",
        ItemAddon隐形药水_LuziSeta3: "SourceCharacter将DestinationCharacter手臂的遮罩调整为超大号",
    },
    EN: {
        ItemAddon隐形药水_LuziSelectBase: "Select Invisibility Potion Configuration",
        ItemAddon隐形药水_LuziSelect铐子手: "Select Hand Cuffs",
        ItemAddon隐形药水_LuziModule铐子手: "Hand Cuffs",
        ItemAddon隐形药水_LuziOptionl0: "None",
        ItemAddon隐形药水_LuziOptionl1: "Add Iron Shackles",
        ItemAddon隐形药水_LuziOptionl2: "Adjust Chain Height",
        ItemAddon隐形药水_LuziOptionl3: "Add Iron Chain (Hands Cuffed Behind)",
        ItemAddon隐形药水_LuziSetl0: "SourceCharacter removed the cuffs from TargetCharacter",
        ItemAddon隐形药水_LuziSetl1: "SourceCharacter applied cuffs to DestinationCharacter arms",
        ItemAddon隐形药水_LuziSetl2: "SourceCharacter connected the hoist to DestinationCharacter arms",
        ItemAddon隐形药水_LuziSetl3: "SourceCharacter cuffs DestinationCharacter hands together",

        ItemAddon隐形药水_LuziSelect铐子腿: "Select Leg Cuffs",
        ItemAddon隐形药水_LuziModule铐子腿: "Leg Cuffs",
        ItemAddon隐形药水_LuziOptionll0: "None",
        ItemAddon隐形药水_LuziOptionll1: "Add Iron Shackles",
        ItemAddon隐形药水_LuziOptionll2: "Adjust Chain Height",
        ItemAddon隐形药水_LuziOptionll3: "Adjust Chain Height",
        ItemAddon隐形药水_LuziOptionll4: "Add Chain (Reversed Downward)",
        ItemAddon隐形药水_LuziOptionll5: "Add Iron Chain (Merge)",
        ItemAddon隐形药水_LuziSetll0: "SourceCharacter removed the cuffs from DestinationCharacter",
        ItemAddon隐形药水_LuziSetll1: "SourceCharacter applied cuffs to DestinationCharacter legs",
        ItemAddon隐形药水_LuziSetll2: "SourceCharacter connected the hoist to DestinationCharacter legs",
        ItemAddon隐形药水_LuziSetll3: "SourceCharacter connected the hoist to DestinationCharacter legs",
        ItemAddon隐形药水_LuziSetll4:
            "SourceCharacter attached the hanging chain to DestinationCharacter legs, suspending them head-down",
        ItemAddon隐形药水_LuziSetll5: "SourceCharacter cuffs DestinationCharacter legs together",

        ItemAddon隐形药水_LuziSelect自定义高度: "Set Height",
        ItemAddon隐形药水_LuziModule自定义高度: "Adjust Height",
        ItemAddon隐形药水_LuziOptionlll0: "None",
        ItemAddon隐形药水_LuziOptionlll1: "Custom Height",
        ItemAddon隐形药水_LuziOptionlll2: "Custom Height",
        ItemAddon隐形药水_LuziSetlll0: "SourceCharacter restored DestinationCharacter height",
        ItemAddon隐形药水_LuziSetlll1: "SourceCharacter adjusted DestinationCharacter height",
        ItemAddon隐形药水_LuziSetlll2: "SourceCharacter adjusted DestinationCharacter height",

        ItemAddon隐形药水_LuziSelect遮罩: "Set Mask",
        ItemAddon隐形药水_LuziModule遮罩: "Adjust Upper Body Mask",
        ItemAddon隐形药水_LuziOptiona0: "Small",
        ItemAddon隐形药水_LuziOptiona1: "Normal",
        ItemAddon隐形药水_LuziOptiona2: "Large",
        ItemAddon隐形药水_LuziOptiona3: "XLarge",
        ItemAddon隐形药水_LuziSeta0: "SourceCharacter sets DestinationCharacter arm mask to Small",
        ItemAddon隐形药水_LuziSeta1: "SourceCharacter sets DestinationCharacter arm mask to Normal",
        ItemAddon隐形药水_LuziSeta2: "SourceCharacter sets DestinationCharacter arm mask to Large",
        ItemAddon隐形药水_LuziSeta3: "SourceCharacter sets DestinationCharacter arm mask to XLarge",
    },
};

const translations = {
    CN: "四肢传送装置",
    EN: "Limb Teleportation Device",
    RU: "Устройство телепортации конечностей",
};
/** @type {ExtendedItemCallbacks.BeforeDraw} */
function beforeDraw({ C, Property }) {
    const bodyUpper = InventoryGet(C, "BodyUpper");
    if (bodyUpper && bodyUpper.Asset) {
        switch (bodyUpper.Asset.Name) {
            case "Small":
                Property.TypeRecord.a = 0;
                break;
            case "Normal":
                Property.TypeRecord.a = 1;
                break;
            case "Large":
                Property.TypeRecord.a = 2;
                break;
            case "XLarge":
                Property.TypeRecord.a = 3;
                break;
        }
    }
    return {
        Property,
    };
}

export default function () {
    const group = "ItemAddon";
    ModManager.globalFunction(`Assets${group}${asset.Name}BeforeDraw`, beforeDraw);
    AssetManager.addAsset(group, asset, extened, translations);
    AssetManager.addCustomDialog(dialog);
}
