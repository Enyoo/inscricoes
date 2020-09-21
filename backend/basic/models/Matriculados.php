<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "matriculados".
 *
 * @property int $id
 * @property string|null $DATAeHORA
 * @property string|null $nome
 * @property string|null $matricula
 * @property string|null $esporte
 * @property string|null $tipo
 * @property string|null $nivel
 * @property string|null $professor
 * @property string|null $horarios
 * @property string|null $dias
 */
class Matriculados extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'matriculados';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'required'],
            [['id'], 'integer'],
            [['DATAeHORA', 'nome', 'matricula', 'esporte', 'tipo', 'nivel', 'professor', 'horarios', 'dias'], 'string', 'max' => 145],
            [['id'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'DATAeHORA' => 'Dat Ae Hora',
            'nome' => 'Nome',
            'matricula' => 'Matricula',
            'esporte' => 'Esporte',
            'tipo' => 'Tipo',
            'nivel' => 'Nivel',
            'professor' => 'Professor',
            'horarios' => 'Horarios',
            'dias' => 'Dias',
        ];
    }
}
