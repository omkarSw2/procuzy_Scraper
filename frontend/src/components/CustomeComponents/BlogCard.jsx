import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import PropTypes from "prop-types";
import { Badge } from "@/components/ui/badge";

function BlogCard({ imgUrl, title, author, categories, publicationDate, url }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={imgUrl}
          alt="Blog Post Image"
          width={600}
          height={400}
          className="h-48 w-full object-cover transition-all group-hover:scale-105"
        />
      </a>

      <div className="p-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-2">
            {title}
          </h3>
        </a>
        <div className=" mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Avatar className="w-8 h-8 ">
            <AvatarImage
              src={
                "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
              }
            />
            <AvatarFallback>{author}</AvatarFallback>
          </Avatar>
          <span>{author}</span>
          <Separator orientation="vertical" className="h-4 " />
          <span>{publicationDate}</span>
        </div>
        <div className=" mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground line-clamp-1">
          {categories.map((item, ind) => (
            <Badge
              key={ind}
              variant="secondary"
              className="group-hover:text-primary hover:cursor-pointer">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
