// import NProgress from '@/assets/js/nprogress.js'
import NProgress from 'nprogress'
import '@/assets/css/nprogress.css'

export default ({app}, inject) => {
    inject('NProgress', NProgress)

    // this part is still a work in progress
    // $axios.onRequest(config => {
    //     // NProgress.start();
    //     // console.log('Making request to ' + config.url)
    // })

    /* Add NProgress loading bar to each route transition */
    app.router.beforeEach((to, from, next) => {
        NProgress.start()
        next()
    });
    app.router.afterEach(() => {
        NProgress.done()
    });
}