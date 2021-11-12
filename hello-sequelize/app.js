//创建一个sequelize对象实例
const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,//域名
    dialect: 'mysql',//数据库类型
    pool:{
        max:5,//最大连接池
        min:0 ,//最小
        idle:30000 //存活时间
    }
})

//定义模型
var Pet = sequelize.define('pet',{
    id: {
        type: Sequelize.STRING(50),
        primaryKey:true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
},{
    timestamps: false   //关闭Sequelize的自动添加timestamp
});

var now = Date.now();

Pet.create({
    id: 'g-' + now,
    name: 'Gaffey',
    gender: false,
    birth: '2007-07-07',
    createAt: now,
    updatedAt: now,
    version: 0
}).then(function (p){
    console.log('created.' + JSON.stringify(p));
}).catch(function(err){
    console.log('failed: '+err);
});

//用await写

(async ()=>{
    var dog = await Pet.create({
        id: 'd-' + now,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    console.log('created: '+ JSON.stringify(dog));
})();

//查询数据

(async () =>{
    var pets = await Pet.findAll({
        where: {
            name: 'Gaffey'
        }
    });
    console.log(`find ${pets.length} pets:`);
    for (let p of pets){
        console.log(JSON.stringify(p));
        console.log('updating pet...');
        p.gender = true;
        p.updatedAt = Date.now();
        p.version ++;
        await p.save();
        if (p.version === 3){
            await p.destroy();
            console.log(`${p.name} was destroyed.`);
        }
    }
})();

//保存数据
// (async ()=>{
//     var p = await queryFromSomewhere();
//     p.gender = true;
//     p.updatedAt = Date.now();
//     p.version ++;
//     await p.save();
// })();

//删除数据
// (async ()=>{
//     var p = await queryFromSomewhere();
//     await p.destroy();
// })();

    