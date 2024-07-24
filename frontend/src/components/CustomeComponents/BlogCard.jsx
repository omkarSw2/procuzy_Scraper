import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LockKeyholeIcon } from "lucide-react";

function BlogCard({ img, title, author, icon, date, desc, statusType }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
      <Link className="absolute inset-0 z-10">
        <span className="sr-only">Read more</span>
      </Link>
      <img
        src={img}
        alt="Blog Post Image"
        width={600}
        height={400}
        className="h-48 w-full object-cover transition-all group-hover:scale-105"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-2">
          {title}
        </h3>
        <div className=" mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Avatar className="w-8 h-8 ">
            <AvatarImage src={icon} />
            <AvatarFallback>{author}</AvatarFallback>
          </Avatar>
          <span>{author}</span>
          <Separator orientation="vertical" className="h-4 " />
          <span>{date}</span>
          {statusType && (
            <>
              <Separator orientation="vertical" className="h-4 " />
              <LockKeyholeIcon className="size-5 lg:size-4" />
            </>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  statusType: PropTypes.bool.isRequired,
};
