import React from 'react'
import { useFormik } from 'formik'

const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }

  if (!values.category) {
    errors.category = 'Required'
  } else if (values.category.length > 20) {
    errors.category = 'Must be 20 characters or less'
  }

  if (!values.price) {
    errors.price = 'Required'
  } else if (typeof values.price !== 'number') {
    errors.price = 'Invalid price'
  }

  if (!values.description) {
    errors.description = 'Required'
  }

  return errors
}

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      price: 0,
      description: '',
    },
    validate,
  })

  return (
    <div className="row">
      <h3 className="text-dark d-flex justify-content-center p-3">AGREGAR PRODUCTO</h3>
      <form
        className="d-flex justify-content-center bg-form col"
        id="form"
        onSubmit={formik.handleSubmit}
      >
        <div className="p-3">
          {/* Nombre */}
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Nombre
            </label>
            <input
              aria-describedby="nameHelp"
              className="form-control"
              id="name"
              name="name"
              type="text"
              values={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          </div>
          {/* //Categoria */}
          <div className="mb-3">
            <label className="form-label" htmlFor="category">
              Categoria
            </label>
            <input
              className="form-control"
              id="category"
              name="category"
              type="text"
              values={formik.values.category}
              onChange={formik.handleChange}
            />
            {formik.errors.category ? <div>{formik.errors.category}</div> : null}
          </div>
          {/* Precio */}
          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Precio
            </label>
            <input
              aria-describedby="priceHelp"
              className="form-control"
              id="price"
              min="0"
              name="price"
              type="number"
              values={formik.values.price}
              onChange={formik.handleChange}
            />
            {formik.errors.price ? <div>{formik.errors.price}</div> : null}
          </div>
          {/* Descripcion */}
          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Descripción
            </label>
            <textarea
              aria-label="With textarea"
              className="form-control"
              values={formik.values.description}
              onChange={formik.handleChange}
            />
            {formik.errors.description ? <div>{formik.errors.description}</div> : null}
          </div>
          {/* Boton Agregar */}
          <div className="d-grid gap-2 col-12 mx-auto">
            <button className="btn btn-primary" type="submit">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
