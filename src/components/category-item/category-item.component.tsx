import React from "react";
import "./category-item.styles.scss";
import Category from "../../interfaces/Category";

interface Props {
  category: Category;
}

const CategoryItem = ({ category }: Props) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
