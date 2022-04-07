import React, { ComponentType } from 'react'
import ReactDOM from 'react-dom'

export default class ReactGlobalComp<Props extends Record<string, any>> {
  readonly id!: string
  readonly comp!: ComponentType<Props>
  readonly preProps!: Props
  ref?: any

  constructor(id: string, comp: ComponentType<Props>) {
    this.id = id
    this.comp = comp
  }

  render(props?: Partial<Props>) {
    return new Promise(res => {
      let dom = document.getElementById(this.id)
      if (!dom) {
        dom = document.createElement('div')
        dom.id = this.id
        document.body.appendChild(dom)
      }
      const $props: Props = { ...this.preProps, ...props }
      ReactDOM.render(
        React.createElement(this.comp, {
          ...$props,
          ref: (el: any) => {
            this.ref = el
            if (typeof $props.ref === 'function') $props.ref(el)
            else if ($props.ref) $props.ref.current = el
          },
        }),
        dom,
        res,
      )
    })
  }
}
