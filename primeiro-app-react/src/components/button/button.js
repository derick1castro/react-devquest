import './button.css'

const sayHello = () => {
    console.log('olá')
}

 const Button = (props) => {
     return <button className='btn' onClick={sayHello}>{props.label}</button>
 }

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button