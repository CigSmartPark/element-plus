import installer from './defaults'
export * from '@park-ui/components'
export * from '@park-ui/directives'
export * from '@park-ui/hooks'
export * from '@park-ui/tokens'
export { makeInstaller } from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer
