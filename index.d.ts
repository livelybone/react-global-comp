import { ReactElement } from 'react'

declare type CompRef<RefProps> = (ref: RefProps | null) => void
declare type CompGnt<RefProps> = (refCb: CompRef<RefProps>) => ReactElement
declare class ReactGlobalComp<Id extends string, RefProps extends any> {
  readonly id: Id
  readonly compGnt: CompGnt<RefProps>
  ref: RefProps
  constructor(id: Id, comp: CompGnt<RefProps>)
  private render
}

export default ReactGlobalComp
export { CompGnt, CompRef }
