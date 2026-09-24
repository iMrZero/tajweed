import data from "../data/tajweed.json";

export const title: string[] = data.map((cate) => cate.category_title);
export const newData = [...data];
