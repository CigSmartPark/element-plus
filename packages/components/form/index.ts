import { withInstall, withNoopInstall } from '@park-ui/utils-v2'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const ElForm = withInstall(Form, {
  FormItem,
})

export default ElForm

export const ElFormItem = withNoopInstall(FormItem)
