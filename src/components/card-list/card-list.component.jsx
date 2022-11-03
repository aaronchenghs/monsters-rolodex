import { Component } from 'react'

//this.props accesses props! cool thanks react
class Cardlist extends Component
{

    render()
    {
        const { monsters } = this.props;
        return (
        <div>
            {monsters.map(monster => (
                <h1 key = {monster.id}>{monster.name}</h1>
            ))}
        </div>
        )
    }
}

export default Cardlist;