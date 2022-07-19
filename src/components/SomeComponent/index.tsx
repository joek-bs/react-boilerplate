import React, {
  ReactElement,
  useCallback,
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
  // const [textVisible, setTextVisible] = useState(false)
  const ctx = useAppContext()
  const ctxUpdate = useAppContextUpdate()

  return (
    <div className="SomeComponent">
      <h2>{title}</h2>
      <p>Some text</p>

      <section onClick={() => ctxUpdate.loadedStateHandler(!ctx.loaded)}>
        Button Click
      </section>

      {ctx.loaded === true ? <p>Hallo Peter</p> : null}
    </div>
  )
}

export default SomeComponent
