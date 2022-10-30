export { default as Amenities } from '../../components/Amenities.vue'
export { default as BannerCards } from '../../components/BannerCards.vue'
export { default as Contact } from '../../components/Contact.vue'
export { default as FeatureCard } from '../../components/FeatureCard.vue'
export { default as Features } from '../../components/Features.vue'
export { default as Jumbotron } from '../../components/Jumbotron.vue'
export { default as WhatsHappening } from '../../components/WhatsHappening.vue'
export { default as BaseAppNavbar } from '../../components/base/AppNavbar.vue'
export { default as BaseDesktopMenu } from '../../components/base/DesktopMenu.vue'
export { default as BaseFooter } from '../../components/base/Footer.vue'
export { default as BaseMobileMenu } from '../../components/base/MobileMenu.vue'
export { default as BaseTabMenu } from '../../components/base/TabMenu.vue'
export { default as IconsTiktok } from '../../components/icons/Tiktok.vue'

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
