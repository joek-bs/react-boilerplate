import React, {
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react"
import {
  AppContextUpdate,
  useAppContext,
  useAppContextUpdate,
} from "../../AppContext"

type Props = {
  title: string
  buttonHandler?: () => void
}

function SomeComponent({ title, buttonHandler }: Props): ReactElement {
  const ctx = useAppContext()
  const ctxUpdate = useAppContextUpdate()
  return (
    <div className="SomeComponent">
      <h2>{title}</h2>
      <p>Some text</p>

      <button onClick={() => ctxUpdate.loadedStateHandler(true)}>
        Button Click
      </button>

      {ctx.loaded === true ? <p>Hallo Peter</p> : null}
    </div>
  )
}

export default SomeComponent
