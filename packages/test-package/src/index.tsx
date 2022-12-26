import * as React from 'react'
import styles from './styles.module.css'
import {counterStore} from 'store-module'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>
    {text}
    <button onClick={counterStore.add}>Add from test</button>
  </div>
}
