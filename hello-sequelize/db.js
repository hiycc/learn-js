const Sequelize = require('sequelize');
const config = require('./config');

console.log('init sequelize...');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max:5,
        min:0,
        idle:10000
    }
});

const ID_TYPE = Sequelize.STRING(50);

function defineModel(name, attributes) {
    var attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            }
        }
    }
    attrs.id = {
        type: ID_TYPE,
        primaryKey: true
    };
    attrs.createAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.updatedAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.version = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    //name: 模型名称
    //attrs: 包含表属性的对象
    //opts
    return sequelize.define(name, attrs, {
        //
        tableName: name,
        timestamps: false,
        hooks: {
            //通过hooks在创建、修改实体时会调用指定函数
            beforeValidate: function (obj){
                let now = Date.now();
                if (obj.isNewRecord) {
                    //判断是否是新记录
                    if (!obj.id){
                        obj.id = generatedId();
                    }
                    obj.createAt = now;
                    obj.updatedAt = now;
                    obj.version = 0;
                }else {
                    obj.updatedAt = Date.now();
                    obj.version ++;
                }
            }
        }
    })

}
