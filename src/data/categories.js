
const categories = [
  {
    categoryId: "Образование",
    title: "Образование",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorem expedita impedit nihil nostrum, odit pariatur libero dolores quis tempore provident? Odio suscipit dicta animi ex, aliquam quis repellat deleniti.`,
  },
  {
    categoryId: "Маркетинг",
    title: "Маркетинг",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorem expedita impedit nihil nostrum, odit pariatur libero dolores quis tempore provident? Odio suscipit dicta animi ex, aliquam quis repellat deleniti.`,
  },
  {
    categoryId: "Медицина",
    title: "Медицина",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorem expedita impedit nihil nostrum, odit pariatur libero dolores quis tempore provident? Odio suscipit dicta animi ex, aliquam quis repellat deleniti.`,
  },
 
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}