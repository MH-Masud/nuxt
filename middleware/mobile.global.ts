export default defineNuxtRouteMiddleware((to, from) => {
    let userAgent = process.server
        ? useRequestHeaders()["user-agent"]
        : navigator.userAgent
    let isMobile = /mobile/i.test(userAgent)
    to.params.isMobile = isMobile ? 'mobile' : 'desktop'
    const state = useState('isMobile', () => isMobile);
    isMobile ? setPageLayout('default') : setPageLayout('desktop')
})