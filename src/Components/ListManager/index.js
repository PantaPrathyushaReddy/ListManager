// import React, { useState, useEffect } from "react";
// import Loader from "../Loader";
// import FailureView from "../FailureView";
// import ListContainer from "../ListContainer";

// const ListManager = () => {
//   const [lists, setLists] = useState([[], []]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(false);
//   const [checkedLists, setCheckedLists] = useState([false, false]);
//   const [creatingList, setCreatingList] = useState(false);
//   const [newListItems, setNewListItems] = useState([]);
//   const [itemOriginList, setItemOriginList] = useState({});
//   const [newListIndex, setNewListIndex] = useState(null);

//   useEffect(() => {
//     fetch("https://apis.ccbp.in/list-creation/lists")
//       .then((response) => response.json())
//       .then((data) => {
//         const list1 = data.lists.filter((item) => item.list_number === 1);
//         const list2 = data.lists.filter((item) => item.list_number === 2);
//         setLists([list1, list2]);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError(true);
//         setLoading(false);
//       });
//   }, []);

//   const handleCheckboxChange = (index) => {
//     const newCheckedLists = [...checkedLists];
//     newCheckedLists[index] = !newCheckedLists[index];
//     setCheckedLists(newCheckedLists);
//   };

//   const handleCancel = () => {
//     setCreatingList(false);
//     setCheckedLists([false, false]);
//     setNewListItems([]);
//     setNewListIndex(null);
//   };

//   const handleUpdate = () => {
//     const newListNumber = lists.length + 1;
//     const newList = newListItems;

//     const updatedLists = [...lists];

//     if (newListIndex !== null) {
//       updatedLists.splice(newListIndex, 0, newList);
//     } else {
//       updatedLists.push(newList);
//     }

//     setLists(updatedLists);
//     setCheckedLists([false, false]);
//     setNewListItems([]);
//     setCreatingList(false);
//     setNewListIndex(null);
//   };

//   const handleItemMove = (item, fromIndex) => {
//     setItemOriginList((prev) => ({ ...prev, [item.id]: fromIndex }));
//     setNewListItems((prevItems) => [...prevItems, item]);
//     const updatedLists = [...lists];
//     updatedLists[fromIndex] = updatedLists[fromIndex].filter(
//       (i) => i.id !== item.id
//     );
//     setLists(updatedLists);

//     if (newListIndex === null) {
//       const firstSelectedIndex = checkedLists.indexOf(true);
//       const secondSelectedIndex = checkedLists.lastIndexOf(true);
//       const middleIndex = Math.max(firstSelectedIndex, secondSelectedIndex) + 1;
//       setNewListIndex(middleIndex);
//     }
//   };

//   const handleItemMoveBack = (item, currentListIndex) => {
//     const originalListIndex = itemOriginList[item.id];
//     const updatedNewListItems = newListItems.filter((i) => i.id !== item.id);
//     setNewListItems(updatedNewListItems);

//     const updatedLists = [...lists];
//     updatedLists[originalListIndex] = [
//       ...updatedLists[originalListIndex],
//       item,
//     ];
//     setLists(updatedLists);
//   };

//   const handleCreateList = () => {
//     if (checkedLists.filter((checked) => checked).length === 2) {
//       setCreatingList(true);
//       const firstSelectedIndex = checkedLists.indexOf(true);
//       const secondSelectedIndex = checkedLists.lastIndexOf(true);
//       const middleIndex = Math.max(firstSelectedIndex, secondSelectedIndex) + 1;
//       setNewListIndex(middleIndex); 
//     } else {
//       setErrorMessage(true);
//     }
//   };

//   // Render the lists UI
//   const renderLists = () => {
//     if (loading) return <Loader />;
//     if (error) return <FailureView onRetry={() => window.location.reload()} />;
//     return (
//       <div className="lists">
//         {lists.map((list, index) => (
//           <ListContainer
//             key={index}
//             index={index}
//             list={list}
//             checked={checkedLists[index] || false}
//             onCheckboxChange={() => handleCheckboxChange(index)}
//             onItemMove={(item) => handleItemMove(item, index)}
//             onItemMoveBack={(item) => handleItemMoveBack(item, index)}
//             // Move back to original list (left arrow)
//             creatingList={creatingList}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="App">
//       <h1 style={{ textAlign: "center" }}>List Creation</h1>
//       {creatingList ? (
//         <div className="create-list-view">
//           <div className="lists">
//             {renderLists()}
//             <div className="list-container">
//               <span>
//                 List {lists.length + 1} ({newListItems.length})
//               </span>
//               <ul style={{ listStyleType: "none", padding: 0 }}>
//                 {newListItems.map((item) => (
//                   <li key={item.id} style={{ marginBottom: "10px" }}>
//                     <div className="card">
//                       <p style={{ fontWeight: "bold", fontSize: "18px" }}>
//                         {item.name}
//                       </p>
//                       <p>{item.description}</p>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <p
//                           onClick={() => handleItemMoveBack(item)}
//                           style={{ cursor: "pointer" }}
//                         >
//                           ←
//                         </p>
//                         <p
//                           onClick={() => handleItemMoveBack(item)}
//                           style={{ cursor: "pointer" }}
//                         >
//                           →
//                         </p>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               width: "100%",
//             }}
//           >
//             <button
//               onClick={handleCancel}
//               style={{
//                 marginRight: "10px",
//               }}
//               className="btn btn-cancel"
//             >
//               Cancel
//             </button>
//             <button onClick={handleUpdate} className="btn btn-update">
//               Update
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="all-lists-view">
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <button onClick={handleCreateList} className="btn btn-update">
//               Create a new list
//             </button>
//           </div>

//           {errorMessage && (
//             <p style={{ color: "red", textAlign: "center" }}>
//               * You must select exactly 2 lists to create a new list.
//             </p>
//           )}
//           {renderLists()}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListManager;

import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import FailureView from "../FailureView";
import ListContainer from "../ListContainer";

const ListManager = () => {
  const [lists, setLists] = useState([[], []]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [checkedLists, setCheckedLists] = useState([false, false]);
  const [creatingList, setCreatingList] = useState(false);
  const [newListItems, setNewListItems] = useState([]);
  const [itemOriginList, setItemOriginList] = useState({});
  const [newListIndex, setNewListIndex] = useState(null);

  useEffect(() => {
    fetch("https://apis.ccbp.in/list-creation/lists")
      .then((response) => response.json())
      .then((data) => {
        const list1 = data.lists.filter((item) => item.list_number === 1);
        const list2 = data.lists.filter((item) => item.list_number === 2);
        setLists([list1, list2]);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleCheckboxChange = (index) => {
    const newCheckedLists = [...checkedLists];
    newCheckedLists[index] = !newCheckedLists[index];
    setCheckedLists(newCheckedLists);
  };

  const handleCancel = () => {
    setCreatingList(false);
    setCheckedLists([false, false]);
    setNewListItems([]);
    setNewListIndex(null);
  };

   const handleUpdate = () => {
    const newList = newListItems;

    const updatedLists = [...lists];

    if (newListIndex !== null) {
      updatedLists.splice(newListIndex, 0, newList);
    } else {
      updatedLists.push(newList);
    }

    setLists(updatedLists);
    setCheckedLists([false, false]);
    setNewListItems([]);
    setCreatingList(false);
    setNewListIndex(null);
   };

  const handleItemMove = (item, fromIndex) => {
    setItemOriginList((prev) => ({ ...prev, [item.id]: fromIndex }));
    setNewListItems((prevItems) => [...prevItems, item]);
    const updatedLists = [...lists];
    updatedLists[fromIndex] = updatedLists[fromIndex].filter(
      (i) => i.id !== item.id
    );
    setLists(updatedLists);

    if (newListIndex === null) {
      const selectedIndices = checkedLists
        .map((checked, index) => (checked ? index : -1))
        .filter((index) => index !== -1);
      if (selectedIndices.length === 2) {
        const middleIndex = Math.floor(
          (selectedIndices[0] + selectedIndices[1]) / 2
        );
        setNewListIndex(middleIndex);
      }
    }
  };

  const handleItemMoveBack = (item, currentListIndex) => {
    const originalListIndex = itemOriginList[item.id];
    const updatedNewListItems = newListItems.filter((i) => i.id !== item.id);
    setNewListItems(updatedNewListItems);

    const updatedLists = [...lists];
    updatedLists[originalListIndex] = [
      ...updatedLists[originalListIndex],
      item,
    ];
    setLists(updatedLists);
  };

   const handleCreateList = () => {
    const selectedIndices = checkedLists
      .map((checked, index) => (checked ? index : -1))
      .filter((index) => index !== -1);

    if (selectedIndices.length === 2) {
      setCreatingList(true);
      const middleIndex = Math.floor((selectedIndices[0] + selectedIndices[1]) / 2) + 1;
      setNewListIndex(middleIndex);
    } else {
      setErrorMessage(true);
    }
  };

  const renderLists = () => {
    if (loading) return <Loader />;
    if (error) return <FailureView onRetry={() => window.location.reload()} />;
    return (
      <div className="lists">
        {lists.map((list, index) => (
          <ListContainer
            key={index}
            index={index}
            list={list}
            checked={checkedLists[index] || false}
            onCheckboxChange={() => handleCheckboxChange(index)}
            onItemMove={(item) => handleItemMove(item, index)}
            onItemMoveBack={(item) => handleItemMoveBack(item, index)}
            creatingList={creatingList}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>List Creation</h1>
      {creatingList ? (
        <div className="create-list-view">
          <div className="lists">
            {renderLists()}
            <div className="list-container">
              <span>
                List {lists.length + 1} ({newListItems.length})
              </span>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {newListItems.map((item) => (
                  <li key={item.id} style={{ marginBottom: "10px" }}>
                    <div className="card">
                      <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                        {item.name}
                      </p>
                      <p>{item.description}</p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p
                          onClick={() => handleItemMoveBack(item)}
                          style={{ cursor: "pointer" }}
                        >
                          ←
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <button
              onClick={handleCancel}
              style={{
                marginRight: "10px",
              }}
              className="btn btn-cancel"
            >
              Cancel
            </button>
            <button onClick={handleUpdate} className="btn btn-update">
              Update
            </button>
          </div>
        </div>
      ) : (
        <div className="all-lists-view">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={handleCreateList} className="btn btn-update">
              Create a new list
            </button>
          </div>

          {errorMessage && (
            <p style={{ color: "red", textAlign: "center" }}>
              * You must select exactly 2 lists to create a new list.
            </p>
          )}
          {renderLists()}
        </div>
      )}
    </div>
  );
};

export default ListManager;
