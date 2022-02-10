import { QuestionFilled } from '@element-plus/icons-vue'
import { buttonType } from '@park-ui/components/button'
import { buildProps, definePropType, iconPropType } from '@park-ui/utils-v2'
import { useTooltipContentProps } from '@park-ui/components/tooltip'
import type { Component, ExtractPropTypes } from 'vue'

export const popconfirmProps = buildProps({
  title: {
    type: String,
  },
  confirmButtonText: {
    type: String,
  },
  cancelButtonText: {
    type: String,
  },
  confirmButtonType: {
    type: String,
    values: buttonType,
    default: 'primary',
  },
  cancelButtonType: {
    type: String,
    values: buttonType,
    default: 'text',
  },
  icon: {
    type: iconPropType,
    default: QuestionFilled as Component,
  },
  iconColor: {
    type: String,
    default: '#f90',
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
  onConfirm: {
    type: definePropType<(e: Event) => Promise<boolean> | boolean>(Function),
  },
  onCancel: {
    type: definePropType<(e: Event) => Promise<boolean> | boolean>(Function),
  },
  teleported: useTooltipContentProps.teleported,
} as const)
export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>
