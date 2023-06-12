import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import gif from "../../imgs/02.gif"
import './Books.css'

const Books = () => {
  const booknameRef = useRef()
  const author_nameRef = useRef()
  const descriptionRef = useRef()
  const categoryRef = useRef()
  const imgRef = useRef()
  const urlRef = useRef()
  const dateRef = useRef()

  const handleBooks = (e) => {
    const bookname = booknameRef.current.value
    const author_name = author_nameRef.current.value
    const description = descriptionRef.current.value
    const category = categoryRef.current.value
    const img = imgRef.current.value
    const url = urlRef.current.value
    const date = dateRef.current.value

    const newBook = { bookname, author_name, description, category, img, url, date}

    fetch('http://localhost:5000/allBooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Data is Successfully added in database')
        }
        else {
          alert(data.status)
        }
      })

    e.preventDefault()
  }

  return (
    <section classbookname='booki'>
        <div classbookname="gridt">
          <div classbookname="objct">
          <Form style={{marginTop:"8vh", alignItems:'center'}}onSubmit={handleBooks}>
            <h1>Add Book</h1>
          <Form.Group classbookname="mb-3 mt-5" controlId="formBasicauthor_name">
            <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman' }}>Enter Bookname</Form.Label>
            <Form.Control classbookname='boxg'
              ref={booknameRef}
              type="text"
              required
              placeholder="Hei Hoo"
              style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
            />
        </Form.Group>
        <Form.Group classbookname="mb-3" controlId="formBasicauthor_name">
          <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman' }}>Enter  Author Name</Form.Label>
          <Form.Control classbookname='boxg'
            ref={author_nameRef}
            type="text"
            required
            placeholder="Mr X"
            style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
          />
        </Form.Group>
        <Form.Group classbookname="mb-3" controlId="formBasicauthor_name">
          <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman' }}>Book description</Form.Label>
          <Form.Control classbookname='boxg'
            ref={descriptionRef}
            type="text"
            required
            placeholder="Book description"
            style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Enter Book</Button>
          </Form>
          </div>
          <div classbookname="objct"><img classbookname="img-fluid" src={gif} alt="about"/></div>
        </div>
    </section>
  )
}
export default Books;