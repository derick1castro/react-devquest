import { useState } from 'react'

const Form = (props) => {
    return (
        <>
        <form>
            <div>
                <label htmlFor="image">Endereço da imagem da carta</label>
                <input type="text" id='image' name='image'/>
            </div>
            <input type="submit" />
        </form>
        </>
    )

}

export default Form