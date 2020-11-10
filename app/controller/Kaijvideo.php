<?php


namespace app\controller;


use think\facade\View;

class Kaijvideo
{
    public function index()
    {
//        $user =  Db::table("tp_admin")->select();
////        return 'hello,' ."basepath ".$this->app->getBasePath();
//        return json($user);
//        $this->display("Index/index");
        View::assign('name','ThinkPHP');
        return View::fetch('index');
    }
}