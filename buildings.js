export const BUILDINGS=[
{id:"road",name:"Грунтовая дорога",icon:"━",category:"roads",description:"Связывает здания с жизнью города.",cost:{gold:4},population:0,jobs:0,upkeep:0,kind:"road"},
{id:"cottage",name:"Крестьянский дом",icon:"⌂",category:"homes",description:"Жильё для четырёх жителей.",cost:{gold:35,wood:12},population:4,jobs:0,upkeep:1},
{id:"manor",name:"Усадьба",icon:"⌂",category:"homes",description:"Просторный дом для зажиточной семьи.",cost:{gold:75,wood:20,stone:5},population:6,jobs:0,upkeep:2,unlock:18},
{id:"farm",name:"Пшеничная ферма",icon:"♧",category:"production",description:"Выращивает зерно для мельницы.",cost:{gold:45,wood:18},population:0,jobs:3,upkeep:2,produces:{grain:12}},
{id:"mill",name:"Ветряная мельница",icon:"⚙",category:"production",description:"Перерабатывает зерно в муку.",cost:{gold:80,wood:28,stone:8},population:0,jobs:2,upkeep:3,recipe:{grain:8},produces:{flour:8},unlock:12},
{id:"bakery",name:"Пекарня",icon:"♨",category:"production",description:"Печёт хлеб из муки для горожан.",cost:{gold:95,wood:25,stone:8},population:0,jobs:2,upkeep:3,recipe:{flour:6},produces:{bread:10},unlock:16},
{id:"lumber",name:"Лесопилка",icon:"⚒",category:"production",description:"Заготавливает древесину.",cost:{gold:55,wood:14},population:0,jobs:3,upkeep:2,produces:{wood:10}},
{id:"quarry",name:"Каменоломня",icon:"⬡",category:"production",description:"Добывает камень в скалистых местах.",cost:{gold:65,wood:18},population:0,jobs:3,upkeep:3,produces:{stone:8}},
{id:"market",name:"Рыночная площадь",icon:"⚑",category:"culture",description:"Торговля оживляет улицы и казну.",cost:{gold:80,wood:22},population:0,jobs:2,upkeep:3,income:14,happiness:4},
{id:"tavern",name:"Таверна «Золотой гусь»",icon:"♨",category:"culture",description:"Место встреч, отдыха и слухов.",cost:{gold:95,wood:30},population:0,jobs:2,upkeep:4,income:9,happiness:8},
{id:"well",name:"Каменный колодец",icon:"◉",category:"culture",description:"Чистая вода улучшает быт.",cost:{gold:30,stone:12},population:0,jobs:0,upkeep:1,happiness:5},
{id:"chapel",name:"Старая часовня",icon:"✧",category:"culture",description:"Укрепляет дух и надежду жителей.",cost:{gold:110,wood:24,stone:20},population:0,jobs:2,upkeep:4,happiness:12,unlock:20},
{id:"wizard",name:"Башня чародея",icon:"♜",category:"culture",description:"Первый шаг к изучению древней магии.",cost:{gold:180,wood:35,stone:45},population:0,jobs:2,upkeep:8,happiness:3,unlock:35}
];