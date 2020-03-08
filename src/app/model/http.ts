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
}