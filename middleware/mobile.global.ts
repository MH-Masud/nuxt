export default defineNuxtRouteMiddleware((to, from) => {
    let userAgent = process.server
        ? useRequestHeaders()["user-agent"]
        : navigator.userAgent
    let isMobile = /mobile/i.test(userAgent)
    isMobile ? setPageLayout('default') : setPageLayout('desktop')
})