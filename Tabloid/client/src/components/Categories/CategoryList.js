import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { getAllCategories } from "../../modules/categoryManager";
import Category from "./Category";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then((category) => setCategories(category));
  }, []);

  return (
    <>
      <div>
        <Button onClick={(clickEvent) => navigate("/category/add")}>
          {" "}
          Add New Category{" "}
        </Button>
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </>
  );
}
