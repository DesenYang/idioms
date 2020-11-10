<?php


namespace app\controller;


use think\facade\Db;
use think\facade\View;

class Jieshao
{
    public function index()
    {
        $info = Db::table('tp_admin_jieshao')->where('id', 1)->find();

        View::assign('info',$info);
         return View::fetch('index');
    }
}