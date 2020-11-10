<?php


namespace app\controller;


use think\facade\Db;
use think\facade\View;

class Preview
{

    public function index(){
        $info = Db::table('tp_numbers')->order("id des")->limit(1)->select();
        View::assign('data',$info);
        return View::fetch('preview');
    }
}