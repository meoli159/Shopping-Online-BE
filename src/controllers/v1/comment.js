// import { Comment } from '../../models/comment.js';

// export const getComment = async (req, res) => {
//   try {
//     const allComments = await Comment.find().populate('owner', 'name username created_at').populate('post', '_id');

//     if (!allComments.length > 0) {
//       return res.json({ message: 'There is no comment!!' });
//     }

//     return res.json(allComments);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error', error: error.message });
//   }
// };

// export const createComment = async (req, res) => {};
// export const updateComment = () => {};
// export const deleteComment = () => {};
