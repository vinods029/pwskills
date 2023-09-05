function List(props){
    const listItems = props.map((item)=>{
        <li>key={item}</li>
    })
    return (
        <ul>
            {listItems}
        </ul>
    )

}

<List items={["One","two","three"]} />