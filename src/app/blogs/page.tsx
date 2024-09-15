import BlogCard from '@/components/ui/BlogCard';
import { Blog } from '@/type';
import next from 'next';

import React from 'react';

const BlogsPage = async () => {
  const res= await fetch("http://localhost:5000/blogs",{
     cache:"no-store"
  }
    
  )
  const blogs = await res.json()
  return (
     <div className='w-[90%] mx-auto'>
    <h1 className="text-4xl text-center my-5 font-semibold">
      All Blogs From <span className="text-cyan-500">Blogiz</span>
    </h1>

    <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
      <i>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        esse at rem corporis odio perferendis temporibus !
      </i>
    </p>

    <div className='grid grid-cols-3 gap-4 my-5'>
         {
          blogs.map((blog:Blog)=> <BlogCard blog={blog} key={blog.id} />)
         }
    </div>
  </div>
  );
};

export default BlogsPage;