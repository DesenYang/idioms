<?php
namespace app\controller;

use app\BaseController;
use think\facade\Db;
use think\facade\Request;
use think\facade\Session;
use think\facade\View;

class Index extends BaseController
{
    public function index()
    {
        if(Session::get("logined") == true){

            if(input("?get.search")) {
                $info = Db::table('tp_numbers')->where("qishu",input("get.search"))->select();
                View::assign('total', sizeof($info));
                View::assign('totalpage', 1);

                View::assign('info', $info);
                return View::fetch('index');
            }
            else{
                $info = Db::table('tp_numbers')->select();
                $total = Db::table("tp_numbers")->count();
                View::assign('total', $total);
                View::assign('info', $info);
                return View::fetch('index');
            }

        }else{
            View::assign('name','ThinkPHP');
            return View::fetch('login');
        }
    }

    public function login (Request  $request) {
        if(input('?post.username') && input("?post.password")) {
            $username =  input('post.username');
            $password =   input('post.password');
            $realinfo  = Db::table("tp_admin")->where("id",1)->find();
            $name = $realinfo["username"];
            $pass = $realinfo["password"];
            if($username == $name &&  password_verify($password,$pass)){
                Session::set("logined",true);
                return redirect("/");
            }else{
//                return password_hash("123",PASSWORD_DEFAULT);
                return $username ."::".$password .": 登录错误";
            }
        }else{
            return "camsji: 登录错误";
        }
    }
    public function resetpass () {
        if(Session::get("logined") == true){
            if( input("?post.password")) {
                $pass = input("post.password");
                Session::set("logined",false);
                Db::table("tp_admin")->update(["id"=>1,"password"=>password_hash($pass,PASSWORD_DEFAULT)]);
                return json(["code"=>1]);
            }else{
                return json(["code"=>2]);
            }
        }
        return json(["code"=>0]);
    }
    public function logout () {
        Session::set("logined",false);
        return json(["code"=>1]);

    }

}
