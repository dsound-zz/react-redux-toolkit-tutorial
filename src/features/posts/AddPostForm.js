import { useState } from "react"

const AddPostsForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  return <section></section>
}

export default AddPostsForm
