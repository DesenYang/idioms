<?php
namespace app\controller;

use app\BaseController;
use think\facade\Db;
use think\facade\Request;
use think\facade\Session;
use think\facade\View;

class Idioms extends BaseController
{
    public function search()
    {
        $url = 'http://v.juhe.cn/chengyu/query?word=' . urlencode(input("get.word")) ."&dtype=json&key=a589b5fc927f8ee8a697ac1ede722de8" ;
        return json( file_get_contents($url));
    }

}
