// 引用 knex
const knex = require('./../models/knex');
// 定义数据库表信息
const TABLE = 'users';

const User = {
  // 获取所有用户的方法
  all: function(){
    // 返回 Promise
    return new Promise((reslove,reject)=>{
      // knex select 操作相关方法
      knex.select().table(TABLE).then( res => {
        reslove(res)
      }).catch( err => {
        reject(err)
      })
    })
  },
  // 添加用户
  insert: function(params){
    return new Promise((reslove,reject)=>{
      knex(TABLE).insert(params)
      .then( res => {
        reslove(res)
      }).catch( err => {
        reject(err)
      })
    })
  },
  // 修改用户
  update: function(id, params ){
    return new Promise((reslove,reject)=>{
      knex(TABLE).where('id', '=', id).update( params )
      .then( res => {
        reslove(res)
      }).catch( err => {
        reject(err)
      })
    })
  },
  // 删除用户
  delete: function(id){
    return new Promise((reslove,reject)=>{
      knex(TABLE).where('id', '=', id).del()
      .then( res => {
        reslove(res)
      }).catch( err => {
        reject(err)
      })
    })
  }
}

module.exports = User