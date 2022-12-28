import { addNewPost, getAllPosts, updatePost, deletePost } from '../blmControllers/postControler';
import { addNewCategory, getAllCategory, updateCategory } from '../blmControllers/categoriesControler';
import {LoginRequired, register, login} from '../blmControllers/userControler';

const routes = (app) => {
    app.route('/api/v1/blog')
    .get(LoginRequired, getAllPosts)

    .post( LoginRequired, addNewPost);

    app.route('/api/v1/blog/:blogID')
    .put( LoginRequired, updatePost)

    .delete(LoginRequired,  deletePost);

    app.route('/api/v1/category')
    .get(LoginRequired,  getAllCategory)
    .post( LoginRequired, addNewCategory);

    app.route('/api/v1/category/:categoryID')
    .put(LoginRequired,  updateCategory);

    app.route('/auth/register')
    .post(register)

    app.route('/auth/login')
    .post(login);
}

export default routes;