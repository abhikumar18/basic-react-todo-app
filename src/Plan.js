function Plan(props) {
    return <>
     <li className="shadow p-2 my-2 col-sm-7">{props.value}</li>
     <div className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>{props.sendData(props.id)}}>X</div>
    </>
}

export default Plan;