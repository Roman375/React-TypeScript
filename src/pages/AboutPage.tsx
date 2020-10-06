import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {

    const history = useHistory()

    return (
        <>
            <h1>Інформація</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Esse quae quo maiores veniam, quaerat repellat earum ipsa doloremque incidunt officiis,
            obcaecati eveniet doloribus officia vero perferendis tempore,
            sapiente aspernatur sint neque vitae voluptas minima modi vel!
            Nobis aut rem voluptas, maxime consequuntur delectus,
            eaque possimus dolorem perferendis, perspiciatis amet ipsum.
            </p>
            <button className='btn' onClick={() => history.push('/')}>До списку завдань</button>
        </>
    )
}