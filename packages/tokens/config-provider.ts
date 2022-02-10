import type { configProviderProps } from '@park-ui/components/config-provider'
import type { InjectionKey, ExtractPropTypes, Ref } from 'vue'

export type ConfigProviderContext = Partial<
  ExtractPropTypes<typeof configProviderProps>
>

export const configProviderContextKey: InjectionKey<
  Ref<ConfigProviderContext>
> = Symbol()
