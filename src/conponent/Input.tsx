import React from 'react';
import { useForm } from 'react-hook-form';

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
  margin: "0 0 0 auto",
  display: "block"
};

// 入力フォームに応じた型
// 今回は名前とメールアドレスを扱う
type Input = {
  name: string;
  tel: number;
  jyusyo: string;
  mail: string;
};

const InputField:React.FC = () => {
  // 初期化
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Input>();

　　 // フォーム送信ボタンを押された時の処理
  const onsubmit = (data: Input) => {
    console.log(data);
    reset();   // フォームに入力した値をリセット
  };
  // nameを監視
  // 入力のたびに更新される
  console.log(watch('name'));
  console.log(watch('tel'));
  console.log(watch('jyusyo'));
  console.log(watch('mail'));
  return (
  
    <form onSubmit={handleSubmit(onsubmit)}>
      
      
      <table border={1} align="center">
        <tr>
          <td>
          名前：<input  
              {...register('name', {
                  required: '名前を入力してください',
                  minLength: { value: 0, message: `0文字以上にしてね` },
            maxLength: { value: 30, message: '名前は30文字以内で入力してください。' }
              })}        
      />
      <p style={{ color: "red" }}>{errors.name?.message}</p> {/* エラー表示 */}
        </td>
      <td>
        電話番号：<input
              type="text"
              {...register('tel',{
                required: '必ず入力してください。',
                pattern: {
                  value: /^0[789]0-[0-9]{4}-[0-9]{4}$/,
                  message: '正しい電話番号を入力してください。'
                }
              })}
/>
          <p style={{ color: "red" }}>{errors.tel?.message}</p> {/* エラー表示 */}
        </td>
      <td>  
        メールアドレス：<input
              type="text"
              {...register('mail',{
                required: '必ず入力してください。',
                pattern: {
                  value: /^^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                  message: '正しいメールアドレスを入力してください。'
                }
              })}
/>
        
          <p style={{ color: "red" }}>{errors.mail?.message}</p> {/* エラー表示 */}
        </td>
      <td>
        住所1：<input  
              {...register('jyusyo', {
                  required: '住所を入力してください',
                  minLength: { value: 0, message: `0文字で入力にしてください` },
                  maxLength: { value: 45, message: 'タイトルは45文字で入力してください。' }
              })}
      />  
          <p style={{ color: "red" }}>{errors.jyusyo?.message}</p> {/* エラー表示 */}
        </td>
        </tr>
        <tr >
          <td></td>
          <td></td>
          <td></td>
          <td><button style={style} >登録</button></td>
        </tr>

      </table>
      
    </form>
  )
}

export default InputField;