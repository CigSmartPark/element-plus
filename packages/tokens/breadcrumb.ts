import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from '@park-ui/components/breadcrumb'

export const elBreadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('elBreadcrumbKey')
