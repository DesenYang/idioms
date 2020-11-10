<?php


namespace app\controller;


use think\facade\Db;
use think\facade\View;

class Jj
{
    public function index()
    {
        $info = Db::table('tp_jiangjin')->where('id', 1)->find();
        View::assign('info',$info);
        return View::fetch('index');
    }
    public function getjiangjin () {
        $info = Db::table('tp_jiangjin')->where('id', 1)->find();

        return json(["info"=> $info,"code"=>1]);
    }

}