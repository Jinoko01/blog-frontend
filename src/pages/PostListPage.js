import HeaderContainer from "../container/common/HeaderContainer";
import PaginationContainer from "../container/posts/PaginationContainer";
import PostListContainer from "../container/posts/PostListContainer";

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
