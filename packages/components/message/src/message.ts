import { buildProps, definePropType, iconPropType } from '@park-ui/utils-v2'
import type { VNode, ExtractPropTypes } from 'vue'

export const messageTypes = ['success', 'info', 'warning', 'error'] as const

export interface MessageConfigContext {
  max?: number
}

export const messageProps = buildProps({
  customClass: {
    type: String,
    default: '',
  },
  center: {
    type: Boolean,
    default: false,
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  icon: {
    type: iconPropType,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  message: {
    type: definePropType<string | VNode>([String, Object]),
    default: '',
  },
  onClose: {
    type: definePropType<() => void>(Function),
    required: false,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    values: messageTypes,
    default: 'info',
  },
  offset: {
    type: Number,
    default: 20,
  },
  zIndex: {
    type: Number,
    default: 0,
  },
  grouping: {
    type: Boolean,
    default: false,
  },
  repeatNum: {
    type: Number,
    default: 1,
  },
} as const)
export type MessageProps = ExtractPropTypes<typeof messageProps>

export const messageEmits = {
  destroy: () => true,
}
export type MessageEmits = typeof messageEmits

export type MessageOptions = Omit<MessageProps, 'id'> & {
  appendTo?: HTMLElement | string
}
export type MessageOptionsTyped = Omit<MessageOptions, 'type'>

export interface MessageHandle {
  close: () => void
}

export type MessageParams = Partial<MessageOptions> | string | VNode
export type MessageParamsTyped = Partial<MessageOptionsTyped> | string | VNode

export type MessageFn = ((options?: MessageParams) => MessageHandle) & {
  closeAll(): void
}
export type MessageTypedFn = (options?: MessageParamsTyped) => MessageHandle

export interface Message extends MessageFn {
  success: MessageTypedFn
  warning: MessageTypedFn
  info: MessageTypedFn
  error: MessageTypedFn
}

type MessageQueueItem = {
  vm: VNode
}

export type MessageQueue = MessageQueueItem[]
