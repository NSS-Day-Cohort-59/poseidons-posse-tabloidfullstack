import React, { useState, useEffect } from "react";
import { getAllCategories } from "../modules/categoryManager";
import Category from "./Category";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((category) => setCategories(category));
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </div>
  );
}
