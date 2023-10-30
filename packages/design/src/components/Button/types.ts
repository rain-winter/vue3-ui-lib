import type { PropType } from 'vue'

export type ButtonType = 'primary' | 'dashed' | 'outline' | 'text' | 'secondary'
export type ButtonSize = 'mini' | 'small' | 'medium' | 'large'
export type ButtonStatus = 'success' | 'normal' | 'warning' | 'danger'
// 原生属性
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  status?: ButtonStatus
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: NativeType
  autofocus?: boolean
  loading?: boolean
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>
  },
  size: {
    type: String as PropType<ButtonSize>
  },
  plain: {
    type: Boolean
  },
  round: {
    type: Boolean
  },
  circle: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  }
}
