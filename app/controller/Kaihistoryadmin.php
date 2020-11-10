<?php


namespace app\controller;


use think\facade\Db;
use think\facade\Session;
use think\facade\View;

class Kaihistoryadmin
{
    public function index()
    {
//        $user =  Db::table("tp_admin")->select();
////        return 'hello,' ."basepath ".$this->app->getBasePath();
//        return json($user);
//        $this->display("Index/index");

        if (Session::get("logined") == true) {
            if (input("?get.search")) {
                $info = Db::table('tp_numbers')->where("qishu", input("get.search"))->select();
                View::assign('total', sizeof($info));
                View::assign('totalpage', 1);
                View::assign('currentpage', 1);
                View::assign('info', $info);
                return View::fetch('index');
            }
            $page = 1;
            if (input("?get.pageindex"))
                $page = input("get.pageindex");
            $info = Db::table('tp_numbers')->page($page, 10)->select();
            $total = Db::table("tp_numbers")->count();
            View::assign('total', $total);
            View::assign('totalpage', $total / 10);
            View::assign('currentpage', $page);
            View::assign('info', $info);
            return View::fetch('index');
        } else {
            return View::fetch('404.html');
        }

    }

    public function getHistory()
    {
        View::assign('name', 'ThinkPHP');
        return View::fetch('index');
    }
}