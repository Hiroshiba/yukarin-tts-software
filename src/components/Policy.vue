<template>
  <div class="root">
    <mcw-top-app-bar>
      <div class="mdc-top-app-bar__row">
        <section
          class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
        >
          <span class="mdc-top-app-bar__title">ソフトウェアの利用規約</span>
        </section>
      </div>
    </mcw-top-app-bar>
    <div
      class="scroller mdc-top-app-bar--fixed-adjust relarive-absolute-wrapper"
    >
      <div>
        <section>
          <p>
            本ソフトウェアは、以下の禁止事項に違反しない範囲で、自由に利用することができます。
          </p>
        </section>
        <section>
          <h3>禁止事項</h3>
          <ul>
            <li>
              生成された音声を、各音声ライブラリの規約に反して利用すること
            </li>
            <li>全てまたは一部を無断で再配布すること</li>
            <li>
              逆コンパイル・リバースエンジニアリング及びこれらの方法の公開すること
            </li>
            <li>製作者または第三者に不利益をもたらす行為</li>
            <li>公序良俗に反する行為</li>
          </ul>
          <p>
            本ソフトウェアの一部を別のソフトウェアに組み込んで公開したい場合など、再配布を希望される場合は製作者にご相談ください。
          </p>
        </section>
        <section>
          <h3>免責事項</h3>
          <p>
            本ソフトウェアにより生じた損害・不利益について、製作者は一切の責任を負いません。
          </p>
        </section>
        <section>
          <h3>その他</h3>
          <p>
            生成された音声の利用に関しては、各音声ライブラリの利用規約に従ってください。
          </p>
          <p>
            ご利用いただいた際には、VOICEVOXを利用したことがわかるクレジット表記と、ホームページへのリンクを記載いただけると幸いです。
          </p>
        </section>
        <section>
          <h3>謝辞</h3>
          <p>
            <a href="https://twitter.com/ninhydrin_" target="_blank"
              >@ninhydrin</a
            >
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
.root {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.scroller {
  width: 100%;
  overflow: auto;
  > div {
    margin: 1rem;
  }
}
</style>
