import React from 'react'
import Input from './Input'
import Button from './Button'
import { Formik } from 'formik';
import * as Yup from 'yup';

const Form = () => {
  return (
    <>
        <Formik 
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
        onSubmit={(values, {resetForm, setSubmitting}) => {
          console.log(values);
          resetForm()
        }}
        >

        {
          ({values, errors, handleChange, handleSubmit, handleReset, dirty, touched, isSubmitting}) => (
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

        </Formik>
    </>
    // <form action="" onSubmit={onSubmit}>
        // {/* <Input type="search" placeholder='Search'/>
        // <Button type='submit' text="Search"/>
        // <select id="cars" name="cars">
        //     <option value="breakfast">Breakfast</option>
        //     <option value="lunch">Lunch</option>
        //     <option value="dinner">Dinner</option>
        //     <option value="snack">Snack</option>
        //     <option value="teatime">Teatime</option>
        // </select> */}
    // </form>
  )
}

export default Form