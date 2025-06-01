import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Save, X } from 'lucide-react';
import Button from '../components/ui/Button';
import { getAllCategories, getAllTags } from '../data/posts';
import { toast, ToastContainer } from 'react-toastify';
import { ID } from 'appwrite';
import { databases } from '../AppwriteConfig'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditPage() {

    const {blogId} = useParams()
    const navigate = useNavigate()
    const [blogdetail, setBlogdetail] = useState({
        tags: []
      });

      const toggleTag = (tag) => {
        setBlogdetail(prev => ({
          ...prev,
          tags: prev.tags.includes(tag)
            ? prev.tags.filter(t => t !== tag) // Remove tag
            : [...prev.tags, tag],             // Add tag
        }));
      };
      
      const removeTag = (indexToRemove) => {
        setBlogdetail((prev) => ({
          ...prev,
          tags: prev.tags.filter((_, index) => index !== indexToRemove),
        }));
      };
    
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: [] as string[],
    publishedAt: new Date().toISOString()
  });
  const [img, setImg] = useState(null)

  useEffect(() => {
    const getBlogdetail = async () => {
        try {
          const response = await databases.getDocument(
            '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
            '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
            blogId // Replace with your Document ID
          );
          setBlogdetail(response); // Returns an array of document
  
        } catch (error) {
          console.error("Error fetching collection:", error);
        }
      }
      if(blogId) {
        getBlogdetail();
      }
    }, [blogId]);

  const CLOUD_NAME = 'dtsblzjzn';
  const UPLOAD_PRESET = 'actu_sport_camer';

  const handleImage = async (e) => {
      const file = e.target.files[0];
      if (file) {
          try {
              const thumbnail = await uploadImg(file);
              setImg(thumbnail);
          } catch (err) {
              toast.error(err.message);
          } finally {;
          }
      }
  };

  const uploadImg = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );

        if (!response.ok) {
            throw new Error('Image upload failed');
        }

        const data = await response.json();
        return data.secure_url;
    } catch (err) {
        throw new Error('Failed to upload image: ' + err.message);
    }
};

  const availableTags = getAllTags();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogdetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = {
        title: blogdetail.title,
        excerpt: blogdetail.excerpt,
        content: blogdetail.content,
        category: blogdetail.category,
        tags: blogdetail.tags,
        coverImage: img || blogdetail.img
    };

    try {
        // Update blog post document in Appwrite
        await databases.updateDocument(
            '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
            '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
            blogId,
            updatedData
        );
        toast.success('Blog Updated successfully!!!');
        setTimeout(() => {
          navigate('/dashboard/articles')
        }, 3000); // 2000ms = 2 seconds
    } catch (err) {
        toast.error('Failed: ' + err.message);
    } finally {
    }
};

  
  return (
    <>
      <Helmet>
        <title>Edit Article | Actu Sport Camer</title>
      </Helmet>

      <div>

<ToastContainer />
        <form onSubmit={handleUpdate} className="space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Edit Article</h1>
          <div className="flex space-x-3">
           <Link to='/dashboard/articles' className='sm:inline hidden'>
              <Button variant="outline" className="flex items-center">
                <X size={18} className="mr-2" />
                Cancel
              </Button>
            </Link>
            <Button variant="primary" className="flex items-center" type='submit' >
              <Save size={18} className="mr-2" />
              Update Article
            </Button>
          </div>
        </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="space-y-4">

                    {blogdetail.coverImage && (
                         <img src={blogdetail.coverImage} className='mx-auto' width={200} />
                     )}

                     <div className="flex flex-wrap gap-2 mb-4">
                        {blogdetail.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                          >
                            {tag}
                            <button
                              type="button"
                              className="ml-2 text-red-500"
                              onClick={() => removeTag(index)}
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name='title'
                  value={blogdetail.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter article title"
                  required
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt
                </label>
                <textarea
                   id="excerpt"
                  name="excerpt"
                  value={blogdetail.excerpt}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description of the article"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <ReactQuill
                  id="content"
                  value={blogdetail.content}
                  onChange={(value) =>
                    setBlogdetail((prev) => ({ ...prev, content: value }))
                  }
                  className="w-full h-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your article content here..."
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Article Settings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={blogdetail.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">{blogdetail.category}</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Cycling">Cycling</option>
                  <option value="Volleyball">Volleyball</option>
                  <option value="MMA">MMA</option>
                  <option value="Sports">Sports</option>
                </select>
              </div>

              <div>
                <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Image URL
                </label>
                <input type='file'
                  accept='image/*'
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleImage} />

                   {img && (
                        <img src={img} width={200} />
                     )}

              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {availableTags.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      blogdetail.tags.includes(tag)
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}