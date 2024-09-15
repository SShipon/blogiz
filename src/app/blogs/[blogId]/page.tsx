import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId{
    params:{
        blogId: string,
    }
}

const BlogDetailsPage = async ({params}:BlogId) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
        cache:"no-store"
    })
    const blog = await res.json()
    console.log(blog)
    console.log(params)
    return (
        <div>
           < BlogDetails blog={blog}/> 
        </div>
    );
};

export default BlogDetailsPage;