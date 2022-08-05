import React, { ReactElement } from "react"
import { useAppValuesContext, useAppUpdateContext } from "../../AppContext"

type Props = {
  title: string
}

function SomeComponent({ title }: Props): ReactElement {
  const ctx = useAppValuesContext()
  const ctxUpdate = useAppUpdateContext()
  return (
    <div className="SomeComponent">
      <h2>{title}</h2>
      <p>Some text</p>

      <button onClick={() => ctxUpdate.loadedStateHandler(!ctx.loaded)}>
        Button Click
      </button>

      {ctx.loaded === true ? <p>Hallo Peter</p> : null}
    </div>
  )
}

export default SomeComponent
