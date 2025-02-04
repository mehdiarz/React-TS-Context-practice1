import Form from "./Form";
import Button from "./Button";
import Input from "./Input";

function AddTimer() {
  function handleSave(data: unknown) {
    const extracedData = data as { name: string; duration: string };

    console.log(extracedData);
  }

  return (
    <div>
    <Form onSave={handleSave}>
      <Input id="title" type="text" placeholder="Title" />
      <Input id="price" type="text" placeholder="Price" />
      <Button>Add Product</Button>
    </Form>
    </div>
  );
}

export default AddTimer;
