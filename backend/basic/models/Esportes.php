<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "esportes".
 *
 * @property int $id
 * @property string|null $modalidade
 * @property string|null $vagas
 * @property string|null $tipo
 * @property string|null $dias
 * @property string|null $horarios
 * @property string|null $professor
 * @property string|null $nivel
 */
class Esportes extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'esportes';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'required'],
            [['id'], 'integer'],
            [['modalidade', 'tipo', 'dias', 'horarios', 'professor', 'nivel'], 'string', 'max' => 145],
            [['vagas'], 'string', 'max' => 45],
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
            'modalidade' => 'Modalidade',
            'vagas' => 'Vagas',
            'tipo' => 'Tipo',
            'dias' => 'Dias',
            'horarios' => 'Horarios',
            'professor' => 'Professor',
            'nivel' => 'Nivel',
        ];
    }
}
