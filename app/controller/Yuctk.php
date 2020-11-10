<?php


namespace app\controller;


use think\facade\View;

class Yuctk
{
    public function index()
    {
        View::assign('name','ThinkPHP');
        return View::fetch('index');
    }


}