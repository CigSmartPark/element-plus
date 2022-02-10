import { buildProps, definePropType, mutable } from '@park-ui/utils-v2'
import type { TabsPaneContext } from '@park-ui/tokens'
import type { ExtractPropTypes } from 'vue'

export const tabBar = buildProps({
  tabs: {
    type: definePropType<TabsPaneContext[]>(Array),
    default: () => mutable([] as const),
  },
} as const)

export type TabBar = ExtractPropTypes<typeof tabBar>
