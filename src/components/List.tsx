function List() {
  let items = [
    "Patatas Fritas",
    "Patatas Bravas",
    "Patatas Deluxe",
    "Patatas Asadas",
    "Patatas Gajo",
    "Patatas"
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
