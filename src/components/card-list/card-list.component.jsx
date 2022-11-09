import { Component } from 'react'
import './card-list.styles.css';
import Card from '../card/card.component';

//this.props accesses props! cool thanks react
class Cardlist extends Component
{

    render()
    {
        const { monsters } = this.props;

        return (
        <div className = {`card-list ${this.props.monsters}`}>
            {monsters.map(monster => {
                return <Card monster={monster} />;
                })}
        </div>
        )
    }
}

export default Cardlist;