export { default as Jumbotron } from '../../components/Jumbotron.vue'
export { default as WhatsHappening } from '../../components/WhatsHappening.vue'
export { default as BaseAppNavbar } from '../../components/base/AppNavbar.vue'
export { default as BaseDesktopMenu } from '../../components/base/DesktopMenu.vue'
export { default as BaseMobileMenu } from '../../components/base/MobileMenu.vue'
export { default as BaseTabMenu } from '../../components/base/TabMenu.vue'

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
