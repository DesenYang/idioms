<?php


namespace app\controller;


use think\facade\Db;
use think\facade\Session;
use think\facade\View;

class Tiangandizhi
{
    public function index()
    {
        $info = Db::table('tp_td')->where('id', 1)->find();
        View::assign('info',$info);
        return View::fetch('index');
    }

    public function gettd()
    {
        $info = Db::table('tp_td')->select(1);
        return json($info);
    }

    public function settd()
    {
        if(Session::get("logined") == true) {
            if (input("?post.td"))
            {
                $info = Db::table('tp_td')->where("id",1)->update(["id"=>1,"info"=>input("post.td")]);
                return json(["code"=>0]);
            }
            return json(["code"=>2]);
        }
        return json(["code"=>0]);
    }
}