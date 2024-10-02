import React from 'react'
import './Card.css'
import Avatar from './Avatar'
import { FaCircle } from 'react-icons/fa'
import useGrouping from '../contexts/useGrouping';
import Done from '../assets/Done.svg';


const Card = ({ticket, user}) => {
    const {groupingId} = useGrouping();
  return (
    <div className="card">
        <div className="top card-section">
            <h5>{ticket.id}</h5>
            {groupingId!=1?<Avatar name={user.name} isAvailable={user.available}/>:<></>}
        </div>
        <div className="mid card-section">
            <h6>
                {ticket.title}
            </h6>
        </div>
        <div className="bottom card-section2">
            {ticket.tag.map((tag, index) => (
                <>
                    <div className="tag" key={index}>
                        <img src={Done} alt="Your image description" />
                    </div>
                    <div className="tag" key={index}>
                        <FaCircle style={{ color: '#ccc'}} />
                        <p key={index}>{tag}</p>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default Card