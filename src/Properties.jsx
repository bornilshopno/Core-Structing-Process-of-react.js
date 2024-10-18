import './Properties.css'
export default function (props) {
   
    const { name, age, profession } = props;
    return (
        <div className="box">
            <h5>Name: {name} </h5>
            
            <h6>Age: {age} <br />Profession: {profession}</h6>
        </div>
    )
}