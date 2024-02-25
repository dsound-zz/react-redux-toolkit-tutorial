import PostsList from "./features/posts/PostsList"
import AddPostsForm from "./features/posts/AddPostForm"

function App() {
  return (
    <main className='app'>
      <AddPostsForm />
      <PostsList />
    </main>
  )
}

export default App
