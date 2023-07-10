
import './Card.css';
const Card = (props) => {
    const classes = 'card' + props.className;
    return (
        <div >
            <div className='Div1'></div>
            <div className={classes}>  {props.children}</div>
            <div className='Div2'></div></div>

    );
}
export default Card;