import '../styles-sheet/Data.css'

const Data = (props) => {
    return(
        <div className="data-box" >
            <img className="img-box"
                  src={require(`../images/${props.pic}.png`)}
                  alt={` Pic of  ${props.name}`}/>
            <div className="testimony">
                <p className="user-name" > <strong>{props.name}</strong> in {props.country}</p>
                <p className="user-occupation">{props.occupation} at <strong>{props.company}</strong></p>
                <p className="user-testimony">"{props.testimony}"</p>
            </div>
        </div >
    )
}


export default Data