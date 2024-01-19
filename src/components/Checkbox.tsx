import { FC, InputHTMLAttributes, ReactElement } from 'react'
import '../styles/checkbox.css'

type Props = React.DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Chekbox: FC<Props> = ({ onChange, checked }): ReactElement => {
  return (
    <label className='checkbox'>
      Sort by biggest ID
      <input type='checkbox' onChange={onChange} checked={checked}/>
      <span className='checkmark'></span>
    </label>
  )
}

export { Chekbox }
