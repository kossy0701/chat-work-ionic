export const firebaseError = {
  'auth/invalid-email': {
    code: '認証情報ミス',
    message: 'メールアドレスのフォーマットが間違っています。'
  },
  'auth/wrong-password': {
    code: '認証情報ミス',
    message: 'メールアドレスかパスワードが間違っています。'
    },
  'auth/weak-password': {
    code: '脆弱性があります',
    password: ''
  },
  'auth/user-not-found': {
    code: '認証情報ミス',
    message: 'メールアドレスかパスワードが間違っています。'
  },
  'auth/email-already-in-use': {
    code: 'ユーザが存在しています',
    message: 'このメールアドレスを利用したユーザがすでに作成されています。'
  }
};
