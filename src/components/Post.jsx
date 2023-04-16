import './Post.css';

function Post(props) {
	const { id, userId, title, body } = props;

	return (
		<div className="post">
			<h3>
				{id} userId: {userId}
			</h3>
			<h2>{title}</h2>
			<p>{body}</p>
		</div>
	);
}

export default Post;
