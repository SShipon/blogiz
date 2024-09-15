import { Blog } from "@/type";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

export default function LatestBlogs({blogs}:{blogs:Blog[]}) {
 
  return (
    <div className="w-[90%] mx-auto">
        <h1 className="text-4xl text-center my-5 font-semibold">Latest Blogs From <span className="text-cyan-500">Blogiz</span></h1>

        <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
          <i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas esse at rem corporis odio perferendis temporibus !</i>
        </p>

        <div className="grid grid-cols-2 gap-4">
          {
            blogs.slice(0, 2).map(blog => <LatestBlogCard key={blog.id} blog={blog} />)
          }
        </div>
        <div className="grid grid-cols-3 gap-4">
          {
            blogs.slice(2, 5).map(blog => <BlogCard key={blog.id} blog={blog} />)
          }
        </div>
    </div>
  )
}
