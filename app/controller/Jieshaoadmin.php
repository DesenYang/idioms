<?php


namespace app\controller;

use think\facade\Db;
use think\facade\View;
use think\facade\Session;


class Jieshaoadmin
{
    public function index()
    {
//        $user =  Db::table("tp_admin")->select();
////        return 'hello,' ."basepath ".$this->app->getBasePath();
//        return json($user);
//        $this->display("Index/index");

        if(Session::get("logined") == true) {
            $info = Db::table('tp_admin_jieshao')->where('id', 1)->find();

            View::assign('info', $info);
            return View::fetch('index');

        } else {
            return View::fetch('404.html');
        }
    }

    public function getjieshao()
    {
        $info = Db::table('tp_admin_jieshao')->where('id', 1)->find();

        return json(["info"=>$info,"code"=>1]);
    }

    public function setjieshao()
    {
        if (Session::get("logined") == true && input('?post.info')) {
            $info = input('post.info');
            $updateinfo = ['id' => 1, 'info' => $info];
            $result = Db::name('admin_jieshao')->update($updateinfo);

            if ($result > 0) {
                return json(["code" => 1, 'info' => $info]);
            } else {
                return json(["code" => 2]);
            }
        } else {
            return json(["code" => 0]);

        }
    }
}
