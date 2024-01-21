import 'vuetify/styles'
import { createVuetify , type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#140F0A',
    surface: '#FFFFFF',
    primary120: '#7B6651',
    primary: '#BF9D7D',
    primary80: '#AE9984',
    primary60: '#E1D1C2',
    primary40: '#F1EAE4',
    primaryTint: '#FAF7F5',
    success120: '#299F65',
    success: '#52DD7E',
    success20: '#BCFBBD',
    success10: '#E8FEE7',
    info120: '#1D66AC',
    info: '#3BADEF',
    info20: '#B1EFFD',
    info10: '#E6FBFE',
    error120: '#C22538',
    error: '#DA3E51',
    error20: '#F5CCD1',
    error10: '#FDECEF',
    warning: '#FB8C00',
    black: '#000000',
    black80: '#4B4B4B',
    black60: '#909090',
    black40: '#ECECEC',
    black10: '#F9F9F9',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
  defaults:{
    VAppBar:{
      VBtn:{
        color: 'primary'
      }
    }
  },
  
})

export default vuetify