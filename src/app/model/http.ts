export class HTTPUrl {
    private static BASEURL = 'http://localhost:9999/';
    public static LOGIN = HTTPUrl.BASEURL + 'login'; // 登录
    public static REGISTER = HTTPUrl.BASEURL + 'reg'; // 注册
    public static VALIDATE_USERNAME = HTTPUrl.BASEURL + 'reg/' + 'validateUser'; // 验证用户名是否存在
    public static UPDATE_NICKNAME = HTTPUrl.BASEURL + 'update/' + 'nickname'; // 修改昵称
}