import React from 'react'
import Input from './Input'
import Button from './Button'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Form = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  console.log(query);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(query);
    getData();
  }
  return (
    <>

      <form action="" onSubmit={handleSubmit}>
        <Input type="search" placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type='submit' text="Search"/>
        <select id="mealTypes" name="mealTypes" onChange={(e) => setMeal(e.target.value)}>
          {
            mealTypes?.map((item,index) =>{
              return <option key={index} value={item.toLowerCase()}>
                {item}
              </option>
            })
          }
        </select>
      </form>
        {/* <Formik 
        initialValues={{
          searchInput: "",
          mealType: "Breakfast",
        }}
        validationSchema={
          Yup.object({
            searchInput: Yup.string().required("Please enter input"),
            mealType: Yup.string()
          })
        }
        onSubmit= {(values, {resetForm}) => {
          console.log(values.searchInput, values.mealType);
          const handleSubmit = async (search) => {
            const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${values.mealType}`;
            const result = await axios.get(url);
            const data = result.data.hits
            console.log(data);
          };
          resetForm()
          handleSubmit(values.searchInput)
        }}
        >
        {
          ({values, errors, handleChange, handleSubmit, touched}) => (
            <form onSubmit={handleSubmit}>
              <input type="search" placeholder="Search" value={values.searchInput} name="searchInput" onChange={handleChange} />

              <select value={values.mealType} name="mealType" onChange={handleChange}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="teatime">Teatime</option>
              </select>

              <Button type='submit' text="Search" />
              <br />
              {
                errors.searchInput && touched.searchInput && (
                    <div>
                    {errors.searchInput}
                    </div>
                )
              }
            </form>



          )}
        </Formik> */}

    </>
  )
}

export default Form