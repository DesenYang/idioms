<?php


namespace app\controller;

use think\facade\Db;
use think\facade\View;
use think\facade\Session;


class Tukuadmin
{
    public function index()
    {
//        $user =  Db::table("tp_admin")->select();
////        return 'hello,' ."basepath ".$this->app->getBasePath();
//        return json($user);
//        $this->display("Index/index");

        if(Session::get("logined") == true) {
            if (input('?get.search')) {
                $info = Db::table('tp_tuku')->where("name", input('get.search'))->select();
            } else {
                $info = Db::table('tp_tuku')->select();
            }
            View::assign('info', $info);
            return View::fetch('index');
        } else {
            return View::fetch('404.html');
        }

    }

    public function getAllTuku()
    {
        $info = Db::table('tp_tuku')->select();
        return json($info);
    }


    public function getTukuById()
    {
        if(input("?get.id")){
            $info = Db::table('tp_tuku')->where("id",input("get.id"))->find();
            return json($info);
        }

    }

    public function gettuku()
    {
        $info = Db::table('tp_tuku')->where('id', 1)->find();
        return json($info);
    }

    public function searchtuku()
    {
        if (!input('?get.search')) {
            $info = Db::table('tp_tuku')->where('name', 1)->find();
            return json($info);
        }

    }

    public function addtuku()
    {
        if (Session::get("logined") == true && input('?post.info') && input('?post.name')) {
            $info = input('post.info');
            $name = input('post.name');
            $updateinfo = ['name' => $name, 'imgurl' => $info];
            $result = Db::name('tuku')->insert($updateinfo);

            if ($result > 0) {
                return json(["code" => 1, 'info' => $info]);
            } else {
                return json(["code" => 2]);
            }
        } else {
            return json(["code" => 0]);

        }
    }

    public function deltuku()
    {
        if (Session::get("logined") == true && input('?post.id')) {
            $info = input('post.id');
            $deldate = ["id" => $info];
            $result = Db::name('tuku')->delete($deldate);

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
