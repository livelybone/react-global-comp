import { ReactElement } from 'react'
import ReactDOM from 'react-dom'

export type CompRef<RefProps> = (ref: RefProps | null) => void
export type CompGnt<RefProps> = (refCb: CompRef<RefProps>) => ReactElement

export default class ReactGlobalComp<Id extends string, RefProps extends any> {
  readonly id!: Id
  readonly compGnt!: CompGnt<RefProps>
  private $ref!: RefProps

  constructor(id: Id, comp: CompGnt<RefProps>) {
    this.id = id
    this.compGnt = comp
  }

  get ref() {
    return this.render().then(() => this.$ref)
  }

  private render() {
    return new Promise(res => {
      let dom = document.getElementById(this.id)
      if (dom) res()
      else {
        dom = document.createElement('div')
        dom.id = this.id
        document.body.appendChild(dom)
      }
      ReactDOM.render(
        this.compGnt(ref => (this.$ref = ref!)),
        dom,
        res,
      )
    })
  }
}
