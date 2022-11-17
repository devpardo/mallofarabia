import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20d03a93 = () => interopDefault(import('../pages/about-us/index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _3e0feee5 = () => interopDefault(import('../pages/advertising/index.vue' /* webpackChunkName: "pages/advertising/index" */))
const _7ad28de0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3431c236 = () => interopDefault(import('../pages/careers/index.vue' /* webpackChunkName: "pages/careers/index" */))
const _25433934 = () => interopDefault(import('../pages/cinema/index.vue' /* webpackChunkName: "pages/cinema/index" */))
const _73a6183e = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _39418a31 = () => interopDefault(import('../pages/dine/index.vue' /* webpackChunkName: "pages/dine/index" */))
const _064388eb = () => interopDefault(import('../pages/entertain/index.vue' /* webpackChunkName: "pages/entertain/index" */))
const _6065bf8e = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _d8e3b8d0 = () => interopDefault(import('../pages/leasing/index.vue' /* webpackChunkName: "pages/leasing/index" */))
const _457f5cd0 = () => interopDefault(import('../pages/mall-map/index.vue' /* webpackChunkName: "pages/mall-map/index" */))
const _02410a8c = () => interopDefault(import('../pages/offers/index.vue' /* webpackChunkName: "pages/offers/index" */))
const _dd53edca = () => interopDefault(import('../pages/opening-hours/index.vue' /* webpackChunkName: "pages/opening-hours/index" */))
const _2f2a220c = () => interopDefault(import('../pages/privacy-policy/index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _03a21e13 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _bf78f584 = () => interopDefault(import('../pages/shops/index.vue' /* webpackChunkName: "pages/shops/index" */))
const _b9691d6e = () => interopDefault(import('../pages/train/index.vue' /* webpackChunkName: "pages/train/index" */))
const _4bda074e = () => interopDefault(import('../pages/cinema/_id.vue' /* webpackChunkName: "pages/cinema/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _20d03a93,
    name: "about-us___en"
  }, {
    path: "/advertising",
    component: _3e0feee5,
    name: "advertising___en"
  }, {
    path: "/ar",
    component: _7ad28de0,
    name: "index___ar"
  }, {
    path: "/careers",
    component: _3431c236,
    name: "careers___en"
  }, {
    path: "/cinema",
    component: _25433934,
    name: "cinema___en"
  }, {
    path: "/contact",
    component: _73a6183e,
    name: "contact___en"
  }, {
    path: "/dine",
    component: _39418a31,
    name: "dine___en"
  }, {
    path: "/entertain",
    component: _064388eb,
    name: "entertain___en"
  }, {
    path: "/events",
    component: _6065bf8e,
    name: "events___en"
  }, {
    path: "/leasing",
    component: _d8e3b8d0,
    name: "leasing___en"
  }, {
    path: "/mall-map",
    component: _457f5cd0,
    name: "mall-map___en"
  }, {
    path: "/offers",
    component: _02410a8c,
    name: "offers___en"
  }, {
    path: "/opening-hours",
    component: _dd53edca,
    name: "opening-hours___en"
  }, {
    path: "/privacy-policy",
    component: _2f2a220c,
    name: "privacy-policy___en"
  }, {
    path: "/services",
    component: _03a21e13,
    name: "services___en"
  }, {
    path: "/shops",
    component: _bf78f584,
    name: "shops___en"
  }, {
    path: "/train",
    component: _b9691d6e,
    name: "train___en"
  }, {
    path: "/ar/about-us",
    component: _20d03a93,
    name: "about-us___ar"
  }, {
    path: "/ar/advertising",
    component: _3e0feee5,
    name: "advertising___ar"
  }, {
    path: "/ar/careers",
    component: _3431c236,
    name: "careers___ar"
  }, {
    path: "/ar/cinema",
    component: _25433934,
    name: "cinema___ar"
  }, {
    path: "/ar/contact",
    component: _73a6183e,
    name: "contact___ar"
  }, {
    path: "/ar/dine",
    component: _39418a31,
    name: "dine___ar"
  }, {
    path: "/ar/entertain",
    component: _064388eb,
    name: "entertain___ar"
  }, {
    path: "/ar/events",
    component: _6065bf8e,
    name: "events___ar"
  }, {
    path: "/ar/leasing",
    component: _d8e3b8d0,
    name: "leasing___ar"
  }, {
    path: "/ar/mall-map",
    component: _457f5cd0,
    name: "mall-map___ar"
  }, {
    path: "/ar/offers",
    component: _02410a8c,
    name: "offers___ar"
  }, {
    path: "/ar/opening-hours",
    component: _dd53edca,
    name: "opening-hours___ar"
  }, {
    path: "/ar/privacy-policy",
    component: _2f2a220c,
    name: "privacy-policy___ar"
  }, {
    path: "/ar/services",
    component: _03a21e13,
    name: "services___ar"
  }, {
    path: "/ar/shops",
    component: _bf78f584,
    name: "shops___ar"
  }, {
    path: "/ar/train",
    component: _b9691d6e,
    name: "train___ar"
  }, {
    path: "/ar/cinema/:id",
    component: _4bda074e,
    name: "cinema-id___ar"
  }, {
    path: "/cinema/:id",
    component: _4bda074e,
    name: "cinema-id___en"
  }, {
    path: "/",
    component: _7ad28de0,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
