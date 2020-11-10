<?php


namespace app\controller;


use think\facade\View;

class Jiangjin
{
    public function index()
    {
        View::assign('name','ThinkPHP');
        return View::fetch('index');
    }
}