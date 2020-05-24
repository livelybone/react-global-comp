import { ReactElement } from 'react'

declare type CompRef<RefProps extends any = any> = (
  ref: RefProps | null,
) => void
declare type CompGnt<RefProps extends any = any> = (
  refCb: CompRef<RefProps>,
) => ReactElement
declare class ReactGlobalComp<
  RefProps extends any = any,
  Id extends string = string
> {
  readonly id: Id
  readonly compGnt: CompGnt<RefProps>
  private $ref
  constructor(id: Id, comp: CompGnt<RefProps>)
  get ref(): Promise<RefProps>
  private render
}

export default ReactGlobalComp
export { CompGnt, CompRef }
