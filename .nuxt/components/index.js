export const Jumbotron = () => import('../../components/Jumbotron.vue' /* webpackChunkName: "components/jumbotron" */).then(c => wrapFunctional(c.default || c))
export const WhatsHappening = () => import('../../components/WhatsHappening.vue' /* webpackChunkName: "components/whats-happening" */).then(c => wrapFunctional(c.default || c))
export const BaseAppNavbar = () => import('../../components/base/AppNavbar.vue' /* webpackChunkName: "components/base-app-navbar" */).then(c => wrapFunctional(c.default || c))
export const BaseDesktopMenu = () => import('../../components/base/DesktopMenu.vue' /* webpackChunkName: "components/base-desktop-menu" */).then(c => wrapFunctional(c.default || c))
export const BaseMobileMenu = () => import('../../components/base/MobileMenu.vue' /* webpackChunkName: "components/base-mobile-menu" */).then(c => wrapFunctional(c.default || c))
export const BaseTabMenu = () => import('../../components/base/TabMenu.vue' /* webpackChunkName: "components/base-tab-menu" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
