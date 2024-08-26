/* export const TypingBubble = () => (
  <div class="flex items-center">
    <div class="w-2 h-2 mr-1 rounded-full bubble1" />
    <div class="w-2 h-2 mr-1 rounded-full bubble2" />
    <div class="w-2 h-2 rounded-full bubble3" />
  </div>
); 元のコード変更したよ*/

/*
export const TypingBubble = () => (
  <div class="flex items-center">
    <span class="mr-2">回答生成中</span>
    <div class="w-2 h-2 mr-1 rounded-full bubble1" />
    <div class="w-2 h-2 mr-1 rounded-full bubble2" />
    <div class="w-2 h-2 rounded-full bubble3" />
  </div>
); テキストを追加したバージョン*/

export const TypingBubble = () => (
  <div class="flex items-center">
    <span class="mr-2">回答生成中</span>
    <div class="w-2 h-2 mr-1 rounded-full bubble1" style={{ border: '1px solid black' }} />
    <div class="w-2 h-2 mr-1 rounded-full bubble2" style={{ border: '1px solid black' }} />
    <div class="w-2 h-2 rounded-full bubble3" style={{ border: '1px solid black' }} />
  </div>
);
