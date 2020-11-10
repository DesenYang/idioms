<?php
namespace app\controller;

use app\BaseController;
use think\facade\Db;
use think\facade\Request;
use think\facade\Session;
use think\facade\View;

class Index extends BaseController
{
    public function index()
    {
//        $user =  Db::table("tp_admin")->select();
////        return 'hello,' ."basepath ".$this->app->getBasePath();
//        return json($user);
//        $this->display("Index/index");
        $info = Db::table('tp_numbers')->order("id des")->limit(1)->select();
        View::assign('data',$info);

        return View::fetch('index');
    }

}
