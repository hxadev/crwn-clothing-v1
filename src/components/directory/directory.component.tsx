import React from "react";
import CategoryItem from "../category-item/category-item.component";
import Category from "../../interfaces/Category";

interface Props {
  categories: Array<Category>;
}

const Directory = ({ categories }: Props) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
