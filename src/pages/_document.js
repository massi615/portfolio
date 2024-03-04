import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
        <title>村上将士 ポートフォリオ</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="村上将士の職務経歴と制作実績を掲載しています。" />
        <link rel="stylesheet" href="https://use.typekit.net/hgq1pye.css"></link>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(d) {
              var config = {
                kitId: 'mxl3vey',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
              `}}
        />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
