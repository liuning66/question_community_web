export class QuestionInfo {
    id: string;
    userId: string;
    nickname: string;
    title: string;
    content: string;
    questionTime: string; // 提问时间
    commentNum: number; // 评论数
    approve: number; // 点赞数
    status: number; // 状态
    isPass: number;
    hasBestAnswer: boolean; // 是否已有最佳回答
    favorite: boolean;
}