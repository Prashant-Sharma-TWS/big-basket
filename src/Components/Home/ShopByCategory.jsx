import React from "react";
import { ArrowDown } from "../../Elements/Element";
import {
  CategoryDiv,
  ShopByCategorySection,
  ShopSection,
} from "../../Elements/NavbarElement";
import categoryData from "../../category.json";

export const ShopByCategory = () => {
  return (
    <ShopByCategorySection className="nav-category cats">
      <div className="shop-by-category">
        <span>SHOP BY CATEGORY</span>
        <ArrowDown top="-3px" />
        <TopCategory categoryData={categoryData} />
      </div>
      <div className="offers">
        <i></i>
        <span>OFFERS</span>
      </div>
      <div className="bb-specialty">
        <i></i>
        <span>BB SPECIALTY</span>
      </div>
    </ShopByCategorySection>
  );
};

export const Shop = () => {
  return (
    <>
      <ShopSection>
        <div>
          <span>SHOP</span>
          <ArrowDown top="-3px" />
        </div>
        <div className="favour"></div>
        <TopCategory categoryData={categoryData} />
      </ShopSection>
    </>
  );
};

const TopCategory = ({ categoryData }) => {
  return (
    <CategoryDiv className="show-category">
      <ul className="top_category">
        {categoryData.topcats.map((topItem, index) => (
          <li className="top_category_item" key={topItem.top_category.name}>
            {topItem.top_category.name}
            {/* {index == 0 && <SubCategory subItems={topItem.sub_cats} />} */}
            <SubCategory subItems={topItem.sub_cats} />
          </li>
        ))}
      </ul>
    </CategoryDiv>
  );
};

const SubCategory = ({ subItems }) => {
  return (
    <ul className="sub_category">
      {subItems.map((subItem, index) => (
        <li className="sub_category_item" key={subItem.sub_category[0]}>
          {subItem.sub_category[0]}
          {/* {index == 0 && <SubSubCategory subSubItems={subItem.cats} />} */}
          <SubSubCategory subSubItems={subItem.cats} />
          <PopularSearchTerms PopularSearchItems={subItem.search_term} />
        </li>
      ))}
    </ul>
  );
};

const SubSubCategory = ({ subSubItems }) => {
  return (
    <ul className="sub_sub_category">
      {subSubItems.map((subSubItem) => (
        <li className="sub_sub_category_item" key={subSubItem.cat[0]}>
          {subSubItem.cat[0]}
        </li>
      ))}
    </ul>
  );
};

const PopularSearchTerms = ({ PopularSearchItems }) => {
  return (
    <ul className="popular_search">
      <li className="popular_search_title">Popular Searches</li>
      {PopularSearchItems.map((searchTerm) => (
        <li className="popular_search_item" key={searchTerm.display_term}>
          {searchTerm.display_term}
        </li>
      ))}
    </ul>
  );
};
