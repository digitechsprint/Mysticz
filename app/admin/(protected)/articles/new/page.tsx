import ArticleForm from '../ArticleForm';
import { createArticleAction } from '../../../actions';

export default function NewArticlePage() {
  return (
    <div>
      <h1 className="m-0 mb-6 text-xl font-semibold text-neutral-100">New article</h1>
      <ArticleForm action={createArticleAction} />
    </div>
  );
}
