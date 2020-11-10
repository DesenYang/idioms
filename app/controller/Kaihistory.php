<?php


namespace app\controller;


use think\facade\Db;
use think\facade\View;

class Kaihistory
{
    public function index()
    {
//        $user =  Db::table("tp_admin")->select();
////        return 'hello,' ."basepath ".$this->app->getBasePath();
//        return json($user);
//        $this->display("Index/index");
        if (input("?get.year")) {
            $info = Db::table("tp_numbers")->where('createtime', 'like', input("get.year") . '%')->select();
            View::assign('info', $info);
            return View::fetch('index');
        }  else {
            $info = Db::table('tp_numbers')->select();
            View::assign('info', $info);
            return View::fetch('index');

        }
    }
    public function getHistory () {
        if (input("?get.year")) {
            $info = Db::table("tp_numbers")->where('createtime', 'like', input("get.year") . '%')->select();
            return json($info);
        }  else {
            $info = Db::table('tp_numbers')->select();
            return json($info);
        }
    }
}