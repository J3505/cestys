import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{orange.500}',
          inverseColor: '#ffffff',
          hoverColor: '{orange.600}',
          activeColor: '{orange.800}',
        },
        highlight: {
          background: '{orange.500}',
          focusBackground: '{orange.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        custom:{
          background: '{orange.500}',
          focusBackground: '{orange.600}',
          color: '#ffffff',
        }
        
      },
      dark: {
        primary: {
          color: '{red.50}',
          inverseColor: '{red.950}',
          hoverColor: '{red.100}',
          activeColor: '{red.200}',
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
      },
    },
  },
});
