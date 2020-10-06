import React, { useRef, useState } from 'react'

interface ITodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<ITodoFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)

    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)

    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = ''
            // setTitle('')
        }
    }

    return (
        <div className='input-field mt2'>
            <input
                ref={ref}
                // onChange={changeHandler}
                // value={title}
                type='text'
                id='title'
                placeholder='Введіть нове завдання'
                onKeyPress={keyPressHandler}
            >
            </input>
            <label htmlFor='title' className='active'>Введіть нове завдання</label>
        </div>
    )
}