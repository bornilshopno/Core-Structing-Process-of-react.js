import './EffectNested.css'

export default function NestedEffects({user}){
const {name,email}= user;

    return (
        <div className='boxy'>
           
            <h6>Name :{name}  </h6><hr/>
            <p><i>Email ID:{email}</i></p>
        </div>
    )
}