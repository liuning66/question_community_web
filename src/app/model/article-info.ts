export class ArticleInfo {
    id: string; // 问题id
    userId: string; // 用户id
    nickname: string; // 提问人昵称
    title: string; // 问题标题
    content: string; // 问题内容
    createTime: string; // 提问时间
    commentNum: number; // 评论数
    approvalNum: number; // 点赞数
    isPass: number; // 审核状态  1 待审核 2 审核通过 3 禁用
    collection: boolean; // 当前用户是否已关注 0 未关注 1 已关注
    approval: boolean; // 是否以点赞 0 未点赞 1 以点赞
}