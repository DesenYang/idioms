<?php


namespace app\controller;


use think\facade\Db;
use think\facade\Session;
use think\facade\View;

class Jiangjinadmin
{
    public function index()
    {
        if(Session::get("logined") == true) {
        $info = Db::table('tp_jiangjin')->where('id', 1)->find();
        View::assign('info',$info);
        return View::fetch('index');

        } else {
            return View::fetch('404.html');
        }
    }

    public function getjiangjin()
    {
        $info = Db::table('tp_jiangjin')->where('id', 1)->find();

        return json($info);
    }

    public function setjiangjin()
    {
        if (Session::get("logined") == true && input('?post.info')) {
            $info = input('post.info');
            $updateinfo = ['id' => 1, 'info' => $info];
            $result = Db::name('jiangjin')->update($updateinfo);

            if ($result > 0) {
                return json(["code" => 1, 'info' => $info]);
            } else {
                return json(["code" => 2]);
            }
        } else {
            return json(["code" => 0]);

        }
    }
}