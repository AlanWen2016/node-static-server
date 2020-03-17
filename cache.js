import Koa from 'koa'
import path from 'path'
import resource from 'koa-static'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'

const app = new Koa();
const host = 'localhost';
const port = 5555;
// 配置缓存
// app.use(async (ctx, next) => {
//     ctx.set({
//         'Cache-Control': 'max-age=5000'
//     })
//     await next()
// })
// app.use(conditional());
// 配置缓存
// app.use(etag());
// 指定资源地址
app.use(resource(path.join(__dirname, './static')));


app.listen(port, () => {
    console.log(`server is listen in ${host}:${port}`)
});