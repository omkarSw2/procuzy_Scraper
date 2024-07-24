import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export default function App() {
  return (
    <div className="container flex justify-center  mt-5">
       
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Ex: React" />
        <Button type="submit">Submit</Button>
      </div>
    </div>
  );
}
