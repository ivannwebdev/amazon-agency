import { FC, ReactElement } from 'react'
import '../styles/arrow.css'

type Props = {
  direction: 'right' | 'left'
  onClick: () => void
}

const Arrow: FC<Props> = ({ direction, onClick }): ReactElement => (
  <div
    onClick={onClick}
    className='arrow-container'
  >
    <div className={`arrow ${direction}`} />
  </div>
)

export { Arrow }
