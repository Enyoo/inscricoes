<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "alunos".
 *
 * @property int $idalunos
 * @property string|null $nome
 * @property string|null $matricula
 * @property string|null $curso
 */
class Alunos extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'alunos';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['idalunos'], 'required'],
            [['idalunos'], 'integer'],
            [['nome', 'matricula', 'curso'], 'string', 'max' => 145],
            [['idalunos'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idalunos' => 'Idalunos',
            'nome' => 'Nome',
            'matricula' => 'Matricula',
            'curso' => 'Curso',
        ];
    }
}
