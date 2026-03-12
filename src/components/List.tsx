function List() {
  let items = [
    "Crimsom Desert",
    "Persona 5 Royal",
    "Metal Gear Solid 3",
    "Doom Eternal",
    "Resident Evil 7",
    "Nier:Automata"
  ];

  return (

    <div>
      <ul class="list-group">
        {items.map((item) => (<li class="list-group-item" key={item}>{item}</li>))}
      </ul>
    </div>
  );
}

export default List;
