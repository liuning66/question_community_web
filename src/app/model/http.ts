export class HTTPUrl {
    private static BASEURL = 'http://localhost:9999/';
    public static LOGIN = HTTPUrl.BASEURL + 'login'; // 登录
    public static REGISTER = HTTPUrl.BASEURL + 'reg'; // 注册
    public static VALIDATE_USERNAME = HTTPUrl.BASEURL + 'reg/' + 'validateUser'; // 验证用户名是否存在
    public static UPDATE_NICKNAME = HTTPUrl.BASEURL + 'update/' + 'nickname'; // 修改昵称
    public static PUBLISH_QUESTION = HTTPUrl.BASEURL +  'question'; // 发表问题
    public static GET_ALL_QUESTIONINFO = HTTPUrl.BASEURL + 'question/' + 'getAllQuestionInfoList'; // 获取问题列表
    public static GET_QUESTION_DETAIL = HTTPUrl.BASEURL + 'question/' + 'getQuestionDetail'; // 获取问题详情
    public static FOLLOW_QUESTION = HTTPUrl.BASEURL + 'question/' + 'follow'; // 关注与取消关注
    public static COMMENT_QUESTION = HTTPUrl.BASEURL + 'question/' + 'comment'; // 评论 回答的问题

    public static PUBLISH_ARTICLE = HTTPUrl.BASEURL +  'article/' + 'add' ; // 发表文章
    public static GET_ALL_ARTICLE = HTTPUrl.BASEURL +  'article/' + 'getAllArticle' ; // 获取所有文章
    public static OPERATE_ARTICLE = HTTPUrl.BASEURL + 'operate' ; // 收藏 点赞 取消点赞
    public static GET_ARTICLE_DETAIL = HTTPUrl.BASEURL +  'article/' + 'getArticleDetail' ; // 获取文章详情

    public static OPERATE_COMMENT = HTTPUrl.BASEURL + 'operate/' + 'comment' ; // 评论的赞和贬

    public static GET_NOTICE_LIST = HTTPUrl.BASEURL + 'notice/' + 'getNotice' ; // 获取通知列表


    public static GET_MY_QUESTION_LIST = HTTPUrl.BASEURL +  'user/' + 'getMyQuestionList' ; // 获取我的问题列表
    public static GET_MY_ARTICLE_LIST = HTTPUrl.BASEURL +  'user/' + 'getMyArticleList' ; // 获取我的文章列表
    public static GET_MY_COLLECTION_LIST = HTTPUrl.BASEURL +  'user/' + 'getMyCollectionList' ; // 获取我的收藏列表
    public static GET_MY_FOLLOW_LIST = HTTPUrl.BASEURL +  'user/' + 'getMyFollowList' ; // 获取我的关注列表




}