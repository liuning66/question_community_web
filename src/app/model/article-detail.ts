import { ArticleInfo } from './article-info';
import { QuestionComment } from './question-comment';

export class ArticleDetail {
    articleInfo: ArticleInfo;
    comments: Array<QuestionComment>;
}