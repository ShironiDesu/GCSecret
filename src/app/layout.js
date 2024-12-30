import { Manrope } from "next/font/google";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/general.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SegmentsPopup from "@/components/modals/segments/SegmentsPopup";
import ContactUs from "@/components/modals/ContactUs/ContactUs";
import Cases from "@/components/modals/cases/Cases";
import CalendarPopup from "@/components/modals/calendar/Calendar";
import AnimatedBackground from "@/components/animatedBackground/AnimatedBackground-video";
import Certificates from "@/components/modals/certificates/Сertificates";
import VideoPopup from "@/components/modals/VideoPopup/VideoPopup";
import Preloader from "@/components/preloader/Preloader";
import News from "@/components/modals/news/news";
import Head from "next/head";
import LenisInit from "@/components/Lenis";
import Script from "next/script";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weights: ["300", "400", "500", "700"],
  variable: "--manrope",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" />

        {/* 
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" media="(prefers-color-scheme: light)"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-dark-32x32.png" media="(prefers-color-scheme: dark)"/> */}
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16815312801"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {` window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date()); 

            gtag('config', 'AW-16815312801'); `}
      </Script>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KVVVN5SFKN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date()); 
                    
              gtag('config', 'G-KVVVN5SFKN');  `}
      </Script>

      <body className={`${manrope.variable} `}>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
             m[i].l=1*new Date(); 
             for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} 
             k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) 
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
                      
             ym(99247083, "init", { 
                  clickmap:true, 
                  trackLinks:true, 
                  accurateTrackBounce:true, 
                  webvisor:true 
             }); `}
        </Script>

        <Header />
        {children}
        <Footer />
        <SegmentsPopup />
        <ContactUs />
        <Cases />
        <CalendarPopup />
        <AnimatedBackground />
        <Certificates />
        <VideoPopup />
        <Preloader />
        <News />
        <LenisInit />
        <noscript>
          <iframe
            title="googletagmanager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWJ8BDS6"
            style={{ display: "none", visibility: "hidden", width: 0, height: 0 }}
          ></iframe>
        </noscript>
        <noscript>
          <div>
            <Image
              src="https://mc.yandex.ru/watch/99247083"
              style={{ position: "absolute", left: "-99999px" }}
              alt="yandex-analytic"
              width={100}
              height={100}
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
