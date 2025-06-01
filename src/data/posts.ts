import { Post } from '../types';
import { Category } from '../types';

export const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of Web Development: What to Expect in 2025',
    slug: 'future-of-web-development-2025',
    excerpt: 'Exploring the cutting-edge technologies and trends that will shape web development in the coming years.',
    content: `
      <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look ahead to 2025, several key trends are poised to reshape how we build and interact with the web.</p>
      
      <h2>AI-Driven Development</h2>
      <p>Artificial intelligence is increasingly being integrated into development workflows, from code completion and bug detection to automated testing and optimization. By 2025, we can expect AI to become an indispensable part of a developer's toolkit, handling routine tasks and allowing developers to focus on more creative and complex problems.</p>
      
      <h2>WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) has been gaining traction as a way to run high-performance code in the browser. In the coming years, we'll likely see Wasm adoption accelerate, enabling more complex applications to run in the browser with near-native performance.</p>
      
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing—running server-side code closer to the user—is set to become a standard approach for web applications requiring low latency. Frameworks and platforms supporting edge computing will mature, making it easier for developers to deploy code to the edge without managing complex infrastructure.</p>
      
      <h2>Sustainability in Web Development</h2>
      <p>As awareness of technology's environmental impact grows, we'll see increased focus on building more sustainable websites and applications. This includes optimizing for energy efficiency, reducing data transfer, and considering the carbon footprint of our digital products.</p>
      
      <p>These trends represent just a glimpse of what's to come in the world of web development. By staying informed and adaptable, developers can position themselves at the forefront of these exciting changes.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technology',
    tags: ['Web Development', 'Future Tech', 'AI', 'WebAssembly'],
    author: {
      id: '1',
      name: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Senior Developer with 10+ years of experience in web technologies. Passionate about the future of the web and emerging technologies.'
    },
    publishedAt: '2025-01-15T08:00:00Z',
    readTime: 6
  },
  {
    id: '2',
    title: 'Mastering CSS Grid: Advanced Layout Techniques',
    slug: 'mastering-css-grid-advanced-techniques',
    excerpt: 'Take your CSS Grid skills to the next level with these advanced techniques for creating complex, responsive layouts.',
    content: `
      <p>CSS Grid has revolutionized how we approach web layouts, providing a powerful system for creating complex, two-dimensional designs. While many developers are familiar with the basics, mastering advanced Grid techniques can take your layouts to new heights.</p>
      
      <h2>Subgrid: The Next Evolution</h2>
      <p>With the introduction of subgrid, we can now create nested grids that inherit the track sizes of their parent grid. This solves many common layout problems and allows for more cohesive designs across nested components.</p>
      
      <h2>Mastering Grid Template Areas</h2>
      <p>Grid template areas provide a visual way to define your layout. When combined with media queries, they offer an intuitive approach to creating responsive designs that drastically reduce the complexity of your CSS.</p>
      
      <h2>Creating Responsive Layouts Without Media Queries</h2>
      <p>Using CSS Grid's auto-fit and minmax functions, we can create responsive layouts that adapt to available space without traditional media queries. This technique is particularly useful for card layouts and image galleries.</p>
      
      <h2>Combining Grid with Flexbox</h2>
      <p>Understanding when to use Grid versus Flexbox—and how to use them together—is crucial for modern CSS layouts. We'll explore practical examples of combining these powerful layout systems to solve real-world design challenges.</p>
      
      <p>By mastering these advanced CSS Grid techniques, you'll have the tools to create sophisticated layouts that are both visually impressive and structurally sound. The flexibility and control offered by CSS Grid continue to make it an essential skill for front-end developers.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'CSS',
    tags: ['CSS Grid', 'Web Design', 'Responsive Design', 'Frontend'],
    author: {
      id: '2',
      name: 'Maya Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'UI/UX Designer and CSS specialist. Loves creating beautiful, accessible, and responsive web experiences.'
    },
    publishedAt: '2025-01-10T10:30:00Z',
    readTime: 8
  },
  {
    id: '3',
    title: 'Building Performant React Applications in 2025',
    slug: 'building-performant-react-applications-2025',
    excerpt: 'Learn the latest strategies and best practices for optimizing React application performance.',
    content: `
      <p>As React continues to evolve and web applications become more complex, optimizing performance is more important than ever. In this post, we'll explore cutting-edge techniques for building blazing-fast React applications in 2025.</p>
      
      <h2>Leveraging Server Components</h2>
      <p>React Server Components have transformed how we think about component rendering. By moving certain components to the server, we can reduce client-side JavaScript, improve initial load times, and create more efficient data-fetching patterns.</p>
      
      <h2>Optimizing Render Performance</h2>
      <p>Understanding React's rendering behavior is crucial for performance optimization. We'll dive into advanced techniques like memoization, code splitting, and lazy loading to ensure your components render efficiently.</p>
      
      <h2>State Management Evolution</h2>
      <p>The landscape of state management in React has changed dramatically. We'll compare modern approaches, from built-in hooks to external libraries, and discuss how to choose the right solution for your specific performance needs.</p>
      
      <h2>Measuring and Monitoring Performance</h2>
      <p>You can't improve what you don't measure. Learn how to use React's built-in profiler, browser developer tools, and third-party monitoring solutions to identify and address performance bottlenecks in your applications.</p>
      
      <p>By implementing these performance optimization strategies, you can ensure your React applications not only meet but exceed user expectations for speed and responsiveness in 2025 and beyond.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'React',
    tags: ['React', 'Performance', 'JavaScript', 'Frontend'],
    author: {
      id: '3',
      name: 'Jordan Rivera',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'React Developer and Performance Enthusiast. Specializes in building fast, scalable web applications with modern JavaScript frameworks.'
    },
    publishedAt: '2025-01-05T09:15:00Z',
    readTime: 10
  },
  {
    id: '4',
    title: 'The Designer\'s Guide to Accessibility in 2025',
    slug: 'designers-guide-accessibility-2025',
    excerpt: 'Essential accessibility practices every designer should know to create inclusive digital experiences.',
    content: `
      <p>Accessibility is no longer an optional consideration but a fundamental aspect of good design. As we move forward in 2025, creating inclusive digital experiences is both an ethical imperative and increasingly a legal requirement.</p>
      
      <h2>Beyond WCAG: The Evolving Standards</h2>
      <p>While the Web Content Accessibility Guidelines (WCAG) remain important, accessibility standards continue to evolve. We'll explore the latest guidelines and how they're shaping design practices in 2025.</p>
      
      <h2>Designing for Cognitive Accessibility</h2>
      <p>Cognitive accessibility has gained increased attention in recent years. Learn how to design interfaces that accommodate users with various cognitive abilities, including attention, memory, and processing considerations.</p>
      
      <h2>The Role of AI in Accessible Design</h2>
      <p>Artificial intelligence is playing an increasingly important role in creating accessible experiences. From automated alt text to real-time adaptations, we'll examine how AI tools can enhance accessibility in your designs.</p>
      
      <h2>Testing and Validating Accessibility</h2>
      <p>A truly accessible design requires thorough testing. We'll cover modern approaches to accessibility testing, including automated tools, manual checklists, and user testing with people who have disabilities.</p>
      
      <p>By integrating these accessibility practices into your design process, you'll create products that not only reach a wider audience but also provide a better experience for all users, regardless of their abilities or how they interact with your digital content.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/7709085/pexels-photo-7709085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Design',
    tags: ['Accessibility', 'Inclusive Design', 'UX', 'Web Standards'],
    author: {
      id: '4',
      name: 'Taylor Kim',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Accessibility advocate and UX designer focused on creating inclusive digital experiences for users of all abilities.'
    },
    publishedAt: '2024-12-28T11:45:00Z',
    readTime: 7
  },
  {
    id: '5',
    title: 'The Rise of Headless CMS: Flexible Content Management for the Modern Web',
    slug: 'rise-of-headless-cms-modern-web',
    excerpt: 'How headless CMS architecture is transforming content management and enabling more flexible, powerful web experiences.',
    content: `
      <p>Content management systems have undergone a significant transformation in recent years with the rise of headless architecture. This approach, which separates the content backend from the presentation layer, is reshaping how we build and manage digital experiences.</p>
      
      <h2>Understanding Headless CMS</h2>
      <p>Unlike traditional CMS platforms where content and presentation are tightly coupled, a headless CMS provides content through APIs that can be consumed by any frontend. This separation offers unprecedented flexibility in how and where content is displayed.</p>
      
      <h2>Benefits for Development Teams</h2>
      <p>For developers, headless architecture brings numerous advantages, including technology freedom, improved performance, and easier maintenance. We'll explore how development workflows change and improve when adopting a headless approach.</p>
      
      <h2>Content Modeling Best Practices</h2>
      <p>Effective content modeling becomes even more critical in a headless environment. Learn strategies for structuring your content to maximize reusability across different channels and future-proof your content architecture.</p>
      
      <h2>Choosing the Right Headless CMS</h2>
      <p>With numerous headless CMS options available, selecting the right one can be challenging. We'll compare popular platforms and provide guidance on evaluating which solution best fits your specific project requirements.</p>
      
      <p>As digital experiences continue to expand beyond traditional websites to include mobile apps, IoT devices, digital signage, and more, the flexibility offered by headless CMS architecture will become increasingly valuable for organizations looking to deliver cohesive content across all touchpoints.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'CMS',
    tags: ['Headless CMS', 'Content Management', 'API', 'JAMstack'],
    author: {
      id: '5',
      name: 'Jamie Lee',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Content strategy consultant specializing in headless CMS implementations and structured content approaches.'
    },
    publishedAt: '2024-12-20T14:00:00Z',
    readTime: 9
  },
  {
    id: '6',
    title: 'Designing with Variable Fonts: Creative Typography for the Web',
    slug: 'designing-with-variable-fonts',
    excerpt: 'Explore the creative possibilities of variable fonts and how they\'re revolutionizing web typography.',
    content: `
      <p>Variable fonts represent one of the most significant advancements in web typography in recent years. This technology allows a single font file to behave like multiple fonts, creating new possibilities for designers while improving performance.</p>
      
      <h2>The Technical Foundation of Variable Fonts</h2>
      <p>Understanding how variable fonts work on a technical level helps designers leverage their full potential. We'll explore the concept of design axes and how they enable unprecedented flexibility in typographic design.</p>
      
      <h2>Performance Benefits</h2>
      <p>Beyond creative possibilities, variable fonts offer significant performance advantages. By reducing the number of font files needed, they can substantially improve page load times and overall user experience.</p>
      
      <h2>Creative Applications</h2>
      <p>From subtle responsive adjustments to dramatic animated effects, variable fonts enable new creative expressions in web design. We'll showcase innovative examples and provide techniques for incorporating variable fonts into your projects.</p>
      
      <h2>Implementing Variable Fonts in Production</h2>
      <p>We'll cover practical implementation details, including browser support considerations, fallback strategies, and optimization techniques to ensure your variable font usage is both creative and practical.</p>
      
      <p>As support for variable fonts continues to improve and more type foundries release variable versions of their typefaces, we're entering an exciting new era for web typography where performance and creative expression can truly go hand in hand.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/13458336/pexels-photo-13458336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Typography',
    tags: ['Variable Fonts', 'Typography', 'Web Design', 'Performance'],
    author: {
      id: '2',
      name: 'Maya Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'UI/UX Designer and CSS specialist. Loves creating beautiful, accessible, and responsive web experiences.'
    },
    publishedAt: '2024-12-15T10:00:00Z',
    readTime: 6
  }
];

export const categories: Category[] = [
  { name: 'Football' },
  { name: "Basketball" },
  { name: "Tennis" },
  { name: "Cycling" },
  { name: "Volleyball" },
  { name: "MMA" },
  { name: "Sports" }
]

export type Tag = string;

// Export the tag array with valid string values
export const tags: string[] = [
  "sports",
  "athletics",
  "fitness",
  "health",
  "training",
  "competition",
  "performance",
  "teamwork",
  "sports-news",
  "football",
  "champion",
  "league",
  "soccer",
  "basketball",
  "baseball",
  "tennis",
  "cricket",
  "golf",
  "boxing",
  "mma",
  "rugby",
  "swimming",
  "esports",
  "olympics",
  "world-cup",
  "champions-league",
  "premier-league",
  "nba",
  "nfl",
  "ufc",
  "wimbledon",
  "super-bowl",
  "game-analysis",
  "player-profile",
  "match-recap",
  "injury-report",
  "transfer-news",
  "behind-the-scenes",
  "fan-opinion",
  "sports-tech",
  "fantasy-sports",
  "betting",
  "youth-sports",
  "women-in-sports",
  "african-football",
  "european-leagues",
  "american-sports",
  "local-heroes"
];


export const getPost = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getRecentPosts = (count: number = 4): Post[] => {
  return [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};

export const getFeaturedPosts = (count: number = 3): Post[] => {
  // For demonstration, we'll just use the first 3 posts as featured
  return posts.slice(0, count);
};

export const getRelatedPosts = (currentPostId: string, count: number = 3): Post[] => {
  const currentPost = posts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  return posts
    .filter(post => post.id !== currentPostId)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, count);
};

export const getPostsByCategory = (category: string): Post[] => {
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getPostsByTag = (tag: string): Post[] => {
  return posts.filter(post => post.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
};

export const getAllCategories = (): Category[] => {
  return categories
};

export const getAllTags = (): Tag[] => {
  return tags;
};