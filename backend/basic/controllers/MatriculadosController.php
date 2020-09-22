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
use app\models\Matriculados;
use yii\helpers\Json;

class MatriculadosController extends ApplicationController
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
        $matriculado = Matriculados::find()
        ->where([
            'nome'=>$post['nome'],
            'matricula'=>$post['matricula']
        ])
        ->select('id')
        ->all();

        $professor = Esportes::find()
            ->where([
                'nivel'=>$post['nivel'],
                'modalidade'=>$post['modalidade'],
                'tipo'=>$post['tipo'],
                'dias'=>$post['dias'],
                'horarios' => $post['horarios']
            ])
            ->select(['professor'])
            ->one();
        $model = new Matriculados();
        $model->id = ($matriculado) ? $matriculado : null;
        $model->nome = $post['nome'];
        $model->matricula = $post['matricula'];
        $model->esporte = $post['modalidade'];
        $model->tipo = $post['tipo'];
        $model->nivel = $post['nivel'];
        $model->professor = $professor;
        $model->horarios = $post['horarios'];
        $model->dias = $post['dias'];

        if(!$model->save()){

            return $model->getErrors();
        }
        return true;
    }
    
}
