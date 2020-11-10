<?php


namespace app\controller;

use think\facade\Db;
use think\facade\View;


class Ds
{
    public function index()
    {
//        $user =  Db::table("tp_admin")->select();
////        return 'hello,' ."basepath ".$this->app->getBasePath();
//        return json($user);
//        $this->display("Index/index");
        $info = Db::table('tp_dongshi')->where('id', 1)->find();
        View::assign('info',$info);
        return View::fetch('index');
    }
}
