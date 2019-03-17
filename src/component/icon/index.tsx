import React from 'react'
interface IProps {
    icon: string
}

export default ({ icon }: IProps) => {
    return (
        <svg className='icon' aria-hidden='true'>
            <use xlinkHref={`#${icon}`} />
        </svg>
    )
}
