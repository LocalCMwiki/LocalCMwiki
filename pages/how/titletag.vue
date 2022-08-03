<template>
  <div class="article content">
    <h1>編集方法(タイトル&タグ)</h1>
    <b-image
      src="https://lh3.googleusercontent.com/pw/AM-JKLUkZurh1-ZuedOtvhFViGwPmvZx3LAyUeLD0J-h9Urpeud5NpL8Q9hk0CGpslU0FCdLDL4ZIp6cMgKda3Q6n6tw6E0ee9YHGK_z_A25Mz01HBZneiQ9co-cLPKnH3ELlA_aArvDmpMrz6MUMeMO8Es=w887-h189-no?authuser=0"
    >
    </b-image>

    <h2>タイトルについて</h2>

    <b-image
      src="https://lh3.googleusercontent.com/pw/AM-JKLVyEOHFPl-YAySl_EH77Lj2BjEJ0QzqQQDnap1ssx7YUzZGQ_xTp7QR0BrZUekg11BsnwRYUxIePubfw3G0r_Zp91X8GhFMaej7qvxOAEXBdsI3GEKvKxnOE1KvVnYs-gZg6lA6qmn3WwD1uxbDBq8=w887-h89-no?authuser=0"
    ></b-image>

    <ul>
      <li>タイトルは50文字までです</li>
      <li>
        他県に同名の企業・団体(以下企業等)がある場合は、<span class="red"
          >〇〇(〇〇県)のように、後ろに都道府県を付けてください。</span
        >
        <ul>
          <li>例:企業A(北海道)</li>
        </ul>
      </li>
    </ul>

    <h2>タグについて</h2>

    <b-image
      src="https://lh3.googleusercontent.com/pw/AM-JKLWQ2chRyTK8HWRzwLpj9urq8gsCdY4rnc0G5Cg2TmtnHIQiVQ_IytjMLlKte3TVQRHyhqmAksdihIqtnpBON82P0Z-MRqz6CX-PMgU6Lf_goF7Mm_KQNVIiBnBab733K7wAfJPDZ-GxkTIs5FDG2E0=w886-h93-no?authuser=0"
    ></b-image>

    <ul>
      <li>タグは20個までです</li>
      <li>最低でも付けてほしいタグは「企業等名」「県もしくは地方」です。</li>
    </ul>

    <p>
      <nuxt-link to="/how/rule">←記事作成のルール</nuxt-link>
      <nuxt-link to="/how/article">記事の書き方について→</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "titletag",
  head() {
    return {
      title: "タイトル・タグのつけ方",
    };
  },
};
</script>

<style>
img {
  border: 1px solid black;
}

.red {
  color: red;
}
</style>
