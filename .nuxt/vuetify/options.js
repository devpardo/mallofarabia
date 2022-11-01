import colors from 'vuetify/es5/util/colors'
import Tiktok from "@/components/icons/Tiktok";
import MoaArrow from "@/components/icons/MoaArrow";
import MoaArrowWhite from "@/components/icons/MoaArrowWhite";
import ArrowDown from "@/components/icons/ArrowDown";
import Advertising from "@/components/icons/Advertising";
import Leasing from "@/components/icons/Leasing";
import MallMap from "@/components/icons/MallMap";
import AboutIcon from "@/components/icons/AboutIcon";
import ContactIcon from "@/components/icons/ContactIcon";
import HoursIcon from "@/components/icons/HoursIcon";
import CareersIcon from "@/components/icons/CareersIcon";
import TelephoneIcon from "@/components/icons/TelephoneIcon";
import LocationIcon from "@/components/icons/LocationIcon";

export default function () {
  return {
    // other vuetify options here,
    icons: {
      values: {
        tiktok: { component: Tiktok },
        moa_arrow: { component: MoaArrow },
        moa_arrow_white: { component: MoaArrowWhite },
        arrow_down: { component: ArrowDown },
        advertising: { component: Advertising },
        leasing: { component: Leasing },
        mall_map: { component: MallMap },
        about_icon: { component: AboutIcon },
        contact_icon: { component: ContactIcon },
        hours_icon: { component: HoursIcon },
        careers_icon: { component: CareersIcon },
        telephone_icon: { component: TelephoneIcon },
        location_icon: { component: LocationIcon },
      }
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#00b3e6',
          accent: '#00234b',
          secondary: '#00b2e5',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#00b3e6',
          accent: '#00234b',
          secondary: '#00b2e5',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  };
};