import { useTimersContext } from "../store/timers-context";

import Form from "./Form";
import Button from "./Button";
import Input from "./Input";

function AddTimer() {

  const { addTimers } = useTimersContext()

  function handleSave(data: unknown) {
    const extracedData = data as { name: string; duration: string };

    addTimers({name: extracedData.name, duration: Number(extracedData.duration)})
  }

  return (
    <div>
      <Form
        onSave={handleSave}
        className="flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md"
      >
        <Input
          id="name"
          type="text"
          placeholder="Name"
          className="bg-slate-600 outline-none rounded-md w-full"
        />
        <Input
          id="duration"
          type="text"
          placeholder="Duration"
          className="bg-slate-600 outline-none rounded-md w-full"
        />
        <Button className="p-2 bg-slate-900 rounded-md text-slate-100">
          Add Timer
        </Button>
      </Form>
    </div>
  );
}

export default AddTimer;
