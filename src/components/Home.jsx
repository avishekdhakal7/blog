import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6">Discover Our Blog</h1>
      <p className="text-lg text-gray-700 max-w-lg text-center">
        Dive into a world of insightful articles, thought-provoking discussions, and the latest trends in various fields. Our blog is your go-to source for inspiration and knowledge.
      </p>

      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Featured Articles</h2>
        <ul className="space-y-6">
          <li className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Post 1" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">Exploring the Future of Technology</h3>
            <p className="text-gray-600 mt-2">An in-depth look at the innovations shaping our world.</p>
            <Link to="/post/1" className="text-blue-500 hover:underline mt-4 inline-block">Read more</Link>
          </li>
          <li className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Post 2" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">The Art of Mindful Living</h3>
            <p className="text-gray-600 mt-2">Discover techniques to enhance your mental well-being.</p>
            <Link to="/post/2" className="text-blue-500 hover:underline mt-4 inline-block">Read more</Link>
          </li>
          {/* <!-- Add more posts as needed --> */}
        </ul>
      </div>

      <Link to="/services" className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
        Start Your Journey
      </Link>
    </div>
  );
}