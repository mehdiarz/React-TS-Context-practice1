import Form from './components/Form'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  function handleSave(data: unknown) {
    const extracedData = data as { title: string; price: string }

    console.log(extracedData)
  }

  return (
    <div>
      <Form onSave={handleSave}>
        <Input id='title' type='text' placeholder='Title' />
        <Input id='price' type='text' placeholder='Price' />
        <Button>Add Product</Button>
      </Form>
    </div>
  )
}

export default App
