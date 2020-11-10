<?php


namespace app\controller;


use think\facade\Db;
use think\facade\View;

class Riqiadmin
{
    public function index()
    {

        // $info = Db::table('tp_dongshi')->where('id', 1)->find();

        return View::fetch('index');
    }

    public function getdate(){
        if(input("?get.rannum")){

            // http://www.xjp888.net/queryLotteryDate.asp?rannum=

            $url = "http://www.xjp888.net/queryLotteryDate.asp?ym=" . input("get.ym"). "&rannum=".input("get.rannum") ;
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
            curl_setopt($ch, CURLOPT_TIMEOUT, 60);
             $result = curl_exec($ch);
            curl_close($ch);
            $resp_json = json_decode($result);
            return json($resp_json);
        }
    }
}