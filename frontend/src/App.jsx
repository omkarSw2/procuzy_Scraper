import BlogCard from "./components/CustomeComponents/BlogCard";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import React from "react";
import BlogLoadingCard from "./components/CustomeComponents/BlogLoadingCard";
import { useToast } from "@/components/ui/use-toast";
const getData = async (value) => {
  try {
    // console.log("inside get data", value);
    const res = await fetch(`${import.meta.env.VITE_BASE_API}/medium/${value}`);
    // if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    // console.log("data", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export default function App() {
  const [data, setData] = React.useState();
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const inputRef = React.useRef(null);
  const { toast } = useToast();

  const handleClick = async () => {
    if (value.length == 0) {
      toast({
        variant: "primary",
        title: "Field Cannot be empty",
        description: "Please Enter text to Search",
      });
    } else {
      try {
        setLoading(true);
        setError(false);
        const data = await getData(value);
        await setData(data);
        await setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        toast({
          variant: "destructive",
          title: "Something went Wrong",
          description: "Something went wrong!.",
        });
      }
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="container flex justify-center  mt-5">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            value={value}
            ref={inputRef}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ex: React"
            aria-label="Search"
          />

          <Button onClick={handleClick} type="submit">
            Submit
          </Button>
        </div>
      </div>
      <div className=" mt-10 container">
        {loading ? (
          <>
            <div className="  grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <BlogLoadingCard />
              <BlogLoadingCard />
              <BlogLoadingCard />
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="  grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data?.map((item, ind) => (
                <BlogCard
                  key={ind}
                  imgUrl={item.imgUrl}
                  categories={item.categories}
                  title={item.title}
                  author={item.author}
                  publicationDate={item.publicationDate}
                  url={item.url}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
