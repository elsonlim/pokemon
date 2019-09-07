import React from 'react';

import Stat from '../text/Stat';
import Title from '../text/Title';
import Types from '../type/Types';

import './Card.css';

function Card({info}) {
    return (
        <div className="Card">
            <img className="CardImage" alt={info.name.english} src={require(`../pokemon/${info.id}.png`)} />
            <Title name={info.name.english} />
            <Types types={info.type} />
            <Stat name="HP" value={info.base.HP} />
            <Stat name="Attack" value={info.base.HP} />
            <Stat name="Defence" value={info.base.Defence} />
            <Stat name="SpAttack" value={info.base.SpAttack} />
            <Stat name="SpDefence" value={info.base.SpDefence} />
            <Stat name="Speed" value={info.base.Speed} />
        </div>
    )
}

export default Card;
