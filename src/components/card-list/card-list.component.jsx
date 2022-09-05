import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = (props) => {
        const { monsters } = props;
        return  (
            <div>
                <div className='card-list'>
                    {monsters.map((monster) => {
                        const { name, id, email } = monster;
                            return (
                                <Card name={name} id={id} email={email} key={id}/>
                            )
                        })}    
                </div>
            </div>
          )
    }

export default CardList