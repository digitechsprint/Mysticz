import { notFound } from 'next/navigation';
import { getArticleById } from '@/lib/data';
import ArticleForm from '../ArticleForm';
import { updateArticleAction } from '../../../actions';

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticleById(id);
  if (!article) notFound();

  const action = updateArticleAction.bind(null, id);

  return (
    <div>
      <h1 className="m-0 mb-6 text-xl font-semibold text-neutral-100">Edit article</h1>
      <ArticleForm article={article} action={action} />
    </div>
  );
}
