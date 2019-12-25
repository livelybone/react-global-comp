import { ReactElement } from 'react'

declare type CompRef<RefProps> = (ref: RefProps | null) => void
declare type CompGnt<RefProps> = (refCb: CompRef<RefProps>) => ReactElement

declare class ReactGlobalComp<
  RefProps extends any,
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
