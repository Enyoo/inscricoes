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

class EsportesController extends Controller
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
        return Json::encode(Esportes::find()->all());
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
