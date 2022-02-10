import { ElInfiniteScroll } from '@park-ui/components/infinite-scroll'
import { ElLoading } from '@park-ui/components/loading'
import { ElMessage } from '@park-ui/components/message'
import { ElMessageBox } from '@park-ui/components/message-box'
import { ElNotification } from '@park-ui/components/notification'
import { ElPopoverDirective } from '@park-ui/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
