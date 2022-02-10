import { defineComponent, renderSlot, watch } from 'vue'
import { buildProps, definePropType } from '@park-ui/utils-v2'
import { provideGlobalConfig } from '@park-ui/hooks'
import type { Language } from '@park-ui/locale'
import type { ButtonConfigContext } from '@park-ui/components/button'
import type { MessageConfigContext } from '@park-ui/components/message'

export const messageConfig: MessageConfigContext = {}

export const configProviderProps = buildProps({
  locale: {
    type: definePropType<Language>(Object),
  },

  size: {
    type: String,
    values: ['large', 'default', 'small'],
  },

  button: {
    type: definePropType<ButtonConfigContext>(Object),
  },

  message: {
    type: definePropType<MessageConfigContext>(Object),
  },

  zIndex: {
    type: Number,
  },

  namespace: {
    type: String,
    default: 'el',
  },
} as const)

export default defineComponent({
  name: 'ElConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    watch(
      () => props.message,
      (val) => {
        Object.assign(messageConfig, val ?? {})
      },
      { immediate: true, deep: true }
    )
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
