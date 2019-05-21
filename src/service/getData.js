import fetch from '../config/fetch'
// import {getStore} from '../config/mUtils'

/**
 * 账号密码登录
 */
export const accountLogin = (username, password) => fetch('/api/user/login', {username, password }, 'POST');

// list 
export const getBlogList = () => fetch('/api/blog/list');

// 搜索 + author & keyword get
export const searchBlogList = (keyword) => fetch('/api/blog/list',{ keyword }, 'GET');


// 新增
export const addBlogList = (title,content) => fetch('/api/blog/new',{ title,content }, 'POST');

// 详情  // '/api/blog/detail?id=' + urlParams.id
export const detailBlogList = (id) => fetch('/api/blog/detail', {id});

// 编辑
export const updateBlogList = ( id,title,content,author) => fetch(`/api/blog/update?id=${id}`,{ title,content,author }, 'POST');

// 删除
export const delBlogList = (id) => fetch('/api/blog/del', { id }, 'POST');



// /**
//  * 退出登录
//  */
// export const signout = () => fetch('/v2/signout');

