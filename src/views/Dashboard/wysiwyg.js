import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { EditorState } from 'draft-js';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, TextField, MenuItem, FormControl } from "@material-ui/core";
import axios from 'axios';
import { PUBLIC_API } from 'utils/API';
import Swal from 'sweetalert2'
import parser from 'html-react-parser';

const optionPost = [
  {
    value: 'blog',
    label: 'Blog',
  },
  {
    value: 'news',
    label: 'News',
  },
  {
    value: 'announcement',
    label: 'Announcement',
  },
  {
    value: 'event',
    label: 'Event',
  },
];

const ControlledEditor = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    title: '',
    img_url: '',
    tags: '',
    article: ''
  })
  const onChangeArticle = (event) => {
    event.preventDefault();
    setState({
      ...state,
      tags: event.target.value
    })
  }
  const handleSubmit = async () => {
    const dataToSend = {
      title: await state.title,
      img_url: await state.img_url,
      tags: await state.tags,
      author: props.author,
      userid: props.id,
      article: await state.article
    }
    try {
      const data = await axios.post(`${PUBLIC_API}/api/v1/posts`, dataToSend, {
        headers: {
          'authorization': `Bearer ${props.token}`
        }
      })
      if (data.status === 201) {
        Swal.fire(
          'Success!',
          'You are successfully create new article!',
          'success'
        )
        setTimeout(() => {
          history.push('/dashboard/articles')
        }, 2000)
      }
      console.log(data);
    } catch  (err) {
      console.log(err.message);
      Swal.fire(err.message)
    }
  }
    
  return (
    <>
    <CKEditor
        editor={ ClassicEditor }
        onInit={ editor => {
          editor.editing.view.change(writer => {
            writer.setStyle(
              "height",
              "400px",
              editor.editing.view.document.getRoot()
            )
            writer.setStyle(
              "padding",
              "20px",
              editor.editing.view.document.getRoot()
            )
          })
            console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log(data, "<<<< data editor")
            setState({
              article: data
            })
        } }
        onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
        } }
    />
    <div className="d-flex flex-column">
    <FormControl className="w-25 pb-3 pt-2">
      <TextField required id="standard-required" label="Title" onChange={(e) => setState({ ...state, title: e.target.value })} />
      <TextField required id="standard-required" label="Image URL" onChange={(e) => setState({ ...state, img_url: e.target.value })} />
      <br />
      <TextField
        id="standard-required"
        select
        value={state.tags}
        onChange={onChangeArticle}
        helperText="Please select your tags"
        className="pb-3"
      >
        {optionPost.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
    <Button className="mt-3 mb-3" style={{ width: "8%"}} variant="contained" color="primary" onClick={handleSubmit}>
      Save
    </Button>
    </div>
    {/* <div>
      {
        state.article ? parser(state.article) : "Loading...."
      }
    </div> */}
  </>
  )
}

export default ControlledEditor