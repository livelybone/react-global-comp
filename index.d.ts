import { ComponentType } from 'react'

declare class ReactGlobalComp<Props extends Record<string, any>> {
  readonly id: string
  readonly comp: ComponentType<Props>
  readonly preProps: Props
  ref?: any
  constructor(id: string, comp: ComponentType<Props>)
  render(props?: Partial<Props>): Promise<unknown>
  destroy(): Promise<unknown>
}

export default ReactGlobalComp
