import React, {useEffect, useState} from "react";
import Index from "../../Utility/Network/Index";
import "./Data.css";

const renderData = (user: any) => {
  return (
    <div>
      {user.map((_element: any) => {
        return (
          <div key={_element.id} className="userData">
            <p>{_element.id}</p>
            <p>{_element.title}</p>
          </div>
        );
      })}
    </div>
  );
};

const User = () => {
  const [user, SetUser] = useState([]);
  const [showPerPage, setShowPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const _handleClick = (e: any) => {
    console.log("LN27", e.target.id);
    setCurrentPage(e.target.id);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await Index(
        `https://jsonplaceholder.typicode.com/todos`
      );
      SetUser(response);
    };
    fetchData();
  }, []);

  const data = [];
  for (let i = 1; i <= Math.ceil(user.length / showPerPage); i++) {
    data.push(i);
  }
  const lastPage = currentPage * showPerPage;
  const firstPage = lastPage - showPerPage;
  const currentItem = user.slice(firstPage, lastPage);
  const pageNumber = data.map((_number: any) => {
    return (
      <button key={_number} id={_number} onClick={_handleClick}>
        {_number}
      </button>
    );
  });

  return (
    <div>
      <p>Todo List</p>
      <p className="buttons">{pageNumber}</p>
      {renderData(currentItem)}
    </div>
  );
};
export default User;
