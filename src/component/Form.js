import React from 'react'

const Form = (props) => {
    return (
        <div className='form-container'>
            <form onSubmit={props.getWeather}>
                <input type="text" name='city' placeholder='city....' autoComplete='off'></input><br/>
                <input type="text" name='country' placeholder='country....' autoComplete='off'></input><br/>
                <button type='submit'>Click</button>
            </form>
        </div>
    )
}

export default Form
