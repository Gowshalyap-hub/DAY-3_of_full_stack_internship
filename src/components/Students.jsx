function Students({name, age}){ // props is an object ir receives all the parametrs from the parent component
    //like name,age etc...
    return(
        // <div>
        //     <h1>name:"gowshalya"</h1>
        //     <h1>age: 10</h1>
        // </div>

        // <div>                                            props
        //     <h2>name: {props.name}</h2>
        //     <h2>age: {props.age}</h2>
        // </div>

        <div>
            <h2>name: {name}</h2>           // destructuring
            <h2>age: {age}</h2>
        </div>
    )
}
export default Students;