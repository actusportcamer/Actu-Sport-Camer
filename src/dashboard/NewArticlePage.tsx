import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Save, X } from 'lucide-react';
import Button from '../components/ui/Button';
import { getAllCategories, getAllTags } from '../data/posts';
import { toast, ToastContainer } from 'react-toastify';
import { ID } from 'appwrite';
import { databases } from '../AppwriteConfig'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, useNavigate } from 'react-router-dom';

export default function NewArticlePage() {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    f_title: '',
    f_excerpt: '',
    f_content: '',
    category: '',
    tags: [] as string[],
    publishedAt: new Date().toISOString()
  });
  const [img, setImg] = useState(null)
  const navigate = useNavigate()

  function calculateReadTime(text: string, wordsPerMinute: number = 200): string {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  }

  function generateSlug(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')     // Remove special characters
      .replace(/\s+/g, '-')         // Replace spaces with hyphens
      .replace(/-+/g, '-');         // Replace multiple hyphens with single
  }

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagToggle = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await databases.createDocument(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
        ID.unique(),
        {
          ...formData,
          slug: generateSlug(formData.title),
          coverImage: img,
          readTime: calculateReadTime(formData.content)
        }
      );
      if (response) {
        toast.success('Article saved successfully!');
      } else {
        toast.error('Failed to save the article.');
      }
      setTimeout(() => {
        navigate('/dashboard/articles')
      }, 3000); // 2000ms = 2 seconds
    } catch (error) {
      toast.error('Failed to save article');
    }
  };

  return (
    <>
      <Helmet>
        <title>New Article | Actu Sport Camer</title>
      </Helmet>

      <div>

<ToastContainer />
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Create New Article</h1>
          <div className="flex space-x-3">
            <Link to='/dashboard/articles' className='sm:inline hidden'>
              <Button variant="outline" className="flex items-center">
                <X size={18} className="mr-2" />
                Cancel
              </Button>
            </Link>
            <Button variant="primary" className="flex items-center" type='submit' >
              <Save size={18} className="mr-2" />
              Save Article
            </Button>
          </div>
        </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
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
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description of the article"
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <ReactQuill
                  id="content"
                  value={formData.content}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, content: value }))
                  }
                  className="w-full h-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your article content here..."
                  required
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
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select a category</option>
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
                  required
                  onChange={handleImage} />

                   {img && (
                        <img src={img} width={200} />
                     )}

              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="f_title" className="block text-sm font-medium text-gray-700 mb-1">
                  French Title
                </label>
                <input
                  type="text"
                  id="f_title"
                  name="f_title"
                  value={formData.f_title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter article title"
                  required
                />
              </div>

              <div>
                <label htmlFor="f_excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                  French Excerpt
                </label>
                <textarea
                  id="f_excerpt"
                  name="f_excerpt"
                  value={formData.f_excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description of the article"
                  required
                />
              </div>

              <div>
                <label htmlFor="f_content" className="block text-sm font-medium text-gray-700 mb-1">
                  French Content
                </label>
                <ReactQuill
                  id="f_content"
                  value={formData.f_content}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, f_content: value }))
                  }
                  className="w-full h-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your article content here..."
                  required
                />
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
                    onClick={() => handleTagToggle(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      formData.tags.includes(tag)
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