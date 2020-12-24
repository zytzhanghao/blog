
const uri = "mongodb+srv://root:root@cluster0.up5gl.mongodb.net/cluster0?retryWrites=true&w=majority";
const Mongolass = require('mongolass')
const mongolass = new Mongolass(uri)

console.log('创建user')
exports.User = mongolass.model('User', {
    name: { type: 'string', required: true },
    password: { type: 'string', required: true },
    avatar: { type: 'string', required: true },
    gender: { type: 'string', enum: ['m', 'f', 'x'], default: 'x' },
    bio: { type: 'string', required: true }
  })
exports.User.index({ name: 1 }, { unique: true }).exec()// 根据用户名找到用户，用户名全局唯一

