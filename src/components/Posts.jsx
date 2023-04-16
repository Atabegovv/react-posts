import Post from './Post';
import { useState, useEffect } from 'react';

function Posts() {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((posts) => setPosts(posts))
			.catch((error) => setError(error.message))
			.finally(() => setIsLoading(false));
	}, []);

	//if (isLoading) {
	//	return <h1>Loading...</h1>
	//}

	//if (error) {
	//	return <h1> error: {error} </h1>;
	//}

	return (
		<div className="posts">
			<h2>POSTS</h2>
			<hr />

			{isLoading ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1> error: {error} </h1>
			) : (
				posts.map((post) => {
					return <Post key={post.id} {...post} />;
				})
			)}
		</div>
	);
}

export default Posts;
