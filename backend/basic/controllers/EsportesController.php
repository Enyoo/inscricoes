<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\Esportes;
use yii\helpers\Json;

class EsportesController extends ApplicationController
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'corsFilter' => [
                'class' => \yii\filters\Cors::class,
            ],
        ];
    }

    public function actionIndex()
    {
        $dados = Esportes::find()->all();
        return Json::encode($dados);
    }

    public function actionModalidades(){
        $dados = Esportes::find()->select(['modalidade'])->groupBy(['modalidade'])->all();
        return Json::encode($dados);
    }

    public function actionNiveis(){
        $post = Yii::$app->request->post();
        $dados = Esportes::find()->where(['modalidade'=>$post['modalidade']])->select(['nivel'])->groupBy(['nivel'])->all();
        return Json::encode($dados);
    }

    public function actionTipos(){
        $post = Yii::$app->request->post();
        $dados = Esportes::find()
            ->where([
                'nivel'=>$post['nivel'],
                'modalidade'=>$post['modalidade']
            ])
            ->select(['tipo'])
            ->groupBy(['tipo'])
            ->all();
        return Json::encode($dados);
    }

    public function actionDias(){
        $post = Yii::$app->request->post();
        $dados = Esportes::find()
            ->where([
                'nivel'=>$post['nivel'],
                'modalidade'=>$post['modalidade'],
                'tipo'=>$post['tipo']
            ])
            ->select(['dias'])
            ->groupBy(['dias'])
            ->all();
        return Json::encode($dados);
    }

    public function actionHorarios(){
        $post = Yii::$app->request->post();
        $dados = Esportes::find()
            ->where([
                'nivel'=>$post['nivel'],
                'modalidade'=>$post['modalidade'],
                'tipo'=>$post['tipo'],
                'dias'=>$post['dias'],
            ])
            ->select(['horarios'])
            ->groupBy(['horarios'])
            ->all();
        return Json::encode($dados);
    }

    public function actionImportar(){
        
        $modalidade = Yii::$app->request->post();
        foreach($modalidade as $post){
            
            $model = new Esportes();
            $model->id = $post['id'];
            $model->modalidade = $post['modalidade'];
            $model->vagas = $post['vagas'];
            $model->tipo = $post['tipo'];
            $model->dias = $post['dias'];
            $model->horarios = $post['horarios'];
            $model->professor = $post['professor'];
            $model->nivel = $post['nivel'];
            
            if(!$model->save()){
                var_dump($model->getErrors());
            }
        }
        return true;
    }
}
