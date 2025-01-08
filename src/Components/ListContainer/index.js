const ListContainer = ({
    index,
    list,
    checked,
    onCheckboxChange,
    onItemMove,
    creatingList, // Add creatingList prop to manage the condition
  }) => {
    return (
      <div className="list-container">
        <div>
          {!creatingList ? (
            <>
              <input
                type="checkbox"
                checked={checked}
                onChange={onCheckboxChange}
              />
              <span>List {index + 1}</span>
            </>
          ) : (
            <span>
              List {index + 1} ({list.length} items)
            </span>
          )}
        </div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {list.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <div className="card">
                <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {item.name}
                </p>
                <p>{item.description}</p>
                {checked && creatingList && (
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => onItemMove(item)}
                  >
                    →
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ListContainer;
  