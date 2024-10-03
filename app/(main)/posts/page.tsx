import PostTable from "@/components/post/PostTable";
import BackButton from "@/components/BackButton";
import { Pagination } from "@/components/ui/pagination";
import PostPagination from "@/components/post/PostPagination";
export const PostPage = () => {
  return (<>
    <BackButton text={"Go Back"} link={"/"} />
    <PostTable title={""}/>
    <PostPagination/>
    </>
  )
}
export default PostPage;
