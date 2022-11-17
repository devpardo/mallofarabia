export { default as Amenities } from '../../components/Amenities.vue'
export { default as BannerCards } from '../../components/BannerCards.vue'
export { default as Contact } from '../../components/Contact.vue'
export { default as FeatureCard } from '../../components/FeatureCard.vue'
export { default as Features } from '../../components/Features.vue'
export { default as Jumbotron } from '../../components/Jumbotron.vue'
export { default as LatestMovies } from '../../components/LatestMovies.vue'
export { default as Loading } from '../../components/Loading.vue'
export { default as PageHeader } from '../../components/PageHeader.vue'
export { default as WhatsHappening } from '../../components/WhatsHappening.vue'
export { default as BaseAppNavbar } from '../../components/base/AppNavbar.vue'
export { default as BaseDesktopMenu } from '../../components/base/DesktopMenu.vue'
export { default as BaseFooter } from '../../components/base/Footer.vue'
export { default as BaseMobileMenu } from '../../components/base/MobileMenu.vue'
export { default as BaseTabMenu } from '../../components/base/TabMenu.vue'
export { default as IconsAboutIcon } from '../../components/icons/AboutIcon.vue'
export { default as IconsAdvertising } from '../../components/icons/Advertising.vue'
export { default as IconsArrowDown } from '../../components/icons/ArrowDown.vue'
export { default as IconsCareersIcon } from '../../components/icons/CareersIcon.vue'
export { default as IconsContactIcon } from '../../components/icons/ContactIcon.vue'
export { default as IconsHoursIcon } from '../../components/icons/HoursIcon.vue'
export { default as IconsLeasing } from '../../components/icons/Leasing.vue'
export { default as IconsLocationIcon } from '../../components/icons/LocationIcon.vue'
export { default as IconsMallMap } from '../../components/icons/MallMap.vue'
export { default as IconsMoaArrow } from '../../components/icons/MoaArrow.vue'
export { default as IconsMoaArrowWhite } from '../../components/icons/MoaArrowWhite.vue'
export { default as IconsTelephoneIcon } from '../../components/icons/TelephoneIcon.vue'
export { default as IconsTiktok } from '../../components/icons/Tiktok.vue'
export { default as Mixins } from '../../components/mixins/index.js'

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
