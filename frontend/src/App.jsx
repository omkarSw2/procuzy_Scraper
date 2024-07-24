import BlogCard from "./components/CustomeComponents/BlogCard";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export default function App() {
  const blogArray = [
    {
      id: 1,
      img: "https://placehold.co/500x250",
      icon: "https://placehold.co/250x250",
      title: "Mastering React: A Comprehensive Guide",
      author: "John Doe",
      date: "May 15, 2023",
      statusType: false,
      desc: "  Dive into the world of React and learn how to build powerful web applications.",
    },
    {
      id: 2,
      img: "https://placehold.co/500x250",
      icon: "https://placehold.co/250x250",
      title: "Unleashing the Power of Tailwind CSS",
      author: "John Doe",
      date: "May 15, 2023",
      statusType: true,
      desc: "Discover how Tailwind CSS can revolutionize your web development workflow.",
    },
    {
      id: 3,
      img: "https://placehold.co/500x250",
      icon: "https://placehold.co/250x250",
      title: "Exploring the Shadcn UI Library",
      author: "John Doe",
      date: "May 15, 2023",
      statusType: false,
      desc: "Learn how to leverage the Shadcn UI library to build stunning user interfaces.",
    },
    {
      id: 4,
      img: "https://placehold.co/500x250",
      icon: "https://placehold.co/250x250",
      title: "Optimizing Your Next.js Applications",
      author: "John Doe",
      date: "May 15, 2023",
      statusType: true,
      desc: "Discover best practices for building high-performance Next.js applications.",
    },
    {
      id: 5,
      img: "https://placehold.co/500x250",
      icon: "https://placehold.co/250x250",
      title: "Mastering TypeScript for React Development",
      author: "John Doe",
      date: "May 15, 2023",
      statusType: false,
      desc: "Enhance your React projects with the power of TypeScript.",
    },
    {
      id: 6,
      img: "https://placehold.co/500x250",
      icon: "https://placehold.co/250x250",
      title: "Building Accessible Web Applications",
      author: "John Doe",
      date: "May 15, 2023",
      statusType: true,
      desc: "Ensure your web applications are inclusive and accessible to all users.",
    },
  ];
  return (
    <>
      <div className="container flex justify-center  mt-5">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Ex: React" />
          <Button type="submit">Submit</Button>
        </div>
      </div>
      <div className=" mt-10 container">
        <div className="  grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogArray?.map((item) => (
            <BlogCard
              key={item.id}
              img={item.img}
              icon={item.icon}
              title={item.title}
              author={item.author}
              date={item.date}
              desc={item.desc}
              statusType={item.statusType}
            />
          ))}
        </div>
      </div>
    </>
  );
}
