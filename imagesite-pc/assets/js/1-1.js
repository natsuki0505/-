//logoの表示
console.log('ここまでプログラム通っています。');
$(window).on('load',function(){
  console.log('ここまでプログラム通っています。');
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  console.log('ここまでプログラム通っています。');
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  console.log('ここまでプログラム通っています。');
});