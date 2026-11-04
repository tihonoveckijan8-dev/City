export const BUILDINGS=[
{id:"cottage",name:"Крестьянский дом",icon:"⌂",category:"homes",description:"Жильё для простых жителей.",cost:{gold:35,wood:12},population:4,jobs:0,upkeep:1,income:0,food:0},
{id:"manor",name:"Усадьба",icon:"⌂",category:"homes",description:"Просторный дом для зажиточной семьи.",cost:{gold:75,wood:20,stone:5},population:6,jobs:0,upkeep:2,income:0,food:0,unlock:18},
{id:"farm",name:"Пшеничная ферма",icon:"♧",category:"production",description:"Выращивает провизию для города.",cost:{gold:45,wood:18},population:0,jobs:3,upkeep:2,income:3,food:18},
{id:"lumber",name:"Лесопилка",icon:"⚒",category:"production",description:"Заготавливает древесину.",cost:{gold:55,wood:14},population:0,jobs:3,upkeep:2,income:5,wood:12},
{id:"quarry",name:"Каменоломня",icon:"⬡",category:"production",description:"Добывает камень в скалистых местах.",cost:{gold:65,wood:18},population:0,jobs:3,upkeep:3,income:4,stone:9},
{id:"market",name:"Рыночная площадь",icon:"⚑",category:"culture",description:"Торговля оживляет улицы и казну.",cost:{gold:80,wood:22},population:0,jobs:2,upkeep:3,income:18,happiness:4},
{id:"tavern",name:"Таверна «Золотой гусь»",icon:"♨",category:"culture",description:"Место встреч, отдыха и слухов.",cost:{gold:95,wood:30},population:0,jobs:2,upkeep:4,income:12,happiness:9},
{id:"well",name:"Каменный колодец",icon:"◉",category:"culture",description:"Чистая вода улучшает быт.",cost:{gold:30,stone:12},population:0,jobs:0,upkeep:1,income:0,happiness:5},
{id:"chapel",name:"Старая часовня",icon:"✧",category:"culture",description:"Укрепляет дух и надежду жителей.",cost:{gold:110,wood:24,stone:20},population:0,jobs:2,upkeep:4,income:0,happiness:12,unlock:20},
{id:"wizard",name:"Башня чародея",icon:"♜",category:"culture",description:"Первый шаг к изучению древней магии.",cost:{gold:180,wood:35,stone:45},population:0,jobs:2,upkeep:8,income:0,happiness:3,unlock:35}
];