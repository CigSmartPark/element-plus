import { buildProps } from '@park-ui/utils-v2'
import type { ExtractPropTypes } from 'vue'

export const tabPaneProps = buildProps({
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean,
} as const)

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>
