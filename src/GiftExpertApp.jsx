import { useState } from "react";

// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from './components/GifGrid'

import {AddCategory, GifGrid} from "./components"



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const addNewCategory = (newCategory => {

        const lowerCategories = categories.map(category => {return category.toLowerCase()})

        if(lowerCategories.includes(newCategory.toLowerCase())) return;

        setCategories([newCategory, ...categories]);
    })

    return (
        <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={addNewCategory}/>

        {
        categories.map(category => {
            return <GifGrid key={category} category={category}/>
        })
        }

        </>
    )
}