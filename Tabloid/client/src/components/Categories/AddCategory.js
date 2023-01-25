import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { postNewCategory } from "../../modules/categoryManager";

export const AddCategoryForm = () => {
  const [userInput, setUserInput] = useState({ name: "" });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const copy = { ...userInput };
    copy[event.target.name] = event.target.value;
    setUserInput(copy);
  };

  const handleSaveButtonClick = (event) => {
    event.preventDefault();
    const newCategory = {
      Name: userInput.name,
    };
    if (userInput.name) {
      postNewCategory(newCategory).then(() => navigate("/category"));
    } else {
      alert("Please enter a new category name");
    }
  };

  return (
    <form>
      <h2>Add New Category</h2>
      <fieldset>
        <div>
          <label>Category Name</label>
          <input
            required
            autoFocus
            name="name"
            type="text"
            placeholder="Enter New Cateogry"
            value={userInput.name}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <Button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>
        {" "}
        Save
      </Button>
    </form>
  );
};
