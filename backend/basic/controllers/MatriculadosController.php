<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\Matriculados;
use yii\helpers\Json;

class MatriculadosController extends Controller
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
        $resposta = Matriculados::find()->all();

        return Json::encode($resposta);
    }

    public function actionSalvar(){
        $post = Yii::$app->request->post();
        if(empty($post['nome'])){
            return 'Falha ao salvar dados';
        }

        $model = new Matriculados();
        $model->nome = $post['nome'];
        $model->matricula = $post['matricula'];
        $model->esporte = $post['modalidade'];
        $model->tipo = $post['tipo'];
        $model->nivel = $post['nivel'];
        $model->professor = $post['professor'];
        $model->horarios = $post['horarios'];
        $model->dias = $post['dias'];

        if(!$model->save()){
            return false;
        }
        return true;
    }
    
}
